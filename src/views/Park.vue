<template>
  <div class='park_template'>
    <diV class='content_item'>
      <div class='pad_card padmin'>
        <div class='pad_card_title'>
          <span class='pad_name'>大英风采</span>
        </div>
        <div class='padding_card_content'>
          <div class='park_contnet'>
              <div class='park_main_img'>
                <a :href="parkDataList.mainPark.img_href">
                  <img :src="parkDataList.mainPark.img_url" alt="">
                </a>
              </div>
              <div class='park_img_item_list'>
                <div class='park_img_item' v-for="(item,index) in parkDataList.parklist" :key='index'>
                  <a :href="item.img_href">
                     <img :src="item.img_url" alt="">
                  </a>
                </div>
              </div>
            </div>
        </div>
      </div>
    </diV>
  </div>
</template>
<script>
export default {
  data(){
    return {
       parkDataList:{
          mainPark:{
            img_url:'http://img4.imgtn.bdimg.com/it/u=332114246,2109333098&fm=26&gp=0.jpg',
            img_href:'https://www.baidu.com'
          },
          parklist:[
            {
              img_url:'http://s2.sinaimg.cn/bmiddle/61d8244fzx6CYBs56I9c1&690',
              img_href:'https://www.baidu.com'
            },
            {
              img_url:'http://s2.sinaimg.cn/bmiddle/61d8244fzx6CYBs56I9c1&690',
              img_href:'https://www.baidu.com'
            },
            {
              img_url:'http://s2.sinaimg.cn/bmiddle/61d8244fzx6CYBs56I9c1&690',
              img_href:'https://www.baidu.com'
            },
            {
              img_url:'http://s2.sinaimg.cn/bmiddle/61d8244fzx6CYBs56I9c1&690',
              img_href:'https://www.baidu.com'
            }
          ]
      }
    }
  }
}
</script>
<style lang="scss">
  .park_template{
    width:100%;
     .park_contnet{
        width:100%;
        height:298px;
        padding-top:10px;
        .park_main_img{
          width:470px;
          height: 100%;
          float: left;
          img{
            width:100%;
            height:100%;
          }
        }
        .park_img_item_list{
          float: left;
          width:780px;
          height:292px;
          .park_img_item{
            width:33.33%;
            height:50%;
            padding-left:4px;
            padding-bottom:4px;
            float: left;
            img{
              width:100%;
              height:100%;
            }
          }
        }
      }
  }
</style>