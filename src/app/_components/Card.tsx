import ui from '../../styles/ui.module.css'
import { FaGithub } from 'react-icons/fa'
import Link from 'next/link'
import { GrFormView } from "react-icons/gr";
interface props {
    image: string
    title: string
    subtitle: string
    description:string
    link:string
    view?: string
}
const Card:React.FC<props> = ({image, title, subtitle, description, link, view}) => {
    return (<div className={`relative w-[320px] h-[400px] rounded-md overflow-hidden ${ui.card}`}>
        <img className="w-full h-full object-cover" src={image}/>
        <div className={`w-full p-[30px] h-[50px] absolute bg-black/45 ${ui.header} flex gap-4 items-center justify-between`}>
        <h1 className=' text-lg text-white font-semibold'>{title}</h1>
        <FaGithub className='text-[20px]' />
        </div>

        <div className={`w-full p-[30px] h-full absolute top-0  bg-black/45 ${ui.cardBody} flex gap-4 flex-col`}>
            <h1 className=' text-[34px] text-white font-semibold'>{title}</h1>
            <h3 className='text-[14px] bg-[#BB48DA] rounded-md p-1 flex justify-center font-semibold text-white'>{subtitle}</h3>
            <p className='text-sm text-white'>{description}</p>
            <div className='flex justify-start items-center gap-4'>
            <Link className='flex justify-between items-center bg-[#BB48DA] text-white hover:opacity-90 w-[160px] rounded-md p-3' href={link}>
                <p>Check Project</p>
                 <FaGithub className='text-[20px]' />

            </Link>
           {view ? <Link className='flex justify-center items-center bg-white/45 text-white hover:opacity-90  rounded-md p-3' href={view}>
                 <GrFormView className='text-[25px]' />
            </Link> : ''}
            </div>
        </div>
    </div>)
}


export default Card