import { BentoBoxGridItem } from "../../components/BentoBoxGrid"
import Layout from "../../components/Layout";
import { FaLinkedin } from "react-icons/fa";
import PageLinkIcon from "../../components/PageLinkIcon";
import { FaHome } from "react-icons/fa";
import ImageCarousel from "../../components/ImageCarousel";
export default function ProjectsPage() {
    const imageSources: string[] = [
        "/cSharp.svg",
        "/cSharp.svg",
        "/cSharp.svg"
    ]

    const projectsForBentoGrid : BentoBoxGridItem[] = [ 
    { colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-2 lg:row-span-2", 
        content: ( 
            <> 
                <h2 className="text-xl font-semibold mb-2">NAME OF PROJECT</h2> 
                <div className="flex-1 rounded-lg overflow-hidden">
                    <ImageCarousel imageSources={imageSources} />
                </div>
            </> 
        ), 
    },
    { colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-2",
        content: ( 
            <> 
                <h2 className="text-xl font-semibold mb-2">NAME OF PROJECT</h2> 
                <div className="flex-1 rounded-lg overflow-hidden">
                    <ImageCarousel imageSources={imageSources} />
                </div>
            </> 
        ),
    }, 
    { colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-2", 
        content: ( 
            <> 
                <h2 className="text-xl font-semibold mb-2">NAME OF PROJECT</h2> 
                <div className="flex-1 rounded-lg overflow-hidden">
                    <ImageCarousel imageSources={imageSources} />
                </div>
            </> 
        ), 
    }, 

        {
            colSpanClass: "col-span-1 lg:col-span-1", rowSpanClass: "row-span-1",
            content: (
                <div className="h-full flex-1 flex">
                    <PageLinkIcon />

                    <FaLinkedin size='100%' className="text-blue-600" />

                </div>
            ),
        }, 
        { colSpanClass: "col-span-2 lg:col-span-4", rowSpanClass: "row-span-1 lg:row-span-1", backgroundColor: 'bg-orange-400',
        content: ( 
            <div className='flex items-center justify-center h-full'> 
                <h2 className="text-4xl font-black mb-2 text-center">PROJECTS</h2>
            </div> 
        ), 
    },
        {
            colSpanClass: "col-span-1 lg:col-span-1", rowSpanClass: "row-span-1",
            content: (
                <div className="h-full flex-1 flex">
                    <PageLinkIcon />

                    <FaHome size='100%' className="text-black" />

                </div>
            ),
        },  
    { colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-2 lg:row-span-2", 
       content: ( 
            <> 
                <h2 className="text-xl font-semibold mb-2">NAME OF PROJECT</h2> 
               <div className="flex-1 rounded-lg overflow-hidden">
                   <ImageCarousel imageSources={imageSources} />
               </div>
            </> 
        ), 
    },
    { colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-2",
       content: ( 
            <> 
                <h2 className="text-xl font-semibold mb-2">NAME OF PROJECT</h2> 
               <div className="flex-1 rounded-lg overflow-hidden">
                   <ImageCarousel imageSources={imageSources} />
               </div>
            </> 
        ), 
    }, 
    { colSpanClass: "col-span-2 lg:col-span-2", rowSpanClass: "row-span-2", 
       content: ( 
            <> 
                <h2 className="text-xl font-semibold mb-2">NAME OF PROJECT</h2> 
               <div className="flex-1 rounded-lg overflow-hidden">
                   <ImageCarousel imageSources={imageSources} />
               </div>
            </> 
        ), 
    }, 
  ];

  return (
    <Layout items={projectsForBentoGrid} />
  );
}