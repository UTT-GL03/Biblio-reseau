import data from './assets/sample_data.json'
import { Link } from 'react-router'

function Headlines(){
    const documentsByRow = Object.values(
    Object.groupBy(data.documents, (x, i) => Math.floor(i/3))
  )
    return (
        <main className='container'>
                {documentsByRow.map((x, i) =>
                    <div key={i} className="grid">
                        {x.map((y, j) =>
              <Headline {...y} key={j} />
            )}
          </div>
        )}
        </main>
    ) 
}
    
    
function Headline({title, creator, type, tags, identifiant}) {
  return (
    <div>
      <Link to={identifiant}>
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

export default Headlines