<template>
  <div class="container">
    <div class="row text-center d-flex flex-row">
      <div
        class="card m-3 col-2 d-flex justify-content-center align-items-center"
        v-bind:key="index"
        v-for="(film, index) in films"
        style="width: 25rem"
      >
        <div class="card-body">
          <img
            v-bind:src="preUrl + film.poster_path"
            alt="moviePoster"
            class="card-img-top mt-3 mb-5"
          />
          <h4 class="card-title mb-3" style="color: #ffc107">
            {{ film.title }}
          </h4>
          <div
            style="border-bottom: 1px solid #ffc107"
            class="w-25 mx-auto m-3"
          ></div>
          <p class="card-text" style="color: #a7a7a7">
            {{ film.overview.substring(0, 170) + "..." }}
          </p>
          <a href="#" class="btn btn-warning m-3" style="color: #876500"
            >Detail du film
          </a>
          <font-awesome-icon icon="fa-solid fa-arrow-right" />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      preUrl: "https://image.tmdb.org/t/p/original/",
    };
  },

  name: "MoviesList",
  props: ["films"],
};
</script>