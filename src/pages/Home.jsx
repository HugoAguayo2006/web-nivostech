import ContactForm from "../components/ContactForm";
import { WHATSAPP_URL } from "../config/contact";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import StatsSection from "../components/landing/StatsSection";
import ServicesSection from "../components/landing/ServicesSection";
import FeaturedProjects from "../components/landing/FeaturedProjects";
import WhyChooseUs from "../components/landing/WhyChooseUs";
import WorkProcess from "../components/landing/WorkProcess";
import AboutPreview from "../components/landing/AboutPreview";
{/*import TechStack from "../components/landing/TechStack";
 ================= no se usa las tecnologias ================= */}
import Testimonials from "../components/landing/Testimonials";
import MENU from "../components/landing/RestaurantSection";

function Home() {
  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>NIVOSTECH</title>
        <meta
          name="description"
          content="Creamos páginas web modernas, rápidas y optimizadas para SEO en Guadalajara. Impulsa la presencia digital de tu negocio con NIVOSTECH."
        />
        <link rel="canonical" href="https://www.nivostech.com/" />
      </Helmet>

      <div className="page">
        {/* HERO */}
        <section id="inicio" className="hero">
          <div className="hero-bg" />

          <div className="hero-content">
            {/* TEXTO IZQUIERDA */}
            <div className="hero-inner">
              <p className="hero-tag">
                Estudio de páginas web en Guadalajara | NIVOSTECH
              </p>

              <h1 className="hero-title">
                Generamos presencia digital
                <br />
                para tu negocio.
              </h1>

              <div className="hero-actions">
                <Link to="/proyectos" className="hero-btn">
                  Nuestros Proyectos
                </Link>
                <Link to="/contacto" className="hero-btn">
                  Agendar reunión
                </Link>
              </div>

              <p className="hero-note">
                * Reunión con NIVOSTECH presencial o en línea.
              </p>
            </div>

            {/* VIDEO DERECHA */}
            <div className="hero-media">
              <video
                className="hero-video"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src="/video/1215.webm" type="video/webm" />
                <source src="/video/1215.mov" type="video/quicktime" />
                <source src="/video/1215.mp4" type="video/mp4" />
                Tu navegador no soporta video HTML5.
              </video>
            </div>
          </div>
        </section>

        {/* DIVISOR */}
        <div
          style={{
            width: "100%",
            height: "0px",
            background: "rgba(255,255,255,0.8)",
          }}
        />

        {/* ESTADÍSTICAS */}
        <StatsSection />

        {/* SERVICIOS */}
        <ServicesSection />

        <MENU/>

        {/* PROYECTOS DESTACADOS */}
        <FeaturedProjects />

        {/* POR QUÉ ELEGIRNOS */}
        <WhyChooseUs />

        {/* PROCESO DE TRABAJO */}
        <WorkProcess />

        {/* SOBRE NOSOTROS PREVIEW */}
        <AboutPreview />

        {/* TECNOLOGÍAS 
        <TechStack />*/}

        {/* TESTIMONIOS */}
        <Testimonials />

        {/* CONTACTO */}
        <section id="contacto" className="contact">
          <p className="hero-title">Hablemos de tu proyecto</p>

          <p className="section-subtitle">
            Cuéntanos qué tienes en mente y te ayudamos a convertirlo en una
            página web funcional y moderna.
          </p>

          <div className="contact-grid">
            {/* Tarjeta WhatsApp */}
            <div className="contact-card">
              <h3>WhatsApp</h3>
              <p>
                Escríbenos por WhatsApp y platicamos sobre tu idea de forma rápida
                y directa.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="whatsapp-btn-main"
              >
                Abrir WhatsApp
              </a>
            </div>

            {/* Tarjeta Formulario */}
            <div className="contact-card">
              <h3>Formulario de contacto</h3>
              <ContactForm />
            </div>
          </div>
        </section>


        {/* FOOTER */}
        <footer className="footer">
          <p>
            © {new Date().getFullYear()} NIVOSTECH · Diseño y desarrollo de páginas
            web.
          </p>
        </footer>
      </div>
    </>
  );
}

export default Home;
