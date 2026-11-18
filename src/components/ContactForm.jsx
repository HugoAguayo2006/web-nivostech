import { useTranslation } from "react-i18next";
import { useId, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { EMAILJS_CONFIG, getWhatsAppUrl } from "../config/contact";
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
  const { t } = useTranslation();
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
        {
          ...trimmedValues,
          // Support the sender variables used by EmailJS templates as well as the form names.
          name: trimmedValues.user_name,
          email: trimmedValues.user_email,
          from_name: trimmedValues.user_name,
          from_email: trimmedValues.user_email,
          reply_to: trimmedValues.user_email,
        },
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
    <form ref={formRef} onSubmit={handleSubmit} className="inquiry-form" noValidate aria-busy={sending} aria-label={t("Formulario de contacto")}>
      <div className="inquiry-fields">
        <div className="inquiry-field">
          <label htmlFor={`${id}-user_name`}>{t("Tu nombre")}</label>
          <input {...fieldProps("user_name")} type="text" autoComplete="name" maxLength={100} placeholder={t("¿Cómo te llamas?")} />
          {errors.user_name && <p className="inquiry-error" id={`${id}-user_name-error`}>{t(errors.user_name)}</p>}
        </div>
        <div className="inquiry-field">
          <label htmlFor={`${id}-user_email`}>{t("Correo electrónico")}</label>
          <input {...fieldProps("user_email")} type="email" autoComplete="email" maxLength={254} placeholder={t("nombre@empresa.com")} autoCapitalize="none" spellCheck={false} />
          {errors.user_email && <p className="inquiry-error" id={`${id}-user_email-error`}>{t(errors.user_email)}</p>}
        </div>
      </div>
      <div className="inquiry-field">
        <label htmlFor={`${id}-message`}>{t("Cuéntanos sobre tu proyecto")}</label>
        <textarea {...fieldProps("message")} rows={6} maxLength={3000} placeholder={t("¿Qué hace tu negocio y qué te gustaría lograr con tu página o plataforma?")} aria-describedby={errors.message ? `${id}-message-error` : `${id}-message-hint`} />
        {errors.message ? (
          <p className="inquiry-error" id={`${id}-message-error`}>{t(errors.message)}</p>
        ) : (
          <p className="inquiry-hint" id={`${id}-message-hint`}>{t("Puedes incluir tu idea, las funciones que necesitas y la fecha que tienes en mente.")}</p>
        )}
      </div>
      <div className="inquiry-feedback" aria-live="polite" aria-atomic="true">
        {status === "success" && (
          <p className="inquiry-status inquiry-status--success" role="status">{t("Tu mensaje se envió correctamente. Te responderemos al correo que compartiste.")}</p>
        )}
        {status === "error" && (
          <p className="inquiry-status inquiry-status--error" role="alert">{t("No pudimos enviar tu mensaje. Tus datos siguen aquí para que lo intentes de nuevo. También puedes")} <a href={getWhatsAppUrl(t("Hola, me gustaría saber más sobre NIVOSTECH y sus páginas web."))} target="_blank" rel="noreferrer">{t("escribirnos por WhatsApp")}</a>.
          </p>
        )}
      </div>
      <div className="inquiry-footer">
        <p>{t("Todos los campos son obligatorios.")}<br />{t("Usaremos tus datos para responder a tu consulta.")}</p>
        <button type="submit" className="inquiry-submit" disabled={sending}>
          {sending ? t("Enviando mensaje…") : t("Enviar mensaje")}
          {sending ? <span className="inquiry-spinner" aria-hidden="true" /> : <span aria-hidden="true">↗</span>}
        </button>
      </div>
    </form>
  );
}
