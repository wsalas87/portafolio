import { useEffect, useState } from "react";
import { TopNavigation } from "./components/TopNavigation";
import { HeroSection } from "./components/HeroSection";
import { DotMatrixAnimation } from "./components/DotMatrixAnimation";
import { DetailDrawer } from "./components/DetailDrawer";
import { CasePage } from "./pages/CasePage";
import { useHashRoute } from "./routing";
import type { DrawerView } from "./data/portfolioContent";

const SITE_TITLE = "Wilfredo Salas — Product Designer";

export default function App() {
  const route = useHashRoute();
  const [drawerView, setDrawerView] = useState<DrawerView | null>(null);

  useEffect(() => {
    document.title =
      route.name === "case" ? `${route.study.navLabel} — Wilfredo Salas` : SITE_TITLE;
  }, [route]);

  const handleGoHome = () => {
    setDrawerView(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-white flex flex-col items-center relative min-h-dvh w-full overflow-x-clip">
      <TopNavigation onOpenDrawer={(view) => setDrawerView(view)} onGoHome={handleGoHome} />

      {route.name === "case" ? (
        <CasePage key={route.study.id} caseId={route.study.id} />
      ) : (
        <>
          <HeroSection />
          <DotMatrixAnimation />
        </>
      )}

      <DetailDrawer
        view={drawerView}
        onClose={() => setDrawerView(null)}
        onChangeView={(view) => setDrawerView(view)}
      />
    </div>
  );
}
