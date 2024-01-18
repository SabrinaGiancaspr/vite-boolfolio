import {createRouter, createWebHistory} from 'vue-router';

import Home from './views/Home.vue';
import Portfolio from './views/Portfolio.vue';
import Contact from './views/Contact.vue';
import ProjectList from './views/ProjectList.vue';
import NotFound from './views/NotFound.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [ 
        {
         path: '/',
         name: 'home',
         component: Home,
        },
        {
         path: '/portfolio',
         name: 'portfolio',
         component: Portfolio,
        },
        {
         path:'/portfolio/:slug',
         name: 'projectList',
         component: ProjectList,
        },
        {
         path: '/contacts',
         name: 'contacts',
         component: Contact,
        }, 
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFound,
        },
    ],
});

export {router};
