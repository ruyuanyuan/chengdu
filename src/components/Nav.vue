<template>
  <div class="nav_templater">
    <el-menu :default-active="activeIndex" 
      class="nav_menu" mode="horizontal" 
      text-color="#fff"
      active-text-color="#fff"
      router
    >
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="/news">新闻中心</el-menu-item>
      <el-menu-item index="3">走进园区</el-menu-item>
      <el-menu-item index="4">投资大英</el-menu-item>
      <el-menu-item index="5">政府公开</el-menu-item>
      <el-menu-item index="6">企服通</el-menu-item>
      <el-menu-item index="7">党群党建</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      activeIndex:'1'
    };
  }
};
</script>
<style lang="scss">
.nav_templater{
  width:100%;
  height:60px;
  line-height:60px;
  
  .nav_menu{
    display:flex;
    justify-content:center;
    background:$mainColor;
    border:0;
  }
}
</style>