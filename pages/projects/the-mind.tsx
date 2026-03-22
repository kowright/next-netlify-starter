import { BentoBoxGridItem } from "../../components/BentoBoxGrid";
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
            colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-1", backgroundColor: 'bg-red-600',
            content: (
                <>
                    <h2 className="text-4xl font-black text-white mb-2">THE MIND</h2>

                    <p className="flex-1 text-white">2026</p>
                </>
            ),
        },
        GithubBox('https://github.com/kowright/the-mind'),
        NavBox('PROJECTS', '/projects', 'bg-[#39FF14]'),

        {
            colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-1 lg:row-span-2", backgroundColor: 'bg-yellow-300',
            content: (
                <div>
                    <h2 className="text-xl font-semibold mb-2">STACK</h2>
                    <div className='flex flex-row gap-2 xl:gap-4 2xl:gap-8 flex-wrap'>

                        <SkillBadge keepSmall label="WEBSOCKETS" />
                        <SkillBadge keepSmall icon={<SiReact size={18} color="#06B6D4" />} label="REACT NATIVE" />
                        <SkillBadge keepSmall label="WEB" />
                        <SkillBadge keepSmall label="MOBILE" />
                        <SkillBadge keepSmall label="MULTIPLAYER" />
                        <SkillBadge keepSmall label="UI/UX" />
                        <SkillBadge keepSmall icon={<SiTypescript size={18} color="#3178C6" />} label="TYPESCRIPT" />
                        <SkillBadge keepSmall icon={<SiNodedotjs size={18} color="#5FA04E" />} label="NODE.JS" />
                        <SkillBadge keepSmall label="FULLSTACK" />

                    </div>

                </div>
            ),
        },

        {
            colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-1 lg:row-span-2", backgroundColor: 'bg-pink-300',
            content: (
                <>
                    <h2 className="text-xl font-semibold mb-2">IMPACT</h2>
                    {/*<p className="text-gray-600 flex-1">SUCCESS MEASURES OR STATS</p>*/}
                    <p>Learned how to design event-driven architectures, translating client actions into server-side events and broadcasting state updates efficiently.</p>
                    <p>Developed a deeper understanding of networking concepts such as message protocols and connection lifecycle management in multiplayer applications.</p>
               
                </>
            ),
        },
    
        {
            colSpanClass: "col-span-2 lg:col-span-3", rowSpanClass: "row-span-2", backgroundColor: 'bg-blue-600',
            content: (
                <div>
                    <h2 className="text-xl font-semibold mb-2 text-white">WHAT</h2>
                    <p className="text-white">Built a real-time multiplayer implementation of The Mind card game using React Native and a Node.js WebSocket server. The application synchronizes game state across multiple clients, enabling players to interact in real time through a shared game session.</p>
           
                </div>
            ),
        },
        {
            colSpanClass: "col-span-2 lg:col-span-3", rowSpanClass: "row-span-2", backgroundColor: 'bg-orange-400',
            content: (
                <div>
                    <h2 className="text-xl font-semibold text-white mb-2">WHY</h2>
                    {/*<p className="text-gray-600 flex-1">OR WHAT EX. WHAT THE PROJECT DOES. solution is multiple bullet points with soft skills, not grandular, for recruiter</p> */}
                    <p className="flex-1">Implemented bidirectional communication between client and server.</p>
                    <p className='text-white'>Built a real-time messaging system using WebSockets to synchronize multiple clients at once.</p>
                    <p>Developed a centralized game engine on the server to manage game state, validate player actions, and broadcast updates to connected clients.</p>
                    <p className='text-white'>On the client side, built a responsive React Native interface that listens for server events and updates UI state in real time.</p>
                </div>
            ),
        },

    



    ];

    return (
        <Layout items={projectsForBentoGrid} />
    );
}