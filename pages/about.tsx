import { BentoBoxGridItem } from "../components/BentoBoxGrid"
import Layout from "../components/Layout";
import { SiReact, SiTailwindcss, SiJira, SiLinear, SiDjango, SiEmberdotjs, SiNodedotjs, SiTypescript, SiJavascript, SiUnity, SiBlazor, SiPostgresql, SiPostman, SiDocker, SiPython, SiFigma, SiStorybook, SiCplusplus, } from "react-icons/si";
import SkillBadge from "../components/SkillBadge";
import { GithubBox, LinkedInBox } from "../components/BoxUtil";

export default function AboutPage() {

    const projectsForBentoGrid : BentoBoxGridItem[] = [ 
    { colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-2 lg:row-span-3", 
        content: ( 
            <> 
                <h2 className="text-xl font-semibold mb-2">STORY</h2> 
                <p className="text-gray-600 flex-1">THERE IS NO HOME PAGE ICON HERE OOPS</p> 
                <p className="text-gray-600 flex-1">WHICH BOX SHOULD NOT GET COLOR?</p> 
            </> 
        ), 
    },


        {
            colSpanClass: "col-span-2 lg:col-span-4", rowSpanClass: "row-span-1", backgroundColor: 'bg-orange-400',
        content: ( 
            <div> 

                <h2 className="text-2xl font-black mb-2">FRONTEND</h2>

                <div className='flex flex-row gap-2 xl:gap-4 2xl:gap-8 flex-wrap'>
                    <SkillBadge icon={<SiReact size={18} color="#61DAFB" />} label="REACT" />
                    <SkillBadge icon={<SiTailwindcss size={18} color="#06B6D4" />} label="TAILWIND" />
                    <SkillBadge icon={<SiEmberdotjs size={18} color="#E04E39" />} label="EMBER.JS" />
                    <SkillBadge icon={<SiBlazor size={18} color="#512BD4" />} label="BLAZOR" />

                </div>
            </div> 
        ), 
    }, 
        


   
        {
            colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-1 md:row-span-2",
            content: (
                <div>
                    <h2 className="text-2xl font-black mb-2">LANGUAGES</h2>
                    <div className='flex flex-row gap-2 xl:gap-4 2xl:gap-8 flex-wrap'>
                        <SkillBadge icon={<SiTypescript size={18} color="#3178C6" />} label="TYPESCRIPT" />
                        <SkillBadge icon={<img src="/cSharp.svg" className="w-4 h-4" />} label="C#" />
                        <SkillBadge icon={<SiJavascript size={18} color="#F7DF1E" />} label="JAVASCRIPT" />
                        <SkillBadge icon={<SiPython size={18} color="#3776AB" />} label="PYTHON" />
                        <SkillBadge icon={<SiCplusplus size={18} color="#A8B9CC" />} label="C++" />


                    </div>
                </div>
            ),
        },


     

        {
            colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-2 lg:row-span-2", backgroundColor: 'bg-green-400',
            content: (
                <div>
                    <h2 className="text-2xl font-black mb-2">GOOD NAME HERE</h2>

                    <div className='flex flex-row gap-2 xl:gap-4 2xl:gap-8 flex-wrap'>

                    <SkillBadge label="MANAGEMENT" />
                    <SkillBadge label="UI/UX" />
                    <SkillBadge label="VIRTUAL REALITY" />
                    <SkillBadge label="REST API" />
                    </div>
                </div>
            ),
        },

GithubBox(),

LinkedInBox,

        {
            colSpanClass: "col-span-2 lg:col-span-3", rowSpanClass: "row-span-1 lg:row-span-1", backgroundColor: 'bg-yellow-400',
            content: (
                <div className=''>

                    <h2 className="text-2xl font-black mb-2">BACKEND</h2>
                    <div className='flex flex-row gap-2 xl:gap-4 2xl:gap-8 flex-wrap'>
                        <SkillBadge icon={<SiDjango size={18} color="#092E20" />} label="DJANGO" />
                        <SkillBadge icon={<SiNodedotjs size={18} color="#5FA04E" />} label="NODE.JS" />
                        <SkillBadge icon={<SiPostgresql size={18} color="#4169E1" />} label="POSTGRES" />
                    </div>
                </div>
            ),
        },


        {
            colSpanClass: "col-span-2 lg:col-span-1", rowSpanClass: "row-span-1",
            content: (
                <div className='flex justify-center items-center'>
                    <h2 className="text-4xl lg:text-2xl xl:text-4xl font-black mb-2 ml-2 text-center">ABOUT ME</h2>


                </div>
            ),
        },


       

        {
            colSpanClass: "col-span-2 lg:col-span-6", rowSpanClass: "row-span-2 lg:row-span-1", backgroundColor: 'bg-blue-500',
       content: ( 
            <div> 
               <h2 className="text-2xl font-black">TOOLS</h2>
               <div className='flex flex-row gap-2 xl:gap-4 2xl:gap-8 flex-wrap'>
                   <SkillBadge icon={<SiJira size={18} color="#0052CC" />} label="JIRA" />
                   <SkillBadge icon={<SiLinear size={18} color="#5E6AD2" />} label="LINEAR" />
                   <SkillBadge icon={<SiUnity size={18} color="#FFFFFF" />} label="UNITY" invert />
                   <SkillBadge icon={<SiDocker size={18} color="#2496ED" />} label="DOCKER" />
                   <SkillBadge icon={<SiFigma size={18} color="#F24E1E" />} label="FIGMA" />
                   <SkillBadge icon={<SiStorybook size={18} color="#FF4785" />} label="STORYBOOK" />
                   <SkillBadge icon={<SiPostman size={18} color="#FF6C37" />} label="POSTMAN" />
               </div>
            </div> 
        ), 
    }, 




  ];

  return (
    <Layout items={projectsForBentoGrid} />
  );
}