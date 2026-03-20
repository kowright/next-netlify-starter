import { BentoBoxGridItem } from "../components/BentoBoxGrid";
import Layout from "../components/Layout";
import { SiReact, SiTailwindcss, SiDjango, SiEmberdotjs, SiNodedotjs, SiTypescript, SiJavascript, SiUnity, SiBlazor, SiPostgresql, SiPostman, SiFigma, SiStorybook } from "react-icons/si";
import SkillBadge from "../components/SkillBadge";
import ImageCarousel from "../components/ImageCarousel";
import { NavBox, GithubBox, LinkedInBox } from "../components/BoxUtil";
import { FaLink } from "react-icons/fa";

export default function Home() {

    const imageSources: string[] = [
        "/cSharp.svg",
        "/cSharp.svg",
        "/cSharp.svg"
    ]

    const projectsForBentoGrid : BentoBoxGridItem[] = [
        {
            colSpanClass: "col-span-2 lg:col-span-3", rowSpanClass: "row-span-4 md:row-span-4 lg:row-span-4 xl:row-span-4 2xl:row-span-4" , backgroundColor: 'bg-orange-400',
            content: ( 
                <div className="flex flex-col h-full">
                    <h2 className="text-4xl font-black mb-2">TOP SKILLS</h2>
                    <div className="flex flex-col flex-1 justify-around">

                        <div>
                            <h2 className="text-2xl font-black mb-2">FRONTEND</h2>

                            <div className='flex flex-row  gap-2 xl:gap-4 2xl:gap-8 flex-wrap'>

                                <SkillBadge icon={<SiReact color="#61DAFB" />} label="REACT" />
                                <SkillBadge icon={<SiTailwindcss size={18} color="#06B6D4" />} label="TAILWIND" />
                                <SkillBadge icon={<SiEmberdotjs size={18} color="#E04E39" />} label="EMBER.JS" />
                                <SkillBadge icon={<SiBlazor size={18} color="#512BD4" />} label="BLAZOR" />

                            </div>
                        </div> 

                        <div className=''>

                            <h2 className="text-2xl font-black mb-2">BACKEND</h2>
                            <div className='flex flex-row gap-2 xl:gap-4 2xl:gap-8 flex-wrap'>
                                <SkillBadge icon={<SiDjango size={18} color="#092E20" />} label="DJANGO" />
                                <SkillBadge icon={<SiNodedotjs size={18} color="#5FA04E" />} label="NODE.JS" />
                                <SkillBadge icon={<SiPostgresql size={18} color="#4169E1" />} label="POSTGRES" />
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-black">TOOLS</h2>
                            <div className='flex flex-row gap-2 xl:gap-4 2xl:gap-8 flex-wrap'>

                                <SkillBadge icon={<SiUnity size={18} color="#FFFFFF" />} label="UNITY" invert />
                                <SkillBadge icon={<SiFigma size={18} color="#F24E1E" />} label="FIGMA" />
                                <SkillBadge icon={<SiStorybook size={18} color="#FF4785" />} label="STORYBOOK" />
                                <SkillBadge icon={<SiPostman size={18} color="#FF4785" />} label="POSTMAN" />
                            </div>
                        </div> 

                        <div>
                            <h2 className="text-xl font-bold mb-2">LANGUAGES</h2>
                            <div className='flex flex-row gap-2 xl:gap-4 2xl:gap-8 flex-wrap'>
                                <SkillBadge icon={<SiTypescript size={18} color="#3178C6" />} label="TYPESCRIPT" />
                                <SkillBadge icon={<img src="/cSharp.svg" className="w-4 h-4" />} label="C#" />
                                <SkillBadge icon={<SiJavascript size={18} color="#F7DF1E" />} label="JAVASCRIPT" />
                            </div>
                        </div>
                    </div>
                </div> 
            ), 
        },
        { colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-1", backgroundColor: 'bg-purple',
            content: ( 
                <div className="flex justify-center items-center h-full"> 
                     <h2 className="text-5xl font-black text-white mb-2 text-center">KORTNEY WRIGHT</h2>
                </div> 
            ),
        }, 
        {
            colSpanClass: "col-span-2 lg:col-span-1", rowSpanClass: "row-span-1", backgroundColor: 'bg-blue-500',
            content: (
                <div className="flex relative items-center justify-center h-full w-full" >
                    <FaLink />
                    <p className="text-2xl lg:text-2xl xl:text-3xl font-black mb-2 ml-2 text-center" >ABOUT ME</p>
                </div>
            ),
            href: "/about",
        },


        {
            colSpanClass: "col-span-2 lg:col-span-3", rowSpanClass: "row-span-3 lg:row-span-4 xl:row-span-4 2xl:row-span-4", 
            content: ( 
                <div className="flex flex-col h-full">
                    <h2 className="text-4xl font-black mb-2">
                        PROJECTS
                    </h2>

                    <div className="flex-1 rounded-lg overflow-hidden">
                        <ImageCarousel imageSources={imageSources} />
                    </div>
                </div>
            ), 
        }, 
        GithubBox(),
        LinkedInBox,
        { colSpanClass: "col-span-2 lg:col-span-1", rowSpanClass: "row-span-1", backgroundColor: 'bg-yellow-400',
            content: ( 
                <div className="flex items-center justify-center h-full"> 
                    <p className="break-words text-center text-black font-black">
                        kortneywright<wbr />@email.com
                    </p>
                </div> 
            ), 
        }, 
    ];

  return (
    <Layout items={projectsForBentoGrid} />
  );
}