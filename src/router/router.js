import { createRouter, createWebHashHistory } from 'vue-router'

import vCatalog from '../components/v-catalog'
import vCart from '../components/v-cart'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: vCatalog
        },
        {
            path: '/cart',
            component: vCart
        }
    ]
})
