import './App.css';
import houseImgPath from './mari.jpeg' 
import carrito from './cart.svg' 



function Ubicacion() {
  
  return (
    /*En el siguiente bloque nav se habilita los enlaces de las funcionalidades de la aplicación, como el inicio de sesión, carrito, tienda, etc.*/
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
        <li>-</li>
        <li class="nav-item">
          <a href="/Login" class="btn btn-default  btn-outline-dark bg-success " width="30" height="25">Iniciar Sesión</a>
        </li>
      </ul>                  
     </nav>

    {/*Bloque con la configuracion de la pagina ubicacion*/}
    {/*Contenedor de 2 div que estan se reparten el ancho de la pantalla*/}
    <div class ="row no-gutters">
      <div class="col no-gutters">
        {/*Contenedor de la izquierda que contiene el googlemaps*/}
        <div class="leftside d-flex justify-content-end align-items-center"> 
          <iframe class="responsive-iframe" width="70%" height="70%" id="gmap_canvas" 
          src="https://maps.google.com/maps?q=Tecnologico%20de%20Costa%20Rica,Lim%C3%B3n,Costa%20Rica&t=&z=15&ie=UTF8&iwloc=&output=embed" 
          frameborder="0" scrolling="no" marginheight="0" marginwidth="0"  ></iframe>
        </div>
      </div>

      
      <div class="col no-gutters">
        {/*Contenedor de la derecha que contiene el un informationbox*/}
        <div class= "rightside d-flex justify-content-start align-items-center "> 
          {/*Contenedor conocido como InformationBox, posee todo el texto relacionado con la informacion de ubicación.*/}
          <div class ="informationBox"> 
            <br></br>
            <h1 class="TituloLocation text-center fw-bold fst-italic">Estamos aqui para usted</h1>
            <p class="parrafoLocation text-start fst-normal ml-4">Nos encargamos de cualquier duda que tenga de nuestros productos.</p>
           

            <p class="parrafoLocation text-start fw-bold fst-italic ml-1">Nuestros horarios de atención son:</p>
            <p class="parrafoLocation text-start fst-italic ml-4">Lunes - Viernes</p> 
            <p class="parrafoLocation text-start fst-italic ml-4">10:00 am - 05:00 pm</p>
             

            <p class="parrafoLocation text-start fw-bold fst-italic ml-2 ">Oficinas</p>
            <p class="parrafoLocation text-start fw-normal fst-normal ml-4">Barrio Cerro Mocho frente al Colegio Diurno . 159-7050 Cartago. Limón. Limón.</p>
            
            
            <p class="parrafoLocation text-start fw-bold fst-italic ml-2 ">Número de télefono </p>
            <p class="parrafoLocation text-start fw-normal fst-normal ml-4">+506 8974-2465</p>

            <p class="parrafoLocation text-start fw-bold fst-italic ml-2 ">Correo Electrónico </p>
            <p class="parrafoLocation text-start fw-normal fst-normal ml-4">info@moTica.com</p>
            
           </div>
         </div>
       </div>
     </div>
      
      {/*En el siguiente bloque section se habilitan los enlaces a las demás secciones de información estática de la app.*/}
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

export default Ubicacion;