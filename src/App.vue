<template>
  <div id="app">
    <!-- <Weather></Weather> -->
    <Header></Header>
    <Nav></Nav>
    <div class='contnet' :style='"min-height:"+minheight+"px"'>
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
  },
  data(){
    return {
      minheight:500
    }
  },
  mounted(){
    let winH=document.body.clientHeight;
    this.minheight=winH-300
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
    min-height:500px;
  }
}
</style>
