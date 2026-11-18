import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./RestaurantSection.css";

export default function RestaurantSection() {
  const { t } = useTranslation();
  return (
    <section id="restaurantes" className="restaurant-section">
      <div className="restaurant-container">
        <div className="restaurant-card">
          <h2 className="restaurant-title">{t("¿Tienes un restaurante?")}</h2>

          <p className="restaurant-description">{t("Digitaliza tu menú y facilita los pedidos de tus clientes con una solución práctica y moderna.")}</p>

          <ul className="restaurant-features">
            <li>{t("Menú digital accesible desde celular")}</li>
            <li>{t("Código QR para mesas")}</li>
            <li>{t("Actualiza precios y platillos fácilmente")}</li>
            <li>{t("Imagen profesional para tu restaurante")}</li>
          </ul>

          <Link to="/servicios/plan-menu" className="restaurant-btn">{t("Ver menú digital →")}</Link>
        </div>
      </div>
    </section>
  );
}
