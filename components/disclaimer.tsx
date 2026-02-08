import { AlertTriangle, ExternalLink } from "lucide-react"
import sourcesData from "@/data/sources.json"
import { DISCLAIMER_TEXT } from "@/lib/constants"
import { getSourceAriaLabel } from "@/lib/helpers"
import type { Source } from "@/lib/types"

const sources: Source[] = sourcesData.primarySources

export function Disclaimer() {
  return (
    <section className="bg-muted/50 py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-secondary/30 bg-secondary/5 p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary/20">
              <AlertTriangle className="h-5 w-5 text-secondary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                {DISCLAIMER_TEXT.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {DISCLAIMER_TEXT.body}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                <strong>Ontario jurisdiction only.</strong> {DISCLAIMER_TEXT.jurisdiction}
              </p>
            </div>
          </div>

          <div className="mt-6 border-t border-border pt-6">
            <p className="mb-3 text-sm font-medium text-foreground">
              Verified Primary Sources:
            </p>
            <div className="flex flex-wrap gap-3">
              {sources.map((source) => (
                <a
                  key={source.name}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={getSourceAriaLabel(source.name)}
                  className="inline-flex items-center gap-1 rounded-full bg-background px-3 py-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {source.name}
                  <ExternalLink className="h-3 w-3" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
