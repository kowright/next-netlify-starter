import BentoBoxGrid, { BentoBoxGridItem } from "./BentoBoxGrid";

type LayoutProps = {
   items: BentoBoxGridItem[];
};

export default function Layout({ items }: LayoutProps) {
    return (
        <main className="h-screen bg-gray-50 p-6 md:p-12 overflow-auto lg:overflow-hidden flex flex-col items-center">
          <BentoBoxGrid items={items} />
        </main>
    );
}