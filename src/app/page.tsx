import Link from "next/link";
import { GoDotFill } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function HomePage() {
  return (
    <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
      <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
        Hello I'm <span className="text-[hsl(280,100%,70%)]">YASSIR</span>
      </h1>
      <span className="flex items-center justify-start gap-2 rounded-xl border-2 border-[#BB48DA] p-1">
        <GoDotFill className="text-[#BB48DA]" />
        <p className="text-sm text-white">available for work</p>
      </span>

      <div className="hidden items-center justify-start gap-3 lg:flex">
        <Link
          href=""
          className="flex items-center justify-center rounded-xl bg-[#111111] p-2 text-[#BB48DA] shadow-sm"
        >
          <FaLinkedin />
        </Link>
        <Link
          href=""
          className="flex items-center justify-center rounded-xl bg-[#111111] p-2 text-[#BB48DA] shadow-sm"
        >
          <FaGithub />
        </Link>
        <Link
          href=""
          className="flex items-center justify-center rounded-xl bg-[#111111] p-2 text-[#BB48DA] shadow-sm"
        >
          <FaXTwitter />
        </Link>
      </div>
    </div>
  );
}
