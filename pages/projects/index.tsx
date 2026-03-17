import { useRouter } from "next/router";
import BentoBoxGrid from "../../components/BentoBoxGrid"

export default function ProjectsPage() {
  const router = useRouter();

    const projectsForBentoGrid = [ 
    { colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-2 lg:row-span-2", 
        children: ( 
            <> 
                <h2 className="text-xl font-semibold mb-2">NAME OF PROJECT</h2> 
                <p className="text-gray-600 flex-1">PICTURE</p> 
            </> 
        ), 
    },
    { colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-2",
        children: ( 
            <> 
                <h2 className="text-xl font-semibold mb-2">NAME OF PROJECT</h2> 
                <p className="text-gray-600 flex-1">PICTURE</p> 
            </> 
        ),
    }, 
    { colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-2", 
        children: ( 
            <> 
                <h2 className="text-xl font-semibold mb-2">NAME OF PROJECT</h2> 
                <p className="text-gray-600 flex-1">PICTURE</p> 
            </> 
        ), 
    }, 
        { colSpanClass: "col-span-2 lg:col-span-1", rowSpanClass: "row-span-1", 
       children: ( 
            <> 
                <h2 className="text-xl font-semibold mb-2">SOMETHING ELSE</h2> 
                <p className="text-gray-600 flex-1">TO CENTER PAGE TITLE</p> 
            </> 
        ), 
    }, 
        { colSpanClass: "col-span-2 lg:col-span-4", rowSpanClass: "row-span-1 lg:row-span-1", 
        children: ( 
            <> <h2 className="text-xl font-semibold mb-2">PROJECTS</h2> 
            <p className="text-gray-600 flex-1">EMPTY?</p> 
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
    { colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-2 lg:row-span-2", 
       children: ( 
            <> 
                <h2 className="text-xl font-semibold mb-2">NAME OF PROJECT</h2> 
                <p className="text-gray-600 flex-1">PICTURE</p> 
            </> 
        ), 
    },
    { colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-2",
       children: ( 
            <> 
                <h2 className="text-xl font-semibold mb-2">NAME OF PROJECT</h2> 
                <p className="text-gray-600 flex-1">PICTURE</p> 
            </> 
        ), 
    }, 
    { colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-2", 
       children: ( 
            <> 
                <h2 className="text-xl font-semibold mb-2">NAME OF PROJECT</h2> 
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