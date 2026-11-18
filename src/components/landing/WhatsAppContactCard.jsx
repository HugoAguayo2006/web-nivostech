import { useTranslation } from "react-i18next";
import { getWhatsAppUrl } from "../../config/contact";
import "./HomeContactCards.css";

export default function WhatsAppContactCard() {
  const { t } = useTranslation();

  return (
    <aside className="home-contact-card home-whatsapp-card" aria-labelledby="home-whatsapp-title">
      <div className="home-whatsapp-intro">
        <div className="home-contact-channel">
          <span className="home-contact-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 9 9 0 0 1-4-.9L3 21l1.9-5.5a9 9 0 0 1-.9-4A8.5 8.5 0 0 1 12.5 3h.5a8.5 8.5 0 0 1 8 8v.5Z" />
              <path d="m8.5 7.5 1.5 2-1 1a8 8 0 0 0 4.5 4.5l1-1 2 1.5c-1 2-3 1-5-.2s-4.3-3.5-4.3-5.5c0-.9.5-1.8 1.3-2.3Z" />
            </svg>
          </span>
          <div>
            <span className="home-contact-eyebrow">{t("HABLEMOS SIN RODEOS")}</span>
            <span className="home-contact-channel-name">WhatsApp</span>
          </div>
        </div>

        <h3 id="home-whatsapp-title" className="home-contact-title">
          {t("Las buenas ideas")}
          <span>{t("empiezan con un hola.")}</span>
        </h3>
        <p className="home-contact-description">
          {t("Escríbenos por WhatsApp y platicamos sobre tu idea de forma rápida y directa.")}
        </p>
      </div>

      <ol className="home-whatsapp-steps">
        <li>
          <span className="home-whatsapp-step-number" aria-hidden="true">01</span>
          <div>
            <h4>{t("Cuéntanos tu idea")}</h4>
            <p>{t("Tu negocio, tus objetivos y lo que imaginas.")}</p>
          </div>
        </li>
        <li>
          <span className="home-whatsapp-step-number" aria-hidden="true">02</span>
          <div>
            <h4>{t("Demos el siguiente paso")}</h4>
            <p>{t("Resolvemos tus dudas y coordinamos una reunión.")}</p>
          </div>
        </li>
      </ol>

      <div className="home-whatsapp-footer">
        <a
          href={getWhatsAppUrl(t("Hola, me gustaría saber más sobre NIVOSTECH y sus páginas web."))}
          target="_blank"
          rel="noreferrer"
          className="home-whatsapp-cta"
        >
          {t("Escribir por WhatsApp")}
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17 17 7M7 7h10v10" />
          </svg>
        </a>
        <div className="home-whatsapp-caption">
          <span>+52 33 1039 2675</span>
          <span>{t("Presencial o en línea")}</span>
        </div>
      </div>
    </aside>
  );
}
