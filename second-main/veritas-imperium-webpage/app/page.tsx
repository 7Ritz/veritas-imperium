import { Hero } from '@/components/site/hero'
import { SiteHeader } from '@/components/site/site-header'
import { Certificates } from '@/components/site/content-sections'

export default function Page() {
  return (
    <div className="grid-atmosphere flex min-h-svh flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-20 focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-5 py-8 md:px-8 md:py-12">
        <div className="flex-1 rounded-[5px] border border-rule/45 bg-background/35">
          <Hero />
          <Certificates />
        </div>
      </main>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 font-mono text-xs uppercase tracking-widest text-muted-foreground sm:flex-row sm:justify-between md:px-8">
          <p>&copy; {new Date().getFullYear()} Veritas Imperium Inc</p>
          <p>IT Infrastructure &amp; Cybersecurity</p>
        </div>
      </footer>
    </div>
  )
}
