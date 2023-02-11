import {Routes, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Store } from './pages/Store';
import {Navbar} from './components/Navbar'
import { TechCartProvider } from './context/TechCartContext';
function App() {
  return (  
  <TechCartProvider>
  <Navbar />
  <Container className='mb-4'>
    <Routes>
    <Route path='/'  element={<Home/>}/>
    <Route path='/store' element={<Store/>}/>
    <Route path='/about' element={<About/>}/>
    </Routes>
  </Container>
  </TechCartProvider>
  )
  ;
}

export default App;
