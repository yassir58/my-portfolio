import Card from "../_components/Card"
import ui from "../../styles/ui.module.css"

const page:React.FC = () => {

    const projects = [ {
        image:'ft_transandance.png',
        title:'TRANSANDANCE',
        tech:["Next.js","Chakra ui", "Nest.js", "Typescript"],
        description:'Experience an exhilarating online multiplayer Pong game, fueled by the robust 42 network OAuth 2.0. The game boasts an invite-based matchmaking system, a feature-rich chat system, and a host of other exciting features',
        link:'https://github.com/yassir58/ft_transcendence'
    },
    
    {
        image:'kanban.png',
        title:'KANBAN TASK MANAGER',
        tech:["Next.js","Tailwind css", "Trpc", "Typescript"],
        description:'A Kanban-style task manager that enables users to efficiently manage and organize their tasks while facilitating seamless collaboration with others.',
        link:'https://github.com/yassir58/next-task-manger',
        view:'https://kanban-task-manger.vercel.app/'

    },
    {
        image:'trello-clone.png',
        title:'TRELLO CLONE',
        tech:["Next.js","Chakra ui", "Nest.js", "Typescript"],
        description:'Introducing a Trello clone that empowers users to seamlessly create and customize boards, efficiently organize tasks, and foster collaboration by inviting users to join workspaces.',
        link:'https://github.com/yassir58/Trello-clone'


    },
    {
        image:'webserv.png',
        title:'WEBSERV',
        tech:["C++","Shell", "PHP", "Makefile"],
        description:'Presenting a configurable web server crafted in C++, adept at supporting both static and dynamic content through CGI scripts. This robust server is built on the HTTP protocol, providing a versatile platform for web hosting',
        link:'https://github.com/yassir58/webserv'

    },
    {
    image:'docker.png',
        title:'INCEPTION',
        tech:["Shell","Wordpress", "Docker", "Nginx", "PHP"],
        description:'This 42 school project is designed to expand your understanding of system administration through the practical application of Docker.',
        link:'https://github.com/yassir58/Inception-42'
    },
    {
        image:'wordlegame.gif',
            title:'WORDLE GAME PLATFORM',
            tech:["Next.js","Tailwind css", "Trpc", "Typescript"],
            description:'Wordle game platform offering guest and user login options, complete with game statistics, history tracking.',
            link:'https://github.com/yassir58/wordle-game'
        }
]
    return (<div className="flex flex-col w-[95%] h-full justify-start items-center">
        
        <div className='flex pt-8 pb-4 gap-4 justify-center items-start flex-wrap'>
            {
                projects.map ((project, index) => {
                    return <Card  key={index} link={project.link} view={project?.view} image={project.image} title={project.title} tech={project.tech} description={project.description}/>
                })
            }
        </div>
    </div>)
}

export default page