<template>
  <div class='service_template'>
    <div class='content_item direct_box'>
      <div class='pad_card'>
        <div class='pad_card_title'>
          <span class='pad_name'>企业办事服务直通车</span>
        </div>
        <div class='pad_card_content'>
          <div class='park_contnet'>
            <div class='icon_title_item' v-for='(item,index) in infoOpenList' :key='index'>
              <a v-if="item.type==='main'" :href="item.href" target="_blank">
                <img :src="item.icon" alt="">
                {{item.title}}</a>
              <a v-else
                 :href="'http://sns.sczwfw.gov.cn/app/main?flag=2&areaCode=510900000000&iframeUrlLo='+item.href+'?areaCode=510109000000'"
                 target="_blank">
                <img :src="item.icon" alt="">
                {{item.title}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class='content_item workbox'>
        <el-tabs v-model="workActive1">
          <el-tab-pane label="个人办事" name="publicinfo">
            <div class='work_item' v-for='(item,index) in worklist.personal' :key='index'>
              <a v-if="item.type==='main'" :href="item.href" target="_blank"><i class='el-icon-arrow-right'></i>
                {{item.title}}</a>
              <a v-else
                 :href="'http://sns.sczwfw.gov.cn/app/main?flag=2&areaCode=510900000000&iframeUrlLo='+item.href+'?areaCode=510109000000'"
                 target="_blank">
                <i class='el-icon-arrow-right'></i> {{item.title}}</a>
            </div>
          </el-tab-pane>
          <el-tab-pane label="法人办事" name="scene">
            <div class='work_item' v-for='(item,index) in worklist.legalperson' :key='index'>
              <a v-if="item.type==='main'" :href="item.href" target="_blank"><i class='el-icon-arrow-right'></i>
                {{item.title}}</a>
              <a v-else
                 :href="'http://sns.sczwfw.gov.cn/app/main?flag=2&areaCode=510900000000&iframeUrlLo='+item.href+'?areaCode=510109000000'"
                 target="_blank">
                <i class='el-icon-arrow-right'></i> {{item.title}}</a>
            </div>
          </el-tab-pane>
        </el-tabs>
    </div>
    <!-- <div class='content_item'>
      <a class='mewant_item item_green' href="https://baidu.com">
        <img src="http://114.116.31.126/daying/images/%E5%8A%9E%E4%BA%8B%E6%9C%8D%E5%8A%A1/u2337.png" alt="">
        我要看
      </a>
      <a class='mewant_item item_hgreen' href="https://baidu.com">
        <img src="http://114.116.31.126/daying/images/%E5%8A%9E%E4%BA%8B%E6%9C%8D%E5%8A%A1/u2338.png" alt="">
        我要查</a>
      <a class='mewant_item item_hblue' href="https://baidu.com">
        <img src="http://114.116.31.126/daying/images/%E5%8A%9E%E4%BA%8B%E6%9C%8D%E5%8A%A1/u2339.png" alt="">
        我要问</a>
      <a class='mewant_item item_blue' href="https://baidu.com">
        <img src="http://114.116.31.126/daying/images/%E5%8A%9E%E4%BA%8B%E6%9C%8D%E5%8A%A1/u2340.png" alt="">
        我要办</a>
      <a class='mewant_item item_dblue' href="https://baidu.com">
        <img src="http://114.116.31.126/daying/images/%E5%8A%9E%E4%BA%8B%E6%9C%8D%E5%8A%A1/u2341.png" alt="">
        我要评</a>
    </div> -->
    <div class='content_item problembox'>
      <div class='problem_left'>
        <div class='pad_card problem_card'>
          <div class='pad_card_title'>
            <span class='pad_name'>常见问题</span>
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
      <div class='problem_right'>
        <div class='pad_card '>
          <div class='pad_card_title'>
            <span class='pad_name'>快捷查询</span>
          </div>
          <div class='pad_card_content'>
            <div class='seach_item' v-for='(item,index) in seachlist' :key='index'>
              <a :href="item.href">
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
  export default {
    data() {
      return {
        workActive1: 'publicinfo',
        infoOpenList: [
          {
            icon: 'http://114.116.31.126/daying/images/%E6%94%BF%E5%8A%A1%E5%85%AC%E5%BC%80/u2044.png',
            title: '职业资格',
            href: 'presonServices/presonServicesHome/AREAID/8'
          },
          {
            icon: 'http://114.116.31.126/daying/images/%E6%94%BF%E5%8A%A1%E5%85%AC%E5%BC%80/u2046.png',
            title: '证件办理',
            href: 'presonServices/presonServicesHome/AREAID/14'
          },
          {
            icon: 'http://114.116.31.126/daying/images/%E6%94%BF%E5%8A%A1%E5%85%AC%E5%BC%80/u2051.png',
            title: '公共安全',
            href: 'presonServices/presonServicesHome/AREAID/18'
          },
          {
            icon: 'http://114.116.31.126/daying/images/%E6%94%BF%E5%8A%A1%E5%85%AC%E5%BC%80/u2056.png',
            title: '公用事业',
            href: 'presonServices/presonServicesHome/AREAID/23'
          }
          , {
            icon: 'http://114.116.31.126/daying/images/%E6%94%BF%E5%8A%A1%E5%85%AC%E5%BC%80/u2046.png',
            title: '设立变更',
            href: 'legalServices/legalServicesHome/AREAID/100'
          }
          , {
            icon: 'http://114.116.31.126/daying/images/%E6%94%BF%E5%8A%A1%E5%85%AC%E5%BC%80/u2048.png',
            title: '准营准办',
            href: 'legalServices/legalServicesHome/AREAID/101'
          }
          , {
            icon: 'http://114.116.31.126/daying/images/%E6%94%BF%E5%8A%A1%E5%85%AC%E5%BC%80/u2052.png',
            title: '投资审批',
            href: 'legalServices/legalServicesHome/AREAID/107'
          }
          , {
            icon: 'http://114.116.31.126/daying/images/%E6%94%BF%E5%8A%A1%E5%85%AC%E5%BC%80/u2055.png',
            title: '资质认证',
            href: 'legalServices/legalServicesHome/AREAID/102'
          }
          , {
            icon: 'http://114.116.31.126/daying/images/%E6%94%BF%E5%8A%A1%E5%85%AC%E5%BC%80/u2047.png',
            title: '人力资源',
            href: 'legalServices/legalServicesHome/AREAID/105'
          },
          {
            icon: 'http://114.116.31.126/daying/images/%E6%94%BF%E5%8A%A1%E5%85%AC%E5%BC%80/u2049.png',
            title: '医疗卫生',
            href: 'legalServices/legalServicesHome/AREAID/117'
          },
          {
            icon: 'http://114.116.31.126/daying/images/%E6%94%BF%E5%8A%A1%E5%85%AC%E5%BC%80/u2053.png',
            title: '质量技术',
            href: 'legalServices/legalServicesHome/AREAID/122'
          },
          {
            icon: 'http://114.116.31.126/daying/images/%E6%94%BF%E5%8A%A1%E5%85%AC%E5%BC%80/u2057.png',
            title: '检验检疫',
            href: 'legalServices/legalServicesHome/AREAID/123'
          },
          {
            icon: 'http://114.116.31.126/daying/images/%E6%94%BF%E5%8A%A1%E5%85%AC%E5%BC%80/u2045.png',
            title: '安全生产',
            href: 'legalServices/legalServicesHome/AREAID/124'
          },
          {
            icon: 'http://114.116.31.126/daying/images/%E6%94%BF%E5%8A%A1%E5%85%AC%E5%BC%80/u2044.png',
            title: '司法公证',
            href: 'legalServices/legalServicesHome/AREAID/126'
          },
          {
            icon: 'http://114.116.31.126/daying/images/%E6%94%BF%E5%8A%A1%E5%85%AC%E5%BC%80/u2054.png',
            title: '法人注销',
            href: 'legalServices/legalServicesHome/AREAID/128'
          },
        ],
        worklist: {
          personal: [
            {
              title: '户籍办理',
              href: 'presonServices/presonServicesHome/AREAID/1'
            },
            {
              title: '教育科研',
              href: 'presonServices/presonServicesHome/AREAID/3'
            },
            {
              title: '就业创业',
              href: 'presonServices/presonServicesHome/AREAID/4'
            },
            {
              title: '设立变更',
              href: 'presonServices/presonServicesHome/AREAID/5'
            },
            {
              title: '准营准办',
              href: 'presonServices/presonServicesHome/AREAID/6'
            },
            {
              title: '抵押质押',
              href: 'presonServices/presonServicesHome/AREAID/7'
            },
            {
              title: '职业资格',
              href: 'presonServices/presonServicesHome/AREAID/8'
            },
            {
              title: '婚姻登记',
              href: 'presonServices/presonServicesHome/AREAID/29'
            },
            {
              title: '农林牧渔',
              href: 'presonServices/presonServicesHome/AREAID/10'
            },
            {
              title: '建设规划',
              href: 'presonServices/presonServicesHome/AREAID/11'
            },
            {
              title: '住房保障',
              href: 'presonServices/presonServicesHome/AREAID/12'
            }, {
              title: '社会保障',
              href: 'presonServices/presonServicesHome/AREAID/13'
            }
            , {
              title: '证件办理',
              href: 'presonServices/presonServicesHome/AREAID/14'
            }
            , {
              title: '交通出行',
              href: 'presonServices/presonServicesHome/AREAID/15'
            }
            , {
              title: '旅游观光',
              href: 'presonServices/presonServicesHome/AREAID/16'
            }
            , {
              type: 'main',
              title: '质量技术',
              href: 'sns.sczwfw.gov.cn/app/main?flag=2&areaCode=&iframeUrlLo=presonServices/presonServicesHome/AREAID/17'
            }
            , {
              title: '公共安全',
              href: 'presonServices/presonServicesHome/AREAID/18'
            }
            , {
              title: '司法公正',
              href: 'presonServices/presonServicesHome/AREAID/19'
            }
            , {
              title: '环保绿化',
              href: 'presonServices/presonServicesHome/AREAID/21'
            }
            , {
              title: '文化体育',
              href: 'presonServices/presonServicesHome/AREAID/22'
            }
            , {
              title: '公用事业',
              href: 'presonServices/presonServicesHome/AREAID/23'
            }
            , {
              title: '医疗卫生',
              href: 'presonServices/presonServicesHome/AREAID/24'
            }
            , {
              title: '其他',
              href: 'presonServices/presonServicesHome/AREAID/99'
            }
          ],
          legalperson: [
            {
              title: '设立变更',
              href: 'legalServices/legalServicesHome/AREAID/100'
            },
            {
              title: '准营准办',
              href: 'legalServices/legalServicesHome/AREAID/101'
            },
            {
              title: '资质认证',
              href: 'legalServices/legalServicesHome/AREAID/102'
            },
            {
              title: '年检年审',
              href: 'legalServices/legalServicesHome/AREAID/103'
            },
            {
              title: '人力资源',
              href: 'legalServices/legalServicesHome/AREAID/105'
            },
            {
              title: '社会保障',
              href: 'legalServices/legalServicesHome/AREAID/106'
            },
            {
              title: '投资审批',
              href: 'legalServices/legalServicesHome/AREAID/107'
            },
            {
              title: '商务贸易',
              href: 'legalServices/legalServicesHome/AREAID/109'
            },
            {
              title: '农林牧渔',
              href: 'legalServices/legalServicesHome/AREAID/112'
            },
            {
              title: '国土和规划建设',
              href: 'legalServices/legalServicesHome/AREAID/113'
            },
            {
              title: '交通运输',
              href: 'legalServices/legalServicesHome/AREAID/114'
            }, {
              title: '环保绿化',
              href: 'legalServices/legalServicesHome/AREAID/21'
            }
            , {
              title: '水务气象',
              href: 'legalServices/legalServicesHome/AREAID/116'
            }
            , {
              title: '医疗卫生',
              href: 'legalServices/legalServicesHome/AREAID/24'
            }
            , {
              title: '文体教育',
              href: 'legalServices/legalServicesHome/AREAID/119'
            }
            , {
              title: '质量技术',
              href: 'legalServices/legalServicesHome/AREAID/122'
            }
            , {
              title: '检验检疫',
              href: 'legalServices/legalServicesHome/AREAID/123'
            }
            , {
              title: '安全生产',
              href: 'legalServices/legalServicesHome/AREAID/124'
            }
            , {
              title: '公安消防',
              href: 'legalServices/legalServicesHome/AREAID/125'
            }
            , {
              title: '司法公证',
              href: 'legalServices/legalServicesHome/AREAID/126'
            }
            , {
              title: '公用事业',
              href: 'legalServices/legalServicesHome/AREAID/127'
            }
            , {
              title: '法人注销',
              href: 'legalServices/legalServicesHome/AREAID/128'
            }
          ]
        },
        seachlist: [
          {
            icon: 'http://114.116.31.126/daying/images/%E5%8A%9E%E4%BA%8B%E6%9C%8D%E5%8A%A1/u2374.png',
            title: '公交路线',
            href: 'http://chengdu.gongjiao.com/'
          },
          {
            icon: 'http://114.116.31.126/daying/images/%E5%8A%9E%E4%BA%8B%E6%9C%8D%E5%8A%A1/u2376.png',
            title: '电子警察',
            href: 'http://028.weizhangwang.com/'
          },
          {
            icon: 'http://114.116.31.126/daying/images/%E5%8A%9E%E4%BA%8B%E6%9C%8D%E5%8A%A1/u2378.png',
            title: '地图服务',
            href: 'http://www.scgis.net/scgcmap/map_themeshow.html#'
          },
          {
            icon: 'http://114.116.31.126/daying/images/%E5%8A%9E%E4%BA%8B%E6%9C%8D%E5%8A%A1/u2380.png',
            title: '公积金查询',
            href: 'http://sgjj.suining.gov.cn/'
          },
          {
            icon: 'http://114.116.31.126/daying/images/%E5%8A%9E%E4%BA%8B%E6%9C%8D%E5%8A%A1/u2382.png',
            title: '航班查询',
            href: 'http://www.caac.gov.cn/INDEX/HLFW/ZFGDPJCX/?setout=&arrive='
          },
          {
            icon: 'http://114.116.31.126/daying/images/%E5%8A%9E%E4%BA%8B%E6%9C%8D%E5%8A%A1/u2384.png',
            title: '社保查询',
            href: 'http://rsj.suining.gov.cn/'
          }
        ],
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
      }
    }
  }
</script>
<style lang="scss">
  .service_template {
    .direct_box {
      .icon_title_item {
        padding: 0;
        margin: 0;
        text-align: center;
        width: 20%;
        font-size: $font14;
      }
    }

    .workbox {
      .el-tabs__header {
          background: rgba(249, 249, 249, 1);
          border: #dedede;
          padding-left: 20px;

          .el-tabs__item {
            height: auto;
            font-weight: bold;
            font-size: 18px;
            padding: 15px 20px;
          }
        }

        .el-tabs__content {
          padding: 0 20px;
        }

        .work_item {
          width: 20%;
          text-align: left;
          padding-left: 10px;
          border-bottom: 1px dashed #ddd;
          float: left;
          line-height: 40px;

          a {
            display: block;
            width: 100%;

            i {
              color: skyblue;
            }

            font-size: $font14;
          }
        }
    }

    .problembox {
      .problem_left {
        width: 860px;
        float: left;

        .problem_left_header {
          width: 100%;
          overflow: hidden;

          .head_item {
            width: 50%;
            float: left;
            padding: 0 5px;

            img {
              width: 100%;
            }
          }
        }

        .problem_card {
          .news_item {
            line-height: 40px;
          }
          .pad_card_content{
            height:236px;
          }
        }
      }

      .problem_right {
        width: 370px;
        float: right;

        .seach_item {
          display: inline-block;
          border: 1px solid $mainColor;
          width: 50%;
          line-height: 70px;
          font-size: 16px;
          padding-left: 20px;

          img {
            vertical-align: middle;
            margin-right: 10px;
          }
        }
      }

      .img_box {
        width: 100%;
        clear: both;
        padding-top: 10px;

        img {
          width: 100%;
        }
      }
    }

    .mewant_item {
      display: inline-block;
      width: 242px;
      height: 54px;
      margin-right: 10px;
      text-align: center;
      line-height: 54px;
      font-size: 16px;
      color: #fff;
      font-weight: bold;

      img {
        vertical-align: middle;
        margin-right: 10px;
      }

      &.item_green {
        background-color: rgba(92, 184, 92, 1);
      }

      &.item_hgreen {
        background-color: rgba(65, 181, 24, 1);
      }

      &.item_blue {
        background-color: rgba(70, 184, 218, 1);
      }

      &.item_hblue {
        background-color: rgba(21, 114, 213, 1);
      }

      &.item_dblue {
        background-color: rgba(8, 90, 176, 1);
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }
</style>
