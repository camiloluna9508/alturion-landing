export default function TechDivider({ section, label, coord }) {
  return (
    <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-3">
      <div className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] text-steel-gray/30 tracking-wider select-none">
        <span className="text-electric-cyan/30">{section}</span>
        <div className="flex-1 h-px bg-gradient-to-r from-blueprint/40 via-blueprint/20 to-transparent" />
        <span className="hidden sm:inline">{label}</span>
        <span className="hidden lg:inline text-steel-gray/20">—</span>
        <span className="hidden lg:inline text-steel-gray/20">{coord}</span>
        <div className="w-1.5 h-1.5 border border-blueprint/40 rotate-45" />
      </div>
    </div>
  );
}
