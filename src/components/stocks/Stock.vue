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
                        />
                    <button 
                        class="btn btn-success"
                        @click="buyStock"
                        :disabled="quantity <= 0 "
                        >Buy</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['stock'],
    data(){
        return {
            quantity: 0,
        }
    },
    methods: {
        buyStock(){
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            };
            console.log(order);
            this.quantity = 0;
        }
    }
}
</script>