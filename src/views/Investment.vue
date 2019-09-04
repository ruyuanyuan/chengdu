<template>
  <div class='investement_template'>
    <div class='content_item'>
      <div class='focus_news_img'>
        <el-carousel height="350px">
          <el-carousel-item v-for="(item,index) in imggroup" :key="index" loop='true' arrow='never'>
            <a @click="getDetail(item)" target="_blank" rel="noopener noreferrer">
              <img :src="item.logoUrl" alt="">
            </a>
            <div class="imgtitle">{{item.title}}</div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class='focus_news_tab'>
        <el-tabs v-model="newsActive">
          <el-tab-pane label="招商信息" name="investmentInfo">
            <div class='news_item' v-for="(item,index) in newsList.investmentInfo" :key='index'>
              <a class='news_href' target="_blank" rel="noopener noreferrer" @click="getDetail(item)">
                <div class='new_title'>{{item.title}}</div>
                <div class='new_date'>{{dateFormat_YMD(item.newsDate)}}</div>
              </a>
            </div>
          </el-tab-pane>
          <el-tab-pane label="招商项目" name="investmentProject">
            <div class='news_item' v-for="(item,index) in newsList.investmentProject" :key='index'>
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
      <a class='mewant_item item_green' href="javascript:;" @click="handleFeedback('我有投资意向')">我有投资意向</a>
      <a class='mewant_item item_hgreen' href="javascript:;" @click="handleFeedback('我想入区')">我想入区</a>
      <a class='mewant_item item_hblue' href="javascript:;" @click="handleFeedback('我想咨询')">我想咨询</a>
      <a class='mewant_item item_blue' href="javascript:;" @click="handleFeedback('成为合作伙伴')">成为合作伙伴</a>
    </div>
    <div class='content_item'>
      <div class='guide_box'>
        <div class='guide_title'>
          <p>投资</p>
          <p>指南</p>
        </div>
        <div class='guide_item' v-for='(item,index) in guidelist' :key='index'>
          <a href="#">
            <img :src="item.icon" alt="">
            <p class='title'>{{item.title}}</p>
          </a>
        </div>
      </div>
    </div>
    <div class='content_item'>
      <div class='pad_card'>
        <div class='pad_card_title'>
          <span class='pad_name'>产业园区</span>
        </div>
        <div class='pad_card_content'>
          <div class='park_contnet'>
            <div class='park_main_img'>
              <a href="#">
                <img :src="parkDataList.mainPark.picUrl" alt="">
              </a>
            </div>
            <div class='park_img_item_list'>
              <div class='park_img_item' v-for="(item,index) in parkDataList.parklist" :key='index' v-if="index<4">
                <a href="#">
                  <img :src="item.picUrl" alt="">
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class='content_item'>
      <div class='pad_card daying_block'>
        <div class='pad_card_content'>
          <div class='news_cont'>
            <div class='news_cont_img'>
              <img src="https://obs-gysjypt.obs.cn-north-1.myhuaweicloud.com/park/fm/4.png" alt="">
            </div>
            <div class='news_cont_list'>
              <el-tabs v-model="newsActive">
                <el-tab-pane label="投资指南" name="investmentInfo">
                  <div class='news_item' v-for="(item,index) in newsList2.investmentInfo" :key='index'>
                    <a class='news_href' target="_blank" rel="noopener noreferrer" @click="getDetail(item)">
                      <div class='new_title'>{{item.title}}</div>
                      <div class='new_date'>{{dateFormat_YMD(item.newsDate)}}</div>
                    </a>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="投资环境" name="investmentProject">
                  <div class='news_item' v-for="(item,index) in newsList2.investmentProject" :key='index'>
                    <a class='news_href' target="_blank" rel="noopener noreferrer" @click="getDetail(item)">
                      <div class='new_title'>{{item.title}}</div>
                      <div class='new_date'>{{dateFormat_YMD(item.newsDate)}}</div>
                    </a>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="主导产业" name="townshipNews">
                  <div class='news_item' v-for="(item,index) in newsList2.townshipNews" :key='index'>
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
      </div>
      <div class='pad_card policy_block'>
        <div class='pad_card_title'>
          <div class='pad_name'>国际合作和投资服务局</div>
        </div>
        <div class='pad_card_content'>
          <div class='policy_img'>
            <img src="http://114.116.31.126/daying/images/%E6%8A%95%E8%B5%84%E5%A4%A7%E8%8B%B1/u1818.png" alt="">
          </div>
          <div class='pack_bth'>
            <a class='boder_bth' @click="toNewsList(22,'发展计划')">发展计划</a>
            <a class='boder_bth' @click="toNewsList(23,'产业环境')">产业环境</a>
            <a class='boder_bth' @click="toNewsList(24,'地貌特征')">地貌特征</a>
            <a class='boder_bth' @click="toNewsList(25,'园区产业')">园区产业</a>
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
        imggroup: [],
        newsActive: 'investmentInfo',
        newsList: {
          investmentInfo: [],
          investmentProject: [],
          townshipNews: []
        },
        newsList2: {
          investmentInfo: [],
          investmentProject: [],
          townshipNews: []
        },
        guidelist: [
          {
            href: 'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml',
            icon: 'http://114.116.31.126/daying/images/%E6%8A%95%E8%B5%84%E5%A4%A7%E8%8B%B1/u1744.png',
            title: '投资向导'
          },
          {
            href: 'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml',
            icon: 'http://114.116.31.126/daying/images/%E6%8A%95%E8%B5%84%E5%A4%A7%E8%8B%B1/u1745.png',
            title: '优惠政策'
          },
          {
            href: 'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml',
            icon: 'http://114.116.31.126/daying/images/%E6%8A%95%E8%B5%84%E5%A4%A7%E8%8B%B1/u1746.png',
            title: '企业入园'
          },
          {
            href: 'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml',
            icon: 'http://114.116.31.126/daying/images/%E6%8A%95%E8%B5%84%E5%A4%A7%E8%8B%B1/u1747.png',
            title: '投资问答'
          },
          {
            href: 'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml',
            icon: 'http://114.116.31.126/daying/images/%E6%8A%95%E8%B5%84%E5%A4%A7%E8%8B%B1/u1748.png',
            title: '投资环境'
          },
          {
            href: 'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml',
            icon: 'http://114.116.31.126/daying/images/%E6%8A%95%E8%B5%84%E5%A4%A7%E8%8B%B1/u1749.png',
            title: '投资成本'
          },
          {
            href: 'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml',
            icon: 'http://114.116.31.126/daying/images/%E6%8A%95%E8%B5%84%E5%A4%A7%E8%8B%B1/u1750.png',
            title: '投资办事服务'
          }
        ],
        parkDataList: {
          mainPark: {},
          parklist: []
        },
        investmentTopInfo: null,
      }
    },
    created() {
      //顶置带图的新闻
      this.querylist(10, 10, 'top');

      this.querylist(10, 10);
      this.querylist(10, 11);
      this.querylist(10, 12);
      this.querylist(10, 13);
      this.querylist(10, 14);

      this.getPkPicsById();
    },
    methods: {
      handleFeedback(item){
        let json = {
          mark: item,
        };
        this.$router.push({name: 'feedback', query: json})
      },
      toNewsList(pkNewsTypeId, pkNewsType) {
        let json = {
          modelId: '11',
          pkNewsTypeId: pkNewsTypeId,
          pkNewsType: pkNewsType,
        };
        this.$router.push({name: 'newlist', query: json})
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
      querylist(size, pkNewsTypeId, mark) {
        let json = {
          size: size,
          pkId: 238,
          pkModelId: 4,
          pkNewsTypeId: pkNewsTypeId,
        }
        if (mark) json.showtop = 1;
        Axios.get(AjaxApi.querylist, json).then(res => {
          if (res.status === 200) {
            if (pkNewsTypeId === 10) {
              this.imggroup = res.data.body.datas;
              this.newsList.investmentInfo = res.data.body.datas;
            }
            if (pkNewsTypeId === 11) this.newsList.investmentProject = res.data.body.datas;
            if (pkNewsTypeId === 12) this.newsList2.investmentInfo = res.data.body.datas;
            if (pkNewsTypeId === 13) this.newsList2.investmentProject = res.data.body.datas;
            if (pkNewsTypeId === 14) this.newsList2.townshipNews = res.data.body.datas;
          }
        })
      },

      getPkPicsById() {
        Axios.get(AjaxApi.getPkPicsById, {id: 238}).then(res => {
          if (res.status === 200) {
            console.log(res)
            this.parkDataList.mainPark = res.data[0];
            this.parkDataList.parklist = res.data;
          }
        })
      },
    }
  }
