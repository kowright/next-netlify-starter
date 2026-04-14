import BentoBoxGrid from "./BentoBoxGrid";
import { BentoBoxGridItem } from "./BentoItemBox";

type LayoutProps = {
   items: BentoBoxGridItem[];
};

export default function Layout({ items }: LayoutProps) {
    return (
        <main className="min-h-screen bg-gray-50 p-6 md:p-12 2xl:pl-44 2xl:pr-44 overflow-y-auto flex flex-col items-center">
          <BentoBoxGrid items={items} />
        </main>
    );
}