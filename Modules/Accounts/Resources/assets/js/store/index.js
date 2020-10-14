export default {
    namespaced: true,
    state: {
        accountModule: 'Account store'
    },
    getters: {
        getModuleName(state) {
            return state.accountModule
        }
    }
}
