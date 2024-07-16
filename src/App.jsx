import './App.css'
import About from './components/About'
import Certifications from './components/Certifications'
import Contacts from './components/Contacts'
import Dashboard from './components/Dashboard'
import Experince from './components/Experince'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Projects from './components/projects'

function App() {
  
  return (
    <div className='bg-diagonal-gradient'>
     <Navbar/>
     <Dashboard/>
     <About/>
     <Projects/>
     <Experince/>
     <Certifications/>
     <Contacts/>
    </div>
  )
}

export default App
