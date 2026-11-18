import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import { getWhatsAppUrl } from "../config/contact";
import "./Contacto.css";

function Contacto() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("Contacto | NIVOSTECH")}</title>
        <meta name="description" content={t("Hablemos de tu página web o proyecto digital. Cuéntanos tu idea por WhatsApp o mediante nuestro formulario. NIVOSTECH, Guadalajara, Jalisco.")} />
        <link rel="canonical" href="https://www.nivostech.com/contacto" />
      </Helmet>

      <main className="contact-page">
        <div className="contact-shell">
          <header className="contact-intro">
            <span className="contact-eyebrow"><span aria-hidden="true" />{t("CONTACTO · NIVOSTECH")}</span>
            <h1>{t("Tu próximo proyecto")}<br /><span>{t("empieza con una idea.")}</span></h1>
            <p>{t("Cuéntanos qué tienes en mente. Te ayudamos a encontrar la mejor forma de convertirlo en una página web o plataforma para tu negocio.")}</p>
          </header>

          <div className="contact-layout">
            <aside className="contact-sidebar" aria-label={t("Otras formas de contacto e información")}>
              <section className="contact-whatsapp-panel">
                <div className="contact-channel-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 9 9 0 0 1-4-.9L3 21l1.9-5.5a9 9 0 0 1-.9-4A8.5 8.5 0 0 1 12.5 3h.5a8.5 8.5 0 0 1 8 8v.5Z" /><path d="M8 10h8M8 14h5" /></svg>
                </div>
                <span className="contact-overline">{t("¿PREFIERES PLATICAR?")}</span>
                <h2>{t("Vamos directo a tu idea.")}</h2>
                <p>{t("Resolvemos tus dudas y coordinamos una reunión por WhatsApp, presencial o en línea.")}</p>
                <a href={getWhatsAppUrl(t("Hola, me gustaría saber más sobre NIVOSTECH y sus páginas web."))} target="_blank" rel="noreferrer" className="contact-whatsapp-link">{t("Escribir por WhatsApp")} <span aria-hidden="true">↗</span></a>
                <span className="contact-phone">+52 33 1039 2675</span>
              </section>

              <section className="contact-details-panel" aria-label={t("Ubicación y horario")}>
                <div className="contact-detail">
                  <span className="contact-detail-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg></span>
                  <div><h3>{t("Desde Guadalajara")}</h3><p>{t("Jalisco, México.")}<br />{t("Trabajamos contigo también en línea.")}</p></div>
                </div>
                <div className="contact-detail">
                  <span className="contact-detail-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg></span>
                  <div><h3>{t("Horario de atención")}</h3><p>{t("Siempre estamos disponibles.")}</p></div>
                </div>
              </section>
              <Link className="contact-plans-link" to="/servicios">{t("Explora nuestros planes")} <span aria-hidden="true">→</span></Link>
            </aside>

            <section className="contact-form-panel" aria-labelledby="contact-form-title">
              <div className="contact-form-heading">
                <span className="contact-overline">{t("HABLEMOS DE TU PROYECTO")}</span>
                <span className="contact-form-marker" aria-hidden="true">↗</span>
                <h2 id="contact-form-title">{t("Cuéntanos tu idea")}</h2>
                <p>{t("No necesitas tener todo definido. Empecemos por lo que quieres lograr.")}</p>
              </div>
              <ContactForm />
            </section>
          </div>
        </div>
        <footer className="footer"><p>© {new Date().getFullYear()} {t("NIVOSTECH · Diseño y desarrollo de páginas web.")}</p></footer>
      </main>
    </>
  );
}

export default Contacto;
