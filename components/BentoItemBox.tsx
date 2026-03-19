import { BentoBoxGridItem } from "./BentoBoxGrid";

type BentoItemBoxProps = {
  item: BentoBoxGridItem;
};

export default function BentoItemBox({ item }: BentoItemBoxProps) {
  return (
        <div
            className={`flex flex-col justify-between shadow-[8px_8px_0px_rgba(0,0,0,1)] border-8 border-black rounded-lg
                        p-3 md:p-4 lg:p-6 transition-all duration-300 
                        hover:scale-105 hover:shadow-xl hover:z-10
                        ${item.colSpanClass ?? ""} ${item.rowSpanClass ?? ""}
                        ${item.backgroundColor ?? 'bg-white'}
                        `}
          >
            {item.content}
          </div>

  );
}