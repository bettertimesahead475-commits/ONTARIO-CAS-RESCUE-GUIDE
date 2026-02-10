import {
  BookOpen,
  Scale,
  Heart,
  FileSearch,
  FileText,
  Mic,
} from "lucide-react";

const features = [
  {
    id: "cyfsa-guide",
    icon: BookOpen,
    title: "CYFSA Guide",
    description:
      "Emergency removal process, grounds for protection, worker authority limits, parent and child rights, evidence standards, and procedural timelines under the Child, Youth and Family Services Act.",
    highlights: [
      "First 5-day emergency process",
      "Worker authority limits",
      "Evidence vs hearsay vs opinion",
      "Hyperlinked primary sources",
    ],
  },
  {
    id: "family-court",
    icon: Scale,
    title: "Family Court Process",
    description:
      "Step-by-step walkthrough of Ontario family court proceedings including temporary and final orders, case conferences, motions, affidavits, and the 5-day rule.",
    highlights: [
      "Court proceeding types",
      "Case conference preparation",
      "Document lifecycle",
      "Official court forms",
    ],
  },
  {
    id: "child-impact",
    icon: Heart,
    title: "Child Development Impact",
    description:
      "Evidence-based research summaries on the effects of removal, attachment disruption, trauma, and reunification outcomes from peer-reviewed studies.",
    highlights: [
      "Short-term and long-term impacts",
      "Attachment research",
      "Trauma-informed summaries",
      "Reunification outcomes",
    ],
  },
  {
    id: "document-analyzer",
    icon: FileSearch,
    title: "Document Analyzer",
    description:
      "Upload CAS documents to identify missing legal thresholds, unsupported claims, hearsay, procedural violations, and timeline inconsistencies.",
    highlights: [
      "PDF, DOCX, TXT, and image support",
      "Red flag identification",
      "Source-linked explanations",
      "Questions for your lawyer",
    ],
  },
  {
    id: "templates",
    icon: FileText,
    title: "Document Templates",
    description:
      "Educational draft builders for affidavits, case timelines, evidence logs, issue summaries, and parent preparation worksheets. Export to PDF.",
    highlights: [
      "Draft affidavit builder",
      "Case timeline builder",
      "Evidence log template",
      "PDF export",
    ],
  },
  {
    id: "voice-assistant",
    icon: Mic,
    title: "Voice Assistant",
    description:
      "Accessibility-first voice features including text-to-speech, read-aloud mode, voice commands, and section summaries for those who learn better through listening.",
    highlights: [
      "Text-to-speech narration",
      "Voice commands",
      "Read-aloud mode",
      "Section summaries",
    ],
  },
];

export function FeaturesSection() {
  return (
    <section className="bg-secondary/50 px-4 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-balance font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Everything You Need to Understand the Process
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Six comprehensive sections built from verified Ontario and Canadian
            primary sources to educate and empower parents.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.id}
              id={feature.id}
              className="group rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-md bg-primary/10 p-2.5">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
              <ul className="flex flex-col gap-1.5">
                {feature.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
