"use client";

import { useState } from "react";
import { ExternalLink, Layers, Terminal } from "lucide-react";

const professional = [
  {
    title: "Industrial Leak Detection Platform",
    desc: "Edge-to-cloud telemetry architecture for scalable industrial deployment with Azure-based event-driven integrations.",
    tags: ["Azure", "Edge Computing", "Telemetry", "Event-Driven"],
    color: "#00d4ff",
  },
  {
    title: "AI-Enabled Edge Infrastructure",
    desc: "Distributed Kubernetes edge nodes with real-time telemetry processing and containerized AI inference systems.",
    tags: ["Kubernetes", "AI Inference", "Docker", "K3s"],
    color: "#818cf8",
  },
  {
    title: "Azure IoT Operations Deployments",
    desc: "Arc-enabled Kubernetes clusters with MQTT integrations and edge data transformation pipelines.",
    tags: ["Azure Arc", "MQTT", "IoT Hub", "Kubernetes"],
    color: "#0ea5e9",
  },
  {
    title: "GitOps Deployment Platform",
    desc: "Automated infrastructure provisioning with Kubernetes deployment automation and CI/CD workflows for edge environments.",
    tags: ["GitOps", "FluxCD", "Helm", "Ansible"],
    color: "#34d399",
  },
  {
    title: "Sqlizer Web Application",
    desc: "Full stack internal tooling platform built with Azure Function Apps and Razor Pages integration.",
    tags: ["C#", "Azure Functions", "Razor Pages", "PostgreSQL"],
    color: "#f59e0b",
  },
];

const personal = [
  {
    title: "Local AI Infrastructure Platform",
    desc: "Self-hosted LLM environment with Ollama deployments, RAG pipeline experimentation, and AI workflow integrations.",
    tags: ["Ollama", "RAG", "LLMs", "Self-hosted"],
    color: "#818cf8",
  },
  {
    title: "Home Assistant Smart Infrastructure",
    desc: "Self-hosted home automation platform with MQTT-based integrations and real-time automation systems.",
    tags: ["Home Assistant", "MQTT", "Automation"],
    color: "#34d399",
  },
  {
    title: "Frigate AI Surveillance System",
    desc: "AI-enabled video processing with edge-based camera infrastructure and object detection workflows.",
    tags: ["Edge AI", "Object Detection", "Camera", "Frigate"],
    color: "#fb7185",
  },
  {
    title: "n8n Automation Ecosystem",
    desc: "Workflow orchestration platform with Telegram integrations, AI-enhanced automation, and data processing pipelines.",
    tags: ["n8n", "Telegram", "AI Automation", "Workflows"],
    color: "#f59e0b",
  },
  {
    title: "Kubernetes Edge Lab",
    desc: "K3s infrastructure experimentation with GitOps deployments, edge compute orchestration, and infrastructure automation.",
    tags: ["K3s", "GitOps", "Edge Compute", "FluxCD"],
    color: "#00d4ff",
  },
  {
    title: "Raspberry Pi Deployment Systems",
    desc: "Automated provisioning systems with Docker-based deployment pipelines for plug-and-play edge infrastructure.",
    tags: ["Raspberry Pi", "Docker", "Provisioning", "Edge"],
    color: "#0ea5e9",
  },
];

type Tab = "professional" | "personal";

function ProjectCard({
  title,
  desc,
  tags,
  color,
}: {
  title: string;
  desc: string;
  tags: string[];
  color: string;
}) {
  return (
    <div className="group p-5 bg-[#0d1117] border border-[#1e2d3d] rounded-lg hover:border-[#00d4ff]/25 transition-all duration-300 flex flex-col">
      <div
        className="h-px mb-5 transition-all duration-300 group-hover:opacity-100 opacity-0"
        style={{ backgroundColor: color }}
      />

      <div className="flex items-start justify-between gap-2 mb-3">
        <h3 className="text-sm font-semibold text-[#f1f5f9] leading-snug">{title}</h3>
        <ExternalLink size={13} className="text-[#1e2d3d] group-hover:text-[#475569] transition-colors shrink-0 mt-0.5" />
      </div>

      <p className="text-xs text-[#475569] leading-relaxed mb-4 flex-1">{desc}</p>

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 font-mono rounded border"
            style={{
              borderColor: `${color}25`,
              color: "#64748b",
              backgroundColor: `${color}08`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const [tab, setTab] = useState<Tab>("professional");

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-xs font-mono text-[#00d4ff] tracking-widest uppercase">05 / Projects</span>
          <div className="flex-1 h-px bg-[#1e2d3d]" />
        </div>

        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#f1f5f9] mb-2">
              Featured Work
            </h2>
            <p className="text-[#475569]">
              From industrial infrastructure to personal AI labs.
            </p>
          </div>

          <div className="flex gap-1 p-1 bg-[#0d1117] border border-[#1e2d3d] rounded-lg">
            <button
              onClick={() => setTab("professional")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono transition-all duration-200 ${
                tab === "professional"
                  ? "bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/25"
                  : "text-[#475569] hover:text-[#94a3b8]"
              }`}
            >
              <Layers size={12} />
              Professional
            </button>
            <button
              onClick={() => setTab("personal")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono transition-all duration-200 ${
                tab === "personal"
                  ? "bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/25"
                  : "text-[#475569] hover:text-[#94a3b8]"
              }`}
            >
              <Terminal size={12} />
              Lab / Personal
            </button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {(tab === "professional" ? professional : personal).map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
