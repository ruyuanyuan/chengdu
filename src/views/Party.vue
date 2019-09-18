<template>
  <div class='party_template'>
    <div class='content_item party_news'>
      <div class='party_news_img'>
        <swiper v-if="topNews"  :options="swiperOption" ref="mySwiper1" style="width:100%">
          <swiper-slide v-for="(top,index) in topNews" :key="index">
            <img :src="top.logoUrl" alt="">
          </swiper-slide>
        </swiper>
      </div>
      <div class='party_news_list'>
        <div class='card_block'>
          <div class='card_content'>
            <div class='news_item' v-for="(item,index) in newsList.topNews" :key='index'>
              <a class='news_href' target="_blank" rel="noopener noreferrer" @click="getDetail(item)">
                <div class='new_title'>{{item.title}}</div>
                <div class='new_date'>{{dateFormat_YMD(item.newsDate)}}</div>
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
          <a @click="toNewsList(29,'组工动态')" target="_blank" rel="noopener noreferrer">
            <div class='card_more'>更多</div>
          </a>
        </div>
        <div class='card_content'>
          <div class='news_cont'>
            <div class='news_cont_img'>
              <swiper v-if="zgdtTopNews" :options="swiperOption" ref="mySwiper2" style="width:100%">
                  <swiper-slide v-for="(top,index) in zgdtTopNews" :key="index">
                    <img :src="top.logoUrl" alt="">
                  </swiper-slide>
              </swiper>
            </div>
            <div class='news_cont_list'>
              <div class='news_item' v-for="(item,index) in newsList.zgdtNews" :key='index'>
                <a class='news_href' target="_blank" rel="noopener noreferrer"
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
          <a @click="toNewsList(30,'任免动态')" target="_blank" rel="noopener noreferrer">
            <div class='card_more'>更多</div>
          </a>
        </div>
        <div class='card_content'>
          <div class='news_cont'>
            <div class='news_cont_list'>
              <div class='news_item' v-for="(item,index) in newsList.rmdtNews" :key='index'>
                <a class='news_href' target="_blank" rel="noopener noreferrer"
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
          <div class='party_item' v-for="(item,index) in newsList.jcdjNews" :key='index'>
              <a class='party_href' target="_blank" rel="noopener noreferrer"
                 @click="getDetail(item)">
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
          <div class='party_item' v-for="(item,index) in newsList.gbgzNews" :key='index'>
              <a class='party_href' target="_blank" rel="noopener noreferrer"
                 @click="getDetail(item)">
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
          <div class='party_item' v-for="(item,index) in newsList.rcgzNews" :key='index'>
              <a class='party_href' target="_blank" rel="noopener noreferrer"
                 @click="getDetail(item)">
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
          <div class='party_item' v-for="(item,index) in newsList.gwyglNews" :key='index'>
              <a class='party_href' target="_blank" rel="noopener noreferrer"
                 @click="getDetail(item)">
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
          <div class='party_item' v-for="(item,index) in newsList.dygbjyNews" :key='index'>
              <a class='party_href' target="_blank" rel="noopener noreferrer"
                 @click="getDetail(item)">
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
          <div class='party_item' v-for="(item,index) in newsList.hsxfNews" :key='index'>
              <a class='party_href' target="_blank" rel="noopener noreferrer"
                 @click="getDetail(item)">
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
import Axios from '@/utils/axiosWrap'
import DateFormat from '@/utils/momentWrap'
import AjaxApi from '@/service/ajaxApi'
export default {
  components: {
      swiper,
      swiperSlide
  },
  data(){
    return {
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
          href:'http://www.12371.cn/'
        },
        {
          title:'人民日报',
          href:'http://paper.people.com.cn/rmrb/html/2019-09/05/nbs.D110000renmrb_01.htm'
        },
        {
          title:'光明日报',
          href:'http://epaper.gmw.cn/gmrb/html/2019-09/05/nbs.D110000gmrb_01.htm'
        },
        {
          title:'四川日报',
          href:'http://epaper.scdaily.cn/index.shtml'
        },
        {
          title:'四川组工网',
          href:'http://www.gcdr.gov.cn/'
        },
        {
          title:'天府先锋',
          href:'javascript:;'
        },
        {
          title:'四川人才工作网',
          href:'http://www.scrcgz.com/'
        },
        {
          title:'四川干教网',
          href:'http://www.scgb.gov.cn/WebSite/index.htm#page1'
        },
        {
          title:'党课党建研究',
          href:'javascript:;'
        },
        {
          title:'中国遂宁',
          href:'http://www.suining.gov.cn/welcome'
        },
        {
          title:'四川日报',
          href:'javascript:;'
        },
        {
          title:'遂宁新闻网',
          href:'http://www.snxw.com/'
        },
      ],

      newsList: {
        topNews: [],
        zgdtNews: [],
        rmdtNews: [],
        jcdjNews: [],
        gbgzNews: [],
        rcgzNews: [],
        gwyglNews: [],
        dygbjyNews: [],
        hsxfNews: [],
      },
      topNews:[],
      zgdtTopNews:[],

    }
  },
  mounted() {
    this.openload();
    setTimeout(()=>{
      this.closeload()
    },1000)
  },
  created() {
    //政府要闻-图片顶置
    this.querylist(7, 28,'top');
    this.querylist(7, 28);
    this.querylist(7, 29,'top');
    this.querylist(7, 29);

    this.querylist(7, 30);
    this.querylist(7, 31);
    this.querylist(7, 32);
    this.querylist(7, 33);
    this.querylist(7, 34);
    this.querylist(7, 35);
    this.querylist(7, 36);
  },
  methods: {
    toNewsList(pkNewsTypeId, pkNewsType) {
      let json = {
        modelId: '8',
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
        pkModelId: 8,
        pkNewsTypeId: pkNewsTypeId,
      };
      if(mark)json.showtop = 1;
      Axios.get(AjaxApi.querylist, json).then(res => {
        if (res.status === 200) {
          if (pkNewsTypeId === 28) {
            if(mark)this.topNews = res.data.body.datas;
            this.newsList.topNews = res.data.body.datas;
          }
          if (pkNewsTypeId === 29) {
            if(mark)this.zgdtTopNews = res.data.body.datas;
            this.newsList.zgdtNews = res.data.body.datas;
          }
          if (pkNewsTypeId === 30) this.newsList.rmdtNews = res.data.body.datas;
          if (pkNewsTypeId === 31) this.newsList.jcdjNews = res.data.body.datas;
          if (pkNewsTypeId === 32) this.newsList.gbgzNews = res.data.body.datas;
          if (pkNewsTypeId === 33) this.newsList.rcgzNews = res.data.body.datas;
          if (pkNewsTypeId === 34) this.newsList.gwyglNews = res.data.body.datas;
          if (pkNewsTypeId === 35) this.newsList.dygbjyNews = res.data.body.datas;
          if (pkNewsTypeId === 36) this.newsList.hsxfNews = res.data.body.datas;
        }
      })
    },
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
