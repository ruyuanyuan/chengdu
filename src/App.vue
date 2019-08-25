<template>
  <div id="app">
    <!-- <Weather></Weather> -->
    <Header></Header>
    <Nav></Nav>
    <div class='contnet'>
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Weather from '@/components/Weather'
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
export default {
  components:{
    Weather,
    Header,
    Nav,
    Footer
  }
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  .contnet{
    width:100%;
  }
}
</style>
