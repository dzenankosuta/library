import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route } from "react-router"
import Home from './pages/Home'
import Books from './pages/Books'

function App() {
  return (
    <div className="app-container">
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/books' element={<Books/>} />
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App
