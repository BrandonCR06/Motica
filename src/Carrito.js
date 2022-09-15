import './App.css';
import houseImgPath from './mari.jpeg' // replace with your own path

function Carrito() {
  return (


    <body class=" coverContainer bg-dark">
 
     <nav class="navbar  navbar-expand-sm backgroundNavbar" >
      <a href="/" class="navbar-brand text-white">
       <img alt="House" src={houseImgPath} width="30" height="30"/> moTICA      
      </a>  
      
      <ul class="navbar-nav ms-auto">
        
        <li class="nav-item">
          <a href="/Login" class="btn btn-default  btn-outline-dark bg-success " width="30" height="25">Usuario</a>

        </li>
      </ul>
                        
     </nav>
      

       
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

export default Carrito;
