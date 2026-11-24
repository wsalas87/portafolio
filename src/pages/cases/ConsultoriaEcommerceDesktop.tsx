import { LoadingImage } from "../../components/LoadingImage";

export default function ConsultoriaEcommerceDesktop() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center justify-center px-[48px] py-[72px] relative shrink-0 w-full z-[1]">
      <div className="content-stretch flex flex-col gap-[72px] items-start relative shrink-0 w-full max-w-[889px]">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[#1a1a1a] w-full">
          <h1
            className="font-['Roboto:Medium'] font-medium leading-[56px] relative shrink-0 text-[48px] w-full"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Consultoría e-commerce
          </h1>
          <div
            className="font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[20px] w-full whitespace-pre-wrap"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            <p className="leading-[28px] mb-0">
              {`En el equipo de e-commerce de Entel participé como consultor UI en las propuestas de mejora de los flujos de contratación de equipos. Este caso muestra el listado de smartphones (la página donde el cliente compara equipos antes de entrar a la ficha de uno), en su versión desktop y mobile. `}
              <br aria-hidden />
              <br aria-hidden />
            </p>
            <p className="leading-[28px]">
              El descubrimiento, la investigación y el trabajo de UX los hicieron otros perfiles del
              equipo, dedicados a esas áreas. Mi trabajo empezó con esos insumos ya definidos: yo
              resolví cómo se veía y cómo se ordenaba visualmente cada pantalla.
            </p>
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex gap-[24px] items-start relative shrink-0 text-[#1a1a1a] w-full">
          <p
            className="font-['Roboto:Light'] font-light leading-[48px] relative shrink-0 text-[40px] w-[318px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Problema
          </p>
          <div
            className="flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[0] min-w-px relative text-[16px] whitespace-pre-wrap"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            <p className="leading-[24px] mb-0">{`El listado de smartphones tiene que mostrar muchos equipos parecidos entre sí y dejar que el cliente los distinga rápido. Cada tarjeta de Redmi Note 12Pro 5G 256GB lleva el nombre del equipo, el sello 5G, etiquetas de estado («Llega hoy», «Exclusivo Online», «Últimas unidades», «Semi nuevo», «Agotado»), el porcentaje de descuento, el precio normal tachado, el precio cliente, el valor de las 24 cuotas sin interés y los colores disponibles. `}</p>
            <p className="leading-[24px] mb-0">​</p>
            <p className="leading-[24px] mb-0">
              Con tanta información en un espacio pequeño, el precio, la disponibilidad y las
              ofertas compiten por la atención. A eso se suman los filtros (marca, precio, cámara
              trasera, equipos 5G, memoria interna, núcleos del procesador, sistema operativo, tipo
              de celular), las pestañas de categoría (Todos, Entel Black, Fiebre Rosada, Equipo +
              Plan, Seminuevos), el carrusel de ofertas y los banners laterales. En mobile el mismo
              contenido debe caber en una pantalla angosta, con la barra de ofertas, filtros y
              orden.
            </p>
            <p className="leading-[24px] mb-0">​</p>
            <p className="leading-[24px]">
              Los hallazgos concretos de la investigación sobre este listado los levantó el equipo
              de UX.
            </p>
          </div>
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
            El cliente debe encontrar el equipo que busca y entender su precio y disponibilidad en
            una sola mirada, tanto en desktop como en mobile. Desde el UI, eso significó definir una
            jerarquía visual clara dentro de la tarjeta y una distribución de filtros y navegación
            que funcione en ambos formatos.
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
            <div
              className="flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[0] min-w-px relative text-[16px] whitespace-pre-wrap"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              <p className="leading-[24px] mb-0">
                Trabajé las dos versiones sobre el design system de Entel, con sus componentes y
                tokens. En desktop dejé los filtros en una columna a la izquierda, con un
                interruptor «Llega hoy» al inicio, y la grilla de tarjetas a la derecha, en tres
                columnas. Las pestañas de categoría y el selector «Ordenar por» quedaron sobre la
                grilla, y el carrusel de ofertas encima de las tarjetas. Los logos de marca van bajo
                la ruta de navegación, como acceso directo.
              </p>
              <p className="leading-[24px] mb-0">​</p>
              <p className="leading-[24px]">
                En la tarjeta, el precio cliente es el elemento más grande y de color azul, el
                precio normal va tachado y en gris, y la etiqueta de descuento usa verde. Las
                etiquetas de estado van sobre el nombre del equipo, con borde de color. Un equipo
                agotado se muestra con la imagen, el texto y los colores en gris, y una etiqueta
                «Agotado», para que se reconozca sin abrir la ficha.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
        <div className="aspect-[2338/4096] relative shrink-0 w-full">
          <LoadingImage
            alt="carrousel"
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src="/assets/cases/8d19b.png"
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
            En mobile la tarjeta pasa a formato horizontal, con la imagen y el sello 5G a la
            izquierda y el texto a la derecha, una tarjeta por fila. Los filtros y el orden se
            reúnen en una barra de tres acciones (Ofertas, Filtrar por, Ordenar por) bajo los logos
            de marca.
          </p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
        <div className="h-[1664px] relative shrink-0 w-[376px]">
          <LoadingImage
            alt="carrousel"
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src="/assets/cases/30163.png"
          />
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
          <div
            className="flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[0] min-w-px relative text-[16px] whitespace-pre-wrap"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            <p className="leading-[24px] mb-0">{`El listado reúne en cada tarjeta el nombre, el precio cliente, el descuento, las cuotas y los colores, con una jerarquía que pone el precio primero. Las etiquetas de estado informan si el equipo llega hoy, es exclusivo online, queda con pocas unidades, es semi nuevo o está agotado. `}</p>
            <p className="leading-[24px] mb-0">​</p>
            <p className="leading-[24px]">
              Los filtros y las categorías están disponibles en ambos formatos, en una columna
              lateral en desktop y en una barra superior en mobile. Las dos versiones comparten los
              mismos componentes y la misma jerarquía, lo que mantiene el listado coherente con el
              resto del Design System.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
