import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import MovieAm from "./components/MovieAm.vue"
import MovieDetail from "./components/MovieDetail.vue"
import MovieFr from "./components/MovieFr.vue"
import MovieNew from "./components/MovieNew.vue"
import TopMovie50 from "./components/TopMovie50.vue"
import MovieSearch from "./components/MovieSearch.vue"

Vue.use(VueRouter) // on veut utiliser le router on l'intégre a l'application 

Vue.config.productionTip = false

import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const routes = [
  {
  
    path: '/films-americains',
    component: MovieAm
    
  },

  {
  
    path: '/recherche-de-films',
    component: MovieSearch
    
  },

  {
    
    path: '/detail-du-film/:id',
    component: MovieDetail
    
  },
  {
    
    path: '/films-francais',
    component: MovieFr
    
  },
  {
   
    path: '/nouveau-films',
    component: MovieNew
   
  },
  

  {
    
    path: '/top-50-des-films',
    component: TopMovie50
    
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
