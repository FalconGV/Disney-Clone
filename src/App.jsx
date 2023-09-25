import './App.css'
import GenreMovieList from './Componets/GenreMovieList'
import Header from './Componets/Header'
import ProductionHouse from './Componets/ProductionHouse'
import Slider from './Componets/Slider'

function App() {

  return (
    <div>
      <Header/>
      <Slider/>
      <ProductionHouse/>
      <GenreMovieList/>
    </div>
  )
}

export default App
