import { BentoBoxGridItem } from "../../components/BentoItemBox";
import Layout from "../../components/Layout";
import { SiAutodesk, SiAutodeskrevit, SiTrimble } from "react-icons/si";
import SkillBadge from "../../components/SkillBadge";
import { NavBox } from "../../components/BoxUtil";
import ImageCarousel from "../../components/ImageCarousel";

export default function HololensPage() {

    const projectsForBentoGrid: BentoBoxGridItem[] = [
        {
            colSpanClass: "col-span-2 lg:col-span-3", rowSpanClass: "row-span-3 lg:row-span-3",
            content: (
                <>
                    <h2 className="text-xl font-semibold mb-2">VIDEO</h2>
                    <div className="flex-1 rounded-lg overflow-hidden">
                        <ImageCarousel imageSources={['/hololens/20200302_141258_HoloLens.jpg', '/hololens/20200302_142920_HoloLens.jpg', '/hololens/20200302_142936_HoloLens.jpg', '/hololens/20200302_142958_HoloLens.jpg']} />

                    </div>
                </>
            ),
        },
        {
            colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-1", backgroundColor: 'bg-red-600',
            content: (
                <>
                    <h2 className="text-4xl font-black text-white mb-2">HOLOLENS</h2>

                    <p className="flex-1 text-white">2020</p>
                </>
            ),
        },
        NavBox('PROJECTS', '/projects', 'bg-[#779e1c]', true),





        {
            colSpanClass: "col-span-2 lg:col-span-3", rowSpanClass: "row-span-4 lg:row-span-3", backgroundColor: 'bg-[#F5918D]',
            content: (
                <div className='space-y-2'>
                    <h2 className="text-xl font-semibold text">IMPACT</h2>
                    <p>Enabled immersive visualization of complex MEP systems by successfully deploying coordinated 3D models into mixed reality, improving stakeholder understanding and decision-making. </p>
                    <p>Helped airline representatives quickly identify design opportunities and spatial issues that were not as apparent in traditional 2D drawings or screen-based models.</p>
                    <p>Established internal workflows and documentation for XR adoption, creating a foundation for future use cases such as safety training and design visualization.</p>
                    <p> Pioneered innovation within the team by independently developing a working solution under limited guidance and evolving technology constraints.</p>
                    <p>Was positioned to lead safety and informational training sessions using the technology but project was cut short from the COVID-19 pandemic starting the week before.</p>
                </div>
            ),
        },


        {
            colSpanClass: "col-span-2 lg:col-span-3", rowSpanClass: "row-span-6 lg:row-span-5", backgroundColor: 'bg-[#FCBB21]',
            content: (
                <div className='lg:space-y-4 space-y-2'>
                    <h2 className="text-xl font-semibold">WHAT</h2>

                    <p>Led the exploration and implementation of Microsoft HoloLens 2 for visualizing MEP coordination models in a real-world airport environment.</p>
                    <p>Independently researched, tested, and developed workflows to convert and import high-detail 3D models into Trimble Connect, overcoming compatibility and performance challenges.</p>
                    <p>Optimized model performance by reducing geometry complexity and render distance to maintain usability and immersion within device limitations.</p>
                    <p>Conducted on-site testing in an active airport bag room, addressing constraints such as connectivity, safety, and real-world navigation.</p>
                    <p>Created internal documentation outlining processes, limitations, and best practices to support team adoption of XR technology.</p>
                    <p> Presented the solution to airline stakeholders, enabling them to walk through the space with accurately placed models and immediately identify design improvements.</p>
                    <p> Initiated development of an XR-based safety training concept, using modeled environments to simulate jobsite hazards for employee education.</p>
                    <p>Began modeling office spaces in Revit to support internal XR training applications, adapting workflows despite limited access due to COVID-19 disruptions.</p>


                </div>
            ),
        },


        {
            colSpanClass: "col-span-2 lg:col-span-3", rowSpanClass: "row-span-1 lg:row-span-1", backgroundColor: 'bg-[#b9e158]',
            content: (
                <div>

                    <h2 className="text-xl font-semibold mb-2">STACK</h2>
                    <div className='flex flex-row gap-2 xl:gap-4 flex-wrap'>
                        <SkillBadge icon={<SiAutodesk size={18} color="#FFFFFF" />} label="NAVISWORKS" invert />
                        <SkillBadge icon={<SiAutodeskrevit size={18} color="#186BFF" />} label="REVIT" />

                        <SkillBadge icon={<SiTrimble size={18} color="#0063A3" />} label="TRIMBLE CONNECT" />


                    </div>

                </div>
            ),
        },


        {
            colSpanClass: "col-span-2 lg:col-span-3", rowSpanClass: "row-span-3", backgroundColor: 'bg-[#f76135]',
            content: (
                <div className='lg:space-y-4 space-y-2'>
                    <h2 className="text-xl font-semibold mb-2 text-white">WHY</h2>

                    <p className="text-white">
                        Traditional coordination tools (2D drawings and desktop 3D models) limit spatial understanding, especially in dense, complex environments like airport bag rooms.
                    </p>
                    <p className="text-white">
                        Early-stage XR technology lacked mature documentation and standardized workflows, requiring experimentation to unlock its practical value.
                    </p>

                    <p className="text-white">
                        There was a need to improve communication with non-technical stakeholders by allowing them to experience designs at full scale.

                    </p>
                    <p className="text-white">
                        The construction industry benefits from enhanced safety training and visualization tools that simulate real-world conditions.
                    </p>
                
                </div>
            ),
        },








    ];

    return (
        <Layout items={projectsForBentoGrid} />
    );
}