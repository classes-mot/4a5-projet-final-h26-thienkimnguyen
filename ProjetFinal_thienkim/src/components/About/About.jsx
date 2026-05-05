import "./About.css";

function About() {
  function handleAddressClick(event) {
    event.preventDefault();
    alert("Mauvaise nouvelle! Nous sommes actuellement en rénovation à cet emplacement.");
  }

  return (
    <div className="about-container">
      <h2 className="about-title">Bienvenue à Hanoi Maison !</h2>

      <div className="about-information">
        <p>
          Découvrer l'authencité de la cuisine vietnamienne à travers nos saveurs artisinales<br />
          Explorez notre menu et commandez dès maintenant !
        </p>
      </div>

      <hr className="about-divider" />

      <h2 className="about-title">Partagez, Goûtez, Mangez</h2>

      <div className="about-information">
        <p>
          Vous préférez ne pas commander en ligne?<br />
          Venez nous rendre visite au restaurant au : <br />
          <a href="#" onClick={handleAddressClick} className="address-link">
            1234 Rue de Saigon, Laval, QC H2V 3P4
          </a>
        </p>

        <p>
          Nous sommes ouverts tous les jours, sauf les <strong>fins de semaine</strong>.<br />
          Ce temps de repos permet à notre équipe de se préparer pour mieux vous servir durant la semaine.
        </p>

        <hr></hr>

        <h2>Ouverture</h2>

        <div className="openings">
            <p>
                Lundi - Vendredi <br/>
                10h - 22h
            </p>

            <p>
                Samedi & Dimanche <br/>
                9h30 - 21h
            </p>
        </div>
        
      </div>

      <hr className="about-divider" />

      <div className="about-nouvelle">
        <h3>Nouvelles!</h3>
        <p>
          En raison de contraintes techniques imprévues, notre salle à manger est temporairement fermée. 
        </p>
        <p className="highlight-text">
          Bonne nouvelle ! Notre cuisine reste ouverte et nous continuons de prépaprer vos plats préférés.
          Les commandes en lignes sont toujous disponibles !
        </p>
      </div>

        <hr></hr>

      <div className="about-application">
        <h3>
            Découvrez nos collaborateurs!
        </h3>
        <p>
            Porté par une famille du sud du Vietnam, notre restaurant est le fruit du travail d'un couple passionné et d'une équipe dévouée. 
            Ensemble, nous unissons notre savoir-faire pour sublimer l'authenticité de la cuisine vietnamienne. 
        </p>

        <h3>Carrières</h3>

        <p>
            
            Aucun poste n'est disponible pour le moment, 
            mais n'hésitez pas à nous suivre pour nos futures opportunités
        </p>
      </div>
    </div>
  );
}

export default About;