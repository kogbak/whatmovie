<template>
  <div id="app">
    <HeaderNav />

       

    <div v-if="$route.path == '/'">

     <div class="container"> 
      <div class="mt-3 mb-3">
    <BoutonTri :films="films" @trier-films="sortMovies" />
    </div>
    </div>

    
      <!-- si la route est / (racine du site) -->
      <MoviesList :films="films" :loading="loading" :error="error" />
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
import BoutonTri from "./components/BoutonTri";

export default {
  name: "App",

  components: {
    HeaderNav,
    MoviesList,
    FooterApp,
    BoutonTri,
  },

  data() {
    return {
      films: [],
      loading: true,
      error: false,
    };
  },

  methods: {

     sortMovies(myMovies) {
      this.films = myMovies;
    },
    
    
    getMovies(component) {
      axios
        .get(
          "https://api.themoviedb.org/3/discover/movie?api_key=f39312b1a257a589a68b7feed39d29c8&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
        )
        .then(function (response) {
          // .then -> ce que je fait si lappel api a reussi  .then -> ensuite
          component.films = response.data.results;
          console.log(component.films);
          axios
            .get(
              "https://api.themoviedb.org/3/discover/movie?api_key=f39312b1a257a589a68b7feed39d29c8&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=2"
            )
            .then(function (response2) {
              console.log(response2);
              component.loading = false;
              response2.data.results.forEach(function (film) {
                component.films.push(film);
              }); // problème
              console.log(component.films);
            })

            // .catch si ça se passe pas bien.
            .catch(function () {
              component.error = true;
            });
        })
        .catch(function () {
          console.log("test")
          component.error = true;
        });
    },
  },

  created() {
    this.getMovies(this);
  },
};
</script>
<style>
@import "~bootstrap/dist/css/bootstrap.css";
</style>

