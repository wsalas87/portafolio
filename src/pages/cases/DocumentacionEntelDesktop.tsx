import { LoadingImage } from "../../components/LoadingImage";

export default function DocumentacionEntelDesktop() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center justify-center px-[48px] py-[72px] relative shrink-0 w-full z-[1]">
      <div className="content-stretch flex flex-col gap-[72px] items-start relative shrink-0 w-full max-w-[889px]">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[#1a1a1a] w-full">
          <h1
            className="font-['Roboto:Medium'] font-medium leading-[56px] relative shrink-0 text-[48px] w-full"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Documentación Entel
          </h1>
          <p
            className="font-['Roboto:Regular'] font-normal leading-[28px] relative shrink-0 text-[20px] w-full"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Uno de mis aportes dentro del Design System de Entel fue la documentación del sistema de
            color y tipografía, que se publica en Figma y en el sitio de Andino. Acá podemos ver la
            paleta con su esquema de color, la lógica y la semántica de los tokens, las tablas de
            tokens primitivos y semánticos, las reglas de accesibilidad y el uso de la tipografía.
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
            Entel tiene varios productos digitales, y cada uno necesitaba usar los mismos colores y
            tipografías sin depender de la interpretación de quien diseñaba o programaba. Con una
            paleta de hexadecimales sueltos, un mismo azul podía aparecer con valores distintos
            entre pantallas, y nadie sabía qué color usar para un fondo, un borde o un texto.
            Tampoco había una regla escrita sobre qué combinaciones cumplían los criterios de
            contraste. La tipografía tenía un problema parecido: quien programaba no tenía una guía
            clara para decidir entre una etiqueta HTML y una clase CSS, ni para distinguir los
            estilos de interfaz de los de banner.
          </p>
        </div>
        <div className="[word-break:break-word] content-stretch flex gap-[24px] items-start relative shrink-0 text-[#1a1a1a] w-full">
          <p
            className="font-['Roboto:Light'] font-light leading-[48px] relative shrink-0 text-[40px] w-[318px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Objetivo general a solucionar
          </p>
          <div
            className="flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[0] min-w-px relative text-[16px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            <p className="leading-[24px] mb-0 whitespace-pre-wrap">
              {`Convertir el color y la tipografía en un sistema documentado, con reglas verificables y un lenguaje común entre diseño y desarrollo. La solución se apoya en tres decisiones: `}
              <br aria-hidden />
              <br aria-hidden />
            </p>
            <ol className="list-decimal" start={1}>
              <li className="mb-0 ms-[24px]">
                <span className="leading-[24px]">
                  Definir una paleta corporativa, contextual y complementaria.
                </span>
              </li>
              <li className="mb-0 ms-[24px]">
                <span className="leading-[24px]">{`Ordenar los tokens en tres niveles para que el uso de cada color quede definido. `}</span>
              </li>
              <li className="ms-[24px]">
                <span className="leading-[24px]">
                  Medir cada color contra los criterios de accesibilidad y documentar el resultado.
                </span>
              </li>
            </ol>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full max-w-[889px]">
          <div className="[word-break:break-word] content-stretch flex gap-[24px] items-start relative shrink-0 text-[#1a1a1a] w-full">
            <p
              className="font-['Roboto:Light'] font-light leading-[48px] relative shrink-0 text-[40px] w-[318px]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Construcción solución
            </p>
            <div
              className="flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[0] min-w-px relative text-[0px] whitespace-pre-wrap"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              <p className="mb-0 text-[16px]">
                <span className="leading-[24px]">{`Para el esquema de color partí del modelo HSL y del porcentaje de luz. Cada color base genera una gama sin salir de la identidad de marca. Azul Entel va de 100 a 800 (el 500 es `}</span>
                <span className="[word-break:break-word] font-['Roboto_Mono:Regular'] font-normal leading-[24px]">
                  #002EFF
                </span>
                <span className="leading-[24px]">
                  ), y lo mismo aplica a naranjo, verde y azul negocios.
                </span>
              </p>
              <p className="leading-[24px] mb-0 text-[16px]">​</p>
              <p className="leading-[24px] text-[16px]">
                Los tokens tienen tres niveles. El primero es el valor, el hexadecimal. El segundo
                es el token primitivo, que nombra el color sin asignarle uso, como
                color-azul-entel-500. El tercero es el token semántico, que lo asocia a un
                propósito, como color-primary-bg-fill-hover. La tabla de primitivos se versionó (la
                imagen muestra Andino V1.5.7.7, del 23/01/2026, con estado Publicado en cada fila).
                La tabla de semánticos se organiza por categorías como Text, Base, Primary, Neutral,
                Secondary, Tertiary, Business, Success, Error, Warning, Lightbox, Illustration y
                Whatsapp, y cada token indica su valor en modo claro y en modo oscuro, junto con una
                descripción de uso.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
        <div className="aspect-[3810/4096] relative shrink-0 w-full">
          <LoadingImage
            alt="carrousel"
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src="/assets/cases/6ee13.png"
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
            Para que los nombres semánticos se entendieran sin consultar a nadie, definí seis
            términos: bg fill (fondo de componentes simples), bg stroke (fondo de componentes
            simples con borde, como los botones secundarios), bg surface (fondo de organismos,
            cards, banners y páginas), stroke, text e icon.
          </p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
        <div className="aspect-[3810/4096] relative shrink-0 w-full">
          <LoadingImage
            alt="carrousel"
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src="/assets/cases/6ee13.png"
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
          <div
            className="flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[0] min-w-px relative text-[16px] whitespace-pre-wrap"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            <p className="leading-[24px] mb-0">
              La accesibilidad la documenté con el criterio WCAG 2.0: contraste mínimo de 4,5:1 para
              nivel AA y 7:1 para AAA en texto normal, y 3:1 y 4,5:1 en texto grande. Probé cada
              tono de la paleta con texto blanco y con texto negro, y la página muestra el resultado
              con las insignias AA y AAA. Por ejemplo, Blue 01 100 sobre blanco da 7,4:1 y pasa
              ambos niveles, mientras que con texto negro baja a 2,83:1 y no pasa ninguno. La página
              de combinaciones de color lo traduce en una matriz de qué texto puede ir sobre qué
              fondo, con ejemplos de lo permitido, lo no permitido y lo que conviene restringir.
            </p>
            <p className="leading-[24px] mb-0">​</p>
            <p className="leading-[24px]">
              En tipografía fijé una regla simple: para texto solo se permite desde negro hasta
              neutro 600 (5,58:1), y el neutro 400 (2,49:1) y los más claros quedan prohibidos. La
              página separa texto grande (18 px o más, o 14 px en negrita) de texto normal (17 px o
              menos). También documenté dos formas de aplicar los estilos, etiquetas HTML y clases
              CSS, con un fragmento de código para interfaz y otro para banner (por ejemplo, h1 con
              la clase bheadline_1). Las clases sobrescriben el estilo por defecto, así que indiqué
              que se usen solo en casos específicos y que acumular muchas es una mala práctica.
            </p>
          </div>
        </div>
      </div>
      <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(2,minmax(0,1fr))] relative shrink-0 w-full">
        <div className="aspect-[639/907] relative row-[span_2] self-stretch shrink-0">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <LoadingImage
              alt="Color accessibility 1"
              className="absolute h-[225.8%] left-0 max-w-none top-[-42.89%] w-[99.92%]"
              src="/assets/cases/850dd.png"
            />
          </div>
        </div>
        <div className="aspect-[681/303] justify-self-stretch relative shrink-0">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <LoadingImage
              alt="Accessibility 1"
              className="absolute h-[433.22%] left-0 max-w-none top-[-121.27%] w-full"
              src="/assets/cases/479f5.png"
            />
          </div>
        </div>
        <div className="aspect-[660/335] relative self-start shrink-0 w-full">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <LoadingImage
              alt="Accessibility 2"
              className="absolute h-[379.75%] left-0 max-w-none top-[-250.17%] w-full"
              src="/assets/cases/479f5.png"
            />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full max-w-[889px]">
        <div className="[word-break:break-word] content-stretch flex gap-[24px] items-start relative shrink-0 text-[#1a1a1a] w-full">
          <p
            className="font-['Roboto:Light'] font-light leading-[48px] relative shrink-0 text-[40px] w-[318px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Cuáles fueron los objetivos solucionados
          </p>
          <div
            className="flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[0] min-w-px relative text-[16px] whitespace-pre-wrap"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            <p className="leading-[24px] mb-0">{`El sistema de color pasó de una lista de hexadecimales a una estructura de tres niveles que diseño y desarrollo leen igual, con modo claro y modo oscuro definidos en los tokens semánticos. Cada color de la paleta tiene su contraste medido, así que la decisión de qué combinación usar se consulta en la documentación y deja de depender del criterio de cada persona. `}</p>
            <p className="leading-[24px] mb-0">​</p>
            <p className="leading-[24px]">
              La tipografía quedó con un rango de colores permitido y con una guía de implementación
              que separa interfaz de banner. Todo se publica con control de versiones, y los
              componentes enlazan a su documentación en Figma y en Andino DS, por lo que los
              productos de Entel aplican la misma paleta y las mismas reglas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
