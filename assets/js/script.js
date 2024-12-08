const formations = [
  "patisserie",
  "pâtisserie",
  "cuisine",
  "coupe-couture",
  "coiffure",
  "electricite",
  "éléctricité",
  "froid",
  "informatique",
  "audiovisuel",
];

const searchButton = document.getElementById("btn-search");
const touteFormations = document.getElementById("toutes-formations");

searchButton.addEventListener("click", (e) => {
  const input = document
    .getElementById("search-barre")
    .value.trim()
    .toUpperCase();

  const sectionFormation = document.getElementById("secFormation-content");

  sectionFormation.innerHTML = "";
  e.preventDefault();

  if (formations.map((f) => f.toUpperCase()).includes(input)) {
    if (input === "PATISSERIE" || input === "PÂTISSERIE") {
      sectionFormation.innerHTML = `<div class="card card-second" id="patisserie">
                  <img
                    src="assets/images/patisserie.jpeg"
                    alt=""
                    class="card-img-top"
                  />

                  <div class="card-body">
                    <h3 class="card-title fw-semibold">Patisserie</h3>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsum a eius hic reprehenderit earum amet adipisci
                      corrupti ex quod sequi vitae asperiores facilis molestias
                      ut, sint ad similique qui consectetur!
                    </p>
                    <a type="button" class="btn btn-formation" data-bs-toggle="modal" data-bs-target="#exampleModal">En savoir plus</a>
                    
                    <!-- FENETRE MODAL -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5 fw-bold" id="exampleModalLabel">PATISSERIE</h1>
                            <button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>

                          <div class="modal-body">
                            <ul class="navbar nav">
                              <li class="nav-item">
                                <h3>Prérequis :</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non officiis nostrum doloremque id quam quibusdam.</p>
                              </li>

                              <li class="nav-item">
                                <h3>Contenu:</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non officiis nostrum doloremque id quam quibusdam.</p>
                              </li>

                              <li class="nav-item">
                                <h3>Débouchés:</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non officiis nostrum doloremque id quam quibusdam.</p>
                              </li>
                            </ul>
                          </div>

                          <div class="modal-footer">
                            <a href="inscription.html" class="btn ">S'inscrire</a>
                            <button class="fermer-btn" data-bs-dismiss="modal">Fermer</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>`;
    } else if (input === "COIFFURE") {
      sectionFormation.innerHTML = `<div class="card card-second">
                  <img
                    src="assets/images/coiffure.jpeg"
                    alt=""
                    class="card-img-top"
                  />

                  <div class="card-body">
                    <h3 class="card-title fw-semibold">Coiffure</h3>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsum a eius hic reprehenderit earum amet adipisci
                      corrupti ex quod sequi vitae asperiores facilis molestias
                      ut, sint ad similique qui consectetur!
                    </p>
                    <a type="button" class="btn btn-formation" data-bs-toggle="modal" data-bs-target="#exampleModal">En savoir plus</a>
                    
                    <!-- FENETRE MODAL -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5 fw-bold" id="exampleModalLabel">COIFFURE</h1>
                            <button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>

                          <div class="modal-body">
                            <ul class="navbar nav">
                              <li class="nav-item">
                                <h3>Prérequis :</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non officiis nostrum doloremque id quam quibusdam.</p>
                              </li>

                              <li class="nav-item">
                                <h3>Contenu:</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non officiis nostrum doloremque id quam quibusdam.</p>
                              </li>

                              <li class="nav-item">
                                <h3>Débouchés:</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non officiis nostrum doloremque id quam quibusdam.</p>
                              </li>
                            </ul>
                          </div>

                          <div class="modal-footer">
                            <a href="inscription.html" class="btn ">S'inscrire</a>
                            <button class="fermer-btn" data-bs-dismiss="modal">Fermer</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>`;
    } else if (input === "COUPE-COUTURE") {
      sectionFormation.innerHTML = `<div class="card card-second">
                  <img
                    src="assets/images/coupe.jpeg"
                    alt=""
                    class="card-img-top"
                  />

                  <div class="card-body">
                    <h3 class="card-title fw-semibold">Coupe - Couture</h3>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsum a eius hic reprehenderit earum amet adipisci
                      corrupti ex quod sequi vitae asperiores facilis molestias
                      ut, sint ad similique qui consectetur!
                    </p>
                    <a type="button" class="btn btn-formation" data-bs-toggle="modal" data-bs-target="#exampleModal">En savoir plus</a>
                    
                    <!-- FENETRE MODAL -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5 fw-bold" id="exampleModalLabel">COUPE - COUTURE</h1>
                            <button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>

                          <div class="modal-body">
                            <ul class="navbar nav">
                              <li class="nav-item">
                                <h3>Prérequis :</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non officiis nostrum doloremque id quam quibusdam.</p>
                              </li>

                              <li class="nav-item">
                                <h3>Contenu:</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non officiis nostrum doloremque id quam quibusdam.</p>
                              </li>

                              <li class="nav-item">
                                <h3>Débouchés:</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non officiis nostrum doloremque id quam quibusdam.</p>
                              </li>
                            </ul>
                          </div>

                          <div class="modal-footer">
                            <a href="inscription.html" class="btn ">S'inscrire</a>
                            <button class="fermer-btn" data-bs-dismiss="modal">Fermer</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>`;
    } else if (input === "ELECTRICITE") {
      sectionFormation.innerHTML = `<div class="card card-second">
                  <img
                    src="assets/images/freepik__candid-image-photography-natural-textures-highly-r__34431.jpeg"
                    alt=""
                    class="card-img-top"
                  />

                  <div class="card-body">
                    <h3 class="card-title fw-semibold">Electricité</h3>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsum a eius hic reprehenderit earum amet adipisci
                      corrupti ex quod sequi vitae asperiores facilis molestias
                      ut, sint ad similique qui consectetur!
                    </p>
                    <a type="button" class="btn btn-formation" data-bs-toggle="modal" data-bs-target="#exampleModal">En savoir plus</a>
                    
                    <!-- FENETRE MODAL -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5 fw-bold" id="exampleModalLabel">ELECTRICITE</h1>
                            <button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>

                          <div class="modal-body">
                            <ul class="navbar nav">
                              <li class="nav-item">
                                <h3>Prérequis :</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non officiis nostrum doloremque id quam quibusdam.</p>
                              </li>

                              <li class="nav-item">
                                <h3>Contenu:</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non officiis nostrum doloremque id quam quibusdam.</p>
                              </li>

                              <li class="nav-item">
                                <h3>Débouchés:</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non officiis nostrum doloremque id quam quibusdam.</p>
                              </li>
                            </ul>
                          </div>

                          <div class="modal-footer">
                            <a href="inscription.html" class="btn ">S'inscrire</a>
                            <button class="fermer-btn" data-bs-dismiss="modal">Fermer</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>`;
    } else if (input === "FROID") {
      sectionFormation.innerHTML = `<div class="card card-second">
                  <img
                    src="assets/images/freepik__candid-image-photography-natural-textures-highly-r__34432.jpeg"
                    alt=""
                    class="card-img-top"
                  />

                  <div class="card-body">
                    <h3 class="card-title fw-semibold">Froid</h3>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsum a eius hic reprehenderit earum amet adipisci
                      corrupti ex quod sequi vitae asperiores facilis molestias
                      ut, sint ad similique qui consectetur!
                    </p>
                    <a
                      role="button"
                      class="btn btn-formation"
                      data-bs-toggle="popover"
                      data-bs-placement="top"
                      data-bs-content="Cette formation n'est pas encore disponible"
                      >En savoir plus</a
                    >
                  </div>
                </div>`;
    } else if (input === "INFORMATIQUE") {
      sectionFormation.innerHTML = `<div class="card card-second">
                  <img
                    src="assets/images/freepik__candid-image-photography-natural-textures-highly-r__34432.jpeg"
                    alt=""
                    class="card-img-top"
                  />

                  <div class="card-body">
                    <h3 class="card-title fw-semibold">Informatique</h3>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsum a eius hic reprehenderit earum amet adipisci
                      corrupti ex quod sequi vitae asperiores facilis molestias
                      ut, sint ad similique qui consectetur!
                    </p>
                    <a
                      role="button"
                      class="btn btn-formation"
                      data-bs-toggle="popover"
                      data-bs-placement="top"
                      data-bs-content="Cette formation n'est pas encore disponible"
                      >En savoir plus</a
                    >
                  </div>
                </div>`;
    } else if (input === "AUDIOVISUEL") {
      sectionFormation.innerHTML = `<div class="card card-second">
                  <img
                    src="assets/images/freepik__candid-image-photography-natural-textures-highly-r__34432.jpeg"
                    alt=""
                    class="card-img-top"
                  />

                  <div class="card-body">
                    <h3 class="card-title fw-semibold">Audiovisuel</h3>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsum a eius hic reprehenderit earum amet adipisci
                      corrupti ex quod sequi vitae asperiores facilis molestias
                      ut, sint ad similique qui consectetur!
                    </p>
                    <a
                      role="button"
                      class="btn btn-formation"
                      data-bs-toggle="popover"
                      data-bs-placement="top"
                      data-bs-content="Cette formation n'est pas encore disponible"
                      >En savoir plus</a
                    >
                  </div>
                </div>`;
    } else if (input === "CUISINE") {
      sectionFormation.innerHTML = ` <div class="card card-second">
                  <img
                    src="assets/images/freepik__candid-image-photography-natural-textures-highly-r__34432.jpeg"
                    alt=""
                    class="card-img-top"
                  />

                  <div class="card-body">
                    <h3 class="card-title fw-semibold">Cuisine</h3>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsum a eius hic reprehenderit earum amet adipisci
                      corrupti ex quod sequi vitae asperiores facilis molestias
                      ut, sint ad similique qui consectetur!
                    </p>
                    <a
                      role="button"
                      class="btn btn-formation"
                      data-bs-toggle="popover"
                      data-bs-placement="top"
                      data-bs-content="Cette formation n'est pas encore disponible"
                    >
                      En savoir plus
                    </a>
                  </div>
                </div>`;
    }
  } else {
    sectionFormation.innerHTML = `<p>Nous ne disposons pas encore de cette formation : ${input} </p>`;
  }
});

