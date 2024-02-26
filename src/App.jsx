import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import Container from './components/Container/Container'
import Footer from './components/Footer/Footer'
function App() {

  return (
    <Container>
        <Navbar />
        <Home />
        <Products />
        <Footer />
    </Container>
  )
}

export default App
