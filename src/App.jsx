import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router'
import Headlines from "./Headlines"
import Documents from './Documents'

function App() {

  return (
    <BrowserRouter>
       <header>
        <Link to="/">
         <h1>
          Tableau d'affichage
        </h1>
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<Headlines/>} />
        <Route path="/:id" element={<Documents/>} />
      </Routes>
    </BrowserRouter>
  )
}




export default App
