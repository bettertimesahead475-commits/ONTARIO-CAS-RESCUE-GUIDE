import { Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card px-4 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold tracking-tight text-foreground">
                Ontario CAS Rescue Guide
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              An educational resource for Ontario parents involved with CAS and
              the CYFSA. This platform does not provide legal advice.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h3 className="mb-3 text-sm font-semibold text-foreground">
                Sections
              </h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <a
                    href="#cyfsa-guide"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    CYFSA Guide
                  </a>
                </li>
                <li>
                  <a
                    href="#family-court"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Family Court
                  </a>
                </li>
                <li>
                  <a
                    href="#child-impact"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Child Impact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold text-foreground">
                Tools
              </h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <a
                    href="#document-analyzer"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Document Analyzer
                  </a>
                </li>
                <li>
                  <a
                    href="#templates"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Templates
                  </a>
                </li>
                <li>
                  <a
                    href="#voice-assistant"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Voice Assistant
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold text-foreground">
                Legal Sources
              </h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <a
                    href="https://www.ontario.ca/laws"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Ontario e-Laws
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.canlii.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    CanLII
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-center text-xs text-muted-foreground">
            This platform is for educational purposes only and does not
            constitute legal advice. Ontario jurisdiction only. Always consult a
            qualified lawyer for legal guidance.
          </p>
        </div>
      </div>
    </footer>
  );
}
