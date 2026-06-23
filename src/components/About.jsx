function About() {
  return (
    <section
      id="about"
      className="min-h-screen py-20 bg-blue-50 flex items-center justify-center px-6"
    >
      <div className="max-w-4xl text-center">

        {/* Title */}
        <h2 className="text-4xl font-bold mb-6 text-blue-700">
          About Me
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-700 leading-relaxed">
          Halo, saya Hidayat Eka Saputra.  
          Saya adalah mahasiswa Informatika yang memiliki ketertarikan pada pengembangan website, teknologi, dan pembuatan sistem digital.

          <br /><br />

          Saya sedang belajar dan mengembangkan kemampuan dalam React, pemrograman, database, serta teknologi modern untuk membangun solusi digital.
        </p>

        {/* Cards Section */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          {/* Education */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-xl text-blue-600 mb-2">
              Education
            </h3>
            <p className="text-gray-700">
              Informatika
            </p>
          </div>

          {/* Focus */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-xl text-blue-600 mb-2">
              Focus
            </h3>
            <p className="text-gray-700">
              Web Development
            </p>
          </div>

          {/* Interest */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-xl text-blue-600 mb-2">
              Interest
            </h3>
            <p className="text-gray-700">
              Technology & Innovation
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;