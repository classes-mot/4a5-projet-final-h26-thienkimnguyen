import "./foodItem.css";

function foodItem(props) {
    return (
        <div className="food-item">
        <img 
            className="food-item-cover"
            src={props.cover}
            alt={`${props.name} cover`}>
        </img>
        <div className="food-item-info">
            <span className="food-item-name">
                {props.name}
            </span>
            <span className="food-item-price">
                {props.price}$
            </span>
        </div>
        <div>
            {props.children}
        </div>
    </div>
    )
    
}

export default foodItem;
