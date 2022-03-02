import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const router = new VueRouter({
  mode: 'history',
  routes: lesRoutes,
})

const lesRoutes = [
  {
   
    path: '/',
    component: Home
  },
  {
    
    path: '/admin/user/add',
    component: CreateUser
  },
  {
    
    path: '/admin/user/update',
    component: UpdateUser
  },
  {
   
    path: '/admin/user',
    component: UserAdmin
  },
  {
    
    path: '/calendar',
    component: AstreinteCalendar
  }
];

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
