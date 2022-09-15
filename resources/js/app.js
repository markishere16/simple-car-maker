require('./bootstrap');

import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue';
import store from "./store/store";
import VueRouter from 'vue-router'
import routes from './router/routes'
import vuetify from './plugins/vuetify'
import Toasted from 'vue-toasted';

Vue.use(Toasted);
Vue.use(VueRouter);
Vue.component('app', require('./mainApp.vue').default);

const app = new Vue({
    el: '#app',
    vuetify,
    store,
    router: new VueRouter(routes),
  
})