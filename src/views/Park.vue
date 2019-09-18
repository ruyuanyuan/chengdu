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
              <a href="#">
                <img :src="parkDataList.mainPark.picUrl" alt="">
              </a>
            </div>
            <div class='park_img_item_list'>
              <div class='park_img_item' v-for="(item,index) in parkDataList.parklist" :key='index'
                   v-if="index<5 && index>0">
                <a href="#">
                  <img :src="item.picUrl" alt="">
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
            <video class='park_video' controls autoplay name="media"
                   src="http://114.116.31.126/daying/%E5%A4%A7%E8%8B%B1%E5%AE%A3%E4%BC%A0%E7%89%87.mp4"></video>
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
                {{parkIntroduce.introduce?ToText(parkIntroduce.introduce).substring(1, 498)+'...':''}}
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
    </div>
  </div>
</template>
<script>
  import Axios from '@/utils/axiosWrap'
  import AjaxApi from '@/service/ajaxApi'

  export default {
    data() {
      return {
        parkDataList: {
          mainPark: {
            img_url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1461836175,2413247160&fm=26&gp=0.jpg',
            img_href: 'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml'
          },
          parklist: []
        },
        parkIntroduce: {
          mapUrl: 'http://www.coolzou.com/Photo/2013/11/08/InfoArticle_19443_1.jpg',
          introduce: null,
        }
      }
    },
    mounted() {
      this.openload();
      setTimeout(() => {
        this.closeload()
      }, 1000)
    },
    created() {
      this.getpkPark();
      this.getPkPicsById();
    },
    methods: {
      toNewsList(pkNewsTypeId, pkNewsType) {
        let json = {
          modelId: '11',
          pkNewsTypeId: pkNewsTypeId,
          pkNewsType: pkNewsType,
        };
        this.$router.push({name: 'newlist', query: json})
      },
      ToText(HTML) {
        var input = HTML;
        return input
          .replace(/<(style|script|iframe)[^>]*?>[\s\S]+?<\/\1\s*>/gi, '')
          .replace(/<[^>]+?>/g, '')
          .replace(/\s+/g, ' ')
          .replace(/ /g, ' ')
          .replace(/>/g, ' ')
          .replace(/\s/g, '')
          .replace(/[ ]|[&nbsp;]/g, '')
      },
      getpkPark() {
        Axios.get(AjaxApi.getPkParkById).then(res => {
          if (res.status === 200) {
            let resData = res.data.body;
            if (resData) {
              this.parkIntroduce.mapUrl = resData.areaConditionPic;
              this.parkIntroduce.introduce = resData.textSummary
            }
          }
        })
      },
      getPkPicsById() {
        Axios.get(AjaxApi.getPkPicsByParkId).then(res => {
          if (res.status === 200) {
            if(res.data) {
              this.parkDataList.mainPark = res.data[0];
              this.parkDataList.parklist = res.data;
            }
          }
        })
      },
    }
  }
</script>
<style lang="scss">
  .park_template {
    width: 100%;

    .park_left {
      float: left;
      width: 750px;
      height: 100%;

      .park_contnet {
        width: 100%;
        height: 288px;

        .park_main_img {
          width: 40%;
          height: 100%;
          float: left;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .park_img_item_list {
          float: left;
          width: 60%;
          height: 292px;

          .park_img_item {
            width: 50%;
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

    .park_right {
      float: right;
      width: 480px;
      height: 100%;

      .park_contnet {
        width: 100%;
        height: 288px;

        .park_video {
          width: 100%;
          height: 100%;
        }
      }
    }

    .developArea {
      overflow: hidden;

      .park_map {
        float: left;
        width: 440px;
        height: auto;

        img {
          width: 100%;
          height: auto;
        }
      }

      .park_introduce {
        float: right;
        width: 740px;

        .park_doc {
          float: left;
          width: 600px;
          font-size: $font14;
          line-height: 32px;
          color: #1E1E1E;
        }

        .pack_bth {
          float: right;

          .boder_bth {
            display: block;
            width: 130px;
            height: 40px;
            margin-bottom: 20px;
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

        &:after {
          clear: both;
        }
      }
    }

    .mewant_item {
      display: inline-block;
      width: 240px;
      height: 54px;
      margin-right: 96.67px;
      text-align: center;
      line-height: 54px;
      font-size: $font14;
      color: #fff;

      &.item_green {
        background-color: rgba(109, 191, 109, 1);
      }

      &.item_hgreen {
        background-color: rgba(170, 222, 152, 1);
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
  }
</style>
