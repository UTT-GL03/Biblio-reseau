import { useParams, Link } from 'react-router'
import data from './assets/sample_data.json'

function Evenements() {
  const { id } = useParams()
   const titreRecherche = decodeURIComponent(id)

  const evenement = data.evenements.find(
     x => x.title === titreRecherche
  )

  if (!evenement) {
    return (
      <main className="container">
        <h2>Événement introuvable</h2>
        <Link to="/">Retour à l'accueil</Link>
      </main>
    )
  }

  const { title, creator, issued, type, lieu, description } = evenement

  return (
    <main className="container">
      <h2>{title}</h2>
      <p>Créateur : {creator}</p>
      <p>Date : {issued}</p>
      <p>Type : {type}</p>
      <p>Lieu : {lieu}</p>
      <p>Description de l'événement : {description}</p>

      <Link to="/">Retour à l'accueil</Link>
    </main>
  )
}

export default Evenements