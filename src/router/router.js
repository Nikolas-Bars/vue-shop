import { createRouter, createWebHashHistory } from 'vue-router'

import vCatalog from '../components/v-catalog'
import vCart from '../components/v-cart'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'catalog',
            component: vCatalog
        },
        {
            path: '/cart',
            name: 'cart',
            component: vCart,
            props: true
        }
    ]
})
