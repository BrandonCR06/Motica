import './App.css';
import houseImgPath from './mari.jpeg' // replace with your own path
import carrito from './cart.svg' // replace with your own path

function Home() {
  return (


    <body style ={{minWidth:"100%" }}class=" overflow-auto coverContainer bg-dark">
 
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
          <a href="/Login" class="btn btn-default  btn-outline-dark bg-success " width="30" height="25">Iniciar Sesión</a>

        </li>
      </ul>
                        
     </nav>
      


      
      <div class= " alineadoCentro text-white position-relative">
        <h1>Preguntas Frecuentes</h1>        
        
      </div>
      
      <div  style ={{minWidth:"100%;",minHeight:"100%" }}class = " ">
        
        <div class = "verticalLine bg-dark"></div>
        <div class= " alineadoIzquierda  text-white position-relative">        
          <div class = " bg-gradient text-success"> 
            <h2 class = "izquierda inline position-relative text-success">P.</h2>   
            <p class = " inlinePar position-absolute  "> ¿Los productos cannábicos vendidos son legales?
            </p>                     
          </div>
          <div class = "  position-relative"> 
            <h2 class = "izquierda inline position-relative ">R.</h2>   
            <p class = " inlinePar position-absolute  "> Si, nuestros productos son comercializados bajo la legislación de la república de Costa Rica.       
            </p>                     
          </div>                                    
        </div>

        <div class = "verticalLine bg-dark"></div>
        <div class= " alineadoIzquierda  text-white position-relative">        
          <div class = " bg-gradient text-success"> 
            <h2 class = "izquierda inline position-relative text-success">P.</h2>   
            <p class = " inlinePar position-absolute  "> ¿Solo realizan envíos a Costa Rica?                   
            </p>                     
          </div>
          <div class = "  position-relative"> 
            <h2 class = "izquierda inline position-relative ">R.</h2>   
            <p class = " inlinePar position-absolute  "> Realizamos envíos a países donde la legislación permita el consumo de nuestros productos  
            </p>                     
          </div>                                    
        </div>

        <div class = "verticalLine bg-dark"></div>
        <div class= " alineadoIzquierda  text-white position-relative">        
          <div class = " bg-gradient text-success"> 
            <h2 class = "izquierda inline position-relative text-success">P.</h2>   
            <p class = " inlinePar position-absolute  "> ¿Los productos no son dañinos para la salud?                   
            </p>                     
          </div>
          <div class = "  position-relative"> 
            <h2 class = "izquierda inline position-relative ">R.</h2>   
            <p class = " inlinePar position-absolute  "> El abuso de productos puede ser perjudicial, es por eso que se deben consumir responsablemente                    
            </p>                     
          </div>
                                    
        </div>
               
        <div class = "verticalLine bg-dark"></div>
        <div class= " alineadoIzquierda  text-white position-relative">        
          <div class = " bg-gradient text-success"> 
            <h2 class = "izquierda inline position-relative text-success">P.</h2>   
            <p class = " inlinePar position-absolute  "> ¿Como es un helado cannábico?                   
            </p>                     
          </div>
          <div class = "  position-relative"> 
            <h2 class = "izquierda inline position-relative ">R.</h2>   
            <p class = " inlinePar position-absolute  "> Increíble
            </p>                     
          </div>                                    
        </div>
               
              
        <div class = "verticalLine bg-dark"></div>
        <div class= " alineadoIzquierda  text-white position-relative">        
          <div class = " bg-gradient text-success"> 
            <h2 class = "izquierda inline position-relative text-success">P.</h2>   
            <p class = " inlinePar position-absolute  "> ¿Venderan productos de otras empresas?                   
            </p>                     
          </div>
          <div class = "  position-relative"> 
            <h2 class = "izquierda inline position-relative ">R.</h2>   
            <p class = " inlinePar position-absolute  "> Algunos productos son brindados de empresas como POPS, Gallito, entre otras
            </p>                     
          </div>                                    
        </div>
        <div class = "verticalLine bg-dark"></div>
        <div class= " alineadoIzquierda  text-white position-relative">        
          <div class = " bg-gradient text-success"> 
            <h2 class = "izquierda inline position-relative text-success">P.</h2>   
            <p class = " inlinePar position-absolute  "> ¿Toppings para el helado cannábico?                   
            </p>                     
          </div>
          <div class = "  position-relative"> 
            <h2 class = "izquierda inline position-relative ">R.</h2>   
            <p class = " inlinePar position-absolute  "> Macadamia, chocolate, almendras y ganas de volar
            </p>                     
          </div>                                    
        </div>
        
        
        

        
        <div class = "verticalLine bg-dark"></div>
        
      </div>
      
      
       
      <section class="">
        <footer class="backgroundNavbar text-white position-relative text-center fixed-bottom">
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

export default Home;
