import { useEffect, useRef, useState, type ReactNode } from "react";
import { BrandLogo } from "./BrandLogo";
import { CASE_STUDIES, caseHref } from "../data/portfolioContent";

const imgIconsPlus = "/assets/d163c.svg";
const imgIconsMinus = "/assets/aebc6.svg";
const imgMenu = "/assets/730ae.svg";
const imgClose = "/assets/b9d54.svg";

const LINKEDIN_URL = "https://www.linkedin.com";
const CV_URL = "/cv-wilfredo-salas.pdf";
const CONTACT_MAILTO = "mailto:wilfredo.salas.g@gmail.com";

// Shared text styles from the Figma "button" component.
const labelText =
  "font-['JetBrains_Mono:ExtraLight'] font-extralight leading-[20px] text-[14px] whitespace-nowrap";
// Link buttons switch to the "hover" variant: dark blue, underlined label.
const linkButton =
  "group cursor-pointer flex items-center py-[8px] rounded-[4px] shrink-0 text-[#1a1a1a] hover:text-[#115b79] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a1a1a]";
const linkLabel = `${labelText} px-[8px] decoration-solid [text-underline-position:from-font] decoration-from-font group-hover:underline`;
const primaryButton = `cursor-pointer flex h-[38px] items-center px-[12px] py-[8px] rounded-[4px] shrink-0 bg-[#007eb0] hover:bg-[#115b79] text-[#e6e6e6] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a1a1a] ${labelText}`;

function Icon14({ src }: { src: string }) {
  return (
    <span className="relative block shrink-0 size-[14px]">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={src} />
    </span>
  );
}

interface TopNavigationProps {
  onGoHome: () => void;
}

