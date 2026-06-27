export default function BlueprintGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="bp-grid-sm" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#1A3A5C" strokeWidth="0.3" opacity="0.15" />
          </pattern>
          <pattern id="bp-grid-lg" width="150" height="150" patternUnits="userSpaceOnUse">
            <rect width="150" height="150" fill="url(#bp-grid-sm)" />
            <path d="M 150 0 L 0 0 0 150" fill="none" stroke="#1A3A5C" strokeWidth="0.6" opacity="0.2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#bp-grid-lg)" />
      </svg>
    </div>
  );
}
