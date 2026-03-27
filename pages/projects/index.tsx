import { BentoBoxGridItem } from "../../components/BentoBoxGrid"
import Layout from "../../components/Layout";
import ImageCarousel from "../../components/ImageCarousel";
import { CSharpSkillBadge, HomeBox, LinkedInBox } from "../../components/BoxUtil";
import SkillBadge from "../../components/SkillBadge";
import { SiReact, SiTailwindcss, SiTypescript, SiNodedotjs, SiJavascript, SiNextdotjs, SiUnity, SiAutodesk, SiAutodeskrevit, SiAutodeskmaya, SiSketchup } from "react-icons/si";
import PageLinkIcon from "../../components/PageLinkIcon";

export default function ProjectsPage() {

    const projectsForBentoGrid : BentoBoxGridItem[] = [ 
        {
            colSpanClass: "col-span-2 md:col-span-2 lg:col-span-3", rowSpanClass: "row-span-2 lg:row-span-2", 
        content: ( 
            <div className="flex flex-col h-full relative group/card">
                <PageLinkIcon />
                <h2 className="text-xl font-bold mb-2">
                    THE MIND
                </h2>
                <div className="flex flex-row flex-1 min-h-0 min-w-0">

                    <div className="flex-1 min-w-0 rounded-lg overflow-hidden">
                        <ImageCarousel imageSources={["/the-mind/the-mind-1.jpg",
                            "/the-mind/the-mind-2.jpg"]} />
                    </div>

                    <div className="flex flex-col gap-1 ml-1 items-end justify-evenly">

             
                            <SkillBadge keepSmall icon={<SiReact color="#61DAFB" className="" />} label="REACT NATIVE" />
           
                        <SkillBadge keepSmall icon={<SiTailwindcss color="#06B6D4" />} label="WEBSOCKETS" />
                        <SkillBadge keepSmall icon={<SiTypescript size={18} color="#3178C6" />} label="TYPESCRIPT" />
                        <SkillBadge keepSmall icon={<SiNodedotjs size={18} color="#5FA04E" />} label="NODE.JS" />

                    </div>
                   
                </div>
               
                <p className="text-black">Web & mobile app for a multiplayer card game.</p> 


            </div>
            ), 
           href: '/projects/the-mind',
    },
        {
            colSpanClass: "col-span-2 md:col-span-2 lg:col-span-3", rowSpanClass: "row-span-2 lg:row-span-2",
            content: (
                <div className="flex flex-col h-full relative group/card">
                    <PageLinkIcon />
                    <h2 className="text-xl font-bold mb-2">
                        CONSTRUCTION TOUR VR
                    </h2>
                    <div className="flex flex-row flex-1 min-h-0 min-w-0">

                        <div className="flex-1 min-w-0 rounded-lg overflow-hidden">
                            <ImageCarousel imageSources={['./construction-tour/constructionvrsite.png', './construction-tour/constructionvrsite1.png']} />
                        </div>

                        <div className="flex flex-col gap-1 ml-1 items-end justify-evenly">

                            <SkillBadge keepSmall icon={<SiUnity size={18} color="#FFFFFF" />} label="UNITY" invert />
                            <CSharpSkillBadge />

                
                        </div>

                    </div>

                    <p className="text-gray-600">Virtual reality app of a construction site for education.</p>


                </div>
            ),
            href: '/projects/construction-tour',
        },

 LinkedInBox, 

        {
            colSpanClass: "col-span-2 lg:col-span-4 md:col-span-2", rowSpanClass: "row-span-1 lg:row-span-1", backgroundColor: 'bg-orange-400',
        content: ( 
            <div className='flex items-center justify-center h-full'> 
                <h2 className="text-4xl font-black mb-2 text-center">PROJECTS</h2>
            </div> 
        ), 
    },

    HomeBox,

        {
            colSpanClass: "col-span-2 md:col-span-2 lg:col-span-3", rowSpanClass: "row-span-2 lg:row-span-2",
            content: (
                <div className="flex flex-col h-full relative group/card">
                    <PageLinkIcon />
                    <h2 className="text-xl font-bold mb-2">
                       MINIMAP
                    </h2>
                    <div className="flex flex-row flex-1 min-h-0 min-w-0">

                        <div className="flex-1 min-w-0 rounded-lg overflow-hidden">
                            <ImageCarousel imageSources={['./minimap/minimap.png', './minimap/minimap1.png']} />
                        </div>

                        <div className="flex flex-col gap-1 ml-1 items-end justify-evenly">
                            <SkillBadge keepSmall icon={<SiUnity size={18} color="#FFFFFF" />} label="UNITY" invert />
                            <CSharpSkillBadge />
                        </div>

                    </div>

                    <p className="text-gray-600">Virtual reality interactions for a 3D map.</p>


                </div>
            ),
            href: './projects/minimap'
        },
        {
            colSpanClass: "col-span-2 md:col-span-2 lg:col-span-3", rowSpanClass: "row-span-2 lg:row-span-2",
            content: (
                <div className="flex flex-col h-full relative group/card">
                    <PageLinkIcon />
                    <h2 className="text-xl font-bold mb-2">
                        PROJECT MANAGEMENT TOOL
                    </h2>
                    <div className="flex flex-row flex-1 min-h-0 min-w-0">

                        <div className="flex-1 min-w-0 rounded-lg overflow-hidden">
                            <ImageCarousel imageSources={["/project-management/project1.png", "/project-management/project2.png"]} />
                        </div>

                        <div className="flex flex-col gap-1 ml-1 items-end justify-evenly">

                            <SkillBadge keepSmall icon={<SiReact color="#61DAFB" />} label="REACT" />
                            <SkillBadge keepSmall icon={<SiTailwindcss color="#06B6D4" />} label="TAILWIND" />
                            <SkillBadge keepSmall icon={<SiTypescript size={18} color="#3178C6" />} label="TYPESCRIPT" />

                            <SkillBadge keepSmall icon={<SiNodedotjs size={18} color="#5FA04E" />} label="NODE.JS" />

                        

                        </div>

                    </div>

                    <p className="text-gray-600">Website for viewing project schedules in different formats.</p>


                </div>
            ),
            href: '/projects/project-management',
        },
        {
            colSpanClass: "col-span-2 md:col-span-2 lg:col-span-3", rowSpanClass: "row-span-2 lg:row-span-2",
            content: (
                <div className="flex flex-col h-full relative group/card">
                    <PageLinkIcon />
                    <h2 className="text-xl font-bold mb-2">
                        PLATFORM INTEGRATION
                    </h2>
                    <div className="flex flex-row flex-1 min-h-0 min-w-0">

                        <div className="flex-1 min-w-0 rounded-lg overflow-hidden">
                            <ImageCarousel imageSources={['./platform-integration/splash.png']} />
                        </div>

                        <div className="flex flex-col gap-1 ml-1 items-end justify-evenly">
                            <SkillBadge keepSmall icon={<SiNodedotjs size={18} color="#5FA04E" />} label="NODE.JS" />
                            <SkillBadge keepSmall icon={<SiJavascript size={18} color="#F7DF1E" />} label="JAVASCRIPT" />

                            <SkillBadge keepSmall label="WEBHOOKS" />
     
                        </div>

                    </div>

                    <p className="text-gray-600">Automation workflow between Notion, Discord and Linear.</p>


                </div>
            ),
            href: './projects/platform-integration'
        },

        {
            colSpanClass: "col-span-2 md:col-span-2 lg:col-span-3", rowSpanClass: "row-span-2 lg:row-span-2",
            content: (
                <div className="flex flex-col h-full relative group/card">
                    <PageLinkIcon />
                    <h2 className="text-xl font-bold mb-2">
                        INDUSTRIAL AR
                    </h2>
                    <div className="flex flex-row flex-1 min-h-0 min-w-0">

                        <div className="flex-1 min-w-0 rounded-lg overflow-hidden">
                            <ImageCarousel imageSources={['./industrial-ar/unity-plane.png', './industrial-ar/train-transparent.jpg']} />
                        </div>

                        <div className="flex flex-col gap-1 ml-1 items-end justify-evenly">
                            <SkillBadge keepSmall icon={<SiUnity size={18} color="#FFFFFF" />} label="UNITY" invert />


                        </div>

                    </div>

                    <p className="text-gray-600">App for transporation vehicle education in AR.</p>


                </div>
            ),
            href: './projects/industrial-ar'
        },

        {
            colSpanClass: "col-span-2 md:col-span-2 lg:col-span-3", rowSpanClass: "row-span-2 lg:row-span-2",
            content: (
                <div className="flex flex-col h-full relative group/card">
                    <PageLinkIcon />
                    <h2 className="text-xl font-bold mb-2">
                        2D/3D MODELING
                    </h2>
                    <div className="flex flex-row flex-1 min-h-0 min-w-0">

                        <div className="flex-1 min-w-0 rounded-lg overflow-hidden">
                            <ImageCarousel imageSources={['./modeling/skull.jpg', './modeling/trap.jpg', './modeling/1700site2.png']} />
                        </div>

                        <div className="flex flex-col gap-1 ml-1 items-end justify-evenly">
                            <SkillBadge keepSmall icon={<SiAutodeskrevit size={18} color="#186BFF" />} label="REVIT"  />
                            <SkillBadge keepSmall icon={<SiSketchup size={18} color="#005F9E" />} label="SKETCHUP" />
                            <SkillBadge keepSmall icon={<SiAutodeskmaya size={18} color="#37A5CC" />} label="MAYA" />
                            <SkillBadge keepSmall label="SUBSTANCE PAINTER" />

                        </div>

                    </div>

                    <p className="text-gray-600">Various models I created.</p>


                </div>
            ),
            href: './projects/modeling'
        },

        {
            colSpanClass: "col-span-2 md:col-span-2 lg:col-span-3", rowSpanClass: "row-span-2 lg:row-span-2",
            content: (
                <div className="flex flex-col h-full relative group/card">
                    <PageLinkIcon />
                    <h2 className="text-xl font-bold mb-2">
                        MEP COORDINATION
                    </h2>
                    <div className="flex flex-row flex-1 min-h-0 min-w-0">

                        <div className="flex-1 min-w-0 rounded-lg overflow-hidden">
                            <ImageCarousel imageSources={['./mep-coordination/mduct1.jpg', './mep-coordination/mep1.jpg']} />
                        </div>

                        <div className="flex flex-col gap-1 ml-1 items-end justify-evenly">

                            <SkillBadge keepSmall icon={<SiAutodesk size={18} color="#FFFFFF" />} label="NAVISWORKS" invert />
                            <SkillBadge keepSmall icon={<SiAutodeskrevit size={18} color="#186BFF" />} label="REVIT" />

                            <SkillBadge keepSmall label="BLUEBEAM" />


                        </div>

                    </div>

                    <p className="text-gray-600">Managing and modeling utitilies for construction.</p>


                </div>
            ),
        },

        {
            colSpanClass: "col-span-2 md:col-span-2 lg:col-span-3", rowSpanClass: "row-span-2 lg:row-span-2",
            content: (
                <div className="flex flex-col h-full relative group/card">
                    <PageLinkIcon />
                    <h2 className="text-xl font-bold mb-2">
                        REALITY CAPTURE
                    </h2>
                    <div className="flex flex-row flex-1 min-h-0 min-w-0">

                        <div className="flex-1 min-w-0 rounded-lg overflow-hidden">
                            <ImageCarousel imageSources={['./reality-capture/example.jpg', './reality-capture/example3.jpg', './reality-capture/olivina.png']} />
                        </div>

                        <div className="flex flex-col gap-1 ml-1 items-end justify-evenly">
                            <SkillBadge keepSmall label="LASER SCANNING" />
                            <SkillBadge keepSmall icon={<SiAutodesk size={18} color="#FFFFFF" />} label="RECAP" invert />
                            <SkillBadge keepSmall label="POINT CLOUDS" />


                        </div>

                    </div>

                    <p className="text-gray-600">Scanning built environments and digitizing them.</p>


                </div>
            ),
        },


        {
            colSpanClass: "col-span-2 md:col-span-2 lg:col-span-3", rowSpanClass: "row-span-2 lg:row-span-2",
            content: (
                <div className="flex flex-col h-full relative group/card">
                    <PageLinkIcon />
                    <h2 className="text-xl font-bold mb-2">
                        PORTFOLIO WEBSITE
                    </h2>
                    <div className="flex flex-row flex-1 min-h-0 min-w-0">

                        <div className="flex-1 min-w-0 rounded-lg overflow-hidden">
                            <ImageCarousel imageSources={['./portfolio/aboutme.png', './portfolio/homemobile.png']} />
                        </div>

                        <div className="flex flex-col gap-1 ml-1 items-end justify-evenly">
                            <SkillBadge keepSmall icon={<SiNextdotjs size={18} color="#FFFFFF" />} label="NEXT.JS" invert />
                            <SkillBadge keepSmall icon={<SiTypescript size={18} color="#3178C6" />} label="TYPESCRIPT" />
                            <SkillBadge keepSmall icon={<SiReact color="#61DAFB" />} label="REACT" />


                        </div>

                    </div>

                    <p className="text-gray-600">This website!</p>


                </div>
            ),
        },


  ];

  return (
    <Layout items={projectsForBentoGrid} />
  );
}