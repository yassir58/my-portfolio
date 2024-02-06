import ui from '../../styles/ui.module.css'
import { FaGithub } from 'react-icons/fa'
import Link from 'next/link'
import { GrFormView } from "react-icons/gr";

interface props {
    image: string
    title: string
    tech: string[]
    description:string
    link:string
    view?: string
}
const Card:React.FC<props> = ({image, title, tech, description, link, view}) => {
    return (<div className={`relative h-[320px] w-[400px] rounded-md overflow-hidden ${ui.card}`}>
        <img className="w-full h-full object-cover" src={image}/>
        <div className={`w-full p-[30px] h-[50px] absolute bg-black/45 ${ui.header} flex gap-4 items-center justify-between`}>
        <h1 className=' text-lg text-white font-semibold'>{title}</h1>
        <FaGithub className='text-[20px]' />
        </div>

        <div className={`w-full p-[30px] h-full absolute top-0  bg-black/45 ${ui.cardBody} flex gap-4 flex-col`}>
            <h1 className=' text-[34px] text-white font-semibold'>{title}</h1>
            <div className='flex gap-2 flex-wrap justify-start items-center'>
                {
                    tech.map((tech, index)=> {
                        return <span className={`${ui.tech}`} key={index}>{tech}</span>
                    })
                }
            </div>
            <p className='text-sm text-white'>{description}</p>
            <div className='flex justify-start items-center gap-6'>
            <Link className={`${ui.glowingButton} flex justify-center items-center gap-4`} href={link}>
                <p>Check </p>
                 <FaGithub className='text-[20px]' />

            </Link>
           {view ? <Link className='flex justify-center items-center gap-2 text-white hover:text-[#00afb9]' href={view}>
                 <GrFormView className='text-[25px]' />
            View

            </Link> : ''}
            </div>
        </div>
    </div>)
}


export default Card