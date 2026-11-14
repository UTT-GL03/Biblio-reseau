import { useState, useEffect } from 'react'
import { Link } from 'react-router'

/**Affichage des événements */
function AffichageEvenements({limite}){
    
    const [evenementsByRow, setEvenementsByRow] = useState([])

    useEffect(() => {
        fetch('/sample_data.json')
        .then(x => x.json())
        .then(data => {
            const evenementsAffiches = limite
              ? data.evenements.slice(0, limite)
              : data.evenements
            setEvenementsByRow(
                Object.values(
                    Object.groupBy(evenementsAffiches, (x, i) => Math.floor(i/3))
                )
            )
        })
    }, [])
    
    return (
        <main className='container'>
               {evenementsByRow.map((x, i) =>
                    <div key={i} className="grid headlines">
                        {x.map((y, j) =>
              <MiniatureEvenement {...y} key={j} />
            )}
          </div>
        )}
        </main>
    ) 
}


function MiniatureEvenement({title, type, issued, lieu}){
    return (
    <div className='headline'>
      <Link to={`/evenements/${encodeURIComponent(title)}`}>
        <h2>{title}</h2>
      </Link>
      <p>Type : {type}</p>
       <p>Date : {issued}</p>
       <p>Lieu : {lieu}</p>
    </div>
  )
}

export default AffichageEvenements