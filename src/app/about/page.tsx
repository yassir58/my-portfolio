import ui from "../../styles/ui.module.css";
import Image from "next/image";
const page: React.FC = () => {
  return (
    <div className="flex h-full w-full flex-wrap pt-12 items-center justify-center gap-4">
        <img src='/42graph.png' alt="graph"/> 
      <div
        className={`flex max-w-xl  flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20 ${ui.gradient}`}
      >
        <h3 className="text-2xl font-bold">About me</h3>
        <div className="text-lg">
        I am a dedicated and passionate <span className='font-bold'>software developer </span>with a strong drive for
excellence. My primary aim is to enhance my expertise in software
development by pursuing opportunities that allow me to learn and grow. I
possess proficiency in both <span className="font-bold">front-end</span> and <span className="font-bold">back-end</span> technologies, enabling
me to create efficient applications. Eager to contribute as a <span className="font-bold">Fullstack </span> 
Developer intern, I am excited about the chance to apply my skills, learn
from experienced professionals, and make valuable contributions to real-
world projects.
        </div>
      </div>
    </div>
  );
};

export default page;
