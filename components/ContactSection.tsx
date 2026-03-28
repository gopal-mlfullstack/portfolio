import Link from "next/link";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 bg-gray-900 px-6 scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-purple-400">
            Get In Touch
          </span>
          <h2 className="text-4xl font-bold text-white mt-2">Contact</h2>
          <p className="text-gray-400 mt-4 max-w-md">
            Open to collaboration, projects, and learning opportunities.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="flex flex-col items-center gap-4 max-w-md mx-auto w-full">
          {/* Email */}
          <a
            href="mailto:gopalmahatoinfo@gmail.com"
            className="w-full flex items-center gap-4 p-4 bg-gray-800 border border-gray-700 rounded-xl hover:border-purple-500/50 transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-purple-900/40 flex items-center justify-center text-purple-400">
              📧
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                Email
              </p>
              <p className="text-sm text-white font-medium">
                gopalmahatoinfo@gmail.com
              </p>
            </div>
          </a>

          {/* GitHub */}
          <Link
            href="https://github.com/gopal-mlfullstack"
            target="_blank"
            className="w-full flex items-center gap-4 p-4 bg-gray-800 border border-gray-700 rounded-xl hover:border-purple-500/50 transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-purple-900/40 flex items-center justify-center text-purple-400">
              💻
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                GitHub
              </p>
              <p className="text-sm text-white font-medium">
                gopal-mlfullstack
              </p>
            </div>
          </Link>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-600 text-xs mt-16">
          Built by Gopal Mahato · {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}
