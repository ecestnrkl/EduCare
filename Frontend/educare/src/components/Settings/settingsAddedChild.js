import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import api from "../../api";

function AddedChildInfos() {
  const [childInfos, setChildInfos] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    api
      .get("/user/children")
      .then((res) => setChildInfos(res.data))
      .catch((err) => console.error("Error fetching children:", err));
  }, []);

  return (
    <div className="container">
      <h1>{t("settings.savedChildren")}</h1>
      {childInfos.length === 0 && <p>{t("settings.noChildren")}</p>}
      {childInfos.map((child, index) => (
        <div key={index}>
          <p>{child.school}</p>
          <p>{child.fname}</p>
          <p>{child.lname}</p>
          <p>{child.klasse}</p>
          <p>{child.teacher}</p>
          <p>{child.email}</p>
        </div>
      ))}
    </div>
  );
}

export default AddedChildInfos;