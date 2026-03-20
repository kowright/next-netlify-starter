import { FaHome } from "react-icons/fa";
import { BentoBoxGridItem } from "../../components/BentoBoxGrid";
import Layout from "../../components/Layout";
import PageLinkIcon from "../../components/PageLinkIcon";
import { SiBlazor, SiGithub, SiNodedotjs, SiReact } from "react-icons/si";
import SkillBadge from "../../components/SkillBadge";

export default function MindPage() {

    const projectsForBentoGrid : BentoBoxGridItem[] = [ 
    { colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-3 lg:row-span-3", 
        content: ( 
            <> <h2 className="text-xl font-semibold mb-2">PICTURES</h2> 
            <p className="text-gray-600 flex-1">CAROUSEL WITH CAPTIONS! AND CAN CONTROL WHAT YOU SEE</p> 
            </> 
        ), 
    },
    { colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-1",
        content: ( 
            <>
                <h2 className="text-4xl font-black mb-2">THE MIND</h2>

            <p className="text-gray-600 flex-1">2026</p> 
            </> 
        ),
    }, 
        {
            colSpanClass: "col-span-1 lg:col-span-1", rowSpanClass: "row-span-1",
            content: (
                <div className="h-full flex-1">
                    <PageLinkIcon />

                    <SiGithub size="100%" color='#181717'/>
                </div>
            ),
        }, 
        {
            colSpanClass: "col-span-1 lg:col-span-1", rowSpanClass: "row-span-1",
            content: (
                <div className="h-full flex-1 flex">
                    <PageLinkIcon />

                    <FaHome size='100%' className="text-black" />

                </div>
            ),
        }, 
            { colSpanClass: "col-span-2 lg:col-span-4", rowSpanClass: "row-span-2 lg:row-span-1", 
        content: ( 
            <div>
                <h2 className="text-xl font-semibold mb-2">STACK</h2> 
                <div className='flex flex-row gap-2 xl:gap-4 2xl:gap-8 flex-wrap'>
                    <SkillBadge label="WEBSOCKETS" />
                    <SkillBadge icon={<SiReact size={18} color="#06B6D4" />} label="REACT NATIVE" />
                    <SkillBadge label="WEB" />
                    <SkillBadge label="MOBILE" />
                    <SkillBadge label="MULTIPLAYER" />
                    <SkillBadge icon={<SiNodedotjs size={18} color="#5FA04E" />} label="NODE.JS" />

                </div>
            </div>
        ), 
    }, 
        { colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-2", 
        content: ( 
            <div>
                <h2 className="text-xl font-semibold mb-2">WHAT</h2> 
                <p className="text-gray-600">REWORD: real time multiplayer card game for mobile and web</p>
                {/*<p className="text-gray-600 flex-1">WHY EX. WANTED TO LEARN X. there is only 1 challenge!</p> */}
            </div> 
        ),
    }, 
    { colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-2", 
        content: ( 
            <div>
                <h2 className="text-xl font-semibold mb-2">WHY</h2> 
                {/*<p className="text-gray-600 flex-1">OR WHAT EX. WHAT THE PROJECT DOES. solution is multiple bullet points with soft skills, not grandular, for recruiter</p> */}
                <p className="text-gray-600 flex-1">Implemented bidirectional communication between client and server</p>
                <p>Built a real-time messaging system using WebSockets</p>
            </div> 
        ), 
    }, 
 

    { colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-1", 
        content: ( 
            <>
                <h2 className="text-xl font-semibold mb-2">IMPACT</h2> 
                {/*<p className="text-gray-600 flex-1">SUCCESS MEASURES OR STATS</p>*/}
                <p className="text-gray-600 flex-1">SOMETHING LIKE I AM KNOWLEDGEABLE ABOUT WEBSOCKETS AND REACT NATIVE?</p>
            </>
        ), 
    }, 

  ];

  return (
    <Layout items={projectsForBentoGrid} />
  );
}