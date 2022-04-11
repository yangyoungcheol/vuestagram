import { createApp } from 'vue'
import App from './App.vue'
import mitt from "mitt"
// import Vue from 'vue'
import {  BootstrapVue3  } from 'bootstrap-vue-3'
import { createWebHistory, createRouter } from 'vue-router';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import routes from './router.js'

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
  })


let emitter = mitt();
let app = createApp(App);
app.config.globalProperties.emitter = emitter;

app.use(BootstrapVue3)
app.use(router)

import store from './Store';
import './registerServiceWorker'

app.use(store).mount('#app')
