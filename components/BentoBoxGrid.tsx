import BentoItemBox, { BentoBoxGridItem} from "./BentoItemBox";

type BentoBoxGridProps = {
    items: BentoBoxGridItem[];
};

export default function BentoBoxGrid({ items }: BentoBoxGridProps) {
  return (
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-4 w-full 
                     auto-rows-[150px]">
      {items.map((item, idx) => {
        return (
            <BentoItemBox key={idx} item={item} />
        );
      })}
    </div>
  );
}