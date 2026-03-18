import React, { ReactNode } from "react";
import BentoItemBox from "./BentoItemBox";

type BentoBoxGridItem = {
  colSpanClass?: string;
  rowSpanClass?: string;
  backgroundColor?: string;
  title?: string;
  content: React.ReactNode;
  iconName?: string;
};

type BentoBoxGridProps = {
  items: BentoBoxGridItem[];
};

export default function BentoBoxGrid({ items }: BentoBoxGridProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 w-full
                       auto-rows-[150px] lg:auto-rows-fr h-full">
      {items.map((item, idx) => {
        return (
            <BentoItemBox key={idx} item={item} />
        );
      })}
    </div>
  );
}