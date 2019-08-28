<template>
  <div class='park_template'>
    <diV class='content_item'>
      <div class='pad_card park_left'>
        <div class='pad_card_title'>
          <span class='pad_name'>大英风采</span>
        </div>
        <div class='pad_card_content'>
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
      <div class='pad_card park_right'>
        <div class='pad_card_title'>
          <span class='pad_name'>大英经开区宣传片</span>
        </div>
        <div class='pad_card_content'>
          <div class='park_contnet'>
              <video class='park_video' controls autoplay name="media" src="http://114.116.31.126/daying/%E5%A4%A7%E8%8B%B1%E5%AE%A3%E4%BC%A0%E7%89%87.mp4"></video>
          </div>
        </div>
      </div>
    </diV>
    <div class='content_item'>
       <div class='pad_card developArea'>
        <div class='pad_card_title'>
          <span class='pad_name'>大英经开区概况</span>
        </div>
        <div class='pad_card_content'>
          <div class='park_contnet'>
              <div class='park_map'>
                <img :src="parkIntroduce.mapUrl" alt="">
              </div>
              <div class='park_introduce'>
                <div class='park_doc'>
                  {{parkIntroduce.introduce}}
                </div>
                <div class='pack_bth'>
                  <a class='boder_bth' href="https//www.baidu.com">发展计划</a>
                  <a class='boder_bth' href="https//www.baidu.com">产业环境</a>
                  <a class='boder_bth' href="https//www.baidu.com">地貌特征</a>
                  <a class='boder_bth' href="https//www.baidu.com">园区产业</a>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
       parkDataList:{
          mainPark:{
            img_url:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1461836175,2413247160&fm=26&gp=0.jpg',
            img_href:'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml'
          },
          parklist:[
            {
              img_url:'http://s2.sinaimg.cn/bmiddle/61d8244fzx6CYBs56I9c1&690',
              img_href:'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml'
            },
            {
              img_url:'http://s2.sinaimg.cn/bmiddle/61d8244fzx6CYBs56I9c1&690',
              img_href:'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml'
            },
            {
              img_url:'http://s2.sinaimg.cn/bmiddle/61d8244fzx6CYBs56I9c1&690',
              img_href:'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml'
            },
            {
              img_url:'http://s2.sinaimg.cn/bmiddle/61d8244fzx6CYBs56I9c1&690',
              img_href:'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml'
            }
          ]
      },
      parkIntroduce:{
        mapUrl:'http://www.coolzou.com/Photo/2013/11/08/InfoArticle_19443_1.jpg',
        introduce:'大英县经济开发区成立于2001年12月，规划面积13.1平方公里，其中建设用地面积5.41平方公里，建成区5.41平方公里，常住人口1.2万，下辖红旗社区居委会。近年来，大英县经济开发区按照“工业经济园区化、园区发展专业化”的要求，规划建设化工产业区、纺织产业区、机电产业区三大功能区，已成功引进盛马石化、久大盐化、东煜光电、聚能科技、四川飞亚等规模以上工业企业78家，初步形成以石化、纺织、机电为主导的产业体系。目前，大英县经济开发区先后获得四川省新型工业化产业示范基地、四川省承接产业转移重点推荐 特色产业工业园、四川省招商引资承接产业转移优秀园区、 四川省知识产权试点园区、四川省小企业创业基地、四川省“园保贷”试点园区、四川省模范劳动关系和谐工业园区等 荣誉称号。2013年7月，园区被省政府纳入“51025”产业园区发展计划的“500亿园区”重点培育。2016年，全区完成工业总产值211.53亿元，主营业务收入203.16亿元，税收5.17亿元，实际利用外资212 万美元。'
      }
    }
  }
}
</script>
<style lang="scss">
  .park_template{
    width:100%;
    .park_left{
        float: left;
        width:750px;
        height: 100%;
        .park_contnet{
          width:100%;
          height:288px;      
          .park_main_img{
            width:40%;
            height: 100%;
            float: left;
            img{
              width:100%;
              height:100%;
            }
          }
          .park_img_item_list{
            float: left;
            width:60%;
            height:292px;
            .park_img_item{
              width:50%;
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
    .park_right{
      float:right;
      width:480px;
      height:100%;
      .park_contnet{
        width:100%;
        height:288px;
        .park_video{
          width:100%;
          height: 100%;
        }   
      }
    }
    .developArea{
      overflow: hidden;
      .park_map{
        float: left;
        width: 440px;
        height: auto;
        img{
          width:100%;
          height:auto;
        }
      }
      .park_introduce{
        float: right;
        width:740px;
        .park_doc{
          float: left;
          width:600px;
          font-size:$font14;
          line-height:32px;
          color:#1E1E1E;
        }
        .pack_bth{
          float: right;
          .boder_bth{
            display: block;
            width:130px;
            height:40px;
            margin-bottom:20px;
            border:1px solid $mainColor;
            color:$mainColor;
            text-align: center;
            line-height: 38px;
            background-color:#fff;
            font-size:$font14;
            &:hover{
              background-color:$mainHColor;
              color:#fff;
            }
          }
        }
        &:after{
          clear: both;
        }
      }
    }
    .mewant_item{
      display: inline-block;
      width:240px;
      height:54px;
      margin-right:96.67px;
      text-align: center;
      line-height:54px;
      font-size:$font14;
      color:#fff;
      &.item_green{
        background-color:rgba(109, 191, 109, 1);
      }
      &.item_hgreen{
        background-color:rgba(170, 222, 152, 1);
      }
       &.item_blue{
        background-color:rgba(89, 191, 222, 1);
      }
       &.item_hblue{
        background-color:rgba(45, 128, 217, 1);
      }
      &:last-child{
        margin-right: 0;
      }
    }
  }
</style>