export function TopNavigation({ onGoHome }: TopNavigationProps) {
  const [casesOpen, setCasesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCasesOpen, setMobileCasesOpen] = useState(false);
  const casesRef = useRef<HTMLDivElement>(null);

  const closeAll = () => {
    setCasesOpen(false);
    setMobileOpen(false);
    setMobileCasesOpen(false);
  };

  // Close menus on navigation, outside clicks and Escape.
  useEffect(() => {
    const handleHash = () => closeAll();
    const handlePointer = (event: PointerEvent) => {
      if (casesRef.current && !casesRef.current.contains(event.target as Node)) {
        setCasesOpen(false);
      }
    };
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeAll();
    };
    window.addEventListener("hashchange", handleHash);
    document.addEventListener("pointerdown", handlePointer);
    document.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("hashchange", handleHash);
      document.removeEventListener("pointerdown", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  const goHome = () => {
    closeAll();
    onGoHome();
  };

  return (
    <header className="bg-white relative shrink-0 w-full max-w-[1440px] z-20">
      {/* Desktop */}
      <div className="hidden lg:flex items-center justify-between px-[48px] py-[24px]">
        <BrandLogo onClick={goHome} />

        <nav aria-label="Navegación principal" className="flex gap-[32px] h-[38px] items-start">
          <a href="#/" onClick={goHome} className={`${linkButton} h-[36px]`}>
            <span className={linkLabel}>Inicio</span>
          </a>

          <div ref={casesRef} className="relative">
            <button
              type="button"
              aria-expanded={casesOpen}
              aria-controls="cases-menu"
              onClick={() => setCasesOpen((open) => !open)}
              className={`${linkButton} h-[38px]`}
            >
              <span className={linkLabel}>Casos</span>
              <Icon14 src={casesOpen ? imgIconsMinus : imgIconsPlus} />
            </button>

            {casesOpen && (
              <div
                id="cases-menu"
                onMouseLeave={() => setCasesOpen(false)}
                className="absolute left-[-3px] top-full bg-white border border-[#999] border-solid flex flex-col gap-[12px] items-start overflow-clip p-[12px] rounded-[8px]"
              >
                {CASE_STUDIES.map((study) => (
                  <a
                    key={study.id}
                    href={caseHref(study)}
                    className={`bg-white hover:bg-[#e6e6e6] flex h-[38px] items-center px-[12px] py-[8px] rounded-[4px] w-full text-[#1a1a1a] transition-colors focus-visible:outline-2 focus-visible:outline-[#1a1a1a] ${labelText}`}
                  >
                    {study.navLabel}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href={CV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${linkButton} h-[36px]`}
          >
            <span className={linkLabel}>Ver CV</span>
          </a>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${linkButton} h-[38px]`}
          >
            <span className={linkLabel}>Linkedin</span>
          </a>

          <a href={CONTACT_MAILTO} className={primaryButton}>
            Hablemos
          </a>
        </nav>
      </div>

      {/* Mobile */}
      <div className="lg:hidden flex items-center justify-between px-[16px] py-[20px]">
        <BrandLogo onClick={goHome} />
        <button
          type="button"
          aria-label={mobileOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => {
            setMobileOpen((open) => !open);
            setMobileCasesOpen(false);
          }}
          className="cursor-pointer relative shrink-0 size-[40px] rounded-[4px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a1a1a]"
        >
          {/* Smart-animate between the two "menu icon" variants (150ms, linear). */}
          <span
            className={`absolute h-[12px] left-[10px] top-[14px] w-[20px] transition-opacity duration-150 ease-linear ${mobileOpen ? "opacity-0" : "opacity-100"}`}
          >
            <span className="absolute inset-[-8.33%_0_0_0] block">
              <img alt="" className="block max-w-none size-full" src={imgMenu} />
            </span>
          </span>
          <span
            className={`absolute left-[12.93px] size-[14.142px] top-[12.93px] transition-opacity duration-150 ease-linear ${mobileOpen ? "opacity-100" : "opacity-0"}`}
          >
            <span className="absolute inset-[-5%_-5%_0_-5%] block">
              <img alt="" className="block max-w-none size-full" src={imgClose} />
            </span>
          </span>
        </button>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-menu"
          aria-label="Menú móvil"
          className="lg:hidden absolute left-0 top-full w-full bg-white flex flex-col gap-[16px] items-start px-[16px] py-[20px]"
        >
          <MobileItem>
            <a href="#/" onClick={goHome} className={`${linkButton} h-[38px] w-full`}>
              <span className={linkLabel}>Inicio</span>
            </a>
          </MobileItem>

          <div className="flex flex-col items-start w-full">
            <button
              type="button"
              aria-expanded={mobileCasesOpen}
              onClick={() => setMobileCasesOpen((open) => !open)}
              className={`${linkButton} h-[38px] w-full`}
            >
              <span className={linkLabel}>Casos</span>
              <Icon14 src={mobileCasesOpen ? imgIconsMinus : imgIconsPlus} />
            </button>
            {mobileCasesOpen &&
              CASE_STUDIES.map((study) => (
                <a
                  key={study.id}
                  href={caseHref(study)}
                  className={`${linkButton} h-[38px] w-full`}
                >
                  <span className={linkLabel}>{study.navLabel}</span>
                </a>
              ))}
          </div>

          <MobileItem>
            <a
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className={`${linkButton} h-[38px] w-full`}
            >
              <span className={linkLabel}>Ver CV</span>
            </a>
          </MobileItem>

          <MobileItem>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className={`${linkButton} h-[38px] w-full`}
            >
              <span className={linkLabel}>Linkedin</span>
            </a>
          </MobileItem>

          <MobileItem>
            <a
              href={CONTACT_MAILTO}
              onClick={() => setMobileOpen(false)}
              className={`${primaryButton} w-full`}
            >
              Hablemos
            </a>
          </MobileItem>
        </nav>
      )}
    </header>
  );
}

function MobileItem({ children }: { children: ReactNode }) {
  return <div className="w-full">{children}</div>;
}
