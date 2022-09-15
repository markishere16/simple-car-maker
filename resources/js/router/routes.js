const login = () =>
    import( /* webpackChunkName: "login" */ '../auth/login');

const sign_up = () =>
    import( /* webpackChunkName: "login" */ '../auth/signup');



const cars = () =>  
import(/* webpackChunkName: "cars" */  '../pages/cars');
    
    
const manufacturer = () => 
 import( /* webpackChunkName: "manufacturer" */ '../pages/car-manufacturer');
const car_color = () => 
 import(/* webpackChunkName: "carColor" */  '../pages/car-color');
const car_type = () =>  
import(/* webpackChunkName: "car_type" */  '../pages/car-type');




import store from '../store/store'


function beforeMainAppEnter(to, form, next) {
    store.dispatch('IsAuthenticated').then((res) => {

        if (res == 1) {
            store.dispatch('fetchCurrentUser').then(() => {
                next();
            });

        } else {
            next('/login');
            return;
        }
    }).catch(() => {
        return next({
            path: "/login",
            replace: true
        });
    })
}

export default {
    mode: 'history',

    routes: [
        // {
        //     path: '',
        //     component: todoApp,
        //     name: 'todoApp',
        //     beforeEnter: (to, form, next) => {
        //         beforeMainAppEnter(to, form, next);
        //     },

        // },
        {
            path: '/car-manufacturer',
            component: manufacturer,
            name: 'car_manufacturer',

        },
        {
            path: '/car-color',
            component: car_color,
            name: 'car_color',

        },
        {
            path: '/car-type',
            component: car_type,
            name: 'car_type',

        },
        {
            path: '/cars',
            component: cars,
            name: 'cars',

        },
        {
            name: 'login',
            path: '/login',
            component: login,
            beforeEnter: (to, form, next) => {
                store.dispatch('IsAuthenticated').then((res) => {
                    if (res == 1) {
                        next('');
                    } else {
                        next();
                    }
                }).catch(() => {
                    return next();
                })
            },

        },
        {
            name: 'sign_up',
            path: '/sign-up',
            component: sign_up,
            beforeEnter: (to, form, next) => {
                store.dispatch('IsAuthenticated').then((res) => {
                    if (res == 1) {
                        next('');
                    } else {
                        next();
                    }
                }).catch(() => {
                    return next();
                })
            },

        },



    ],




}
