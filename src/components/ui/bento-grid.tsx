import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[20rem] grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-[2rem] group/bento hover:shadow-lg transition-all duration-500 p-6 bg-white/60 backdrop-blur-xl border border-slate-200/50 hover:border-rose-400/30 flex flex-col justify-between space-y-4 relative overflow-hidden",
        className
      )}
    >
      {/* Decorative glossy glare reflection top edge */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />

      {header}
      
      <div className="group-hover/bento:translate-x-1.5 transition-transform duration-300 z-10 text-left">
        <div className="p-2.5 bg-white border border-slate-100 rounded-xl w-fit shadow-sm text-rose-500 mb-3">
          {icon}
        </div>
        <div className="font-sans font-extrabold text-slate-800 text-lg mb-1 tracking-tight">
          {title}
        </div>
        <div className="font-sans font-semibold text-slate-400 text-xs leading-relaxed">
          {description}
        </div>
      </div>

      {/* Mini color blob at the bottom right corner of each card */}
      <div className="absolute -bottom-6 -right-6 w-16 h-16 rounded-full bg-rose-200/10 blur-xl pointer-events-none" />
    </div>
  );
};
