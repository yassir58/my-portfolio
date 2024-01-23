import Image from "next/image"
import Link from "next/link";
import { GoDotFill } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
// 
const Header:React.FC = () => {
    return (<div className='w-[90%] h-[70px] my-4 rounded-xl flex justify-between items-center'>
        <div className="flex gap-4 justify-start items-center">
            <Image width={60} height={60} src={'/yelatman.jpg'} alt="profile" className="rounded-md mx-[-15px]"/>
            <div className='flex flex-col gap-1 justify-start items-start pl-4'>
                <h1 className='text-[#F8F8F8] text-[26px] font-semibold'>Yassir Elatmani</h1>
                <p className="text-sm text-[#656565]">Fullstack Developer</p>
            </div>
        </div>

        <span className="flex gap-2 justify-start items-center border-2 rounded-xl border-[#BB48DA] p-1">
                                <GoDotFill className='text-[#BB48DA]'/>
                                <p className="text-sm text-[#858585]">available for work</p>                                                                                                                                               
        </span>

        <div className='lg:flex gap-3 justify-start items-center hidden'>
            <Link href='' className='shadow-sm rounded-xl p-2 flex justify-center items-center text-[#BB48DA] bg-[#111111]'>
            <FaLinkedin />
            </Link>
            <Link href='' className='shadow-sm rounded-xl p-2 flex justify-center items-center text-[#BB48DA] bg-[#111111]'>
            <FaGithub/>
            </Link>
            <Link href='' className='shadow-sm rounded-xl p-2 flex justify-center items-center text-[#BB48DA] bg-[#111111]'>
            <FaXTwitter/>
            </Link>
        </div>
    </div>)
}

export default Header