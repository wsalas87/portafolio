import { useEffect } from "react";
import { TopNavigation } from "./components/TopNavigation";
import { HeroSection } from "./components/HeroSection";
import { DotMatrixAnimation } from "./components/DotMatrixAnimation";
import { CasePage } from "./pages/CasePage";
import { useHashRoute } from "./routing";

const SITE_TITLE = "Wilfredo Salas — Product Designer";

export default function App() {
  const route = useHashRoute();

  useEffect(() => {
    document.title =
      route.name === "case" ? `${route.study.navLabel} — Wilfredo Salas` : SITE_TITLE;
  }, [route]);

  const handleGoHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-white flex flex-col items-center relative min-h-dvh w-full overflow-x-clip">
      <TopNavigation onGoHome={handleGoHome} />

      {route.name === "case" ? (
        <CasePage key={route.study.id} caseId={route.study.id} />
      ) : (
        <>
          <HeroSection />
          <DotMatrixAnimation />
        </>
      )}
    </div>
  );
}
