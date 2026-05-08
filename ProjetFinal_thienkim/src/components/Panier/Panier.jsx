import "./Panier.css";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

export default function Panier({ panier, majPanier, deleteItem }) {
  const [isOpen, setIsOpen] = useState(true);
  const total = (panier || []).reduce(
    (acc, foodType) => acc + foodType.amount * foodType.price,
    0
  );
  const counter = useRef(0);
  const { t } = useTranslation();
  
  useEffect(()=>{
    counter.current++;
    console.log(`nb refresh ${counter.current}`)
  }
)

  return isOpen ? (
    <div className="hanoi-panier">
      <button
        className="panier-toggle"
        onClick={() => setIsOpen(false)}
      >
        -
      </button>
      {(panier || []).length > 0 ? (
        <div>
          <ul>
            {panier.map(({ name, price, amount }, index) => (
              <li key={`${name}-${index}`} className="panier-item">
                {name} {price}$ x {amount}
                
                <button 
                  className="food-delete"
                  onClick={() => deleteItem(name)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
          <h3>{t('panier.total')}{total}$</h3>
          <button className="panier-vider" onClick={() => majPanier([])}>{t('panier.vider')}</button>
        </div>
      ) : (
        <div>{t('panier.commencer')}</div>
      )}
    </div>
  ) : (
    <div className="panier-open">
      <button
        className="panier-toggle"
        onClick={() => setIsOpen(true)}
      >
        +
      </button>
    </div>
  );
}
