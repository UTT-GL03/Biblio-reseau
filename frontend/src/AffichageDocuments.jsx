import { useState, useEffect } from 'react'
import { Link } from 'react-router'

function AffichageDocuments({limite, titre=true}){

  const [documentsByRow, setDocumentsByRow] = useState([])

    useEffect(() => {
        fetch('/sample_data.json')
        .then(x => x.json())
        .then(data => {
            const documentsAffiches = limite
              ? data.documents.slice(0, limite)
              : data.documents
            setDocumentsByRow(
                Object.values(
                    Object.groupBy(documentsAffiches, (x, i) => Math.floor(i/3))
                )
            )
        })
    }, [])

    return (
      <main>
        { titre? (<h1>Tableau d'affichage des documents</h1>) : ('')}
        <div className='container big-list'>
                {documentsByRow.map((x, i) =>

                    <div key={i} className="grid headlines">
                        {x.map((y, j) =>
              <MiniatureDocument {...y} key={j} />
            )}
          </div>
        )}
        </div>
        </main>
    ) 
}


function MiniatureDocument({title, creator, type, tags, identifiant}) {
  return (

    <div className='headline'>
 
      <Link to={'/documents/' + identifiant}>
        <h3>{title}</h3>
      </Link>
      <p>Auteur : {creator}</p>
      <p>Type : {type}</p>
       <div className="tags">
        {tags.map((t, i) => (
          <span className="tag" key={i}>
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

export default AffichageDocuments