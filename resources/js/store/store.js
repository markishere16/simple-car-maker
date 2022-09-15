import Vue from 'vue';
import Vuex from 'vuex';



Vue.use(Vuex);

import todos from './modules/todos'
import auth from './modules/auth'
import car_type from './modules/car_type';
import car_color from './modules/car_color';
import car_manufacturer from './modules/car_manufacturer';
import car from './modules/car';

export default new Vuex.Store({
    modules: {
        todos,
        auth,
        car_type,
        car_color,
        car_manufacturer,
        car

    },
})
