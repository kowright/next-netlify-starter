import { BentoBoxGridItem } from "../components/BentoBoxGrid";
import Layout from "../components/Layout";
import { SiGithub, SiReact, SiTailwindcss, SiJira, SiLinear, SiDjango, SiEmberdotjs, SiNodedotjs, SiTypescript, SiJavascript, SiUnity, SiBlazor, SiPostgresql, SiPostman, SiDocker, SiPython, SiFigma, SiStorybook, SiCplusplus,  } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

export default function Home() {
    const projectsForBentoGrid : BentoBoxGridItem[] = [
        {
            colSpanClass: "col-span-2 lg:col-span-3", rowSpanClass: "row-span-3", backgroundColor: 'bg-orange-400',
            content: ( 
                <div className=''> 
                    <h2 className="text-4xl font-black mb-2">SKILLS</h2> 

                    <h2 className="text-2xl font-black mb-2">FRONTEND</h2> 
                    <div className='flex flex-row flex-wrap gap-2'>
                        <div className='flex gap-1 bg-white font-bold w-fit p-2 border-4 border-black rounded-md'>
                            <SiReact size={24} color='#61DAFB' /> REACT
                        </div>
                        <div className='flex gap-1 bg-white font-bold w-fit p-2 border-4 border-black rounded-md'>
                            <SiTailwindcss size={24} color='#06B6D4' /> TAILWINDCSS
                        </div>

                        <div className='flex gap-1 bg-white font-bold w-fit p-2 border-4 border-black rounded-md'>
                            <SiEmberdotjs size={24} color='#E04E39' /> EMBER.JS
                        </div>
                        <div className='flex gap-1 bg-white font-bold w-fit p-2 border-4 border-black rounded-md'>
                            <SiBlazor size={24} color='#512BD4' /> BLAZOR
                        </div>
                        <div className='flex gap-1 bg-white font-bold w-fit p-2 border-4 border-black rounded-md'>
                            <SiFigma size={24} color='#F24E1E' /> FIGMA
                        </div>
                        <div className='flex gap-1 bg-white font-bold w-fit p-2 border-4 border-black rounded-md'>
                            <SiStorybook size={24} color='#FF4785' /> STORYBOOK
                        </div>
                    </div>

                    <h2 className="text-2xl font-black mb-2">BACKEND</h2> 
                    <div className='flex flex-row flex-wrap gap-2'>
                       
                        <div className='flex gap-1 bg-white font-bold w-fit p-2 border-4 border-black rounded-md'>
                            <SiDjango size={24} color='#092E20' /> DJANGO
                        </div>
                        
                        <div className='flex gap-1 bg-white font-bold w-fit p-2 border-4 border-black rounded-md'>
                            <SiNodedotjs size={24} color='#5FA04E' /> NODE.JS
                        </div>
                       
                        <div className='flex gap-1 bg-white font-bold w-fit p-2 border-4 border-black rounded-md'>
                            <SiPostgresql size={24} color='#4169E1' /> POSTGRES
                        </div>    
                    </div>

                    <h2 className="text-2xl font-black mb-2">TOOLS</h2> 
                    <div className='flex flex-row flex-wrap gap-2'>
                
                        <div className='flex gap-1 bg-white font-bold w-fit p-2 border-4 border-black rounded-md'>
                            <SiJira size={24} color='#0052CC' /> JIRA
                        </div>
                        <div className='flex gap-1 bg-white font-bold w-fit p-2 border-4 border-black rounded-md'>
                            <SiLinear size={24} color='#5E6AD2' /> LINEAR
                        </div>
                        
                        <div className='flex gap-1 bg-black font-bold text-white w-fit p-2 border-4 border-black rounded-md'>
                            <SiUnity size={24} color='#FFFFFF' /> UNITY
                        </div>
                       
                        <div className='flex gap-1 bg-white font-bold w-fit p-2 border-4 border-black rounded-md'>
                            <SiPostman size={24} color='#FF6C37' /> POSTMAN
                        </div>
                        <div className='flex gap-1 bg-white font-bold w-fit p-2 border-4 border-black rounded-md'>
                            <SiDocker size={24} color='#2496ED' /> DOCKER
                        </div>
                      
                        <div className='flex gap-1 bg-white font-bold w-fit p-2 border-4 border-black rounded-md'>
                            <SiFigma size={24} color='#F24E1E' /> FIGMA
                        </div>
                        <div className='flex gap-1 bg-white font-bold w-fit p-2 border-4 border-black rounded-md'>
                            <SiStorybook size={24} color='#FF4785' /> STORYBOOK
                        </div>
                    </div>

                    <h2 className="text-2xl font-black mb-2">LANGUAGES</h2>
                    <div className='flex flex-row flex-wrap gap-2'>
                       
                        <div className='flex gap-1 bg-white font-bold w-fit p-2 border-4 border-black rounded-md'>
                            <SiTypescript size={24} color='#3178C6' /> TYPESCRIPT
                        </div>
                        <div className='flex gap-1 bg-white font-bold w-fit p-2 border-4 border-black rounded-md'>
                            <img src="/cSharp.svg" className="w-6 h-6" />C#
                        </div>
                        <div className='flex gap-1 bg-white font-bold w-fit p-2 border-4 border-black rounded-md'>
                            <SiJavascript size={24} color='#F7DF1E' /> JAVASCRIPT
                        </div>
                 
                        <div className='flex gap-1 bg-white font-bold w-fit p-2 border-4 border-black rounded-md'>
                            <SiPython size={24} color='#3776AB' /> PYTHON
                        </div>
                        <div className='flex gap-1 bg-white font-bold w-fit p-2 border-4 border-black rounded-md'>
                            <SiCplusplus size={24} color='#A8B9CC' /> C++
                        </div>
                        
                    </div>
                        
                    <h2 className="text-4xl font-black mb-2">IS ALL OF THIS TOO MUCH COLOR??</h2> 
                </div> 
            ), 
        },
        { colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-1", backgroundColor: 'bg-purple',
            content: ( 
                <div className="flex justify-center items-center h-full"> 
                     <h2 className="text-5xl font-black text-white mb-2">KORTNEY WRIGHT</h2>
                </div> 
            ),
        }, 
        { colSpanClass: "col-span-2 lg:col-span-1", rowSpanClass: "row-span-1", backgroundColor: 'bg-blue-500',
            content: ( 
                <> 
                    <h2 className="text-4xl font-black mb-2">ABOUT ME</h2> 
                    <p className="text-white flex-1">LINKS OUT</p> 
                    <p className="text-white flex-1">white or black font? - feeling white</p> 

                </> 
            ), 
        }, 
        {
            colSpanClass: "col-span-2 lg:col-span-3", rowSpanClass: "row-span-3", backgroundColor: 'bg-green-500', 
            content: ( 
                <>
                     <h2 className="text-4xl font-black mb-2">CAROUSEL HERE THAT YOU CAN CONTROL AND IT LINKS OUT</h2> 
                    <p className="text-black flex-1">MAYBE A BUTTON SOMEWHERE TO JUST GO TO GENERAL PROJECTS</p>
                    <p className="text-black flex-1">white or black font? - feeling black</p> 

                </> 
            ), 
        }, 
        { colSpanClass: "col-span-1 lg:col-span-1", rowSpanClass: "row-span-1", 
            content: ( 
                <div className="h-full flex-1">
                  <SiGithub size="100%" />
                </div>
            ),
        }, 
        { colSpanClass: "col-span-1 lg:col-span-1", rowSpanClass: "row-span-1", 
            content: ( 
                <div className="h-full flex-1">
                  <FaLinkedin size='100%' className="text-blue-600"/>
                </div>
            ), 
        }, 
        { colSpanClass: "col-span-2 lg:col-span-1", rowSpanClass: "row-span-1", backgroundColor: 'bg-yellow-400',
            content: ( 
                <div className="flex items-center justify-center h-full"> 
                    <p className="break-words text-black">
                      kortneywright<wbr/>@email.com
                    </p>
                </div> 
            ), 
        }, 
    ];

  return (
    <Layout items={projectsForBentoGrid} />
  );
}