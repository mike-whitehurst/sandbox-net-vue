import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './components/HomeView.vue'
import WeatherView from './components/WeatherView.vue'
import FormView from './components/FormView.vue'
import CompositionView from './components/CompositionView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/weather', component: WeatherView },
  { path: '/form', component: FormView },
  { path: '/composition', component: CompositionView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
