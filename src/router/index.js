import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: () => import('@/pages/edit')
    },
    {
        path: '/result',
        component: () => import('@/pages/result'),
    }
];

const routers = new VueRouter({
    routes
});

export default routers;