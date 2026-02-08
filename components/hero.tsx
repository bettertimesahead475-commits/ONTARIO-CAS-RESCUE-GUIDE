import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, BookOpen } from "lucide-react"
import siteData from "@/data/site.json"
import type { Stat } from "@/lib/types"

const stats: Stat[] = siteData.stats

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--muted))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-sm text-muted-foreground">
            <Shield className="h-4 w-4" />
            <span>Educational Platform for Ontario Parents</span>
          </div>
          
          <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            <span className="text-balance">Understand Your Rights Under the CYFSA</span>
          </h1>
          
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Navigate Ontario{"'"}s Child, Youth and Family Services Act with confidence. 
            Access educational resources, document analysis tools, and procedural guides 
            built from verified primary sources.
          </p>
          
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2">
              Start Learning
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <BookOpen className="h-4 w-4" />
              View Free Resources
            </Button>
          </div>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-3">
          {stats.map((stat) => (
            <StatCard key={stat.label} number={stat.number} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 text-center">
      <div className="text-3xl font-bold text-primary">{number}</div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  )
}
