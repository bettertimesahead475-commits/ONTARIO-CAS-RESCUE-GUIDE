export const SUPPORTED_FILE_TYPES = ["PDF", "DOCX", "TXT", "Images (OCR)"] as const

export const ANALYZER_FLAGS = [
  "Missing legal thresholds",
  "Unsupported claims",
  "Hearsay",
  "Opinion vs fact",
  "Procedural violations",
  "Timeline inconsistencies",
  "Charter and human rights references",
  "CYFSA authority limits",
] as const

export const ANALYZER_OUTPUT_SECTIONS = [
  "Red flags",
  "Source-linked explanations",
  "What to verify",
  "What to ask a lawyer",
  "What is missing",
] as const

export const MEMBERSHIP_TIERS = ["Basic", "Pro", "Premium"] as const

export const DISCLAIMER_TEXT = {
  title: "Important Legal Disclaimer",
  body: "This platform is for educational purposes only and does not constitute legal advice. All information is sourced from verified Ontario and Canadian primary sources. If information cannot be verified from primary sources, we clearly indicate this.",
  jurisdiction:
    "Ontario jurisdiction only. This platform does not provide information for other provinces or countries. Always consult with a qualified legal professional for advice specific to your situation.",
  unverifiedNotice: "Not verifiable from primary sources.",
} as const

export const SECTION_IDS = {
  cyfsaGuide: "cyfsa-guide",
  familyCourt: "family-court",
  childImpact: "child-impact",
  analyzer: "analyzer",
  templates: "templates",
  voice: "voice",
  pricing: "pricing",
  disclaimer: "disclaimer",
} as const
