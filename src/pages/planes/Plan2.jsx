import { getWhatsAppUrl } from "../../config/contact";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "./PlanPage.css";
import { PROYECTOS } from "../../data.js";
import { useEffect, useState } from "react";

const EJEMPLOS_IDS = ["oviss", "truequetec", "run-dashboard", "chalendar", "chatify", "courier-ai"];

function Plan2() {
  const { t } = useTranslation();
  const whatsappLink = getWhatsAppUrl(t("Hola NIVOSTECH, me interesa el Plan 2 (Sitio Profesional con backend y base de datos). ¿Cómo empezamos?"));
  // ====== EJEMPLOS (en el orden seleccionado) ======
  const ejemplos = EJEMPLOS_IDS.map((id) => PROYECTOS.find((p) => p.id === id)).filter(Boolean);

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
      {/* ================= SEO (PLAN 2) ================= */}
      <Helmet>
        <title>{t("Plan 2: Sitio web complejo | Servicios | NIVOSTECH")}</title>
        <meta
          name="description"
          content={t("Plan 2 de NIVOSTECH: Sitio Profesional con frontend + backend + base de datos. Incluye API personalizada, panel/dashboard, blog administrable, autenticación y escalabilidad.")}
        />
        <link rel="canonical" href="https://www.nivostech.com/servicios/plan-2" />
      </Helmet>

       <div className="page">
        <section className="plan">
          {/* ====== HERO ====== */}
          <header className="plan-hero">
            <div className="plan-hero__bg" aria-hidden="true" />
            <div className="plan-hero__inner">
              <div className="plan-hero__left">
                <div className="plan-badges">
                  <span className="badge badge--glow">{t("Profesional")}</span>
                  <span className="badge">{t("Frontend + Backend")}</span>
                  <span className="badge">{t("Base de datos")}</span>
                </div>

                <h1 className="plan-title">{t("Plan 2: Sitio web complejo")}</h1>
                <p className="plan-subtitle">{t("Ideal si necesitas un sistema completo: administración, contenido editable, blog real, formularios conectados y escalabilidad.")}</p>

                <div className="plan-kpis">
                  <div className="kpi">
                    <span className="kpi-label">{t("Entrega")}</span>
                    <span className="kpi-value">{t("5–6 semanas")}</span>
                  </div>
                  <div className="kpi">
                    <span className="kpi-label">{t("Soporte")}</span>
                    <span className="kpi-value">{t("7–14 días")}</span>
                  </div>
                  <div className="kpi">
                    <span className="kpi-label">{t("Optimización")}</span>
                    <span className="kpi-value">{t("Responsive + velocidad")}</span>
                  </div>
                  <div className="kpi">
                    <span className="kpi-label">{t("Incluye")}</span>
                    <span className="kpi-value">{t("Sitios web sencillo / Dashboard (administrador)")}</span>
                  </div>
                  <div className="kpi">
                    <span className="kpi-label">{t("Seguridad")}</span>
                    <span className="kpi-value">{t("Auth + endpoints")}</span>
                  </div>
                </div>

                <div className="plan-cta">
                  <a
                    className="btn btn--primary"
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                  >{t("Cotizar por WhatsApp")}</a>
                  <Link className="btn btn--ghost" to="/servicios">{t("Volver a Servicios")}</Link>
                </div>

                <p className="plan-note">{t("* Este plan es para proyectos que requieren guardar/administrar información, pagos desde la web y crecer a futuro.")}</p>
              </div>

              {/* ====== PRICE CARD ====== */}
              <aside className="price-card">
                <div className="price-card__top">
                  <h2 className="price-title">{t("Inversión")}</h2>
                  <div className="price-row price-row--main">
                    <span className="price-label">{t("Estimado")}</span>
                    <span className="price-main">
                      $24,000 <small className="price-tax">{t("+ IVA")}</small>
                    </span>
                  </div>
                  <p className="price-estimate">{t("Este precio es un estimado y puede ajustarse según la complejidad y el alcance del proyecto.")}</p>
                </div>

                <div className="price-split">
                  <div className="split-card">
                    <div className="split-title">{t("Pago 1")}</div>
                    <div className="split-desc">{t("Anticipo 50%")}</div>
                    <div className="split-amount">$12,000 <small className="price-tax">{t("+ IVA")}</small></div>
                  </div>

                  <div className="split-card">
                    <div className="split-title">{t("Pago 2")}</div>
                    <div className="split-desc">{t("Liquidación 50%")}</div>
                    <div className="split-amount">$12,000 <small className="price-tax">{t("+ IVA")}</small></div>
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
                    <span className="mini-dot" />{t("Transferencia bancaria")}</div>
                  <div className="mini">
                    <span className="mini-dot" />{t("Dominio del cliente")}</div>

                  <div className="mini">
                    <span className="mini-dot" />{t("Escalable a futuro")}</div>
                </div>
              </aside>
            </div>
          </header>

          {/* ====== CONTENT ====== */}
          <div className="plan-wrap">
            {/* ====== EJEMPLOS ====== */}
            <section className="card ejemplos" id="ejemplos">
              <div className="ejemplos-head">
                <h2 className="card-title" style={{ margin: 0 }}>{t("Ejemplos del Plan 2")}</h2>
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
                        <img src={p.cover} alt={t(p.title)} loading="lazy" style={{ objectFit: p.coverFit || "cover" }} />
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
                  <span className="icon icon--ok" aria-hidden="true">
                    ✓
                  </span>{t("¿Qué incluye?")}</h2>

                <div className="list-block">
                  <div className="list-title">{t("Todo lo del plan frontend + funciones avanzadas")}</div>
                  <ul className="list">
                    <li>{t("Experiencia premium (diseño, responsive y optimización)")}</li>
                    <li>{t("Integraciones (WhatsApp, Maps, correo, redes)")}</li>
                    <li>{t("Estructura clara orientada a conversión")}</li>
                  </ul>
                </div>

                <ul className="checks">
                  <li>{t("API personalizada para tu proyecto")}</li>
                  <li>{t("Base de datos (PostgreSQL / MySQL / MongoDB según necesidad)")}</li>
                  <li>{t("Panel administrativo o dashboard (según acuerdo)")}</li>
                  <li>{t("Blog totalmente administrable")}</li>
                  <li>{t("Gestión de productos, servicios, usuarios o contenido")}</li>
                  <li>{t("Integración de pagos en línea con Stripe (pagos únicos, suscripciones o enlaces de pago)")}</li>
                  <li>{t("Endpoints protegidos con autenticación (JWT o similar)")}</li>
                  <li>{t("Formularios reales (SMTP) y/o guardados en base de datos")}</li>
                  <li>{t("Notificaciones / automatizaciones (si aplica)")}</li>
                </ul>
              </section>

              <section
                className="card"
                style={{ display: "flex", flexDirection: "column", minHeight: "100%" }}
              >
                <h2 className="card-title" style={{ justifyContent: "center" }}>{t("¿Necesitas más funcionalidades?")}</h2>

                <p style={{ marginBottom: "1.5rem", fontSize: "1.1rem", lineHeight: "1.6" }}>{t("Si necesitas manejo de redes sociales y tener presencia digital entonces el plan")}{" "}
                  <strong>{t("Sitio + Redes Sociales")}</strong> {t("o una cotización personalizada es ideal para ti.")}</p>

                <div style={{ marginBottom: "1rem", textAlign: "center" }}>
                  <img
                    src="/images/nivos_planes4.webp"
                    alt={t("Plan 3: Sitio + Redes Sociales")}
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
                  <Link className="btn btn--primary" to="/servicios/plan-3">{t("Ver Plan Sitio + Redes Sociales")}</Link>
                </div>
              </section>
            </div>

            {/* ====== VENTAJAS ====== */}
            <section className="card" style={{ marginTop: "2rem" }}>
              <h2 className="card-title">{t("Ventajas del plan")}</h2>

              <ul className="checks">
                <li>{t("Contenido editable por el cliente (sin depender de nosotros)")}</li>
                <li>{t("Escalabilidad para futuras funciones y módulos")}</li>
                <li>{t("Seguridad y panel privado")}</li>
                <li>{t("Mantenimiento más sólido y profesional")}</li>
              </ul>
            </section>

            {/* ====== PROCESO ====== */}
            <section className="card" style={{ marginTop: "2rem" }}>
              <h2 className="card-title">{t("Plan de acción")}</h2>

              <div className="timeline">
                <div className="step">
                  <div className="step-dot" />
                  <div className="step-body">
                    <div className="step-title">{t("1) Inicio")}</div>
                    <div className="step-text">{t("Anticipo (50%) + definición de módulos (qué se administra y qué se guarda).")}</div>
                  </div>
                </div>

                <div className="step">
                  <div className="step-dot" />
                  <div className="step-body">
                    <div className="step-title">{t("2) Arquitectura")}</div>
                    <div className="step-text">{t("Modelamos base de datos, endpoints, roles y reglas de seguridad.")}</div>
                  </div>
                </div>

                <div className="step">
                  <div className="step-dot" />
                  <div className="step-body">
                    <div className="step-title">{t("3) Desarrollo")}</div>
                    <div className="step-text">{t("Frontend + backend + panel/admin + conexión a BD.")}</div>
                  </div>
                </div>

                <div className="step">
                  <div className="step-dot" />
                  <div className="step-body">
                    <div className="step-title">{t("4) Pruebas")}</div>
                    <div className="step-text">{t("Pruebas de flujo, seguridad, formularios, carga y validaciones.")}</div>
                  </div>
                </div>

                <div className="step">
                  <div className="step-dot" />
                  <div className="step-body">
                    <div className="step-title">{t("5) Publicación")}</div>
                    <div className="step-text">{t("Deploy y ajustes finales. Liquidación (50%).")}</div>
                  </div>
                </div>
              </div>

              <div className="reqs">
                <div className="reqs-title">{t("Para comenzar se necesita:")}</div>
                <ul className="reqs-list">
                  <li>{t("Pago en transferencia")}</li>
                  <li>INE</li>
                  <li>{t("Constancia de situación fiscal (si requieres factura)")}</li>
                </ul>
              </div>
            </section>

            {/* ====== CTA FINAL ====== */}
            <section className="cta-final">
              <div className="cta-final__card">
                <h3>{t("¿Quieres un sistema que puedas administrar?")}</h3>
                <p>{t("Este plan es ideal si vas a manejar contenido, usuarios, productos o información real con seguridad.")}</p>
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

export default Plan2;

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
              <div className="modal-cover clickable" onClick={() => setZoomImage(project.cover)}>
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
                {project.liveUrl && (
                  <a className="projects-btn primary" href={project.liveUrl} target="_blank" rel="noreferrer">{t("Visitar sitio")}</a>
                )}

                {project.videoUrl && (
                  <a className="projects-btn ghost" href={project.videoUrl} target="_blank" rel="noreferrer">{t("Ver demo")}</a>
                )}

                {project.repositoryUrl && (
                  <a className="projects-btn ghost" href={project.repositoryUrl} target="_blank" rel="noreferrer">{t("Ver repositorio")}</a>
                )}

                {!project.liveUrl && !project.videoUrl && !project.repositoryUrl && (
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
          <button className="lightbox-close" onClick={() => setZoomImage(null)} aria-label={t("Cerrar imagen")}>
            ✕
          </button>
        </div>
      )}
    </>
  );
}





