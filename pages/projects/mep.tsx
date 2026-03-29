import { BentoBoxGridItem } from "../../components/BentoBoxGrid";
import Layout from "../../components/Layout";
import { SiAutodesk, SiAutodeskrevit } from "react-icons/si";
import SkillBadge from "../../components/SkillBadge";
import { NavBox } from "../../components/BoxUtil";
import VideoPlayer from "../../components/VideoPlayer";

export default function MEPPage() {


    const building1700 = "https://res.cloudinary.com/drqmbimij/video/upload/v1774655694/4DVideoof1770_s6ur9e.mp4";
    
    const projectsForBentoGrid: BentoBoxGridItem[] = [
        {
            colSpanClass: "col-span-2 lg:col-span-3", rowSpanClass: "row-span-3 lg:row-span-3",
            content: (
                <>
                    <h2 className="text-xl font-semibold mb-2">VIDEO</h2>
                    <div className="flex-1 rounded-lg overflow-hidden">
                        <VideoPlayer videos={[building1700]} />

                    </div>
                </>
            ),
        },
        {
            colSpanClass: "col-span-2 lg:col-span-3", rowSpanClass: "row-span-2 lg:row-span-1", backgroundColor: 'bg-red-600',
            content: (
                <>
                    <h2 className="text-4xl font-black text-white">MEP COORDINATION & SIMULATIONS</h2>

                    <p className="flex-1 text-white">2019-2021</p>
                </>
            ),
        },

    



        {
            colSpanClass: "col-span-2 lg:col-span-3", rowSpanClass: "row-span-3 lg:row-span-2", backgroundColor: 'bg-[#F5918D]',
            content: (
                <div className='space-y-2'>
                    <h2 className="text-xl font-semibold">IMPACT</h2>
                    <p>Delivered multiple coordinated & signed off building models and floorplans that reduced construction conflicts and rework during installation.</p>
                    <p>Improved communication across designers, contractors stakeholders, and ownership by establishing a single, reliable source of truth.</p>
                    <p>Enhanced project planning, project execution and stakeholder understanding through 4D simulation, making construction phasing more transparent and accessible.</p>
                </div>
            ),
        },

        {
            colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-1 lg:row-span-1", backgroundColor: 'bg-[#b9e158]',
            content: (
                <div>

                    <h2 className="text-xl font-semibold mb-2">STACK</h2>
                    <div className='flex flex-row gap-2 xl:gap-4 flex-wrap'>

                        <SkillBadge icon={<SiAutodesk size={18} color="#FFFFFF" />} label="NAVISWORKS" invert />
                        <SkillBadge icon={<SiAutodeskrevit size={18} color="#186BFF" />} label="REVIT" />


                    </div>

                </div>
            ),
        },

        NavBox('PROJECTS', '/projects', 'bg-[#779e1c]', true),


        {
            colSpanClass: "col-span-2 lg:col-span-3", rowSpanClass: "row-span-5 lg:row-span-4", backgroundColor: 'bg-[#f76135]',
            content: (
                <div className='lg:space-y-4 space-y-2'>
                    <h2 className="text-xl font-semibold mb-2 text-white">SOLUTION</h2>
                


                    <p className="text-white">
                        Led MEP coordination by integrating mechanical, electrical, plumbing, architectural, structural, fire protection 3D models and more into a unified 3D environment.
                    </p>
                    <p className="text-white">
                        Established protocols, ran meetings, managed model intake, ran clash detection on models and performed quality control checks on 3D models before creating final drawings.
                        </p>
           
                    <p className="text-white">
                            Facilitated coordination between subcontractors, designers, ownership and other team members to validate design intent and constructability.

                    </p>
                    <p className="text-white">
                            Developed and presented a 4D simulation (3D and time) for a renovation of a office building project in Washington, DC, illustrating construction sequencing from demolition through the new build out by linking schedule activities to model elements.
                        </p>
                        <p className="text-white">
                            Enabled stakeholders to visually track progress and better understand construction phasing compared to traditional schedule gantt charts.
                        </p>
                </div>
            ),
        },





        {
            colSpanClass: "col-span-2 lg:col-span-3", rowSpanClass: "row-span-3", backgroundColor: 'bg-[#FCBB21]',
            content: (
                <div className='lg:space-y-4 space-y-2'>
                    <h2 className="text-xl font-semibold text-black mb-2 gap-2">CHALLENGE</h2>
                    <p>Traditional 2D contract drawings often fail to capture real-world spatial conflicts between systems, leading to costly issues during construction.</p>
                    <p>Complex building projects require tight coordination between multiple disciplines to ensure systems function together efficiently, are up to code and are physically possible.</p>
                    <p>Stakeholders thrive with clear and visual tools to understand both spatial relationships and construction timelines beyond static schedules, especially when information can change daily and needs to be communicated quickly and effectively.</p>

                </div>
            ),
        },





    ];

    return (
        <Layout items={projectsForBentoGrid} />
    );
}