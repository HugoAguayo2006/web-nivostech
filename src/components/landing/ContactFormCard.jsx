import { useTranslation } from "react-i18next";
import ContactForm from "../ContactForm";
import "./HomeContactCards.css";

export default function ContactFormCard() {
  const { t } = useTranslation();

  return (
    <div className="home-contact-card home-form-card" role="region" aria-labelledby="home-form-title">
      <header>
        <div className="home-contact-channel">
          <span className="home-contact-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="5" width="18" height="14" rx="3" />
              <path d="m4 7 8 6 8-6" />
            </svg>
          </span>
          <div>
            <span className="home-contact-eyebrow">{t("POR CORREO")}</span>
            <span className="home-contact-channel-name">{t("Formulario de contacto")}</span>
          </div>
        </div>

        <h3 id="home-form-title" className="home-contact-title">
          {t("Cuéntanos tu idea")}
          <span>{t("hagámosla realidad.")}</span>
        </h3>
        <p className="home-contact-description">
          {t("No necesitas tener todo definido. Empecemos por lo que quieres lograr.")}
        </p>
      </header>

      <ContactForm />
    </div>
  );
}
