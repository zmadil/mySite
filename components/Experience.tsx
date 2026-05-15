import { Building2, ExternalLink } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const experiences = [
  {
    company: "Chevron",
    title: "Software Engineer",
    location: "Houston, TX",
    type: "Full-time",
    period: "July 2020 – Present",
    description: [
      "Developed and deployed a full stack web application 'Sqlizer' using Azure Function Apps and Razor Pages to streamline the process of End of Life of Oracle.",
      "Utilized the power of a third-party tool called Antlr to tokenize the PLSQL statements to be converted into TSQL.",
      "Analyzed what APIs from SAP are hosted containing business location data and built an interface to pull data from those APIs. Utilized the power of Logic Apps/Function Apps.",
      "Configured the Azure Service Bus (fully managed enterprise integration message service) and wrote code in Azure Function Apps for data mapping to onboard it into the business application.",
      "Collaborated with the offshore team as well as the business owner to implement ABBYY (OCR engine) into our business application. Utilized UI Path along with ABBYY to automate the process flow.",
      "Utilized a PostgreSQL image from Docker Hub in building a docker file according to the environment needs and store it in Azure Container Registry for future use. Created a playbook to automate the provisioning of the Azure Container Instance.",
    ],
    technologies: ["Azure", "C#", "Docker", "PostgreSQL", "Razor Pages", "Logic Apps", "Azure Functions", "Antlr", "ABBYY", "UI Path"],
  },
  {
    company: "University of Houston",
    title: "Python Developer",
    location: "Houston, TX",
    type: "Part-time",
    period: "April 2020 – June 2020",
    description: [
      "Used Twitter Streaming API and Search API to scrape tweets in real-time using Python library called Tweepy.",
      "Stored the results in JSON format and refined the results and stored it to a MongoDB database.",
    ],
    technologies: ["Python", "Twitter API", "Tweepy", "MongoDB", "JSON"],
  },
  {
    company: "Scriptly RX",
    title: "Software Engineering Intern",
    location: "Houston, TX",
    type: "Internship",
    period: "Oct 2019 - February 2020",
    description: [
      "Assisted in Web development to support SEO and customer acquisition goals.",
      "Provided front end and backend support and debugged issues in production.",
    ],
    technologies: ["Web Development", "Frontend", "Backend", "Debugging"],
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
          {experiences.map((exp, index) => (
            <div key={exp.company} className={index > 0 ? "mt-12" : ""}>
              {index > 0 && (
                <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full border-2 border-[#00d4ff] bg-[#080c12]" />
              )}
              {index === 0 && (
                <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full border-2 border-[#00d4ff] bg-[#080c12]" />
              )}

              <div className="mb-2 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2">
                  <Building2 size={16} className="text-[#00d4ff]" />
                  <h3 className="text-xl font-bold text-[#f1f5f9]">{exp.company}</h3>
                </div>
                <span className="px-2 py-0.5 text-xs font-mono border border-[#1e2d3d] text-[#475569] rounded">
                  {exp.title}
                </span>
              </div>

              <p className="text-xs font-mono text-[#475569] mb-2">
                {exp.location} · {exp.type}
              </p>
              <p className="text-xs font-mono text-[#475569] mb-4">
                {exp.period}
              </p>

              <div className="mb-6">
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-sm text-[#64748b] flex gap-3">
                      <span className="text-[#00d4ff] mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-mono text-[#475569] uppercase tracking-wider mb-3">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}
