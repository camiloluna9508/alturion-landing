export default function TextRoll({ text, className = '' }) {
  return (
    <span className={`inline-flex flex-col overflow-hidden h-[20px] ${className}`}>
      <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
        <span className="h-[20px] flex items-center">{text}</span>
        <span className="h-[20px] flex items-center">{text}</span>
      </span>
    </span>
  );
}
