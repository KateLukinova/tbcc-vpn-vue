// JS
import './js/'

// SCSS
import './assets/scss/main.scss'

// CSS (example)
// import './assets/css/main.css'

// Vue.js
window.Vue = require('vue')
import vSelect from 'vselect-component'
import VueRouter from "vue-router";
import { i18n } from './plugins/i18n.js'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {store} from '../store';

Vue.use(VueRouter)
Vue.use(vSelect)
Vue.use(VueAxios, axios)

window.EventBus = new Vue();

// Vue components (for use in html)
const MFooter = Vue.component('MFooter', require('./components/MFooter.vue').default)
const MHeader = Vue.component('MHeader', require('./components/MHeader.vue').default)
const LangSelect = Vue.component('LangSelect', require('./components/LangSelect.vue').default)
const App = Vue.component('App', require('./components/App.vue').default)
const Main = Vue.component('Main', require('./components/Main.vue').default)


const routes = [
  { path: '/', component: Main },
  { path: '/main', component: Main }
]

const router = new VueRouter({
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
})

window.eventBus = new Vue();

// Vue init
const app = new Vue({
  router,
  i18n,
  mode: 'history'
}).$mount('#app')


//aos
import AOS from "aos";
import "aos/dist/aos.css";
app.AOS = new AOS.init({ disable: "phone" });

