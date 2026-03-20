import { BentoBoxGridItem } from "./BentoBoxGrid";
import Link from "next/link";

type BentoItemBoxProps = {
  item: BentoBoxGridItem;
};

export default function BentoItemBox({ item }: BentoItemBoxProps) {
    const baseClasses = `
    flex flex-col justify-between shadow-[8px_8px_0px_rgba(0,0,0,1)] border-8 border-black rounded-lg
    p-3 md:p-4 lg:p-6 transition-all duration-300 
    hover:scale-105 hover:shadow-xl hover:z-10 h-full
    ${item.colSpanClass ?? ""} ${item.rowSpanClass ?? ""}
    ${item.backgroundColor ?? "bg-white"}
  `;

    if (item.href) {
        return (
            <Link href={item.href} className={`${baseClasses} block`}>
                {item.content}
            </Link>
        );
    }

    return (
        <div className={baseClasses}>
            {item.content}
        </div>
    );
}