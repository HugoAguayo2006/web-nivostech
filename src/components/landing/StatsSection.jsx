import { useTranslation } from "react-i18next";
import "./StatsSection.css";

export default function StatsSection() {
  const { t } = useTranslation();
  const stats = [
    {
      number: "+6",
      label: t("Proyectos Entregados"),
    },
    {
      number: "+80,000",
      label: t("Personas Alcanzadas"),
    },
    {
      number: "+2",
      label: t("Años de Experiencia"),
    },
    {
      number: "100%",
      label: t("Sitios Responsivos"),
    },
  ];

  return (
    <section id="estadisticas" className="stats-section">
      <div className="stats-container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

