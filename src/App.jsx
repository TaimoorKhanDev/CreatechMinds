import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Header from './Components/Header'
import About from './Components/About'
import { Services } from './Components/Services'
import { Project } from './Components/Project'
import { Blogs } from './Components/Blogs'
import { Contact } from './Components/Contact'
import { Footer } from './Components/Footer'

function App() {
  

  return (
    <BrowserRouter>
    
    <div className='bg-dark'>
    <div>
    <Header/>
    </div>
      <Home id='home' />
      <About  id='about' />
      <Services id='services'  />
      <Project id='portfolio'/>
      <Blogs id='blog'/>
      <Contact id='contact'/>
      <div className='h-20'></div>
      <Footer />
    </div>
     </BrowserRouter>  
  )
}

export default App
