import data from './assets/sample_data.json'
import { Link } from 'react-router'

/**Affichage des événements */
function AffichageEvenements(){
  const evenementsByRow = Object.values(
    Object.groupBy(data.evenements, (x, i) => Math.floor(i/3))
  )
    return (
        <main className='container'>
               {evenementsByRow.map((x, i) =>
                    <div key={i} className="grid">
                        {x.map((y, j) =>
              <Event {...y} key={j} />
            )}
          </div>
        )}
        </main>
    ) 
}

function Event({title, type, issued, lieu}){
    return (
    <div>
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