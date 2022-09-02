import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="">

      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Motica</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
              <a class="nav-link" href="#">Preguntas frecuentes</a>
              <a class="nav-link" href="#">¿Quienes somos?</a>
              <a class="nav-link" href>Contactos</a>
            </div>
          </div>
        </div>
      </nav>

      <h2 className='text-center'>Bienvenido a motica, la mejor mota de costa rica</h2>
      
      <div class="text-center">
        <img class="rounded" src="https://www.revistamoi.com/wp-content/uploads/2018/04/mota-1024x580.jpg" alt="..."></img>
      </div>

      
    </div>
  );
}

export default App;
