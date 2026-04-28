import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import Ex01 from './pages/Ex01'
import Ex02 from './pages/Ex02'

function App() {
  

  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Ex01" element={<Ex01 />} />
        <Route path="/Ex02" element={<Ex02 />} />
      </Routes>
    <Footer />
      
    </>
  )
}

export default App
