import {
  FileText,
  Scale,
  Brain,
  FileSearch,
  ClipboardList,
  Mic,
} from "lucide-react"

const features = [
  {
    id: "cyfsa-guide",
    icon: Scale,
    title: "CYFSA Guide",
    description:
      "Comprehensive education on Ontario's Child, Youth and Family Services Act. Learn about emergency removal processes, grounds for protection, parent and child rights, and procedural timelines.",
    highlights: [
      "Emergency removal process (first 5 days)",
      "Parent rights and child rights",
      "Evidence vs hearsay vs opinion",
      "Watch-for checklist for documents",
    ],
  },
  {
    id: "family-court",
    icon: FileText,
    title: "Family Court Process",
    description:
      "Understand Ontario Family Court proceedings with clear explanations of motions, case conferences, affidavits, and the court document lifecycle.",
    highlights: [
      "Types of family court proceedings",
      "Temporary vs final orders",
      "5-day rule explained",
      "Links to official court forms",
    ],
  },
  {
    id: "child-impact",
    icon: Brain,
    title: "Child Development Impact",
    description:
      "Evidence-based information on how removal affects children, including attachment disruption, trauma research, and reunification outcomes.",
    highlights: [
      "Short and long-term impacts",
      "Attachment research",
      "Reunification outcomes",
      "Peer-reviewed sources only",
    ],
  },
  {
    id: "analyzer",
    icon: FileSearch,
    title: "Document Analyzer",
    description:
      "Upload documents to identify missing legal thresholds, unsupported claims, hearsay, and procedural issues. Educational analysis only.",
    highlights: [
      "Flags missing thresholds",
      "Identifies hearsay vs fact",
      "Procedural violation alerts",
      "Source-linked explanations",
    ],
  },
  {
    id: "templates",
    icon: ClipboardList,
    title: "Document Templates",
    description:
      "Educational draft builders for organizing your case, including timeline builders, evidence logs, and preparation worksheets.",
    highlights: [
      "Case timeline builder",
      "Evidence log template",
      "Issue summary sheet",
      "Export to PDF",
    ],
  },
  {
    id: "voice",
    icon: Mic,
    title: "Voice Assistant",
    description:
      "Accessibility features including text-to-speech, speech-to-text, and read-aloud mode for all educational content.",
    highlights: [
      "Text-to-speech narration",
      "Voice commands",
      "Read-aloud mode",
      "Section summaries",
    ],
  },
]

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
  feature: (typeof features)[number]
}) {
  const Icon = feature.icon

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
