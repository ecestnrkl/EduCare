import "./Calendar.css";
import { AiOutlineSend } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import Footer from "../Footer/Footer";
import CalendarContent from "./CalendarContent";

export default function CalendarEintrag() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("calendar.title")}</h1>
      <CalendarContent />
      <div className="Eintrag">
        <h2>Weihnachtsfeier und Wichteln mit der Klasse 7b</h2>
        <p>veröffentlicht von Herr Stein</p>
        <div className="Nachricht">
          <p>
            Liebe Eltern der SchülerInnen der Klasse 7b,
            <br /><br />
            am 20.12.22 möchten wir im Klassenzimmer eine kleine{" "}
            <span className="dropdown">
              <span>
                Weihnachtsfeier <i><BsInfoCircle /></i>
              </span>
              <span className="dropdown-content">
                <p>Weihnachten:</p>
                <p>
                  Weihnachten ist ein christlicher Feiertag, an welchen die
                  Menschen zur Winterzeit die Geburt von Jesus feiern. Üblich ist
                  hierbei das Schmücken von Häusern und Straßen, sowie das Backen
                  von Plätzchen.
                </p>
              </span>
            </span>{" "}
            veranstalten, bei welcher es Kinderpunsch und Plätzchen geben wird.
            <br />
            Wir haben mit der Klasse gemeinsam entschieden, dass wir auch{" "}
            <span className="dropdown">
              <span>
                Wichteln <i><BsInfoCircle /></i>
              </span>
              <span className="dropdown-content">
                <p>Wichteln:</p>
                <p>
                  Wichteln beschreibt einen Vorgang, bei dem sich eine gewisse
                  Anzahl an Personen in der Vorweihnachtszeit zusammenfindet, um
                  sich gegenseitig zu beschenken.
                </p>
              </span>
            </span>{" "}
            möchten. Sorgen sie deshalb bitte dafür, dass ihr Kind ein Geschenk
            im Preis von 5 bis 10€ an diesem Tag dabei hat.
            <br /><br />
            Ich wünsche Ihnen noch schöne Feiertage!
            <br /><br />
            Mit freundlichen Grüßen
            <br />
            Herr Stein
          </p>
        </div>
        <hr />
        <div className="Nachricht2">
          <p>{t("calendar.reply")}</p>
          <i><AiOutlineSend /></i>
        </div>
      </div>
      <Footer />
    </div>
  );
}


