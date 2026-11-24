import { useEffect, useState, type FormEvent } from "react";
import type { DrawerView } from "../data/portfolioContent";

interface DetailDrawerProps {
  view: DrawerView | null;
  onClose: () => void;
  onChangeView: (view: DrawerView) => void;
}

export function DetailDrawer({ view, onClose, onChangeView }: DetailDrawerProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [contactSent, setContactSent] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [senderMessage, setSenderMessage] = useState("");

  useEffect(() => {
    if (!view) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [view, onClose]);

  if (!view) return null;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("hola@wilfredosalas.cl");
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      setCopiedEmail(false);
    }
  };

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!senderName.trim() || !senderEmail.trim() || !senderMessage.trim()) return;
    setContactSent(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/25 backdrop-blur-[1px]"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="bg-white h-full w-full max-w-[540px] border-l border-[#e6e6e6] px-[24px] py-[28px] sm:px-[40px] sm:py-[36px] overflow-y-auto flex flex-col justify-between gap-[32px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-[28px]">
          {/* Drawer Top Bar */}
          <div className="flex items-center justify-between border-b border-[#ececec] pb-[16px]">
            <span className="font-['JetBrains_Mono:ExtraLight'] font-extralight text-[12px] leading-[18px] text-[#4d4d4d] uppercase tracking-[0.06em]">
              {view.type === "contact" && "Contacto directo"}
            </span>
            <button
              type="button"
              onClick={onClose}
              className="cursor-pointer font-['JetBrains_Mono:ExtraLight'] font-extralight text-[14px] leading-[20px] text-[#1a1a1a] px-[10px] py-[4px] rounded-[4px] hover:bg-[#f5f5f5] transition-colors"
            >
              Cerrar [ESC]
            </button>
          </div>

          {/* Contact View */}
          {view.type === "contact" && (
            <div className="flex flex-col gap-[24px]">
              <div className="flex flex-col gap-[8px]">
                <h2
                  className="font-['Roboto:Light'] font-light text-[28px] leading-[36px] text-[#242424]"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Hablemos sobre tus productos digitales
                </h2>
                <p
                  className="font-['Roboto:Regular'] text-[16px] leading-[24px] text-[#4d4d4d]"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Disponible para liderar iniciativas de Design Systems, consultoría e-commerce y
                  diseño de producto en equipos de alto impacto.
                </p>
              </div>

              <div className="flex items-center justify-between border border-[#e6e6e6] rounded-[4px] px-[14px] py-[12px]">
                <span className="font-['JetBrains_Mono:ExtraLight'] text-[14px] leading-[20px] text-[#1a1a1a]">
                  hola@wilfredosalas.cl
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="cursor-pointer font-['JetBrains_Mono:Bold'] font-bold text-[12px] leading-[18px] text-[#1a1a1a] px-[10px] py-[4px] rounded-[4px] bg-[#f5f5f5] hover:bg-[#eaeaea] transition-colors"
                >
                  {copiedEmail ? "Copiado" : "Copiar correo"}
                </button>
              </div>

              {contactSent ? (
                <div className="border border-[#1a1a1a] rounded-[4px] p-[20px] flex flex-col gap-[8px]">
                  <p className="font-['JetBrains_Mono:Bold'] font-bold text-[14px] leading-[20px] text-[#1a1a1a]">
                    Mensaje registrado
                  </p>
                  <p
                    className="font-['Roboto:Regular'] text-[14px] leading-[21px] text-[#4d4d4d]"
                    style={{ fontVariationSettings: '"wdth" 100' }}
                  >
                    Gracias, {senderName}. Me pondré en contacto contigo pronto a {senderEmail}.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setContactSent(false);
                      setSenderName("");
                      setSenderEmail("");
                      setSenderMessage("");
                    }}
                    className="cursor-pointer self-start mt-[8px] font-['JetBrains_Mono:ExtraLight'] text-[13px] leading-[18px] text-[#1a1a1a] underline"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="flex flex-col gap-[16px]">
                  <label className="flex flex-col gap-[6px]">
                    <span className="font-['JetBrains_Mono:ExtraLight'] text-[13px] leading-[18px] text-[#1a1a1a]">
                      Nombre
                    </span>
                    <input
                      type="text"
                      required
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="Tu nombre"
                      className="border border-[#d9d9d9] rounded-[4px] px-[12px] py-[8px] font-['Roboto:Regular'] text-[15px] leading-[22px] text-[#1a1a1a] focus:border-[#1a1a1a] focus:outline-none"
                    />
                  </label>

                  <label className="flex flex-col gap-[6px]">
                    <span className="font-['JetBrains_Mono:ExtraLight'] text-[13px] leading-[18px] text-[#1a1a1a]">
                      Correo electrónico
                    </span>
                    <input
                      type="email"
                      required
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="nombre@empresa.com"
                      className="border border-[#d9d9d9] rounded-[4px] px-[12px] py-[8px] font-['Roboto:Regular'] text-[15px] leading-[22px] text-[#1a1a1a] focus:border-[#1a1a1a] focus:outline-none"
                    />
                  </label>

                  <label className="flex flex-col gap-[6px]">
                    <span className="font-['JetBrains_Mono:ExtraLight'] text-[13px] leading-[18px] text-[#1a1a1a]">
                      Mensaje
                    </span>
                    <textarea
                      rows={4}
                      required
                      value={senderMessage}
                      onChange={(e) => setSenderMessage(e.target.value)}
                      placeholder="Cuéntame sobre el desafío de tu producto o Design System..."
                      className="border border-[#d9d9d9] rounded-[4px] px-[12px] py-[8px] font-['Roboto:Regular'] text-[15px] leading-[22px] text-[#1a1a1a] focus:border-[#1a1a1a] focus:outline-none resize-y"
                    />
                  </label>

                  <button
                    type="submit"
                    className="cursor-pointer bg-[#1a1a1a] text-white rounded-[4px] px-[16px] py-[10px] font-['JetBrains_Mono:ExtraLight'] text-[14px] leading-[20px] hover:bg-[#333333] transition-colors"
                  >
                    Enviar mensaje
                  </button>
                </form>
              )}
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        <div className="border-t border-[#ececec] pt-[16px] flex items-center justify-between">
          <button
            type="button"
            onClick={() => onChangeView({ type: "contact" })}
            className="cursor-pointer font-['JetBrains_Mono:ExtraLight'] text-[13px] leading-[18px] text-[#1a1a1a] hover:underline"
          >
            + Hablemos
          </button>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-['JetBrains_Mono:ExtraLight'] text-[13px] leading-[18px] text-[#4d4d4d] hover:text-[#1a1a1a] transition-colors"
          >
            Linkedin ↗
          </a>
        </div>
      </div>
    </div>
  );
}
