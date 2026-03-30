import Link from "next/link";

type BaseItem = {
    colSpanClass?: string;
    rowSpanClass?: string;
    backgroundColor?: string;
    title?: string;
    content: React.ReactNode;
    iconName?: string;
};

type LinkItem = BaseItem & {
    href: string;
    ariaLabel: string;
};

type StaticItem = BaseItem & {
    href?: undefined;
    ariaLabel?: undefined;
};

export type BentoBoxGridItem = LinkItem | StaticItem;

type BentoItemBoxProps = {
  item: BentoBoxGridItem;
};

export default function BentoItemBox({ item }: BentoItemBoxProps) {
    const baseClasses = `
    flex flex-col justify-between shadow-[8px_8px_0px_rgba(0,0,0,1)] border-8 border-black rounded-lg
    p-3 md:p-4 lg:p-6 transition-all duration-300 
    hover:scale-105 hover:shadow-xl hover:z-10 h-full group/card
    focus-visible:outline focus-visible:outline-4 focus-visible:outline-black
    focus-visible:scale-105 focus-visible:shadow-xl
    motion-reduce:transition-none
    motion-reduce:hover:scale-100
    active:shadow-[inset_0px_8px_12px_rgba(0,0,0,0.4)]
    ${item.colSpanClass ?? ""} ${item.rowSpanClass ?? ""}
    ${item.backgroundColor ?? "bg-white"}
  `;

    if (item.href) {
        return (
            <Link href={item.href} className={`${baseClasses} block`} aria-label={item.ariaLabel}>
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