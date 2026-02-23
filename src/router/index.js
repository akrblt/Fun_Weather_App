import { createRouter, createWebHistory } from 'vue-router';
import HomeView from "../views/HomeView.vue";
import ResultView from '../views/ResultView.vue';

const routes = [
    {
        path: '/',
        name: 'acceuil',
        component:HomeView
    },
    {
        path: '/meteo/:ville',
        name : 'resultat',
        component : ResultView
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;