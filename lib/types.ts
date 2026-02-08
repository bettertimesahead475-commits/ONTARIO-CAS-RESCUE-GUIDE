export interface NavItem {
  name: string
  href: string
}

export interface FooterLinks {
  resources: NavItem[]
  legal: NavItem[]
}

export interface NavigationData {
  mainNav: NavItem[]
  footerLinks: FooterLinks
}

export interface Feature {
  id: string
  icon: string
  title: string
  description: string
  highlights: string[]
}

export interface PricingTier {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  highlighted: boolean
  cta: string
}

export interface Source {
  name: string
  url: string
}

export interface FooterSource {
  name: string
  href: string
}

export interface SourcesData {
  primarySources: Source[]
  footerSources: FooterSource[]
}

export interface Stat {
  number: string
  label: string
}

export interface SiteConfig {
  name: string
  description: string
  jurisdiction: string
  contact: {
    email: string
  }
  payment: {
    interac: string
    stripe: string
    paypal: string
  }
  stats: Stat[]
}
