<template>
  <div>
    <h1
      class="text-center m-5 w-50 mx-auto p-3"
      style="
        background-color: #f0f0f0;
        color: #b3b3b3;
        border: 1px;
        border-radius: 22px;
      "
    >
      Les nouveaux films de 2022
    </h1>

        <div class="container"> 
      <div class="mt-3 mb-3">
    <BoutonTri :films="films" @trier-films="sortMovies" />
    </div>
    </div>


    <MoviesList :films="films" />
  </div>
</template>

<script>
import axios from "axios";
import MoviesList from "./MoviesList";
import BoutonTri from "./BoutonTri";

export default {
  name: "MovieNew",
  components: {
    MoviesList,
    BoutonTri,
  },

  data() {
    return {
      preUrl: "https://image.tmdb.org/t/p/original/",
      films: [],
    };
  },

  methods: {

     sortMovies(myMovies) {
      this.films = myMovies;
    },
    
    getMovies(component) {
      axios
        .get(
          "https://api.themoviedb.org/3/discover/movie?api_key=f39312b1a257a589a68b7feed39d29c8&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2022"
        )
        .then(function (response) {
          // .then -> ce que je fait si lappel api a reussi  .then -> ensuite
          component.films = response.data.results;
          console.log(component.films);
          axios
            .get(
              "https://api.themoviedb.org/3/discover/movie?api_key=f39312b1a257a589a68b7feed39d29c8&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&year=2022"
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