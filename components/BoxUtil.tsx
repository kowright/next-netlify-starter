import { BentoBoxGridItem } from "../components/BentoBoxGrid";
import { SiGithub } from "react-icons/si";
import { FaHome, FaLink, FaLinkedin } from "react-icons/fa";
import PageLinkIcon from "../components/PageLinkIcon";

export function GithubBox(url: string = "https://github.com/kowright"): BentoBoxGridItem  {
    return (
        {
            colSpanClass: "col-span-1 lg:col-span-1", rowSpanClass: "row-span-1",
            content: (
                <div className="flex relative items-center justify-center h-full w-full" >
                    <PageLinkIcon />
                    < SiGithub className="w-16 h-16 xl:h-20 xl:w-20 " />
                </div >
            ),
            href: url ,
        }
    )
};

export const LinkedInBox: BentoBoxGridItem = {
    colSpanClass: "col-span-1 lg:col-span-1", rowSpanClass: "row-span-1",
    content: (
        <div className= "flex relative items-center justify-center h-full w-full" >
        <PageLinkIcon />
        <FaLinkedin className="w-16 h-16 xl:h-20 xl:w-20  text-blue-600" />
        </div>
        ),
     href: "https://www.linkedin.com/in/kortney-w-a0341680/",
}

export function NavBox(title: string): BentoBoxGridItem {
    return (
        {
            colSpanClass: "col-span-2 lg:col-span-1", rowSpanClass: "row-span-2", backgroundColor: 'bg-blue-500',
            content: (
                <div className= "flex relative items-center justify-center h-full w-full" >
                    <FaLink />
                    <p className="text-2xl lg:text-2xl xl:text-3xl font-black mb-2 ml-2 text-center" > { title } </p>
                </div>
                ),
            href: "/about",
        }
    )
}

export const HomeBox: BentoBoxGridItem = {
    colSpanClass: "col-span-1 lg:col-span-1", rowSpanClass: "row-span-1",
    content: (
        <div className="flex relative items-center justify-center h-full w-full" >
            <PageLinkIcon />
            <FaHome size="100%" className="text-black" />
        </div>
    ),
    href: "/",
};