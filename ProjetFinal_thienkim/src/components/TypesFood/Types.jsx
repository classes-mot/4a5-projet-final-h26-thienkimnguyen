import "./Types.css";

function Types({ types, setTActive }) {
    return (
        <div className="food-types">
            <select 
                className="types-select"
                onChange={(e) => setTActive(e.target.value)}
            >
                <option key="default-option" value="">
                    Type de plat
                </option>
                {types.map((type, index) => (
                    <option key={`${type}-${index}`} value={type}>
                        {type}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Types;