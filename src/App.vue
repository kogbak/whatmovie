<template>
  <div id="app">
    <HeaderNav />

    <div v-if="$route.path == '/'">
      <!-- si la route est / (racine du site) -->
      <h1 class="pt-5 font-weight-light">
        Vos films préférés sont sur What movie !
      </h1>
      <MoviesList :films="films" :loading="loading" :errored="errored" />
    </div>

    <div v-else>
      <!-- si la route est différente de / -->
      <router-view :key="$route.fullPath"></router-view>
    </div>

    <FooterApp />
  </div>
</template>


<script>
import axios from "axios";

import HeaderNav from "./components/HeaderNav";
import MoviesList from "./components/MoviesList";
import FooterApp from "./components/FooterApp";

export default {
  name: "App",

  components: {
    HeaderNav,
    MoviesList,
    FooterApp,
  },

  data() {
    return {
      films: [],
    };
  },

  created() {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=f39312b1a257a589a68b7feed39d29c8&language=en-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
      )
      .then((response) => {
        // .then -> ce que je fait si lappel api a reussi  .then -> ensuite
        this.films = response.data.results;
        console.log(this.films);
      })


    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=f39312b1a257a589a68b7feed39d29c8&language=en-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&with_watch_monetization_types=flatrate"
      )
      .then(function (response2) {
        response2.data.results.forEach((movie) => {
          component.movies.push(movie);
        });
        console.log(component.movies);
      })

    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=f39312b1a257a589a68b7feed39d29c8&language=en-FR&sort_by=release_date.asc&include_adult=false&include_video=false&page=1&year=2022&with_watch_monetization_types=flatrate"
      )
      .then((response) => {
        // .then -> ce que je fait si lappel api a reussi  .then -> ensuite
        this.nouveaufilms = response.data.results;
        console.log(this.nouveaufilms);
      })

      
      // .catch si ça se passe pas bien.
      .catch((error) => console.log(error));
  },
};
</script>
<style>
@import "~bootstrap/dist/css/bootstrap.css";
</style>

