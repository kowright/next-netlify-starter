import { BentoBoxGridItem } from "../../components/BentoBoxGrid";
import Layout from "../../components/Layout";

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
            <> <h2 className="text-xl font-semibold mb-2">NAME OF PROJECT</h2>
            <p className="text-gray-600 flex-1">DESCRIPTION? PUT THE YEAR SOMEWHERE</p> 
            </> 
        ),
    }, 
        { colSpanClass: "col-span-1 lg:col-span-1", rowSpanClass: "row-span-1", 
        content: ( 
            <> <h2 className="text-xl font-semibold mb-2">LINK</h2> 
            <p className="text-gray-600 flex-1">Square card</p>
            </> 
        ), 
    },    { colSpanClass: "col-span-1 lg:col-span-1", rowSpanClass: "row-span-1", 
        content: ( 
            <> <h2 className="text-xl font-semibold mb-2">HOME</h2> 
            <p className="text-gray-600 flex-1">OR ALL PROJECTS?</p>
            </> 
        ), 
    }, 
            { colSpanClass: "col-span-2 lg:col-span-4", rowSpanClass: "row-span-2 lg:row-span-1", 
        content: ( 
            <> <h2 className="text-xl font-semibold mb-2">STACK</h2> 
            <p className="text-gray-600 flex-1">NAME EVERY N ANYTHING</p>
            </>
        ), 
    }, 
        { colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-2", 
        content: ( 
            <> <h2 className="text-xl font-semibold mb-2">CHALLENGE</h2> 
            <p className="text-gray-600 flex-1">WHY EX. WANTED TO LEARN X. there is only 1 challenge!</p> 
            </> 
        ),
    }, 
    { colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-2", 
        content: ( 
            <> <h2 className="text-xl font-semibold mb-2">SOLUTION</h2> 
            <p className="text-gray-600 flex-1">OR WHAT EX. WHAT THE PROJECT DOES. solution is multiple bullet points with soft skills, not grandular, for recruiter</p> 
            </> 
        ), 
    }, 
 

    { colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-1", 
        content: ( 
            <> <h2 className="text-xl font-semibold mb-2">IMPACT</h2> 
            <p className="text-gray-600 flex-1">SUCCESS MEASURES OR STATS</p>
            </>
        ), 
    }, 

  ];

  return (
    <Layout items={projectsForBentoGrid} />
  );
}