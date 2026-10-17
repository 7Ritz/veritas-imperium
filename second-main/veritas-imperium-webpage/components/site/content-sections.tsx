const certificates = [
  {
    title: 'Certified Fiber Optic Technician',
    image: '/img/CFOT.jpg',
    alt: 'Certified Fiber Optic Technician certificate for Noah Battaglia Pintus',
    body: 'The CFOT credential recognizes foundational expertise in fiber optic installation, splicing, testing, and safe handling practices.',
  },
  {
    title: 'Certified Fiber Optic Specialist / Splicing',
    image: '/img/CFOSS.jpg',
    alt: 'Certified Fiber Optic Specialist in Splicing certificate for Noah Battaglia Pintus',
    body: 'This specialist certification reflects focused training in fiber optic splicing, fusion techniques, and reliable cable restoration.',
  },
  {
    title: 'Certified Fiber Optic Specialist / Testing',
    image: '/img/CFOST.jpg',
    alt: 'Certified Fiber Optic Specialist in Testing certificate for Noah Battaglia Pintus',
    body: 'Advanced testing coursework supporting dependable fiber infrastructure verification and documentation.',
  },
]

export function Certificates() {
  return (
    <section aria-labelledby="certifications-title" className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-6 py-10 md:px-10 md:py-14">
      <div className="flex flex-col gap-3 text-center">
        <h2 id="certifications-title" className="text-lg font-semibold tracking-wide text-foreground">
          Fiber Optic Association Certifications
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Professional credentials supporting reliable fiber optic infrastructure and testing.
        </p>
      </div>
      <div className="flex flex-col gap-10">
        {certificates.map((certificate) => (
          <article key={certificate.title} className="flex flex-col gap-4">
            <a
              href="https://thefoa.org/Certs.htm"
              target="_blank"
              rel="noreferrer"
              className="group overflow-hidden rounded-[5px] border border-border bg-card/40 transition-colors hover:border-rule"
            >
              <img
                src={certificate.image}
                alt={certificate.alt}
                className="block h-auto w-full transition-opacity group-hover:opacity-90"
              />
            </a>
            <div className="flex flex-col gap-2 px-1">
              <h3 className="font-semibold text-foreground">{certificate.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{certificate.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
