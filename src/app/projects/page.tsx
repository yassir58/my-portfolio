import Card from "../_components/Card"

const page:React.FC = () => {

    const projects = [ {
        image:'ft_transandance.png',
        title:'TRANSANDANCE',
        subtitle:'Web Developement',
        description:'Experience an exhilarating online multiplayer Pong game, fueled by the robust 42 network OAuth 2.0. The game boasts an invite-based matchmaking system, a feature-rich chat system, and a host of other exciting features',
        link:'https://github.com/yassir58/ft_transcendence'
    },
    
    {
        image:'kanban.png',
        title:'KANBAN TASK MANAGER',
        subtitle:'Web Developement',
        description:'A Kanban-style task manager that enables users to efficiently manage and organize their tasks while facilitating seamless collaboration with others.',
        link:'https://github.com/yassir58/next-task-manger'

    },
    {
        image:'trello-clone.png',
        title:'TRELLO CLONE',
        subtitle:'Web Developement',
        description:'Introducing a Trello clone that empowers users to seamlessly create and customize boards, efficiently organize tasks, and foster collaboration by inviting users to join workspaces.',
        link:'https://github.com/yassir58/Trello-clone'


    },
    {
        image:'webserv.png',
        title:'WEBSERV',
        subtitle:'Unix System Programming',
        description:'Presenting a configurable web server crafted in C++, adept at supporting both static and dynamic content through CGI scripts. This robust server is built on the HTTP protocol, providing a versatile platform for web hosting',
        link:'https://github.com/yassir58/webserv'

    },
    {
    image:'docker.png',
        title:'INCEPTION',
        subtitle:'System Administration & Devops',
        description:'This 42 school project is designed to expand your understanding of system administration through the practical application of Docker.',
        link:'https://github.com/yassir58/Inception-42'
    }
]
    return (<div className="flex flex-col w-[95%] h-full justify-start items-center">
        <div className='flex flex-col justify-center items-center gap-4 text-center'>
        <h3 className="text-3xl font-bold text-[hsl(280,100%,70%)]">
          My Projects
        </h3>
        <p className="text-white text-lg">Here, I showcase some of my school and personal projects.</p>
        </div>
        <div className='flex pt-8 pb-4 gap-4 justify-center items-start flex-wrap'>
            {
                projects.map ((project, index) => {
                    return <Card  key={index} link={project.link} image={project.image} title={project.title} subtitle={project.subtitle} description={project.description}/>
                })
            }
        </div>
    </div>)
}

export default page