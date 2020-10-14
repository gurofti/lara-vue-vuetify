<template>
    <div>
        <h1>This is coming from account modules with router</h1>
        <h4>{{ $store.state.name }}</h4>
        <h4>{{ $store.state.accountsStore.accountModule }}</h4>
        <h4>{{ getModuleName }}</h4>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: "accounttest",
    created() {
        // console.log(this.$store)
        console.log(this.$store.state.accountsStore.accountModule)
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
