import { createRouter, createWebHistory } from 'vue-router';

import Login from './Pages/Login.vue';
import TicketMenu from './Pages/TicketMenu.vue';
import userAdmin from './Pages/userAdmin.vue';

const router = createRouter({
	history: createWebHistory(),
	routes:[
	{ path: '/login', component: Login},
	{ path: '/dashboard', component: TicketMenu},
	{ path: '/useradmin', component: userAdmin }
	]
});

export default router