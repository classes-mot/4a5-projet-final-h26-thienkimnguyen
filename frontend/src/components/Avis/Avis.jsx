import React, { useContext } from "react";
import OneAvis from "../OneAvis/OneAvis";
import { AuthContext } from "../../context/AuthContext";
import { AVIS } from "../../data/avis";
import { USERS } from "../../data/user";

import "./Avis.css";
import { useOutletContext } from "react-router-dom";

const Avis = (props) => {
  const auth = useContext(AuthContext);
  const items = props.items || AVIS;
  const { deleteAvis } = useOutletContext();

  return (
    <ul className="avis-list">
      {items.map((avis) => {
        const user = USERS.find((u) => u.id === avis.creator);

        let displayName = "Anonyme";
        if (user) {
          displayName = user.name;
        } else if (auth.isLoggedIn && avis.creator === auth.userId) {
          displayName = auth.userName || "Moi";
        }

        return (
          <OneAvis
            key={avis.id}
            id={avis.id}
            onDelete={deleteAvis}
            description={avis.description}
            creatorName={displayName}
            creatorId={avis.creator}
            onDelete={deleteAvis}
          />
        );
      })}
    </ul>
  );
};

export default Avis;
