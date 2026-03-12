import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(20),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      // Allow form submission in dev without a real key — just log
      console.log("Contact form submission (no RESEND_API_KEY):", data);
      return NextResponse.json({ success: true });
    }

    // Send via Resend
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

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
      return NextResponse.json({ error: "Invalid form data", issues: error.issues }, { status: 422 });
    }
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
