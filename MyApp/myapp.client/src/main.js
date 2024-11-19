import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './components/HomeView.vue'
import WeatherView from './components/WeatherView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/weather', component: WeatherView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
