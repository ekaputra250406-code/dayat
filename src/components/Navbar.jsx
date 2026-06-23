import { useState } from "react"

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-md text-white px-6 py-4 flex justify-between items-center z-50">

      <h1 className="text-xl font-bold">
        Hidayat Eka Saputra
      </h1>

      {/* Desktop */}
      <div className="hidden md:flex gap-6">
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      {/* Mobile button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-16 right-5 bg-black p-5 flex flex-col gap-4 md:hidden rounded-lg">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      )}

    </nav>
  )
}

export default Navbar