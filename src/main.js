import { createApp } from 'vue'
import App from './App.vue'
import mitt from "mitt"
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

let emitter = mitt();
let app = createApp(App);
app.config.globalProperties.emitter = emitter;

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import store from './Store';
import './registerServiceWorker'

app.use(store).mount('#app')
