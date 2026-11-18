import { useTranslation } from "react-i18next";
import "./TechStack.css";

export default function TechStack() {
  const { t } = useTranslation();
  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Vite", category: t("Build Tool") },
    { name: "Node.js", category: "Backend" },
    { name: "Express", category: "Backend" },
    { name: "MongoDB", category: t("Database") },
    { name: "WordPress", category: "CMS" },
    { name: "SEO", category: t("Optimization") },
    { name: t("Responsive Design"), category: t("Design") },
  ];

  return (
    <section id="tecnologias" className="tech-stack-section">
      <div className="tech-stack-container">
        <div className="tech-stack-header">
          <h2 className="tech-stack-title">{t("Tecnologías que Utilizamos")}</h2>
          <p className="tech-stack-subtitle">{t("Trabajamos con las mejores herramientas y tecnologías modernas para crear sitios web de alto rendimiento.")}</p>
        </div>

        <div className="tech-stack-grid">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-stack-item">
              <div className="tech-stack-name">{tech.name}</div>
              <div className="tech-stack-category">{tech.category}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

