<template>

  <div style="background-color:#FFF5D7; border:solid 0px; border-radius:20px; padding: 20px; width: 55rem" class="d-flex justify-content-center mx-auto ">


<!-- bouton Title -->

    <button  class="trier" @click="sortByTitle()">
      <p v-if="sortedByTitle == false" style="color: #876500">Trier par titre de A à Z ↕</p>
            <p v-else style="color: #876500">Trier par titre de Z à A ↕</p>
    </button>
    
  


<!-- bouton Rating -->
  <button  class="trier" @click="sortByRating()">
      <p v-if="sortedByRating == false" style="color: #876500">Trier par note croissant ↕</p>
            <p v-else style="color: #876500">Trier par note décroissant ↕</p>
    </button>


<!-- bouton Date -->

 <button  class="trier" @click="sortByDate()">
      <p v-if="sortedByDate == false" style="color: #876500">Trier par date croissant ↕</p>
            <p v-else style="color: #876500">Trier par date décroissant ↕</p>
    </button>
  </div>
</template>

<script>
export default {
  name: "BoutonTri",
  props: ["films"],

  data() {
    return {
      sortedByTitle: false, // false : les films non pas était trié par ordre alphabétique si c'est TRUE ils on était trié
      sortedByRating: false,
      sortedByDate: false,

      //  il faut variable pour effectuer les trie si le bouton a deja etait cliquer on faire linverse du bouton quand on reclique dessu
    };
  },

  methods: {
    // 3 fonction car 3 bouton

    sortByTitle() {
      let myMovies = this.films; // on déclare une variable qui contient les films en props

      if (!this.sortedByTitle) {
        // si les films ne sont PAS DEJA triés pas titre => tri normal par ordre alphabétique

        this.sortedByTitle = true; // on déclare le tri effectué

        myMovies.sort((a, b) => {
          //this.films.sort((a, b) => {      // on effectue le tri des films stockés dans films, avec la fonction sort()

          if (a.title < b.title) return -1; // si le titre du film a vient AVANT celui de b dans l'alphabet, on va lui donner un indice inférieur à b (-1) => il sera classé AVANT

          return a.title > b.title ? 1 : 0; // ligne 28 : équivalent d'un else if / else (opérateur ternaire)
          // si titre a > titre de b dans l'alphabet => indice 1 => a sera classé APRES b
        }); // sinon : pas de changement (titres identiques)
      } else {
        // si les films sont DEJA triés pas titre

        this.sortedByTitle = false; // on déclare le tri NON EFFECTUE (obligatoirement ici car un return va suivre)

        myMovies.sort((a, b) => {
          //this.movie.sort((a, b) => {  ancienne syntaxe (mutation des props encore possible)
          if (a.title > b.title) return -1;
          return a.title < b.title ? 1 : 0;
        });

        this.$emit("trier-films", myMovies); // déclenchement d'un évènement personnalisé : nom évènement + variable
      } // to emit = émettre en anglais
    },





    sortByRating() {
      let myMovies = this.films; // on déclare une variable qui contient les films en props

      if (!this.sortedByRating) {
        // si les films ne sont PAS DEJA triés pas titre => tri normal par ordre alphabétique

        this.sortedByRating = true; // on déclare le tri effectué

        myMovies.sort((a, b) => {
          //this.films.sort((a, b) => {      // on effectue le tri des films stockés dans films, avec la fonction sort()

          if (a.vote_average < b.vote_average) return -1; // si le titre du film a vient AVANT celui de b dans l'alphabet, on va lui donner un indice inférieur à b (-1) => il sera classé AVANT

          return a.vote_average > b.vote_average ? 1 : 0; // ligne 28 : équivalent d'un else if / else (opérateur ternaire)
          // si titre a > titre de b dans l'alphabet => indice 1 => a sera classé APRES b
        }); // sinon : pas de changement (titres identiques)
      } else {
        // si les films sont DEJA triés pas titre

        this.sortedByRating = false; // on déclare le tri NON EFFECTUE (obligatoirement ici car un return va suivre)

        myMovies.sort((a, b) => {
          //this.movie.sort((a, b) => {  ancienne syntaxe (mutation des props encore possible)
          if (a.vote_average > b.vote_average) return -1;
          return a.vote_average < b.vote_average ? 1 : 0;
        });

        this.$emit("trier-films", myMovies); // déclenchement d'un évènement personnalisé : nom évènement + variable
      } // to emit = émettre en anglais
    },





    sortByDate() {
      let myMovies = this.films; // on déclare une variable qui contient les films en props

      if (!this.sortedByDate) {
        // si les films ne sont PAS DEJA triés pas titre => tri normal par ordre alphabétique

        this.sortedByDate = true; // on déclare le tri effectué

        myMovies.sort((a, b) => {
          //this.films.sort((a, b) => {      // on effectue le tri des films stockés dans films, avec la fonction sort()

          if (a.release_date < b.release_date) return -1; // si le titre du film a vient AVANT celui de b dans l'alphabet, on va lui donner un indice inférieur à b (-1) => il sera classé AVANT

          return a.release_date > b.release_date ? 1 : 0; // ligne 28 : équivalent d'un else if / else (opérateur ternaire)
          // si titre a > titre de b dans l'alphabet => indice 1 => a sera classé APRES b
        }); // sinon : pas de changement (titres identiques)
      } else {
        // si les films sont DEJA triés pas titre

        this.sortedByDate = false; // on déclare le tri NON EFFECTUE (obligatoirement ici car un return va suivre)

        myMovies.sort((a, b) => {
          //this.movie.sort((a, b) => {  ancienne syntaxe (mutation des props encore possible)
          if (a.release_date > b.release_date) return -1;
          return a.release_date < b.release_date ? 1 : 0;
        });

        this.$emit("trier-films", myMovies); // déclenchement d'un évènement personnalisé : nom évènement + variable
      } // to emit = émettre en anglais
    },
  },
};
</script>

<style>



.trier{
background-color:#ffc107;
padding: 20px;
height:3rem;
border:0px solid;
border-radius:5px;
line-height : 10px;
margin:20px;
}

.trier:hover{

background-color:#ffd558;


}







</style>