import Link from "next/link";
import { GoDotFill } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ui from '../styles/ui.module.css'
import { SiGmail } from "react-icons/si";
import Modal from "./_components/Modal";

export default function HomePage() {

  
  return (
    <div className={`flex flex-col items-center justify-center gap-12 px-4 py-16 bg-transparent w-full `}>
      <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
        Hello I'm <span className={`${ui.textGradient} ` }>YASSIR</span>
      </h1>
      <h3 className='text-white max-w-lg text-center'>A dedicated <span className={`font-bold text-[#00afb9]`}>42 School</span> student on the journey to mastery, transitioning into a skilled Fullstack Developer.</h3>

      <div className='flex gap-5 justify-center items-center'>
        <Link href="/projects" className={`    ${ui.glowingButton} opacity-95 hover:scale-105 hover:opacity-85`}>my work</Link>
        <Modal value={"contact me"}>
         <div className='flex flex-col justify-start items-start w-full h-full gap-6 px-8 py-6'>
          <h1 className={`text-[#00afb9] font-semibold text-3xl`}>CONTACT ME</h1>
          <div  className='flex flex-col gap-5 justify-center items-center'>
          <Link
          href="https://linkedin.com/in/yassir-el-atmani"
          className="flex items-center justify-start gap-3 w-full hover:opacity-90 hover:scale-105"
        >
          <FaLinkedin className="text-[20px] text-[#00afb9]"/>
          <p className="text-white">Yassir Elatmani</p>
        </Link>
        <Link
          href=""
          className="flex items-center justify-start gap-3 w-full hover:opacity-90 hover:scale-105"
        >
          <FaGithub className="text-[20px] text-[#00afb9]"/>
          <p className="text-white">yassir58</p>

        </Link>
        <Link
          href="https://github.com/yassir58/"
          className="flex items-center justify-start gap-3 w-full hover:opacity-90 hover:scale-105"
        >
          <SiGmail className="text-[20px] text-[#00afb9]"/>
          <p className="text-white">elatmaniyassir3@gmail.com</p>
        </Link>
          </div>
       <span className="flex items-center justify-start gap-2 rounded-xl border-2 border-[#00afb9] px-3 py-1">
        <GoDotFill className="text-[#00afb9]" />
        <p className="text-sm text-white">available for work</p>
      </span>
         </div>
        </Modal>
      </div>

      
    </div>
  );
}
