<template>
  <div class="system_home">
    <div class='content_item banner_img'>
      <swiper :options="swiperOption" ref="mySwiper" style="width:100%">
        <swiper-slide>
          <a href="http://www.xinhuanet.com/world/2019-08/26/c_1210255777.htm"><img
            src="http://114.116.31.126/daying/images/%E9%A6%96%E9%A1%B5/u342.png" alt=""></a>
        </swiper-slide>
        <swiper-slide>
          <a href="https://3w.huanqiu.com/a/ec157d/7PtTAfAgQs8?agt=8"><img
            src="http://114.116.31.126/daying/images/%E9%A6%96%E9%A1%B5/u342.png" alt=""></a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>

    </div>
    <div class='content_item newsAndInfo'>
      <div class='w_tap'>
        <div class='w_tap_item' name='policy' :class='{"is_active":activeTap==="policy"}'
             @mouseover="selecedTab('policy')">
          <a href="javascript:;">市内要闻</a>
        </div>
        <div class='w_tap_item' name='enterprise' :class='{"is_active":activeTap==="enterprise"}'
             @mouseover="selecedTab('enterprise')">
          <a href="javascript:;">通知公告</a>
        </div>
        <div class='w_tap_item' name='government' :class='{"is_active":activeTap==="government"}'
             @mouseover="selecedTab('government')">
          <a href="javascript:;">省市新闻</a>
        </div>
        <div class='w_tap_item' name='policyNeed' :class='{"is_active":activeTap==="policyNeed"}'
             @mouseover="selecedTab('policyNeed')">
          <a href="javascript:;">国务院新闻</a>
        </div>
      </div>
      <div class='tap_content' v-if='activeTap==="policy"'>
        <div class='left_img'>
          <img src="http://114.116.31.126/daying/images/%E9%A6%96%E9%A1%B5/u42.jpg" alt="">
          <div class='title'>全链条、智慧化管控债务风险 成都高新区</div>
        </div>
        <div class='right_news'>
          <div class='news_item' v-for="(item,index) in focusNews" :key='index'>
            <a class='news_href' :href="item.url" target="_blank" rel="noopener noreferrer">
              <div class='new_title'>{{item.title}}</div>
              <div class='new_date'>{{item.date}}</div>
            </a>
          </div>
        </div>
      </div>
      <div class='tap_content' v-if='activeTap==="enterprise"'>
        <div class='left_img'>
          <img src="http://114.116.31.126/daying/images/%E9%A6%96%E9%A1%B5/u42.jpg" alt="">
          <div class='title'>全链条、智慧化管风险 成都高新区</div>
        </div>
        <div class='right_news'>
          <div class='news_item' v-for="(item,index) in focusNews" :key='index'>
            <a class='news_href' :href="item.url" target="_blank" rel="noopener noreferrer">
              <div class='new_title'>{{item.title}}</div>
              <div class='new_date'>{{item.date}}</div>
            </a>
          </div>
        </div>
      </div>
      <div class='tap_content' v-if='activeTap==="government"'>
        <div class='left_img'>
          <img src="http://114.116.31.126/daying/images/%E9%A6%96%E9%A1%B5/u42.jpg" alt="">
          <div class='title'>全链条、智慧化管险 成都高新区</div>
        </div>
        <div class='right_news'>
          <div class='news_item' v-for="(item,index) in focusNews" :key='index'>
            <a class='news_href' :href="item.url" target="_blank" rel="noopener noreferrer">
              <div class='new_title'>{{item.title}}</div>
              <div class='new_date'>{{item.date}}</div>
            </a>
          </div>
        </div>
      </div>
      <div class='tap_content' v-if='activeTap==="policyNeed"'>
        <div class='left_img'>
          <img src="http://114.116.31.126/daying/images/%E9%A6%96%E9%A1%B5/u42.jpg" alt="">
          <div class='title'>全链条、智慧化管控债务风区</div>
        </div>
        <div class='right_news'>
          <div class='news_item' v-for="(item,index) in focusNews" :key='index'>
            <a class='news_href' :href="item.url" target="_blank" rel="noopener noreferrer">
              <div class='new_title'>{{item.title}}</div>
              <div class='new_date'>{{item.date}}</div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class='content_item loveScene'>
      <el-tabs v-model="noticeActive1" type="card">
        <el-tab-pane label="看政务" name="publicinfo">
          <div class='tab_content'>
            <div class='love_left'>
              <div class='love_card'>
                <div class='love_card_content'>
                  <a :href="item.href" v-for='(item,index) in guidelist' :key='index' target="_blank">
                    <div class='love_item'>
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
                  <div class='news_item' v-for="(item,index) in newsList.focusNews" :key='index'>
                    <a class='news_href' :href="item.url" target="_blank" rel="noopener noreferrer">
                      <div class='new_title'>{{item.title}}</div>
                      <div class='new_date'>{{item.date}}</div>
                    </a>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="街道动态" name="departmentNews">
                  <div class='news_item' v-for="(item,index) in newsList.departmentNews" :key='index'>
                    <a class='news_href' :href="item.url" target="_blank" rel="noopener noreferrer">
                      <div class='new_title'>{{item.title}}</div>
                      <div class='new_date'>{{item.date}}</div>
                    </a>
                  </div>
                </el-tab-pane>
              </el-tabs>
            </div>
          </div>
          <div class='bottom_five'>
            <a class='mewant_item item_green' href="https://baidu.com">
              <img src="http://114.116.31.126/daying/images/%E5%8A%9E%E4%BA%8B%E6%9C%8D%E5%8A%A1/u2337.png" alt="">
              领导之窗
            </a>
            <a class='mewant_item item_hgreen' href="https://baidu.com">
              <img src="http://114.116.31.126/daying/images/%E5%8A%9E%E4%BA%8B%E6%9C%8D%E5%8A%A1/u2338.png" alt="">
              机构设置</a>
            <a class='mewant_item item_hblue' href="https://baidu.com">
              <img src="http://114.116.31.126/daying/images/%E5%8A%9E%E4%BA%8B%E6%9C%8D%E5%8A%A1/u2339.png" alt="">
              专题专栏</a>
            <a class='mewant_item item_blue' href="https://baidu.com">
              <img src="http://114.116.31.126/daying/images/%E5%8A%9E%E4%BA%8B%E6%9C%8D%E5%8A%A1/u2340.png" alt="">
              五公开</a>
          </div>
        </el-tab-pane>
        <el-tab-pane label="爱问政" name="scene">
          <div class='tab_content'>
            <div class='love_left'>
              <div class='love_card'>
                <div class='love_card_content'>
                  <a :href="item.href" v-for='(item,index) in guidelistawz' :key='index'>
                    <div class='love_item'>
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
                      <div class='news_item' v-for="(item,index) in focusNews" :key='index'>
                        <a class='news_href' :href="item.url" target="_blank" rel="noopener noreferrer">
                          <div class='new_title'>{{item.title}}</div>
                          <div class='new_date'>{{item.date}}</div>
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
                  <div class='news_item' v-for="(item,index) in newsList.focusNews" :key='index'>
                    <a class='news_href' :href="item.url" target="_blank" rel="noopener noreferrer">
                      <div class='new_title'>{{item.title}}</div>
                      <div class='new_date'>{{item.date}}</div>
                    </a>
                  </div>
                </el-tab-pane>
              </el-tabs>
            </div>
          </div>
          <div class='bottom_five'>
            <a class='mewant_item item_green' href="https://baidu.com">
              <img src="http://114.116.31.126/daying/images/%E5%8A%9E%E4%BA%8B%E6%9C%8D%E5%8A%A1/u2337.png" alt="">
              领导之窗
            </a>
            <a class='mewant_item item_hgreen' href="https://baidu.com">
              <img src="http://114.116.31.126/daying/images/%E5%8A%9E%E4%BA%8B%E6%9C%8D%E5%8A%A1/u2338.png" alt="">
              机构设置</a>
            <a class='mewant_item item_hblue' href="https://baidu.com">
              <img src="http://114.116.31.126/daying/images/%E5%8A%9E%E4%BA%8B%E6%9C%8D%E5%8A%A1/u2339.png" alt="">
              专题专栏</a>
            <a class='mewant_item item_blue' href="https://baidu.com">
              <img src="http://114.116.31.126/daying/images/%E5%8A%9E%E4%BA%8B%E6%9C%8D%E5%8A%A1/u2340.png" alt="">
              五公开</a>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>

  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        newsActive: 'focusNews',
        activeTap: 'policy',
        focusNews: [
          {
            title: '大英县召开落实“两纲”全面达标攻坚推进会暨“两纲大英县召开落实“两纲”全面达标攻坚推进会暨“两纲',
            date: '2019-08-07',
            url: '/newDetails'
          },
          {
            title: '大英县召开落实“两纲”全面达标攻坚推进会暨“两纲大英县召开',
            date: '2019-08-01',
            url: '/newDetails'
          },
          {
            title: '大英县召开落实“两纲”全面达标攻“两纲”全面达标攻坚推进会暨两纲',
            date: '2019-08-04',
            url: '/newDetails'
          }
        ],
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
            href: 'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml',
            icon: 'http://114.116.31.126/daying/images/%E6%8A%95%E8%B5%84%E5%A4%A7%E8%8B%B1/u1744.png',
            title: '领导之窗'
          },
          {
            href: 'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml',
            icon: 'http://114.116.31.126/daying/images/%E6%8A%95%E8%B5%84%E5%A4%A7%E8%8B%B1/u1745.png',
            title: '机构设置'
          },
          {
            href: 'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml',
            icon: 'http://114.116.31.126/daying/images/%E6%8A%95%E8%B5%84%E5%A4%A7%E8%8B%B1/u1746.png',
            title: '专题专栏'
          },
          {
            href: 'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml',
            icon: 'http://114.116.31.126/daying/images/%E6%8A%95%E8%B5%84%E5%A4%A7%E8%8B%B1/u1747.png',
            title: '五公开'
          },
        ],

        guidelistawz: [
          {
            href: 'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml',
            icon: 'http://114.116.31.126/daying/images/%E6%8A%95%E8%B5%84%E5%A4%A7%E8%8B%B1/u1744.png',
            title: '我要写信'
          },
          {
            href: 'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml',
            icon: 'http://114.116.31.126/daying/images/%E6%8A%95%E8%B5%84%E5%A4%A7%E8%8B%B1/u1745.png',
            title: '在线访谈'
          },
          {
            href: 'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml',
            icon: 'http://114.116.31.126/daying/images/%E6%8A%95%E8%B5%84%E5%A4%A7%E8%8B%B1/u1746.png',
            title: '常见问题'
          },
          {
            href: 'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml',
            icon: 'http://114.116.31.126/daying/images/%E6%8A%95%E8%B5%84%E5%A4%A7%E8%8B%B1/u1747.png',
            title: '舆情回应'
          },
        ],
        platformlist: [
          {
            href: 'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml',
            title: '财政资金'
          },
          {
            href: 'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml',
            title: '安全生产'
          },
          {
            href: 'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml',
            title: '保障住房'
          },
          {
            href: 'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml',
            title: '食品药品'
          },
          {
            href: 'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml',
            title: '公共服务'
          },
          {
            href: 'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml',
            title: '重大项目'
          },
          {
            href: 'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml',
            title: '督察审计'
          },
          {
            href: 'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml',
            title: '环境保护'
          },

        ],
        noticeActive1: 'publicinfo',
        newsList: {
          focusNews: [
            {
              title: '大英县召开落实“两纲”全面达标攻坚推进会暨“两纲大英县召开落实“两纲”全面达标攻坚推进会暨“两纲',
              date: '2019-08-07',
              url: '/newDetails'
            },
            {
              title: '大英县召开落实“两纲”全面达标攻坚推进会暨“两纲大英县召开',
              date: '2019-08-01',
              url: '/newDetails'
            },
            {
              title: '大英县召开落实“两纲”全面达标攻“两纲”全面达标攻坚推进会暨两纲',
              date: '2019-08-04',
              url: '/newDetails'
            }
          ],
          departmentNews: [
            {
              title: '大英县召开落实“两纲”全面达标攻坚推进会暨“两纲大英县召开落实“两纲”全面达标攻坚推进会暨“两纲',
              date: '2019-08-07',
              url: '/newDetails'
            },
            {
              title: '大英县召开落实“两纲”全面达标会暨“两纲大英县召开',
              date: '2019-08-01',
              url: '/newDetails'
            },
            {
              title: '大英县召开落实“两纲”全面达标攻“两纲”全面达标攻坚推进会暨两纲推进会暨“两纲大英县召开落实“两纲”全面达标攻坚推进会暨“两纲',
              date: '2019-08-04',
              url: '/newDetails'
            }
          ]
        },
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      this.swiper.slideTo(1, 1000, false)
    },
    methods: {
      selecedTab(name) {
        this.activeTap = name
      }
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

        .left_img {
          position: relative;
          float: left;
          width: 400px;
          min-height: 200px;

          img {
            width: 100%;
          }

          .title {
            width: 100%;
            position: absolute;
            bottom: 0;
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
      margin-top: 40px;
      background: rgba(249, 249, 249, 1);

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

