import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router'

import AffichageEvenements from './AffichageEvenements'
import AffichageDocuments from './AffichageDocuments'
import DetailsDocument from './DetailsDocument'
import DetailsEvenement from './DetailsEvenement'

function CoupDeCoeur() {
  return (
    <main className="container">
      <AffichageDocuments limite={3} />
    </main>
  )
}

function DernierEvent() {
  return (
    <main className="container">
      <AffichageEvenements limite={3} />
    </main>
  )
}

function App() {

  return (
    <BrowserRouter>
       <header>
        <Link to="/documents">
         <h1>
          Tableau d'affichage
        </h1>
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<CoupDeCoeur />} />
        <Route path="/documents" element={<AffichageDocuments/>} />
        <Route path="/documents/:id" element={<DetailsDocument/>} />
      </Routes>
      
        <header>
        <Link to="/evenements">
         <h1>
          Tableau d'affichage des événements
        </h1>
        </Link>
      </header>
        <Routes>
          <Route path="/" element={<DernierEvent />} />
          <Route path="/evenements" element={<AffichageEvenements/>} />
          <Route path="/evenements/:id" element={<DetailsEvenement/>} />
        </Routes>
    </BrowserRouter>
  )
}




export default App