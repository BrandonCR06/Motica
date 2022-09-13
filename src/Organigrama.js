import './App.css';
import houseImgPath from './mari.jpeg' // replace with your own path
import carrito from './cart.svg' // replace with your own path

function Organigrama() {

  return (
    <body class=" coverContainer bg-dark">
 
     <nav class="navbar  navbar-expand-sm backgroundNavbar" >
      <a href="/" class="navbar-brand text-white">
       <img alt="House" src={houseImgPath} width="30" height="30"/> moTICA      
      </a>  
      
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a href="/Login" class="btn btn-default  btn-outline-dark bg-white "> Carrito
            <img src={carrito} alt="logo" width="30" height="25"/>
          </a>
                  
        </li>
        
        <li class="nav-item">
          <a href="/Login" class="nav-link bg-success " width="30" height="25">Iniciar Sesión</a>

        </li>
      </ul>
                        
     </nav>
      
      
     <div class="orcontainer">
      <h1 class="level-1 rectangle">Presidencia: Brandon Redondo / Ricardo Soto</h1>
        <ol class="level-2-wrapper">
              <li>
                <h2 class="level-2 rectangle">Marketing: Cristopher Zúñiga</h2>
              </li>
              <li>
                <h2 class="level-2 rectangle">Ventas: Fabián Villalobos</h2>
              </li>
            </ol>
            <ol class="level-2-wrapper">
          <li>
          ...
              <ol class="level-3-wrapper">
                  <li>
                      <h3 class="level-3 rectangle">Innovación: Minion1</h3>
                  </li>
                  <li>
                      <h3 class="level-3 rectangle">Redes: Minion2</h3>
                  </li>
              </ol>
          </li>
          <li>
          ...
              <ol class="level-3-wrapper">
                  <li>
                      <h3 class="level-3 rectangle">Envíos: Jordano Escalante</h3>
                  </li>
                  <li>
                      <h3 class="level-3 rectangle">Entregas:Jordano Esc</h3>
                  </li>
              </ol>
          </li>
      </ol>
     </div>
       
      <section class="">
        <footer class="bg-success text-white text-center fixed-bottom">
          <div class="container p-3">
            <div class="row">

              <div class="col-lg-6 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">Empresa</h5>

                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="/Historia" class="text-white">Historia</a>
                  </li>
                  <li>
                    <a href="/Descripcion" class="text-white">Descripcion del producto</a>
                  </li>
                  <li>
                    <a href="/Organigrama" class="text-white">Organigrama de la empresa</a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-6 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase mb-0">De interes</h5>

                <ul class="list-unstyled">
                  <li>
                    <a href="/Ubicacion" class="text-white">Ubicación</a>
                  </li>
                  <li>
                    <a href="/FAQ" class="text-white">Preguntas frecuentes</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </footer>
      </section>

    </body>

  );
}

export default Organigrama;
