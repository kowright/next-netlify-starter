import { BentoBoxGridItem } from "../../components/BentoBoxGrid";
import Layout from "../../components/Layout";
import { SiJavascript, SiNodedotjs } from "react-icons/si";
import SkillBadge from "../../components/SkillBadge";
import { GithubBox, NavBox } from "../../components/BoxUtil";
import ImageCarousel from "../../components/ImageCarousel";

export default function ModelingPage() {

    const imageSources: string[] = [
        '/platform-integration/splash.png',
        '/platform-integration/discord1.png',
        '/platform-integration/discord2.png',
        '/platform-integration/log.png'
    ]

    const projectsForBentoGrid: BentoBoxGridItem[] = [
        {
            colSpanClass: "col-span-2 lg:col-span-3", rowSpanClass: "row-span-3 lg:row-span-3",
            content: (
                <>
                    <h2 className="text-xl font-semibold mb-2">3D MODELS</h2>
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

                        <SkillBadge keepSmall icon={<SiNodedotjs size={18} color="#5FA04E" />} label="NODE.JS" />
                        <SkillBadge keepSmall icon={<SiJavascript size={18} color="#F7DF1E" />} label="JAVASCRIPT" />

                        <SkillBadge keepSmall label="WEBHOOKS" />


                    </div>

                </div>
            ),
        },

        NavBox('PROJECTS', '/projects', 'bg-[#779e1c]', true),


        {
            colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-1 lg:row-span-3", backgroundColor: 'bg-[#F5918D]',
            content: (
                <div>
                    <h2 className="text-xl font-semibold mb-2">IMPACT</h2>
                    <p>Prototyped an automated workflow system that connects product documentation, task management, and team communication into a single pipeline. This reduced manual coordination between teams by ensuring that the right people were notified, assigned work, and given context at the correct stage improving visibility, accountability, and handoff efficiency across the product lifecycle.</p>
                </div>
            ),
        },



        {
            colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-4", backgroundColor: 'bg-[#f76135]',
            content: (
                <div>
                    <h2 className="text-xl font-semibold mb-2 text-white">WHAT</h2>
                    <p className="text-white">

                        Built a Node.js-based prototype that automated workflow transitions across Notion - Linear - Discord using API integrations and polling:
                        Monitored Notion databases for page creation and status changes
                        Automatically created or updated Linear tasks tied to each Notion page
                        Assigned tasks dynamically to different teams based on workflow stage
                        Sent targeted Discord notifications with relevant Notion and Linear links
                        Maintained a persistent relationship between Notion pages and Linear tasks via stored identifiers
                        Handled multiple workflow scenarios:
                        New Notion page creation
                        Status updates with existing tasks
                        Status updates without existing tasks

                        The system effectively turned Notion into a single source of truth, with downstream automation ensuring that task ownership and communication stayed synchronized across all tools.</p>

                </div>
            ),
        },
        {
            colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-3", backgroundColor: 'bg-[#FCBB21]',
            content: (
                <div>
                    <h2 className="text-xl font-semibold text-black mb-2">WHY</h2>
                    {/*<p className="text-gray-600 flex-1">OR WHAT EX. WHAT THE PROJECT DOES. solution is multiple bullet points with soft skills, not grandular, for recruiter</p> */}
                    <p className="text-black">
                        The team relied on separate tools for core workflows:

                        Notion for documentation
                        Linear for task management
                        Discord for communication

                        While each tool worked well independently, there was no seamless connection between them. This led to:

                        Manual updates when work progressed between teams
                        Missed or delayed notifications
                        Lack of clarity around ownership at each stage
                        Repetitive administrative work to keep tools in sync

                        I wanted to explore how a status-driven system could automatically orchestrate workflows across tools, removing the need for manual coordination while maintaining flexibility for collaboration.</p>

                </div>
            ),
        },





    ];

    return (
        <Layout items={projectsForBentoGrid} />
    );
}