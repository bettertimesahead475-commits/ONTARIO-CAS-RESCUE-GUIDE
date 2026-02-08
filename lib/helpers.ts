import {
  FileText,
  Scale,
  Brain,
  FileSearch,
  ClipboardList,
  Mic,
  type LucideIcon,
} from "lucide-react"

/**
 * Maps icon string names from JSON data to actual Lucide icon components.
 * This allows us to reference icons by name in JSON while using
 * the real component in React.
 */
const iconMap: Record<string, LucideIcon> = {
  Scale,
  FileText,
  Brain,
  FileSearch,
  ClipboardList,
  Mic,
}

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? FileText
}

/**
 * Formats a price string for display.
 * Strips the dollar sign and returns numeric value.
 */
export function parsePrice(priceString: string): number {
  return parseFloat(priceString.replace(/[^0-9.]/g, ""))
}

/**
 * Returns the current year as a number.
 * Used in the footer copyright to avoid hydration mismatches
 * from calling new Date() during SSR vs client.
 */
export function getCopyrightYear(): number {
  return 2026
}

/**
 * Checks if a URL is an external link (starts with http/https).
 */
export function isExternalLink(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://")
}

/**
 * Generates an aria-label for a source link.
 */
export function getSourceAriaLabel(sourceName: string): string {
  return `Visit ${sourceName} (opens in new tab)`
}
