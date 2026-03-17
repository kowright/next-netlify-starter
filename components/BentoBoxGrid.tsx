import React, { ReactNode } from "react";

export type BentoBoxGridItem = {
  colSpanClass?: string;
  rowSpanClass?: string;
  backgroundColor?: string
  children: ReactNode;
};

type BentoBoxGridProps = {
  items: BentoBoxGridItem[];
};

export default function BentoBoxGrid({ items }: BentoBoxGridProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 w-full
                    auto-rows-[150px] md:auto-rows-[180px]">
      {items.map((item, idx) => {
      
        return (
          <div
            key={idx}
            className={`flex flex-col justify-between shadow-[8px_8px_0px_rgba(0,0,0,1)] border-8 border-black rounded-lg
                        p-3 md:p-4 lg:p-6 transition-all duration-300 
                        hover:scale-105 hover:shadow-xl hover:z-10
                        ${item.colSpanClass ?? ""} ${item.rowSpanClass ?? ""}
                        ${item.backgroundColor ?? 'bg-white'}
                        `}
          >
            {item.children}
          </div>
        );
      })}
    </div>
  );
}