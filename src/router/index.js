import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: () => import('@/pages/edit')
    },
    {
        path: '/result/:values',
        component: () => import('@/pages/result'),
        props: true
    }
];

const routers = new VueRouter({
    mode: 'history',
    routes
});

export default routers;