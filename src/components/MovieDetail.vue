<template>
  <div>
    <h1
      class="text-center mx-auto p-3 w-50 m-5"
      style="
        background-color: #f0f0f0;
        color: #b3b3b3;
        border: 1px;
        border-radius: 22px;
      "
    >
      {{ film.title }}
    </h1>

    <div class="container">
      <div class="row text-center">
        <div class="card m-3">
          <div class="card-body">
            <img
              v-bind:src="preUrl + film.poster_path"
              alt="moviePoster"
              class="card-img-top mt-3 mb-5 w-50"
            />
            <h4 class="card-title mb-3" style="color: #ffc107">
              {{ film.title }} - Résumé 
            </h4>
            <div
              style="border-bottom: 1px solid #ffc107"
              class="w-25 mx-auto m-3"
            ></div>
            <p class="card-text" style="color: #a7a7a7">
              {{ film.overview }}
            </p>

            <h4 class="card-title mb-3 mt-5" style="color: #ffc107">
              Bande annonce
            </h4>
            <div
              style="border-bottom: 1px solid #ffc107; width: 100px"
              class=" mx-auto m-3"
            ></div>

            <div v-if="video[0]">
              <iframe
                width="560"
                height="315"
                v-bind:src="'https://www.youtube.com/embed/' + video[0].key"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>

            <div v-else>
              <p>
                Oups, désoler il n'y a aucune bande annonce disponible :( ...
              </p>
            </div>

            <h4 class="card-title mb-3 mt-5" style="color: #ffc107">
              Détail du film
            </h4>
            <div
              style="border-bottom: 1px solid #ffc107; width: 100px"
              class=" mx-auto m-3"
            ></div>
            <h5>Sortie le :</h5>
            <p style="color: #a7a7a7">{{ film.release_date }}</p>

            <h5>Note moyenne :</h5>
            <p style="color: #a7a7a7">{{ film.vote_average }}/10 ★</p>
            <h5>Langue originale :</h5>
            <div v-if="film.original_language == 'en'">
              <p style="color: #a7a7a7">Anglais</p>
            </div>
            <div v-else-if="film.original_language == 'fr'">
              
              <p style="color: #a7a7a7">Français</p>
            </div>

            <div v-else>
              <p style="color: #a7a7a7">{{ film.original_language }}</p>
            </div>

            <h5>Genre :</h5>
            <div v-for="genre in film.genres" :key="genre.id">
              <div style="background-color:#ffc107; width:10rem; height:2rem; border:0px solid; border-radius:5px; line-height : 30px;" class="m-3 mx-auto "><p style="color: #876500">{{genre.name }}</p></div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import moment from 'moment';

import axios from "axios";

export default {
  name: "MovieDetail",

  data() {
    return {
      film: null,
      id: this.$route.params.id,
      preUrl: "https://image.tmdb.org/t/p/original/",
      video: [],
    };
  },

  methods: {
    getMoviesbyId(component) {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/" +
            component.id +
            "?api_key=f39312b1a257a589a68b7feed39d29c8&language=fr"
        )
        .then(function (palmier) {
          // .then -> ce que je fait si lappel api a reussi  .then -> ensuite
          component.film = palmier.data;
          console.log(palmier);
        })

        // .catch si ça se passe pas bien.
        .catch(function () {
          component.error = true;
        });
    },

    getVideo(component) {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/" +
            component.id +
            "/videos?api_key=f39312b1a257a589a68b7feed39d29c8&language=fr"
        )
        .then(function (response) {
          // .then -> ce que je fait si lappel api a reussi  .then -> ensuite
          component.video = response.data.results;
          console.log(component.video);
        })

        // .catch si ça se passe pas bien.
        .catch(function () {
          component.error = true;
        });
    },
  },

  created: function () {
    this.getMoviesbyId(this);
    this.getVideo(this);
  },
};
</script>





















