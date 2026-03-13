export default function BlogLoading() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero skeleton */}
        <div className="text-center mb-16">
          <div className="h-4 w-20 bg-slate-200 dark:bg-slate-700 rounded mx-auto mb-4 animate-pulse" />
          <div className="h-10 w-80 bg-slate-200 dark:bg-slate-700 rounded mx-auto mb-4 animate-pulse" />
          <div className="h-6 w-96 bg-slate-200 dark:bg-slate-700 rounded mx-auto animate-pulse" />
        </div>
        {/* Card skeletons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 space-y-4 animate-pulse"
            >
              <div className="flex gap-2">
                <div className="h-5 w-16 bg-slate-200 dark:bg-slate-700 rounded-full" />
                <div className="h-5 w-12 bg-slate-200 dark:bg-slate-700 rounded-full" />
              </div>
              <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded" />
              <div className="h-6 w-4/5 bg-slate-200 dark:bg-slate-700 rounded" />
              <div className="space-y-2">
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded" />
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded" />
                <div className="h-4 w-3/4 bg-slate-200 dark:bg-slate-700 rounded" />
              </div>
              <div className="h-px bg-slate-200 dark:bg-slate-700" />
              <div className="flex justify-between">
                <div className="h-4 w-24 bg-slate-200 dark:bg-slate-700 rounded" />
                <div className="h-4 w-16 bg-slate-200 dark:bg-slate-700 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
