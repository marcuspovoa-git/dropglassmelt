export default function Menu() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex flex-col items-start gap-1 px-3 py-3 md:flex-row md:items-center md:justify-between md:px-12 md:py-6 md:gap-2">
      <a href="/" className="text-[10px] md:text-sm tracking-widest font-medium text-black bg-white/80 backdrop-blur-sm px-2 py-1 md:px-3 whitespace-nowrap">
        DROP&GLASS&MELT
      </a>
      <div className="flex flex-col items-start gap-1 md:flex-row md:items-center md:gap-6 text-[10px] md:text-sm tracking-widest text-black bg-white/80 backdrop-blur-sm px-2 py-1 md:px-4">
        <a href="/ver" className="hover:opacity-60 transition-opacity">VER</a>
        <a href="/pensar" className="hover:opacity-60 transition-opacity">PENSAR</a>
        <a href="/criar" className="hover:opacity-60 transition-opacity">CRIAR</a>
      </div>
    </nav>
  )
}
