<template>
  <div id="app">
    <div class="app-page">
      <header-component></header-component>
      <div class="row m-0">
        <div class="col-xs-12 p-3 w-100">
          <transition name="slide" mode="out-in">
            <router-view/>
          </transition>
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

.slide-enter-active {
  animation: slide-in 200ms ease-out forwards;
}
.slide-leave-active {
  animation: slide-out 200ms ease-out forwards;
}
@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>
