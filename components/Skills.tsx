"use client";

const skillGroups = [
  {
    category: "AI / Machine Learning",
    color: "#818cf8",
    skills: [
      "Ollama", "Local LLMs", "RAG Pipelines",
      "AI Workflow Automation", "GitHub Copilot", "AI Inference Systems",
    ],
  },
  {
    category: "Cloud & Infrastructure",
    color: "#00d4ff",
    skills: [
      "Microsoft Azure", "Azure IoT Operations", "Azure Arc",
      "Event Grid", "IoT Hub", "Event Hub", "Blob Storage", "Azure Functions",
    ],
  },
  {
    category: "Kubernetes & DevOps",
    color: "#0ea5e9",
    skills: [
      "Kubernetes", "K3s", "Docker", "Helm",
      "GitOps", "FluxCD", "CI/CD", "Ansible",
    ],
  },
  {
    category: "Automation & Integration",
    color: "#34d399",
    skills: [
      "n8n", "MQTT", "Event-Driven Architecture",
      "API Integrations", "Workflow Automation",
    ],
  },
  {
    category: "Development",
    color: "#f59e0b",
    skills: [
      "Python", "C#", ".NET", "Razor Pages", "PostgreSQL", "MongoDB",
    ],
  },
  {
    category: "Edge & Infrastructure",
    color: "#fb7185",
    skills: [
      "Raspberry Pi", "Edge AI Systems", "Distributed Nodes",
      "Self-Hosted Infrastructure", "Telemetry Systems",
      "Reverse Proxies", "Tailscale",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-[#0a0f18]">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-xs font-mono text-[#00d4ff] tracking-widest uppercase">02 / Skills</span>
          <div className="flex-1 h-px bg-[#1e2d3d]" />
        </div>

        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f1f5f9] mb-3">
            Technical Expertise
          </h2>
          <p className="text-[#475569]">
            A deep stack spanning AI infrastructure, cloud platforms, and industrial edge systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="p-5 bg-[#0d1117] border border-[#1e2d3d] rounded-lg transition-all duration-300 group"
            >
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-1.5 h-4 rounded-full"
                  style={{ backgroundColor: group.color }}
                />
                <h3 className="text-xs font-semibold text-[#94a3b8] uppercase tracking-wider">
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded border font-mono transition-all duration-200"
                    style={{
                      borderColor: `${group.color}22`,
                      color: "#94a3b8",
                      backgroundColor: `${group.color}08`,
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = `${group.color}55`;
                      el.style.color = group.color;
                      el.style.backgroundColor = `${group.color}15`;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = `${group.color}22`;
                      el.style.color = "#94a3b8";
                      el.style.backgroundColor = `${group.color}08`;
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-[#0d1117] border border-[#1e2d3d] rounded-lg">
          <h3 className="text-xs font-mono text-[#475569] uppercase tracking-wider mb-5">
            Core Focus Areas
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "AI / LLM Infrastructure",
              "Kubernetes & Container Orchestration",
              "Azure Cloud & Edge Services",
              "Industrial IoT (IIoT)",
              "Automation & Workflow Engineering",
              "Edge Computing Systems",
            ].map((area, i) => (
              <div key={area} className="flex items-center gap-3">
                <span className="text-xs font-mono text-[#1e2d3d]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-[#64748b]">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
