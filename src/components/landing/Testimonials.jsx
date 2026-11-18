import { useTranslation } from "react-i18next";
import "./Testimonials.css";

export default function Testimonials() {
  const { t } = useTranslation();
  const testimonials = [
    {
  name: t("Dirección Académica"),
  company: "Instituto Nueva Galicia",
  text: t("NIVOSTECH logró transmitir la esencia y valores de nuestra institución en un sitio web claro, moderno y funcional. El acompañamiento fue constante y siempre mostraron disposición para ajustar cada detalle según nuestras necesidades."),
  rating: 5,
},

{
  name: t("Coordinación Administrativa"),
  company: "Colegio Colonial",
  text: t("El desarollo de nuestro sitio web mejoró notablemente la comunicación con padres de familia y alumnos. La información ahora es clara, accesible y fácil de encontrar. Estamos muy satisfechos con el resultado."),
  rating: 5,
},

{
  name: t("Equipo de OVISS"),
  company: "OVISS Global",
  text: t("NIVOSTECH nos ayudó a crear un sitio claro y accesible para compartir nuestra misión. La navegación en varios idiomas facilita conectar con nuestras comunidades y presentar el trabajo de OVISS a una audiencia internacional."),
  rating: 5,
  isExample: true,
},


  ];

  return (
    <section id="testimonios" className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">{t("Lo que dicen nuestros clientes")}</h2>
          <p className="testimonials-subtitle">{t("La satisfacción de nuestros clientes es nuestra prioridad.")}</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              {testimonial.isExample && (
                <p className="testimonial-example-label">{t("Reseña de ejemplo")}</p>
              )}
              <div className="testimonial-rating">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="testimonial-star">
                    ★
                  </span>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <div className="testimonial-author-name">{testimonial.name}</div>
                <div className="testimonial-author-company">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

