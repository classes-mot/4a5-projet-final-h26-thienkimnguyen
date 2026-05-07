import { foodList } from "../../data/foodList";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import TypesFood from "../TypesFood/Types";
import FoodItem from "../foodItem/foodItem.jsx";
import "./Commander.css";

function Commander() {
  const { addToPanier } = useOutletContext();
  const [typeActive, setTypeActive] = useState("");
  const types = foodList.reduce(
    (acc, food) => (acc.includes(food.type) ? acc : acc.concat(food.type)),
    [],
  );
  
  return (
    <div className="commander-list">
      <TypesFood types={types} setTActive={setTypeActive} />
      <ul className="food-list">
  {foodList.map((food, index) => !typeActive || food.type === typeActive ? (
      <li key={`${food.id}-${index}`}> 
        <FoodItem
          cover={food.cover}
          name={food.name}
          price={food.price}
        >
          <button className="add-panier" onClick={() => addToPanier(food.name, food.price)}>
            Ajouter
          </button>
        </FoodItem>
        
      </li>
    ) : null
  )}
</ul>
    </div>
  );
}

export default Commander;
