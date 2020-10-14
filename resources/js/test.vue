<template>
    <div>
        <h1>This is test page.</h1>
        <h4>{{ $store.state.name }}</h4>
        <h4>{{ $store.state.productsStore.productModule }}</h4>
        <h4>{{ getModuleName }}</h4>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: "accounttest",
    created() {
        // console.log(this.$store)
        console.log(this.$store)
    },
    computed: {
        ...mapGetters({
            'getModuleName': 'accountsStore/getModuleName'
        })
    }
}
</script>

<style scoped>

</style>
