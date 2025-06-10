import Image from "next/image";

interface Props {
  title: string;
  description: string;
}

export const EmptyState = ({ title, description }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 min-h-[400px]">
      <Image src="/empty.svg" alt="Logo" width={240} height={240} />
      <div className="flex flex-col gap-y-6 text-center max-w-md mx-auto">
        <h6 className="text-xl font-semibold text-foreground">{title}</h6>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
