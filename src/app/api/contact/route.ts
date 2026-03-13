import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(20),
});

// Basic in-memory rate limiter: max 5 requests per IP per 10 minutes
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const WINDOW_MS = 10 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(req: NextRequest) {
  // Rate limiting
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 },
    );
  }

  try {
    const body = await req.json();
    const data = schema.parse(body);

    if (!resend) {
      // Allow form submission in dev without a real key — just log
      console.log("Contact form submission (no RESEND_API_KEY):", data);
      return NextResponse.json({ success: true });
    }

    await resend.emails.send({
      from: "Techinifity Contact <no-reply@techinifity.com>",
      to: process.env.CONTACT_EMAIL ?? "hello@techinifity.com",
      replyTo: data.email,
      subject: `New enquiry from ${data.name}${data.company ? ` (${data.company})` : ""}`,
      text: [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        data.company ? `Company: ${data.company}` : "",
        data.service ? `Service: ${data.service}` : "",
        "",
        `Message:\n${data.message}`,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", issues: error.issues },
        { status: 422 },
      );
    }
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}
