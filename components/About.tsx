import Image from "next/image";
import { Cpu, Cloud, Layers, Zap } from "lucide-react";

const pillars = [
  {
    icon: Cpu,
    title: "AI / LLM Infrastructure",
    desc: "Local LLMs, RAG pipelines, AI workflow automation, and inference systems at the edge.",
  },
  {
    icon: Layers,
    title: "Kubernetes & DevOps",
    desc: "Orchestrating containerized workloads across cloud and edge with GitOps, Helm, and FluxCD.",
  },
  {
    icon: Cloud,
    title: "Azure Cloud & Edge",
    desc: "Architecting event-driven, cloud-to-edge integrations using Azure IoT Operations and Arc.",
  },
  {
    icon: Zap,
    title: "Industrial IoT",
    desc: "Designing telemetry pipelines and distributed edge nodes for real-world industrial systems.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 relative">
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#1e2d3d] to-transparent pointer-events-none hidden lg:block" />

      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-xs font-mono text-[#00d4ff] tracking-widest uppercase">01 / About</span>
          <div className="flex-1 h-px bg-[#1e2d3d]" />
        </div>

        {/* Top: photo + bio side by side */}
        <div className="flex flex-col md:flex-row gap-10 items-start mb-14">
          {/* Photo */}
          <div className="shrink-0">
            <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden border border-[#1e2d3d]">
              <Image
                src="/photo.jpg"
                alt="Zain Adil"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Subtle cyan overlay on edges */}
              <div className="absolute inset-0 ring-1 ring-inset ring-[#00d4ff]/10 rounded-2xl pointer-events-none" />
            </div>
          </div>

          {/* Bio */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[#f1f5f9] mb-6 leading-tight">
              Building intelligent systems at the{" "}
              <span className="text-[#00d4ff]">intersection of AI and industry</span>
            </h2>

            <div className="space-y-4 text-[#64748b] leading-relaxed">
              <p>
                Software engineer focused on AI-enabled industrial systems, edge computing,
                Kubernetes, and intelligent automation. Experienced in designing scalable
                infrastructure across cloud and edge environments using Azure, Docker,
                Kubernetes, and event-driven architectures.
              </p>
              <p>
                Hands-on experience building AI workflows, telemetry pipelines, containerized
                infrastructure, and distributed edge systems supporting real-time industrial
                operations. Passionate about bridging AI, automation, and infrastructure to
                build intelligent and scalable engineering solutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {[
                "Edge Computing", "AI Infrastructure", "K8s Orchestration",
                "Industrial IoT", "GitOps", "Self-hosted AI",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-3 py-1 bg-[#0d1117] border border-[#1e2d3d] text-[#64748b] rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Pillar cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="p-5 bg-[#0d1117] border border-[#1e2d3d] rounded-lg hover:border-[#00d4ff]/30 transition-colors duration-300 group"
            >
              <div className="w-9 h-9 rounded border border-[#1e2d3d] flex items-center justify-center mb-4 group-hover:border-[#00d4ff]/40 transition-colors">
                <p.icon size={16} className="text-[#00d4ff]" />
              </div>
              <h3 className="text-sm font-semibold text-[#f1f5f9] mb-2">{p.title}</h3>
              <p className="text-xs text-[#475569] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
