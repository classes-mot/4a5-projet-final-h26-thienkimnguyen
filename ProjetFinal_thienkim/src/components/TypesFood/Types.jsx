import "./Types.css";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

function Types({ types, setTActive }) {
    const { t } = useTranslation();

    return (
        <div className="food-types">
            <select 
                className="types-select"
                onChange={(e) => setTActive(e.target.value)}
            >
                <option key="default-option" value="">
                    {t('commander.type')}
                </option>
                {types.map((type, index) => (
                    <option key={`${type}-${index}`} value={type}>
                        {t(`categories.${type}`)}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Types;