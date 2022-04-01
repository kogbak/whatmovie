<template>
  <div class="container">
    <div v-if="error == true">
      <h1>erreur</h1>
    </div>

    <div v-else>
      <div class="row text-center d-flex flex-row">
        <div
          class="
            card
            m-3
            col-2
            d-flex
            justify-content-center
            align-items-center
          "
          v-bind:key="index"
          v-for="(film, index) in films"
          style="width: 25rem"
        >
          <MovieCard :film="film" :error="error" :loading="loading" />

        </div>
      </div>
    </div>
  </div>
</template>


<script>
import MovieCard from "./MovieCard";

export default {
  components: {
    MovieCard,
  },

  data() {
    return {
      preUrl: "https://image.tmdb.org/t/p/original/",
    };
  },

  name: "MoviesList",
  props: ["films", "loading", "error"],
};
</script>