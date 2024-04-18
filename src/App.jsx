import React,{useState} from 'react'
import './App.css'
import Navbar from './Education/Navbar/Navbar'
import Hero from './Education/Hero/Hero'
import Footer from './Education/Footer/Footer'
import Programs from './Education/Programs/Programs'
import Title from './Education/Title/Title'
import About from './Education/About/About'
import Campus from './Education/Campus/Campus'
import Testimonials from './Education/Testimonials/Testimonials'
import Contact from './Education/Contact/Contact'
import { AnimatePresence} from 'framer-motion'
import PlayVideo from './Education/PlayVideo/PlayVideo'
const App = () => {
  const[play, setPlay] = useState(false)
  return (
    <div>
      <AnimatePresence>

      <Navbar/>
      <Hero/>
      <div className='contained'>
      <Title subtitle='Our PROGRAM'title='What We Offer'/>
      <Programs />
      </div> <div className='contained'>
      <About setPlay={setPlay}/>
      </div>
      <Title subtitle='Gallery 'title='Campus Photos'/>
      <Campus/>
      <Title subtitle='TESTIMONIALS 'title='What Student Says'/>
      <Testimonials/>
      <Title subtitle='Contact us 'title='Get in Touch'/>
      <Contact/>
      <PlayVideo  play={play} setPlay={setPlay}/>
      <Footer/>
      </AnimatePresence>
    </div> 
  )
}

export default App
