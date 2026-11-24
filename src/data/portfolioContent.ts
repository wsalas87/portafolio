export type CaseStudyId = "entel-ds" | "entel-docs" | "ecommerce-consultancy" | "mockup-ds";

export type DrawerView = { type: "contact" };

export interface CaseStudy {
  id: CaseStudyId;
  /** URL segment used by the hash route, e.g. #/casos/design-system-entel */
  slug: string;
  /** Label in the "Casos" navigation menus */
  navLabel: string;
  /** Label of the call to action on the home page */
  ctaLabel: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "entel-ds",
    slug: "design-system-entel",
    navLabel: "Design system Entel",
    ctaLabel: "Ver caso Design System Entel",
  },
  {
    id: "entel-docs",
    slug: "documentacion-entel",
    navLabel: "Documentación Entel",
    ctaLabel: "Ver documentación Entel",
  },
  {
    id: "ecommerce-consultancy",
    slug: "consultoria-ecommerce",
    navLabel: "Consultoría e-commerce",
    ctaLabel: "Ver consultoría e-commerce",
  },
  {
    id: "mockup-ds",
    slug: "mockup-design-system",
    navLabel: "Mockup Design System",
    ctaLabel: "Ver caso de uso mockup Design System",
  },
];

export const caseHref = (study: CaseStudy) => `#/casos/${study.slug}`;
