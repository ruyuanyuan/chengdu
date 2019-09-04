<template>
  <div class='party_template'>
    <div class='content_item party_news'>
      <div class='party_news_img'>
        <swiper :options="swiperOption" ref="mySwiper1" style="width:100%">
            <swiper-slide>
              <img src="@/assets/img/dome.jpg" alt="">
            </swiper-slide>
             <swiper-slide>
              <img src="@/assets/img/dome.jpg" alt="">
            </swiper-slide>
             <swiper-slide>
              <img src="@/assets/img/dome.jpg" alt="">
            </swiper-slide>
        </swiper>
      </div>
      <div class='party_news_list'>
        <div class='card_block'>
          <div class='card_content'>
            <div class='party_item' v-for="(item,index) in partyList" :key='index'>
              <a class='party_href' target="_blank" rel="noopener noreferrer">
                <div class='party_title'>{{item.title}}</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class='content_item groupWorker'>
      <div class='card_block group_worker'>
        <div class='card_header'>
          <div class='card_name'>组工动态</div>
          <a target="_blank" rel="noopener noreferrer">
            <div class='card_more'>更多</div>
          </a>
        </div>
        <div class='card_content'>
          <div class='news_cont'>
            <div class='news_cont_img'>
              <swiper :options="swiperOption" ref="mySwiper2" style="width:100%">
                  <swiper-slide>
                    <img src="@/assets/img/dome.jpg" alt="">
                  </swiper-slide>
                  <swiper-slide>
                    <img src="@/assets/img/dome.jpg" alt="">
                  </swiper-slide>
                  <swiper-slide>
                    <img src="@/assets/img/dome.jpg" alt="">
                  </swiper-slide>
              </swiper>
            </div>
            <div class='news_cont_list'>
              <div class='news_item' v-for="(item,index) in partyList" :key='index'>
                <a class='news_href' :href="item.url" target="_blank" rel="noopener noreferrer"
                   @click="getDetail(item)">
                  <div class='new_title'>{{item.title}}</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='card_block removal'>
        <div class='card_header'>
          <div class='card_name'>任免动态</div>
          <a target="_blank" rel="noopener noreferrer">
            <div class='card_more'>更多</div>
          </a>
        </div>
        <div class='card_content'>
          <div class='news_cont'>
            <div class='news_cont_list'>
              <div class='news_item' v-for="(item,index) in partyList" :key='index'>
                <a class='news_href' :href="item.url" target="_blank" rel="noopener noreferrer"
                   @click="getDetail(item)">
                  <div class='new_title'>{{item.title}}</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class='content_item party_group'>
      <div class='party_card'>
        <div class='party_card_title'>
          基层党建
        </div>
        <div class='party_card_conetnt'>
          <div class='party_item' v-for="(item,index) in partyList" :key='index'>
              <a class='party_href' target="_blank" rel="noopener noreferrer">
                <div class='party_title'>{{item.title}}</div>
              </a>
          </div>
        </div>
      </div>
      <div class='party_card'>
        <div class='party_card_title'>
          干部工作
        </div>
        <div class='party_card_conetnt'>
          <div class='party_item' v-for="(item,index) in partyList" :key='index'>
              <a class='party_href' target="_blank" rel="noopener noreferrer">
                <div class='party_title'>{{item.title}}</div>
              </a>
          </div>
        </div>
      </div>
      <div class='party_card'>
        <div class='party_card_title'>
          人才工作
        </div>
        <div class='party_card_conetnt'>
          <div class='party_item' v-for="(item,index) in partyList" :key='index'>
              <a class='party_href' target="_blank" rel="noopener noreferrer">
                <div class='party_title'>{{item.title}}</div>
              </a>
          </div>
        </div>
      </div>
      <div class='party_card'>
        <div class='party_card_title'>
          公务员管理
        </div>
        <div class='party_card_conetnt'>
          <div class='party_item' v-for="(item,index) in partyList" :key='index'>
              <a class='party_href' target="_blank" rel="noopener noreferrer">
                <div class='party_title'>{{item.title}}</div>
              </a>
          </div>
        </div>
      </div>
      <div class='party_card'>
        <div class='party_card_title'>
          党员干部教育
        </div>
        <div class='party_card_conetnt'>
          <div class='party_item' v-for="(item,index) in partyList" :key='index'>
              <a class='party_href' target="_blank" rel="noopener noreferrer">
                <div class='party_title'>{{item.title}}</div>
              </a>
          </div>
        </div>
      </div>
      <div class='party_card'>
        <div class='party_card_title'>
          红士先锋
        </div>
        <div class='party_card_conetnt'>
          <div class='party_item' v-for="(item,index) in partyList" :key='index'>
              <a class='party_href' target="_blank" rel="noopener noreferrer">
                <div class='party_title'>{{item.title}}</div>
              </a>
          </div>
        </div>
      </div>
    </div>
    <div class='content_item party_banner'>
      <img src="http://www.snswzzb.gov.cn/newpic/hf2.jpg" alt="">
    </div>
    <div class='content_item party_study'>
      <div class='study_item' v-for='(item,index) in studyList' :key='index'>
        <a :href="item.href">
          {{item.title}}
        </a>
      </div>
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
  data(){
    return {
      partyList:[
        {
          title:'习近平在中青年干部培训班开班式上发表重要讲话',
          herf:'/newDetails'
        },
        {
          title:'习近平在中青年干部培训班开班式上发表重要讲话班式上发表重要讲话班式上发表重要讲话',
          herf:'/newDetails'
        },
        {
          title:'习近平在中青年干部培训班开班式上发表重要讲话班式上发表重要讲话班式上发表重要讲话班式上发表重要讲话班式上发表重要讲话',
          herf:'/newDetails'
        },
        {
          title:'习近平在中青年干部培训班开班式上发表重要讲话班式上发表重要讲话班式上发表重要讲话',
          herf:'/newDetails'
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
      studyList:[
        {
          title:'共产党员网',
          href:'javascript:;'
        },
        {
          title:'人民日报',
          href:'javascript:;'
        },
        {
          title:'光明日报',
          href:'javascript:;'
        },
        {
          title:'四川日报',
          href:'javascript:;'
        },
        {
          title:'四川组工网',
          href:'javascript:;'
        },
        {
          title:'天府先锋',
          href:'javascript:;'
        },
        {
          title:'四川人才工作网',
          href:'javascript:;'
        },
        {
          title:'四川干教网',
          href:'javascript:;'
        },
        {
          title:'党课党建研究',
          href:'javascript:;'
        },
        {
          title:'中国遂宁',
          href:'javascript:;'
        },
        {
          title:'四川日报',
          href:'javascript:;'
        },
        {
          title:'四川组工网',
          href:'javascript:;'
        },
        {
          title:'天府先锋',
          href:'javascript:;'
        },
        {
          title:'四川人才工作网',
          href:'javascript:;'
        },
        {
          title:'四川干教网',
          href:'javascript:;'
        },
        {
          title:'党课党建研究',
          href:'javascript:;'
        },
        {
          title:'中国遂宁',
          href:'javascript:;'
        },
        {
          title:'四川干教网',
          href:'javascript:;'
        },
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  .party_template{
    width:100%;
    height:100%;
    .party_item{
      width:100%;
      padding-left:10px;
      overflow: hidden;
      line-height: 30px;
      font-size: $font14;
      color: #333333;
      cursor: pointer;
      &:hover .party_title, &:hover .party_date{
        color: $mainHColor;
      }
      .party_href{
        display:flex;
        width:100%;
        justify-content: space-between;
      }
      .party_title{
        width: 100%;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
      }
    }
    .party_news{
      .party_news_img{
        float: left;
        width: 524px;
        height: 326px;

        img {
          width: 100%;
          height: 100%;
        }
      }
      .party_news_list {
        float: right;
        width: 700px;
      }
    }
    .groupWorker{
      .group_worker{
        float: left;
        width:900px;
        .news_cont{
          padding-top:10px;
          overflow: hidden;
          .news_cont_img{
            float: left;
            width:300px;
            height: 240px;
            img{
              width:100%;
              height:100%;
            }
          }
          .news_cont_list{
            float: right;
            width:590px;
          }
        }
      }
      .removal{
        float: right;
        width:330px;
      }
    }
    .party_card{
      float: left;
      width:402px;
      height:auto;
      border:1px solid #ddd;
      margin-right:20px;
      margin-top:20px;
      &:nth-child(3n){
        margin-right:0;
      }
      .party_card_title{
        width:100%;
        height:40px;
        background-color:$mainColor;
        color:#fff;
        font-size: $font16;
        text-align: center;
        line-height: 40px;
        font-weight: bold;
      }
    }
    .party_banner{
      img{
        width:100%;
      }
    }
    .party_study{
      margin-top:10px;
      .study_item{
        float: left;
        width:16.66%;
        padding: 10px;
        a{
          display: block;
          height:40px;
          background:$mainColor;
          color:#fff;
          text-align: center;
          line-height: 40px;
          font-size: $font14;
        }
        
      }
      
    }
  }
</style>