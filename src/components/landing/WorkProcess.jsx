import { useTranslation } from "react-i18next";
import "./WorkProcess.css";

export default function WorkProcess() {
  const { t } = useTranslation();
  const steps = [
    {
      number: "01",
      title: t("Reunión Inicial"),
      description:
        t("Platicamos sobre tu proyecto, objetivos y necesidades. Definimos el alcance y el plan adecuado para tu negocio."),
    },
    {
      number: "02",
      title: t("Diseño y Desarrollo"),
      description:
        t("Creamos el diseño de tu sitio web y comenzamos el desarrollo. Te mantenemos informado en cada etapa del proceso."),
    },
    {
      number: "03",
      title: t("Revisión y Ajustes"),
      description:
        t("Revisamos juntos el resultado, hacemos los ajustes necesarios y nos aseguramos de que todo esté perfecto."),
    },
    {
      number: "04",
      title: t("Entrega y Soporte"),
      description:
        t("Entregamos tu sitio web listo para funcionar. Incluimos soporte técnico inicial para resolver cualquier duda."),
    },
  ];

  return (
    <section id="proceso" className="work-process-section">
      <div className="work-process-container">
        <div className="work-process-header">
          <h2 className="work-process-title">{t("Nuestro Proceso de Trabajo")}</h2>
          <p className="work-process-subtitle">{t("Un proceso claro y transparente desde el inicio hasta la entrega de tu proyecto.")}</p>
        </div>

        <div className="work-process-steps">
          {steps.map((step, index) => (
            <div key={index} className="work-process-step">
              <div className="work-process-number">{step.number}</div>
              <div className="work-process-content">
                <h3 className="work-process-step-title">{step.title}</h3>
                <p className="work-process-step-description">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="work-process-connector"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

