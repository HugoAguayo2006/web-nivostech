import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./AboutPreview.css";

export default function AboutPreview() {
  const { t } = useTranslation();
  return (
    <section id="sobre-nosotros" className="about-preview-section">
      <div className="about-preview-container">
        <div className="about-preview-content">
          <div className="about-preview-text">
            <h2 className="about-preview-title">{t("Sobre NIVOSTECH")}</h2>
            <p className="about-preview-description">{t("Somos un equipo de desarrolladores y diseñadores enfocados en crear páginas web funcionales, modernas y fáciles de usar.")}</p>
            <p className="about-preview-description">{t("Trabajamos de la mano con emprendedores, comercios y pequeñas empresas que quieren tener presencia en internet sin complicaciones técnicas ni costos innecesarios.")}</p>
            <Link to="/nosotros" className="about-preview-link">{t("Conocer más sobre nosotros →")}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

