interface SectionHeadingProps {
  subtitle: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  subtitle,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-16 text-center">
      <p className="uppercase tracking-[5px] text-amber-500">
        {subtitle}
      </p>

      <h2 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-5 max-w-2xl text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}