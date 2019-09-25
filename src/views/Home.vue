<template>
  <div class="system_home">
    <div class='content_item banner_img'>
      <swiper :options="swiperOption" ref="mySwiper" style="width:100%">
        <swiper-slide v-for="(obj,index) in bannerList" :key="index" @click="tolink(obj.link)">
          <img :src="obj.url" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class='content_item newsAndInfo'>
      <div class='w_tap'>
        <div class='w_tap_item' name='policy' :class='{"is_active":activeTap==="policy"}'
             @mouseover="selecedTab('policy')">
          <a href="javascript:">市内要闻</a>
        </div>
        <div class='w_tap_item' name='enterprise' :class='{"is_active":activeTap==="enterprise"}'
             @mouseover="selecedTab('enterprise')">
          <a href="javascript:">通知公告</a>
        </div>
        <div class='w_tap_item' name='government' :class='{"is_active":activeTap==="government"}'
             @mouseover="selecedTab('government')">
          <a href="javascript:">省市新闻</a>
        </div>
        <div class='w_tap_item' name='policyNeed' :class='{"is_active":activeTap==="policyNeed"}'
             @mouseover="selecedTab('policyNeed')">
          <a href="javascript:">国务院新闻</a>
        </div>
      </div>

      <div class='tap_content'>
        <div class='left_img'>
          <swiper :options="swiperOption" ref="mySwiper4" style="width:100%">
            <swiper-slide v-for="zfyw in zfywTopNews">
              <img :src="zfyw.logoUrl">
              <div class='title'>{{zfyw.title}}</div>
            </swiper-slide>
          </swiper>
        </div>
        <div class='right_news' v-if='activeTap==="policy"'>
          <div class='news_item' v-for="(item,index) in newsList.snxwNews" :key='index'>
            <a class='news_href' target="_blank" rel="noopener noreferrer" @click="getDetail(item)">
              <div class='new_title'>{{item.title}}</div>
              <div class='new_date'>{{dateFormat_YMD(item.newsDate)}}</div>
            </a>
          </div>
        </div>
        <div class='right_news' v-if='activeTap==="enterprise"'>
          <div class='news_item' v-for="(item,index) in newsList.tzggNews" :key='index'>
            <a class='news_href' target="_blank" rel="noopener noreferrer" @click="getDetail(item)">
              <div class='new_title'>{{item.title}}</div>
              <div class='new_date'>{{dateFormat_YMD(item.newsDate)}}</div>
            </a>
          </div>
        </div>

        <div class='right_news' v-if='activeTap==="government"'>
          <div class='news_item' v-for="(item,index) in newsList.ssxwNews" :key='index'>
            <a class='news_href' target="_blank" rel="noopener noreferrer" @click="getDetail(item)">
              <div class='new_title'>{{item.title}}</div>
              <div class='new_date'>{{dateFormat_YMD(item.newsDate)}}</div>
            </a>
          </div>
        </div>
        <div class='right_news' v-if='activeTap==="policyNeed"'>
          <div class='news_item' v-for="(item,index) in newsList.gwyxwNews" :key='index'>
            <a class='news_href' target="_blank" rel="noopener noreferrer" @click="getDetail(item)">
              <div class='new_title'>{{item.title}}</div>
              <div class='new_date'>{{dateFormat_YMD(item.newsDate)}}</div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class='content_item loveScene'>
      <el-tabs v-model="noticeActive1" type="card">
        <el-tab-pane label="政务公开" name="publicinfo">
          <div class='tab_content'>
            <div class='love_left'>
              <div class='love_card'>
                <div class='love_card_content'>
                  <a v-for='(item,index) in guidelist' :key='index' style="cursor: pointer;">
                    <div class='love_item' v-if="item.title==='领导之窗'" @click="handleToDetail('leader')">
                      <img :src="item.icon" alt="">
                      <div class='title'>{{item.title}}</div>
                    </div>
                    <div class='love_item' v-else-if="item.title==='机构设置'" @click="handleToDetail('departmentDetails')">
                      <img :src="item.icon" alt="">
                      <div class='title'>{{item.title}}</div>
                    </div>
                    <div class='love_item' v-else>
                      <img :src="item.icon" alt="">
                      <div class='title'>{{item.title}}</div>
                    </div>
                  </a>
                </div>
              </div>
              <div class='love_card'>
                <div class='love_card_head'>
                  重点领域信息公开
                </div>
                <div class='love_card_content'>
                  <div class='platform_item' v-for='(item,index) in platformlist' :key='index'>
                    <a :href="item.href" target="_blank"> {{item.title}}
                      <i class='el-icon-arrow-right'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class='love_right'>
              <el-tabs v-model="newsActive">
                <el-tab-pane label="部门动态" name="focusNews">
                  <div class='news_item' v-for="(item,index) in newsList.bmNews" :key='index'>
                    <a class='news_href' target="_blank" rel="noopener noreferrer" @click="getDetail(item)">
                      <div class='new_title'>{{item.title}}</div>
                      <div class='new_date'>{{dateFormat_YMD(item.newsDate)}}</div>
                    </a>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="乡镇动态" name="departmentNews">
                  <div class='news_item' v-for="(item,index) in newsList.jdNews" :key='index'>
                    <a class='news_href' target="_blank" rel="noopener noreferrer" @click="getDetail(item)">
                      <div class='new_title'>{{item.title}}</div>
                      <div class='new_date'>{{dateFormat_YMD(item.newsDate)}}</div>
                    </a>
                  </div>
                </el-tab-pane>
              </el-tabs>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="常见问题" name="scene">
          <div class='tab_content'>
            <div class='love_left'>
              <div class='love_card'>
                <div class='love_card_content'>
                  <a :href="item.href" v-for='(item,index) in guidelistawz' :key='index'>
                    <div class='love_item' @click="handleFeedback(item.title)">
                      <img :src="item.icon" alt="">
                      <div class='title'>{{item.title}}</div>
                    </div>
                  </a>
                </div>
              </div>
              <div class='content_item problembox'>
                <div class='problem_left'>
                  <div class='pad_card problem_card' style="width: 625px;">
                    <div class='pad_card_title'>
                      <span class='pad_name'>民意征集</span>
                    </div>
                    <div class='pad_card_content'>
                      <div class='news_item' v-for="(item,index) in newsList.myzjNews" :key='index'>
                        <a class='news_href' target="_blank" rel="noopener noreferrer" @click="getDetail(item)">
                          <div class='new_title'>{{item.title}}</div>
                          <div class='new_date'>{{dateFormat_YMD(item.newsDate)}}</div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class='love_right'>
              <el-tabs v-model="newsActive">
                <el-tab-pane label="常见问题" name="focusNews">
                  <div class='news_item' v-for="(item,index) in newsList.cjwtNews" :key='index'>
                    <a class='news_href' target="_blank" rel="noopener noreferrer" @click="getDetail(item)">
                      <div class='new_title'>{{item.title}}</div>
                      <div class='new_date'>{{dateFormat_YMD(item.newsDate)}}</div>
                    </a>
                  </div>
                </el-tab-pane>
              </el-tabs>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import Axios from '@/utils/axiosWrap'
  import DateFormat from '@/utils/momentWrap'
  import AjaxApi from '@/service/ajaxApi'
  import {setTimeout} from 'timers';

  export default {
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        newsActive: 'focusNews',
        activeTap: 'policy',
        swiperOption: {
          autoplay: true,
          centeredSlides: true,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        },
        guidelist: [
          {
            href: 'http://www.daying.gov.cn/leader/index.html',
            icon: require('../assets/img/u2044.png'),
            title: '领导之窗'
          },
          {
            href: '#',
            icon: require('../assets/img/u1745.png'),
            title: '机构设置'
          },
          {
            href: '#',
            icon: require('../assets/img/u1746.png'),
            title: '专题专栏'
          },
          {
            href: '#',
            icon: 'http://114.116.31.126/daying/images/%E6%8A%95%E8%B5%84%E5%A4%A7%E8%8B%B1/u1747.png',
            title: '五公开'
          },
        ],
        guidelistawz: [
          {
            href: '#',
            icon: 'http://114.116.31.126/daying/images/%E6%8A%95%E8%B5%84%E5%A4%A7%E8%8B%B1/u1744.png',
            title: '我要写信'
          },
          {
            href: '#',
            icon: 'http://114.116.31.126/daying/images/%E6%8A%95%E8%B5%84%E5%A4%A7%E8%8B%B1/u1745.png',
            title: '在线访谈'
          },
          {
            href: '#',
            icon: 'http://114.116.31.126/daying/images/%E6%8A%95%E8%B5%84%E5%A4%A7%E8%8B%B1/u1746.png',
            title: '常见问题'
          },
          {
            href: '#',
            icon: 'http://114.116.31.126/daying/images/%E6%8A%95%E8%B5%84%E5%A4%A7%E8%8B%B1/u1747.png',
            title: '舆情回应'
          },
        ],
        platformlist: [
          {
            href: '#',
            title: '财政资金'
          },
          {
            href: '#',
            title: '安全生产'
          },
          {
            href: '#',
            title: '保障住房'
          },
          {
            href: '#',
            title: '食品药品'
          },
          {
            href: '#',
            title: '公共服务'
          },
          {
            href: '#',
            title: '重大项目'
          },
          {
            href: '#',
            title: '督察审计'
          },
          {
            href: '#',
            title: '环境保护'
          },

        ],
        noticeActive1: 'publicinfo',
        newsList: {
          snxwNews: [],
          tzggNews: [],
          ssxwNews: [],
          gwyxwNews: [],
          bmNews: [],
          jdNews: [],
          cjwtNews: [],
          myzjNews: [],
        },
        zfywTopNews: null,
        snxwTopNews: null,
        tzggTopNews: null,
        ssxwTopNews: null,
        gwyxwTopNews: null,
        bannerList: [],
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      this.swiper.slideTo(1, 1000, false);
      this.openload();
      setTimeout(() => {
        this.closeload()
      }, 1000)
    },
    created() {
      this.getPkParkWebsiteBanner();
      //顶置带图的新闻
      this.querylist(8, null, 1, 'top');
      this.querylist(8, 2, 1);
      // this.querylist(8, 3, 1, 'top');
      this.querylist(8, 3, 1);
      // this.querylist(8, 4, 1, 'top');
      this.querylist(8, 4, 1);
      // this.querylist(8, 5, 1, 'top');
      this.querylist(8, 5, 1);

      this.querylist(8, 15, 2);
      this.querylist(8, 8, 2);
      this.querylist(5, 27, 1);
      this.querylist(9, 16, 6);
    },
    methods: {
      handleToDetail(mark) {
        this.$router.push({name: 'departmentDetails', query: {mark: mark}})
      },
      handleFeedback(item) {
        let json = {
          mark: item,
        };
        this.$router.push({name: 'feedback', query: json})
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
      querylist(size, pkNewsTypeId, pkModelId, mark) {
        let json = {
          size: size,
          pkModelId: pkModelId,
          // pkNewsTypeId: pkNewsTypeId,
        };
        if(pkNewsTypeId)json.pkNewsTypeId = pkNewsTypeId;
        if (mark) json.showtop = 1;
        Axios.get(AjaxApi.querylist, json).then(res => {
          if (res.status === 200) {
            if (mark) this.zfywTopNews = res.data.body.datas;
            if (pkNewsTypeId === 2) this.newsList.snxwNews = res.data.body.datas;
            if (pkNewsTypeId === 3) this.newsList.tzggNews = res.data.body.datas;
            if (pkNewsTypeId === 4) this.newsList.ssxwNews = res.data.body.datas;
            if (pkNewsTypeId === 5) this.newsList.gwyxwNews = res.data.body.datas;
            if (pkNewsTypeId === 15) this.newsList.bmNews = res.data.body.datas;
            if (pkNewsTypeId === 8) this.newsList.jdNews = res.data.body.datas;
            if (pkNewsTypeId === 16) this.newsList.cjwtNews = res.data.body.datas;
            if (pkNewsTypeId === 27) this.newsList.myzjNews = res.data.body.datas;
          }
        })
      },
      tolink: function (url) {
        if (url != '' && url != null) {
          window.open(url);
        }
      },
      selecedTab(name) {
        this.activeTap = name
      },
      getPkParkWebsiteBanner() {
        Axios.get(AjaxApi.queryBannerlist).then(res => {
          if (res.status === 200) {
            let resData = res.data.body;
            this.bannerList = resData;
          }
        })
      },
    }
  }
