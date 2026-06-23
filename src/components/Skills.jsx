function Skills() {

  const skills = [
    { name: "React", level: "Advanced" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "Python", level: "Intermediate" },
    { name: "Database", level: "Intermediate" },
    { name: "HTML & CSS", level: "Advanced" },
    { name: "Git & GitHub", level: "Beginner" }
  ]

  return (
    <section
      id="skills"
      className="min-h-screen py-20 bg-black text-white p-10 flex flex-col justify-center"
    >

      <h2 className="text-4xl font-bold text-center mb-10">
        My Skills
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
          >

            <h3 className="text-2xl font-bold">
              {skill.name}
            </h3>

            <p className="mt-3 text-blue-400">
              {skill.level}
            </p>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Skills