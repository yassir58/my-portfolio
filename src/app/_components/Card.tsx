import ui from '../../styles/ui.module.css'

interface props {
    image: string
    title: string
    subtitle: string
    description:string
}
const Card:React.FC<props> = ({image, title, subtitle, description}) => {
    return (<div className={`relative w-[320px] h-[400px] rounded-md overflow-hidden ${ui.card}`}>
        <img className="w-full h-full object-cover" src={image}/>
        <div className={`w-full p-[30px] h-full absolute top-0  bg-black/45 ${ui.cardBody} flex gap-4 flex-col`}>
            <h1 className=' text-[34px] text-white font-semibold'>{title}</h1>
            <h3 className='text-[14px] bg-[#BB48DA] rounded-md p-1 flex justify-center font-semibold text-white'>{subtitle}</h3>
            <p className='text-sm text-white'>{description}</p>
        </div>
    </div>)
}


export default Card