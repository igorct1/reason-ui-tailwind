export default function Home() {
  return (
    <div className="h-screen bg-slate-50 p-8 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      <h1 className="flex items-center gap-4 text-3xl font-bold before:inline-block before:h-6 before:w-0.5 before:bg-sky-500 sm:text-5xl md:text-6xl lg:text-7xl">
        Hello Tailwind
      </h1>

      <button className="mt-4 rounded-md bg-sky-500 p-2 px-4 font-semibold text-white hover:enabled:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-60">
        Sign In
      </button>
    </div>
  )
}
