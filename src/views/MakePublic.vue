<template>
  <div class='makepublic_template'>
    <div class='content_item'>
      <div class='card_box card_left'>
        <div class='head_card'>
          <div class='head_card_item head_card_item_left'>
           <img src="http://114.116.31.126/daying/images/%E6%94%BF%E5%8A%A1%E5%85%AC%E5%BC%80/u2080.png" alt="">
<!--            <a href="/leader"> 领导之窗</a>-->
            <a href="javascript:;" @click="handleToDetail('leader')"> 领导之窗</a>
          </div>
          <div class='head_card_item head_card_item_right'>
            <img src="http://114.116.31.126/daying/images/%E6%94%BF%E5%8A%A1%E5%85%AC%E5%BC%80/u2081.png" alt="">
<!--            <a href="/departmentDetails"> 机构职能</a>-->
            <a href="javascript:;" @click="handleToDetail('departmentDetails')"> 机构职能</a>
          </div>
        </div>
        <div class='pack_bth' @click="handleOpen">
          <a class='boder_bth' href="javascript:;"><i
            class='el-icon-arrow-right'></i>政府信息公开目录</a>
          <a class='boder_bth' href="javascript:;"><i
            class='el-icon-arrow-right'></i>政府信息公开指南</a>
          <a class='boder_bth' href="javascript:;"><i
            class='el-icon-arrow-right'></i>政府信息公开年报</a>
          <a class='boder_bth' href="javascript:;"><i
            class='el-icon-arrow-right'></i>政府信息依申请公开</a>
          <a class='boder_bth' href="javascript:;"><i
            class='el-icon-arrow-right'></i>政府信息公开意见箱</a>
        </div>
      </div>
      <div class='card_box card_middle'>
        <el-tabs v-model="noticeActive1" type="card">
          <!--          <el-tab-pane label="公开信息" name="publicinfo">-->
          <!--            <div class='news_item' v-for="(item,index) in newsList.focusNews" :key='index'>-->
          <!--              <a class='news_href' :href="item.url" target="_blank" rel="noopener noreferrer"><div class='new_title'>{{item.title}}</div>-->
          <!--              <div class='new_date'>{{item.date}}</div></a>-->
          <!--            </div>-->
          <!--          </el-tab-pane>-->
          <el-tab-pane label="通知公告" name="publicinfo">
            <div class='news_item' v-for="(item,index) in newsList.tzggNews" :key='index'>
              <a class='news_href' target="_blank" rel="noopener noreferrer" @click="getDetail(item)">
                <div class='new_title'>{{item.title}}</div>
                <div class='new_date'>{{dateFormat_YMD(item.newsDate)}}</div>
              </a>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class='card_box card_right'>
        <el-tabs v-model="noticeActive2" type="card">
          <el-tab-pane label="政策文件" name="publicinfo">
            <div class='news_item' v-for="(item,index) in newsList.zcwjNews" :key='index'>
              <a class='news_href' target="_blank" rel="noopener noreferrer" @click="getDetail(item)">
                <div class='new_title'>{{item.title}}</div>
                <div class='new_date'>{{dateFormat_YMD(item.newsDate)}}</div>
              </a>
            </div>
          </el-tab-pane>
          <el-tab-pane label="文件解读" name="scene">
            <div class='news_item' v-for="(item,index) in newsList.wjjdNews" :key='index'>
              <a class='news_href' target="_blank" rel="noopener noreferrer" @click="getDetail(item)">
                <div class='new_title'>{{item.title}}</div>
                <div class='new_date'>{{dateFormat_YMD(item.newsDate)}}</div>
              </a>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div class='content_item'>

      <div class='pad_card park_left'>
        <div class='pad_card_title'>
          <span class='pad_name'>基本信息公开</span>
        </div>
        <div class='pad_card_content'>
          <div class='park_contnet'>
            <div class='icon_title_item' v-for='(item,index) in infoOpenList' :key='index'>
              <a href="#">
                <img :src="item.icon" alt="">
                {{item.title}}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class='pad_card park_right'>
        <div class='pad_card_content'>
          <el-tabs v-model="noticeActive3">
            <el-tab-pane label="规划计划" name="publicinfo">
              <div class='news_item' v-for="(item,index) in newsList.ghjhNews" :key='index'>
                <a class='news_href' target="_blank" rel="noopener noreferrer" @click="getDetail(item)">
                  <div class='new_title'>{{item.title}}</div>
                  <div class='new_date'>{{dateFormat_YMD(item.newsDate)}}</div>
                </a>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
    <div class='content_item'>
      <div class='pad_card five_open'>
        <div class='pad_card_title'>
          <span class='pad_name'>“五公开”推进情况</span>
        </div>
        <div class='pad_card_content'>
          <div class='park_contnet'>
            <div class='icon_title_item five_open_item' v-for='(item,index) in fiveOpenList' :key='index'>
              <a href="#">
                <img :src="item.icon" alt="">
                {{item.title}}
              </a>
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
    data() {
      return {
        noticeActive1: 'publicinfo',
        noticeActive2: 'publicinfo',
        noticeActive3: 'publicinfo',
        noticeActive4: 'publicinfo',
        noticeActive5: 'publicinfo',
        newsList: {
          tzggNews: [],
          zcwjNews: [],
          ghjhNews: [],
          wjjdNews: [],
        },
        infoOpenList: [
          {
            icon: 'http://114.116.31.126/daying/images/%E6%94%BF%E5%8A%A1%E5%85%AC%E5%BC%80/u2044.png',
            title: '领导之窗',
            href: '/leader'
          },
          {
            icon: 'http://114.116.31.126/daying/images/%E6%94%BF%E5%8A%A1%E5%85%AC%E5%BC%80/u2046.png',
            title: '新闻发布会',
            href: '/newDetails'
          },
          {
            icon: 'http://114.116.31.126/daying/images/%E6%94%BF%E5%8A%A1%E5%85%AC%E5%BC%80/u2051.png',
            title: '概况信息',
            href: '/newDetails'
          },
          {
            icon: 'http://114.116.31.126/daying/images/%E6%94%BF%E5%8A%A1%E5%85%AC%E5%BC%80/u2056.png',
            title: '政策文件及解读',
            href: '/newDetails'
          }
          , {
            icon: 'http://114.116.31.126/daying/images/%E6%94%BF%E5%8A%A1%E5%85%AC%E5%BC%80/u2046.png',
            title: '监督保障制度',
            href: '/newDetails'
          }
          , {
            icon: 'http://114.116.31.126/daying/images/%E6%94%BF%E5%8A%A1%E5%85%AC%E5%BC%80/u2048.png',
            title: '规划计划',
            href: '/newDetails'
          }
          , {
            icon: 'http://114.116.31.126/daying/images/%E6%94%BF%E5%8A%A1%E5%85%AC%E5%BC%80/u2052.png',
            title: '认识信息',
            href: '/newDetails'
          }
          , {
            icon: 'http://114.116.31.126/daying/images/%E6%94%BF%E5%8A%A1%E5%85%AC%E5%BC%80/u2055.png',
            title: '统计信息',
            href: '/newDetails'
          }
          , {
            icon: 'http://114.116.31.126/daying/images/%E6%94%BF%E5%8A%A1%E5%85%AC%E5%BC%80/u2047.png',
            title: '政府常务会议',
            href: '/newDetails'
          },
          {
            icon: 'http://114.116.31.126/daying/images/%E6%94%BF%E5%8A%A1%E5%85%AC%E5%BC%80/u2049.png',
            title: '应急管理',
            href: '/newDetails'
          },
          {
            icon: 'http://114.116.31.126/daying/images/%E6%94%BF%E5%8A%A1%E5%85%AC%E5%BC%80/u2053.png',
            title: '监管执行',
            href: '/newDetails'
          },
          {
            icon: 'http://114.116.31.126/daying/images/%E6%94%BF%E5%8A%A1%E5%85%AC%E5%BC%80/u2057.png',
            title: '民生工程',
            href: '/newDetails'
          },
          {
            icon: 'http://114.116.31.126/daying/images/%E6%94%BF%E5%8A%A1%E5%85%AC%E5%BC%80/u2045.png',
            title: '党建工作',
            href: '/newDetails'
          },
          {
            icon: 'http://114.116.31.126/daying/images/%E6%94%BF%E5%8A%A1%E5%85%AC%E5%BC%80/u2044.png',
            title: '群团及统战',
            href: '/newDetails'
          },
          {
            icon: 'http://114.116.31.126/daying/images/%E6%94%BF%E5%8A%A1%E5%85%AC%E5%BC%80/u2054.png',
            title: '工作动态',
            href: '/newDetails'
          },
        ],
        fiveOpenList: [
          {
            icon: 'http://114.116.31.126/daying/images/%E6%94%BF%E5%8A%A1%E5%85%AC%E5%BC%80/u2043.png',
            title: '决策公开',
            href: '/newDetails'
          },
          {
            icon: 'http://114.116.31.126/daying/images/%E6%94%BF%E5%8A%A1%E5%85%AC%E5%BC%80/u2042.png',
            title: '行政公开',
            href: '/newDetails'
          },
          {
            icon: 'http://114.116.31.126/daying/images/%E6%94%BF%E5%8A%A1%E5%85%AC%E5%BC%80/u2059.png',
            title: '管理公开',
            href: '/newDetails'
          },
          {
            icon: 'http://114.116.31.126/daying/images/%E6%94%BF%E5%8A%A1%E5%85%AC%E5%BC%80/u2061.png',
            title: '服务公开',
            href: '/newDetails'
          },
          {
            icon: 'http://114.116.31.126/daying/images/%E6%94%BF%E5%8A%A1%E5%85%AC%E5%BC%80/u2060.png',
            title: '结果公开',
            href: '/newDetails'
          },
        ],
      }
    },
    mounted() {
      this.openload();
      setTimeout(()=>{
        this.closeload()
      },1000)
    },
    created() {
      this.querylist(8, 18);
      this.querylist(8, 19);
      this.querylist(7, 21);
      this.querylist(8, 20);
    },
    methods: {
      handleOpen(){
        window.open('http://www.suining.gov.cn/web/guest/zwgk')
      },
      handleToDetail(mark){
        this.$router.push({name: 'departmentDetails', query: {mark:mark}})
      },
      getDetail(item) {
        let json = {
          id: item.id,
          mark: item.pkNewsTypeId,
        };
        this.$router.push({name: 'newDetails', query: json})
      },
      dateFormat_YMD(val) {
        return DateFormat.dateFormat_YMD(val)
      },
      querylist(size, pkNewsTypeId) {
        let json = {
          size: size,
          pkModelId: 5,
          pkNewsTypeId: pkNewsTypeId,
        }
        Axios.get(AjaxApi.querylist, json).then(res => {
          if (res.status === 200) {
            if (pkNewsTypeId === 18) this.newsList.tzggNews = res.data.body.datas;
            if (pkNewsTypeId === 19) this.newsList.zcwjNews = res.data.body.datas;
            if (pkNewsTypeId === 20) this.newsList.wjjdNews = res.data.body.datas;
            if (pkNewsTypeId === 21) this.newsList.ghjhNews = res.data.body.datas;
          }
        })
      },
    }
  }
