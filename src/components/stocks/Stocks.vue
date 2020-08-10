<template>
    <div class="row">aaa
       <stock 
            v-for="(stock, index) in stocks" 
            :key="index"
            :stock="stock"></stock>
    </div>
</template>
<script>
import Stock from './Stock.vue';

export default {
    components: {
        Stock,
    },
    computed: {
        stocks(){
            console.log('computed stocks', this.$store.getters.stocks)
            return this.$store.getters.stocks;
        }
    }
}
</script>