<template>
    <div class="col-12 col-sm-6 col-lg-4">
       <div class="card w-100 m-2" style="width: 18rem;">
            <div class="card-header">
                <h4 class="card-title">{{stock.name}} <small>(price: {{stock.price}})</small></h4>
            </div>
            <div class="card-body">
                <div class="d-flex align-items-center justify-content-between">
                    <input 
                        type="number" 
                        class="form-control mr-3" 
                        placeholder="Quantity" 
                        v-model="quantity"
                        :class="{'input-error': insufficientFunds}"
                        />
                    <button 
                        class="btn btn-success w-100"
                        @click="buyStock"
                        :disabled="insufficientFunds || quantity <= 0 "
                        >{{insufficientFunds ? 'Insufficient Fund' : 'Buy'}}</button>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.input-error {
    border: 1px solid red;
}
.input-error:focus {
    border-color: red;
    box-shadow: 0 0 0 1px rgb(219, 117, 117);
}
</style>
<script>
export default {
    props: ['stock'],
    data(){
        return {
            quantity: 0,
        }
    },
    computed: {
        funds(){
            return this.$store.getters.funds;
        },
        insufficientFunds(){
            return this.quantity * this.stock.price > this.funds;
        }
    },
    methods: {
        buyStock(){
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            };
            this.$store.dispatch('buyStock', order);
            this.quantity = 0;
        }
    }
}
</script>
