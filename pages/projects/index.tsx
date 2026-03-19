import { useRouter } from "next/router";
import { BentoBoxGridItem } from "../../components/BentoBoxGrid"
import Layout from "../../components/Layout";

export default function ProjectsPage() {
  const router = useRouter();

    const projectsForBentoGrid : BentoBoxGridItem[] = [ 
    { colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-2 lg:row-span-2", 
        content: ( 
            <> 
                <h2 className="text-xl font-semibold mb-2">NAME OF PROJECT</h2> 
                <p className="text-gray-600 flex-1">PICTURE</p> 
            </> 
        ), 
    },
    { colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-2",
        content: ( 
            <> 
                <h2 className="text-xl font-semibold mb-2">NAME OF PROJECT</h2> 
                <p className="text-gray-600 flex-1">PICTURE</p> 
            </> 
        ),
    }, 
    { colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-2", 
        content: ( 
            <> 
                <h2 className="text-xl font-semibold mb-2">NAME OF PROJECT</h2> 
                <p className="text-gray-600 flex-1">PICTURE</p> 
            </> 
        ), 
    }, 
        { colSpanClass: "col-span-2 lg:col-span-1", rowSpanClass: "row-span-1", 
       content: ( 
            <> 
                <h2 className="text-xl font-semibold mb-2">LINKEDIN?</h2> 
                <p className="text-gray-600 flex-1">THESE OTHER PAGES GO TO GITHUB</p> 
            </> 
        ), 
    }, 
        { colSpanClass: "col-span-2 lg:col-span-4", rowSpanClass: "row-span-1 lg:row-span-1", 
        content: ( 
            <> <h2 className="text-xl font-semibold mb-2">PROJECTS</h2> 
            <p className="text-gray-600 flex-1">EMPTY?</p> 
            </> 
        ), 
    },
    { colSpanClass: "col-span-2 lg:col-span-1", rowSpanClass: "row-span-1", 
       content: ( 
            <> 
                <h2 className="text-xl font-semibold mb-2">HOME</h2> 
                <p className="text-gray-600 flex-1">ICON</p> 
            </> 
        ), 
    }, 
    { colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-2 lg:row-span-2", 
       content: ( 
            <> 
                <h2 className="text-xl font-semibold mb-2">NAME OF PROJECT</h2> 
                <p className="text-gray-600 flex-1">PICTURE</p> 
            </> 
        ), 
    },
    { colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-2",
       content: ( 
            <> 
                <h2 className="text-xl font-semibold mb-2">NAME OF PROJECT</h2> 
                <p className="text-gray-600 flex-1">PICTURE</p> 
            </> 
        ), 
    }, 
    { colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-2", 
       content: ( 
            <> 
                <h2 className="text-xl font-semibold mb-2">NAME OF PROJECT</h2> 
                <p className="text-gray-600 flex-1">PICTURE</p> 
            </> 
        ), 
    }, 
  ];

  return (
    <Layout items={projectsForBentoGrid} />
  );
}