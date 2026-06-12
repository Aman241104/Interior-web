interface SectionLabelProps {
  text: string;
  light?: boolean;
  className?: string;
}

export default function SectionLabel({ text, light = false, className = "" }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`h-px w-10 ${light ? "bg-cream-300/50" : "bg-gold"}`} />
      <span
        className={`font-sans text-xs font-700 tracking-[0.2em] uppercase ${
          light ? "text-cream-300/70" : "text-gold"
        }`}
      >
        {text}
      </span>
    </div>
  );
}
