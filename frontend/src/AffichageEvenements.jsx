import { useState, useEffect } from 'react'
import { Link } from 'react-router'

function AffichageEvenements({limite, titre=true}){
    
    const [evenementsByRow, setEvenementsByRow] = useState([])

    useEffect(() => {
        fetch('http://localhost:5984/biblio-reseau/_all_docs?include_docs=true')
        .then(x => x.json())
        .then(data => {
            const evenements = data.rows.filter(x => x.doc.objectType == "evenement")
            const evenementsAffiches = limite
              ? evenements.slice(0, limite)
              : evenements
            setEvenementsByRow(
                Object.values(
                    Object.groupBy(evenementsAffiches, (x, i) => Math.floor(i/3))
                )
            )
        })
    }, [])
    
    return (
      <main>
        { titre? (<h1>Tableau d'affichage des évènements</h1>) : ('')}
        <div className='container big-list'>
                {evenementsByRow.map((x, i) =>

                    <div key={i} className="grid headlines">
                        {x.map(({doc}, j) =>
              <MiniatureEvenement {...doc} key={j} />
            )}
          </div>
        )}
        </div>
        </main>
    ) 
}


function MiniatureEvenement({title, issued, lieu, _id}){
    return (
    <div className='headline'>
      <Link to={'/evenements/' + _id}>
        <h3>{title}</h3>
      </Link>
       <p>Date : {issued}</p>
       <p>Lieu : {lieu}</p>
    </div>
  )
}

export default AffichageEvenements