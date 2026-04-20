"use client";

import { BentoBoxGridItem } from "../components/BentoItemBox";
import Layout from "../components/Layout";
import { SiReact, SiTailwindcss, SiDjango, SiEmberdotjs, SiNodedotjs, SiTypescript, SiJavascript, SiUnity, SiBlazor, SiPostgresql, SiPostman, SiFigma, SiStorybook } from "react-icons/si";
import SkillBadge from "../components/SkillBadge";
import ImageCarousel from "../components/ImageCarousel";
import { CSharpSkillBadge, GithubBox, LinkedInBox, NavBox } from "../components/BoxUtil";
import PageLinkIcon from "../components/PageLinkIcon";
export default function Home() {

    const imageSources: string[] = [
        "/the-mind/the-mind-2.jpg",
        './minimap/minimap.png',
        './industrial-ar/train-transparent.jpg',
        './modeling/skull.jpg',
        './reality-capture/example3.jpg',

    ]

    const projectsForBentoGrid: BentoBoxGridItem[] = [
        {
            colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-1", backgroundColor: 'bg-[#B218E0]',
            content: (
                <div className="flex justify-center items-center h-full">
                    <h2 className="text-5xl font-black text-white mb-2 text-center hover:drop-shadow-glow">KORTNEY WRIGHT</h2>
                </div>
            ),
        },

        NavBox('ABOUT ME', '/about', 'bg-[#28B2F4]', 'View About Me Page'),
       
        {
            colSpanClass: "col-span-2 lg:col-span-3", rowSpanClass: "row-span-3 lg:row-span-4 xl:row-span-4 2xl:row-span-4",
            content: (
                <div className="flex flex-col h-full min-h-0 relative group/card active:shadow-[inset_0px_8px_12px_rgba(0,0,0,0.4)]">
                    <h2 className="text-4xl font-black mb-2">PROJECTS</h2>
                    <PageLinkIcon />

                    <div className="flex-1 rounded-lg overflow-hidden">
                     
                        <ImageCarousel imageSources={imageSources} />
                    </div>
                </div>
            ),
            href: "/projects",
            ariaLabel: 'View Projects Page'
        }, 


    
        {
            colSpanClass: "col-span-2 lg:col-span-3", rowSpanClass: "row-span-4 md:row-span-4 lg:row-span-4 xl:row-span-4 2xl:row-span-4", backgroundColor: 'bg-[#27F5F5]',
            content: (
                <div className="flex flex-col h-full">
                    <h2 className="text-4xl font-black mb-2">TOP SKILLS</h2>
                    <div className="flex flex-col flex-1 justify-around">

                        <div>
                            <h2 className="text-2xl font-black mb-2">FRONTEND</h2>

                            <div className='flex flex-row  gap-2 xl:gap-4 flex-wrap'>

                                <SkillBadge icon={<SiReact color="#61DAFB" />} label="REACT" />
                                <SkillBadge icon={<SiTailwindcss size={18} color="#06B6D4" />} label="TAILWIND" />
                                <SkillBadge icon={<SiEmberdotjs size={18} color="#E04E39" />} label="EMBER" />
                                <SkillBadge icon={<SiBlazor size={18} color="#512BD4" />} label="BLAZOR" />

                            </div>
                        </div>

                        <div className=''>

                            <h2 className="text-2xl font-black mb-2">BACKEND</h2>
                            <div className='flex flex-row gap-2 xl:gap-4 flex-wrap'>
                                <SkillBadge icon={<SiNodedotjs size={18} color="#5FA04E" />} label="NODE.JS" />
                                <SkillBadge icon={<SiPostgresql size={18} color="#4169E1" />} label="POSTGRES" />
                                <SkillBadge icon={<SiDjango size={18} color="#092E20" />} label="DJANGO" />
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-black">TOOLS</h2>
                            <div className='flex flex-row gap-2 xl:gap-4 flex-wrap'>

                                <SkillBadge icon={<SiUnity size={18} color="#FFFFFF" />} label="UNITY" invert />
                                <SkillBadge icon={<SiFigma size={18} color="#F24E1E" />} label="FIGMA" />
                                <SkillBadge icon={<SiStorybook size={18} color="#FF4785" />} label="STORYBOOK" />
                                <SkillBadge icon={<SiPostman size={18} color="#FF6C37" />} label="POSTMAN" />
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-black">LANGUAGES</h2>

                            <div className='flex flex-row gap-2 xl:gap-4 flex-wrap'>
                                <SkillBadge icon={<SiTypescript size={18} color="#3178C6" />} label="TYPESCRIPT" />
                                <CSharpSkillBadge />
                                <SkillBadge icon={<SiJavascript size={18} color="#F7DF1E" />} label="JAVASCRIPT" />
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },

        GithubBox(),
        LinkedInBox(),
        {
            colSpanClass: "col-span-2 lg:col-span-1", rowSpanClass: "row-span-1", backgroundColor: 'bg-[#C28AE0]',
            content: ( 
                <div className="flex items-center justify-center h-full"> 
                    <p className="break-words text-center text-black font-black lg:text-sm xl:text-md">
                        kortneybwright<wbr />@gmail.com
                    </p>
                </div> 
            ), 
        }, 
    ];

    return (
        <>
            <main>
                <Layout items={projectsForBentoGrid} />
            </main>
        </>
    );
}