import { AlertTriangle, ExternalLink } from "lucide-react"

const sources = [
  { name: "Ontario e-Laws", url: "https://www.ontario.ca/laws" },
  { name: "CanLII", url: "https://www.canlii.org" },
  { name: "Government of Ontario", url: "https://www.ontario.ca" },
  { name: "Department of Justice Canada", url: "https://www.justice.gc.ca" },
  { name: "Ontario Court of Justice", url: "https://www.ontariocourts.ca/ocj" },
]

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
                Important Legal Disclaimer
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                This platform is for <strong>educational purposes only</strong> and 
                does not constitute legal advice. All information is sourced from 
                verified Ontario and Canadian primary sources. If information cannot 
                be verified from primary sources, we clearly indicate this.
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                <strong>Ontario jurisdiction only.</strong> This platform does not 
                provide information for other provinces or countries. Always consult 
                with a qualified legal professional for advice specific to your situation.
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
