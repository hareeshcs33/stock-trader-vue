<template>
  <div id="app">
    <div class="app-page">
      <header-component></header-component>
      <div class="row m-0">
        <div class="col-xs-12 p-3 w-100">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from '@/components/header-component.vue'

export default {
  components: {
    HeaderComponent,
  },
  created(){
    this.$store.dispatch('initStocks');
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.cta-300 {
  min-width: 300px;
}
</style>
