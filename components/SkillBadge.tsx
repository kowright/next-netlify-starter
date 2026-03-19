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
        font-bold text-xs sm:text-sm
        whitespace-nowrap
        w-fit max-w-[200px]
        ${invert ? "bg-black text-white" : "bg-white text-black"}
      `}
        >
            {icon}
            {label}
        </div>
    );
}