import './App.css';

function Historia() {

  return (
    <div>
 
      <nav class="bg-success text-white navbar">
      <a class="navbar-brand text-white" href="#">MOTICA</a>
          <button class="btn btn-outline-light me-2 position-absolute top-10 end-0" type="button">INICIAR SESION</button>
      </nav>

      <section class="">
        <footer class="bg-success text-white text-center fixed-bottom">
          <div class="container p-3">
            <div class="row">

              <div class="col-lg-6 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">Empresa</h5>

                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="#!" class="text-white">Historia</a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">Descripcion del producto</a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">Organigrama de la empresa</a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-6 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase mb-0">De interes</h5>

                <ul class="list-unstyled">
                  <li>
                    <a href="#!" class="text-white">Ubicacion</a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">Preguntas frecuentes</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </footer>
      </section>
    </div>

  );
}

export default Historia;