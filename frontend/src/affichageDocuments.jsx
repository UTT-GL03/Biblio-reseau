import { useState, useEffect } from 'react'
import { Link } from 'react-router'

function AffichageDocuments({limite}){

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
        <main className='container'>
                {documentsByRow.map((x, i) =>

                    <div key={i} className="grid headlines">
                        {x.map((y, j) =>
              <MiniatureDocument {...y} key={j} />
            )}
          </div>
        )}
        </main>
    ) 
}


function MiniatureDocument({title, creator, type, tags, identifiant}) {
  return (

    <div className='headline'>

      <Link to={'/documents/' + identifiant}>
        <h2>{title}</h2>
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