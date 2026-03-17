import React from "react";
import BentoBoxGrid from "../components/BentoBoxGrid"

export default function Home() {
    const projectsForBentoGrid = [ 
        { colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-1", 
            children: ( 
                <> <h2 className="text-xl font-semibold mb-2">NAME</h2> 
                <p className="text-gray-600 flex-1">BIG OBVIOUS NAME</p> 
                </> 
            ), 
        },
        { colSpanClass: "col-span-2 lg:col-span-3", rowSpanClass: "row-span-1",
            children: ( 
                <> <h2 className="text-xl font-semibold mb-2">IMPORTANT TITLES I HAVE?</h2>
                <p className="text-gray-600 flex-1">LIKE SOFTWARE/CIVIL ENG</p> 
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
        { colSpanClass: "col-span-1 lg:col-span-1", rowSpanClass: "row-span-1", 
            children: ( 
                <> <h2 className="text-xl font-semibold mb-2">COOL PICTURE</h2> 
                <p className="text-gray-600 flex-1">OF SOMETHING</p>
                </> 
            ), 
        }, 
        { colSpanClass: "col-span-2 lg:col-span-4", rowSpanClass: "row-span-3", 
            children: ( 
                <> <h2 className="text-xl font-semibold mb-2">ACTUAL PROJECTS</h2> 
                <p className="text-gray-600 flex-1">CAROUSEL HERE THAT YOU CAN CONTROL AND IT LINKS OUT</p> 
                <p className="text-gray-600">MAYBE A BUTTON SOMEWHERE TO JUST GO TO GENERAL PROJECTS</p> 
                </> 
            ),
        }, 
        { colSpanClass: "col-span-1 lg:col-span-1", rowSpanClass: "row-span-2", 
            children: ( 
                <> <h2 className="text-xl font-semibold mb-2">CONTACT</h2> 
                <p className="text-gray-600 flex-1">LINK OUT TO CONTACT PAGE</p>
                <p className="text-gray-600 flex-1">OR BUTTONS HERE FOR LINKEDIN AND GITHUB</p>

                </>
            ), 
        }, 
        { colSpanClass: "col-span-1 lg:col-span-1", rowSpanClass: "row-span-2", 
            children: ( 
                <> <h2 className="text-xl font-semibold mb-2">MAIN SKILLS</h2> 
                <p className="text-gray-600 flex-1">LIST EM!</p> 
                </> 
            ), 
        }, 
        { colSpanClass: "col-span-2 lg:col-span-1", rowSpanClass: "row-span-1", 
            children: (
                <> <h2 className="text-xl font-semibold mb-2">PRETTY PICTURE</h2> 
                <p className="text-gray-600 flex-1">SOMETHING I TOOK A PICTURE OF</p> 
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