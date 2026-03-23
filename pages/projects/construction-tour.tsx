import { BentoBoxGridItem } from "../../components/BentoBoxGrid";
import Layout from "../../components/Layout";
import { SiNodedotjs, SiReact, SiTypescript } from "react-icons/si";
import SkillBadge from "../../components/SkillBadge";
import { GithubBox, LinkedInBox, NavBox } from "../../components/BoxUtil";
import ImageCarousel from "../../components/ImageCarousel";

export default function ConstructionTourPage() {

    const imageSources: string[] = [
        "/the-mind/the-mind-1.jpg",
        "/the-mind/the-mind-2.jpg",
        "/the-mind/the-mind-3.jpg",
        "/the-mind/the-mind-4.jpg",
    ]

    const projectsForBentoGrid: BentoBoxGridItem[] = [
        {
            colSpanClass: "col-span-2 lg:col-span-3", rowSpanClass: "row-span-3 lg:row-span-3",
            content: (
                <>
                    <h2 className="text-xl font-semibold mb-2">PICTURES</h2>
                    <div className="flex-1 rounded-lg overflow-hidden">
                        <video
                            src="/construction-tour/trophys.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                        ></video>
                    </div>
                </>
            ),
        },
        {
            colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-1", backgroundColor: 'bg-red-600',
            content: (
                <>
                    <h2 className="text-4xl font-black text-white">Construction Tour VR</h2>

                    <p className="flex-1 text-black">2020</p>
                </>
            ),
        },
        GithubBox('https://github.com/kowright/the-mind'),

        {
            colSpanClass: "col-span-2 lg:col-span-3", rowSpanClass: "row-span-1 lg:row-span-2", backgroundColor: 'bg-[#b9e158]',
            content: (
                <div>
                    <h2 className="text-xl font-semibold mb-2">STACK</h2>
                    <div className='flex flex-row gap-2 xl:gap-4 2xl:gap-8 flex-wrap'>

                        <SkillBadge keepSmall label="WEBSOCKETS" />
                        <SkillBadge keepSmall icon={<SiReact size={18} color="#06B6D4" />} label="REACT NATIVE" />
                        <SkillBadge keepSmall label="WEB" />
                        <SkillBadge keepSmall label="MOBILE" />
                        <SkillBadge keepSmall label="MULTIPLAYER" />
                        <SkillBadge keepSmall icon={<SiNodedotjs size={18} color="#5FA04E" />} label="NODE.JS" />
                        <SkillBadge keepSmall label="WEBSOCKETS" />
                        <SkillBadge keepSmall icon={<SiReact size={18} color="#06B6D4" />} label="REACT NATIVE" />
                        <SkillBadge keepSmall label="WEB" />
                        <SkillBadge keepSmall label="MOBILE" />
                        <SkillBadge keepSmall label="MULTIPLAYER" />
                        <SkillBadge keepSmall icon={<SiNodedotjs size={18} color="#5FA04E" />} label="NODE.JS" />
                    </div>

                </div>
            ),
        },

        {
            colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-1", backgroundColor: 'bg-[#F5918D]',
            content: (
                <>
                    <h2 className="text-xl font-semibold mb-2">IMPACT</h2>
                    {/*<p className="text-gray-600 flex-1">SUCCESS MEASURES OR STATS</p>*/}
                    <p className="text-gray-600 flex-1">SOMETHING LIKE I AM KNOWLEDGEABLE ABOUT WEBSOCKETS AND REACT NATIVE?</p>
                </>
            ),
        },
        {
            colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-2", backgroundColor: 'bg-[#f76135]',
            content: (
                <div>
                    <h2 className="text-xl font-semibold mb-2 text-white">WHAT</h2>
                    <p className="text-white">REWORD: real time multiplayer card game for mobile and web</p>
                    {/*<p className="text-gray-600 flex-1">WHY EX. WANTED TO LEARN X. there is only 1 challenge!</p> */}
                </div>
            ),
        },
        {
            colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-2", backgroundColor: 'bg-[#FCBB21]',
            content: (
                <div>
                    <h2 className="text-xl font-semibold mb-2">WHY</h2>
                    {/*<p className="text-gray-600 flex-1">OR WHAT EX. WHAT THE PROJECT DOES. solution is multiple bullet points with soft skills, not grandular, for recruiter</p> */}
                    <p className="text-gray-600 flex-1">Implemented bidirectional communication between client and server</p>
                    <p>Built a real-time messaging system using WebSockets</p>
                </div>
            ),
        },
        NavBox('PROJECTS', '/projects', 'bg-[#39FF14]'),


        LinkedInBox,

    ];

    return (
        <Layout items={projectsForBentoGrid} />
    );
}