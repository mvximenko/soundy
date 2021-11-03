import { createApp } from 'vue';
import { onAuthStateChanged } from 'firebase/auth';
import App from './App.vue';
import router from './router';
import store from './store';
import VeeValidatePlugin from './includes/validation';
import { auth } from './includes/firebase';
import Icon from './directives/icon';
import './assets/tailwind.css';
import './assets/main.css';
import i18n from './includes/i18n';
import './registerServiceWorker';
import GlobalComponents from './includes/_globals';
import ProgressBar from './includes/progress-bar';
import 'nprogress/nprogress.css';

ProgressBar(router);

let app;

onAuthStateChanged(auth, () => {
  if (!app) {
    app = createApp(App).use(i18n);

    app.use(store);
    app.use(router);
    app.use(VeeValidatePlugin);
    app.use(GlobalComponents);
    app.directive('icon', Icon);

    app.mount('#app');
  }
});
