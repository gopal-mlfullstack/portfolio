import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-gray-950/80 border-b border-gray-800 ">
      {" "}
      {/* sticky top bar */}
      <div className="max-w-6xl mx-auto w-full px-6 py-4 flex items-center  justify-between">
        {" "}
        {/*  inner container (max-width + centered) */}
        <span>
          {" "}
          {/* logo (left) */}
          <Link
            href="/"
            className="text-white font-bold text-xl tracking-tight"
          >
            Gopal Mahato
          </Link>
        </span>
        <ul className="flex items-center gap-8 list-none">
          {" "}
          {/* NavLinks (right side) */}
          <li className="text-gray-400 hover:text-white text-sm font-medium transition-colors">
            <Link href="#about">About</Link>
          </li>
          <li className="text-gray-400 hover:text-white text-sm font-medium transition-colors">
            <Link href="#projects">Projects</Link>
          </li>
          <li className="text-gray-400 hover:text-white text-sm font-medium transition-colors">
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
