import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import { WHATSAPP_URL } from "../config/contact";
import "./Contacto.css";

function Contacto() {
  return (
    <>
      <Helmet>
        <title>Contacto | NIVOSTECH</title>
        <meta name="description" content="Hablemos de tu página web o proyecto digital. Cuéntanos tu idea por WhatsApp o mediante nuestro formulario. NIVOSTECH, Guadalajara, Jalisco." />
        <link rel="canonical" href="https://www.nivostech.com/contacto" />
      </Helmet>

      <main className="contact-page">
        <div className="contact-shell">
          <header className="contact-intro">
            <span className="contact-eyebrow"><span aria-hidden="true" />CONTACTO · NIVOSTECH</span>
            <h1>Tu próximo proyecto<br /><span>empieza con una idea.</span></h1>
            <p>Cuéntanos qué tienes en mente. Te ayudamos a encontrar la mejor forma de convertirlo en una página web o plataforma para tu negocio.</p>
          </header>

          <div className="contact-layout">
            <aside className="contact-sidebar" aria-label="Otras formas de contacto e información">
              <section className="contact-whatsapp-panel">
                <div className="contact-channel-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 9 9 0 0 1-4-.9L3 21l1.9-5.5a9 9 0 0 1-.9-4A8.5 8.5 0 0 1 12.5 3h.5a8.5 8.5 0 0 1 8 8v.5Z" /><path d="M8 10h8M8 14h5" /></svg>
                </div>
                <span className="contact-overline">¿PREFIERES PLATICAR?</span>
                <h2>Vamos directo a tu idea.</h2>
                <p>Resolvemos tus dudas y coordinamos una reunión por WhatsApp, presencial o en línea.</p>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="contact-whatsapp-link">Escribir por WhatsApp <span aria-hidden="true">↗</span></a>
                <span className="contact-phone">+52 33 1039 2675</span>
              </section>

              <section className="contact-details-panel" aria-label="Ubicación y horario">
                <div className="contact-detail">
                  <span className="contact-detail-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg></span>
                  <div><h3>Desde Guadalajara</h3><p>Jalisco, México.<br />Trabajamos contigo también en línea.</p></div>
                </div>
                <div className="contact-detail">
                  <span className="contact-detail-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg></span>
                  <div><h3>Horario de atención</h3><p>Siempre estamos disponibles.</p></div>
                </div>
              </section>
              <Link className="contact-plans-link" to="/servicios">Explora nuestros planes <span aria-hidden="true">→</span></Link>
            </aside>

            <section className="contact-form-panel" aria-labelledby="contact-form-title">
              <div className="contact-form-heading">
                <span className="contact-overline">HABLEMOS DE TU PROYECTO</span>
                <span className="contact-form-marker" aria-hidden="true">↗</span>
                <h2 id="contact-form-title">Cuéntanos tu idea</h2>
                <p>No necesitas tener todo definido. Empecemos por lo que quieres lograr.</p>
              </div>
              <ContactForm />
            </section>
          </div>
        </div>
        <footer className="footer"><p>© {new Date().getFullYear()} NIVOSTECH · Diseño y desarrollo de páginas web.</p></footer>
      </main>
    </>
  );
}

export default Contacto;
