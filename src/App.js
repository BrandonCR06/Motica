import './App.css';

import Historia from './Historia'
import Home from './Home'
import Organigrama from './Organigrama'
import Descripcion from './Descripcion'
import Faq from './Faq'
import Ubicacion from './Ubicacion'
import Catalogo from './Catalogo';
import Carrito from './Carrito';
import Login from './Login';
import Facturacion from './Facturacion';
import Gestion from './Gestion';


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
            <Route path='/Catalogo' element={<Catalogo/>} />
            <Route path='/Login' element={<Login/>} />
            <Route path='/Facturacion' element={<Facturacion/>} />
            <Route path='/Carrito' element={<Carrito/>} />
            <Route path='/Gestion' element={<Gestion/>} />
            <Route path='/' element={<Home/>} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
