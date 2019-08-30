<template>
  <div class='newdetails_template'>
    <div class='content_item'>
        <div class='newdetails_heade'>
         当前位置： 网站首页 / 政务公开 / 基本信息公开 / 领导之窗 / 部门 / 两委办公室
        </div>
        <div class='leader_level'>
          <div class='leader_level_item' v-for='item in leaderLevel' :key='item.level'>{{item.name}}</div>
        </div>
        <div class='leader_list'>
          <div class='leader_list_nav'>
            
          </div>
          <div class='leader_list_content'>
            
           
          </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      leaderLevel:[
        {
          level:1,
          level_name:'区级领导'
        },
        {
          level:2,
          level_name:'部门'
        },
        {
          level:3,
          level_name:'街道(乡镇)'
        }
      ]
    }
  },
  created() {
    
  },
  methods: {
    
  },
}
</script>
<style lang="scss">
  .newdetails_template{
    .newdetails_heade{
      width:100%;
      height: 40px;
      line-height:40px;
      border-bottom:1px solid #ddd;
      font-size: $font14;
    }
    .leader_level{
      width:100%;
      height:auto;
      display: flex;
      border-bottom:1px solid $mainColor;
      .leader_level_item{
        width:120px;
        height:40px;
        color:#333;
        text-align: center;
        line-height: 40px;
        &.active{
          background:$mainColor;
        }
      }
    }
    .leader_list{
      width:100%;
      padding-top:20px;
      overflow: hidden;
      .leader_list_nav{
        width: 20%;
        padding: 0 10px;
        background: #fafafa;
        float: left;
        
      }
      .leader_list_content{
        width: 80%;
        padding: 0 10px;
        float: right;

      }
     
    }
  }
</style>