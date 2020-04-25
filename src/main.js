import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import router from './pages/routes';
import { store } from './store/store';
import Toasted from 'vue-toasted';
import './assets/scss/main.scss';

Vue.config.productionTip = false;
Vue.use(Toasted);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
