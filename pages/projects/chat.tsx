import { BentoBoxGridItem } from "../../components/BentoItemBox";
import Layout from "../../components/Layout";
import { SiNodedotjs, SiReact } from "react-icons/si";
import SkillBadge from "../../components/SkillBadge";
import { GithubBox, LinkedInBox, NavBox } from "../../components/BoxUtil";
import ImageCarousel from "../../components/ImageCarousel";

export default function ChatPage() {

    const imageSources: string[] = [

        "/cSharp.svg",
        "/cSharp.svg",
        "/cSharp.svg",


    ]

    const projectsForBentoGrid: BentoBoxGridItem[] = [
        {
            colSpanClass: "col-span-2 lg:col-span-3", rowSpanClass: "row-span-3 lg:row-span-3",
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
                    <h2 className="text-4xl font-black text-white mb-2">Chat</h2>

                    <p className="flex-1 text-black">2026</p>
                </>
            ),
        },
        GithubBox('https://github.com/kowright/the-mind'),

        {
            colSpanClass: "col-span-2 lg:col-span-3", rowSpanClass: "row-span-1 lg:row-span-2", backgroundColor: 'bg-yellow-300',
            content: (
                <div>
                    <h2 className="text-xl font-semibold mb-2">STACK</h2>
                    <div className='flex flex-row gap-2 xl:gap-4 flex-wrap'>
                        
                        <SkillBadge label="WEBSOCKETS" />
                        <SkillBadge icon={<SiReact size={18} color="#06B6D4" />} label="REACT NATIVE" />
                        <SkillBadge label="WEB" />
                        <SkillBadge label="MOBILE" />
                        <SkillBadge label="MULTIPLAYER" />
                        <SkillBadge icon={<SiNodedotjs size={18} color="#5FA04E" />} label="NODE.JS" />
                        <SkillBadge label="WEBSOCKETS" />
                        <SkillBadge icon={<SiReact size={18} color="#06B6D4" />} label="REACT NATIVE" />
                        <SkillBadge label="WEB" />
                        <SkillBadge label="MOBILE" />
                        <SkillBadge label="MULTIPLAYER" />
                        <SkillBadge icon={<SiNodedotjs size={18} color="#5FA04E" />} label="NODE.JS" />
                    </div>

                </div>
            ),
        },

        {
            colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-1", backgroundColor: 'bg-pink-300',
            content: (
                <>
                    <h2 className="text-xl font-semibold mb-2">IMPACT</h2>
                    {/*<p className="text-gray-600 flex-1">SUCCESS MEASURES OR STATS</p>*/}
                    <p className="text-gray-600 flex-1">SOMETHING LIKE I AM KNOWLEDGEABLE ABOUT WEBSOCKETS AND REACT NATIVE?</p>
                </>
            ),
        },
        {
            colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-2", backgroundColor: 'bg-blue-600',
            content: (
                <div>
                    <h2 className="text-xl font-semibold mb-2 text-white">WHAT</h2>
                    <p className="text-white">REWORD: real time multiplayer card game for mobile and web</p>
                    {/*<p className="text-gray-600 flex-1">WHY EX. WANTED TO LEARN X. there is only 1 challenge!</p> */}
                </div>
            ),
        },
        {
            colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-2", backgroundColor: 'bg-orange-400',
            content: (
                <div>
                    <h2 className="text-xl font-semibold mb-2">WHY</h2>
                    {/*<p className="text-gray-600 flex-1">OR WHAT EX. WHAT THE PROJECT DOES. solution is multiple bullet points with soft skills, not grandular, for recruiter</p> */}
                    <p className="text-gray-600 flex-1">Implemented bidirectional communication between client and server</p>
                    <p>Built a real-time messaging system using WebSockets</p>
                </div>
            ),
        },
        NavBox('PROJECTS', '/projects', 'bg-[#39FF14]', 'Go To Projects'),


        LinkedInBox,

    ];

    return (
        <Layout items={projectsForBentoGrid} />
    );
}