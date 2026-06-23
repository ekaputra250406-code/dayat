function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-black via-gray-900 to-black px-4">

      <h1 className="text-5xl md:text-6xl font-bold">
        Hidayat Eka Saputra
      </h1>

      <p className="text-lg md:text-xl mt-5 text-gray-300">
        Informatics Student | Web Developer
      </p>

      <p className="text-sm text-gray-500 mt-3 max-w-md">
        I build modern and responsive web applications using React & modern frontend tools.
      </p>

      <a href="#projects">
        <button className="mt-8 bg-blue-600 hover:bg-blue-700 active:scale-95 transition px-8 py-3 rounded-xl font-semibold shadow-lg">
          My Projects
        </button>
      </a>

    </section>
  )
}

export default Hero