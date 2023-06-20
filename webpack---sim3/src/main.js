import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Toasted from 'vue-toasted'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueRouter)

Vue.use(Toasted, {
    duration: 1350,
    position: 'bottom-right',
    action: {
        //text: 'Hide',
        onClick: (e, toastObject) => {
            toastObject.goAway(0);
        }
    }
})


const router = new VueRouter({
    routes: [{
            path: '/v1/:answers',
            name: 'v1',
        },
        {
            path: '/a/:answers',
            name: 'answers',
        },
        {
            path: '/',
            name: 'reset',
        },
    ]
})

new Vue({
    render: h => h(App),
    router
}).$mount('#app')