import React,{useState} from 'react'
import Main from './Portfolio/Components/Main/Main';
import About from './Portfolio/Components/About/About';
import Projects from './Portfolio/Components/Projects/Projects';
import Contact from './Portfolio/Contact/Contact';
import Works from './Portfolio/Components/Works/Works';
import Footer from './Portfolio/Components/Footer/Footer';
import { FaSun, FaMoon } from 'react-icons/fa';
import './App.css'
import ScrollProgress from './Portfolio/Components/ScrollProgress';
import { CircularProgress } from '@mui/material';
import CircularScrollProgress from './Portfolio/Components/CirrcularScrollProgress';
const App = () => {
    const [theme, setTheme] = useState('dark')
  return (
    <div style={{position:'relative'}} className={`${theme} === 'light' ? 'light' : 'dark'  `} >
        <ScrollProgress  />  
        <CircularScrollProgress/>  
        <Main theme={theme}/>
      <div className='theme'>
               { theme === 'dark' &&  <FaSun  className="sun" onClick={()=> setTheme('light')}/>}
               { theme === 'light' &&  <FaMoon className="moon" onClick={()=> setTheme('dark')} />}
      </div>
            <About/>
            <Projects theme={theme}/>
            <Works theme={theme}/>
            <Contact theme ={theme}/>
            <Footer/>
            
    </div>
  )
}

export default App;