import React from "react";
import BentoBoxGrid, { BentoBoxGridItem } from "../components/BentoBoxGrid";
import Layout from "../components/Layout";

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
        { colSpanClass: "col-span-2 lg:col-span-1", rowSpanClass: "row-span-1", 
            content: ( 
                <> 
                     <h2 className="text-4xl font-black mb-2">GITHUB</h2> 
                    <p className="text-gray-600 flex-1">ICON</p> 
                </> 
            ),
        }, 
        { colSpanClass: "col-span-1 lg:col-span-1", rowSpanClass: "row-span-1", 
            content: ( 
                <> 
                     <h2 className="text-4xl font-black mb-2">LINKEDIN</h2> 
                    <p className="text-gray-600 flex-1">ICON</p>
                </>
            ), 
        }, 
        { colSpanClass: "col-span-1 lg:col-span-1", rowSpanClass: "row-span-1", 
            content: ( 
                <> 
                    <h2 className="text-4xl font-black mb-2">EMAIL</h2> 
                    <p className="text-gray-600 flex-1">IT BETTA FIT</p> 
                </> 
            ), 
        }, 
    ];

  return (
    <Layout items={projectsForBentoGrid} />
  );
}