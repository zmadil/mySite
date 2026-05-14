import { CheckCircle2 } from "lucide-react";

const metrics = [
  { value: "1,000+", label: "IIoT Sensors", sub: "tested and deployed" },
  { value: "Multi-node", label: "Edge Clusters", sub: "Kubernetes at the edge" },
  { value: "Zero-touch", label: "Provisioning", sub: "GitOps automation" },
  { value: "Real-time", label: "Telemetry", sub: "edge-to-cloud pipelines" },
];

const impacts = [
  "Streamlined testing and deployment workflows for 1,000+ IIoT sensors",
  "Contributed to operational savings through industrial monitoring initiatives",
  "Reduced infrastructure deployment time using Kubernetes and GitOps automation",
  "Designed scalable edge-to-cloud telemetry architectures",
  "Built AI-enabled distributed edge infrastructure across multiple nodes",
  "Developed local LLM and RAG-based knowledge systems",
  "Automated provisioning and orchestration workflows across cloud environments",
  "Reduced manual deployment and configuration effort through infrastructure automation",
];

export default function Impact() {
  return (
    <section id="impact" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/3 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-xs font-mono text-[#00d4ff] tracking-widest uppercase">03 / Impact</span>
          <div className="flex-1 h-px bg-[#1e2d3d]" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-[#f1f5f9] mb-4">
          Engineering Impact
        </h2>
        <p className="text-[#475569] mb-12 max-w-xl">
          Measurable outcomes from building industrial-scale AI and edge systems.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {metrics.map((m) => (
            <div
              key={m.value}
              className="p-5 bg-[#0d1117] border border-[#1e2d3d] rounded-lg text-center group hover:border-[#00d4ff]/30 transition-colors duration-300"
            >
              <div className="text-2xl font-bold text-[#00d4ff] mb-1 font-mono">
                {m.value}
              </div>
              <div className="text-sm font-semibold text-[#94a3b8] mb-0.5">{m.label}</div>
              <div className="text-xs text-[#475569]">{m.sub}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {impacts.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 p-4 bg-[#0d1117] border border-[#1e2d3d] rounded-lg hover:border-[#00d4ff]/20 transition-colors duration-300"
            >
              <CheckCircle2 size={16} className="text-[#00d4ff] mt-0.5 shrink-0" />
              <span className="text-sm text-[#64748b] leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
