<template>
  <div>
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
    </div>
    <router-link
      id="link"
      class="btn btn-warning mb-5 mt-3"
      style="color: #876500"
      :to="`/detail-du-film/${film.id}`"
      >Detail du film
    </router-link>
  </div>
</template>

<script>
export default {
  name: "MovieCard",
props: ["film"],

  data() {
    return {
      preUrl: "https://image.tmdb.org/t/p/original/",
    };
  },
};
</script>