import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)

import testPage from './test.vue'

// import account routes
import accountRoutes from '../../Modules/Accounts/Resources/assets/js/router'
import productsRoutes from '../../Modules/Products/Resources/assets/js/router'

const defaultRoutes = [
    {
        path: '/testpage',
        component: testPage
    }
]

let routes = []
routes = routes.concat(
    defaultRoutes,
    accountRoutes,
    productsRoutes
)

export default new Router({
    mode: 'history',
    routes
})
