import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./ServicesSection.css";

export default function ServicesSection() {
  const { t } = useTranslation();
  const services = [
    {
      id: "plan-1",
      title: t("Plan 1: Sitio web simple"),
      description: t("Ideal para negocios que solo necesitan presencia profesional."),
      features: [
        t("Presencia profesional en internet"),

t("Página rápida y fácil de usar"),

t("Diseño adaptable a cualquier dispositivo"),

t("Opción económica para empezar"),

t("Base lista para crecer en el futuro")
      ],
      link: "/servicios/plan-1",
    },
    {
      id: "plan-2",
      title: t("Plan 2: Sitio web complejo"),
      description: t("Ideal para negocios que necesitan un sistema más completo."),
      features: [
        t("Base de datos para guardar información"),
t("Panel privado para administrar el sitio"),
t("Blog fácil de actualizar"),
t("Funciones avanzadas según las necesidades del negocio"),

      ],
      link: "/servicios/plan-2",
    },
    {
      id: "plan-3",
      title: t("Plan 3: Sitio + Redes Sociales"),
      description: t("Ideal para negocios que quieren presencia digital completa."),
      features: [
t("Página web incluida"),
t("Administración de redes sociales"),
t("Creación de contenido profesional"),
t("Reportes mensuales de resultados"),

      ],
      link: "/servicios/plan-3",
    },
    
  ];

  return (
    <section id="servicios" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">{t("Nuestros Servicios")}</h2>
          <p className="services-subtitle">{t("Ofrecemos diferentes planes para adaptarnos a las necesidades de tu negocio.")}</p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card-landing">
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-description">{service.description}</p>
              
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              <Link to={service.link} className="service-card-link">{t("Ver más detalles →")}</Link>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <Link to="/servicios" className="services-btn">{t("Ver todos los planes")}</Link>
        </div>
      </div>
    </section>
  );
}

