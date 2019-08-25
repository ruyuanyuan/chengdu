<template>
  <div class='newdetails_template'>
    <div class='content_item'>
        <div class='newdetails_heade'>
          当前位置： 网站首页 > 新闻中心 > 高新要闻
        </div>
        <div class='newsbox'>
           <div class='news_detail'>
            <h4 class='news_title'>
            {{newsdata.title}}
            </h4>
            <div class='newsTag'>
              <span class='news_date'>{{newsdata.date}}</span>
              <span class='news_source'>来源{{newsdata.source}}</span>
              <span class='news_view'>浏览量：{{newsdata.views}}次</span>
            </div>
            <div class='news_content' v-html="newsdata.content">
            </div>
          </div>
          <div class='news_top5'>
            <div class='top_header'>
              新闻类
            </div>
            <div class='topcontent'>
              <div class='newsday'>
                <div class='newsday_item'>
                  日榜
                </div>
              </div>
              <div class='newsLists'>
                <li v-for='(item,index) in newsTop' :key='index'>
                  <span class="btno btn-info btn-xs">{{index+1}}</span>
                  <a :href="item.href">{{item.title}}</a></li>
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
      newsdata:{
        title:"成都柔性显示工业设计大赛颁奖典礼在成都高新区举行",
        date : "2019-08-23 09:08",
        source:'成都高新区融媒体中心',
        views:69,
        content:'<div id="cont-l-messages"><p style="TEXT-ALIGN: center; LINE-HEIGHT: 2; TEXT-INDENT: 2em; FONT-FAMILY: 宋体; FONT-SIZE: 12pt"><img style="FILTER: ; WIDTH: 650px; HEIGHT: 324px" border="0" src="959b63b265c445f898a4386ebb2e38b4/images/4d5d8ca7aa8f4cc8a573b54cd388afda.png"></p><p style="TEXT-JUSTIFY: inter-ideograph; TEXT-ALIGN: justify; LINE-HEIGHT: 2; TEXT-INDENT: 2em; FONT-FAMILY: 宋体; FONT-SIZE: 12pt">近日，“芯火杯”智能硬件创新创业大赛暨成都柔性显示工业设计大赛颁奖典礼在成都高新区举行。</p><p style="TEXT-JUSTIFY: inter-ideograph; TEXT-ALIGN: justify; LINE-HEIGHT: 2; TEXT-INDENT: 2em; FONT-FAMILY: 宋体; FONT-SIZE: 12pt">据介绍，本次大赛于今年6月开赛，设置产品组与概念组两个组别展开评选，通过初审、复赛、决赛等环节进行角逐，最终宠物喂食机、下一代任天堂折叠平板掌机、智能星球仪以及柔屏骑手头盔、柔性屏在智能家居影音系统中的应用、笔式PAD分别获得大赛产品组与概念组的一二三等奖。</p><p style="TEXT-JUSTIFY: inter-ideograph; TEXT-ALIGN: justify; LINE-HEIGHT: 2; TEXT-INDENT: 2em; FONT-FAMILY: 宋体; FONT-SIZE: 12pt">成都高新区党工委委员、管委会副主任赵继东出席颁奖典礼并为一等奖获奖者颁奖。（记者 黄启恒）</p></div>'
      },
      newsTop:[
        {
          href:'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml',
          title:'成都高新区战” 加快建设国家高质量发展示范区'
        },
        {
          href:'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml',
          title:'加快建设国家高质量发展示范区'
        },
        {
          href:'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml',
          title:'成都高新区打” 加快建设国家高质量发展示范区'
        },
        {
          href:'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml',
          title:'成都高新区打家高质量发展示范区'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
  .newdetails_template{
    .newdetails_heade{
      width:100%;
      height: 40px;
      line-height:40px;
      border-bottom:1px solid #ddd;
      font-size: 14px;
    }
    .newsbox{
      width:100%;
      overflow: hidden;
      padding:20px;
      .news_detail{
        float: left;
        width:875px;
        .news_title{
          line-height: 50px;
          font-weight: bold;
          margin-bottom: 30px;
          margin-top: 2px;
          text-align: center;
          font-size: 36px;
          color: #333333;
        }
        .newsTag{
          font-size: 14px;
          color:#333;
          padding-bottom: 20px;
          border-bottom:1px solid #ddd;
          span{
            padding-right:15px;
          }
        }
        .news_content{
          padding:20px;
        }
      }
      .news_top5{
        float: right;
        width:310px;
        border: 1px solid #eee;
        padding: 0 20px 20px 20px;
        .top_header{
          height: 45px;
          background-color: #fbfbfb;
          border-bottom: #f2f2f2 solid 1px;
          margin: 0 -20px;
          line-height: 45px;
          font-size: 15px;
          text-indent: 20px;
          margin-bottom: 10px;
        }
        .newsday{
          width: 100%;
          border-bottom: 1px solid #ddd;
          .newsday_item{
              width: 49.6%;
              display: inline-block;
              text-align: center;
              border-bottom:2px solid $mainColor;
              cursor: default;
              background-color: transparent;
              color: $mainColor;
              font-weight: bold;
              font-size: 18px;
              padding:8px 12px;
          }
        }
        .newsLists{
          margin-top: 10px;
          li{
            line-height: 30px;
            overflow: hidden;
            padding: 0 0 0 35px;
            font-size: 15px;
            position: relative;
            margin-bottom: 15px;
            padding-bottom: 10px;
            border-bottom: dashed 1px #ccc;
            .btno {
                margin-right: 10px;
                padding: 0 6px;
                position: absolute;
                left: 0;
                top: 8px;
                font-size: 12px;
                border-radius: 3px;
                line-height: 20px;
            }
            .btn-info {
                color: #fff;
                background-color: $mainColor;
                border-color: $mainColor;
            }
          }
        }
      }
    }
  }
</style>