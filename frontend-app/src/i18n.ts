import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import XHR from "i18next-http-backend";
import { DateTime } from "luxon";

const supportedLngs: string[] | undefined = process.env.REACT_APP_SUPPORTED_LANGUAGES?.split(" ");
const isDevMode: boolean = process.env.REACT_APP_ENVIRONMENT === "development";

i18next.on("languageChanged", lng => {
  document.documentElement.setAttribute("lang", lng);
});

i18next
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs,
    debug: isDevMode,
    load: "languageOnly",
    ns: "translations",
    defaultNS: "translations",
    detection: {
      order: ["path", "localStorage", "navigator", "htmlTag"],
      // keys or params to lookup language from
      lookupLocalStorage: "i18nextLng",
      lookupFromPathIndex: 0,
      // cache user language on
      caches: ["localStorage"],
      htmlTag: document.documentElement
    },
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    },
    returnEmptyString: !isDevMode
  });

i18next.services.formatter?.add("DATE_LONG", (value, lng, _options) => {
  return DateTime.fromJSDate(value)
    .setLocale(lng as string)
    .toLocaleString(DateTime.DATE_HUGE);
});

export default i18next;
