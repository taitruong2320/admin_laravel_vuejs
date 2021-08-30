
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Form = Form;
window.Vue = require('vue');
window.Swal = Swal;
window.Toast = Toast;

import Swal from 'sweetalert2'
import moment from 'moment'
import Form from 'vform'
import { Button, HasError, AlertError } from 'vform/src/components/bootstrap5'
import VueRouter from 'vue-router'
import VueProgressBar from 'vue-progressbar'

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
Vue.use(VueRouter)
Vue.use(VueProgressBar, {
  color: 'rgb(251 10 10)',
  failedColor: 'red',
  height: '2px'
})
Vue.filter('upText', function(text){
    return text.charAt(0).toUpperCase() + text.slice(1) //viết hoa chữ cái đầu tiên
})
Vue.filter('myDate', function(created){
    return moment(created).format('MMMM Do YYYY');
})

const routes = [
    { path: '/dashboard', component: require('./components/Dashboard.vue').default },
    { path: '/profile', component: require('./components/Profile.vue').default },
    { path: '/users', component: require('./components/Users.vue').default }
  ]
const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
})
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    
    el: '#app',
    router
});


