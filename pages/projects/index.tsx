import { BentoBoxGridItem } from "../../components/BentoBoxGrid"
import Layout from "../../components/Layout";
import ImageCarousel, { ImageCarouselSlideProps } from "../../components/ImageCarousel";
import { HomeBox, LinkedInBox } from "../../components/BoxUtil";
import SkillBadge from "../../components/SkillBadge";
import { SiReact, SiTailwindcss, SiEmberdotjs, SiBlazor } from "react-icons/si";

export default function ProjectsPage() {
    const imageSources: ImageCarouselSlideProps[] = [
        {
            imageSource: "/cSharp.svg",
            linkSource: "/about"
        },
        {
            imageSource: "/cSharp.svg",
            linkSource: "/about"
        },
        {
            imageSource: "/cSharp.svg",
            linkSource: "/about"
        },
    ]

    const projectsForBentoGrid : BentoBoxGridItem[] = [ 
    { colSpanClass: "col-span-2 md:col-span-3", rowSpanClass: "row-span-2 lg:row-span-2", 
        content: ( 
            <div className="flex flex-col h-full">
                <h2 className="text-xl font-semibold mb-2">
                    NAME OF PROJECT
                </h2>
                <div className="flex flex-row flex-1 min-h-0 min-w-0">

                    <div className="flex-1 min-w-0 rounded-lg overflow-hidden">
                        <ImageCarousel imageSources={imageSources} />
                    </div>

                    <div className="flex flex-col gap-1 ml-1 items-end justify-evenly">

                        <SkillBadge keepSmall icon={<SiReact color="#61DAFB" />} label="REACT" />
                        <SkillBadge keepSmall icon={<SiTailwindcss color="#06B6D4" />} label="TAILWIND" />
                        <SkillBadge keepSmall icon={<SiEmberdotjs color="#E04E39" />} label="EMBER.JS" />
                        <SkillBadge keepSmall icon={<SiBlazor color="#512BD4" />} label="BLAZOR" />
                        <SkillBadge keepSmall icon={<SiBlazor color="#512BD4" />} label="BLAZOR" />
                    </div>
                   
                </div>
               
                <p className="text-gray-600">This is a good project, ya</p> 


            </div>
        ), 
    },
        {
            colSpanClass: "col-span-2 md:col-span-3", rowSpanClass: "row-span-2 lg:row-span-2",
            content: (
                <div className="flex flex-col h-full">
                    <h2 className="text-xl font-semibold mb-2">
                        NAME OF PROJECT
                    </h2>
                    <div className="flex flex-row flex-1 min-h-0 min-w-0">

                        <div className="flex-1 min-w-0 rounded-lg overflow-hidden">
                            <ImageCarousel imageSources={imageSources} />
                        </div>

                        <div className="flex flex-col gap-1 ml-1 items-end justify-evenly">

                            <SkillBadge keepSmall icon={<SiReact color="#61DAFB" />} label="REACT" />
                            <SkillBadge keepSmall icon={<SiTailwindcss color="#06B6D4" />} label="TAILWIND" />
                            <SkillBadge keepSmall icon={<SiEmberdotjs color="#E04E39" />} label="EMBER.JS" />
                            <SkillBadge keepSmall icon={<SiBlazor color="#512BD4" />} label="BLAZOR" />
                            <SkillBadge keepSmall icon={<SiBlazor color="#512BD4" />} label="BLAZOR" />
                        </div>

                    </div>

                    <p className="text-gray-600">This is a good project, ya</p>


                </div>
            ),
        },

 LinkedInBox, 

        { colSpanClass: "col-span-2 lg:col-span-4", rowSpanClass: "row-span-1 lg:row-span-1", backgroundColor: 'bg-orange-400',
        content: ( 
            <div className='flex items-center justify-center h-full'> 
                <h2 className="text-4xl font-black mb-2 text-center">PROJECTS</h2>
            </div> 
        ), 
    },

    HomeBox,

        {
            colSpanClass: "col-span-2 md:col-span-3", rowSpanClass: "row-span-2 lg:row-span-2",
            content: (
                <div className="flex flex-col h-full">
                    <h2 className="text-xl font-semibold mb-2">
                        NAME OF PROJECT
                    </h2>
                    <div className="flex flex-row flex-1 min-h-0 min-w-0">

                        <div className="flex-1 min-w-0 rounded-lg overflow-hidden">
                            <ImageCarousel imageSources={imageSources} />
                        </div>

                        <div className="flex flex-col gap-1 ml-1 items-end justify-evenly">

                            <SkillBadge keepSmall icon={<SiReact color="#61DAFB" />} label="REACT" />
                            <SkillBadge keepSmall icon={<SiTailwindcss color="#06B6D4" />} label="TAILWIND" />
                            <SkillBadge keepSmall icon={<SiEmberdotjs color="#E04E39" />} label="EMBER.JS" />
                            <SkillBadge keepSmall icon={<SiBlazor color="#512BD4" />} label="BLAZOR" />
                            <SkillBadge keepSmall icon={<SiBlazor color="#512BD4" />} label="BLAZOR" />
                        </div>

                    </div>

                    <p className="text-gray-600">This is a good project, ya</p>


                </div>
            ),
        },
        {
            colSpanClass: "col-span-2 md:col-span-3", rowSpanClass: "row-span-2 lg:row-span-2",
            content: (
                <div className="flex flex-col h-full">
                    <h2 className="text-xl font-semibold mb-2">
                        NAME OF PROJECT
                    </h2>
                    <div className="flex flex-row flex-1 min-h-0 min-w-0">

                        <div className="flex-1 min-w-0 rounded-lg overflow-hidden">
                            <ImageCarousel imageSources={imageSources} />
                        </div>

                        <div className="flex flex-col gap-1 ml-1 items-end justify-evenly">

                            <SkillBadge keepSmall icon={<SiReact color="#61DAFB" />} label="REACT" />
                            <SkillBadge keepSmall icon={<SiTailwindcss color="#06B6D4" />} label="TAILWIND" />
                            <SkillBadge keepSmall icon={<SiEmberdotjs color="#E04E39" />} label="EMBER.JS" />
                            <SkillBadge keepSmall icon={<SiBlazor color="#512BD4" />} label="BLAZOR" />
                            <SkillBadge keepSmall icon={<SiBlazor color="#512BD4" />} label="BLAZOR" />
                        </div>

                    </div>

                    <p className="text-gray-600">This is a good project, ya</p>


                </div>
            ),
        },

  ];

  return (
    <Layout items={projectsForBentoGrid} />
  );
}