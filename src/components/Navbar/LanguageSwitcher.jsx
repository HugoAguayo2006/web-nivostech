import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation();

  return (
    <div className="language-switcher" role="group" aria-label={t("Idioma")}>
      {[
        { code: "es", label: "ES", name: "Español" },
        { code: "en", label: "EN", name: "English" },
      ].map(({ code, label, name }) => (
        <button
          key={code}
          type="button"
          className="language-switcher-option"
          lang={code}
          aria-label={name}
          aria-pressed={i18n.resolvedLanguage === code}
          onClick={() => i18n.changeLanguage(code)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
