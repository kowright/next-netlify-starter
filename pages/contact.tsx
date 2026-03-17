import { useRouter } from "next/router";
import BentoBoxGrid from "../components/BentoBoxGrid"

export default function ContactPage() {
  const router = useRouter();

    const projectsForBentoGrid = [ 
    { colSpanClass: "col-span-2 lg:col-span-3", rowSpanClass: "row-span-3 lg:row-span-3", 
        children: ( 
            <> 
                <h2 className="text-xl font-semibold mb-2">FORM?</h2> 
                <p className="text-gray-600 flex-1">FORM</p> 
            </> 
        ), 
    },
    { colSpanClass: "col-span-1 lg:col-span-1", rowSpanClass: "row-span-1",
        children: ( 
            <> 
                <h2 className="text-xl font-semibold mb-2">LINKEDIN</h2> 
                <p className="text-gray-600 flex-1">LINK OUT</p> 
            </> 
        ),
    }, 
    { colSpanClass: "col-span-1 lg:col-span-1", rowSpanClass: "row-span-1",
        children: ( 
            <> 
                <h2 className="text-xl font-semibold mb-2">GITHUB</h2> 
                <p className="text-gray-600 flex-1">LINK OUT</p> 
            </> 
        ),
    },
        { colSpanClass: "col-span-2 lg:col-span-1", rowSpanClass: "row-span-1",
        children: ( 
            <> 
                <h2 className="text-xl font-semibold mb-2">EMAIL</h2> 
                <p className="text-gray-600 flex-1">WORDS</p> 
            </> 
        ),
    },
        { colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-2 lg:row-span-2", 
        children: ( 
            <> <h2 className="text-xl font-semibold mb-2">PICTURE</h2> 
            <p className="text-gray-600 flex-1">PICTURE</p> 
            </> 
        ), 
    },
            { colSpanClass: "col-span-2 lg:col-span-1", rowSpanClass: "row-span-2 lg:row-span-1", 
        children: ( 
            <> <h2 className="text-xl font-semibold mb-2">CONTACT PAGE</h2> 
            <p className="text-gray-600 flex-1">YOU ARE ON IT</p> 
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
  ];

  return (
    <main className="min-h-screen bg-gray-50 p-6 md:p-12 overflow-auto lg:overflow-hidden flex flex-col items-center">
      <BentoBoxGrid items={projectsForBentoGrid} />
    </main>
  );
}