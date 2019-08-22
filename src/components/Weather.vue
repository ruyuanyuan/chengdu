<template>
  <div class="WeatHer_templater">
    <div class="WeatHer_box">
      <span class="today">
        今天是：{{today}}&nbsp;&nbsp;{{weekDay}} <span class='spaceline'></span> 
        <span class='ctiyName'>成都</span> &nbsp;&nbsp;
        <img class='weather_img'  src="@/assets/img/yun.png" />
        {{temperature}} <span class='spaceline'></span>
        空气质量：
        <span :class='qualityColor'>{{quality}}</span>
      </span>
    </div>
    <div class="WeatHer_potal">
      <div class='potal_item' v-for="item in potalList" :key='item.name'>
        <a :href="item.href">{{item.name}}</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      today: "2019年08月02日",
      weekDay: "星期五",
      temperature: "27℃~20℃",
      quality: "良",
      potalList:[
        {
          name:'遂宁新闻网',
          href:'http://www.snxw.com/'
        },
        {
          name:'遂宁传媒网',
          href:'http://www.sngdw.com/'
        }
      ]
    };
  },
  computed: {
    qualityColor: function() {
      let colors;
      switch (this.quality) {
        case "良":
          colors = "greenColor";
          break;
        case "中":
          colors = "yellowColor";
          break;
        case "差":
          colors = "redColor";
          break;
      }
      return colors
    }
  }
};
</script>
<style lang="scss">
.WeatHer_templater{
  width:100%;
  padding:0 30px;
  height:40px;
  line-height:40px;
  background-color:rgba(244, 255, 255, 1);
  .WeatHer_box{
    float: left;
    .weather_img{
      height:20px;
      width:20px;
      vertical-align: middle;
    }
    .ctiyName{
      font-weight: bold;
    }
    .spaceline{
      display: inline-block;
      margin:0 10px;
      position: relative;
      top:3px;
      height:16px;
      width:1px;
      line-height:16px;
      background-color:#666;
    }
  }
  .WeatHer_potal{
     float: right;
    .potal_item{
      display: inline-block;
      height:16px;
      line-height:16px;
      padding:0 20px;
      border-left:1px solid #666;
      &:first-child{
        border-left:0;
      }
      &:last-child{
        padding-right:0;
      }
    }
  }
}
</style>