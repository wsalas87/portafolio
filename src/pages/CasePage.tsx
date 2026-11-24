import type { ComponentType } from "react";
import type { CaseStudyId } from "../data/portfolioContent";
import ConsultoriaEcommerceDesktop from "./cases/ConsultoriaEcommerceDesktop";
import ConsultoriaEcommerceMobile from "./cases/ConsultoriaEcommerceMobile";
import DesignSystemEntelDesktop from "./cases/DesignSystemEntelDesktop";
import DesignSystemEntelMobile from "./cases/DesignSystemEntelMobile";
import DocumentacionEntelDesktop from "./cases/DocumentacionEntelDesktop";
import DocumentacionEntelMobile from "./cases/DocumentacionEntelMobile";
import MockupDesignSystemDesktop from "./cases/MockupDesignSystemDesktop";
import MockupDesignSystemMobile from "./cases/MockupDesignSystemMobile";

// The desktop and mobile frames carry different copy and layouts, so each case has two variants.
const CASE_VARIANTS: Record<CaseStudyId, { Desktop: ComponentType; Mobile: ComponentType }> = {
  "entel-ds": { Desktop: DesignSystemEntelDesktop, Mobile: DesignSystemEntelMobile },
  "entel-docs": { Desktop: DocumentacionEntelDesktop, Mobile: DocumentacionEntelMobile },
  "ecommerce-consultancy": {
    Desktop: ConsultoriaEcommerceDesktop,
    Mobile: ConsultoriaEcommerceMobile,
  },
  "mockup-ds": { Desktop: MockupDesignSystemDesktop, Mobile: MockupDesignSystemMobile },
};

export function CasePage({ caseId }: { caseId: CaseStudyId }) {
  const { Desktop, Mobile } = CASE_VARIANTS[caseId];
  return (
    <main className="w-full max-w-[1440px]">
      <div className="hidden lg:block">
        <Desktop />
      </div>
      <div className="lg:hidden">
        <Mobile />
      </div>
    </main>
  );
}
