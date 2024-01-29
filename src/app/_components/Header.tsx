'use client'
import Image from "next/image"
import Link from "next/link"
import axios from "axios"
import { MdFileDownload } from "react-icons/md";


// 
const Header:React.FC = () => {


    const handleDownload = async () => {
        await axios
         .get(`https://utfs.io/f/21f2f9c4-fec5-4e82-a2fb-bdfe47189cd1-cru81y.pdf`, {
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
            <button onClick={handleDownload} className='text-[16px] flex gap-4 text-[#F8F8F8] font-semibold bg-[hsl(280,100%,70%)] justify-center items-center rounded-md hover:opacity-90 p-3' >
                <p>Resume</p>
                <MdFileDownload/>
            </button>
        </div>
    </div>)
}

export default Header