import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router'

import AffichageEvenements from './AffichageEvenements'
import AffichageDocuments from './AffichageDocuments'
import DetailsDocument from './DetailsDocument'
import DetailsEvenement from './DetailsEvenement'

function CoupDeCoeur() {
  return (
    <main>
      <h1>Tableau d'affichage</h1>
    <div className="container">
        <Link to="/documents">
         <h2>
          Nos derniers documents
        </h2>
        </Link>
      <AffichageDocuments limite={3} titre={false} />
      </div>
    </main>
  )
}

function DernierEvent() {
  return (
    <main className="container">
        <Link to="/evenements">
         <h2>
          Nos derniers évènements
        </h2>
        </Link>
      <AffichageEvenements limite={3} titre={false} />
    </main>
  )
}

function Navigation() {
  return (
    <main className='grid center navigation'>
      <Link to="/">
         <h6>
          Tableau d'affichage
        </h6>
        </Link>
      <Link to="/documents">
         <h6>
          Documents
        </h6>
        </Link>
        <Link to="/evenements">
         <h6>
          Évènements
        </h6>
        </Link>
    </main>
  )
}

function App() {

  return (
    <BrowserRouter>
      <header><Navigation /></header>
       
        <Routes>
          <Route path="/" element={<CoupDeCoeur />} />
          <Route path="/documents" element={<AffichageDocuments/>} />
          <Route path="/documents/:id" element={<DetailsDocument/>} />
        </Routes>
      
        <Routes>
          <Route path="/" element={<DernierEvent />} />
          <Route path="/evenements" element={<AffichageEvenements/>} />
          <Route path="/evenements/:id" element={<DetailsEvenement/>} />
        </Routes>
    </BrowserRouter>
  )
}




export default App