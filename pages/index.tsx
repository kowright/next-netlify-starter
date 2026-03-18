import React from "react";
import BentoBoxGrid, { BentoBoxGridItem } from "../components/BentoBoxGrid";
import Layout from "../components/Layout";
import { SiGithub } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
    const projectsForBentoGrid : BentoBoxGridItem[] = [
        { colSpanClass: "col-span-2 lg:col-span-3", rowSpanClass: "row-span-3",
            content: ( 
                <> 
                    <h2 className="text-4xl font-black mb-2">SKILLS</h2> 
                    <p className="text-gray-600 flex-1">I GOT EM</p> 
                </> 
            ), 
        },
        { colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-1", backgroundColor: 'bg-purple',
            content: ( 
                <> 
                     <h2 className="text-4xl font-black mb-2">NAME</h2>
                    <p className="text-gray-600 flex-1">BIG OBVIOUS NAME</p> 
                </> 
            ),
        }, 
        { colSpanClass: "col-span-2 lg:col-span-1", rowSpanClass: "row-span-1", 
            content: ( 
                <> 
                    <h2 className="text-4xl font-black mb-2">ABOUT ME</h2> 
                    <p className="text-gray-600 flex-1">LINKS OUT</p> 
                </> 
            ), 
        }, 
        { colSpanClass: "col-span-2 lg:col-span-3", rowSpanClass: "row-span-3", 
            content: ( 
                <>
                     <h2 className="text-4xl font-black mb-2">CAROUSEL HERE THAT YOU CAN CONTROL AND IT LINKS OUT</h2> 
                    <p className="text-gray-600 flex-1">MAYBE A BUTTON SOMEWHERE TO JUST GO TO GENERAL PROJECTS</p>
                </> 
            ), 
        }, 
        { colSpanClass: "col-span-1 lg:col-span-1", rowSpanClass: "row-span-1", 
            content: ( 
                <div className="h-full flex-1">
                  <SiGithub size="100%" />
                </div>
            ),
        }, 
        { colSpanClass: "col-span-1 lg:col-span-1", rowSpanClass: "row-span-1", 
            content: ( 
                <div className="h-full flex-1">
                  <FaLinkedin size='100%' className="text-blue-600"/>
                </div>
            ), 
        }, 
        { colSpanClass: "col-span-2 lg:col-span-1", rowSpanClass: "row-span-1", 
            content: ( 
                <div className="flex items-center justify-center h-full"> 
                    <p className="break-words">
                      kortneywright<wbr/>@email.com
                    </p>
                </div> 
            ), 
        }, 
    ];

  return (
    <Layout items={projectsForBentoGrid} />
  );
}