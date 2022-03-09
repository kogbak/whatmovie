<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-light bg-warning mb-5">
    <div class="container-fluid">
      <a class="navbar-brand ms-5" href="#">
        <router-link to="/" class="nav-link" style="color: #876500"
          ><h3 style="color: white">What movie ?</h3></router-link
        >
      </a>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
          <li class="nav-item">
            <router-link to="/" class="nav-link" style="color: #876500"
              >Accueil</router-link
            >
          </li>

          <li class="nav-item">
            <router-link
              to="/nouveau-films"
              class="nav-link"
              style="color: #876500"
              >Film sortis en 2022</router-link
            >
          </li>

          <li class="nav-item">
            <router-link
              to="/films-francais"
              class="nav-link"
              style="color: #876500"
              >Film français</router-link
            >
          </li>

          <li class="nav-item">
            <router-link
              to="/films-americains"
              class="nav-link"
              style="color: #876500"
              >Film americains</router-link
            >
          </li>

          <li class="nav-item">
            <router-link
              to="/top-50-des-films"
              class="nav-link"
              style="color: #876500"
              >Les 50 film les mieux notés</router-link
            >
          </li>

          <li class="nav-item">
            <router-link
              to="/recherche-de-films"
              class="nav-link"
              style="color: #876500"
              >Rechercher un film</router-link
            >
          </li>

        </ul>

      </div>
    </div>
  </nav>
  <div class="row w-75 mx-auto">
  <img class="mb-5" src="../assets/uyjtjtyjt.png" alt="">
  </div>
  </div>
</template>




<script>
export default {
  name: "HeaderNav",
};
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.css";
</style>


