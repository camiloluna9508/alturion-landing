export default function SectionSkeleton() {
  return (
    <div className="bg-slate-depth py-20 px-5 sm:px-8 lg:px-12 animate-pulse">
      <div className="max-w-[1440px] mx-auto">
        <div className="h-4 w-32 bg-blueprint rounded-full mb-8" />
        <div className="h-10 w-3/4 bg-blueprint rounded-lg mb-4" />
        <div className="h-10 w-1/2 bg-blueprint rounded-lg mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="aspect-[329/246] bg-blueprint rounded-2xl" />
          ))}
        </div>
      </div>
    </div>
  );
}
