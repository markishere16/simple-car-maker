const todoApp = () =>
    import( /* webpackChunkName: "mainApp" */ '../todoApp');

const login = () =>
    import( /* webpackChunkName: "login" */ '../auth/login');

const sign_up = () =>
    import( /* webpackChunkName: "login" */ '../auth/signup');

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

    routes: [{
            path: '',
            component: todoApp,
            name: 'todoApp',
            beforeEnter: (to, form, next) => {
                beforeMainAppEnter(to, form, next);
            },

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
