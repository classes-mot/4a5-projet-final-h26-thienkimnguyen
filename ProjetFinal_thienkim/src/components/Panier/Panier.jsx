import "./Panier.css";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

export default function Panier({ panier, majPanier, deleteItem }) {
  const [isOpen, setIsOpen] = useState(true);
  const total = (panier || []).reduce(
    (acc, foodType) => acc + foodType.amount * foodType.price,
    0
  );
  const counter = useRef(0);
  
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
          <h3>Total :{total}$</h3>
          <button className="panier-vider" onClick={() => majPanier([])}>Vider</button>
        </div>
      ) : (
        <div>Commencer à commander</div>
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
