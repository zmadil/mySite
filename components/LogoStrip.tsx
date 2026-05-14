const companies = [
  "Chevron",
  "Microsoft Azure",
  "Kubernetes",
  "Docker",
  "Azure IoT",
  "FluxCD",
  "Ollama",
  "n8n",
  "Ansible",
  "Tailscale",
];

export default function LogoStrip() {
  const doubled = [...companies, ...companies];

  return (
    <section className="py-12 border-y border-[#1e1e1e] overflow-hidden">
      <div className="flex gap-12 ticker whitespace-nowrap">
        {doubled.map((name, i) => (
          <span
            key={i}
            className="text-sm text-[#404040] font-medium tracking-wide shrink-0"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
