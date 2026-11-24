import { LoadingImage } from "../../components/LoadingImage";

export default function DesignSystemEntelMobile() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[48px] relative shrink-0 w-full z-[1]">
      <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[14px] items-start relative shrink-0 text-[#1a1a1a] w-full">
          <h1
            className="font-['Roboto:Medium'] font-medium leading-[48px] relative shrink-0 text-[40px] w-full"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Design System Entel
          </h1>
          <p
            className="font-['Roboto:Regular'] font-normal leading-[24px] relative shrink-0 text-[18px] w-full"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >{`Durante cuatro años trabajé en el Design System de Entel, llamado Andino Design System. Este caso muestra una parte de ese trabajo: la documentación de color, el uso tipográfico y el componente botón, todo mantenido en Figma y publicado con una página de documentación por cada pieza. `}</p>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start relative shrink-0 text-[#1a1a1a] w-full">
          <p
            className="font-['Roboto:Light'] font-light leading-[28px] relative shrink-0 text-[28px] whitespace-nowrap"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Problema
          </p>
          <p
            className="font-['Roboto:Regular'] font-normal leading-[24px] min-w-full relative shrink-0 text-[16px] w-[min-content]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Entel comunica a través de muchos productos y canales, y cada equipo tomaba sus propias
            decisiones de color, tipografía y componentes. Sin un criterio común, una misma marca
            podía verse distinta de una pantalla a otra. Había además dudas concretas que se
            repetían: qué color de texto es legible sobre cada fondo, cuándo usar Barlow y cuándo
            Inter, cómo debía verse un botón en cada estado y qué hacer con las tipografías al
            diseñar para desktop o para mobile.
          </p>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start relative shrink-0 text-[#1a1a1a] w-full">
          <p
            className="font-['Roboto:Light'] font-light leading-[28px] relative shrink-0 text-[28px] whitespace-nowrap"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Solución
          </p>
          <p
            className="font-['Roboto:Regular'] font-normal leading-[24px] min-w-full relative shrink-0 text-[16px] w-[min-content]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            El objetivo fue construir un sistema único y documentado, que cualquier diseñador o
            desarrollador de Entel pudiera consultar para aplicar la marca con el mismo criterio en
            todos los productos. Para eso había que definir los foundations (color, tipografía,
            espaciado), conectarlos con tokens y construir sobre ellos los componentes, empezando
            por piezas como el botón.
          </p>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start relative shrink-0 text-[#1a1a1a] w-full">
            <p
              className="font-['Roboto:Light'] font-light leading-[28px] relative shrink-0 text-[28px] w-[318px]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Construcción solución
            </p>
            <div
              className="font-['Roboto:Regular'] font-normal leading-[0] min-w-full relative shrink-0 text-[0px] w-[min-content] whitespace-pre-wrap"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              <p className="mb-0 text-[16px]">
                <span className="leading-[24px]">
                  Empecé por el color. Lo que venía definido por marca Entel fueron los colores
                  blanco, Azul Entel (
                </span>
                <span className="[word-break:break-word] font-['Roboto_Mono:Regular'] font-normal leading-[24px]">
                  #002EFF
                </span>
                <span className="leading-[24px]">), Naranjo Entel (</span>
                <span className="[word-break:break-word] font-['Roboto_Mono:Regular'] font-normal leading-[24px]">
                  #FF3D00
                </span>
                <span className="leading-[24px]">), Verde Eco (</span>
                <span className="[word-break:break-word] font-['Roboto_Mono:Regular'] font-normal leading-[24px]">
                  #42E8B4
                </span>
                <span className="leading-[24px]">) y Azul Negocios (</span>
                <span className="[word-break:break-word] font-['Roboto_Mono:Regular'] font-normal leading-[24px]">
                  #10069F
                </span>
                <span className="leading-[24px]">
                  ). Los colores que se agregaron fueron los contextuales para éxito (
                </span>
                <span className="[word-break:break-word] font-['Roboto_Mono:Regular'] font-normal leading-[24px]">
                  #1EA67B
                </span>
                <span className="leading-[24px]">), error (</span>
                <span className="[word-break:break-word] font-['Roboto_Mono:Regular'] font-normal leading-[24px]">
                  #DB110A
                </span>
                <span className="leading-[24px]">) y alerta (</span>
                <span className="[word-break:break-word] font-['Roboto_Mono:Regular'] font-normal leading-[24px]">
                  #F5B207
                </span>
                <span className="leading-[24px]">{`). `}</span>
              </p>
              <p className="leading-[24px] mb-0 text-[16px]">​</p>
              <p className="mb-0 text-[16px]">
                <span className="leading-[24px]">
                  Cada color tiene una escala de tonos, de 100 a 800 en el caso del azul Entel,
                  construida a partir de un porcentaje de luz sobre el color base, siguiendo el
                  modelo HSL. También armé una escala de neutros, de negro (
                </span>
                <span className="[word-break:break-word] font-['Roboto_Mono:Regular'] font-normal leading-[24px]">
                  #0C0C0C
                </span>
                <span className="leading-[24px]">
                  ) a blanco. Para la legibilidad, documenté una matriz de combinaciones permitidas
                  entre fondo y texto, con ejemplos de lo que sí y lo que no se debe hacer por
                  contraste y accesibilidad.
                </span>
              </p>
              <p className="leading-[24px] mb-0 text-[16px]">​</p>
              <p className="leading-[24px] text-[16px]">
                Sobre esa base armé la lógica de tokens en tres niveles. El primero es el valor, el
                hexadecimal. El segundo es el token primitivo (por ejemplo, color-azul-entel-500).
                El tercero es el token semántico, que asigna un uso concreto, como
                color-primary-bg-fill-hover o color-text-link-default. La documentación explica los
                términos (bg fill, bg stroke, bg surface, stroke, text e icon) para que el nombre de
                un token diga dónde se aplica.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
        <div className="aspect-[196/290] relative shrink-0 w-full">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <LoadingImage
              alt="Colors 2"
              className="absolute h-[576.21%] left-[-0.01%] max-w-none top-[-51.03%] w-[204.6%]"
              src="/assets/cases/6c4d5.png"
            />
          </div>
        </div>
        <div className="aspect-[318/452] relative shrink-0 w-full">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <LoadingImage
              alt="Colors 3"
              className="absolute h-[599.15%] left-[-0.01%] max-w-none top-[-233.34%] w-[204.6%]"
              src="/assets/cases/6c4d5.png"
            />
          </div>
        </div>
        <div className="aspect-[318/452] relative shrink-0 w-full">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <LoadingImage
              alt="Colors 4"
              className="absolute h-[599.15%] left-[-104.46%] max-w-none top-[-233.31%] w-[204.6%]"
              src="/assets/cases/6c4d5.png"
            />
          </div>
        </div>
        <div className="aspect-[318/459] relative shrink-0 w-full">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <LoadingImage
              alt="Colors 5"
              className="absolute h-[590.02%] left-[-2.21%] max-w-none top-[-328.68%] w-[204.6%]"
              src="/assets/cases/6c4d5.png"
            />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
        <div className="aspect-[318/707] relative shrink-0 w-full">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <LoadingImage
              alt="Colors 2"
              className="absolute h-[383.05%] left-[-104.67%] max-w-none top-[-32.75%] w-[204.6%]"
              src="/assets/cases/6c4d5.png"
            />
          </div>
        </div>
        <div className="aspect-[318/452] relative shrink-0 w-full">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <LoadingImage
              alt="Colors 3"
              className="absolute h-[599.15%] left-[-104.57%] max-w-none top-[-331.75%] w-[204.6%]"
              src="/assets/cases/6c4d5.png"
            />
          </div>
        </div>
        <div className="aspect-[318/452] relative shrink-0 w-full">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <LoadingImage
              alt="Colors 4"
              className="absolute h-[599.15%] left-[-102.16%] max-w-none top-[-432.33%] w-[204.6%]"
              src="/assets/cases/6c4d5.png"
            />
          </div>
        </div>
        <div className="aspect-[318/459] relative shrink-0 w-full">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <LoadingImage
              alt="Colors 5"
              className="absolute h-[590.02%] left-[-0.01%] max-w-none top-[-426.31%] w-[204.6%]"
              src="/assets/cases/6c4d5.png"
            />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
        <div className="content-stretch flex items-start relative shrink-0 w-full">
          <p
            className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[24px] min-w-px relative text-[#1a1a1a] text-[16px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            En tipografía, la documentación define dos familias: Barlow como fuente principal de la
            marca, pensada para títulos y elementos grandes, e Inter como complemento por su
            legibilidad en cuerpos de texto pequeños en pantalla. Ambas se usan en peso regular y
            bold. Las variables tipográficas cambian según el dispositivo (desktop, tablet o mobile)
            configurado en el frame, por lo que dejé explicado que hay que definir el dispositivo
            antes de aplicar o desvincular cualquier estilo. También documenté el interlineado de
            los cuerpos de texto (por ejemplo, Body 1 en 18px con 24px de line height), el baseline
            y el espaciado entre headlines, subtítulos y texto.
          </p>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full">
        <div className="aspect-[414/264] relative shrink-0 w-full">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <LoadingImage
              alt="Uses Guide 2"
              className="absolute h-[633.33%] left-[-0.04%] max-w-none top-[-54.55%] w-[100.08%]"
              src="/assets/cases/e406d.png"
            />
          </div>
        </div>
        <div className="aspect-[548/406] relative shrink-0 w-full">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <LoadingImage
              alt="Uses Guide 3"
              className="absolute h-[544.42%] left-[-0.04%] max-w-none top-[-136.24%] w-[100.08%]"
              src="/assets/cases/e406d.png"
            />
          </div>
        </div>
        <div className="aspect-[543/374] relative shrink-0 w-full">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <LoadingImage
              alt="Uses Guide 4"
              className="absolute h-[585.92%] left-[-0.04%] max-w-none top-[-376.92%] w-[100.08%]"
              src="/assets/cases/e406d.png"
            />
          </div>
        </div>
        <div className="aspect-[543/328] relative shrink-0 w-full">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <LoadingImage
              alt="Uses Guide 5"
              className="absolute h-[668.09%] left-[-0.04%] max-w-none top-[-544.98%] w-[100.08%]"
              src="/assets/cases/e406d.png"
            />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
        <div className="content-stretch flex items-start relative shrink-0 w-full">
          <p
            className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[24px] min-w-px relative text-[#1a1a1a] text-[16px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            El botón es el componente que muestra cómo se junta todo. Tiene cuatro variantes
            (primary, secondary, tertiary y link) y cinco estados (enabled, hovered, pressed,
            focused y disabled), lo que da 20 variantes en Figma. Admite ícono a la izquierda y a la
            derecha, y su texto es editable. La página del componente indica la versión (Andino
            V1.5.8.3 / OS V1.4.1), el estado de desarrollo y una nota de cambios; en este caso,
            ajustes a un componente refactorizado.
          </p>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-full">
        <div className="aspect-[3312/2068] relative shrink-0 w-full">
          <LoadingImage
            alt="carrousel"
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src="/assets/cases/59d79.png"
          />
        </div>
        <div className="aspect-[1918/1008] relative shrink-0 w-full">
          <LoadingImage
            alt="docu-boton 1"
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src="/assets/cases/9696a.png"
          />
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start relative shrink-0 text-[#1a1a1a] w-full">
          <p
            className="font-['Roboto:Light'] font-light leading-[28px] relative shrink-0 text-[28px] w-[318px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Cuáles fueron los objetivos solucionados
          </p>
          <p
            className="font-['Roboto:Regular'] font-normal leading-[24px] min-w-full relative shrink-0 text-[16px] w-[min-content]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            El equipo pasó a tener una sola fuente de consulta para el color: qué tono usar, con qué
            token y sobre qué fondo se lee bien. La elección entre Barlow e Inter quedó definida por
            tipo de uso, y la escala tipográfica se adapta al dispositivo con una configuración
            explícita en Figma. El botón tiene todas sus variantes y estados resueltos en un solo
            componente, con documentación y versión visibles. Con los tokens semánticos, un cambio
            de color puede hacerse en un punto y propagarse a los componentes que lo usan, en lugar
            de editar pantalla por pantalla.
          </p>
        </div>
      </div>
    </div>
  );
}
