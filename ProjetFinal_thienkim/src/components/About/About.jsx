import "./About.css";

function About() {
  function handleAddressClick(event) {
    event.preventDefault();
    alert("Mauvaise nouvelle! Nous sommes actuellement en rénovation à cet emplacement.");
  }

  return (
    <div className="about-container">
      <h2 className="about-title">Bienvenue sur notre page!</h2>

      <div className="about-information">
        <p>
          Notre restaurant souhaite partager et vous faire découvrir la cuisine vietnamienne authentique.<br />
          Explorez avec nous les différentes saveurs du Vietnam.<br />
          Cherchez et commandez ici!
        </p>
      </div>

      <hr className="about-divider" />

      <h2 className="about-title">Partagez, Goûtez, Mangez</h2>

      <div className="about-information">
        <p>
          Vous préférez ne pas commander en ligne?<br />
          Venez nous rendre visite au restaurant à : <br />
          <a href="#" onClick={handleAddressClick} className="address-link">
            1234 Rue de Saigon, Laval, QC H2V 3P4
          </a>
        </p>

        <p>
          Vous ne savez pas quand nous sommes ouverts ? <br />
          Nous sommes ouverts tous les jours, sauf les <strong>fins de semaine</strong>, afin de permettre à notre 
          personnel de se reposer et de préparer le service de la semaine.
        </p>

        <h3>Ouverture</h3>

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
          En raison de problèmes techniques, nous ne pouvons actuellement 
          pas accueillir de clients au restaurant.
        </p>
        <p className="highlight-text">
          Bonne nouvelle! Nous prenons toujours les commandes en ligne!
        </p>
      </div>

        <hr></hr>

      <div className="about-application">
        <h3>
            Découvrez nos collaborateurs!
        </h3>
        <p>
            Au cœur de notre restaurant se trouve une famille de deux personnes, 
            originaires du sud du Vietnam. Notre cuisine est dirigée par un couple 
            passionné qui partage le savoir-faire culinaire, échangeant souvent 
            les rôles pour sublimer chaque plat. Nous sommes également épaulés 
            par une équipe de personnes ferventes qui partagent un amour profond 
            pour la cuisine vietnamienne. 
        </p>

        <p>
            Bien que nous n'ayons actuellement aucun 
            poste à pourvoir, nous vous invitons à consulter régulièrement 
            notre page pour être informé(e) des prochaines opportunités.
        </p>
      </div>
    </div>
  );
}

export default About;