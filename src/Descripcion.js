import './App.css';
import houseImgPath from './mari.jpeg' // replace with your own path
import carrito from './cart.svg' // replace with your own path

function Descripcion() {

  return (
    <body style ={{minWidth:"100%" }} class=" overflow-auto coverContainer bg-dark">
 
     <nav class="navbar  navbar-expand-sm backgroundNavbar" >
      <a href="/" class="navbar-brand text-white">
       <img alt="House" src={houseImgPath} width="30" height="30"/> moTICA      
      </a>  
      
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a href="/Login" class="btn btn-default  btn-outline-dark bg-white "> Carrito
            <img src={carrito} alt="logo" width="30" height="25" />
          </a>
                  
        </li>
        
        <li class="nav-item">
          <a href="/Login" class="nav-link bg-success " width="30" height="25">Iniciar Sesión</a>

        </li>
      </ul>
                        
     </nav>

     <div class= "text-success position-relative backgroundDescription">
        <br/>
       <br/>
        <h1>Descripción del sitio</h1>
          <br/>
          <br/>
          <div class = "text-white position-relative parrafo">
          <p>Se conoce con el nombre de cannabis con sus variantes, sativa e índica, una planta, conocida en botánica como Cannabis sativa que ha sido utilizada desde la antigüedad por sus propiedades. La planta se ha usado y se usa actualmente con diferentes fines: recreativos, medicinales e industriales se puede utilizar para confeccionar ropa, cuerda, zapatos, papel y otros. <br/> Nuestra empresa se encarga de comerciar de forma legal el cannabis en todas sus formas aplicativas. Nuestro objetivo es dominar el mercado de dicho producto y polularizar su uso como cualquier otra droga recreativa anteriormente legalizada, con el fin de eliminar el tabú creado alrededor de este. Dicho objetivo también conlleva campañas de conscienciación sobre su uso.</p>
          </div>
        </div>

   
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

export default Descripcion;
