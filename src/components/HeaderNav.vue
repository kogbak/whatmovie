<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-warning mb-5">
    <div class="container-fluid">
      <a class="navbar-brand ms-5" href="#">
        <h3 style="color: white">What movie ?</h3>
      </a>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
          <li class="nav-item">
            <a
              class="nav-link"
              style="color: #876500"
              aria-current="page"
              href="#"
              >Accueil</a
            >
          </li>

          <li class="nav-item">
            <a class="nav-link" style="color: #876500" href="#"
              >Film sortis en 2022</a
            >
          </li>

          <li class="nav-item">
            <a class="nav-link" style="color: #876500" href="#"
              >Film français</a
            >
          </li>

          <li class="nav-item">
            <a class="nav-link" style="color: #876500" href="#"
              >Film americains</a
            >
          </li>

          <li class="nav-item">
            <a class="nav-link" style="color: #876500" href="#"
              >Les 50 film les mieux notés</a
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


