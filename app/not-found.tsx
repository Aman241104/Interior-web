import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0D1C2E] flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <div className="font-serif text-[clamp(6rem,15vw,12rem)] font-700 text-[#C4A24A] leading-none mb-4">
          404
        </div>
        <h1 className="font-serif text-[clamp(1.5rem,3vw,2.5rem)] font-300 text-[#FAF7F2] mb-4">
          Page Not Found
        </h1>
        <p className="font-sans text-base text-stone-400 leading-relaxed mb-10">
          The page you are looking for may have been moved, renamed, or does not exist.
          Let us help you find your way back.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#C4A24A] text-[#0D1C2E] font-sans text-sm font-700 tracking-wide px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity duration-200"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-stone-600 text-stone-300 font-sans text-sm font-600 tracking-wide px-8 py-3.5 rounded-full hover:border-[#C4A24A] hover:text-[#C4A24A] transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>
        <p className="font-sans text-xs text-stone-600 mt-12 tracking-widest uppercase">
          Styluxe Interior Decor · Ahmedabad
        </p>
      </div>
    </main>
  )
}
