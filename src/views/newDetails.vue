<template>
  <div class='newdetails_template'>
    <div class='content_item'>
      <div class='newdetails_heade'>
        {{modelId==='8'?'当前位置： 网站首页 > 党群党建':'当前位置： 网站首页 > 新闻中心'}}
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
          <div class='news_content' v-html="newsdata.details">
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
      modelId: String,
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