touteFormations.addEventListener("click", () => {
  const sectionFormation = document.getElementById("secFormation-content");
  const annuleStyleCard = document.getElementsByClassName("card");

  sectionFormation.innerHTML = `<div class="bg-body-secondary" id="secFormation">
        <div class="container py-5">
          <div class="secformation-title">
            <h2 id="nos-formations">Nos Formations</h2>
            <hr />
            <hr class="custom-hr" />
          </div>

          <div class="secformation-content py-4">
            <div class="row g-4 mb-5">
              <div class="col-lg-3 col-md-4">
                <div class="card" id="patisserie">
                  <img
                    src="assets/images/patisserie.jpeg"
                    alt=""
                    class="card-img-top"
                  />

                  <div class="card-body">
                    <h3 class="card-title fw-semibold">Patisserie</h3>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsum a eius hic reprehenderit earum amet adipisci
                      corrupti ex quod sequi vitae asperiores facilis molestias
                      ut, sint ad similique qui consectetur!
                    </p>
                    <a type="button" class="btn btn-formation" data-bs-toggle="modal" data-bs-target="#exampleModal">En savoir plus</a>
                    
                    <!-- FENETRE MODAL -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5 fw-bold" id="exampleModalLabel">PATISSERIE</h1>
                            <button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>

                          <div class="modal-body">
                            <ul class="navbar nav">
                              <li class="nav-item">
                                <h3>Prérequis :</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non officiis nostrum doloremque id quam quibusdam.</p>
                              </li>

                              <li class="nav-item">
                                <h3>Contenu:</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non officiis nostrum doloremque id quam quibusdam.</p>
                              </li>

                              <li class="nav-item">
                                <h3>Débouchés:</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non officiis nostrum doloremque id quam quibusdam.</p>
                              </li>
                            </ul>
                          </div>

                          <div class="modal-footer">
                            <a href="#" class="btn ">S'inscrire</a>
                            <button class="fermer-btn" data-bs-dismiss="modal">Fermer</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-4">
                <div class="card">
                  <img
                    src="assets/images/coiffure.jpeg"
                    alt=""
                    class="card-img-top"
                  />

                  <div class="card-body">
                    <h3 class="card-title fw-semibold">Coiffure</h3>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsum a eius hic reprehenderit earum amet adipisci
                      corrupti ex quod sequi vitae asperiores facilis molestias
                      ut, sint ad similique qui consectetur!
                    </p>
                    <a type="button" class="btn btn-formation" data-bs-toggle="modal" data-bs-target="#exampleModalCoiffure">En savoir plus</a>
                    
                    <!-- FENETRE MODAL -->
                    <div class="modal fade" id="exampleModalCoiffure" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5 fw-bold" id="exampleModalLabel">COIFFURE</h1>
                            <button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>

                          <div class="modal-body">
                            <ul class="navbar nav">
                              <li class="nav-item">
                                <h3>Prérequis :</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non officiis nostrum doloremque id quam quibusdam.</p>
                              </li>

                              <li class="nav-item">
                                <h3>Contenu:</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non officiis nostrum doloremque id quam quibusdam.</p>
                              </li>

                              <li class="nav-item">
                                <h3>Débouchés:</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non officiis nostrum doloremque id quam quibusdam.</p>
                              </li>
                            </ul>
                          </div>

                          <div class="modal-footer">
                            <a href="#" class="btn ">S'inscrire</a>
                            <button class="fermer-btn" data-bs-dismiss="modal">Fermer</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-4">
                <div class="card">
                  <img
                    src="assets/images/coupe.jpeg"
                    alt=""
                    class="card-img-top"
                  />

                  <div class="card-body">
                    <h3 class="card-title fw-semibold">Coupe - Couture</h3>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsum a eius hic reprehenderit earum amet adipisci
                      corrupti ex quod sequi vitae asperiores facilis molestias
                      ut, sint ad similique qui consectetur!
                    </p>
                    <a type="button" class="btn btn-formation" data-bs-toggle="modal" data-bs-target="#exampleModalCoupe">En savoir plus</a>
                    
                    <!-- FENETRE MODAL -->
                    <div class="modal fade" id="exampleModalCoupe" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5 fw-bold" id="exampleModalLabel">COUPE - COUTURE</h1>
                            <button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>

                          <div class="modal-body">
                            <ul class="navbar nav">
                              <li class="nav-item">
                                <h3>Prérequis :</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non officiis nostrum doloremque id quam quibusdam.</p>
                              </li>

                              <li class="nav-item">
                                <h3>Contenu:</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non officiis nostrum doloremque id quam quibusdam.</p>
                              </li>

                              <li class="nav-item">
                                <h3>Débouchés:</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non officiis nostrum doloremque id quam quibusdam.</p>
                              </li>
                            </ul>
                          </div>

                          <div class="modal-footer">
                            <a href="#" class="btn ">S'inscrire</a>
                            <button class="fermer-btn" data-bs-dismiss="modal">Fermer</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-4">
                <div class="card">
                  <img
                    src="assets/images/freepik__candid-image-photography-natural-textures-highly-r__34431.jpeg"
                    alt=""
                    class="card-img-top"
                  />

                  <div class="card-body">
                    <h3 class="card-title fw-semibold">Electricité</h3>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsum a eius hic reprehenderit earum amet adipisci
                      corrupti ex quod sequi vitae asperiores facilis molestias
                      ut, sint ad similique qui consectetur!
                    </p>
                    <a type="button" class="btn btn-formation" data-bs-toggle="modal" data-bs-target="#exampleModalElec">En savoir plus</a>
                    
                    <!-- FENETRE MODAL -->
                    <div class="modal fade" id="exampleModalElec" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5 fw-bold" id="exampleModalLabel">ELECTRICITE</h1>
                            <button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>

                          <div class="modal-body">
                            <ul class="navbar nav">
                              <li class="nav-item">
                                <h3>Prérequis :</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non officiis nostrum doloremque id quam quibusdam.</p>
                              </li>

                              <li class="nav-item">
                                <h3>Contenu:</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non officiis nostrum doloremque id quam quibusdam.</p>
                              </li>

                              <li class="nav-item">
                                <h3>Débouchés:</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non officiis nostrum doloremque id quam quibusdam.</p>
                              </li>
                            </ul>
                          </div>

                          <div class="modal-footer">
                            <a href="#" class="btn ">S'inscrire</a>
                            <button class="fermer-btn" data-bs-dismiss="modal">Fermer</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row g-4">
              <div class="col-lg-3 col-md-4">
                <div class="card">
                  <img
                    src="assets/images/freepik__candid-image-photography-natural-textures-highly-r__34432.jpeg"
                    alt=""
                    class="card-img-top"
                  />

                  <div class="card-body">
                    <h3 class="card-title fw-semibold">Froid</h3>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsum a eius hic reprehenderit earum amet adipisci
                      corrupti ex quod sequi vitae asperiores facilis molestias
                      ut, sint ad similique qui consectetur!
                    </p>
                    <a
                      role="button"
                      class="btn btn-formation"
                      data-bs-toggle="popover"
                      data-bs-placement="top"
                      data-bs-content="Cette formation n'est pas encore disponible"
                      >En savoir plus</a
                    >
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-4">
                <div class="card">
                  <img
                    src="assets/images/freepik__candid-image-photography-natural-textures-highly-r__34432.jpeg"
                    alt=""
                    class="card-img-top"
                  />

                  <div class="card-body">
                    <h3 class="card-title fw-semibold">Informatique</h3>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsum a eius hic reprehenderit earum amet adipisci
                      corrupti ex quod sequi vitae asperiores facilis molestias
                      ut, sint ad similique qui consectetur!
                    </p>
                    <a
                      role="button"
                      class="btn btn-formation"
                      data-bs-toggle="popover"
                      data-bs-placement="top"
                      data-bs-content="Cette formation n'est pas encore disponible"
                      >En savoir plus</a
                    >
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-4">
                <div class="card">
                  <img
                    src="assets/images/freepik__candid-image-photography-natural-textures-highly-r__34432.jpeg"
                    alt=""
                    class="card-img-top"
                  />

                  <div class="card-body">
                    <h3 class="card-title fw-semibold">Audiovisuel</h3>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsum a eius hic reprehenderit earum amet adipisci
                      corrupti ex quod sequi vitae asperiores facilis molestias
                      ut, sint ad similique qui consectetur!
                    </p>
                    <a
                      role="button"
                      class="btn btn-formation"
                      data-bs-toggle="popover"
                      data-bs-placement="top"
                      data-bs-content="Cette formation n'est pas encore disponible"
                      >En savoir plus</a
                    >
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-4">
                <div class="card">
                  <img
                    src="assets/images/freepik__candid-image-photography-natural-textures-highly-r__34432.jpeg"
                    alt=""
                    class="card-img-top"
                  />

                  <div class="card-body">
                    <h3 class="card-title fw-semibold">Cuisine</h3>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsum a eius hic reprehenderit earum amet adipisci
                      corrupti ex quod sequi vitae asperiores facilis molestias
                      ut, sint ad similique qui consectetur!
                    </p>
                    <a
                      role="button"
                      class="btn btn-formation"
                      data-bs-toggle="popover"
                      data-bs-placement="top"
                      data-bs-content="Cette formation n'est pas encore disponible"
                    >
                      En savoir plus
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
});

function nextStep() {
  const step1 = document.getElementById("step1");
  const step2 = document.getElementById("step2");

  if (validateStep1()) {
    step1.classList.remove("active");
    step2.classList.add("active");
    updateProgressBar(100);
  }
}

function prevStep() {
  const step1 = document.getElementById("step1");
  const step2 = document.getElementById("step2");

  step2.classList.remove("active");
  step1.classList.add("active");
  updateProgressBar(50);
}

function updateProgressBar(percentage) {
  const progressBar = document.querySelector(".progress-bar");
  progressBar.style.width = percentage + "%";
  progressBar.setAttribute("aria-valuenow", percentage);
}

function validateStep1() {
  let isValid = true;

  const fields = ["nom", "postnom", "prenom", "telephone", "date_naissance"];
  fields.forEach((field) => {
    const input = document.getElementById(field);
    if (!input.value) {
      input.classList.add("is-invalid");
      isValid = false;
    } else {
      input.classList.remove("is-invalid");
    }
  });

  return isValid;
}

function submitForm() {
  const nom = document.getElementById("nom");
  const postNom = document.getElementById("postnom");
  const preNom = document.getElementById("prenom");
  const tel = document.getElementById("telephone");
  const dateNaiss = document.getElementById("date-naissance");
  const adresse = document.getElementById("adresse");

  alert("Formulaire soumis !");

  if (validateStep1()) {
    step1.classList.add("active");
    step2.classList.remove("active");
    updateProgressBar(50);

    nom.value = "";
    postNom.value = "";
    preNom.value = "";
    tel.value = "";
    dateNaiss.value = "";
    adresse.value = "";
  }
}
