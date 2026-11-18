import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from "./locales/es.json";
import en from "./locales/en.json";

const STORAGE_KEY = "nivostech-language";

function savedLanguage() {
  try {
    return localStorage.getItem(STORAGE_KEY) === "en" ? "en" : "es";
  } catch {
    return "es";
  }
}

i18n.use(initReactI18next).init({
  resources: { es: { translation: es }, en: { translation: en } },
  lng: savedLanguage(),
  fallbackLng: "es",
  supportedLngs: ["es", "en"],
  // Existing Spanish copy is also the translation key.
  keySeparator: false,
  nsSeparator: false,
  interpolation: { escapeValue: false },
});

i18n.on("languageChanged", (language) => {
  try {
    localStorage.setItem(STORAGE_KEY, language);
  } catch {
    // Language switching still works when storage is unavailable.
  }
});

export default i18n;
