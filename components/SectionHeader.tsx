export default function SectionHeader({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-12">
      <span className="text-xs font-mono text-[#00d4ff] tracking-widest uppercase">
        {index} / {label}
      </span>
      <div className="flex-1 h-px bg-[#1e2d3d]" />
    </div>
  );
}
