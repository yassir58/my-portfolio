import Link from "next/link";
import ui from "../../styles/ui.module.css";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

const page: React.FC = () => {
  return (
    <div
      className={`flex h-full w-[90%] flex-wrap items-center justify-center gap-4 rounded-xl p-4 pt-12 text-white  ${ui.gradient}`}
    >
      <img src="/42graph.png" alt="graph" />
      <div className={`flex max-w-xl  flex-col gap-4 `}>
        <h3 className="text-3xl font-bold text-[hsl(280,100%,70%)]">
          About me
        </h3>
        <div className="text-lg">
          I am a dedicated and passionate{" "}
          <span className="font-bold">software developer </span>with a strong
          drive for excellence. My primary aim is to enhance my expertise in
          software development by pursuing opportunities that allow me to learn
          and grow. I possess proficiency in both{" "}
          <span className="font-bold">front-end</span> and{" "}
          <span className="font-bold">back-end</span> technologies, enabling me
          to create efficient applications. Eager to contribute as a{" "}
          <span className="font-bold">Fullstack </span>
          Developer intern, I am excited about the chance to apply my skills,
          learn from experienced professionals, and make valuable contributions
          to real- world projects.
        </div>
        <Link href="/projects" className="text-[hsl(280,100%,70%)] flex gap-2 hover:decoration-1 hover:underline justify-start items-center">
          What I Do
          <IoIosArrowRoundForward />
        </Link>
      </div>
    </div>
  );
};

export default page;
