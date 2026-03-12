import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";

const servicesData: Record<
  string,
  {
    title: string;
    tagline: string;
    description: string;
    deliverables: string[];
    technologies: string[];
    process: { step: string; title: string; description: string }[];
  }
> = {
  "cloud-solutions": {
    title: "Cloud Solutions",
    tagline: "Build, migrate, and scale with confidence in the cloud.",
    description:
      "Whether you're just beginning your cloud journey or looking to optimise an existing multi-cloud environment, Techinifity provides the expertise to design, implement, and run cloud infrastructure that's secure, cost-efficient, and built for scale.",
    deliverables: [
      "Cloud readiness & TCO assessment",
      "Architecture blueprint & design",
      "Migration planning & execution",
      "Cost optimisation & FinOps",
      "Cloud security hardening",
      "Ongoing managed cloud operations",
    ],
    technologies: ["AWS", "Azure", "Google Cloud", "Terraform", "Kubernetes", "Ansible"],
    process: [
      { step: "01", title: "Discover", description: "Assess your current infrastructure, applications, and business goals." },
      { step: "02", title: "Design", description: "Architect a target-state cloud environment aligned to your requirements." },
      { step: "03", title: "Migrate", description: "Execute a phased migration with minimal disruption to operations." },
      { step: "04", title: "Optimise", description: "Continuously tune for performance, cost, and resilience." },
    ],
  },
  cybersecurity: {
    title: "Cybersecurity",
    tagline: "Protect what matters most with proactive security.",
    description:
      "Cyber threats evolve daily. Our security team combines offensive and defensive capabilities to identify vulnerabilities, implement controls, and build a security culture within your organisation.",
    deliverables: [
      "Security risk assessment",
      "Penetration testing & red teaming",
      "Zero-trust architecture",
      "SOC setup & monitoring",
      "Incident response planning",
      "Compliance advisory (ISO 27001, SOC 2, GDPR)",
    ],
    technologies: ["CrowdStrike", "Palo Alto", "Splunk", "Wiz", "Snyk", "HashiCorp Vault"],
    process: [
      { step: "01", title: "Assess", description: "Identify your current security posture and critical risks." },
      { step: "02", title: "Prioritise", description: "Create a risk-ranked remediation roadmap." },
      { step: "03", title: "Implement", description: "Deploy technical controls and process improvements." },
      { step: "04", title: "Sustain", description: "Continuous monitoring, testing, and security awareness training." },
    ],
  },
  devops: {
    title: "DevOps & CI/CD",
    tagline: "Accelerate delivery without sacrificing quality.",
    description:
      "Our DevOps engineers help you adopt modern software delivery practices — from automated testing and containerisation to GitOps workflows and infrastructure-as-code — so you can ship faster and sleep soundly.",
    deliverables: [
      "DevOps maturity assessment",
      "CI/CD pipeline design & build",
      "Docker & Kubernetes implementation",
      "Infrastructure-as-code (Terraform)",
      "Observability stack setup",
      "Team training & enablement",
    ],
    technologies: ["GitHub Actions", "Jenkins", "Docker", "Kubernetes", "Terraform", "Datadog"],
    process: [
      { step: "01", title: "Audit", description: "Map your current SDLC and identify bottlenecks." },
      { step: "02", title: "Plan", description: "Design a target DevOps operating model." },
      { step: "03", title: "Build", description: "Implement pipelines, containers, and IaC tooling." },
      { step: "04", title: "Enable", description: "Train your team and hand over operational ownership." },
    ],
  },
  "data-analytics": {
    title: "Data & Analytics",
    tagline: "From data chaos to clear, actionable intelligence.",
    description:
      "We build the modern data stack — data warehouses, lakes, ETL pipelines, and dashboards — that gives your organisation a single source of truth and the tools to act on it.",
    deliverables: [
      "Data strategy & roadmap",
      "Data warehouse / lakehouse design",
      "ETL & ELT pipeline engineering",
      "BI dashboards & self-service reporting",
      "Data quality & governance framework",
      "Real-time streaming analytics",
    ],
    technologies: ["dbt", "Snowflake", "BigQuery", "Apache Spark", "Airflow", "Power BI"],
    process: [
      { step: "01", title: "Discover", description: "Understand your data landscape and business questions." },
      { step: "02", title: "Architect", description: "Design a scalable, governed data platform." },
      { step: "03", title: "Build", description: "Implement pipelines, models, and dashboards." },
      { step: "04", title: "Iterate", description: "Continuously expand coverage and analytical depth." },
    ],
  },
  "ai-ml": {
    title: "AI & Machine Learning",
    tagline: "Move from AI curiosity to measurable business value.",
    description:
      "Our data scientists and ML engineers build production-grade AI systems — from predictive models and NLP pipelines to LLM-powered applications — that deliver real ROI.",
    deliverables: [
      "AI opportunity assessment",
      "Custom ML model development",
      "MLOps & model deployment",
      "NLP & LLM integration",
      "Computer vision systems",
      "AI ethics & governance consulting",
    ],
    technologies: ["PyTorch", "TensorFlow", "Azure ML", "SageMaker", "OpenAI API", "Hugging Face"],
    process: [
      { step: "01", title: "Identify", description: "Find the highest-value AI use cases in your business." },
      { step: "02", title: "Experiment", description: "Rapidly prototype and validate models." },
      { step: "03", title: "Deploy", description: "Ship production-ready models with monitoring." },
      { step: "04", title: "Improve", description: "Continuously retrain and optimise model performance." },
    ],
  },
  "it-support": {
    title: "Managed IT Support",
    tagline: "Expert IT operations, 24/7, without the overhead.",
    description:
      "Our managed services team acts as your dedicated IT department — proactively monitoring, maintaining, and optimising your infrastructure so incidents are prevented before they impact your business.",
    deliverables: [
      "24/7 NOC monitoring & alerting",
      "Tier 1-3 helpdesk support",
      "Patch & vulnerability management",
      "Backup & disaster recovery",
      "Vendor management",
      "Monthly reporting & QBRs",
    ],
    technologies: ["ServiceNow", "PagerDuty", "Datadog", "Veeam", "Microsoft 365", "Jamf"],
    process: [
      { step: "01", title: "Onboard", description: "Document your environment and establish monitoring baselines." },
      { step: "02", title: "Stabilise", description: "Address immediate risks and improve operational hygiene." },
      { step: "03", title: "Operate", description: "Deliver SLA-backed support and proactive maintenance." },
      { step: "04", title: "Evolve", description: "Regular service reviews and continuous improvement." },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) return {};
  return {
    title: service.title,
    description: service.tagline,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) notFound();

  return (
    <>
      <section className="pt-32 pb-20 bg-[var(--color-muted)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-muted-foreground)] hover:text-blue-600 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-foreground)] mb-4">
            {service.title}
          </h1>
          <p className="text-xl text-blue-600 dark:text-blue-400 font-medium mb-6">
            {service.tagline}
          </p>
          <p className="text-lg text-[var(--color-muted-foreground)] leading-relaxed mb-8">
            {service.description}
          </p>
          <Link href="/contact">
            <Button size="lg" className="gap-2">
              Start a Conversation <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-background)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Deliverables */}
            <div>
              <h2 className="text-2xl font-bold text-[var(--color-foreground)] mb-6">
                What You Get
              </h2>
              <ul className="space-y-3">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                    <span className="text-[var(--color-muted-foreground)]">{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h2 className="text-2xl font-bold text-[var(--color-foreground)] mb-6">
                Technologies We Use
              </h2>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
                  <Badge key={tech} variant="blue">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="mt-10">
                <h2 className="text-2xl font-bold text-[var(--color-foreground)] mb-6">
                  Our Process
                </h2>
                <div className="space-y-4">
                  {service.process.map((p) => (
                    <div key={p.step} className="flex gap-4">
                      <span className="text-2xl font-bold text-blue-200 dark:text-blue-900 w-8 shrink-0">
                        {p.step}
                      </span>
                      <div>
                        <p className="font-semibold text-[var(--color-foreground)]">{p.title}</p>
                        <p className="text-sm text-[var(--color-muted-foreground)]">{p.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related CTA */}
      <section className="py-20 bg-[var(--color-muted)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[var(--color-foreground)] mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-[var(--color-muted-foreground)] mb-8">
            Let&apos;s discuss how {service.title} can drive value for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg">Book a Free Consultation</Button>
            </Link>
            <Link href="/case-studies">
              <Button size="lg" variant="outline">
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
