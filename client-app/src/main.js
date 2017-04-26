// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Multiselect from 'vue-multiselect';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';

import store from './store/store';

import App from './App';

Vue.use(Buefy);

Vue.component('multiselect', Multiselect);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  store,
  components: { App },
});
