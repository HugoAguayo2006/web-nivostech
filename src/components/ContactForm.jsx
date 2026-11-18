import { useId, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { EMAILJS_CONFIG, WHATSAPP_URL } from "../config/contact";
import "./ContactForm.css";

const EMPTY_VALUES = { user_name: "", user_email: "", message: "" };

function validateField(name, value) {
  const text = value.trim();
  if (!text) return "Completa este campo.";
  if (name === "user_name" && text.length < 2) return "Escribe al menos 2 caracteres.";
  if (name === "user_email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)) {
    return "Escribe un correo válido, por ejemplo: nombre@empresa.com.";
  }
  if (name === "message" && text.length < 10) return "Cuéntanos un poco más: al menos 10 caracteres.";
  return "";
}

export default function ContactForm() {
  const id = useId();
  const formRef = useRef(null);
  const submittingRef = useRef(false);
  const [values, setValues] = useState(EMPTY_VALUES);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const sending = status === "sending";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    if (status !== "sending") setStatus("idle");
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    setErrors((current) => ({ ...current, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (submittingRef.current) return;

    const trimmedValues = Object.fromEntries(
      Object.entries(values).map(([name, value]) => [name, value.trim()])
    );
    const nextErrors = Object.fromEntries(
      Object.entries(trimmedValues).map(([name, value]) => [name, validateField(name, value)])
    );
    setValues(trimmedValues);
    setErrors(nextErrors);
    const firstInvalid = Object.keys(nextErrors).find((name) => nextErrors[name]);
    if (firstInvalid) {
      setStatus("idle");
      formRef.current.elements.namedItem(firstInvalid).focus();
      return;
    }

    submittingRef.current = true;
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        trimmedValues,
        EMAILJS_CONFIG.publicKey
      );
      setValues(EMPTY_VALUES);
      setErrors({});
      setStatus("success");
    } catch {
      // Keep the message so the visitor can retry without writing it again.
      setStatus("error");
    } finally {
      submittingRef.current = false;
    }
  };

  const fieldProps = (name) => ({
    id: `${id}-${name}`,
    name,
    value: values[name],
    onChange: handleChange,
    onBlur: handleBlur,
    required: true,
    readOnly: sending,
    "aria-invalid": Boolean(errors[name]),
    "aria-describedby": errors[name] ? `${id}-${name}-error` : undefined,
  });

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="inquiry-form" noValidate aria-busy={sending} aria-label="Formulario de contacto">
      <div className="inquiry-fields">
        <div className="inquiry-field">
          <label htmlFor={`${id}-user_name`}>Tu nombre</label>
          <input {...fieldProps("user_name")} type="text" autoComplete="name" maxLength={100} placeholder="¿Cómo te llamas?" />
          {errors.user_name && <p className="inquiry-error" id={`${id}-user_name-error`}>{errors.user_name}</p>}
        </div>
        <div className="inquiry-field">
          <label htmlFor={`${id}-user_email`}>Correo electrónico</label>
          <input {...fieldProps("user_email")} type="email" autoComplete="email" maxLength={254} placeholder="nombre@empresa.com" autoCapitalize="none" spellCheck={false} />
          {errors.user_email && <p className="inquiry-error" id={`${id}-user_email-error`}>{errors.user_email}</p>}
        </div>
      </div>
      <div className="inquiry-field">
        <label htmlFor={`${id}-message`}>Cuéntanos sobre tu proyecto</label>
        <textarea {...fieldProps("message")} rows={6} maxLength={3000} placeholder="¿Qué hace tu negocio y qué te gustaría lograr con tu página o plataforma?" aria-describedby={errors.message ? `${id}-message-error` : `${id}-message-hint`} />
        {errors.message ? (
          <p className="inquiry-error" id={`${id}-message-error`}>{errors.message}</p>
        ) : (
          <p className="inquiry-hint" id={`${id}-message-hint`}>Puedes incluir tu idea, las funciones que necesitas y la fecha que tienes en mente.</p>
        )}
      </div>
      <div className="inquiry-feedback" aria-live="polite" aria-atomic="true">
        {status === "success" && (
          <p className="inquiry-status inquiry-status--success" role="status">Tu mensaje se envió correctamente. Te responderemos al correo que compartiste.</p>
        )}
        {status === "error" && (
          <p className="inquiry-status inquiry-status--error" role="alert">
            No pudimos enviar tu mensaje. Tus datos siguen aquí para que lo intentes de nuevo. También puedes <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">escribirnos por WhatsApp</a>.
          </p>
        )}
      </div>
      <div className="inquiry-footer">
        <p>Todos los campos son obligatorios.<br />Usaremos tus datos para responder a tu consulta.</p>
        <button type="submit" className="inquiry-submit" disabled={sending}>
          {sending ? "Enviando mensaje…" : "Enviar mensaje"}
          {sending ? <span className="inquiry-spinner" aria-hidden="true" /> : <span aria-hidden="true">↗</span>}
        </button>
      </div>
    </form>
  );
}
