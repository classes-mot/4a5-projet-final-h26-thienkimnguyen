import OneAvis from "../OneAvis/OneAvis";
import { AVIS } from "../../data/avis";
import { USERS } from "../../data/user";

import "./Avis.css";

const Avis = (props) => {
  const items = props.items || AVIS;

  return (
    <ul className="avis-list">
      {items.map((avis) => {
        const user = USERS.find((u) => u.id === avis.creator);
        return (
          <OneAvis
            key={avis.id}
            description={avis.description}
            creatorName={user ? user.name : "Anonyme"}
          />
        );
      })}
    </ul>
  );
};

export default Avis;
