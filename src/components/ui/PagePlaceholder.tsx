interface PagePlaceholderProps {
  title: string
  phase: string
}

/**
 * Temporary placeholder used until each page is built out in its
 * dedicated phase. Every real page will replace one of these.
 */
export default function PagePlaceholder({ title, phase }: PagePlaceholderProps) {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-3xl flex-col items-center justify-center gap-2 px-4 text-center">
      <h1 className="text-3xl">{title}</h1>
      <p className="text-charcoal-600">Coming in {phase}.</p>
    </div>
  )
}
