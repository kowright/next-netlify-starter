type BadgeProps = {
    icon?: React.ReactNode;
    label: string;
    invert?: boolean; // for dark badges like Unity
};

export default function Badge({ icon, label, invert }: BadgeProps) {
    return (
        <div
            className={`
        flex items-center gap-2 
        px-2 py-1 sm:px-3 sm:py-1.5
        border-4 border-black rounded-md
        font-bold text-xs sm:text-sm xl:text-lg xl:gap-1 2xl:text-2xl
        whitespace-nowrap
        w-fit max-w-[250px] 
        ${invert ? "bg-black text-white" : "bg-white text-black"}
      `}
        >
            {/*<div className="w-4 h-4 xl:w-6 xl:h-6 2xl:w-8 2xl:h-8">*/}
            {/*    {icon}*/}
            {/*</div>*/}
            {icon}
            {label}
        </div>
    );
}