</script>
<style lang="scss">
  .makepublic_template {
    .content_item {
      .card_box {
        float: left;
        height: 310px;
        margin-right: 10px;

        &.card_left {
          width: 300px;

          .head_card {
            width: 100%;
            height: 56px;

            .head_card_item {
              height: 100%;
              width: 145px;
              text-align: center;
              overflow: hidden;
              line-height: 56px;
              color: #fff;
              font-size: 16px;
              font-weight: bold;

              img {
                vertical-align: middle;
              }

              &.head_card_item_left {
                float: left;
                background: rgba(255, 102, 51, 1);
              }

              &.head_card_item_right {
                float: right;
                background: rgba(153, 204, 51, 1);
              }
            }
          }

          .boder_bth {
            display: block;
            width: 100%;
            height: 40px;
            margin-top: 10px;
            margin-bottom: 10px;
            padding-left: 20px;
            border: 1px solid $mainColor;
            color: $mainColor;
            text-align: left;
            line-height: 38px;
            background-color: #fff;
            font-size: $font14;

            i {
              padding-right: 10px;
            }

            &:hover {
              background-color: $mainHColor;
              color: #fff;
            }
          }
        }

        &.card_middle {
          width: 550px;
          background: rgba(249, 249, 249, 1);

          .el-tabs__content {
            padding: 0 20px;
          }
        }

        &.card_right {
          width: 380px;
          margin-right: 0;
          background: rgba(249, 249, 249, 1);

          .el-tabs__content {
            padding: 0 20px;
          }
        }
      }
    }

    .content_item {
      .park_left {
        float: left;
        width: 800px;
      }

      .park_right {
        float: right;
        width: 430px;
        height: 248px;
      }
    }

    .mewant_item {
      display: inline-block;
      width: 620px;
      height: 54px;
      margin-right: 10px;
      text-align: center;
      line-height: 54px;
      font-size: $font14;
      color: #fff;
      font-weight: bold;
      font-size: 20px;

      &.item_red {
        background-color: rgba(255, 102, 51, 1);
      }

      &.item_hgreen {
        background-color: rgba(153, 204, 51, 1);
      }

      &:last-child {
        margin-right: 0;
      }
    }

    .park_contnet {
      overflow: hidden;
    }

    .five_open {
      .pad_card_title {
        background: rgba(249, 249, 249, 1);
      }

      .pad_card_content {
        padding-top: 40px;
        padding-bottom: 40px;
      }

      .five_open_item {
        width: 20%;
        padding: 0;
        margin: 0;
        text-align: center;
        font-size: 20px;
        font-weight: bold;
      }
    }

    .publicItem {
      .pad_card_title {
        background: rgba(249, 249, 249, 1);
      }

      .pad_card_content {
        padding-top: 20px;
      }

      .data_title_item {
        padding: 0;
        margin: 0;
        width: 50%;
        text-align: center;
      }

      .park_right {
        height: 267px;
      }
    }

    .opendata {
      .opendata_left {
        width: 330px;
        float: left;

        .pad_card_title {
          background: rgba(249, 249, 249, 1);
        }

        .pad_card_content {
          padding-top: 20px;
        }
      }

      .opendata_right {
        width: 900px;
        float: right;

        .el-tabs__header {
          background: rgba(249, 249, 249, 1);
          border: #dedede;
          padding-left: 20px;

          .el-tabs__item {
            height: auto;
            font-weight: bold;
            font-size: $font18;
            padding: 15px 20px;
          }
        }
      }
    }
  }
</style>
