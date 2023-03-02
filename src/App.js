//React
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom'
//Componentes importados
import Cards from "./components/Cards/Cards.jsx"
import NavBar from "./components/Nav/NavBar.jsx"
import About from "./components/About/About.jsx"
import Detail from './components/Detail/Detail.jsx'
import Form from './components/Form/Form.jsx'
import Favorites from './components/Favorites/Favorites.jsx'

// Estilos importados
// import './App.css'



function App() {
  const [access, setAccess] = useState(false)
  const [characters, setCharacters] = useState([])
  const navigate = useNavigate()
  const username = ""
  const password = ""



  const login = (userData) => {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
      return true
    } else {
      return false
    }
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }

  function onClose(id) {
    setCharacters(characters.filter(elemento => elemento.id !== id))
  }

  const { pathname } = useLocation()

  const renderizarNavBar = () => {
    if (pathname != "/") {
      return (
        <NavBar onSearch={onSearch} />
      )
    } else {
      return null
    }
  }

  return (
    <div className='app'>
      {renderizarNavBar()}
      <Routes>
        <Route path='/' element={<Form login={login}/>} />
        <Route path='/detail/:detailId' element={<Detail />} />
        <Route path='/about' element={<About />} />
        <Route path='/home' element={ <Cards characters={characters} onClose={onClose} />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </div>
  )
}


export default App
