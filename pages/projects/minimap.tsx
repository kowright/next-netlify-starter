import { BentoBoxGridItem } from "../../components/BentoBoxGrid";
import Layout from "../../components/Layout";
import { SiUnity } from "react-icons/si";
import SkillBadge from "../../components/SkillBadge";
import { CSharpSkillBadge, GithubBox, NavBox } from "../../components/BoxUtil";
import VideoPlayer from "../../components/VideoPlayer";

export default function MinimapPage() {

    const minimap2 = "https://res.cloudinary.com/drqmbimij/video/upload/v1774462681/minimap2_rbrziv.mp4"
    const minimap3 = "https://res.cloudinary.com/drqmbimij/video/upload/v1774462681/minimap3_awo0ys.mp4"
    const minimap4 = "https://res.cloudinary.com/drqmbimij/video/upload/v1774462669/minimap4_aozsfy.mp4"
    const minimapdrop = "https://res.cloudinary.com/drqmbimij/video/upload/v1774462665/minimapdrop_heh7e9.mp4"

    const projectsForBentoGrid: BentoBoxGridItem[] = [
        {
            colSpanClass: "col-span-2 lg:col-span-3", rowSpanClass: "row-span-3 lg:row-span-3",
            content: (
                <>
                    <h2 className="text-xl font-semibold mb-2">VIDEOS</h2>
                    <div className="flex-1 rounded-lg overflow-hidden">
                        <VideoPlayer videos={[minimap2, minimap3, minimap4, minimapdrop]} />

                    </div>
                </>
            ),
        },
        {
            colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-1", backgroundColor: 'bg-red-600',
            content: (
                <>
                    <h2 className="text-4xl font-black text-white mb-2">MINIMAP</h2>

                    <p className="flex-1 text-white">2021-22</p>
                </>
            ),
        },
       
        {
            colSpanClass: "col-span-2 lg:col-span-1", rowSpanClass: "row-span-1 lg:row-span-2", backgroundColor: 'bg-[#b9e158]',
            content: (
                <div>

                    <div>
                        <h2 className="text-xl font-semibold mb-2">STACK</h2>
                        <div className='flex flex-row gap-2 xl:gap-4 2xl:gap-4 flex-wrap'>

                            <CSharpSkillBadge />
                            <SkillBadge keepSmall icon={<SiUnity size={18} color="#FFFFFF" />} label="UNITY" invert />
                        </div>

                    </div>

                </div>
            ),
        },


        {
            colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-2 lg:row-span-2", backgroundColor: 'bg-[#F5918D]',
            content: (
                <div>
                    <h2 className="text-xl font-semibold">IMPACT</h2>
                    <p>The prototype was well-received by the team and adopted into the actual product. The minimap was demoed in front of multiple clients, who cited the minimap as an innovative & desirable feature. The team decided to invest heavily into adding features into the minimap, which resulted in some of the features mentioned on this page.</p>
                </div>
            ),
        },



        NavBox('PROJECTS', '/projects', 'bg-[#779e1c]', true),


        {
            colSpanClass: "col-span-2 lg:col-span-3", rowSpanClass: "row-span-5 lg:row-span-4", backgroundColor: 'bg-[#f76135]',
            content: (
                <div>
                    <h2 className="text-xl font-semibold mb-2 text-white">WHAT</h2>
                    <div className='lg:space-y-4 space-y-2'>

                    <p className="text-white">Designed and developed a 3D interactive map.

                        Key functionality included:</p>

                    <p className="text-white"><span className="underline">Multi-view map: </span>
                            World view (entire 3D scene above the plane)
                        Building view (localized 3D structure when plane is flipped over)
                        Floor view (localized 2D floorplan of world or building)
                    </p>
                    <p className="text-white"><span className="underline">Dual-dimension switching: </span>
                    3D to 2D transitions based on map axis orientation to show 3D when map is parallel to ground and 2D when perpendicular</p>
                    <p className="text-white"><span className="underline">Dual-display modes: </span>
                            Transparent vs. solid/opague rendering</p>
                    <p className="text-white"><span className="underline">User context features: </span>
                        Live player location tracking on all views, dimensions and displays
                        User generated bookmarked location tracking
                    </p>
                    <p className="text-white"><span className="underline">Interaction design: </span>
                        Minimal-button input system for intuitive control
                        Physical movement of map for different views and dimensions for intuivive control
                            Drag-and-relocate functionality, similar to Google Maps-style repositioning</p>
                        </div>
                </div>
            ),
        },



 

        {
            colSpanClass: "col-span-2 lg:col-span-3", rowSpanClass: "row-span-5 lg:row-span-4", backgroundColor: 'bg-[#FCBB21]',
            content: (
                <div>
                    <h2 className="text-xl font-semibold text-black mb-2">WHY</h2>
                    <div className='lg:space-y-4 space-y-2'>

                    <p className="text-black">The feature was created as an introductory task to learn a company's codebase, but was intentionally scoped to solve a real usability problem I had.</p>

                        <p>With my background in construction where spatial awareness of a building is critical, I recognized that it was easy to lose track of where I was in a 3D virtual space and I recognized some similarities in the barriers I and others had with a laptop screen navigating a 3D soon-to-be constructed building and a person in VR navigating a 3D buliding. The goal was to:</p> 

                        <p>Improve navigation, spatial awareness and orientation within complex 3D environments</p> 
                        <p>Create a system that is intuitive and low-friction, especially for users unfamiliar with the controllers or app controls</p> 
                        <p>Reduce cognitive load by minimizing controller inputs</p> 
                        <p>The idea was to explore how natural interactions could replace traditional UI-heavy map systems in a 3D virtual world.</p>
                   </div>
                </div>
            ),
        },





    ];

    return (
        <Layout items={projectsForBentoGrid} />
    );
}