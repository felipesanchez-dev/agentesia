import Loader from "./loader";

interface Props {
  title: string;
  description: string;
}

export const LoadingState = ({ title, description }: Props) => {
  return (
    <div className="flex-1 flex items-center justify-center p-8 min-h-[400px]">
      <div className="flex flex-col items-center justify-center gap-y-8 bg-background/80 backdrop-blur-sm rounded-2xl p-12 shadow-xl border border-white/10">
        <Loader />
        <div className="flex flex-col gap-y-3 text-center max-w-sm">
          <h6 className="text-xl font-semibold text-foreground">{title}</h6>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};