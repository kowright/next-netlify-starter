import { BentoBoxGridItem } from "../components/BentoBoxGrid"
import Layout from "../components/Layout";
import { SiReact, SiTailwindcss, SiJira, SiLinear, SiDjango, SiEmberdotjs, SiNodedotjs, SiTypescript, SiJavascript, SiUnity, SiBlazor, SiPostgresql, SiPostman, SiDocker, SiPython, SiFigma, SiStorybook, SiCplusplus, } from "react-icons/si";
import SkillBadge from "../components/SkillBadge";
import { GithubBox, LinkedInBox, HomeBox, CSharpSkillBadge } from "../components/BoxUtil";
import { FaUserGraduate, FaCheese, FaDumbbell, FaHardHat, FaSign } from "react-icons/fa";

export default function AboutPage() {

    const projectsForBentoGrid : BentoBoxGridItem[] = [ 
        {
            colSpanClass: "col-span-2 lg:col-span-3", rowSpanClass: "row-span-3 lg:row-span-3", backgroundColor: 'bg-[#F57195]',
        content: ( 
            <div> 
                <h2 className="text-2xl font-black mb-2">MY STORY</h2>
                <div className="relative border-l-4 border-black pl-6 md:pt-6 space-y-6 h-full flex flex-col">
                    <div className="relative">
                        <div className="absolute -left-[2.4rem] top-[0.4rem] w-6 h-6 bg-white outline rounded-full flex items-center justify-content hover:animate-shake">
                            <FaUserGraduate size={16} color="#F57195" />
                        </div>
                        <div className="bg-white border-4 font-bold p-1 border-black rounded-lg flex">
                            2017 - Graduated College in Civil Engineering
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-[2.4rem] top-[0.5rem] w-6 h-6 bg-white outline rounded-full flex items-center justify-content hover:animate-shake" >
                            <FaHardHat size={16} color="#F57195" />
                        </div>
                        <div className="bg-white border-4 font-bold p-1 border-black rounded-lg">
                            2018 - Virtual Construction Contractor
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-[2.4rem] top-[0.5rem] w-6 h-6 bg-white outline rounded-full flex items-center justify-content hover:animate-shake" >
                            <FaCheese size={16} color="#F57195" />
                        </div>
                        <div className="bg-white border-4 p-1 font-bold border-black rounded-lg flex">
                            2021 - Cheese Factory Manufacturer
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-[2.4rem] top-[0.5rem] w-6 h-6 bg-white outline rounded-full flex items-center justify-content hover:animate-shake" >
                            <FaSign size={16} color="#F57195" />
                        </div>
                        <div className="bg-white border-4 p-1 font-bold border-black rounded-lg">
                            2021 - Virtual Tour Startup
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-[2.4rem] top-[0.5rem] w-6 h-6 bg-white outline rounded-full flex items-center justify-content hover:animate-shake" >
                            <FaDumbbell size={16} color="#F57195" />
                        </div>
                        <div className="bg-white border-4 p-1 font-bold border-black rounded-lg">
                            2024 - Gym Management Platform
                        </div>
                    </div>
                </div>
            </div> 
        ), 
    },


        {
            colSpanClass: "col-span-2 lg:col-span-3", rowSpanClass: "row-span-1", backgroundColor: 'bg-[#F59733]',
        content: ( 
            <div> 

                <h2 className="text-2xl font-black mb-2">FRONTEND</h2>

                <div className='flex flex-row gap-2 xl:gap-4 2xl:gap-8 flex-wrap'>
                    <SkillBadge keepSmall icon={<SiReact size={18} color="#61DAFB" />} label="REACT" />
                    <SkillBadge keepSmall icon={<SiTailwindcss size={18} color="#06B6D4" />} label="TAILWIND" />
                    <SkillBadge keepSmall icon={<SiEmberdotjs size={18} color="#E04E39" />} label="EMBER" />
                    <SkillBadge keepSmall icon={<SiBlazor size={18} color="#512BD4" />} label="BLAZOR" />

                </div>
            </div> 
        ), 
    }, 
        


   
        {
            colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-1 lg:row-span-2", backgroundColor: 'bg-[#8AD86E]',
            content: (
                <div>
                    <h2 className="text-2xl font-black mb-2">LANGUAGES</h2>
                    <div className='flex flex-row gap-2 xl:gap-4 2xl:gap-8 flex-wrap'>
                        <SkillBadge keepSmall icon={<SiTypescript size={18} color="#3178C6" />} label="TYPESCRIPT" />
                        <CSharpSkillBadge />
                        <SkillBadge keepSmall icon={<SiJavascript size={18} color="#F7DF1E" />} label="JAVASCRIPT" />
                        <SkillBadge keepSmall icon={<SiPython size={18} color="#3776AB" />} label="PYTHON" />
                        <SkillBadge keepSmall icon={<SiCplusplus size={18} color="#A8B9CC" />} label="C++" />


                    </div>
                </div>
            ),
        },


     

        

GithubBox(),

LinkedInBox,

        {
            colSpanClass: "col-span-2 lg:col-span-3", rowSpanClass: "row-span-1 lg:row-span-1", backgroundColor: 'bg-[#FFF1B0]',
            content: (
                <div className=''>

                    <h2 className="text-2xl font-black mb-2">BACKEND</h2>
                    <div className='flex flex-row gap-2 xl:gap-4 2xl:gap-8 flex-wrap'>
                        <SkillBadge keepSmall icon={<SiDjango size={18} color="#092E20" />} label="DJANGO" />
                        <SkillBadge keepSmall icon={<SiNodedotjs size={18} color="#5FA04E" />} label="NODE.JS" />
                        <SkillBadge keepSmall icon={<SiPostgresql size={18} color="#4169E1" />} label="POSTGRES" />
                        <SkillBadge keepSmall label="SQL" />
                    </div>
                </div>
            ),
        },


    HomeBox,

        {
            colSpanClass: "col-span-1 lg:col-span-2", rowSpanClass: "row-span-1", backgroundColor: 'bg-[#73B2F4]',
            content: (
                <div className='flex justify-center items-center h-full'>
                    <h2 className="text-4xl lg:text-2xl xl:text-4xl font-black mb-2 ml-2 text-center">ABOUT ME</h2>


                </div>
            ),
        },

        {
            colSpanClass: "col-span-2 lg:col-span-5", rowSpanClass: "row-span-2 md:row-span-1", backgroundColor: 'bg-pink-200',
       content: ( 
            <div> 
               <h2 className="text-2xl font-black">TOOLS</h2>
               <div className='flex flex-row gap-2 xl:gap-4 2xl:gap-8 flex-wrap'>
                   <SkillBadge keepSmall icon={<SiJira size={18} color="#0052CC" />} label="JIRA" />
                   <SkillBadge keepSmall icon={<SiLinear size={18} color="#5E6AD2" />} label="LINEAR" />
                   <SkillBadge keepSmall icon={<SiUnity size={18} color="#FFFFFF" />} label="UNITY" invert />
                   <SkillBadge keepSmall icon={<SiDocker size={18} color="#2496ED" />} label="DOCKER" />
                   <SkillBadge keepSmall icon={<SiFigma size={18} color="#F24E1E" />} label="FIGMA" />
                   <SkillBadge keepSmall icon={<SiStorybook size={18} color="#FF4785" />} label="STORYBOOK" />
                   <SkillBadge keepSmall icon={<SiPostman size={18} color="#FF6C37" />} label="POSTMAN" />
               </div>
            </div> 
        ), 
    }, 


        {
            colSpanClass: "col-span-2 lg:col-span-1", rowSpanClass: "row-span-1", backgroundColor: 'bg-[#C28AE0]',
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