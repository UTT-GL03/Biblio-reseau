import { useParams } from 'react-router'
import data from '../assets/sample_data.json'

function Documents() {
  const {id} = useParams()
  const {title, creator, issued, content, editeur, disponibility,identifiant,type,tags, langue} =
    data.documents.find(x => String(x.identifiant)===id )

  return (
    <main className="container document">
      <h2>{title}</h2>
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
    </main>
  )
}

export default Documents
   