</script>
<style lang="scss">
  .investement_template {
    .content_item {
      .focus_news_img {
        float: left;
        width: 524px;
        height: 350px;

        .el-carousel {
          height: 100%;

          .el-carousel__item {
            .imgtitle {
              position: absolute;
              bottom: 0;
              width: 100%;
              height: 40px;
              line-height: 40px;
              padding: 0 10px;
              background: rgba(0, 0, 0, 0.4);
              color: #fff;
            }
          }

          .el-carousel__indicators--horizontal {
            bottom: 0;
            left: 84%;
          }
        }

        img {
          width: 100%;
          height: 100%;
        }
      }

      .focus_news_tab {
        float: right;
        width: 700px;
      }
    }

    .mewant_item {
      display: inline-block;
      width: 304px;
      height: 56px;
      margin-right: 10px;
      text-align: center;
      line-height: 54px;
      font-size: $font16;
      color: #fff;

      &.item_green {
        background-color: rgba(109, 191, 109, 1);
      }

      &.item_hgreen {
        background-color: rgba(84, 189, 48, 1);
      }

      &.item_blue {
        background-color: rgba(89, 191, 222, 1);
      }

      &.item_hblue {
        background-color: rgba(45, 128, 217, 1);
      }

      &:last-child {
        margin-right: 0;
      }
    }

    .guide_box {
      width: 100%;
      height: 96px;
      overflow: hidden;
      background: rgba(249, 249, 249, 1);

      .guide_title {
        width: 99px;
        height: 100%;
        background: $mainColor;
        padding: 20px;
        float: left;

        p {
          font-size: $font20;
          font-weight: bold;
          color: #fff;
          text-align: center;
        }
      }

      .guide_item {
        float: left;
        padding: 18px 30px;
        text-align: center;

        .title {
          margin-top: 4px;
          color: #333;
          font-size: $font14;
        }
      }
    }

    .park_contnet {
      width: 100%;
      height: 318px;

      .park_main_img {
        width: 45%;
        height: 100%;
        float: left;
        padding-bottom: 4px;
        position: relative;

        img {
          width: 100%;
          height: 100%;
        }

        .park_main_img_title {
          width: 100%;
          position: absolute;
          bottom: 10px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          font-size: $font14;
          color: #fff;
        }
      }

      .park_img_item_list {
        float: left;
        width: 55%;
        height: 100%;

        .park_img_item {
          width: 50%;
          height: 50%;
          padding-left: 4px;
          padding-bottom: 4px;
          float: left;
          position: relative;

          img {
            width: 100%;
            height: 100%;
          }

          .park_img_item_title {
            width: 100%;
            position: absolute;
            bottom: 4px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            font-size: $font14;
            color: #fff;
          }
        }
      }
    }

    .content_item {
      .daying_block {
        float: left;
        width: 700px;
        height: 440px;

        .news_cont {
          height: 100%;

          .news_cont_img {
            float: left;
            height: 100%;
            width: 240px;

            img {
              width: 100%;
              height: 100%;
            }
          }

          .news_cont_list {
            float: right;
            width: 400px;
            height: 100%;
          }
        }
      }

      .policy_block {
        float: right;
        width: 530px;
        height: 440px;

        .policy_img {
          width: 100%;
          // padding-top:10px;
          text-align: center;

          img {
            width: 60%;
          }
        }

        .pack_bth {
          margin-top: 20px;

          .boder_bth {
            display: inline-block;
            width: 228px;
            height: 40px;
            margin-right: 30px;
            margin-bottom: 20px;

            &:nth-child(2n) {
              margin-right: 0;
            }

            border: 1px solid $mainColor;
            color: $mainColor;
            text-align: center;
            line-height: 38px;
            background-color: #fff;
            font-size: $font14;

            &:hover {
              background-color: $mainHColor;
              color: #fff;
            }
          }
        }
      }
    }
  }

</style>
