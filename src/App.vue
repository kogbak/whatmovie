<template>
  <div id="app">
    <MovieHome />
  </div>
</template>
<script>

import MovieHome from './components/MovieHome.vue'
export default {
  name: 'app',
  components: {
    MovieHome
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
