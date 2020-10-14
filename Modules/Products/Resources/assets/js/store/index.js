export default {
    namespaced: true,
    state: {
        productModule: 'Product module'
    },
    getters: {
        getModuleName(state) {
            return state.productModule
        }
    }
}
