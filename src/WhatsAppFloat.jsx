import { useTranslation } from "react-i18next";
import { getWhatsAppUrl } from "./config/contact";

export default function WhatsAppFloat() {
  const { t } = useTranslation();
  return (
    <a
      className="whatsapp-float"
      href={getWhatsAppUrl(t("Hola, me gustaría saber más sobre NIVOSTECH y sus páginas web."))}
      target="_blank"
      rel="noreferrer"
      aria-label={t("Contactar por WhatsApp")}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
      />
      WhatsApp
    </a>
  );
}
