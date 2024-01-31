'use client'
import Image from "next/image"
import Link from "next/link"
import axios from "axios"
import { MdFileDownload } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { usePathname, useRouter } from "next/navigation";

// 
const Header:React.FC = () => {


    const [isOpen, setIsOpen] = useState (false)
    const router = useRouter ()

    const handleDownload = async () => {
        await axios
         .get(`https://utfs.io/f/b289e07a-5d46-4849-ba1c-586f567f0c7c-cru81y.pdf`, {
           responseType: "blob", // Specify the response type as 'blob' to handle binary data
         })
         .then((res) => res.data)
         .then((blob) => {
          
           const url = window.URL.createObjectURL(new Blob([blob]));
           const link = document.createElement("a");
           link.href = url;
           link.setAttribute("download", 'cv_yassirelatmani.pdf');
   
           // Append to html link element page
           document.body.appendChild(link);
   
           // Start download
           link.click();
   
           // Clean up and remove the link
           link.parentNode!.removeChild(link);
         });
     };


     
    return (<div className='w-[90%] h-[70px] my-4 rounded-xl flex justify-between items-center'>
        <div className="flex gap-4 justify-start items-center">
            <Image width={60} height={60} src={'/yelatman.jpg'} alt="profile" className="rounded-md mx-[-15px]"/>
            <div className='flex flex-col gap-1 justify-start items-start pl-4'>
                <h1 className='text-[#F8F8F8] text-[26px] font-semibold'>Yassir Elatmani</h1>
                <p className="text-sm text-[hsl(280,100%,70%)]">Fullstack Developer</p>
            </div>
        </div>


     <div className={`w-[100vw] h-[100vh] flex justify-center items-center top-0 left-0 z-50 bg-black ${isOpen ? 'fixed': 'hidden'}`}>
        <div className="items-center justify-start gap-8 flex flex-col">
        <Link className='text-[16px] text-[#F8F8F8] font-semibold'  href={'/'} onClick={() => 
            {
                setIsOpen (false)
            
        }}>
                Contact
            </Link>
            <Link className='text-[16px] text-[#F8F8F8] font-semibold' href={'/about'} onClick={() => {
                setIsOpen (false)

                }}>
                About
            </Link>
            <Link className='text-[16px] text-[#F8F8F8] font-semibold' href={'/projects'} onClick={() => {
                setIsOpen (false)
                }}>
                Projects
            </Link>
            <button onClick={handleDownload} className='text-[16px] flex gap-4 text-[#F8F8F8] font-semibold bg-[hsl(280,100%,70%)] justify-center items-center rounded-md hover:opacity-90 p-3 ' >
                <p>Resume</p>
                <MdFileDownload/>
            </button>
            <RxCross1 className="lg:hidden text-white hover:opacity-85 hover:scale-105 absolute top-6 right-6" onClick={() => setIsOpen (false)}/>
        </div>
     </div>

        <div className="items-center justify-start gap-8 flex">

        <Link className='text-[16px] text-[#F8F8F8] font-semibold lg:block hidden ' href={'/'}>
                Contact
            </Link>
            <Link className='text-[16px] text-[#F8F8F8] font-semibold lg:block hidden ' href={'/about'}>
                About
            </Link>
            <Link className='text-[16px] text-[#F8F8F8] font-semibold lg:block hidden ' href={'/projects'}>
                Projects
            </Link>
        
            <button onClick={handleDownload} className='text-[16px]  gap-4 text-[#F8F8F8] font-semibold bg-[hsl(280,100%,70%)] justify-center items-center rounded-md hover:opacity-90 p-3 hidden lg:flex ' >
                <p>Resume</p>
                <MdFileDownload/>
            </button>
            <MdMenu className="lg:hidden text-white hover:opacity-85 hover:scale-105" onClick={() => setIsOpen (true)}/>
        </div>
    </div>)
}

export default Header
