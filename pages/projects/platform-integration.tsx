import { BentoBoxGridItem } from "../../components/BentoBoxGrid";
import Layout from "../../components/Layout";
import { SiUnity } from "react-icons/si";
import SkillBadge from "../../components/SkillBadge";
import { GithubBox, NavBox } from "../../components/BoxUtil";
import ImageCarousel from "../../components/ImageCarousel";

export default function PlatformIntegrationPage() {

    const imageSources: string[] = [
        "/the-mind/the-mind-1.jpg",
        "/the-mind/the-mind-2.jpg",
        "/the-mind/the-mind-3.jpg",
        "/the-mind/the-mind-4.jpg",
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
                    <h2 className="text-4xl font-black text-white mb-2">PLATFORM INTEGRATION</h2>

                    <p className="flex-1 text-white">2021-22</p>
                </>
            ),
        },

        GithubBox('https://github.com/kowright/the-mind'),

        {
            colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-1 lg:row-span-2", backgroundColor: 'bg-[#b9e158]',
            content: (
                <div>
                    <h2 className="text-xl font-semibold mb-2">STACK</h2>
                    <div className='flex flex-row gap-2 xl:gap-4 2xl:gap-8 flex-wrap'>

                        <SkillBadge keepSmall icon={<SiUnity size={18} color="#FFFFFF" />} label="UNITY" invert />
                        <SkillBadge keepSmall icon={<img src="/cSharp.svg" className="w-4 h-4" />} label="C#" />

                    </div>

                </div>
            ),
        },

        NavBox('PROJECTS', '/projects', 'bg-[#779e1c]', true),


        {
            colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-1 lg:row-span-2", backgroundColor: 'bg-[#F5918D]',
            content: (
                <div>
                    <h2 className="text-xl font-semibold mb-2">IMPACT</h2>
                    <p>The prototype was well-received by the team and adopted into the actual product, transitioning from a learning exercise into a production feature. The minimap was demoed in front of multiple clients, who cited the minimap as an innovative & desirable feature. The team decided to invest heavily into adding features into the minimap, which resulted in some of the features mentioned on this page.</p>
                </div>
            ),
        },



        {
            colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-2", backgroundColor: 'bg-[#f76135]',
            content: (
                <div>
                    <h2 className="text-xl font-semibold mb-2 text-white">WHAT</h2>
                    <p className="text-white">Designed and developed an interactive minimap system in Unity as an onboarding prototype, which later evolved into a production feature.

                        Key functionality included:

                        Dual-mode map:
                        World view (entire scene)
                        Building view (localized 3D structure)
                        Dynamic perspective switching:
                        3D - 2D transitions based on device orientation
                        Multiple display modes:
                        Transparent vs. solid rendering
                        User context features:
                        Player location tracking
                        World bookmarks
                        Interaction design:
                        Minimal-button input system for intuitive control
                        Extended prototype:
                        Drag-and-relocate functionality, similar to Google Maps-style repositioning</p>

                </div>
            ),
        },
        {
            colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-2", backgroundColor: 'bg-[#FCBB21]',
            content: (
                <div>
                    <h2 className="text-xl font-semibold text-black mb-2">WHY</h2>
                    {/*<p className="text-gray-600 flex-1">OR WHAT EX. WHAT THE PROJECT DOES. solution is multiple bullet points with soft skills, not grandular, for recruiter</p> */}
                    <p className="text-black">The project was created as an introductory task to learn the codebase, but was intentionally scoped to solve a real usability problem.

                        With a background in construction, where spatial awareness is critical and I navigated numerous people through digital buildings, the goal was to:

                        Improve navigation, spatial awareness and orientation within complex 3D environments
                        Create a system that is intuitive and low-friction, especially for users unfamiliar with complex controls
                        Reduce cognitive load by:
                        Minimizing button inputs
                        Using physical interaction (orientation-based switching) instead of menus

                        The idea was to explore how natural interactions could replace traditional UI-heavy map systems.</p>

                </div>
            ),
        },





    ];

    return (
        <Layout items={projectsForBentoGrid} />
    );
}