</script>
<style lang="scss">
  .swiper-wrapper, .swiper-container {
    width: 100%;
  }

  .system_home {
    .banner_img {
      position: relative;
      margin-top: 0;
      width: 100%;

      img {
        width: 100%;
        max-height: 420px;
      }
    }

    .newsAndInfo {
      margin-top: 40px;

      .w_tap {
        width: 100%;
        text-align: center;

        .w_tap_item {
          display: inline-block;
          width: 120px;
          height: 48px;
          border: 1px solid #ddd;
          margin-right: 15px;
          text-align: center;
          line-height: 48px;
          font-size: $font16;

          &:last-child {
            margin-right: 0;
          }

          &.is_active {
            background-color: $mainColor;
            color: #fff;

            a {
              display: inline-block;
              width: 100%;
              height: 100%;
              color: #fff;
            }
          }
        }
      }

      .tap_content {
        width: 100%;
        overflow: hidden;
        margin-top: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid #ddd;

        .left_img {
          position: relative;
          float: left;
          width: 400px;
          height: 240px;

          img {
            width: 100%;
            height: 240px;
          }

          .title {
            width: 100%;
            position: absolute;
            bottom: 2px;
            padding: 10px;
            background: rgba(0, 0, 0, 0.3);
            color: #fff;
            font-size: $font16;
            font-weight: bold;
          }
        }

        .right_news {
          float: right;
          width: 830px;
        }
      }

    }

    .promote {
      margin-top: 40px;

      .promote_header {
        text-align: center;
        line-height: 30px;

        span {
          font-weight: bold;
          font-size: $font24;
          color: #333;
          padding: 0 5px;
        }
      }

      .promote_content {
        width: 100%;
        margin-top: 20px;
        position: relative;
        padding: 0 80px;

        .swiper_card {
          height: 240px;
          width: 160px;
          border: 1px solid #ddd;
          text-align: center;

          img {
            margin-top: 80px;
          }

          .title {
            margin-top: 20px;
          }
        }
      }
    }

    .loveScene {
      // background: rgba(249, 249, 249, 1);
      .el-tabs__nav {
        width: 100%;

        .el-tabs__item {
          width: 50%;
          background: #fff;
          text-align: center;
          font-size: $font16;

          &.is-active {
            color: $mainColor;
            background: rgba(249, 249, 249, 1);
          }
        }
      }

      .tab_content {
        width: 100%;
        overflow: hidden;

        .love_left {
          float: left;
          width: 625px;

          .love_card {
            width: 100%;
            background: #fff;
            margin-bottom: 10px;

            .love_card_head {
              width: 100%;
              line-height: 40px;
              text-align: center;
              color: $mainColor;
              font-size: $font14;
              font-weight: bold;
              border-bottom: 2px solid $mainColor;
            }

            .love_card_content {
              overflow: hidden;
              padding: 10px;
              padding-top: 0;

              .love_item {
                display: inline-block;
                width: 90px;
                text-align: center;
                padding: 20px 0;
                font-size: $font12;
              }

              .platform_item {
                width: 180px;
                height: 40px;
                line-height: 30px;
                float: left;
                margin-right: 10px;
                background: rgba(249, 249, 249, 1);
                padding: 5px 10px;
                font-size: $font14;
                margin-top: 10px;
                border: 1px solid #ddd;

                a {
                  display: inline-block;
                  width: 100%;
                  height: 100%;
                }

                .el-icon-arrow-right {
                  float: right;
                  line-height: 30px;
                  color: $mainColor;
                }

                &:nth-child(3n) {
                  margin-right: 0;
                }
              }
            }
          }
        }

        .love_right {
          float: right;
          width: 615px;
          background: #fff;

          .el-tabs__nav {
            border-bottom: 1px solid #ddd;
          }

          .el-tabs__item {
            &.is-active {
              color: $mainColor;
              background: #fff;
            }
          }

          .el-tabs__content {
            height: 252px;
          }
        }
      }

      .bottom_five {
        margin-top: 10px;
      }

      .mewant_item {
        width: 297.5px;
        float: left;
        line-height: 48px;
        font-size: $font20;
        font-weight: bold;
        color: #fff;
        background: $mainColor;
        margin-right: 20px;
        text-align: center;

        img {
          vertical-align: middle;
          margin-right: 40px;
        }

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
</style>

