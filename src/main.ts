import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import installSocket from './config/socket'

const app = createApp(App)
app
  .use(createPinia())
  .mount('#app')
installSocket()
