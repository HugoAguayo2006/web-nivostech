import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <main className="page notfound">
      <Helmet>
        <title>{t("404 | Página no encontrada – NIVOSTECH")}</title>
        <meta
          name="description"
          content={t("La página que buscas no existe o fue movida. Regresa a NIVOSTECH.")}
        />
      </Helmet>

      <h1>404</h1>
      <p>{t("La página que buscas no existe.")}</p>

      <Link to="/" className="btn-primary">{t("Volver al inicio")}</Link>
    </main>
  );
}
