import { useState, useEffect } from 'react'
import { Link } from 'react-router'

function AffichageDocuments({limite, titre=true}){

  const [documentsByRow, setDocumentsByRow] = useState([])

    useEffect(() => {
        fetch('http://localhost:5984/biblio-reseau/_all_docs?include_docs=true')
        .then(x => x.json())
        .then(data => {
            const documents = data.rows.filter(x => x.doc.objectType == "document")
            const documentsAffiches = limite
              ? documents.slice(0, limite)
              : documents
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
                        {x.map(({doc}, j) =>
              				<MiniatureDocument {...doc} key={j} />
            			)}
          			</div>
        		)}
       		</div>
        </main>
    ) 
}


function MiniatureDocument({title, creator, type, tags, _id}) {
  return (

    <div className='headline'>
 
      <Link to={'/documents/' + _id}>
        <h3>{title}</h3>
      </Link>
      <p>Auteur : {creator}</p>
      <p>Type : {type}</p>
       <div className="tags">
        {tags ? tags.map((t, i) => (
          <span className="tag" key={i}>
            {t}
          </span>
        )) : ""}
      </div>
    </div>
  )
}

export default AffichageDocuments