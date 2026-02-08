import featuresData from "@/data/features.json"
import { getIcon } from "@/lib/helpers"
import type { Feature } from "@/lib/types"

const features: Feature[] = featuresData

export function Features() {
  return (
    <section className="bg-muted/50 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Comprehensive Educational Resources
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Six integrated sections designed to help Ontario parents understand 
            CYFSA proceedings with verified, primary-source information.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  feature,
}: {
  feature: Feature
}) {
  const Icon = getIcon(feature.icon)

  return (
    <div
      id={feature.id}
      className="group rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {feature.description}
      </p>
      <ul className="mt-4 space-y-2">
        {feature.highlights.map((item, idx) => (
          <li
            key={idx}
            className="flex items-start gap-2 text-sm text-muted-foreground"
          >
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
