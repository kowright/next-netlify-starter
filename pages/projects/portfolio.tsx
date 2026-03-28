import { BentoBoxGridItem } from "../../components/BentoBoxGrid";
import Layout from "../../components/Layout";
import { SiNextdotjs, SiReact, SiTypescript } from "react-icons/si";
import SkillBadge from "../../components/SkillBadge";
import { NavBox, LinkedInBox, GithubBox } from "../../components/BoxUtil";
import ImageCarousel from "../../components/ImageCarousel";

export default function PortfolioPage() {

    const projectsForBentoGrid: BentoBoxGridItem[] = [
        {
            colSpanClass: "col-span-2 lg:col-span-3", rowSpanClass: "row-span-3 lg:row-span-3",
            content: (
                <>
                    <h2 className="text-xl font-semibold mb-2">PICTURES</h2>
                    <div className="flex-1 rounded-lg overflow-hidden">
                        <ImageCarousel imageSources={['/portfolio/aboutme.png', '/portfolio/homemobile.png']} /> 

                    </div>
                </>
            ),
        },
        {
            colSpanClass: "col-span-2 lg:col-span-3", rowSpanClass: "row-span-1", backgroundColor: 'bg-red-600',
            content: (
                <>
                    <h2 className="text-4xl font-black text-white mb-2">PORTFOLIO</h2>

                    <p className="flex-1 text-white">2026</p>
                </>
            ),
        },





        {
            colSpanClass: "col-span-2 lg:col-span-3", rowSpanClass: "row-span-1 lg:row-span-1", backgroundColor: 'bg-[#b9e158]',
            content: (
                <div>

                    <h2 className="text-xl font-semibold mb-2">STACK</h2>
                    <div className='flex flex-row gap-2 xl:gap-4 2xl:gap-4 flex-wrap'>
                        <SkillBadge keepSmall icon={<SiNextdotjs size={18} color="#FFFFFF" />} label="NEXT.JS" invert />
                        <SkillBadge keepSmall icon={<SiTypescript size={18} color="#3178C6" />} label="TYPESCRIPT" />
                        <SkillBadge keepSmall icon={<SiReact color="#61DAFB" />} label="REACT" />

                        

                    </div>

                </div>
            ),
        },


        NavBox('PROJECTS', '/projects', 'bg-[#779e1c]', true),

        GithubBox('https://github.com/kowright/next-netlify-starter'),

        LinkedInBox,




        {
            colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-2", backgroundColor: 'bg-[#FCBB21]',
            content: (
                <div className='lg:space-y-4 space-y-2'>
                    <h2 className="text-xl font-semibold">WHAT</h2>

                    <p>Created a public portfolio website to showcase projects and skilled I have gained over the years for others to explore and learn. It was inspired by Neo-Brutalist style and bento box UI organization.</p>

                </div>
            ),
        },


        {
            colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-2", backgroundColor: 'bg-[#f76135]',
            content: (
                <div className='lg:space-y-4 space-y-2'>
                    <h2 className="text-xl font-semibold mb-2 text-white">WHY</h2>

                    <p className="text-white">
                        Wanted to recreate my portfolio with my own skills rather than a website builder.
                        </p>
                    <p className="text-white">
                        Creating a website gave me more control over when the website was up, allowed me to have more freedom to change what I wanted and I could exercise more creativity of how the website looked. 
                    </p>

                
                </div>
            ),
        },





        {
            colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-2 lg:row-span-2", backgroundColor: 'bg-[#F5918D]',
            content: (
                <div className='space-y-2'>
                    <h2 className="text-xl font-semibold text">IMPACT</h2>
                    <p>A website created by me that can be continuously updated.</p>
                    <p>A more cost-effective solution to website builders.</p>
                    <p>Explored the Next.js framework and am more similar with those workflows.</p>
                </div>
            ),
        },



    ];

    return (
        <Layout items={projectsForBentoGrid} />
    );
}