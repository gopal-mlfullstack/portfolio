import Link from "next/link";
import ProjectPasswordGenerator from "../public/password_genrator.png";
import Image from "next/image";
export default function ProjectSection() {
  return (
    <section id="projects" className="py-24 bg-gray-950 px-6 scroll-mt-20">
      {" "}
      {/*  section wrapper  */}
      <div className="max-w-6xl mx-auto w-full">
        {" "}
        {/* inner container (same max-w-6xl) */}
        <div className="flex flex-col items-center text-center mb-16">
          {" "}
          {/* section header */}
          <span className="text-sm uppercase tracking-widest text-purple-400">
            My Work
          </span>
          <h2 className="text-4xl font-bold text-white mt-2">Projects</h2>
          <p className="text-gray-400 mt-4 max-w-md">
            A growing collection of projects demonstrating my skills in building
            responsive, user-focused web applications using modern tools and
            technologies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {" "}
          {/* cards grid  */}
          {/* project card 1 */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-colors">
            {" "}
            {/* card wrapper */}
            <div>
              {" "}
              {/* card top (image or color banner) */}
              <Image
                src={ProjectPasswordGenerator}
                alt="Simple Password Generator Project"
                className="w-full h-48 object-cover"
              ></Image>
            </div>
            <div className="p-6 flex flex-col gap-4">
              {" "}
              {/* card body  */}
              <h3 className="text-white font-semibold text-lg">
                Simple Password Generator
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Generate password and check it&apos;s quality
              </p>
              <div className="flex flex-wrap gap-2">
                {" "}
                {/* tech stack tags row */}
                <span className="text-xs px-3 py-1 rounded-full bg-purple-900/40 text-purple-300 border border-purple-800/50">
                  FastAPI
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-purple-900/40 text-purple-300 border border-purple-800/50">
                  React(TypeScript)
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-purple-900/40 text-purple-300 border border-purple-800/50">
                  SQLite
                </span>
              </div>
              <div className="flex gap-4 mt-2">
                {" "}
                {/* links row */}
                <Link
                  href="https://github.com/gopal-mlfullstack/simple-password-system-"
                  className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
