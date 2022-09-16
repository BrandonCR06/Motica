import './App.css';

import Historia from './static/Historia'
import Home from './Home'
import Organigrama from './static/Organigrama'
import Descripcion from './static/Descripcion'
import Faq from './static/Faq'
import Ubicacion from './static/Ubicacion'
import Catalogo from './dynamic/Catalogo';
import Carrito from './dynamic/Carrito';
import Login from './dynamic/Login';
import Facturacion from './dynamic/Facturacion';
import Gestion from './dynamic/Gestion';


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
