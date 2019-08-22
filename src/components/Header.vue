<template>
  <div class="header_templater">
    <div class="header_logo">
      <p class='header_name'>四川省大英经济开发区</p>
      <p class='header_en'>SICHUAN DAYING ECONOMIC DEVELOPMENT ZONE </p>
    </div>
    <div class="header_seach">
       <el-input placeholder="请输入关键字" v-model="seachName" class="input-with-select">
        <el-button slot="append" icon="el-icon-search">搜索</el-button>
      </el-input>
      <p class='hold_word'>热搜词：
         <span class='word_item' v-for='(item,index) in keywordList' :key='index'>{{item}}</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      seachName:'',
      keywordList:['化工','汽车制造']
    };
  }
};
</script>
<style lang="scss">
.header_templater{
  width:100%;
  padding:0 30px;
  margin-top:40px;
  margin-bottom:40px;
  overflow: hidden;
  .header_logo{
    float: left;
    .header_name{
      font-size:28px;
      color:#333;
      line-height:30px;
      font-weight:bold;
    }
    .header_en{
      font-size:16px;
      color:#666;
      line-height:30px;
      font-weight:bold;
    }
  }
  .header_seach{
    float: right;
    .hold_word{
      font-size:14px;
      color:#333;
      font-weight:bold;
      line-height: 30px;
    }
    .word_item{
      margin:0 5px;
      font-weight:400;
    }
  }
}
</style>