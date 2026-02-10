import { ExternalLink, CheckCircle } from "lucide-react";

const sources = [
  {
    name: "Ontario e-Laws",
    url: "https://www.ontario.ca/laws",
    description: "Official statutes and regulations of Ontario",
  },
  {
    name: "CanLII",
    url: "https://www.canlii.org",
    description: "Canadian Legal Information Institute",
  },
  {
    name: "Government of Ontario",
    url: "https://www.ontario.ca",
    description: "Official Ontario government resources",
  },
  {
    name: "Department of Justice Canada",
    url: "https://www.justice.gc.ca",
    description: "Federal justice department resources",
  },
  {
    name: "Ontario Court of Justice",
    url: "https://www.ontariocourts.ca/ocj/",
    description: "Provincial court information and forms",
  },
  {
    name: "Superior Court of Justice",
    url: "https://www.ontariocourts.ca/scj/",
    description: "Superior court resources and procedures",
  },
];

export function SourcesSection() {
  return (
    <section className="bg-background px-4 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-balance font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Verified Primary Sources Only
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Every piece of information on this platform is sourced from official
            Ontario and Canadian government resources. If a claim cannot be
            verified, it is clearly flagged.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sources.map((source) => (
            <a
              key={source.name}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 rounded-lg border border-border bg-card p-4 transition-shadow hover:shadow-md"
            >
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <span className="font-medium text-foreground">
                    {source.name}
                  </span>
                  <ExternalLink className="h-3.5 w-3.5 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {source.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-xl rounded-lg border border-border bg-muted/50 p-4 text-center">
          <p className="text-sm italic text-muted-foreground">
            {
              'If information cannot be verified from primary sources, this platform will display: "Not verifiable from primary sources."'
            }
          </p>
        </div>
      </div>
    </section>
  );
}
