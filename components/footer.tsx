import Link from "next/link"
import { Scale } from "lucide-react"

const footerLinks = {
  resources: [
    { name: "CYFSA Guide", href: "#cyfsa-guide" },
    { name: "Family Court Process", href: "#family-court" },
    { name: "Document Analyzer", href: "#analyzer" },
    { name: "Templates", href: "#templates" },
  ],
  legal: [
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Disclaimer", href: "#disclaimer" },
    { name: "Refund Policy", href: "/refunds" },
  ],
  sources: [
    { name: "Ontario e-Laws", href: "https://www.ontario.ca/laws" },
    { name: "CanLII", href: "https://www.canlii.org" },
    { name: "Ontario Courts", href: "https://www.ontariocourts.ca" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Scale className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-semibold text-foreground">
                Ontario CYFSA Guide
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Educational resources for Ontario parents involved with CYFSA 
              and Family Court proceedings.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Resources</h4>
            <ul className="mt-4 space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Legal</h4>
            <ul className="mt-4 space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">
              Primary Sources
            </h4>
            <ul className="mt-4 space-y-2">
              {footerLinks.sources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            {new Date().getFullYear()} Ontario CYFSA Guide. Educational purposes only. 
            Not legal advice.
          </p>
        </div>
      </div>
    </footer>
  )
}
