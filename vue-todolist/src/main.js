import Vue from 'vue'
import App from './App.vue'
import store from './index.js';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPlus, faCheck, faTrash);
Vue.component("font-awsome-icon", FontAwesomeIcon);

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})