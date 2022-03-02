<template>

  <div id="app">
    <HeaderNav />
    
      <div class="container ">
        <div class="row text-center d-flex flex-row">
          
          
            <div class="card m-3 col-2 d-flex justify-content-center align-items-center" v-bind:key="index" v-for="(film, index) in films" style="width: 25rem; ">
             
              <div class="card-body ">
                <img
                  v-bind:src="preUrl + film.poster_path"
                  alt="moviePoster"
                  class="card-img-top mt-3 mb-5"
                />
                <h4 class="card-title mb-3" style="color:#ffc107; ">{{ film.title }}</h4>
                <div style=" border-bottom: 1px solid #ffc107;" class="w-25 mx-auto m-3"></div>
                <p class="card-text" style="color: #A7A7A7;" >{{ film.overview.substring(0, 170) + "..."}}</p>
                <a href="#" class="btn btn-warning m-3" style="color:#876500;">Detail du film </a>
                <font-awesome-icon icon="fa-solid fa-arrow-right" />
              </div>
            </div>
          
        </div>
      </div>
    </div>
  
</template>


<script>
import axios from "axios";


import HeaderNav from "./components/HeaderNav"



export default {
  name: "App",
 
 components: {

HeaderNav,



 },

  data() {
    return {
      films: [],
      preUrl: "https://image.tmdb.org/t/p/original/",
    };
  },

  created() {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=f39312b1a257a589a68b7feed39d29c8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
      )
      .then((response) => {
        // .then -> ce que je fait si lappel api a reussi  .then -> ensuite
        this.films = response.data.results;
        console.log(this.films);
      })

      // .catch si ça se passe pas bien.
      .catch((error) => console.log(error));
  },
};



</script>
<style>
@import "~bootstrap/dist/css/bootstrap.css";
</style>

