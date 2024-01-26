import Image from "next/image"
import Link from "next/link"

// 
const Header:React.FC = () => {
    return (<div className='w-[90%] h-[70px] my-4 rounded-xl flex justify-between items-center'>
        <div className="flex gap-4 justify-start items-center">
            <Image width={60} height={60} src={'/yelatman.jpg'} alt="profile" className="rounded-md mx-[-15px]"/>
            <div className='flex flex-col gap-1 justify-start items-start pl-4'>
                <h1 className='text-[#F8F8F8] text-[26px] font-semibold'>Yassir Elatmani</h1>
                <p className="text-sm text-[hsl(280,100%,70%)]">Fullstack Developer</p>
            </div>
        </div>

        <div className="hidden items-center justify-start gap-8 lg:flex">
        <Link className='text-[16px] text-[#F8F8F8] font-semibold' href={'/'}>
                Contact
            </Link>
            <Link className='text-[16px] text-[#F8F8F8] font-semibold' href={'/about'}>
                About
            </Link>
            <Link className='text-[16px] text-[#F8F8F8] font-semibold' href={'/projects'}>
                Projects
            </Link>
            <Link className='text-[16px] text-[#F8F8F8] font-semibold' href={'/resume'}>
                Resume
            </Link>
        </div>
    </div>)
}

export default Header