import { useRouter } from "next/router";
import BentoBoxGrid, { BentoBoxGridItem } from "../components/BentoBoxGrid";

export default function MindPage() {
  const router = useRouter();

    const projectsForBentoGrid : BentoBoxGridItem[] = [ 
    { colSpanClass: "col-span-2 lg:col-span-4", rowSpanClass: "row-span-3 lg:row-span-4", 
        children: ( 
            <> <h2 className="text-xl font-semibold mb-2">PICTURES</h2> 
            <p className="text-gray-600 flex-1">CAROUSEL WITH CAPTIONS! AND CAN CONTROL WHAT YOU SEE</p> 
            </> 
        ), 
    },
    { colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-1",
        children: ( 
            <> <h2 className="text-xl font-semibold mb-2">NAME OF PROJECT</h2>
            <p className="text-gray-600 flex-1">DESCRIPTION? PUT THE YEAR SOMEWHERE</p> 
            </> 
        ),
    }, 
    { colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-2", 
        children: ( 
            <> <h2 className="text-xl font-semibold mb-2">STACK</h2> 
            <p className="text-gray-600 flex-1">COULD ADD A FEATURES ITEM</p> 
            </> 
        ), 
    }, 
    { colSpanClass: "col-span-2 lg:col-span-1", rowSpanClass: "row-span-1", 
        children: ( 
            <> <h2 className="text-xl font-semibold mb-2">LINK</h2> 
            <p className="text-gray-600 flex-1">Square card</p>
            </> 
        ), 
    },    { colSpanClass: "col-span-2 lg:col-span-1", rowSpanClass: "row-span-1", 
        children: ( 
            <> <h2 className="text-xl font-semibold mb-2">HOME</h2> 
            <p className="text-gray-600 flex-1">OR ALL PROJECTS?</p>
            </> 
        ), 
    },  
    { colSpanClass: "col-span-2 lg:col-span-3", rowSpanClass: "row-span-2", 
        children: ( 
            <> <h2 className="text-xl font-semibold mb-2">CHALLENGE</h2> 
            <p className="text-gray-600 flex-1">NAME A PROBLEM</p> 
            </> 
        ),
    }, 
    { colSpanClass: "col-span-2 lg:col-span-3", rowSpanClass: "row-span-2", 
        children: ( 
            <> <h2 className="text-xl font-semibold mb-2">SOLUTION</h2> 
            <p className="text-gray-600 flex-1">NAME ITS SOLUTION AND COPY PASTE FOR OTHER CHAL+SOL</p>
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