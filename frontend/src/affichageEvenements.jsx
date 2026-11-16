import { useState, useEffect } from 'react'
import { Link } from 'react-router'

/**Affichage des événements */
function AffichageEvenements({limite, titre=true}){
    
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
      <main>
        { titre? (<h1>Tableau d'affichage des évènements</h1>) : ('')}
        <div className='container'>
                {evenementsByRow.map((x, i) =>

                    <div key={i} className="grid headlines">
                        {x.map((y, j) =>
              <MiniatureEvenement {...y} key={j} />
            )}
          </div>
        )}
        </div>
        </main>
    ) 
}


function MiniatureEvenement({title, type, issued, lieu}){
    return (
    <div className='headline'>
      <Link to={`/evenements/${encodeURIComponent(title)}`}>
        <h3>{title}</h3>
      </Link>
      <p>Type : {type}</p>
       <p>Date : {issued}</p>
       <p>Lieu : {lieu}</p>
    </div>
  )
}

export default AffichageEvenements