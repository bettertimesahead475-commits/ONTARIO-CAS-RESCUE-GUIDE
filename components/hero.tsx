import { Shield, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background px-4 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="text-sm font-medium text-muted-foreground">
            Ontario Jurisdiction Only
          </span>
        </div>

        <h1 className="text-balance font-serif text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Understand Your Rights as a Parent Under the CYFSA
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          {
            "A free educational resource for Ontario parents navigating Children's Aid Society (CAS) involvement and Family Court. Know the law, know the process, protect your family."
          }
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#cyfsa-guide"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Start Learning
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#document-analyzer"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-6 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Try Document Analyzer
          </a>
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-lg border border-border bg-card p-4">
          <div className="flex items-start gap-3">
            <Shield className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            <p className="text-left text-sm leading-relaxed text-muted-foreground">
              <strong className="text-foreground">Legal Disclaimer:</strong>{" "}
              This platform is for educational purposes only and does not
              constitute legal advice. All information is sourced from Ontario
              e-Laws, CanLII, and official government resources. Always consult
              a qualified lawyer for legal guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
