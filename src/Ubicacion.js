import './App.css';
import houseImgPath from './mari.jpeg' // replace with your own path
import carrito from './cart.svg' // replace with your own path
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" 
integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" 
crossorigin="anonymous"></link>


function Ubicacion() {

  return (
    <body class=" coverContainer bg-dark">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" 
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" 
        crossorigin="anonymous">
      </link> 

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


      <div class ="row no-gutters">

        <div class="col no-gutters">
          <div class="leftside d-flex justify-content-end align-items-center"> 
            <iframe class="responsive-iframe" width="70%" height="70%" id="gmap_canvas" 
            src="https://maps.google.com/maps?q=Tecnologico%20de%20Costa%20Rica,Lim%C3%B3n,Costa%20Rica&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            frameborder="0" scrolling="no" marginheight="0" marginwidth="0"  ></iframe>
          </div>
        </div>

        <div class="col no-gutters">
          <div class= "rightside d-flex justify-content-start align-items-center "> 
            <div class ="informationBox"> 
              <br></br>
              <h1 class="text-center fw-bold fst-italic">¿En donde estamos ubicados?</h1>
              <br></br>
              <p class="text-start fst-normal ml-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              d.luding versions of Lorem Ipsum.</p>
             

              <h3 class="text-start fw-bold fst-italic ml-2 ">Telefono</h3>
              <p class="text-start fst-normal ml-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
             

              <h3 class="text-start fw-bold fst-italic ml-2 ">Oficinas</h3>
              <p class="text-start fw-normal fst-normal ml-4">99999-999999</p>
            
            
              <h3 class="text-start fw-bold fst-italic ml-2 ">Whatsapp</h3>
              <p class="text-start fw-normal fst-normal ml-4">99999-99999</p>
            
            </div>
          
          </div>


        </div>

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

export default Ubicacion;