import "./OneAvis.css";

const OneAvis = (props) => {
    return (
        <li className="one-avis-item">
            <div className="avis-card">
                <p className="avis-description">"{props.description}"</p>
                <div className="avis-footer">
                    <span className="avis-creator">— {props.creatorName}</span>
                </div>
            </div>
        </li>
    );
};

export default OneAvis;