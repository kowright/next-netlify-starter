import { BentoBoxGridItem } from "../../components/BentoBoxGrid";
import Layout from "../../components/Layout";
import { SiFigma, SiNodedotjs, SiPostgresql, SiPostman, SiReact, SiTailwindcss, SiTypescript, SiUnity } from "react-icons/si";
import SkillBadge from "../../components/SkillBadge";
import { GithubBox, LinkedInBox, NavBox } from "../../components/BoxUtil";
import ImageCarousel from "../../components/ImageCarousel";

export default function ProjectManagementTool() {

    const projectsForBentoGrid: BentoBoxGridItem[] = [
        {
            colSpanClass: "col-span-2 lg:col-span-3", rowSpanClass: "row-span-3 lg:row-span-3",
            content: (
                <>
                    <h2 className="text-xl font-semibold mb-2">PICTURE</h2>
                    <div className="flex-1 rounded-lg overflow-hidden">
                        <ImageCarousel imageSources={["/project-management/pm-1.gif", "/project-management/pm-2.gif","/project-management/project1.png", "/project-management/project2.png", "/project-management/project3.png", "/project-management/project4.png"]} />

                    </div>
                </>
            ),
        },
        {
            colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-1", backgroundColor: 'bg-red-600',
            content: (
                <>
                    <h2 className="text-3xl font-black text-white">PROJECT MANAGEMENT TOOL</h2>

                    <p className="flex-1 text-black">2024</p>
                </>
            ),
        },

        GithubBox('https://github.com/kowright/the-mind'),

        {
            colSpanClass: "col-span-2 lg:col-span-3", rowSpanClass: "row-span-1 lg:row-span-2", backgroundColor: 'bg-[#b9e158]',
            content: (
                <>
                    <h2 className="text-xl font-semibold">WHAT</h2>


                    <p>Built a prototype of a project management tool centered around a single source of truth with multi-view flexibility:</p>
                    <ul className="list-disc pl-6 space-y-1">

                        <li>View the same dataset across Table, List, Timeline, and Kanban layouts</li>
                        <li>Create and edit tags, tasks, milestones and more</li>
                        <li>Upload and associate images with users</li>
                        <li>Drag and resize tasks directly within the Timeline view</li>
                        <li>Organize work with tags, roadmaps, and assignees</li>
                        <li>Dynamically customize views to highlight relevant information</li>
                    </ul>

                </>
            ),
        },

        {
            colSpanClass: "col-span-2 lg:col-span-1", rowSpanClass: "row-span-3", backgroundColor: 'bg-[#F5918D]',
            content: (
                <div>
                    <h2 className="text-xl font-semibold mb-2 text-white">STACK</h2>
                    <div className='flex flex-row gap-2 xl:gap-4 2xl:gap-8 flex-wrap'>

                        <SkillBadge keepSmall icon={<SiReact color="#61DAFB" />} label="REACT" />
                        <SkillBadge keepSmall icon={<SiTailwindcss color="#06B6D4" />} label="TAILWIND" />
                        <SkillBadge keepSmall icon={<SiTypescript size={18} color="#3178C6" />} label="TYPESCRIPT" />

                        <SkillBadge keepSmall icon={<SiNodedotjs size={18} color="#5FA04E" />} label="NODE.JS" />
                        <SkillBadge keepSmall icon={<SiPostman size={18} color="#FF6C37" />} label="POSTMAN" />
                        <SkillBadge keepSmall icon={<SiFigma size={18} color="#F24E1E" />} label="FIGMA" />
                        <SkillBadge keepSmall icon={<SiPostgresql size={18} color="#4169E1" />} label="POSTGRES" />

                    </div>
                </div>
            ),
        },
        {
            colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-2", backgroundColor: 'bg-[#f76135]',
            content: (

                <div>
                    <h2 className="text-xl font-semibold mb-2">IMPACT</h2>
                    <p>Designed a flexible project management prototype that unifies multiple planning views into a single system to reduce friction when managing projects across different stages, improving clarity, adaptability, and overall workflow efficiency.</p>
                </div>

            ),
        },
        {
            colSpanClass: "col-span-2 lg:col-span-3", rowSpanClass: "row-span-3", backgroundColor: 'bg-[#FCBB21]',
            content: (
                <div>
                    <h2 className="text-xl font-semibold mb-2">WHY</h2>
                    <p>Existing tools like JIRA, Miro, Microsoft Project, Notion, and Linear each solve specific problems well, but fall short when used together in my experience: </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Linear offers strong roadmapping, but lacks shared milestones across multiple disciplines</li>
                        <li>Miro enables creative freedom to make freeform shapes, but lacks structure to be updated without manually moving every shape</li>
                        <li>Notion provides multiple views, but requires manual setup to make objects heavily overlap each other</li>
                        <li>JIRA and Microsoft Project can feel overly complex</li>
                    </ul>

                    <p>This fragmentation forces teams to constantly switch tools or compromise on usability. I wanted to explore what a unified, flexible system could look like where the same data can be visualized, filtered and organized more efficiently.</p>
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