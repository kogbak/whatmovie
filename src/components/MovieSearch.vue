<template>
  <div>
    <!-- <form role="search" class="text-center">
      <label for="search" class="hidden-visually">Search: </label>
      <input type="text" name="search" id="search" v-model="search" />
      <button type="submit">Rechercher</button>
    </form> -->

    <h2 class="titre text-center fw-bold mt-5" style="color: #ffc107">
      Rechercher un film
    </h2>

    <div
      style="border-bottom: 1px solid #ffc107"
      class="w-25 mx-auto mb-5"
    ></div>



<div class="mx-auto w-50 m-5">
      <div class="input-group">
        <input
          @keyup="getResult(search)"
          style="height: 70px"
          class="form-control rounded"
          placeholder="Ecrivez le nom du film ici"
          v-model="search"
        />
      </div>
      </div>
    

  
      <MoviesList :films="films" :error="error" :loading="loading" />
    
    
  </div>
</template>

<script>
import axios from "axios";
import MoviesList from "./MoviesList";

export default {
  name: "MovieSearch",

  components: {
    MoviesList,
  },

  data() {
    return {
      preUrl: "https://image.tmdb.org/t/p/original/",
      films: [],
      loading: true,
      error: false,
      search: ""
    };
  },

  methods: {
    getResult(search) {
      axios
        .get(
          "https://api.themoviedb.org/3/search/movie?api_key=3ea8988340d4ed715d28b9978346c29e&language=fr&include_adult=false&query=" + search
        )

        .then( (response) => {
          console.log(response);

          this.loading = false;
          this.films = response.data.results;
          
          // console.log(this.films);
        })

        .catch(function () {
          this.error = true;
        });
    },
  },
};
</script>

<style>
.titre {
  overflow: hidden;
  border-right: 0.15em solid #ffc107;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.12em;
  animation: typing 3s steps(40, end), blink-caret 0.75s step-end;
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 370px;
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #ffc107;
  }
}
</style>