import './App.css';
import houseImgPath from './mari.jpeg'
import carrito from './cart.svg'

function Historia() {

  return (
    <body style ={{minWidth:"100%" }} class=" overflow-auto coverContainer bg-dark">
 
     {/*Navbar*/}
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
        <li>-</li>
        <li class="nav-item">
          <a href="/Login" class="btn btn-default  btn-outline-dark bg-success" width="30" height="25">Iniciar Sesión</a>

        </li>
      </ul>
                        
     </nav>
      
      {/*Contenido con el titulo e historia*/}
      <div class="">
      <div class= "text-success position-relative backgroundDescription">
          <br/>
        <br/>
          <h1>Descripción del sitio</h1>
            <br/>
            <br/>
            <div class = "text-white position-relative parrafo">
            <p>
            Motica se fundó en el año 2022 con el fin de impulsar, modernizar y popularizar el
          negocio de las ventas de cannabis y sus productos derivados. 
          Iniciamos lanzando nuestros primeros productos prácticamente solo enfocados en el consumo de forma
          tradicional, pero hoy en día somos los más grandes distribuidores de todo tipo de
          productos derivados del cannabis, nuestra empreza va desde la gastronomía hasta el
          uso medicinal y por supuesto su forma más básica, el consumo tradicional de puros.
          Esta empresa en poco tiempo se ha consolidado como la más importante vendedora
          del país y ha colaborado con la educación sobre el consumo adecuado y responsable
          de nuestro producto, asi como el combate contra el tabú formado alrededor de este.
            </p>
            </div>
          </div>
      </div> 

  
      {/*Footer*/}
      <section class="">
      <footer class="backgroundNavbar text-white text-center fixed-bottom">
          <div class="container p-0">
            <div class="row">

              <div class="col-lg-6 col-md-6 mb-4 mb-md-0">

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

export default Historia;