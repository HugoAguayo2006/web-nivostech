import { getWhatsAppUrl } from "../../config/contact";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "./PlanPage.css";
import { PROYECTOS } from "../../data.js";
import { useEffect, useState } from "react";

const EJEMPLOS_IDS = ["menu-1", "menu-2", "menu-3"]; // <-- pon aquí los IDs de tus menús

function PlanMenu() {
  const { t } = useTranslation();
  const whatsappLink = getWhatsAppUrl(t("Hola NIVOSTECH, me interesa el Plan Menú ($3,500 de inicio + $300/mes en cambios). ¿Cómo empezamos?"));
  // ====== EJEMPLOS (filtra por IDs) ======
  const ejemplos = (PROYECTOS || []).filter((p) => EJEMPLOS_IDS.includes(p.id));

  // ====== MODAL (igual que Proyectos) ======
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const openProject = (project) => {
    setSelected(project);
    setOpen(true);
    document.body.classList.add("modal-open");
  };

  const closeProject = () => {
    setOpen(false);
    setSelected(null);
    document.body.classList.remove("modal-open");
  };

  // ESC para cerrar modal
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeProject();
    };

    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* ================= SEO (PLAN MENÚ) ================= */}
      <Helmet>
        <title>{t("Plan Menú | Servicios | NIVOSTECH")}</title>
        <meta
          name="description"
          content={t("Plan Menú de NIVOSTECH: menú digital interactivo para restaurantes. Inversión inicial de $3,500 + cambios mensuales opcionales por $300/mes.")}
        />
        <link
          rel="canonical"
          href="https://www.nivostech.com/servicios/plan-menu"
        />
      </Helmet>

      <div className="page">
        <section className="plan">
          {/* ====== HERO ====== */}
          <header className="plan-hero">
            <div className="plan-hero__bg" aria-hidden="true" />
            <div className="plan-hero__inner">
              <div className="plan-hero__left">
                <div className="plan-badges">
                  <span className="badge badge--glow">{t("Especializado")}</span>
                  <span className="badge">{t("Restaurantes")}</span>
                  <span className="badge">{t("Menú Digital")}</span>
                </div>

                <h1 className="plan-title">{t("Menú Digital")}</h1>
                <p className="plan-subtitle">{t("Ideal para restaurantes y negocios gastronómicos que necesitan un menú digital interactivo y presencia profesional online, con contacto directo por WhatsApp para pedidos.")}</p>

                <div className="plan-kpis">
                  <div className="kpi">
                    <span className="kpi-label">{t("Entrega")}</span>
                    <span className="kpi-value">{t("1–2 semanas")}</span>
                  </div>
                  <div className="kpi">
                    <span className="kpi-label">{t("Incluye")}</span>
                    <span className="kpi-value">{t("Menú Digital Interactivo")}</span>
                  </div>
                  <div className="kpi">
                    <span className="kpi-label">{t("Actualizaciones")}</span>
                    <span className="kpi-value">{t("$300/mes (opcional)")}</span>
                  </div>
                </div>

                <div className="plan-cta">
                  <a className="btn btn--primary" href={whatsappLink} target="_blank" rel="noreferrer">{t("Cotizar por WhatsApp")}</a>
                  <Link className="btn btn--ghost" to="/servicios">{t("Volver a Servicios")}</Link>
                </div>

                <p className="plan-note">{t("* Inversión inicial:")} <strong>$3,500</strong>{t(". Si quieres cambios o actualizaciones mensuales del menú:")} <strong>{t("$300/mes")}</strong>{t(". Factura disponible (requiere CSF).")}</p>
              </div>

              {/* ====== PRICE CARD ====== */}
              <aside className="price-card">
                <div className="price-card__top">
                  <h2 className="price-title">{t("Inversión")}</h2>

                  <div className="price-row">
                    <span className="price-label">{t("Inicio")}</span>
                    <span className="price-main">$3,000</span>
                  </div>

                  <div className="price-row">
                    <span className="price-label">{t("Cambios")}</span>
                    <span className="price-label">{t("$300/mes")}</span>
                  </div>

                  <div className="price-chip">{t("Menú + WhatsApp")}</div>
                </div>

                <div className="price-split">
                  <div className="split-card">
                    <div className="split-title">{t("Pago 1")}</div>
                    <div className="split-desc">{t("Anticipo 50%")}</div>
                    <div className="split-amount">$1,500</div>
                  </div>
                  <div className="split-card">
                    <div className="split-title">{t("Pago 2")}</div>
                    <div className="split-desc">{t("Liquidación 50%")}</div>
                    <div className="split-amount">$1,500</div>
                  </div>
                </div>

                <div className="price-actions">
                  <a className="btn btn--primary btn--full" href={whatsappLink} target="_blank" rel="noreferrer">{t("Quiero este plan")}</a>
                  <a className="btn btn--soft btn--full" href="#incluye">{t("Ver qué incluye")}</a>
                </div>

                <div className="price-foot">
                  <div className="mini">
                    <span className="mini-dot" />{t("Transferencia bancaria")}</div>
                  <div className="mini">
                    <span className="mini-dot" />{t("Dominio del cliente")}</div>
                </div>
              </aside>
            </div>
          </header>

          {/* ====== CONTENT ====== */}
          <div className="plan-wrap">
            {/* ====== EJEMPLOS (abre modal como Proyectos) ====== */}
            <section className="card ejemplos" id="ejemplos">
              <div className="ejemplos-head">
                <h2 className="card-title" style={{ margin: 0 }}>{t("Ejemplos del plan Menú")}</h2>
              </div>

              <div className="ejemplos-grid">
                {ejemplos.map((p) => (
                  <article key={p.id} className="ejemplo-card">
                    <button
                      className="ejemplo-card-btn"
                      type="button"
                      onClick={() => openProject(p)}
                    >
                      <div className="ejemplo-cover">
                        <img src={p.cover} alt={t(p.title)} loading="lazy" />
                      </div>

                      <div className="ejemplo-body">
                        <div className="ejemplo-top">
                          <span className="ejemplo-tag">{t(p.tag || p.type)}</span>
                          <span className="ejemplo-year">{p.year}</span>
                        </div>

                        <div className="ejemplo-title">{t(p.title)}</div>
                        {p.short ? <div className="ejemplo-desc">{t(p.short)}</div> : null}
                      </div>
                    </button>
                  </article>
                ))}
              </div>

              {ejemplos.length === 0 ? (
                <p style={{ marginTop: "0.75rem", color: "rgba(226,232,240,.75)" }}>{t("Aún no has seleccionado ejemplos para este plan.")}</p>
              ) : null}
            </section>

            {/* ====== INCLUYE / NO INCLUYE ====== */}
            <div className="grid-2" id="incluye">
              <section className="card">
                <h2 className="card-title" style={{ justifyContent: "center" }}>
                  <span className="icon icon--ok" aria-hidden="true">✓</span>{t("¿Qué incluye?")}</h2>

                <div className="list-block">
                  <div className="list-title">{t("Diseño completo (4–5 secciones)")}</div>
                  <ul className="list">
                    <li>Home</li>
                    <li>{t("Menú Digital Interactivo")}</li>
                    <li>{t("Contacto")}</li>
                    <li>{t("Galería (opcional)")}</li>
                    <li>{t("Nosotros (opcional)")}</li>
                  </ul>
                </div>

                <ul className="checks">
                  <li>{t("Menú digital interactivo con categorías y filtros")}</li>
                  <li>{t("Sitio rápido, responsivo y optimizado")}</li>
                  <li>{t("Integración de WhatsApp para pedidos")}</li>
                  <li>{t("Google Maps para ubicación")}</li>
                  <li>{t("Integración de redes sociales")}</li>
                  <li>{t("Carga inicial de contenido (platos, precios, descripciones)")}</li>
                  <li>{t("Publicación en dominio propio del cliente")}</li>
                  <li>{t("Soporte técnico inicial (7–14 días)")}</li>
                </ul>

                <p style={{ marginTop: "1rem", opacity: 0.9, lineHeight: 1.6 }}>
                  <strong>{t("Cambios mensuales:")}</strong> {t("si quieres que nosotros actualicemos precios, platos, fotos o secciones del menú de forma recurrente, se maneja como")} <strong>{t("$300/mes")}</strong>.
                </p>
              </section>

              <section className="card" style={{ display: "flex", flexDirection: "column", minHeight: "100%" }}>
                <h2 className="card-title" style={{ justifyContent: "center" }}>{t("¿Necesitas más funcionalidades?")}</h2>

                <p style={{ marginBottom: "1.5rem", fontSize: "1.1rem", lineHeight: "1.6" }}>{t("Si necesitas panel administrativo para gestionar el menú, sistema de pedidos online, reservas de mesas o base de datos, entonces contáctanos para una cotización personalizada.")}</p>

                <div style={{ marginBottom: "1rem", textAlign: "center" }}>
                  <img
                    src="/images/comida_restaurante.webp"
                    alt={t("Plan 2: Sitio Profesional")}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      borderRadius: "12px",
                      display: "block",
                      margin: "0 auto",
                    }}
                  />
                </div>

                <div style={{ textAlign: "center", marginTop: "auto", paddingTop: "1.5rem" }}>
                  <a className="btn btn--primary" href={whatsappLink} target="_blank" rel="noreferrer">{t("Contactar por WhatsApp")}</a>
                </div>
              </section>
            </div>

            {/* ====== PROCESO ====== */}
            <section className="card" style={{ marginTop: "2rem" }}>
              <h2 className="card-title">{t("Plan de acción")}</h2>

              <div className="timeline">
                <div className="step">
                  <div className="step-dot" />
                  <div className="step-body">
                    <div className="step-title">{t("1) Inicio")}</div>
                    <div className="step-text">{t("Anticipo (50%) + recolección de contenido (logo, textos, fotos de platos, precios, descripciones y links).")}</div>
                  </div>
                </div>

                <div className="step">
                  <div className="step-dot" />
                  <div className="step-body">
                    <div className="step-title">{t("2) Diseño + estructura")}</div>
                    <div className="step-text">{t("Definimos secciones, estilo visual, navegación y estructura del menú digital para que sea claro y atractivo.")}</div>
                  </div>
                </div>

                <div className="step">
                  <div className="step-dot" />
                  <div className="step-body">
                    <div className="step-title">{t("3) Desarrollo")}</div>
                    <div className="step-text">{t("Construimos el frontend, menú interactivo, versión móvil y optimización (velocidad + SEO base).")}</div>
                  </div>
                </div>

                <div className="step">
                  <div className="step-dot" />
                  <div className="step-body">
                    <div className="step-title">{t("4) Publicación")}</div>
                    <div className="step-text">{t("Montaje en tu dominio y pruebas finales. Liquidación (50%).")}</div>
                  </div>
                </div>

                <div className="step">
                  <div className="step-dot" />
                  <div className="step-body">
                    <div className="step-title">{t("5) Cambios (opcional)")}</div>
                    <div className="step-text">{t("Si quieres actualizaciones mensuales del menú (precios, platos, fotos), se maneja como")} <strong>{t("$300/mes")}</strong>.
                    </div>
                  </div>
                </div>
              </div>

              <div className="reqs">
                <div className="reqs-title">{t("Para comenzar se necesita:")}</div>
                <ul className="reqs-list">
                  <li>{t("Pago en transferencia")}</li>
                  <li>INE</li>
                  <li>{t("Constancia de situación fiscal (si requieres factura)")}</li>
                  <li>{t("Información del menú (platos, precios, descripciones, fotos)")}</li>
                </ul>
              </div>
            </section>

            {/* ====== CTA FINAL ====== */}
            <section className="cta-final">
              <div className="cta-final__card">
                <h3>{t("¿Listo para digitalizar tu menú?")}</h3>
                <p>{t("Te damos un sitio premium con menú digital interactivo para que tus clientes conozcan tus platos y te contacten fácilmente.")}</p>
                <div className="cta-final__actions" style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
                  <a className="btn btn--primary" href={whatsappLink} target="_blank" rel="noreferrer">{t("Agendar por WhatsApp")}</a>
                  <Link className="btn btn--ghost" to="/servicios">{t("Ver otros planes")}</Link>
                </div>
              </div>
            </section>
          </div>

          {/* ====== MODAL ====== */}
          {open && selected && (
            <ProjectModal project={selected} onClose={closeProject} />
          )}
        </section>


        <footer className="footer">
          <p>© {new Date().getFullYear()} {t("NIVOSTECH · Diseño y desarrollo de páginas web.")}</p>
        </footer>
      </div>
    </>
  );
}

