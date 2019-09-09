<template>
  <div class='new_template'>
    <div class='hold_box'>
      <div class='tody_hold'>
        <div class='tody_item tody_title'>
          <img src="@/assets/img/laba.png" alt="">
          今日关注
        </div>
        <div class='tody_item tody_date'>
          <p>农历八月初七</p>
          <p>2019年9月6日 星期五</p>
        </div>
      </div>
      <div class='hold_new'>
        <div class='hold_title'>{{holdNew.title}}</div>
        <div class='hold_doc'>{{holdNew.doc}}</div>
      </div>
    </div>
    <div class='focus_news'>
      <div class='focus_news_img'>
        <swiper v-if="zfywTopNews" :options="swiperOption" ref="mySwiper1" style="width:100%">
          <swiper-slide v-for="(top,index) in zfywTopNews" :key="index">
            <img :src="top.logoUrl" alt="">
          </swiper-slide>
        </swiper>
      </div>
      <div class='focus_news_tab'>
        <div class='card_block'>
          <div class='card_header'>
            <div class='card_name'>政府要闻</div>
            <a @click="toNewsList(8,'政府要闻')" target="_blank" rel="noopener noreferrer">
              <div class='card_more'>更多</div>
            </a>
          </div>
          <div class='card_content'>
            <div class='news_item' v-for="(item,index) in newsList.zfywNews" :key='index'>
              <a class='news_href' target="_blank" rel="noopener noreferrer" @click="getDetail(item)">
                <div class='new_title'>{{item.title}}</div>
                <div class='new_date'>{{dateFormat_YMD(item.newsDate)}}</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class='news_block'>
      <div class='card_block department_block'>
        <div class='card_header'>
          <div class='card_name'>部门动态</div>
          <a @click="toNewsList(15,'部门动态')" target="_blank" rel="noopener noreferrer">
            <div class='card_more'>更多</div>
          </a>
        </div>
        <div class='card_content'>
          <div class='news_cont'>
            <div class='news_cont_img'>
              <swiper v-if="bmdtTopNews"  :options="swiperOption" ref="mySwiper2" style="width:100%">
                  <swiper-slide v-for="(top,index) in bmdtTopNews" :key="index">
                    <img :src="top.logoUrl" alt="">
                  </swiper-slide>
              </swiper>
            </div>
            <div class='news_cont_list'>
              <div class='news_item' v-for="(item,index) in newsList.bmdtNews" :key='index'>
                <a class='news_href' :href="item.url" target="_blank" rel="noopener noreferrer"
                   @click="getDetail(item)">
                  <div class='new_title'>{{item.title}}</div>
                  <div class='new_date'>{{dateFormat_YMD(item.newsDate)}}</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='card_block township_block'>
        <div class='card_header'>
          <div class='card_name'>乡镇动态</div>
          <a @click="toNewsList(9,'乡镇动态')" target="_blank" rel="noopener noreferrer">
            <div class='card_more'>更多</div>
          </a>
        </div>
        <div class='card_content'>
          <div class='news_cont'>
            <div class='news_cont_img'>
              <swiper :options="swiperOption" ref="mySwiper3" style="width:100%">
                <swiper-slide v-for="(top,index) in xzdtTopNews" :key="index">
                  <img :src="top.logoUrl" alt="">
                </swiper-slide>
