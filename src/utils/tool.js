export default {
  install(Vue) {
    Vue.prototype.loading=null
    Vue.prototype.openload = function (){
      this.loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
    }
    Vue.prototype.closeload = function (){
      this.loading.close()
    }
  }
}

