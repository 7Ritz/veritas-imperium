export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[62svh] flex-col items-center justify-center overflow-hidden px-6 py-20 text-center sm:min-h-[68svh]">
      <span aria-hidden="true" className="aura-particle left-[12%] top-[28%]" />
      <span aria-hidden="true" className="aura-particle right-[18%] top-[18%]" />
      <span aria-hidden="true" className="aura-particle right-[8%] bottom-[25%]" />

      <div className="max-w-4xl space-y-6">
        <p className="text-lg font-semibold text-foreground sm:text-xl">Created by Noah B Pintus.</p>
        <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Below are accreditations from the Fiber Optic Association certifying my expertise in Fiber Optic Splicing, Testing &amp; Installation.
        </p>
      </div>
    </section>
  )
}
