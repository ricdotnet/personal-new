import { createApp } from 'vue';
import { router } from './router/router';

import App from './App.vue';
import './assets/_defaults.scss';

const app = createApp(App);

app.use(router);
app.mount('#app');
