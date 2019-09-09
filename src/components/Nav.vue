<template>
  <div class="nav_templater">
    <el-menu :default-active="activeIndex"
             class="nav_menu" mode="horizontal"
             text-color="rgba(204, 0, 0, 1)"
             active-text-color="rgba(204, 0, 0, 1)"
             router
    >
      <el-menu-item index="/home">首页</el-menu-item>
      <el-menu-item index="/news">新闻中心</el-menu-item>
      <el-menu-item index="/park">走进园区</el-menu-item>
      <el-menu-item index="/investment">投资大英</el-menu-item>
      <el-menu-item index="/makepblic">政府公开</el-menu-item>
      <el-menu-item index="/service">办事服务</el-menu-item>
      <el-menu-item index="/company">企服通</el-menu-item>
      <el-menu-item index='/party'>党群党建</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        activeIndex: '/home'
      };
    },
    watch: {
      $route() {
        console.log("route=====", this.$route.query);
        let ai = this.$route.path;
        if (ai === '/newlist' || ai === '/newDetails') {
          ai = '/news';
          if (this.$route.query.modelId === '8') ai = '/party';
        } else if (ai === '/departmentDetails' || ai === '/leader' || ai === '/leaderDetails') {
          ai = '/makepblic';
        }
        this.activeIndex = ai;
      }
    }
  };
</script>
<style lang="scss">
  .nav_templater {
    width: 100%;
    height: 60px;
    line-height: 60px;

    .nav_menu {
      display: flex;
      justify-content: center;
      background: rgba(249, 249, 249, 1);
      border: 0;
    }

    .el-menu-item {
      width: 120px;
      text-align: center;
      font-size: 16px;
      background: rgba(249, 249, 249, 1) !important;
      color: $mainColor;

      &:hover {
        background: rgba(249, 249, 249, 1) !important;
      }

      &.is-active {
        font-weight: bold;
        border-bottom: 4px solid $mainColor !important;
      }
    }

    .el-menu.el-menu--horizontal {
      border: 0;
    }
  }
</style>
