<template>
  <div class="system_home">
    <div class='content_item banner_img'>
      <img src="http://114.116.31.126/daying/images/%E9%A6%96%E9%A1%B5/u342.png" alt="">
    </div>
    <div class='content_item newsAndInfo'>
      <div class='w_tap'>
        <div class='w_tap_item' name='policy' :class='{"is_active":activeTap==="policy"}' @mouseover="selecedTab('policy')">
          <a href="javascript:;">智慧政策</a>
        </div>
        <div class='w_tap_item' name='enterprise' :class='{"is_active":activeTap==="enterprise"}' @mouseover="selecedTab('enterprise')">
          <a href="javascript:;">企业服务</a>
        </div>
        <div class='w_tap_item' name='government' :class='{"is_active":activeTap==="government"}' @mouseover="selecedTab('government')">
          <a href="javascript:;">政务服务</a>
        </div>
        <div class='w_tap_item' name='policyNeed' :class='{"is_active":activeTap==="policyNeed"}' @mouseover="selecedTab('policyNeed')">
          <a href="javascript:;">企业需求</a>
        </div>
      </div>
      <div class='tap_content' v-if='activeTap==="policy"'>
        <div class='left_img'>
          <img src="http://114.116.31.126/daying/images/%E9%A6%96%E9%A1%B5/u42.jpg" alt="">
          <div class='title'>全链条、智慧化管控债务风险 成都高新区</div>
        </div>
        <div class='right_news'>
          <div class='news_item' v-for="(item,index) in focusNews" :key='index'>
            <a class='news_href' :href="item.url" target="_blank" rel="noopener noreferrer"><div class='new_title'>{{item.title}}</div>
            <div class='new_date'>{{item.date}}</div></a>
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
            <a class='news_href' :href="item.url" target="_blank" rel="noopener noreferrer"><div class='new_title'>{{item.title}}</div>
            <div class='new_date'>{{item.date}}</div></a>
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
            <a class='news_href' :href="item.url" target="_blank" rel="noopener noreferrer"><div class='new_title'>{{item.title}}</div>
            <div class='new_date'>{{item.date}}</div></a>
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
            <a class='news_href' :href="item.url" target="_blank" rel="noopener noreferrer"><div class='new_title'>{{item.title}}</div>
            <div class='new_date'>{{item.date}}</div></a>
          </div>
        </div>
      </div>
    </div>
    <div class='content_item promote'>
      <div class='promote_header'>
        <div> ———  <span>产业促进</span>  ———</div>
      </div>
      <div class='promote_content'>
         <swiper :options="swiperOption" ref="mySwiper" style="width:100%">
            <!-- slides -->
            <swiper-slide v-for='(item,index) in guidelist' :key='index'>
              <a :href="item.href">
                <div class='swiper_card'>
                  <img :src="item.icon" alt="">
                  <div class='title'>{{item.title}}</div>
                </div>
              </a>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
            
          </swiper> 
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
      </div>
    </div>
    <div class='content_item loveScene'>
      <el-tabs v-model="noticeActive1" type="card" >
        <el-tab-pane label="公开信息" name="publicinfo">
          <div class='tab_content'>
             <div class='love_left'>
                <div class='love_card'>
                  <div class='love_card_head'>
                    重点领域信息公开
                  </div>
                  <div class='love_card_content'>
                    <a :href="item.href" v-for='(item,index) in guidelist' :key='index'>
                      <div class='love_item'>
                        <img :src="item.icon" alt="">
                        <div class='title'>{{item.title}}</div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class='love_card'>
                  <div class='love_card_head'>
                    政府信息公开发布平台
                  </div>
                  <div class='love_card_content'>
                     <div class='platform_item' v-for='(item,index) in platformlist' :key='index'>
                      <a :href="item.href"> {{item.title}}
                       <i class='el-icon-arrow-right'></i>
                      </a>
                     </div>
                   
                  </div>
                </div>
            </div>
            <div class='love_right'>
                <el-tabs v-model="newsActive" >
                  <el-tab-pane label="政府要闻" name="focusNews" >
                    <div class='news_item' v-for="(item,index) in newsList.focusNews" :key='index'>
                      <a class='news_href' :href="item.url" target="_blank" rel="noopener noreferrer"><div class='new_title'>{{item.title}}</div>
                      <div class='new_date'>{{item.date}}</div></a>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="部门动态" name="departmentNews">
                    <div class='news_item' v-for="(item,index) in newsList.departmentNews" :key='index'>
                      <a class='news_href' :href="item.url" target="_blank" rel="noopener noreferrer"><div class='new_title'>{{item.title}}</div>
                      <div class='new_date'>{{item.date}}</div></a>
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
        <el-tab-pane label="气象预报" name="scene">
          <div class='tab_content'>
            <div class='love_left'>
                <div class='love_card'>
                  <div class='love_card_head'>
                   气象信息公开
                  </div>
                  <div class='love_card_content'>
                    <a :href="item.href" v-for='(item,index) in guidelist' :key='index'>
                      <div class='love_item'>
                        <img :src="item.icon" alt="">
                        <div class='title'>{{item.title}}</div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class='love_card'>
                  <div class='love_card_head'>
                    气象公开发布平台
                  </div>
                  <div class='love_card_content'>
                     <div class='platform_item' v-for='(item,index) in platformlist' :key='index'>
                      <a :href="item.href"> {{item.title}}
                       <i class='el-icon-arrow-right'></i>
                      </a>
                     </div>
                   
                  </div>
                </div>
            </div>
            <div class='love_right'>
                <el-tabs v-model="newsActive" >
                  <el-tab-pane label="气象要闻" name="focusNews" >
                    <div class='news_item' v-for="(item,index) in newsList.focusNews" :key='index'>
                      <a class='news_href' :href="item.url" target="_blank" rel="noopener noreferrer"><div class='new_title'>{{item.title}}</div>
                      <div class='new_date'>{{item.date}}</div></a>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="气象动态" name="departmentNews">
                    <div class='news_item' v-for="(item,index) in newsList.departmentNews" :key='index'>
                      <a class='news_href' :href="item.url" target="_blank" rel="noopener noreferrer"><div class='new_title'>{{item.title}}</div>
                      <div class='new_date'>{{item.date}}</div></a>
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
        <el-tab-pane label="通知公告" name="notice">
            <div class='tab_content'>
                <div class='love_left'>
                    <div class='love_card'>
                      <div class='love_card_head'>
                        重点领域信息通知
                      </div>
                      <div class='love_card_content'>
                        <a :href="item.href" v-for='(item,index) in guidelist' :key='index'>
                          <div class='love_item'>
                            <img :src="item.icon" alt="">
                            <div class='title'>{{item.title}}</div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div class='love_card'>
                      <div class='love_card_head'>
                        政府信息公开发布平台
                      </div>
                      <div class='love_card_content'>
                        <div class='platform_item' v-for='(item,index) in platformlist' :key='index'>
                          <a :href="item.href"> {{item.title}}
                          <i class='el-icon-arrow-right'></i>
                          </a>
                        </div>
                      </div>
                    </div>
                </div>
                <div class='love_right'>
                    <el-tabs v-model="newsActive" >
                      <el-tab-pane label="政府要闻" name="focusNews" >
                        <div class='news_item' v-for="(item,index) in newsList.focusNews" :key='index'>
                          <a class='news_href' :href="item.url" target="_blank" rel="noopener noreferrer"><div class='new_title'>{{item.title}}</div>
                          <div class='new_date'>{{item.date}}</div></a>
                        </div>
                      </el-tab-pane>
                      <el-tab-pane label="部门动态" name="departmentNews">
                        <div class='news_item' v-for="(item,index) in newsList.departmentNews" :key='index'>
                          <a class='news_href' :href="item.url" target="_blank" rel="noopener noreferrer"><div class='new_title'>{{item.title}}</div>
                          <div class='new_date'>{{item.date}}</div></a>
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

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    swiper,
    swiperSlide
  },
  data(){
    return {
      newsActive:'focusNews',
      activeTap:'policy',
      focusNews:[
          {
            title:'大英县召开落实“两纲”全面达标攻坚推进会暨“两纲大英县召开落实“两纲”全面达标攻坚推进会暨“两纲',
            date:'2019-08-07',
            url:'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml'
          },
          {
            title:'大英县召开落实“两纲”全面达标攻坚推进会暨“两纲大英县召开',
            date:'2019-08-01',
            url:'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml'
          },
          {
            title:'大英县召开落实“两纲”全面达标攻“两纲”全面达标攻坚推进会暨两纲',
            date:'2019-08-04',
            url:'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml'
          }
      ],
      swiperOption: {
        slidesPerView:6,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      guidelist:[
        {
          href:'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml',
          icon:'http://114.116.31.126/daying/images/%E6%8A%95%E8%B5%84%E5%A4%A7%E8%8B%B1/u1744.png',
          title:'投资向导'
        },
        {
          href:'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml',
          icon:'http://114.116.31.126/daying/images/%E6%8A%95%E8%B5%84%E5%A4%A7%E8%8B%B1/u1745.png',
          title:'优惠政策'
        },
        {
          href:'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml',
          icon:'http://114.116.31.126/daying/images/%E6%8A%95%E8%B5%84%E5%A4%A7%E8%8B%B1/u1746.png',
          title:'企业入园'
        },
        {
          href:'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml',
          icon:'http://114.116.31.126/daying/images/%E6%8A%95%E8%B5%84%E5%A4%A7%E8%8B%B1/u1747.png',
          title:'投资问答'
        },
        {
          href:'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml',
          icon:'http://114.116.31.126/daying/images/%E6%8A%95%E8%B5%84%E5%A4%A7%E8%8B%B1/u1748.png',
          title:'投资环境'
        },
        {
          href:'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml',
          icon:'http://114.116.31.126/daying/images/%E6%8A%95%E8%B5%84%E5%A4%A7%E8%8B%B1/u1749.png',
          title:'投资成本'
        },
        {
          href:'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml',
          icon:'http://114.116.31.126/daying/images/%E6%8A%95%E8%B5%84%E5%A4%A7%E8%8B%B1/u1750.png',
          title:'投资办事服务'
        }
      ],
      platformlist:[
        {
          href:'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml',
          title:'政府信息公开目录'
        },
        {
            href:'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml',
            title:'政府信息公开年报'
        },
        {
          href:'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml',
          title:'政府信息公开要点'
        },
        {
          href:'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml',
          title:'政府信息公开指南'
        },
        {
          href:'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml',
          title:'政府信息依审公开'
        },
      ],
      noticeActive1:'publicinfo',
      newsList:{
        focusNews:[
          {
            title:'大英县召开落实“两纲”全面达标攻坚推进会暨“两纲大英县召开落实“两纲”全面达标攻坚推进会暨“两纲',
            date:'2019-08-07',
            url:'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml'
          },
          {
            title:'大英县召开落实“两纲”全面达标攻坚推进会暨“两纲大英县召开',
            date:'2019-08-01',
            url:'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml'
          },
          {
            title:'大英县召开落实“两纲”全面达标攻“两纲”全面达标攻坚推进会暨两纲',
            date:'2019-08-04',
            url:'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml'
          }
        ],
        departmentNews:[
          {
            title:'大英县召开落实“两纲”全面达标攻坚推进会暨“两纲大英县召开落实“两纲”全面达标攻坚推进会暨“两纲',
            date:'2019-08-07',
            url:'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml'
          },
          {
            title:'大英县召开落实“两纲”全面达标会暨“两纲大英县召开',
            date:'2019-08-01',
            url:'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml'
          },
          {
            title:'大英县召开落实“两纲”全面达标攻“两纲”全面达标攻坚推进会暨两纲推进会暨“两纲大英县召开落实“两纲”全面达标攻坚推进会暨“两纲',
            date:'2019-08-04',
            url:'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml'
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
      this.swiper.slideTo(3, 1000, false)
  },
  methods:{
    selecedTab(name){
        this.activeTap=name
    }
  }
}
</script>
<style lang="scss">
  .swiper-wrapper,.swiper-container{
    width: 100%;
  }
  .system_home{
    .banner_img{
      margin-top:0;
      width:100%;
      img{
        width:100%;
      }
    }
    .newsAndInfo{
      margin-top:40px;
      .w_tap{
        width:100%;
        text-align: center;
        .w_tap_item{
          display: inline-block;
          width:120px;
          height:48px;
          border:1px solid #ddd;
          margin-right:15px;
          text-align: center;
          line-height: 48px;
          font-size:16px;
          &:last-child{
            margin-right:0;
          }
          &.is_active{
            background-color:$mainColor;
            color:#fff;
            a{
              display: inline-block;
              width:100%;
              height:100%;
              color:#fff;
            }
          }
        }
      }
      .tap_content{
        width:100%;
        overflow: hidden;
        margin-top:20px;
        .left_img{
          position: relative;
          float: left;
          width:400px;
          img{
            width:100%;
          }
          .title{
            width:100%;
            position: absolute;
            bottom:0;
            padding:10px;
            background:rgba(0,0,0,0.3);
            color:#fff;
            font-size:16px;
            font-weight: bold;
          }
        }
        .right_news{
          float:right;
          width:830px;
        }
      }
      
    }
    .promote{
      margin-top:40px;
      .promote_header{
        text-align: center;
        line-height: 30px;
        span{
          font-weight: bold;
          font-size:24px;
          color:#333;
          padding:0 5px;
        }
      }
      .promote_content{
        width:100%;
        margin-top:20px;
        position: relative;
        padding:0 80px;
        .swiper_card{
          height:240px;
          width:160px;
          border:1px solid #ddd;
          text-align: center;
          img{
            margin-top:80px;
          }
          .title{
            margin-top:20px;
          }
        }
      }
    }
    .loveScene{
      margin-top:40px;
      background:rgba(249, 249, 249, 1);
      .el-tabs__nav{
        width:100%;
        .el-tabs__item{
          width: 33%;
          background:#fff;
          text-align: center;
          &.is-active{
            color:$mainColor;
            background:rgba(249, 249, 249, 1);
          }
        }
      }
      .tab_content{
        width:100%;
        overflow: hidden;
        .love_left{
          float: left;
          width:740px;
          .love_card{
            width:100%;
            background:#fff;
            margin-bottom:10px;
            .love_card_head{
              width:100%;
              line-height:40px;
              text-align: center;
              color:$mainColor;
              font-size:14px;
              font-weight: bold;
              border-bottom: 2px solid $mainColor;
            }
            .love_card_content{
              overflow: hidden;
              padding:10px;
              padding-top:0;
              .love_item{
                display: inline-block;
                width:80px;
                text-align: center;
                padding:20px 0;
              }
              .platform_item{
                width:232px;
                height:40px;
                line-height: 30px;
                float: left;
                margin-right:10px;
                background: rgba(249, 249, 249, 1);
                padding:5px 10px;
                font-size:14px;
                margin-top:10px;
                border:1px solid #ddd;
                a{
                  display: inline-block;
                  width:100%;
                  height:100%;
                }
                .el-icon-arrow-right{
                  float: right;
                  line-height: 30px;
                  color:$mainColor;
                }
                &:nth-child(3n){
                  margin-right:0;
                }
              }
            }
          }
        }
        .love_right{
          float: right;
          width:500px;
          background:#fff;
          .el-tabs__nav{
            border-bottom:1px solid #ddd;
          }
          .el-tabs__item{
            &.is-active{
              color:$mainColor;
              background:#fff;
            }
          }
          .el-tabs__content{
            height:252px;
          }
        }
      }
      .bottom_five{
        margin-top:10px;
      }
      .mewant_item{
        width:297.5px;
        float: left;
        line-height: 48px;
        font-size:20px;
        font-weight: bold;
        color:#fff;
        background:$mainColor;
        margin-right:20px;
        text-align: center;
        img{
          vertical-align: middle;
          margin-right:40px;
        }
        &:last-child{
          margin-right:0;
        }
      }
    }
  }
</style>

