import { BentoBoxGridItem } from "../../components/BentoBoxGrid";
import Layout from "../../components/Layout";
import { SiAutodeskmaya, SiAutodeskrevit, SiSketchup, SiAutocad, SiAutodesk, SiUnity, SiHoudini, SiBlender } from "react-icons/si";
import SkillBadge from "../../components/SkillBadge";
import { NavBox } from "../../components/BoxUtil";
import ImageCarousel from "../../components/ImageCarousel";

export default function ModelingPage() {

    const imageSources: string[] = [
        '/modeling/skull.jpg',
        '/modeling/1700site2.png',
        '/modeling/parking-lot.jpg',
        '/modeling/jarvis1.png',
        '/modeling/trap.jpg',
        '/modeling/pool.jpg',
        '/modeling/jarvis5.png',
        '/modeling/lamp2.png',
        '/modeling/1700PENN_LOGISTICS2.jpg',
        '/modeling/jarvis4.png',
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
                    <h2 className="text-4xl font-black text-white mb-2">2D/3D MODELING</h2>

                    <p className="flex-1 text-white">2011+</p>
                </>
            ),
        },
        NavBox('PROJECTS', '/projects', 'bg-[#779e1c]', true),


        {
            colSpanClass: "col-span-2 lg:col-span-3", rowSpanClass: "row-span-1 lg:row-span-2", backgroundColor: 'bg-[#b9e158]',
            content: (
                <div>
                    <h2 className="text-xl font-semibold mb-2">STACK</h2>
                    <div className='flex flex-row gap-2 xl:gap-4 2xl:gap-8 flex-wrap'>

                        <SkillBadge keepSmall icon={<SiAutodeskrevit size={18} color="#186BFF" />} label="REVIT" />
                        <SkillBadge keepSmall icon={<SiSketchup size={18} color="#005F9E" />} label="SKETCHUP" />
                        <SkillBadge keepSmall icon={<SiAutodeskmaya size={18} color="#37A5CC" />} label="MAYA" />
                        <SkillBadge keepSmall icon={<SiAutocad size={18} color="#E51050" />} label="AUTOCAD" />
                        <SkillBadge keepSmall label="SUBSTANCE PAINTER" />
                        <SkillBadge keepSmall icon={<SiUnity size={18} color="#FFFFFF" />} label="UNITY" invert />
                        <SkillBadge keepSmall icon={<SiAutodesk size={18} color="#FFFFFF" />} label="NAVISWORKS" invert />
                        <SkillBadge keepSmall icon={<SiHoudini size={18} color="#FF4713" />} label="HOUDINI" invert />
                        <SkillBadge keepSmall icon={<SiBlender size={18} color="#E87D0D" />} label="BLENDER" />
                        <SkillBadge keepSmall icon={<SiAutodesk size={18} color="#FFFFFF" />} label="INVENTOR" invert />


                    </div>

                </div>
            ),
        },


        {
            colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-2", backgroundColor: 'bg-[#f76135]',
            content: (
                <div>
                    <h2 className="text-xl font-semibold mb-2 text-white">WHAT</h2>
                    <p className="text-white">These are examples of 2D & 3D models that I have created over the years. Some software were used to enhance the effect or environment of the models, not the inherent construction of the model itself.</p>

                </div>
            ),
        },
        {
            colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-2", backgroundColor: 'bg-[#FCBB21]',
            content: (
                <div>
                    <h2 className="text-xl font-semibold text-black mb-2">WHY</h2>
                    {/*<p className="text-gray-600 flex-1">OR WHAT EX. WHAT THE PROJECT DOES. solution is multiple bullet points with soft skills, not grandular, for recruiter</p> */}
                    <p className="text-black">Some models were created professionally for work and others for personal projects to learn more about a software or create assets for personal projects I had. Use cases range from architectural visualization, construction site phasing, game engine assets and more.</p>

                </div>
            ),
        },

        {
            colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-1 lg:row-span-2", backgroundColor: 'bg-[#F5918D]',
            content: (
                <div>
                    <h2 className="text-xl font-semibold mb-2">IMPACT</h2>
                    <p>My exposure and interest in computer aided modeling allowed me to have a more desirable candidacy for certain roles, be invested in at a company or have knowledge that led me to understand other job roles to better work together.</p>
                </div>
            ),
        },





    ];

    return (
        <Layout items={projectsForBentoGrid} />
    );
}