import { createApp } from "vue";

// ROUTES
import App from "./App.vue";
import router from './routes/router'

// STATIC FILES
import './global/global.css';
import './public/layouts/typing.js'

// APP
const app = createApp(App)
app.use(router)
app.mount('#app')