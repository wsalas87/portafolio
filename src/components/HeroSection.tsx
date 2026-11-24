import { CASE_STUDIES, caseHref } from "../data/portfolioContent";

const imgIconsPlus = "/assets/d163c.svg";

function IconsPlus({ className }: { className?: string }) {
  return (
    <span className={className || "relative block size-[14px]"} data-name="Icons/plus">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconsPlus} />
    </span>
  );
}

export function HeroSection() {
  return (
    <main
      id="inicio"
      className="flex flex-col lg:flex-row items-start lg:items-center gap-[16px] lg:gap-[24px] px-[16px] py-[20px] lg:px-[48px] lg:py-[32px] lg:min-h-[582px] relative shrink-0 w-full max-w-[1440px]"
      data-name="container"
    >
      {/* Left Column: Greeting & Display Headline */}
      <div
        className="[word-break:break-word] flex flex-col gap-[20px] lg:gap-[32px] items-start relative w-full lg:flex-1 lg:max-w-[889px] xl:w-[889px] xl:flex-none"
        data-name="header"
      >
        <p
          className="font-['Roboto:Light'] font-light text-[28px] leading-[28px] lg:text-[40px] lg:leading-[48px] relative shrink-0 text-[#4d4d4d] w-full"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          ¡Hola! me llamo Wilfredo
        </p>

        <h1 className="font-['JetBrains_Mono:ExtraLight'] font-extralight text-[32px] leading-[40px] lg:text-[56px] lg:leading-[72px] relative shrink-0 text-[#1a1a1a] w-full lg:max-w-[773px]">
          <span>{`Y es hora de diseñar la `}</span>
          <span className="font-['JetBrains_Mono:Bold'] font-bold">coherencia</span>
          <span>{` y escala dentro de tus `}</span>
          <span className="font-['JetBrains_Mono:Bold'] font-bold">productos digitales</span>
        </h1>
      </div>

      {/* Right Column: Bio & Case Links */}
      <section
        aria-label="Presentación y casos de estudio"
        className="flex flex-col gap-[20px] lg:gap-[32px] items-start relative shrink-0 w-full max-w-[355px] lg:w-[355px]"
        data-name="section"
      >
        <p
          className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#4d4d4d] text-[16px] w-full max-w-[318px]"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          Soy Wilfredo Salas, Product Designer nacido y viviendo en Chile. Además soy especialista
          en creación, gobernanza y escalamiento de Design Systems end-to-end. Puente estratégico
          entre la visión de negocio, alta fidelidad visual, y el ecosistema frontend con Tokens
          sincronizados.
        </p>

        <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          {CASE_STUDIES.map((study) => (
            <a
              key={study.id}
              href={caseHref(study)}
              className="group cursor-pointer flex min-h-[32px] items-center justify-start py-[6px] relative rounded-[4px] shrink-0 text-left text-[#1a1a1a] hover:text-[#115b79] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a1a1a]"
            >
              <IconsPlus className="relative block shrink-0 size-[14px]" />
              <span className="flex items-center justify-center px-[8px] relative">
                <span className="[word-break:break-word] font-['JetBrains_Mono:ExtraLight'] font-extralight leading-[20px] relative text-[14px] sm:whitespace-nowrap decoration-solid [text-underline-position:from-font] decoration-from-font group-hover:underline">
                  {study.ctaLabel}
                </span>
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
