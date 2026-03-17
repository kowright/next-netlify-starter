import React, { ReactNode } from "react";

type BentoBoxGridItem = {
  colSpanClass?: string;
  rowSpanClass?: string;
  children: ReactNode;
};

type BentoBoxGridProps = {
  items: BentoBoxGridItem[];
};

export default function BentoBoxGrid({ items }: BentoBoxGridProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 w-full
                    auto-rows-[150px] md:auto-rows-[180px]">
      {items.map((item, idx) => (
        <div
          key={idx}
          className={`flex flex-col justify-between bg-white shadow-md rounded-lg
                      p-3 md:p-4 lg:p-6 transition-all duration-300
                      hover:scale-105 hover:shadow-xl
                      ${item.colSpanClass ?? ""} ${item.rowSpanClass ?? ""}`}
        >
          {item.children}
        </div>
      ))}
    </div>
  );
}