import { Briefcase, Mail, Download, ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { externalLinkProps } from "@/lib/linkProps";

const links = [
  {
    icon: Briefcase,
    label: "LinkedIn",
    sub: "linkedin.com/in/zain-adil",
    href: "https://www.linkedin.com/in/zain-adil/",
    color: "#0ea5e9",
  },
  {
    icon: Mail,
    label: "Email",
    sub: "zainmadil95@gmail.com",
    href: "mailto:zainmadil95@gmail.com",
    color: "#00d4ff",
  },
  {
    icon: Download,
    label: "Resume",
    sub: "Download PDF",
    href: "/resume.pdf",
    color: "#818cf8",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#00d4ff]/4 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <SectionHeader index="07" label="Contact" />

        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f1f5f9] mb-4">
            Let&apos;s build something{" "}
            <span className="text-[#00d4ff]">intelligent</span> together
          </h2>
          <p className="text-[#475569] mb-12 leading-relaxed">
            Open to new opportunities in AI infrastructure, edge computing, and industrial systems.
            Whether you&apos;re building at the edge or scaling AI in the cloud, let&apos;s connect.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...externalLinkProps(link.href)}
              className="group p-5 bg-[#0d1117] border border-[#1e2d3d] rounded-lg hover:border-[#00d4ff]/30 transition-all duration-300 flex flex-col gap-3"
            >
              <div
                className="w-10 h-10 rounded border flex items-center justify-center transition-colors duration-300"
                style={{ borderColor: `${link.color}25`, backgroundColor: `${link.color}08` }}
              >
                <link.icon size={18} style={{ color: link.color }} />
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  <p className="text-sm font-semibold text-[#94a3b8]">{link.label}</p>
                  <ArrowUpRight size={12} className="text-[#1e2d3d] group-hover:text-[#475569] transition-colors" />
                </div>
                <p className="text-xs text-[#475569] truncate">{link.sub}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="pt-8 border-t border-[#1e2d3d] flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-[#1e2d3d] font-mono">
            © 2025 Zain Adil · Built with Next.js & Tailwind CSS
          </p>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse" />
            <span className="text-xs font-mono text-[#475569]">Open to opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
}
