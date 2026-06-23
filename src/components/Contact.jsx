function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen py-20 bg-black text-white flex items-center justify-center px-6"
    >
      <div className="max-w-3xl w-full">

        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-10">
          Contact Me
        </h2>

        {/* Form */}
        <form className="flex flex-col gap-5">

          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg bg-white text-black outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg bg-white text-black outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            className="p-3 rounded-lg bg-white text-black outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            className="bg-blue-600 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
          >
            Send Message
          </button>

        </form>

        {/* Contact Info */}
        <div className="text-center mt-10 text-gray-400 space-y-1">

          <p>Email: ekaputra250406@gmail.com</p>
          <p>Instagram: @eka.putra</p>
          <p>TikTok: @eka.putra</p>
          <p>WhatsApp: +62 81374523231</p>

        </div>

      </div>
    </section>
  );
}

export default Contact;