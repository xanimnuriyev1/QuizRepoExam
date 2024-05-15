import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './layout/Header'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Offer from './pages/offer/Offer'
import Menu from './pages/menu/Menu'
import News from './pages/news/News'
import Gallery from './pages/gallery/Gallery'
import Contact from './pages/contact/Contact'
import Footer from './layout/Footer'


function App() {

  return (
    <>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/offer' element={<Offer/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/news' element={<News/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/contact' element={<Contact/>}/>
     </Routes>
    </>
  )
}

export default App
