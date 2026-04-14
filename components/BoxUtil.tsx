import { BentoBoxGridItem } from "./BentoItemBox";
import { SiGithub } from "react-icons/si";
import { FaHome, FaLink, FaLinkedin } from "react-icons/fa";
import PageLinkIcon from "../components/PageLinkIcon";
import SkillBadge from "./SkillBadge";

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
            href: url,
            ariaLabel: 'Go to Github.com for project code',
        }
    )
};

export const LinkedInBox: BentoBoxGridItem = {
    colSpanClass: "col-span-1 lg:col-span-1", rowSpanClass: "row-span-1",
    content: (
        <div className= "flex relative items-center justify-center h-full w-full active:shadow-[inset_0px_8px_12px_rgba(0,0,0,0.4)]" >
        <PageLinkIcon />
        <FaLinkedin className="w-16 h-16 xl:h-20 xl:w-20  text-blue-600" />
        </div>
        ),
    href: "https://www.linkedin.com/in/kortney-w-a0341680/",
    ariaLabel: 'Go to LinkedIn.com for profile',
}

export function NavBox(title: string, link: string, color: string, ariaLabel: string, whiteText = false): BentoBoxGridItem {
    return (
        {
            colSpanClass: "col-span-2 lg:col-span-1", rowSpanClass: "row-span-1 md:row-span-1", backgroundColor: color,
            content: (
                <div className= "flex relative items-center justify-center h-full w-full active:shadow-[inset_0px_8px_12px_rgba(0,0,0,0.4)]" >
                    <div className="absolute top-0 right-0 group-hover/card:animate-bounce">
                        <FaLink />
                    </div>
                    <p className={`text-2xl lg:text-xl xl:text-2xl font-black ${whiteText && 'text-white'} mb-2 ml-2}`}> { title } </p>
                </div>
                ),
            href: link,
            ariaLabel: ariaLabel,
        }
    )
}

export const HomeBox: BentoBoxGridItem = {
    colSpanClass: "col-span-1 lg:col-span-1", rowSpanClass: "row-span-1",
    content: (
        <div className="flex relative items-center justify-center h-full w-full group/card active:shadow-[inset_0px_8px_12px_rgba(0,0,0,0.4)]" >
            <PageLinkIcon />
            <FaHome size="100%" className="text-black" />
        </div>
    ),
    href: "/",
    ariaLabel: 'View Home Page',
};

export function CSharpSkillBadge() {
    return (
        <SkillBadge icon={<img src="/cSharp.svg" className="w-5 h-5" />} label="C#" />
    )
}