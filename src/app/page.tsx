import Link from "next/link";
import { GoDotFill } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ui from '../styles/ui.module.css'

export default function HomePage() {
  return (
    <div className={`flex flex-col items-center justify-center gap-12 px-4 py-16 bg-transparent w-full `}>
      <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
        Hello I'm <span className={`${ui.textGradient} ` }>YASSIR</span>
      </h1>
      <h3 className='text-white max-w-lg text-center'>A dedicated <span className={`font-bold text-[hsl(280,100%,70%)]`}>42 School</span> student on the journey to mastery, transitioning into a skilled Fullstack Developer.</h3>
      <span className="flex items-center justify-start gap-2 rounded-xl border-2 border-[#BB48DA] p-1">
        <GoDotFill className="text-[#BB48DA]" />
        <p className="text-sm text-white">available for work</p>
      </span>

      <div className="hidden items-center justify-start gap-3 lg:flex">
        <Link
          href="https://linkedin.com/in/yassir-el-atmani"
          className="flex items-center justify-center rounded-xl bg-[#111111] p-2 text-[#BB48DA] shadow-sm hover:scale-110"
        >
          <FaLinkedin />
        </Link>
        <Link
          href=""
          className="flex items-center justify-center rounded-xl bg-[#111111] p-2 text-[#BB48DA] shadow-sm hover:scale-110"
        >
          <FaGithub />
        </Link>
        <Link
          href="https://github.com/yassir58/"
          className="flex items-center justify-center rounded-xl bg-[#111111] p-2 text-[#BB48DA] shadow-sm hover:scale-110"
        >
          <FaXTwitter />
        </Link>
      </div>
    </div>
  );
}
