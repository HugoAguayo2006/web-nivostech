import { getWhatsAppUrl } from "../../config/contact";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "./PlanPage.css";
import { PROYECTOS } from "../../data.js";
import { useEffect, useState } from "react";

const EJEMPLOS_IDS = ["colonial", "ing"];

function Plan3() {
  const { t } = useTranslation();
  const whatsappLink = getWhatsAppUrl(t("Hola NIVOSTECH, me interesa el Plan 3 (Sitio + Redes Sociales). Quiero información del paquete mensual de $2,500 por 12 meses."));
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
      {/* ================= SEO (PLAN 3) ================= */}
      <Helmet>
        <title>{t("Plan 3: Sitio + Redes Sociales | Servicios | NIVOSTECH")}</title>
        <meta
          name="description"
          content={t("Plan 3 de NIVOSTECH: Servicio completo de manejo de redes sociales + página web gratis. Incluye gestión de contenido, publicación, análisis y estrategia de crecimiento. Pago mensual de $2,500 por 12 meses.")}
        />
        <link rel="canonical" href="https://www.nivostech.com/servicios/plan-3" />
      </Helmet>

       <div className="page">
        <section className="plan">
          {/* ====== HERO ====== */}
          <header className="plan-hero">
            <div className="plan-hero__bg" aria-hidden="true" />
            <div className="plan-hero__inner">
              <div className="plan-hero__left">
                <div className="plan-badges">
                  <span className="badge badge--glow">{t("Paquete completo")}</span>
                  <span className="badge">{t("Web + Redes")}</span>
                  <span className="badge">{t("Mensual")}</span>
                </div>

                <h1 className="plan-title">{t("Plan 3: Sitio + Redes Sociales")}</h1>
                <p className="plan-subtitle">{t("Presencia digital completa: manejamos tus redes mes a mes y además tu página web va incluida")} <strong>{t("GRATIS")}</strong> {t("dentro del paquete.")}</p>

                <div className="plan-kpis">
                  <div className="kpi">
                    <span className="kpi-label">{t("Pago mensual")}</span>
                    <span className="kpi-value">{t("$2,500 MXN")}</span>
                  </div>
                  <div className="kpi">
                    <span className="kpi-label">{t("Contrato")}</span>
                    <span className="kpi-value">{t("12 meses")}</span>
                  </div>
                  <div className="kpi">
                    <span className="kpi-label">{t("Bonus")}</span>
                    <span className="kpi-value">{t("Web incluida")}</span>
                  </div>
                </div>

                <div className="plan-cta">
                  <a
                    className="btn btn--primary"
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                  >{t("Contratar por WhatsApp")}</a>
                  <Link className="btn btn--ghost" to="/servicios">{t("Volver a Servicios")}</Link>
                </div>

                <p className="plan-note">{t("* Ideal si quieres que tu marca crezca con constancia y contenido profesional, mientras tu web trabaja como “centro” de tu presencia digital.")}</p>
              </div>

              {/* ====== PRICE CARD ====== */}
              <aside className="price-card">
                <div className="price-card__top">
                  <h2 className="price-title">{t("Inversión")}</h2>

                  <div className="price-row price-row--main">
                    <span className="price-label">{t("Mensual")}</span>
                    <span className="price-main">$2,500</span>
                  </div>

                  <div className="price-row">
                    <span className="price-label">{t("Duración")}</span>
                    <span style={{ fontWeight: 800 }}>{t("12 meses")}</span>
                  </div>

                  <div className="price-row">
                    <span className="price-label">{t("Total")}</span>
                    <span style={{ fontWeight: 900 }}>$30,000</span>
                  </div>

                  <div className="price-chip">{t("WEB GRATIS")}</div>
                </div>

                <div className="price-split">
                  <div className="split-card">
                    <div className="split-title">{t("Incluye")}</div>
                    <div className="split-desc">{t("Gestión mensual")}</div>
                    <div className="split-amount">{t("12 meses")}</div>
                  </div>
                  <div className="split-card">
                    <div className="split-title">{t("Bonus")}</div>
                    <div className="split-desc">{t("Web tipo Plan Landing Extendida")}</div>
                    <div className="split-amount">{t("GRATIS")}</div>
                  </div>
                </div>

                <div className="price-actions">
                  <a
                    className="btn btn--primary btn--full"
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                  >{t("Quiero este plan")}</a>
                  <a className="btn btn--soft btn--full" href="#incluye">{t("Ver qué incluye")}</a>
                </div>

                <div className="price-foot">
                  <div className="mini">
                    <span className="mini-dot" />{t("Transferencia mensual")}</div>
                  <div className="mini">
                    <span className="mini-dot" />{t("Reportes mensuales")}</div>
                  <div className="mini">
                    <span className="mini-dot" />{t("Dominio del cliente")}</div>
                </div>
              </aside>
            </div>
          </header>

          {/* ====== CONTENT ====== */}
          <div className="plan-wrap">
            {/* ====== EJEMPLOS (con modal igual que Proyectos) ====== */}
            <section className="card ejemplos" id="ejemplos">
              <div className="ejemplos-head">
                <h2 className="card-title" style={{ margin: 0 }}>{t("Ejemplos del Plan 3")}</h2>
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
                  <div className="list-title">{t("BONUS: Página web incluida GRATIS")}</div>
                  <ul className="list">
                    <li>{t("Landing Extendida tipo Plan 1, extendible a Plan 2")}</li>
                    <li>{t("Integración de WhatsApp, Google Maps, correo y redes")}</li>
                    <li>{t("Soporte inicial (7–14 días)")}</li>
                    <li>{t("Entrega estimada: 5–6 semanas")}</li>
                  </ul>
                </div>

                <div className="list-block" style={{ marginTop: "0.9rem" }}>
                  <div className="list-title">{t("Gestión profesional de redes sociales")}</div>
                  <ul className="list">
                    <li>{t("Creación de contenido (posts, imágenes, videos)")}</li>
                    <li>{t("Publicación y programación")}</li>
                    <li>{t("Gestión multi-plataforma (FaceBook, Instagram, etc.)")}</li>
                    <li>{t("Respuesta a comentarios y mensajes")}</li>
                    <li>{t("Análisis de métricas + reportes mensuales")}</li>
                    <li>{t("Estrategia de crecimiento y engagement")}</li>
                    <li>{t("Optimización de perfiles y biografías")}</li>
                  </ul>
                </div>
              </section>

              <section
                className="card"
                style={{ display: "flex", flexDirection: "column", minHeight: "100%" }}
              >
                <h2 className="card-title" style={{ justifyContent: "center" }}>{t("¿Necesitas campañas pagadas?")}</h2>

                <p
                  style={{
                    marginBottom: "1.5rem",
                    fontSize: "1.1rem",
                    lineHeight: "1.6",
                    textAlign: "center",
                  }}
                >{t("Si requieres campañas pagadas o publicidad pagada (Meta Ads, Google Ads, etc.), contáctanos para una cotización personalizada.")}</p>

                <div style={{ marginBottom: "1rem", textAlign: "center" }}>
                  <img
                    src="/images/redes_sociales_tecnologico.webp"
                    alt={t("Campañas pagadas y publicidad")}
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

            {/* ====== VENTAJAS ====== */}
            <section className="card" style={{ marginTop: "2rem", marginBottom: "2rem" }}>
              <h2 className="card-title">{t("Ventajas del plan")}</h2>
              <ul className="checks">
                <li>{t("Página web profesional incluida sin costo adicional")}</li>
                <li>{t("Presencia digital completa (web + redes)")}</li>
                <li>{t("Contenido constante y coherente en todas tus plataformas")}</li>
                <li>{t("Ahorro de tiempo: nosotros nos encargamos")}</li>
                <li>{t("Crecimiento progresivo de tu marca")}</li>
                <li>{t("Reportes mensuales para ver avances reales")}</li>
              </ul>
            </section>

            {/* ====== BONUS DESTACADO ====== */}
            <section className="card" style={{ marginBottom: "2rem" }}>
              <h2
                style={{
                  fontSize: "1.9rem",
                  marginBottom: "1.2rem",
                  color: "#00f0ff",
                  fontFamily: "'Zen Dots', cursive",
                  fontWeight: 400,
                  textShadow:
                    "0 0 30px rgba(0, 240, 255, 0.5), 0 0 15px rgba(0, 240, 255, 0.4)",
                  letterSpacing: "0.5px",
                  textAlign: "center",
                }}
              >{t("BONUS incluido")}</h2>
              <div className="hint" style={{ marginTop: 0 }}>
                <strong>{t("Tu página web va GRATIS")}</strong>{t(". Inicialmente tiene costo, pero al contratar el manejo de redes, se incluye dentro del paquete.")}</div>
            </section>

            {/* ====== PROCESO ====== */}
            <section className="card">
              <h2 className="card-title">{t("Plan de acción")}</h2>

              <div className="timeline">
                <div className="step">
                  <div className="step-dot" />
                  <div className="step-body">
                    <div className="step-title">{t("1) Inicio (Mes 1)")}</div>
                    <div className="step-text">{t("Pago mensual + acceso a cuentas + levantamiento de información (estilo, objetivos, público).")}</div>
                  </div>
                </div>

                <div className="step">
                  <div className="step-dot" />
                  <div className="step-body">
                    <div className="step-title">{t("2) Web (primeras 5–6 semanas)")}</div>
                    <div className="step-text">{t("Diseñamos y entregamos tu web (tipo Plan Landing Extendida) mientras iniciamos el calendario de redes.")}</div>
                  </div>
                </div>

                <div className="step">
                  <div className="step-dot" />
                  <div className="step-body">
                    <div className="step-title">{t("3) Redes (mes a mes)")}</div>
                    <div className="step-text">{t("Creación + programación + interacción + optimización continua.")}</div>
                  </div>
                </div>

                <div className="step">
                  <div className="step-dot" />
                  <div className="step-body">
                    <div className="step-title">{t("4) Reporte mensual")}</div>
                    <div className="step-text">{t("Te entregamos métricas y recomendaciones para el siguiente mes.")}</div>
                  </div>
                </div>

                <div className="step">
                  <div className="step-dot" />
                  <div className="step-body">
                    <div className="step-title">{t("5) Optimización constante")}</div>
                    <div className="step-text">{t("Ajustamos estrategia según resultados (crecimiento, engagement, clics y mensajes).")}</div>
                  </div>
                </div>
              </div>

              <div className="reqs">
                <div className="reqs-title">{t("Para comenzar se necesita:")}</div>
                <ul className="reqs-list">
                  <li>{t("Pago mensual de $2,500 durante 12 meses por transferencia")}</li>
                  <li>INE</li>
                  <li>{t("Constancia de situación fiscal (si requieres factura)")}</li>
                  <li>{t("Acceso a cuentas de redes sociales")}</li>
                </ul>
              </div>
            </section>

            {/* ====== CTA FINAL ====== */}
            <section className="cta-final">
              <div className="cta-final__card">
                <h3>{t("¿Quieres que tu marca crezca mientras tu web convierte?")}</h3>
                <p>{t("Este plan te da constancia en redes + un sitio profesional incluido para cerrar ventas.")}</p>
                <div
                  className="cta-final__actions"
                  style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}
                >
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

export default Plan3;

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