<!--                  <swiper-slide>-->
<!--                    <img src="@/assets/img/dome.jpg" alt="">-->
<!--                  </swiper-slide>-->
<!--                  <swiper-slide>-->
<!--                    <img src="@/assets/img/dome.jpg" alt="">-->
<!--                  </swiper-slide>-->
<!--                  <swiper-slide>-->
<!--                    <img src="@/assets/img/dome.jpg" alt="">-->
<!--                  </swiper-slide>-->
              </swiper>
            </div>
            <div class='news_cont_list'>
              <div class='news_item' v-for="(item,index) in newsList.xzdtNews" :key='index'>
                <a class='news_href' :href="item.url" target="_blank" rel="noopener noreferrer"
                   @click="getDetail(item)">
                  <div class='new_title'>{{item.title}}</div>
                  <div class='new_date'>{{dateFormat_YMD(item.newsDate)}}</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class='news_tv'>
      <div class='card_block'>
        <div class='card_header'>
          <div class='card_name'>图集</div>
          <!--          <a href="#" target="_blank" rel="noopener noreferrer">-->
          <!--            <div class='card_more'>更多</div>-->
          <!--          </a>-->
        </div>
        <div class='card_content'>
          <swiper :options="swiperOption" ref="mySwiper" style="width:100%">
            <swiper-slide>
              <div class='tv_contnet'>
                <div class='tv_main_img'>
                  <a href="#">
                    <img :src="tvDataList.mainTv.picUrl" alt="">
                  </a>
                </div>
                <div class='tv_img_item_list'>
                  <div class='tv_img_item' v-for="(item,index) in tvDataList.tvlist" :key='index'>
                    <a href="#">
                      <img :src="item.picUrl" alt="">
                    </a>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import Axios from '@/utils/axiosWrap'
  import DateFormat from '@/utils/momentWrap'
  import AjaxApi from '@/service/ajaxApi'

  export default {
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        holdNew: {
          title: '大英县代表遂宁市参加2019年四川省青少年射击锦标赛 获男子10米气手枪个人、团体金牌',
          doc: '7月31日，2019年四川省青少年射击锦标赛在四川省陆上遂宁、巴中等四川省十五个市州的450名10 - 19岁青少年选手参赛 ， 比赛分为男女50米步枪 、10米气步枪、飞碟多项等44个项目。本次比赛大英县代表遂宁市参加比赛，在男子10米气手枪比赛中，杨术强获得个人金牌...'
        },
        newsActive: 'focusNews',
        newsList: {
          zfywNews: [],
          bmdtNews: [],
          xzdtNews: [],
        },
        zfywTopNews:[],
        bmdtTopNews:[],
        xzdtTopNews:[],
        tvDataList: {
          mainTv: {},
          tvlist: []
        },
        swiperOption: {
          autoplay: true,
          centeredSlides: true,
          // loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        },
      }
    },
    computed: {
      
    },
    mounted() {
      
    },
    created() {
      //政府要闻-图片顶置
      this.querylist(7, 8,'top');
      this.querylist(7, 9,'top');
      this.querylist(7, 15,'top');
      this.querylist(7, 8);
      this.querylist(7, 9);
      this.querylist(7, 15);
      this.getPkPicsById();
    },
    methods: {
      getPkPicsById() {
        Axios.get(AjaxApi.getPkPicsById, {id: 238}).then(res => {
          if (res.status === 200) {
            this.tvDataList.mainTv = res.data[0];
            this.tvDataList.tvlist = res.data;
          }
        })
      },
      toNewsList(pkNewsTypeId, pkNewsType) {
        let json = {
          modelId: '2',
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
      querylist(size, pkNewsTypeId,mark) {
        let json = {
          size: size,
          pkId: 238,
          pkModelId: 2,
          pkNewsTypeId: pkNewsTypeId,
        };
        if(mark)json.showtop = 1;
        Axios.get(AjaxApi.querylist, json).then(res => {
          if (res.status === 200) {
            if (pkNewsTypeId === 8) {
              if(mark)this.zfywTopNews = res.data.body.datas;
              this.newsList.zfywNews = res.data.body.datas;
            }
            if (pkNewsTypeId === 9) {
              if(mark)this.xzdtTopNews = res.data.body.datas;
              this.newsList.xzdtNews = res.data.body.datas;
            }
            if (pkNewsTypeId === 15) {
              if(mark)this.bmdtTopNews = res.data.body.datas;
              this.newsList.bmdtNews = res.data.body.datas;
            }
          }
        })
      },
    }
  }
</script>
<style lang="scss">
  .new_template {
    width: 100%;
    padding: 0 30px;
    margin-top: 20px;

    .hold_box {
      width: 1250px;
      margin: 0 auto;
      overflow: hidden;

      .tody_hold {
        height: 100px;
        width: 200px;
        float: left;

        .tody_item {
          height: 50px;
          width: 100%;
          background-color: rgba(241, 241, 241, 1);
          text-align: center;
          line-height: 20px;
          padding: 4px 0;
          font-size: 12px;

          &.tody_title {
            background-color: $mainColor;
            line-height: 42px;
            color: #fff;
            font-weight: bold;
            font-size: $font14;

            img {
              width: 18px;
              height: 18px;
              vertical-align: middle;
              margin-right: 10px;
            }
          }
        }
      }

      .hold_new {
        float: right;
        margin-left: 10px;
        width: 1040px;
        padding-top: 5px;

        .hold_title {
          font-size: 24px;
          font-weight: bold;
          color: #333;
        }

        .hold_doc {
          margin-top: 10px;
          font-size: $font14;
          line-height: 24px;
        }
      }
    }

    .focus_news {
      width: 1250px;
      margin: 20px auto 0;
      overflow: hidden;

      .focus_news_img {
        float: left;
        width: 524px;
        height: 326px;

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

    .news_block {
      width: 1250px;
      margin: 20px auto 0;
      height: auto;
      overflow: hidden;

      .department_block {
        float: left;
        width: 615px;

        .news_cont {
          padding-top: 10px;

          .news_cont_img {
            float: left;
            width: 250px;
            height: 195px;

            img {
              width: 100%;
              height: 100%;
            }
          }

          .news_cont_list {
            float: right;
            width: 355px;
          }
        }
      }

      .township_block {
        float: right;
        width: 615px;

        .news_cont {
          padding-top: 10px;

          .news_cont_img {
            float: left;
            height: 195px;
            width: 250px;

            img {
              width: 100%;
              height: 195px;
            }
          }

          .news_cont_list {
            float: right;
            width: 355px;
          }
        }
      }
    }

    .news_tv {
      width: 1250px;
      height: auto;
      overflow: hidden;
      margin: 20px auto 0;

      .tv_contnet {
        width: 100%;
        height: 298px;
        padding-top: 10px;

        .tv_main_img {
          width: 470px;
          height: 100%;
          float: left;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .tv_img_item_list {
          float: left;
          width: 780px;
          height: 292px;

          .tv_img_item {
            width: 33.33%;
            height: 50%;
            padding-left: 4px;
            padding-bottom: 4px;
            float: left;

            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
</style>
