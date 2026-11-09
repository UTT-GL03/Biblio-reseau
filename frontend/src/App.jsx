import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router'
import Headlines from "./Headlines"
import Documents from './Documents'
import Evenements from './Evenements'
import AffichageEvenements from "./affichageEvenement"

function CoupDeCoeur() {
  return (
    <main className="container">
      <Headlines limite={3} />
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
        <Link to="/documents/">
         <h1>
          Tableau d'affichage
        </h1>
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<CoupDeCoeur />} />
        <Route path="/documents/" element={<Headlines/>} />
        <Route path="/documents/:id" element={<Documents/>} />
      </Routes>
      
        <header>
        <Link to="/evenements/">
         <h1>
          Tableau d'affichage des événements
        </h1>
        </Link>
      </header>
        <Routes>
          <Route path="/" element={<DernierEvent />} />
          <Route path="/evenements/" element={<AffichageEvenements/>} />
          <Route path="/evenements/:id" element={<Evenements/>} />
        </Routes>
    </BrowserRouter>
  )
}




export default App