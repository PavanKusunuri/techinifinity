import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CTA } from "@/components/sections/CTA";
import { Target, Eye, Heart, Users, Award, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Techinifity — our mission, values, and the expert team driving digital transformation for businesses worldwide.",
  keywords: [
    "about Techinifity",
    "IT consultancy team",
    "technology experts",
    "cloud architects",
    "DevOps engineers",
    "digital transformation team",
    "IT leadership",
  ],
  alternates: {
    canonical: "https://techinifity.com/about",
  },
  openGraph: {
    type: "website",
    url: "https://techinifity.com/about",
    title: "About Us | Techinifity",
    description:
      "Meet the expert team behind Techinifity — experienced consultants driving cloud, cybersecurity, DevOps, and AI transformation.",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Techinifity Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Techinifity",
    description:
      "Meet the expert team behind Techinifity — experienced consultants driving technology transformation.",
    images: ["/og/default.png"],
  },
};

const team = [
  {
    name: "Venkata S",
    role: "Senior Architect",
    bio: "20 years of experience building mission-critical systems across cloud, web, and infrastructure. Renowned for delivering reliability under pressure.",
    avatar: "SA",
    skills: [
      "Solution Architecture",
      "Software Architecture",
      "Cloud Architecture",
      "Microservices",
      "System Design",
      "DevOps & CI/CD",
      "AWS/Azure",
      "Kubernetes",
      "Security & Compliance",
      "Scalability & Performance",
      "Disaster Recovery",
      "Technical Leadership",
    ],
    highlight: false,
  },
  {
    name: "Pavan K",
    role: "Senior Software Engineer",
    bio: "6+ years building enterprise and SaaS platforms across healthcare and aviation. Architected scalable REST APIs, modular React UIs, and the GlobalCalqulate multi-country financial calculator platform — with a strong focus on performance, microservices, and production reliability.",
    avatar: "PK",
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "Python",
      "Django",
      "PostgreSQL",
      "MongoDB",
      "REST APIs",
      "Tailwind CSS",
      "Microservices",
      "Git/GitHub",
    ],
  },
  {
    name: "K Koushik",
    role: "Full Stack Engineer",
    bio: "Versatile full-stack engineer across the entire web stack — from pixel-perfect React and Next.js frontends to scalable Node/Express APIs and cloud deployments on AWS. Equally comfortable designing in Figma and analysing data in Power BI.",
    avatar: "KO",
    skills: [
      "React",
      "Next.js",
      "Angular",
      "TypeScript",
      "Node.js",
      "REST APIs",
      "MongoDB",
      "SQL",
      "Firebase",
      "AWS",
      "Python",
      "Java",
      "Tailwind CSS",
      "Figma",
    ],
  },
  {
    name: "Aslam F",
    role: "SharePoint & Power Platform Engineer",
    bio: "Specialist in Microsoft 365 ecosystem — from SharePoint Online administration and OOTB solutions to building Canvas and Model-driven Power Apps with automated workflows. Bridges cloud, database, and front-end layers to deliver seamless enterprise collaboration platforms.",
    avatar: "AF",
    skills: [
      "SharePoint Online",
      "Power Apps",
      "Power Automate",
      "Azure",
      "SQL Server",
      "JavaScript",
      "HTML/CSS",
      "C++",
    ],
  },
  {
    name: "G Mohan",
    role: "Mobile Solutions Lead",
    bio: "Cross-platform mobile specialist with deep expertise in Flutter, Firebase, and cloud-native app architecture. Delivers high-performance Android & iOS apps with a focus on UX excellence, stability, and Agile delivery.",
    avatar: "GM",
    skills: [
      "Flutter",
      "Firebase",
      "Google Cloud",
      "Python",
      "REST/GraphQL",
      "Git/GitHub",
      "Crashlytics",
      "FCM",
      "Android",
      "iOS",
    ],
  },
  {
    name: "Lohit",
    role: "Full Stack Engineer",
    bio: "Versatile full-stack engineer with strong roots in PHP ecosystems and modern JavaScript stacks. Experienced in building and launching production-grade web applications using Laravel, Express.js, and React — covering everything from server setup, database design, and SSL configuration to payment gateway integrations, push notification services, and third-party API integrations. Brings a pragmatic, vibe-coding energy to rapid prototyping and architecture design.",
    avatar: "LO",
    skills: [
      "PHP",
      "Node.js",
      "Laravel",
      "CodeIgniter",
      "CakePHP",
      "Express.js",
      "React.js",
      "Next.js",
      "JavaScript",
      "jQuery",
      "Tailwind CSS",
      "MySQL",
      "MongoDB",
      "AWS",
      "Google Cloud",
      "Azure",
      "nginx",
      "FCM/GCM",
      "Git/GitHub",
      "Postman",
    ],
  },
];

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "Every engagement is measured against clear business outcomes and ROI.",
  },
  {
    icon: Heart,
    title: "Client-First",
    description:
      "Your success is our success. We go beyond the brief to deliver real impact.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We hold ourselves to the highest standards of technical and delivery quality.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We work as an extension of your team, not an external vendor.",
  },
  {
    icon: Globe,
    title: "Innovation",
    description:
      "Staying at the frontier of technology to bring you the best solutions.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Clear communication, honest timelines, and no surprises.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[var(--color-muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-blue-600 dark:text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Our Story
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-foreground)] mb-6">
            We Help Businesses Thrive
            <br />
            in the Digital Age
          </h1>
          <p className="text-base sm:text-xl text-[var(--color-muted-foreground)] max-w-3xl mx-auto leading-relaxed">
            Founded in 2010, Techinifity has grown from a boutique consultancy
            to a trusted technology partner for over 50 enterprises across 12
            countries. Our mission is simple: make excellent technology
            accessible to every business.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="h-2 bg-blue-600" />
              <CardContent className="pt-6">
                <Target className="w-10 h-10 text-blue-600 mb-4" />
                <h2 className="text-2xl font-bold mb-3 text-[var(--color-foreground)]">
                  Our Mission
                </h2>
                <p className="text-[var(--color-muted-foreground)] leading-relaxed">
                  To empower organisations of every size to harness the full
                  potential of modern technology — through expert guidance,
                  pragmatic implementation, and a genuine commitment to
                  long-term success.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="h-2 bg-slate-800 dark:bg-slate-200" />
              <CardContent className="pt-6">
                <Eye className="w-10 h-10 text-slate-700 dark:text-slate-300 mb-4" />
                <h2 className="text-2xl font-bold mb-3 text-[var(--color-foreground)]">
                  Our Vision
                </h2>
                <p className="text-[var(--color-muted-foreground)] leading-relaxed">
                  A world where technology is not a barrier but a bridge —
                  connecting ideas to outcomes, businesses to customers, and
                  teams to their full potential. We see a future where every
                  organisation operates with digital confidence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[var(--color-muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="What We Stand For"
            title="Our Core Values"
            description="These principles guide every decision we make and every service we deliver."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <Card key={v.title} className="text-center p-6">
                  <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-950 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg text-[var(--color-foreground)] mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-[var(--color-muted-foreground)]">
                    {v.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="The People Behind It"
            title="Meet Our Leadership Team"
            description="Experienced consultants and technologists who are passionate about solving hard problems."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <Card
                key={member.name}
                hover
                className={`text-center ${"highlight" in member && member.highlight ? "ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-slate-900" : ""}`}
              >
                <CardContent className="flex flex-col items-center py-8">
                  {"highlight" in member && member.highlight && (
                    <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-blue-600 text-white text-xs font-semibold mb-4">
                      ★ Featured
                    </span>
                  )}
                  <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl font-bold mb-4">
                    {member.avatar}
                  </div>
                  <h3 className="font-semibold text-lg text-[var(--color-foreground)]">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-[var(--color-muted-foreground)] text-sm text-center mb-4">
                    {member.bio}
                  </p>
                  {"skills" in member && member.skills && (
                    <div className="flex flex-wrap justify-center gap-1.5">
                      {(member.skills as string[]).map((skill) => (
                        <Badge key={skill} variant="blue">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
