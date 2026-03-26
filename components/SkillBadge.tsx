type BadgeProps = {
    icon?: React.ReactNode;
    label: string;
    invert?: boolean; // for dark badges like Unity
    keepSmall?: boolean;
};

export default function Badge({ icon, label, invert, keepSmall = false }: BadgeProps) {
    return (
        <div
            className={`group/badge
        flex items-center gap-2 
        px-2 py-1 sm:px-3 sm:py-1.5
        border-4 border-black rounded-md
        font-bold text-xs sm:text-sm ${keepSmall ? '' : 'xl:text-lg xl:gap-1 2xl:text-2xl'}
        whitespace-nowrap
        w-fit max-w-[250px] 
        ${invert ? "bg-black text-white" : "bg-white text-black"}
      `}
        >
            <div className="group-hover/badge:animate-shake">
                {icon}
            </div>
            {/*{icon}*/}
            {label}
        </div>
    );
}