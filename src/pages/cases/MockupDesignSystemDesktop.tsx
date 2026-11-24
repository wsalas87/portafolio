import { LoadingImage } from "../../components/LoadingImage";

export default function MockupDesignSystemDesktop() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center justify-center px-[48px] py-[72px] relative shrink-0 w-full z-[1]">
      <div className="content-stretch flex flex-col gap-[72px] items-start relative shrink-0 w-full max-w-[889px]">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[#1a1a1a] w-full">
          <h1
            className="font-['Roboto:Medium'] font-medium leading-[56px] relative shrink-0 text-[48px] w-full"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Mockup Design System
          </h1>
          <p
            className="font-['Roboto:Regular'] font-normal leading-[28px] relative shrink-0 text-[20px] w-full"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Cuando diseñé mi portafolio decidí construirle un Design System propio, aunque el sitio
            tiene pocas pantallas y lo mantengo solo. Trabajé varios años con sistemas de diseño en
            proyectos grandes y sé lo que cuesta ordenarlos cuando ya crecieron sin reglas. Quise
            aplicar ese criterio desde el primer día, en un proyecto donde nadie me lo exigía.
          </p>
        </div>
        <div className="[word-break:break-word] content-stretch flex gap-[24px] items-start relative shrink-0 text-[#1a1a1a] w-full">
          <p
            className="font-['Roboto:Light'] font-light leading-[48px] relative shrink-0 text-[40px] w-[318px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Problema
          </p>
          <p
            className="flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[24px] min-w-px relative text-[16px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Un sitio pequeño suele empezar sin sistema. Se diseña una pantalla, luego otra, y cada
            una resuelve sus botones, sus espaciados y sus colores por separado. Con tres páginas
            eso parece inofensivo. Cuando agrego un caso nuevo, una sección o una versión mobile,
            aparecen diferencias que nadie decidió: un botón con otro radio, un gris que se parece
            al gris de la sección anterior pero no es el mismo, un menú que en mobile se comporta
            distinto que en desktop. Corregir eso después toma más tiempo que haberlo definido al
            comienzo, y un portafolio es justamente el lugar donde esas inconsistencias se notan
            más.
          </p>
        </div>
        <div className="[word-break:break-word] content-stretch flex gap-[24px] items-start relative shrink-0 text-[#1a1a1a] w-full">
          <p
            className="font-['Roboto:Light'] font-light leading-[48px] relative shrink-0 text-[40px] w-[318px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Objetivo
          </p>
          <p
            className="flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[24px] min-w-px relative text-[16px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            El objetivo fue crear un sistema de diseño reducido pero escalable: pocas piezas, bien
            definidas y documentadas, que me permitan agregar páginas y componentes sin rediseñar lo
            anterior. El sistema tiene que servir hoy para un sitio chico y seguir sirviendo si el
            portafolio crece.
          </p>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full max-w-[889px]">
          <div className="[word-break:break-word] content-stretch flex gap-[24px] items-start relative shrink-0 text-[#1a1a1a] w-full">
            <p
              className="font-['Roboto:Light'] font-light leading-[48px] relative shrink-0 text-[40px] w-[318px]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Solución
            </p>
            <p
              className="flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[24px] min-w-px relative text-[16px]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Empecé por los tokens de la librería, que son la base de todo lo demás: color,
              tipografía y espaciado quedan definidos en un solo lugar, y los componentes los
              consumen en lugar de usar valores sueltos. Cambiar un token actualiza todas las piezas
              que lo usan.
            </p>
          </div>
        </div>
      </div>
      <div className="content-start flex flex-wrap gap-[24px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-[calc((100%-48px)*432/1296)]">
          <p
            className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[28px] relative shrink-0 text-[#1a1a1a] text-[20px] w-full"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Color · Azules · color/blue
          </p>
          <div className="border border-[#999] border-solid content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="bg-[#e6e6e6] border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Muestra
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Token
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  HEX · Value
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <div className="bg-[#172227] border border-[#999] border-solid h-[24px] relative shrink-0 w-[56px]" />
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  color/blue/10
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  #172227
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <div className="bg-[#193d4b] border border-[#999] border-solid h-[24px] relative shrink-0 w-[56px]" />
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  color/blue/20
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  #193D4B
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <div className="bg-[#115b79] border border-[#999] border-solid h-[24px] relative shrink-0 w-[56px]" />
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  color/blue/30
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  #115B79
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <div className="bg-[#007eb0] border border-[#999] border-solid h-[24px] relative shrink-0 w-[56px]" />
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  color/blue/40
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  #007EB0
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <div className="bg-[#139ed4] border border-[#999] border-solid h-[24px] relative shrink-0 w-[56px]" />
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  color/blue/50
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  #139ED4
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <div className="bg-[#45b0da] border border-[#999] border-solid h-[24px] relative shrink-0 w-[56px]" />
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  color/blue/60
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  #45B0DA
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <div className="bg-[#82bed5] border border-[#999] border-solid h-[24px] relative shrink-0 w-[56px]" />
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  color/blue/70
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  #82BED5
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <div className="bg-[#b5cfda] border border-[#999] border-solid h-[24px] relative shrink-0 w-[56px]" />
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  color/blue/80
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  #B5CFDA
                </p>
              </div>
            </div>
            <div className="bg-white border-0 border-[#999] border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <div className="bg-[#dee9ee] border border-[#999] border-solid h-[24px] relative shrink-0 w-[56px]" />
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  color/blue/90
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  #DEE9EE
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-[calc((100%-48px)*432/1296)]">
          <p
            className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[28px] relative shrink-0 text-[#1a1a1a] text-[20px] w-full"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Color · Neutros · color/gray
          </p>
          <div className="border border-[#999] border-solid content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="bg-[#e6e6e6] border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Muestra
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Token
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  HEX · Value
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <div className="bg-[#0c0c0c] border border-[#999] border-solid h-[24px] relative shrink-0 w-[56px]" />
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  color/gray/0
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  #0C0C0C
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <div className="bg-[#1a1a1a] border border-[#999] border-solid h-[24px] relative shrink-0 w-[56px]" />
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  color/gray/10
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  #1A1A1A
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <div className="bg-white border border-[#999] border-solid h-[24px] relative shrink-0 w-[56px]" />
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  color/gray/100
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  #FFFFFF
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <div className="bg-[#333] border border-[#999] border-solid h-[24px] relative shrink-0 w-[56px]" />
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  color/gray/20
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  #333333
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <div className="bg-[#4d4d4d] border border-[#999] border-solid h-[24px] relative shrink-0 w-[56px]" />
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  color/gray/30
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  #4D4D4D
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <div className="bg-[#666] border border-[#999] border-solid h-[24px] relative shrink-0 w-[56px]" />
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  color/gray/40
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  #666666
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <div className="bg-[#808080] border border-[#999] border-solid h-[24px] relative shrink-0 w-[56px]" />
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  color/gray/50
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  #808080
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <div className="bg-[#999] border border-[#999] border-solid h-[24px] relative shrink-0 w-[56px]" />
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  color/gray/60
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  #999999
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <div className="bg-[#b3b3b3] border border-[#999] border-solid h-[24px] relative shrink-0 w-[56px]" />
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  color/gray/70
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  #B3B3B3
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <div className="bg-[#ccc] border border-[#999] border-solid h-[24px] relative shrink-0 w-[56px]" />
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  color/gray/80
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  #CCCCCC
                </p>
              </div>
            </div>
            <div className="bg-white border-0 border-[#999] border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <div className="bg-[#e6e6e6] border border-[#999] border-solid h-[24px] relative shrink-0 w-[56px]" />
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  color/gray/90
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  #E6E6E6
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-[calc((100%-48px)*432/1296)]">
          <p
            className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[28px] relative shrink-0 text-[#1a1a1a] text-[20px] w-full"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Color · Rosas · color/pink
          </p>
          <div className="border border-[#999] border-solid content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="bg-[#e6e6e6] border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Muestra
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Token
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  HEX · Value
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <div className="bg-[#312128] border border-[#999] border-solid h-[24px] relative shrink-0 w-[56px]" />
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  color/pink/10
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  #312128
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <div className="bg-[#602a42] border border-[#999] border-solid h-[24px] relative shrink-0 w-[56px]" />
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  color/pink/20
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  #602A42
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <div className="bg-[#9b295b] border border-[#999] border-solid h-[24px] relative shrink-0 w-[56px]" />
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  color/pink/30
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  #9B295B
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <div className="bg-[#e11c73] border border-[#999] border-solid h-[24px] relative shrink-0 w-[56px]" />
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  color/pink/40
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  #E11C73
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <div className="bg-[#d94e8c] border border-[#999] border-solid h-[24px] relative shrink-0 w-[56px]" />
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  color/pink/50
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  #D94E8C
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <div className="bg-[#d67da4] border border-[#999] border-solid h-[24px] relative shrink-0 w-[56px]" />
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  color/pink/60
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  #D67DA4
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <div className="bg-[#d8a6bc] border border-[#999] border-solid h-[24px] relative shrink-0 w-[56px]" />
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  color/pink/70
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  #D8A6BC
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <div className="bg-[#dfc9d3] border border-[#999] border-solid h-[24px] relative shrink-0 w-[56px]" />
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  color/pink/80
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  #DFC9D3
                </p>
              </div>
            </div>
            <div className="bg-white border-0 border-[#999] border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <div className="bg-[#ece7e9] border border-[#999] border-solid h-[24px] relative shrink-0 w-[56px]" />
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  color/pink/90
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  #ECE7E9
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-[calc((100%-24px)*656/1320)]">
          <p
            className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[28px] relative shrink-0 text-[#1a1a1a] text-[20px] w-full"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Escala numérica
          </p>
          <div className="border border-[#999] border-solid content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="bg-[#e6e6e6] border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Token
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Tipo
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  number/0
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Número
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  number/10
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Número
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  number/12
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Número
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  number/14
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Número
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  number/1440
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Número
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  number/16
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Número
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  number/18
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Número
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  number/2
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Número
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  number/20
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Número
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  number/24
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Número
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  number/28
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Número
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  number/32
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Número
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  number/393
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Número
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  number/4
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Número
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  number/40
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Número
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  number/48
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Número
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  number/56
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Número
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  number/72
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Número
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  number/8
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Número
                </p>
              </div>
            </div>
            <div className="bg-white border-0 border-[#999] border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  number/99999
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Número
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip relative">
          <p
            className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[28px] relative shrink-0 text-[#1a1a1a] text-[20px] w-full"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Tipografía
          </p>
          <div className="border border-[#999] border-solid content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="bg-[#e6e6e6] border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Token
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Tipo
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  font-family/jetbrains-mono
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Texto
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  font-family/roboto
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Texto
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  font-weight/200
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Número
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  font-weight/300
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Número
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  font-weight/400
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Número
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  font-weight/500
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Número
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  font-weight/600
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Número
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  font-weight/700
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Número
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  letter-spacing/0
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Número
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  letter-spacing/negative-0-02
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Número
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  letter-spacing/negative-0-04
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Número
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  letter-spacing/positive-0-02
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Número
                </p>
              </div>
            </div>
            <div className="bg-white border-[#999] border-b border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  letter-spacing/positive-0-04
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Número
                </p>
              </div>
            </div>
            <div className="bg-white border-0 border-[#999] border-solid content-stretch flex items-center overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  letter-spacing/positive-0-08
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[16px] py-[12px] relative">
                <p
                  className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-full"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Número
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full max-w-[889px]">
        <div className="[word-break:break-word] content-stretch flex gap-[24px] items-start relative shrink-0 text-[#1a1a1a] w-full">
          <p
            className="font-['Roboto:Light'] font-light leading-[48px] opacity-0 relative shrink-0 text-[40px] w-[318px]"
            aria-hidden="true"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Construcción solución
          </p>
          <div
            className="flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[0] min-w-px relative text-[16px] whitespace-pre-wrap"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            <p className="leading-[24px] mb-0">
              Sobre esos tokens armé los componentes que el sitio necesita. El botón tiene cuatro
              tipos (primary, secondary, outline y link) y tres estados (enabled, hover y pressed),
              lo que da 12 variantes dentro del mismo componente. El badge tiene tres variantes de
              color. La navegación superior existe en versión desktop y en versión mobile, y el
              ícono de menú tiene su estado abierto y cerrado. Para mobile también diseñé los ítems
              desplegables, con estado abierto y cerrado, y los íconos de más y menos que los
              acompañan.
            </p>
            <p className="leading-[24px] mb-0">​</p>
            <p className="leading-[24px]">
              Cada componente importante tiene una página de documentación en Figma, con su
              especificación: el botón y el badge tienen la suya. La idea es que si dejo el proyecto
              un mes y vuelvo, o si otra persona lo toma, no tenga que adivinar por qué una pieza es
              como es.
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full">
        <div className="aspect-[1230/704] flex-[1_0_0] min-w-px relative">
          <LoadingImage
            alt="carrousel"
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src="/assets/cases/63a92.png"
          />
        </div>
        <div className="aspect-[202/328] relative shrink-0 w-[15.03%]">
          <LoadingImage
            alt="Screenshot 2026-11-23 at 21.55.23 1"
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src="/assets/cases/59f34.png"
          />
        </div>
        <div className="aspect-[1360/1768] flex-[1_0_0] min-w-px relative">
          <LoadingImage
            alt="Screenshot 2026-11-23 at 21.55.35 1"
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src="/assets/cases/f8d29.png"
          />
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full max-w-[889px]">
        <div className="[word-break:break-word] content-stretch flex gap-[24px] items-start relative shrink-0 text-[#1a1a1a] w-full">
          <p
            className="font-['Roboto:Light'] font-light leading-[48px] opacity-0 relative shrink-0 text-[40px] w-[318px]"
            aria-hidden="true"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Construcción solución
          </p>
          <p
            className="flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[24px] min-w-px relative text-[16px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Mi experiencia como diseñador UI pesó en las decisiones de detalle: definir los estados
            de interacción desde el inicio en vez de agregarlos después, separar lo que es token de
            lo que es componente, y nombrar las variantes con la misma lógica de propiedades que usa
            un desarrollador al implementarlas.
          </p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full max-w-[889px]">
        <div className="[word-break:break-word] content-stretch flex gap-[24px] items-start relative shrink-0 text-[#1a1a1a] w-full">
          <p
            className="font-['Roboto:Light'] font-light leading-[48px] relative shrink-0 text-[40px] w-[318px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Objetivos solucionados
          </p>
          <p
            className="flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[24px] min-w-px relative text-[16px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            El sitio usa una sola fuente de verdad para color, tipografía y espaciado, de modo que
            una pantalla nueva se arma con piezas que ya existen. Los componentes tienen todos sus
            estados resueltos, así que no hay decisiones improvisadas al momento de diseñar o
            implementar. La versión desktop y la mobile comparten el mismo lenguaje visual. Y la
            documentación deja por escrito las reglas de cada componente, que es lo que permite que
            el sistema siga siendo coherente cuando el portafolio crezca.
          </p>
        </div>
      </div>
    </div>
  );
}
