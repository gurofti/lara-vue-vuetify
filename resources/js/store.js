import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import accountsStore from '../../Modules/Accounts/Resources/assets/js/store'
import productsStore from '../../Modules/Products/Resources/assets/js/store'

export default new Vuex.Store({
    modules: {
        accountsStore,
        productsStore
    },
    state: {
        name: 'Sadek'
    }
})
