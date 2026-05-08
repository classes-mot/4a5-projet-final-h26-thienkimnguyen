import "./About.css";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

function About() {
  const { t } = useTranslation();
  function handleAddressClick(event) {
    event.preventDefault();
    alert("Mauvaise nouvelle! Nous sommes actuellement en rénovation à cet emplacement.");
  }

  return (
    <div className="about-container">
      <h2 className="about-title">{t('propos.bienvenue')}</h2>

      <div className="about-information">
        <p>
          {t('propos.information_1')}
          <br />
          {t('propos.information_2')}
        </p>
      </div>

      <hr className="about-divider" />

      <h2 className="about-title">{t('propos.h2_title')}</h2>

      <div className="about-information">
        <p>
          {t('propos.information_3')}<br />
          {t('propos.information_4')}<br />
          <a href="#" onClick={handleAddressClick} className="address-link">
            {t('propos.rue')}
          </a>
        </p>

        <p>
          {t('propos.information_5.1')}<strong>{t('propos.information_5.2')}</strong>.<br />
          {t('propos.information_5.3')}
        </p>

        <hr></hr>

        <h2>{t('propos.ouverture_title')}</h2>

        <div className="openings">
            <p>
                {t('propos.ouverture_jours')}<br/>
                10h - 22h
            </p>

            <p>
                {t('propos.ouverture_fin')}<br/>
                9h30 - 21h
            </p>
        </div>
        
      </div>

      <hr className="about-divider" />

      <div className="about-nouvelle">
        <h3>{t('propos.nouvelles')}</h3>
        <p>
          {t('propos.nouvelles_mauvaise')}
        </p>
        <p className="highlight-text">
          {t('propos.nouvelles_bonne')}
        </p>
      </div>

        <hr></hr>

      <div className="about-application">
        <h3>
            {t('propos.application')}
        </h3>
        <p>
           {t('propos.application_information')}
        </p>

        <h3>{t('propos.carriere')}</h3>

        <p>
            {t('propos.carriere_info')}
        </p>
      </div>
    </div>
  );
}

export default About;