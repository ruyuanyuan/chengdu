<template>
  <div class='newdetails_template'>
    <div class='content_item'>
      <div class='newdetails_heade'>
        当前位置： 网站首页 > 新闻中心
      </div>
      <div class='newsbox'>
        <div class='news_detail'>
          <h4 class='news_title'>
            {{newsdata.title}}
          </h4>
          <div class='newsTag'>
            <span class='news_date'>{{dateFormat_YMD(newsdata.newsDate)}}</span>
            <!--            <span class='news_source'>来源{{newsdata.source}}</span>-->
            <span class='news_view'>浏览量：{{newsdata.views?newsdata.views:0}}次</span>
          </div>
          <div class='news_content'>
            <div class='leader_img'>
              <img src="http://www.cdht.gov.cn/cdhtz/qjldgxq/2019-07/26/35458521ab004576a4825d1164ab2234/images/0e83fdab7f3f48ce86d7ad740d602779.jpg" alt="">
            </div>
            <div class='leader_info'>
              <label >领导职务：</label>
              <p>党工委书记</p>
            </div>
            <div class='leader_info'>
              <label >领导分工：</label>
              <p>负责高新区全面工作。</p>
            </div>
             <div class='leader_info'>
              <label >领导简历：</label>
              <p>男，汉族，1976年3月生，安徽寿县人，1998年4月加入中国共产党，2004年7月参加工作，清华大学计算机科学与技术专业毕业，博士研究生学历，工学博士，副教授。</p>
            </div>
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

  import Axios from '@/utils/axiosWrap'
  import DateFormat from '@/utils/momentWrap'
  import AjaxApi from '@/service/ajaxApi'

  export default {
    props: {
      id: Number,
    },
    data() {
      return {
        newsdata: {},
        newsTop: [
          {
            href: 'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml',
            title: '成都高新区战” 加快建设国家高质量发展示范区'
          },
          {
            href: 'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml',
            title: '加快建设国家高质量发展示范区'
          },
          {
            href: 'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml',
            title: '成都高新区打” 加快建设国家高质量发展示范区'
          },
          {
            href: 'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml',
            title: '成都高新区打家高质量发展示范区'
          }
        ]
      }
    },
    created() {
      this.querydetail();
    },
    methods: {
      dateFormat_YMD(val) {
        return DateFormat.dateFormat_YMD(val)
      },
      querydetail() {
        Axios.get(AjaxApi.querydetail + '/' + this.id).then(res => {
          if (res.status === 200) {
            console.log("querydetail========", res)
            this.newsdata = res.data.body;
          }
        })
      },
    }
  }
</script>
<style lang="scss">
  .newdetails_template {
    .newdetails_heade {
      width: 100%;
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #ddd;
      font-size: $font14;
    }

    .newsbox {
      width: 100%;
      overflow: hidden;
      padding: 20px;

      .news_detail {
        float: left;
        width: 875px;

        .news_title {
          line-height: 50px;
          font-weight: bold;
          margin-bottom: 30px;
          margin-top: 2px;
          text-align: center;
          font-size: 36px;
          color: #333333;
        }

        .newsTag {
          font-size: $font14;
          color: #333;
          padding-bottom: 20px;
          border-bottom: 1px solid #ddd;

          span {
            padding-right: 15px;
          }
        }

        .news_content {
          padding: 20px;
          .leader_img{
            img{
              width:200px;
            }
            margin-bottom:10px;
          }
          .leader_info{
            label{
              display: inline-block;
              text-indent: 2em;
              line-height: 2;
              font-family: 宋体;
              font-size: 12pt;
              text-indent: 2em;
              font-weight: bold;
              font-size:$font14;
            }
            p{
              font-size:$font14;
              text-indent: 2em;
              line-height: 2;
              font-family: 宋体;
              font-size: 12pt;
            }
          }
        }
      }

      .news_top5 {
        float: right;
        width: 310px;
        border: 1px solid #eee;
        padding: 0 20px 20px 20px;

        .top_header {
          height: 45px;
          background-color: #fbfbfb;
          border-bottom: #f2f2f2 solid 1px;
          margin: 0 -20px;
          line-height: 45px;
          font-size: 15px;
          text-indent: 20px;
          margin-bottom: 10px;
        }

        .newsday {
          width: 100%;
          border-bottom: 1px solid #ddd;

          .newsday_item {
            width: 49.6%;
            display: inline-block;
            text-align: center;
            border-bottom: 2px solid $mainColor;
            cursor: default;
            background-color: transparent;
            color: $mainColor;
            font-weight: bold;
            font-size: 18px;
            padding: 8px 12px;
          }
        }

        .newsLists {
          margin-top: 10px;

          li {
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
