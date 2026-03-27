import Image from "next/image";
import profilePic from "../public/me.png";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center bg-gray-950 px-6 ">
      {" "}
      {/*full screen wrapper*/}
      <div className="max-w-6xl mx-auto w-full flex items-center gap-12">
        {" "}
        {/*inner container (max-width + centered) */}
        <div className="flex-1 flex flex-col gap-5">
          {" "}
          {/* left side */}
          <span className="text-sm uppercase tracking-widest text-purple-400 ">
            Hi, I&apos;m
          </span>
          <h1 className="text-5xl font-bold  text-white leading-tight ">
            Gopal Mahato
          </h1>
          <h2 className="text-2xl font-medium  text-blue-400">
            Aspiring Full-Stack Developer
          </h2>
          <p className="text-gray-400 text-base leading-relaxed max-w-md">
            Building real-world projects and preparing for open-source
            contribution(GSoC)
          </p>
          <div className="flex gap-4">
            {" "}
            {/* Button row */}
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors">
              View Work
            </button>
            <button className="px-6 py-3 border border-purple-500 text-purple-400 hover:bg-purple-500/10 rounded-lg font-medium transition-colors">
              Contact Me
            </button>
          </div>
        </div>
        {/* -------------------------------------------------------   */}{" "}
        {/* right side */}
        <div className="flex-1 flex items-center justify-center">
          {" "}
          {/* photo wrapper (relative) */}
          <div className="relative w-72 h-72">
            {" "}
            <div className="absolute inset-0 rounded-full bg-purple-600/20 rotate-6 z-0" />{" "}
            {/* BG shape (absolute, behind) */}
            <Image
              className=" relative object-cover rounded-full ring-4 ring-purple-500/50  z-10 "
              src={profilePic}
              alt="Picture of Gopal Mahato"
              fill
              sizes="(max-width: 768px) 100vw, 288px"
            />
            <div className="absolute -top-4 -right-6  z-20">
              {" "}
              {/* Badge 1 - Open to Work */}
              <p className="bg-gray-900 border border-gray-700 rounded-xl px-3  py-2 text-xs text-white">
                Open to Work
              </p>
            </div>
            <div className="absolute -bottom-4 -left-6 z-20">
              {" "}
              {/* Badge 2 - 0+ Yrs Exp */}
              <p className="bg-gray-900 border border-gray-700 rounded-xl px-3  py-2 text-xs text-white">
                0+ Yrs Exp
              </p>
            </div>
            <div className="absolute -bottom-4 -right-6 z-20 ">
              {" "}
              {/* Badge 3 - 2+ projects */}
              <p className="bg-gray-900 border border-gray-700 rounded-xl px-3  py-2 text-xs text-white">
                2+ Projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
