<template>
  <div id="app">
    <Weather></Weather>
    <router-view/>
  </div>
</template>
<script>
import Weather from '@/components/Weather'
export default {
  components:{
    Weather
  }
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}
</style>
