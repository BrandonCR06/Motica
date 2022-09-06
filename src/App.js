import './App.css';

import Historia from './Historia'
import Home from './Home'

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
  <div className="App">
        <BrowserRouter> 
          <Routes> 
            <Route path='/Historia' element={<Historia/>} />
            <Route path='/' element={<Home/>} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
