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
      <el-menu-item index="/investment">投资园区</el-menu-item>
      <el-menu-item index="/makepblic">政府公开</el-menu-item>
      <el-menu-item index="/service">办事服务</el-menu-item>
<!--      <el-menu-item index="/company">企服通</el-menu-item>-->
      <el-menu-item index='/party'>党群党建</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
  import {mapMutations} from 'vuex'
  export default {
    data: function () {
      return {
        activeIndex: '/home'
      };
    },
    watch: {
      $route() {
        let setQuery = this.$route.query;
        console.log("route=====",setQuery);
        if(setQuery.parkId)this.setParkId(setQuery.parkId);
        let ai = this.$route.path;
        if (ai === '/newlist' || ai === '/newDetails') {
          ai = '/news';
          if (setQuery.modelId === '8') ai = '/party';
        } else if (ai === '/departmentDetails' || ai === '/leader' || ai === '/leaderDetails') {
          ai = '/makepblic';
        } else if (ai === '/seachList') {
          ai = '/home';
        }
        this.activeIndex = ai;
      }
    },
    methods: {
      ...mapMutations(["setParkId"]),
    },
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
      width: 179px;
      text-align: center;
      font-size: 20px;
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
