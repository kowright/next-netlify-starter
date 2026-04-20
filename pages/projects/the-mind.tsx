import { BentoBoxGridItem } from "../../components/BentoItemBox";
import Layout from "../../components/Layout";
import { SiNodedotjs, SiReact, SiTypescript } from "react-icons/si";
import SkillBadge from "../../components/SkillBadge";
import { GithubBox, NavBox } from "../../components/BoxUtil";
import ImageCarousel from "../../components/ImageCarousel";

export default function TheMindPage() {

    const imageSources: string[] = [
        "/the-mind/the-mind-1.jpg",
        "/the-mind/the-mind-2.jpg",
        "/the-mind/the-mind-3.jpg",
        "/the-mind/the-mind-4.jpg",
    ]

    const projectsForBentoGrid: BentoBoxGridItem[] = [
        {
            colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-3 lg:row-span-3", 
            content: (
                <>
                    <h2 className="text-xl font-semibold mb-2">PICTURES</h2>
                    <div className="flex-1 rounded-lg overflow-hidden">
                        <ImageCarousel imageSources={imageSources} />
                    </div>
                </>
            ),
        },
        {
            colSpanClass: "col-span-1 lg:col-span-2", rowSpanClass: "row-span-1", backgroundColor: 'bg-red-600',
            content: (
                <>
                    <h2 className="text-4xl font-black text-white mb-2">THE MIND</h2>

                    <p className="flex-1 text-white">2026</p>
                </>
            ),
        },
        GithubBox('https://github.com/kowright/the-mind'),
        NavBox('PROJECTS', '/projects', 'bg-[#779e1c]', 'View Projects Page', true),

        {
            colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-1 lg:row-span-2", backgroundColor: 'bg-[#b9e158]',
            content: (
                <div>
                    <h2 className="text-xl font-semibold mb-2">STACK</h2>
                    <div className='flex flex-row gap-2 xl:gap-4 flex-wrap'>

                        <SkillBadge label="WEBSOCKETS" />
                        <SkillBadge icon={<SiReact size={18} color="#06B6D4" />} label="REACT NATIVE" />
          
                        <SkillBadge icon={<SiTypescript size={18} color="#3178C6" />} label="TYPESCRIPT" />
                        <SkillBadge icon={<SiNodedotjs size={18} color="#5FA04E" />} label="NODE.JS" />
         

                    </div>

                </div>
            ),
        },

        {
            colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-2 lg:row-span-2", backgroundColor: 'bg-[#F5918D]',
            content: (
                <div className="flex xl:gap-4 flex-col">
                    <h2 className="text-xl font-semibold mb-2">IMPACT</h2>
                    <p>Learned how to design event-driven architectures, translating client actions into server-side events and broadcasting state updates efficiently.</p>
                    <p>Developed a deeper understanding of networking concepts such as message protocols and connection lifecycle management in multiplayer applications.</p>
               
                </div>
            ),
        },
    
        {
            colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-2", backgroundColor: 'bg-[#f76135]',
            content: (
                <div>
                    <h2 className="text-xl font-semibold mb-2 text-white">WHAT</h2>
                    <p className="text-white">Built a real-time multiplayer implementation of The Mind card game using React Native and a Node.js WebSocket server. The application synchronizes game state across multiple clients, enabling players to interact in real time through a shared game session.</p>
           
                </div>
            ),
        },
        {
            colSpanClass: "col-span-2 lg:col-span-4", rowSpanClass: "row-span-3 lg:row-span-2", backgroundColor: 'bg-[#FCBB21]',
            content: (
                <div>
                    <h2 className="text-xl font-semibold text-black mb-2">WHY</h2>
                    <div className='lg:space-y-4 space-y-2'>

                    <p className=" text-black flex-1">Implemented cross communication between client and server.</p>
                    <p className='text-black'>Built a real-time messaging system using WebSockets to synchronize multiple clients at once.</p>
                    <p className="text-black">Developed a centralized game engine on the server to manage game state, validate player actions, and broadcast updates to clients.</p>
                    <p className='text-black'>On the client side, built a responsive React Native interface that listens for server events and updates UI state in real time.</p>
                        <p className='text-black'>Created the design and did a user test session to improve user interactions.</p>
                    </div>
                </div>
            ),
        },

    



    ];

    return (
        <Layout items={projectsForBentoGrid} />
    );
}