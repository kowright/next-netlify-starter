type BadgeProps = {
    icon?: React.ReactNode;
    label: string;
    invert?: boolean; // for white logos
};

export default function Badge({ icon, label, invert }: BadgeProps) {
    return (
        <div
            className={`group/badge
        flex items-center ${icon && 'gap-2'} 
        px-1 py-1 sm:px-3 sm:py-1.5
        border-4 border-black rounded-md
        font-bold text-xs sm:text-sm
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