import { Users, Award, BadgeCheck } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const leadership = [
  "Mentored interns and new hires on engineering best practices",
  "Participated in recruiting and university outreach programs",
  "Supported hackathons and datathons as technical advisor",
  "Led technical onboarding and knowledge sharing sessions",
  "Participated in engineering presentations and technical demonstrations",
];

const certifications = [
  { name: "Microsoft Azure AZ-204", issuer: "Microsoft", type: "Cloud", color: "#00d4ff" },
  { name: "Microsoft Azure AZ-900", issuer: "Microsoft", type: "Cloud", color: "#0ea5e9" },
  { name: "Certified Scrum Master", issuer: "Scrum Alliance", type: "Agile", color: "#818cf8" },
  { name: "Certified SAFe Practitioner", issuer: "Scaled Agile", type: "Agile", color: "#818cf8" },
  { name: "ABBYY FlexiCapture Specialist", issuer: "ABBYY", type: "Specialist", color: "#f59e0b" },
  { name: "IBM Python for Data Science", issuer: "IBM", type: "Data", color: "#34d399" },
];

export default function LeadershipCerts() {
  return (
    <section id="leadership" className="py-28 px-6 bg-[#0a0f18]">
      <div className="max-w-5xl mx-auto">
        <SectionHeader index="06" label="Leadership & Certs" />

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Users size={18} className="text-[#00d4ff]" />
              <h2 className="text-2xl font-bold text-[#f1f5f9]">Leadership & Mentorship</h2>
            </div>
            <p className="text-[#475569] text-sm mb-8 leading-relaxed">
              Engineering is a team sport. Committed to growing the next generation
              of engineers and fostering a culture of knowledge sharing.
            </p>
            <div className="space-y-3">
              {leadership.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 p-4 bg-[#0d1117] border border-[#1e2d3d] rounded-lg hover:border-[#00d4ff]/20 transition-colors"
                >
                  <div className="w-1 h-1 rounded-full bg-[#00d4ff] mt-2 shrink-0" />
                  <p className="text-sm text-[#64748b] leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-6">
              <Award size={18} className="text-[#00d4ff]" />
              <h2 className="text-2xl font-bold text-[#f1f5f9]">Certifications</h2>
            </div>
            <p className="text-[#475569] text-sm mb-8 leading-relaxed">
              Industry certifications validating cloud, agile, and technical expertise.
            </p>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-center gap-4 p-4 bg-[#0d1117] border border-[#1e2d3d] rounded-lg hover:border-[#00d4ff]/20 transition-colors"
                >
                  <div
                    className="w-9 h-9 rounded border flex items-center justify-center shrink-0"
                    style={{ borderColor: `${cert.color}30`, backgroundColor: `${cert.color}0a` }}
                  >
                    <BadgeCheck size={16} style={{ color: cert.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-[#94a3b8] truncate">{cert.name}</p>
                    <p className="text-xs text-[#475569]">{cert.issuer}</p>
                  </div>
                  <span
                    className="text-xs font-mono px-2 py-0.5 rounded border shrink-0"
                    style={{
                      borderColor: `${cert.color}25`,
                      color: cert.color,
                      backgroundColor: `${cert.color}08`,
                    }}
                  >
                    {cert.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
