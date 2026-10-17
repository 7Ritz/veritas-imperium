import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  label: string
  title: string
  intro?: string
  children?: ReactNode
}

export function Section({ id, label, title, intro, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="flex scroll-mt-20 flex-col gap-10 border-t border-border py-20 md:py-28"
    >
      <div className="flex flex-col gap-4 md:flex-row md:gap-16">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground md:w-48 md:shrink-0 md:pt-2">
          {label}
        </p>
        <div className="flex max-w-2xl flex-col gap-4">
          <h2
            id={`${id}-title`}
            className="text-balance text-3xl font-medium tracking-tight md:text-4xl"
          >
            {title}
          </h2>
          {intro ? (
            <p className="text-pretty leading-relaxed text-muted-foreground">{intro}</p>
          ) : null}
        </div>
      </div>
      {children ? <div className="md:pl-64">{children}</div> : null}
    </section>
  )
}
