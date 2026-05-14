import { Building2, ExternalLink } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const techUsed = [
  "Kubernetes", "Azure", "Docker", "MQTT", "Azure IoT Operations",
  "Event Grid", "IoT Hub", "Event Hub", "Blob Storage", "Helm",
  "GitOps", "Ansible", "PostgreSQL", "Razor Pages", "Azure Functions",
];

const focusAreas = [
  "Industrial IoT systems",
  "Edge computing infrastructure",
  "Kubernetes orchestration",
  "AI-enabled edge deployments",
  "Cloud-to-edge integrations",
  "Telemetry systems",
  "Automation engineering",
  "GitOps workflows",
  "Event-driven architecture",
];

const highlights = [
  {
    title: "Leak Detection Platform",
    desc: "Edge-to-cloud telemetry architecture with scalable industrial deployment infrastructure and Azure-based event-driven integrations.",
  },
  {
    title: "AI-Enabled Edge Infrastructure",
    desc: "Distributed Kubernetes edge nodes with real-time telemetry processing and containerized inference systems.",
  },
  {
    title: "GitOps Deployment Platform",
    desc: "Automated infrastructure provisioning with CI/CD workflows for edge environments and Kubernetes deployment automation.",
  },
  {
    title: "Distributed Edge Nodes",
    desc: "Remote sensor management, container orchestration, and cloud-edge integrations supporting industrial operations.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 bg-[#0a0f18]">
      <div className="max-w-5xl mx-auto">
        <SectionHeader index="04" label="Experience" />

        <h2 className="text-3xl md:text-4xl font-bold text-[#f1f5f9] mb-12">
          Professional Experience
        </h2>

        <div className="relative pl-6 border-l border-[#1e2d3d]">
          <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full border-2 border-[#00d4ff] bg-[#080c12]" />

          <div className="mb-2 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <Building2 size={16} className="text-[#00d4ff]" />
              <h3 className="text-xl font-bold text-[#f1f5f9]">Chevron</h3>
            </div>
            <span className="px-2 py-0.5 text-xs font-mono border border-[#1e2d3d] text-[#475569] rounded">
              Software Engineer
            </span>
          </div>

          <p className="text-xs font-mono text-[#475569] mb-8">
            Houston, TX · Full-time
          </p>

          <div className="grid lg:grid-cols-2 gap-8 mb-10">
            <div>
              <h4 className="text-xs font-mono text-[#475569] uppercase tracking-wider mb-4">
                Focus Areas
              </h4>
              <div className="space-y-2.5">
                {focusAreas.map((area) => (
                  <div key={area} className="flex items-center gap-2.5">
                    <div className="w-1 h-1 rounded-full bg-[#00d4ff]" />
                    <span className="text-sm text-[#64748b]">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-mono text-[#475569] uppercase tracking-wider mb-4">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {techUsed.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded border border-[#1e2d3d] text-[#475569] font-mono bg-[#0d1117]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono text-[#475569] uppercase tracking-wider mb-4">
              Highlighted Work
            </h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((h) => (
                <div
                  key={h.title}
                  className="p-4 bg-[#0d1117] border border-[#1e2d3d] rounded-lg hover:border-[#00d4ff]/25 transition-colors duration-300"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h5 className="text-sm font-semibold text-[#94a3b8]">{h.title}</h5>
                    <ExternalLink size={12} className="text-[#1e2d3d] mt-0.5 shrink-0" />
                  </div>
                  <p className="text-xs text-[#475569] leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