export default PlanMenu;

/* ====== MODAL COMPONENT (igual que Proyectos.jsx) ====== */
function ProjectModal({ project, onClose }) {
  const { t } = useTranslation();
  const [zoomImage, setZoomImage] = useState(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      if (zoomImage) setZoomImage(null);
      else onClose();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoomImage, onClose]);

  return (
    <>
      <div className="modal-backdrop" onMouseDown={onClose}>
        <div className="modal" onMouseDown={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <div>
              <div className="modal-kicker">
                <span className="badge">{t(project.type)}</span>
                <span className="badge soft">{project.year}</span>
                <span className="badge soft">{t(project.tag)}</span>
              </div>

              <h3 className="modal-title">{t(project.title)}</h3>
              <p className="modal-sub">{t(project.short)}</p>
            </div>

            <button className="modal-close" onClick={onClose} aria-label={t("Cerrar")}>
              ✕
            </button>
          </div>

          <div className="modal-body">
            <div className="modal-left">
              <div
                className="modal-cover clickable"
                onClick={() => setZoomImage(project.cover)}
              >
                <img src={project.cover} alt={t(project.title)} />
              </div>

              {project.gallery?.length > 0 && (
                <div className="modal-gallery">
                  {project.gallery.map((src) => (
                    <img
                      key={src}
                      src={src}
                      alt=""
                      loading="lazy"
                      className="clickable"
                      onClick={() => setZoomImage(src)}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="modal-right">
              <div className="case-block">
                <h4>{t("El reto")}</h4>
                <p>{t(project.reto)}</p>
              </div>

              <div className="case-block">
                <h4>{t("La solución")}</h4>
                <p>{t(project.solucion)}</p>
              </div>

              <div className="case-block">
                <h4>{t("Resultados")}</h4>
                <ul>
                  {project.resultados?.map((r) => (
                    <li key={r}>{t(r)}</li>
                  ))}
                </ul>
              </div>

              <div className="case-block">
                <h4>Stack</h4>
                <div className="modal-stack">
                  {project.stack.map((s) => (
                    <span key={s} className="stack-pill">
                      {t(s)}
                    </span>
                  ))}
                </div>
              </div>

              <div className="modal-actions">
                {project.liveUrl ? (
                  <a
                    className="projects-btn primary"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                  >{t("Visitar sitio")}</a>
                ) : (
                  <span className="private-note">{t("Proyecto privado (sin enlace público)")}</span>
                )}

                <button className="projects-btn ghost" onClick={onClose}>{t("Cerrar")}</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {zoomImage && (
        <div className="lightbox-backdrop" onClick={() => setZoomImage(null)}>
          <img src={zoomImage} alt={t("Vista ampliada")} />
          <button
            className="lightbox-close"
            onClick={() => setZoomImage(null)}
            aria-label={t("Cerrar imagen")}
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}