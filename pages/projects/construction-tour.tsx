import { BentoBoxGridItem } from "../../components/BentoBoxGrid";
import Layout from "../../components/Layout";
import { SiNodedotjs, SiReact, SiTypescript, SiUnity } from "react-icons/si";
import SkillBadge from "../../components/SkillBadge";
import { GithubBox, LinkedInBox, NavBox } from "../../components/BoxUtil";
import VideoPlayer from "../../components/VideoPlayer";

export default function ConstructionTourPage() {

    const projectsForBentoGrid: BentoBoxGridItem[] = [
        {
            colSpanClass: "col-span-2 lg:col-span-3", rowSpanClass: "row-span-3 lg:row-span-3",
            content: (
                <>
                    <h2 className="text-xl font-semibold mb-2">VIDEOS</h2>
                    <div className="flex-1 rounded-lg overflow-hidden">
                        <VideoPlayer videos={["/construction-tour/trophys.mp4", "/construction-tour/nighttoday.mp4"]} />
                    </div>
                </>
            ),
        },
        {
            colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-1", backgroundColor: 'bg-red-600',
            content: (
                <>
                    <h2 className="text-4xl font-black text-white">CONSTRUCTION TOUR</h2>

                    <p className="flex-1 text-black">2020</p>
                </>
            ),
        },

        GithubBox('https://github.com/kowright/the-mind'),

        {
            colSpanClass: "col-span-2 lg:col-span-3", rowSpanClass: "row-span-1 lg:row-span-2", backgroundColor: 'bg-[#b9e158]',
            content: (
                <>
                    <h2 className="text-xl font-semibold mb-2">WHAT</h2>
               
                      
                        <p>Developed an educational virtual reality construction site tour using Unity and VRTK, designed for Oculus with 3DOF tracking which includes:</p>
                        <p>Interactive locomotion systems (teleportation, waypoint navigation, minimap and walking)</p>
                        <p>Dual UI systems (body-locked and world-locked menus)</p>
                        <p> Construction timeline playback with 3D audio (play/pause controls)</p>
                                            <p> Environmental controls (e.g., day/night toggle)</p>

            
           

                </>
            ),
        },

        {
            colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-1", backgroundColor: 'bg-[#F5918D]',
            content: (
                <div>
                    <h2 className="text-xl font-semibold mb-2 text-white">STACK</h2>
                    <div className='flex flex-row gap-2 xl:gap-4 2xl:gap-8 flex-wrap'>
                    <SkillBadge keepSmall icon={<SiUnity size={18} color="#FFFFFF" />} label="UNITY" invert />
                    <SkillBadge keepSmall icon={<img src="/cSharp.svg" className="w-4 h-4" />} label="C#" />
                    <SkillBadge keepSmall label="VR" />
                   
                    </div>
               </div>
            ),
        },
        {
            colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-2", backgroundColor: 'bg-[#f76135]',
            content: (
           
                    <>
                        <h2 className="text-xl font-semibold mb-2">IMPACT</h2>
                        <p>Created an immersive tool that combines client visualization + safety training</p>
                        <p>Demonstrated that VR can improve engagement and retention compared to traditional training</p>
                        <p>Demonstrated that VR can provide a safe, controlled environment to understand real-world risks</p>
                    </>
          
            ),
        },
        {
            colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-2", backgroundColor: 'bg-[#FCBB21]',
            content: (
                <div>
                    <h2 className="text-xl font-semibold mb-2">WHY</h2>
                    <p>With my background in construction, I wanted to highlight  construction safety education, specifically focusing on OSHA Fatal Four hazards while demonstrating what I learned in class about creating VR environments.</p>
                </div>
            ),
        },
        NavBox('PROJECTS', '/projects', 'bg-[#779e1c]', true),



        LinkedInBox,

    ];

    return (
        <Layout items={projectsForBentoGrid} />
    );
}