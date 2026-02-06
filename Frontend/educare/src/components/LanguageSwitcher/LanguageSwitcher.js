import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css";

const LANGUAGES = [
  { code: "de", label: "DE", flag: "🇩🇪" },
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "tr", label: "TR", flag: "🇹🇷" },
  { code: "ar", label: "AR", flag: "🇸🇦" },
  { code: "uk", label: "UK", flag: "🇺🇦" },
  { code: "fr", label: "FR", flag: "🇫🇷" },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleChange = (e) => {
    const lng = e.target.value;
    i18n.changeLanguage(lng);

    // Set RTL for Arabic
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
  };

  return (
    <div className="language-switcher">
      <select
        value={i18n.language?.substring(0, 2) || "de"}
        onChange={handleChange}
        className="language-select"
        aria-label="Language"
      >
        {LANGUAGES.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.flag} {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
}
