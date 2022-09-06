import './App.css';

import Historia from './Historia'
import Home from './Home'
import Organigrama from './Organigrama'
import Descripcion from './Descripcion'
import Faq from './Faq'
import Ubicacion from './Ubicacion'

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
  <div className="App">
        <BrowserRouter> 
          <Routes> 
            <Route path='/Historia' element={<Historia/>} />
            <Route path='/Organigrama' element={<Organigrama/>} />
            <Route path='/Descripcion' element={<Descripcion/>} />
            <Route path='/Faq' element={<Faq/>} />
            <Route path='/Ubicacion' element={<Ubicacion/>} />
            <Route path='/' element={<Home/>} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
