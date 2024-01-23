import Link from "next/link";
import Header from "./_components/Header";
import ui from "../styles/ui.module.css"

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-[#060606] text-white">
      <Header />
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Hello I'm <span className="text-[hsl(280,100%,70%)]">YASSIR</span>
        </h1>
          <Link
            className={`flex max-w-xl  flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20 ${ui.gradient}`}
            href="https://create.t3.gg/en/usage/first-steps"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">About me</h3>
            <div className="text-lg">
            I am a dedicated and passionate software developer with a strong drive for
excellence. My primary aim is to enhance my expertise in software
development by pursuing opportunities that allow me to learn and grow. 
            </div>
          </Link>
          
        

      </div>
    </main>
  );
}
