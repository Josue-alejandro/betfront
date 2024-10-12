import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router.js';
import Input from './components/Input.vue';
import Send from './components/Send.vue';

const app = createApp(App)

app.use(router)
app.component('Input', Input)
app.component('Send', Send)

app.mount('#app')