<template>
  <div class='footer_template'>
    <div class='footer_content_box'>
      <div class='footer_content'>
          <div class='wx_img'>
            <img src="@/assets/img/wx.png" alt="">
          </div>
          <div class='footer_p_list'>
            <p class='footer_p_item'>
              关于我们 |使用帮助 | 网站申明 | 网站地图 | 单位内页 | 联系我们 | 蜀ICP备16029625号| 网站标识码：510xxxxxxxx    公安机关备案号：510xxxxxxxxxxxx
            </p>
            <p class='footer_p_item'>
              主办：中共大英县委 大英县人民政府   承办：大英县人民政府办公室   网站维护：大英县人民政府电子政务外网办公室   技术支持：航天云网
            </p>
          </div>
      </div>
    </div>
    
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
  .footer_template{
    width:100%;
    height:auto;
    margin-top:20px;
    .footer_content_box{
      width:100%;
      background-color: rgba(242, 242, 242, 1);
      padding:20px 0;
      .footer_content{
        width:1250px;
        margin:0 auto;
        text-align: center;
        .wx_img{
         display: inline-block;
          height: 60px;
         position: relative;
         top:12px;
          img{
            height:60px;
          }
        }
        .footer_p_list{
          display: inline-block;
          line-height: 30px;
          margin-left:10px;
          .footer_p_item{
            text-align: left;
          }
        }
      }
    } 
    
  }
</style>