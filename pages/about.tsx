import { useRouter } from "next/router";
import BentoBoxGrid, { BentoBoxGridItem } from "../components/BentoBoxGrid"

export default function AboutPage() {
  const router = useRouter();

    const projectsForBentoGrid : BentoBoxGridItem[] = [ 
    { colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-2 lg:row-span-1", 
        children: ( 
            <> 
                <h2 className="text-xl font-semibold mb-2">STORY</h2> 
                <p className="text-gray-600 flex-1">WORDS</p> 
            </> 
        ), 
    },



    { colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-2 lg:row-span-1", 
       children: ( 
            <> 
                <h2 className="text-xl font-semibold mb-2">CURRENT TITLE</h2> 
                <p className="text-gray-600 flex-1">TITLE AND COMPANY</p> 
            </> 
        ), 
    },
            { colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-2 lg:row-span-1", 
        children: ( 
            <> <h2 className="text-xl font-semibold mb-2">FRONTEND</h2> 
            <p className="text-gray-600 flex-1">WORDS</p> 
            </> 
        ), 
    },
            { colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-2", 
        children: ( 
            <> 
                <h2 className="text-xl font-semibold mb-2">RELEVANT</h2> 
                <p className="text-gray-600 flex-1">PICTURE</p> 
            </> 
        ), 
    }, 
         { colSpanClass: "col-span-2 lg:col-span-1", rowSpanClass: "row-span-1", 
       children: ( 
            <> 
                <h2 className="text-xl font-semibold mb-2">ABOUT PAGE</h2> 
                <p className="text-gray-600 flex-1">THIS IS IT</p> 
            </> 
        ), 
    }, 
    { colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-2 lg:row-span-1",
       children: ( 
            <> 
                <h2 className="text-xl font-semibold mb-2">BACKEND</h2> 
                <p className="text-gray-600 flex-1">TITLE AND COMPANY</p> 
            </> 
        ), 
    }, 
        { colSpanClass: "col-span-2 lg:col-span-1", rowSpanClass: "row-span-1", 
       children: ( 
            <> 
                <h2 className="text-xl font-semibold mb-2">HOME</h2> 
                <p className="text-gray-600 flex-1">ICON</p> 
            </> 
        ), 
    }, 

    { colSpanClass: "col-span-2 lg:col-span-4", rowSpanClass: "row-span-2 lg:row-span-1", 
       children: ( 
            <> 
                <h2 className="text-xl font-semibold mb-2">TECHNOLOGIES/FRAMEWORKS</h2> 
                <p className="text-gray-600 flex-1">PICTURE</p> 
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