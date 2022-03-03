import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import MovieAm from "./components/MovieAm.vue"
import MovieDetail from "./components/MovieDetail.vue"
import MovieFr from "./components/MovieFr.vue"
import MovieNew from "./components/MovieNew.vue"
import TopMovie50 from "./components/TopMovie50.vue"

Vue.use(VueRouter)


Vue.config.productionTip = false

import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const lesRoutes = [
  {
  
    path: '/films-americains',
    component: MovieAm
    
  },
  {
    
    path: '/detail-du-film:id',
    component: MovieDetail
    
  },
  {
    
    path: '/films-français',
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
  routes: lesRoutes,
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
