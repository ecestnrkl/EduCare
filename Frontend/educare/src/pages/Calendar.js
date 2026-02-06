import "../components/Calendar/Calendar.css";
import Footer from "../components/Footer/Footer";
import CalendarContent from "../components/Calendar/CalendarContent";
import { useTranslation } from "react-i18next";

export default function Calendar() {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t("calendar.title")}</h1>
      <CalendarContent />
      <Footer />
    </>
  );
}


