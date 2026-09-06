// src/app/testing/[slug]/loading.tsx

export default function TestingDetailLoading() {
  return (
    <main className="animate-pulse">
      {/* Hero */}
      <section className="bg-slate-950 px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="h-5 w-32 rounded bg-white/10" />

          <div className="mt-6 h-12 max-w-3xl rounded-lg bg-white/10 sm:h-16" />

          <div className="mt-6 h-5 max-w-2xl rounded bg-white/10" />
          <div className="mt-3 h-5 max-w-xl rounded bg-white/10" />

          <div className="mt-10 h-12 w-40 rounded-lg bg-white/10" />
        </div>
      </section>

      {/* Content */}
      <section className="bg-white px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="h-8 w-48 rounded bg-slate-200" />

          <div className="mt-6 space-y-3">
            <div className="h-4 max-w-3xl rounded bg-slate-200" />
            <div className="h-4 max-w-2xl rounded bg-slate-200" />
            <div className="h-4 max-w-3xl rounded bg-slate-200" />
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 p-6"
              >
                <div className="h-6 w-40 rounded bg-slate-200" />
                <div className="mt-4 h-4 w-full rounded bg-slate-200" />
                <div className="mt-2 h-4 w-4/5 rounded bg-slate-200" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
