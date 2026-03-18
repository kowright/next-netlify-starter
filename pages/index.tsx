import React from "react";
import BentoBoxGrid, { BentoBoxGridItem } from "../components/BentoBoxGrid";

export default function Home() {
    const projectsForBentoGrid : BentoBoxGridItem[] = [
        { colSpanClass: "col-span-2 lg:col-span-3", rowSpanClass: "row-span-3",
            children: ( 
                <> <h2 className="text-xl font-semibold mb-2">SKILLS</h2> 
                <p className="text-gray-600 flex-1">I GOT EM</p> 
                </> 
            ), 
        },
        { colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-1", backgroundColor: 'bg-purple',
            children: ( 
                <> <h2 className="text-xl font-semibold mb-2">NAME</h2>
                <p className="text-gray-600 flex-1">BIG OBVIOUS NAME</p> 
                </> 
            ),
        }, 
        { colSpanClass: "col-span-1 lg:col-span-1", rowSpanClass: "row-span-1", 
            children: ( 
                <> <h2 className="text-xl font-semibold mb-2">ABOUT ME</h2> 
                <p className="text-gray-600 flex-1">LINKS OUT</p> 
                </> 
            ), 
        }, 
        { colSpanClass: "col-span-1 lg:col-span-3", rowSpanClass: "row-span-3", 
            children: ( 
                <> <h2 className="text-xl font-semibold mb-2">CAROUSEL HERE THAT YOU CAN CONTROL AND IT LINKS OUT</h2> 
                <p className="text-gray-600 flex-1">MAYBE A BUTTON SOMEWHERE TO JUST GO TO GENERAL PROJECTS</p>
                </> 
            ), 
        }, 
        { colSpanClass: "col-span-2 lg:col-span-1", rowSpanClass: "row-span-1", 
            children: ( 
                <> <h2 className="text-xl font-semibold mb-2">GITHUB</h2> 
                <p className="text-gray-600 flex-1">ICON</p> 
                </> 
            ),
        }, 
        { colSpanClass: "col-span-1 lg:col-span-1", rowSpanClass: "row-span-1", 
            children: ( 
                <> <h2 className="text-xl font-semibold mb-2">LINKEDIN</h2> 
                <p className="text-gray-600 flex-1">ICON</p>
                </>
            ), 
        }, 
        { colSpanClass: "col-span-1 lg:col-span-1", rowSpanClass: "row-span-1", 
            children: ( 
                <> <h2 className="text-xl font-semibold mb-2">EMAIL</h2> 
                <p className="text-gray-600 flex-1">IT BETTA FIT</p> 
                </> 
            ), 
        }, 
    ];

  return (
    <main className="min-h-screen bg-gray-50 p-6 md:p-12 overflow-auto lg:overflow-hidden flex flex-col items-center">
      <BentoBoxGrid items={projectsForBentoGrid} />
    </main>
  );
}