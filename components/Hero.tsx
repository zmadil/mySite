"use client";

import { useEffect, useRef } from "react";
import { ArrowDown, Code2, Briefcase, Download } from "lucide-react";
import { externalLinkProps } from "@/lib/linkProps";

const TICKER_ITEMS = [
  "Kubernetes", "Azure", "Docker", "K3s", "FluxCD", "Ollama",
  "MQTT", "Helm", "Ansible", "Python", "C#", "PostgreSQL",
  "Kubernetes", "Azure", "Docker", "K3s", "FluxCD", "Ollama",
  "MQTT", "Helm", "Ansible", "Python", "C#", "PostgreSQL",
];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();

    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(setSize, 150);
    };
    window.addEventListener("resize", onResize);

    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      pulse: number;
    }

    const nodes: Node[] = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 1.5 + 0.5,
      pulse: Math.random() * Math.PI * 2,
    }));

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += 0.02;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distSq = dx * dx + dy * dy;
          if (distSq < 14400) {
            const dist = Math.sqrt(distSq);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 212, 255, ${(1 - dist / 120) * 0.12})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      nodes.forEach((n) => {
        const alpha = 0.3 + 0.2 * Math.sin(n.pulse);
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${alpha})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden hero-gradient grid-bg"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.6 }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1e2d3d] bg-[#0d1117]/80 text-xs font-mono text-[#00d4ff] mb-8 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] animate-pulse" />
          Available for opportunities
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-[#f1f5f9] mb-4 tracking-tight">
          Zain{" "}
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(135deg, #00d4ff 0%, #0ea5e9 50%, #818cf8 100%)",
            }}
          >
            Adil
          </span>
        </h1>

        <p className="text-lg md:text-2xl text-[#94a3b8] mb-3 font-light max-w-2xl mx-auto">
          Software Engineer specializing in{" "}
          <span className="text-[#00d4ff]">AI</span>,{" "}
          <span className="text-[#0ea5e9]">Edge Computing</span>, and{" "}
          <span className="text-[#818cf8]">IIoT</span>
        </p>

        <p className="text-sm md:text-base text-[#475569] mb-12 max-w-xl mx-auto leading-relaxed">
          Building intelligent systems across cloud, edge, and real-world industrial operations.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#projects"
            className="px-6 py-3 bg-[#00d4ff] text-[#080c12] rounded font-semibold text-sm hover:bg-[#00d4ff]/90 transition-all duration-200 hover:shadow-lg hover:shadow-[#00d4ff]/25"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-[#1e2d3d] text-[#94a3b8] rounded font-semibold text-sm hover:border-[#00d4ff]/40 hover:text-[#00d4ff] transition-all duration-200"
          >
            Get in Touch
          </a>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/zmadil"
            {...externalLinkProps("https://github.com/zmadil")}
            className="text-[#475569] hover:text-[#00d4ff] transition-colors duration-200"
            aria-label="GitHub"
          >
            <Code2 size={20} />
          </a>
          <a
            href="https://linkedin.com/in/zainadil"
            {...externalLinkProps("https://linkedin.com/in/zainadil")}
            className="text-[#475569] hover:text-[#00d4ff] transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Briefcase size={20} />
          </a>
          <a
            href="/resume.pdf"
            className="text-[#475569] hover:text-[#00d4ff] transition-colors duration-200"
            aria-label="Download Resume"
          >
            <Download size={20} />
          </a>
        </div>
      </div>

      <div className="absolute bottom-24 left-0 right-0 overflow-hidden">
        <div className="flex gap-6 animate-[scroll_30s_linear_infinite] whitespace-nowrap">
          {TICKER_ITEMS.map((tech, i) => (
            <span
              key={i}
              className="text-xs font-mono text-[#1e2d3d] px-3 py-1 border border-[#1e2d3d]/60 rounded shrink-0"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#1e2d3d] hover:text-[#00d4ff] transition-colors duration-200 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
