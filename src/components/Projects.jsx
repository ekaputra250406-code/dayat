function Projects() {
  const projects = [
    {
      title: "Face Detection System",
      desc: "Sistem deteksi wajah menggunakan Python dan computer vision.",
      tech: "Python, OpenCV"
    },
    {
      title: "Web Portfolio",
      desc: "Website portofolio pribadi menggunakan React + Vite.",
      tech: "React, Tailwind"
    },
    {
      title: "Student Management System",
      desc: "Aplikasi manajemen data mahasiswa berbasis database.",
      tech: "PHP, MySQL"
    }
  ]

  return (
    <section
      id="projects"
      className="min-h-screen py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white px-6"
    >

      <h2 className="text-4xl font-bold text-center mb-14">
        My Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {projects.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-lg 
            hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-300"
          >

            <h3 className="text-xl font-bold text-blue-400">
              {item.title}
            </h3>

            <p className="mt-3 text-gray-300 text-sm">
              {item.desc}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {item.tech.split(", ").map((t, i) => (
                <span
                  key={i}
                  className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full border border-blue-500/30"
                >
                  {t}
                </span>
              ))}
            </div>

          </div>
        ))}

      </div>
    </section>
  )
}

export default Projects