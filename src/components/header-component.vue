<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <h3 class="navbar-brand">
                <router-link to="/">Stock Trader</router-link>
            </h3>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active d-flex align-items-center justify-content-center px-2">
                        <router-link to="/portfolio">Portfolio</router-link>
                    </li>
                    <li class="nav-item active d-flex align-items-center justify-content-center px-2">
                        <router-link to="/stocks">Stocks</router-link>
                    </li>
                </ul>
                <ul class="navbar-nav navbar-right">
                    <li><a class="dropdown-item font-weight-bold" href="#" @click="endDay">end Day</a></li>
                    <li 
                        class="dropdown pr-3 pt-1"
                        :class="{show: isDropdownOpen}"
                        @click="isDropdownOpen = !isDropdownOpen"
                        >
                        <a
                            class="dropdown-toggle"
                            data-toggle="dropdown"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                            href="#"
                            :class="{show: isDropdownOpen}"
                            >Save & Load</a>
                            <ul class="dropdown-menu">
                                <li class="text-center"><a href="#" class="d-block" @click="saveData">Save Data</a></li>
                                <li class="text-center"><a href="#" class="d-block" @click="loadData">Load Data</a></li>
                            </ul>
                    </li>
                </ul>
                <strong class="navbar-text navbar-right">Funds: {{ funds | currency}}</strong>
            </div>
        </nav>
    </div>
</template>
<script>
import {mapActions} from 'vuex';

export default {
    data(){
        return {
            isDropdownOpen: false,
        }
    },
    computed: {
        funds(){
            return this.$store.getters.funds;
        }
    },
    methods: {
        ...mapActions({
            randomizeStocks: 'randomizeStocks',
            fetchData: 'loadData'
        }),
        endDay(){
            this.randomizeStocks();
        },
        saveData(){
            const data = {
                funds: this.$store.getters.funds,
                stockPortfolio: this.$store.getters.stockPortfolio,
                stocks: this.$store.getters.stocks
            };
            this.$http.put('data.json', data);
        },
        loadData(){
            this.fetchData();
        }
    }
}
</script>