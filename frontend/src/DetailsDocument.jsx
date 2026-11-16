import { useParams, Link } from 'react-router'
import { useState, useEffect } from 'react'

function DetailsDocument() {
    const {id} = useParams()
    const [document, setDocument] = useState({tags : []})

    useEffect(() => {
      fetch('/sample_data.json')
        .then(x => x.json())
        .then(data => {
          setDocument(data.documents.find(x => String(x.identifiant)===id))
        })

    }, [id])

  	const {title, creator, issued, content, editeur, disponibility, identifiant, type, tags, langue} = document

	console.log()

  	return (
		<main className="container document">
		<h3>{title}</h3>
		<p>Auteur : {creator}</p>
		<p>Type : {type}</p>
		<p>Langue : {langue}</p>
		<p className='date'>Date de parution : {issued}</p>
		<p>Edité par : {editeur}</p>
		<p>Disponibilité : {disponibility}</p>
		<p>Identifiant : {identifiant}</p>
		<div className="tags">
			{tags.map((t, i) => (
			<span className="tag" key={i}>
				{t}
			</span>
			))}
		</div>
		<div className='content'>{content}</div>

      	<Link to="/" className='bouton go-back'>Retour à l'accueil</Link>
		</main>	
  	)
}

export default DetailsDocument
   