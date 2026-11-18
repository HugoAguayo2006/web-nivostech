import { useTranslation } from "react-i18next";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Plan1 from "./planes/Plan1";
import Plan2 from "./planes/Plan2";
import Plan3 from "./planes/Plan3";
import PlanMenu from "./planes/PlanMenu";

function Servicios() {
  const { t } = useTranslation();
  const { planId } = useParams();

  // Si hay un planId específico, mostrar ese plan
  if (planId === "plan-1") {
    return <Plan1 />;
  }

  if (planId === "plan-2") {
    return <Plan2 />;
  }

  if (planId === "plan-3") {
    return <Plan3 />;
  }

  if (planId === "plan-menu") {
    return <PlanMenu />;
  }

  // Página general de servicios
  return (
    <>
      {/* ================= SEO (SERVICIOS) ================= */}
      <Helmet>
        <title>{t("Servicios | Planes de Páginas Web | NIVOSTECH")}</title>
        <meta
          name="description"
          content={t("Conoce los servicios de NIVOSTECH. Ofrecemos planes de páginas web para negocios: desde una landing extendida hasta un sitio profesional con backend y panel administrativo.")}
        />
        <link rel="canonical" href="https://www.nivostech.com/servicios" />
      </Helmet>

      <div className="page">
        <section className="page-section">
          <div className="page-header">
            <h1 className="page-title">{t("Nuestros Servicios")}</h1>
            <p className="page-subtitle">{t("Ofrecemos diferentes planes para adaptarnos a las necesidades de tu negocio.")}</p>
          </div>

          <div className="services-grid">
            {/* ===== PLAN 1 ===== */}
            <div className="service-card">
              <img 
                src="/images/nivos_planes.webp" 
                alt={t("Planes de NIVOSTECH")}
                className="service-card-image"
              />
              <h2>{t("Plan 1: Landing Extendida")}</h2>
              <p className="service-description">
                <strong>{t("Ideal para negocios que solo necesitan presencia profesional.")}</strong>
              </p>

              <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
                <p>
                  <strong>{t("Incluye:")}</strong>
                </p>
                <ul>
                  <li>{t("Diseño completo de 5 páginas (Home, Nosotros, Contacto, Blog estático, Galería)")}</li>
                  <li>{t("Desarrollo 100% frontend")}</li>
                  <li>{t("Sitio rápido, responsivo y optimizado")}</li>
                  <li>{t("Integración de WhatsApp, Google Maps, correo y redes sociales")}</li>
                  <li>{t("Soporte técnico inicial (7–14 días)")}</li>
                </ul>
              </div>

              <Link
                to="/servicios/plan-1"
                className="service-link"
              >{t("Ver más")}</Link>
            </div>

            {/* ===== PLAN 2 ===== */}
            <div className="service-card">
              <img 
                src="/images/nivos_planes2.webp" 
                alt={t("Planes de NIVOSTECH")}
                className="service-card-image"
              />
              <h2>{t("Plan 2: Sitio Profesional")}</h2>
              <p className="service-description">
                <strong>{t("Ideal para negocios que necesitan un sistema más completo.")}</strong>
              </p>

              <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
                <p>
                  <strong>{t("Incluye:")}</strong>
                </p>
                <ul>
                  <li>{t("Todo lo del plan frontend + funcionalidades avanzadas")}</li>
                  <li>{t("Backend y base de datos")}</li>
                  <li>{t("Panel administrativo o dashboard")}</li>
                  <li>{t("Blog totalmente administrable")}</li>
                  <li>{t("Gestión de productos, servicios, usuarios o contenido")}</li>
                  <li>{t("Endpoints protegidos con autenticación")}</li>
                </ul>
              </div>

              <Link
                to="/servicios/plan-2"
                className="service-link"
              >{t("Ver más")}</Link>
            </div>

            {/* ===== PLAN 3 ===== */}
            <div className="service-card">
              <img 
                src="/images/nivos_planes4.webp" 
                alt={t("Planes de NIVOSTECH")}
                className="service-card-image"
              />
              <h2>{t("Plan 3: Sitio + Redes Sociales")}</h2>
              <p className="service-description">
                <strong>{t("Ideal para negocios que quieren presencia digital completa.")}</strong>
              </p>

              <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
                <p>
                  <strong>{t("Incluye:")}</strong>
                </p>
                <ul>
                  <li>{t("Página web completa (Plan Landing Extendida) incluida gratis")}</li>
                  <li>{t("Gestión profesional de redes sociales")}</li>
                  <li>{t("Creación y publicación de contenido")}</li>
                  <li>{t("Análisis de métricas y reportes mensuales")}</li>
                  <li>{t("Estrategia de crecimiento y engagement")}</li>
                  <li>{t("Pago mensual: $2,500 por 12 meses")}</li>
                </ul>
              </div>

              <Link
                to="/servicios/plan-3"
                className="service-link"
              >{t("Ver más")}</Link>
            </div>

            {/* ===== PLAN MENÚ ===== */}
            <div className="service-card" style={{ marginTop: "2rem", gridColumn: "1 / -1" }}>
              <img 
                src="/images/interior_restaurante.webp" 
                alt={t("Plan Menú de NIVOSTECH")}
                className="service-card-image"
              />
              <h2>{t("Plan Menú Digital")}</h2>
              <p className="service-description">
                <strong>{t("Ideal para restaurantes y negocios gastronómicos que necesitan un menú digital interactivo.")}</strong>
              </p>

              <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
                <strong>{t("Incluye:")}</strong>

<ul>
  <li>{t("Menú digital interactivo con categorías y filtros")}</li>
  <li>{t("Carga inicial del menú (platos, precios, descripciones y fotos)")}</li>
  <li>{t("Desarrollo 100% frontend (rápido, ligero y optimizado)")}</li>
  <li>{t("Sitio responsivo y optimizado para velocidad")}</li>
  <li>{t("Integración de WhatsApp, Google Maps, redes sociales y correo")}</li>
  <li>{t("Publicación en dominio del cliente")}</li>
  <li>{t("Soporte técnico inicial (7–14 días)")}</li>
  <li>{t("Cambios mensuales opcionales:")} <strong>{t("$300/mes")}</strong> {t("(actualizar precios, platillos, fotos o secciones del menú)")}</li>
</ul>



                  
              </div>

              

              <Link
                to="/servicios/plan-menu"
                className="service-link"
              >{t("Ver más")}</Link>
            </div>
            
          </div>
          <p style={{ marginTop: "0.8rem", fontSize: "0.95rem", opacity: 0.9 }}>
            <strong>{t("Dominio:")}</strong> {t("el costo del dominio no está incluido. Si el cliente ya cuenta con un dominio, se utilizará sin problema. En caso contrario, podemos apoyar con la compra y configuración (costo adicional).")}</p>

        </section>


        <footer className="footer">
          <p>
            © {new Date().getFullYear()} {t("NIVOSTECH · Diseño y desarrollo de páginas web.")}</p>
        </footer>
      </div>
    </>
  );
}

export default Servicios;
