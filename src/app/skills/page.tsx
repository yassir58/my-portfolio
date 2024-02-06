import Link from "next/link";
import ui from "../../styles/ui.module.css";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

const page: React.FC = () => {
  return (
    <div
      className={`flex h-full w-[90%] flex-wrap items-center justify-center gap-4 rounded-xl p-4 pt-12 text-white  `}
    >
      <img src="/42graph.png" alt="graph" />
      <div className={`flex max-w-xl  flex-col gap-4 justify-center `}>
        <h3 className={`text-3xl font-bold  ${ui.textGradient} pb-4`}>
          MY SKILLS
        </h3>
        <div className="text-lg flex gap-3 flex-wrap">
          
          <span className="pr-3 text-[#00afb9]">Laguages: </span>
          <span className={`${ui.tag}`}>JAVASCRIPT </span>
          <span className={`${ui.tag}`}>JAVA</span>
          <span className={`${ui.tag}`}>C</span>
          <span className={`${ui.tag}`}>C++</span>

        </div>
        <div className="text-lg flex gap-3 flex-wrap">
          
          <span className="pr-3 text-[#00afb9]">Front-end: </span>
          <span className={`${ui.tag}`}> REACT.JS</span>
          <span className={`${ui.tag}`}>NEXT.JS</span>
          <span className={`${ui.tag}`}>TAILWIND CSS</span>
          <span className={`${ui.tag}`}>SASS</span>
          <span className={`${ui.tag}`}>SHAKRA UI</span>

        </div>
        <div className="text-lg flex gap-3 flex-wrap">
          
          <span className="pr-3 text-[#00afb9]">Back-end: </span>
          <span className={`${ui.tag}`}>EXPRESS.JS </span>
          <span className={`${ui.tag}`}>SPRING BOOT</span>
          <span className={`${ui.tag}`}>PISMA</span>
          <span className={`${ui.tag}`}>TYPESCRIPT</span>
          <span className={`${ui.tag}`}>TRPC</span>

        </div>
        <div className="text-lg flex gap-3 flex-wrap">
          
          <span className="pr-3 text-[#00afb9]">DevOps: </span>
          <span className={`${ui.tag}`}>DOCKER </span>
          <span className={`${ui.tag}`}>ANSIBLE</span>
          <span className={`${ui.tag}`}>JENKINS</span>
          <span className={`${ui.tag}`}>KUBERNETES</span>
          <span className={`${ui.tag}`}>AWS</span>
          <span className={`${ui.tag}`}>TERRAFORM</span>
        </div>
        <Link href="/projects" className="text-[#00afb9] flex gap-2 hover:decoration-1 hover:underline justify-start items-center">
          My Projects
          <IoIosArrowRoundForward />
        </Link>
      </div>
    </div>
  );
};

export default page;
