import "./OneAvis.css";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const OneAvis = (props) => {
  const { t } = useTranslation();
  const auth = useContext(AuthContext);

  return (
    <li className="one-avis-item">
      <div className="avis-card">
        <p className="avis-description">"{props.description}"</p>
        <div className="avis-footer">
          <span className="avis-creator">— {props.creatorName}</span>
        </div>

        {auth.isLoggedIn && auth.userId === props.creatorId && (
          <div className="avis-item__actions">
            <button className="btn-delete" onClick={() => props.onDelete(props.id)}>
              {t("common.supprimer")}
            </button>
          </div>
        )}
      </div>
    </li>
  );
};

export default OneAvis;
