import { BentoBoxGridItem } from "../../components/BentoBoxGrid";
import Layout from "../../components/Layout";
import { SiAutodesk, SiAutodeskrevit } from "react-icons/si";
import SkillBadge from "../../components/SkillBadge";
import { NavBox, LinkedInBox } from "../../components/BoxUtil";
import VideoPlayer from "../../components/VideoPlayer";

export default function MEPPage() {


    const topconBuilding = "https://res.cloudinary.com/drqmbimij/video/upload/v1774657617/Topcon_7901_Mass_Data_2_mgz1wl.mp4";

    const projectsForBentoGrid: BentoBoxGridItem[] = [
        {
            colSpanClass: "col-span-2 lg:col-span-3", rowSpanClass: "row-span-3 lg:row-span-3",
            content: (
                <>
                    <h2 className="text-xl font-semibold mb-2">VIDEO</h2>
                    <div className="flex-1 rounded-lg overflow-hidden">
                        <VideoPlayer videos={[topconBuilding]} />

                    </div>
                </>
            ),
        },
        {
            colSpanClass: "col-span-2 lg:col-span-3", rowSpanClass: "row-span-1", backgroundColor: 'bg-red-600',
            content: (
                <>
                    <h2 className="text-4xl font-black text-white mb-2">REALITY CAPTURE</h2>

                    <p className="flex-1 text-white">2017, 2021</p>
                </>
            ),
        },





        {
            colSpanClass: "col-span-2 lg:col-span-3", rowSpanClass: "row-span-1 lg:row-span-2", backgroundColor: 'bg-[#F5918D]',
            content: (
                <div className='space-y-2'>
                    <h2 className="text-xl font-semibold text">IMPACT</h2>
                    <p>Delivered high-accuracy digital representations of real-world sites, enabling better planning, design, and future renovations.</p>
                    <p>Preserved critical site and historical data, supporting long-term documentation and potential restoration efforts.</p>
                    <p> Improved workflows by converting raw scan data into actionable models used across architectural, structural, and MEP disciplines.</p>
                    <p>Presented findings to company executives and produced a 3D printed model of the building as a tangible project deliverable.</p>

                </div>
            ),
        },

        {
            colSpanClass: "col-span-2 lg:col-span-4", rowSpanClass: "row-span-1 lg:row-span-1", backgroundColor: 'bg-[#b9e158]',
            content: (
                <div>

                    <h2 className="text-xl font-semibold mb-2">STACK</h2>
                    <div className='flex flex-row gap-2 xl:gap-4 2xl:gap-4 flex-wrap'>

                        <SkillBadge keepSmall icon={<SiAutodesk size={18} color="#FFFFFF" />} label="NAVISWORKS" invert />
                        <SkillBadge keepSmall icon={<SiAutodeskrevit size={18} color="#186BFF" />} label="REVIT" />
                        <SkillBadge keepSmall label="EDGEWISE" />
                        <SkillBadge keepSmall icon={<SiAutodesk size={18} color="#FFFFFF" />} label="RECAP" invert />


                    </div>

                </div>
            ),
        },

        NavBox('PROJECTS', '/projects', 'bg-[#779e1c]', true),

        LinkedInBox,

        {
            colSpanClass: "col-span-2 lg:col-span-3", rowSpanClass: "row-span-3", backgroundColor: 'bg-[#f76135]',
            content: (
                <div className='lg:space-y-4 space-y-2'>
                    <h2 className="text-xl font-semibold mb-2 text-white">WHY</h2>

                    <p className="text-white">
                        Traditional surveying and documentation methods can miss detail, lack spatial context, or become outdated quickly.
                    </p>
                    <p className="text-white">
                        Accurate existing-conditions data is essential for renovation, infrastructure planning, and coordination across disciplines.
                    </p>

                    <p className="text-white">
                        Facilitated coordination between subcontractors, designers, ownership and other team members to validate design intent and constructability.

                    </p>
                    <p className="text-white">
                        Historical structures require precise documentation to preserve their current state and inform future restoration efforts.
                    </p>
                    <p className="text-white">
                        Teams benefit from visual, data-rich models that improve understanding beyond field notes and 2D drawings.
                    </p>
                </div>
            ),
        },





        {
            colSpanClass: "col-span-2 lg:col-span-3", rowSpanClass: "row-span-3", backgroundColor: 'bg-[#FCBB21]',
            content: (
                <div className='lg:space-y-4 space-y-2'>
                    <h2 className="text-xl font-semibold">WHAT</h2>

                    <p>Collaborated with a team of interns to perform comprehensive surveying and reality capture of an office building and surrounding infrastructure over a full summer.</p>
                    <p>Conducted internal and external scans using robotic total stations, laser scanners, GPS systems, and drone-captured terrain data.</p>
                    <p>Processed and registered point cloud data to create a cohesive, geolocated digital representation of the site.</p>
                    <p>
                        Performed laser scanning of a historic wine ruin in California to document its current condition and support future restoration and modeling efforts.{" "}
                        <a
                            href="https://www.independentnews.com/magazine/capturing-the-past-historic-livermore-winery-building-lives-on-in-a-3d-point-cloud/article_8e3ec4d2-26e5-11e8-8506-d749214d53a7.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline hover:text-blue-300"
                        >
                            Read Article
                        </a>
                    </p>
                    <p> Utilized Revit to model architectural and structural elements and Edgewise to generate MEP systems from scan data.</p>
                </div>
            ),
        },





    ];

    return (
        <Layout items={projectsForBentoGrid} />
    );
}