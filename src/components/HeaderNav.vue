<template>
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
              to="/films-français"
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
        </ul>

        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            aria-label="Search"
            value="Rechercher un film"
            onFocus="javascript:this.value=''"
          />
          <button class="btn btn-outline-light me-5" type="submit">Ok</button>
        </form>
      </div>
    </div>
  </nav>
</template>




<script>
export default {
  name: "HeaderNav",
};
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.css";
</style>


