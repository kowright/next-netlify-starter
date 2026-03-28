import { BentoBoxGridItem } from "../../components/BentoBoxGrid";
import Layout from "../../components/Layout";
import { SiUnity } from "react-icons/si";
import SkillBadge from "../../components/SkillBadge";
import { CSharpSkillBadge, NavBox } from "../../components/BoxUtil";
import VideoPlayer from "../../components/VideoPlayer";

export default function IndustrialARPage() {

    const planeParts = "https://res.cloudinary.com/drqmbimij/video/upload/v1774567496/planepartsshortened_xzjpy9.mp4";
    const train = "https://res.cloudinary.com/drqmbimij/video/upload/v1774567535/20201207_183320_cc6zgm.mp4";
    const portals = "https://res.cloudinary.com/drqmbimij/video/upload/v1774567596/portals_1_l1jtng.mp4"
    const spawn = "https://res.cloudinary.com/drqmbimij/video/upload/v1774567671/spawn_1_pdlu8o.mp4";

    const projectsForBentoGrid: BentoBoxGridItem[] = [
        {
            colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-5 lg:row-span-5",
            content: (
                <>
                    <h2 className="text-xl font-semibold mb-2">VIDEOS</h2>
                    <div className="flex-1 rounded-lg overflow-hidden">
                        <VideoPlayer videos={[planeParts, train, portals, spawn]} />
                    </div>
                </>
            ),
        },
        {
            colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-1", backgroundColor: 'bg-red-600',
            content: (
                <>
                    <h2 className="text-4xl font-black text-white mb-2">INDUSTRIAL AR</h2>

                    <p className="flex-1 text-white">2020</p>
                </>
            ),
        },


        {
            colSpanClass: "col-span-2 lg:col-span-1", rowSpanClass: "row-span-1 lg:row-span-1", backgroundColor: 'bg-[#b9e158]',
            content: (
                <div>
                 
                    <div className='flex flex-row gap-2 xl:gap-4 2xl:gap-8 flex-wrap'>

                        <SkillBadge keepSmall icon={<SiUnity size={18} color="#FFFFFF" />} label="UNITY" invert />
                        <CSharpSkillBadge />

                    </div>

                </div>
            ),
        },

        NavBox('PROJECTS', '/projects', 'bg-[#779e1c]', true),

        {
            colSpanClass: "col-span-2 lg:col-span-4", rowSpanClass: "row-span-3 lg:row-span-2", backgroundColor: 'bg-[#f76135]',
            content: (
                <div>
                    <h2 className="text-xl font-semibold mb-2 text-white">WHAT</h2>
                    <p className='text-white'>Built a mobile AR prototype using Unity, AR Foundation, and ARCore that combines interactive UI, 3D models, and immersive media:</p>

                    <ul className="list-disc pl-6 space-y-1 text-white pt-2 pb-2">
                        <li>Spawn and place a 3D objects on real-world surfaces using AR plane detection</li>
                        <li>Scale and position objects dynamically using a ghost preview model</li>
                        <li>Explore individual airplane & train components through interactive UI flows</li>
                        <li>Enter AR portals to view 360 degree environments</li>
                        <li>Designed full application flow and UI architecture using wireframes before development</li>
                    </ul>
                </div>
            ),
        },


        {
            colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-2 lg:row-span-2", backgroundColor: 'bg-[#F5918D]',
            content: (
                <div>
                    <h2 className="text-xl font-semibold mb-2">IMPACT</h2>
                    <p>Developed an interactive AR application that allows users to explore and understand complex industrial products through spatial visualization, guided UI, and immersive 360 content.</p>

                </div>
            ),
        },

        {
            colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-2", backgroundColor: 'bg-[#FCBB21]',
            content: (
                <div>
                    <h2 className="text-xl font-semibold text-black mb-2">WHY</h2>
                    <p>The project was based on a fictional client request for an industrial visualization tool that could:</p>
                    <ul className="list-disc pl-6 space-y-1 pt-2 pb-2">

                        <li>Clearly explain product components</li>
                        <li>Provide an intuitive, interactive user interface</li>
                        <li>Leverage augmented reality and 360 media for immersive exploration</li>
                    </ul>

                </div>
            ),
        },



    


    ];

    return (
        <Layout items={projectsForBentoGrid} />
    );
}