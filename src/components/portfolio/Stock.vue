<template>
    <div class="col-12 col-sm-6 col-lg-4">
       <div class="card w-100 m-2" style="width: 18rem;">
            <div class="card-header">
                <h4 class="card-title">{{stock.name}} <small>(price: {{stock.price}}) | Quantity:{{ stock.quantity }}</small></h4>
            </div>
            <div class="card-body">
                <div class="d-flex align-items-center justify-content-between">
                    <input
                        type="number"
                        class="form-control mr-3"
                        placeholder="Quantity"
                        v-model="quantity"
                        :class="{'input-error':insufficientQuantity}"
                        />
                    <button
                        class="btn btn-success w-100"
                        @click="sellStock"
                        :disabled="insufficientQuantity || quantity <= 0 "
                        >{{insufficientQuantity ? 'Not Enough Stocks' : 'Sell'}}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    props: ['stock'],
    data(){
        return {
            quantity: 0,
        }
    },
    computed: {
        insufficientQuantity(){
            return this.quantity > this.stock.quantity;
        }
    },
    methods: {
        ...mapActions({
            placeSellOrder: 'sellStock'
        }),
        sellStock(){
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            };
            this.placeSellOrder(order);
            this.quantity = 0;
        }
    }
}
</script>