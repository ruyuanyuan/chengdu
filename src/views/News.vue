<template>
  <div class='new_template'>
    <div class='hold_box'>
      <div class='tody_hold'>
        <div class='tody_item tody_title'>
          <img src="@/assets/img/laba.png" alt="">
          今日关注
          </div>
         <div class='tody_item tody_date'>
           <p>农历七月初七</p>
           <p>2019年8月7日 星期三</p>
           </div>
      </div>
      <div class='hold_new'>
        <div class='hold_title'>{{holdNew.title}}</div>
        <div class='hold_doc'>{{holdNew.doc}}</div>
      </div>
    </div>
    <div class='focus_news'>
      <div class='focus_news_img'>
        <img src="@/assets/img/dome.jpg" alt="">
      </div>
      <div class='focus_news_tab'>
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
          <el-tab-pane label="乡镇动态" name="townshipNews">
            <div class='news_item' v-for="(item,index) in newsList.townshipNews" :key='index'>
              <a class='news_href' :href="item.url" target="_blank" rel="noopener noreferrer"><div class='new_title'>{{item.title}}</div>
              <div class='new_date'>{{item.date}}</div></a>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div class='news_block'>
      <div class='card_block daying_block'>
        <div class='card_header'>
          <div class='card_name'>大英电子报</div>
          <a href="http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml" target="_blank" rel="noopener noreferrer"><div class='card_more'>更多</div></a>
        </div>
        <div class='card_content'>
            <div class='news_cont'>
              <div class='news_cont_img'>
                <img src="@/assets/img/dome.jpg" alt="">
              </div>
              <div class='news_cont_list'>
                <div class='news_item' v-for="(item,index) in newsList.departmentNews" :key='index'>
                  <a class='news_href' :href="item.url" target="_blank" rel="noopener noreferrer"><div class='new_title'>{{item.title}}</div>
                  <div class='new_date'>{{item.date}}</div></a>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div class='card_block policy_block'>
        <div class='card_header'>
          <div class='card_name'>政策文件</div>
          <a href="http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml" target="_blank" rel="noopener noreferrer"><div class='card_more'>更多</div></a>
        </div>
        <div class='card_content'>
            <div class='policy_img'>
              <img src="@/assets/img/policy.png" alt="">
            </div>
        </div>
      </div>
    </div>
    <div class='news_tv'>
      <div class='card_block'>
        <div class='card_header'>
          <div class='card_name'>大英电视台</div>
          <a href="http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml" target="_blank" rel="noopener noreferrer"><div class='card_more'>更多</div></a>
        </div>
        <div class='card_content'>
            <div class='tv_contnet'>
              <div class='tv_main_img'>
                <a :href="tvDataList.mainTv.img_href">
                  <img :src="tvDataList.mainTv.img_url" alt="">
                </a>
              </div>
              <div class='tv_img_item_list'>
                <div class='tv_img_item' v-for="(item,index) in tvDataList.tvlist" :key='index'>
                  <a :href="item.img_href">
                     <img :src="item.img_url" alt="">
                  </a>
                </div>
              </div>
            </div>
        </div>
      </div> 
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      holdNew:{
        title:'大英县代表遂宁市参加2019年四川省青少年射击锦标赛 获男子10米气手枪个人、团体金牌',
        doc:'7月31日，2019年四川省青少年射击锦标赛在四川省陆上运动学校开赛。来自成都、遂宁、巴中等四川省十五个市州的450名10 - 19岁青少年选手参赛 ， 比赛分为男女50米步枪 、10米气步枪、飞碟多项等44个项目。本次比赛大英县代表遂宁市参加比赛，在男子10米气手枪比赛中，杨术强获得个人金牌...'
      },
      newsActive:'focusNews',
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
        ],
        townshipNews:[
          {
            title:'大英县召开落实“两纲”全面达标攻坚推进会暨“两纲大英县召开落实“两纲”全面达标攻坚推进会暨“两纲',
            date:'2019-08-07',
            url:'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml'
          },
          {
            title:'大英县召开落实“两纲”全面达标攻坚推进会暨“两纲大英县召开推进会暨“两纲大英县召开落实“两纲”全面达标攻坚推进会暨“两纲',
            date:'2019-08-01',
            url:'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml'
          },
          {
            title:'大英县召开落推进会暨两纲',
            date:'2019-08-04',
            url:'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml'
          }
        ]
      },
      tvDataList:{
        mainTv:{
          img_url:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1461836175,2413247160&fm=26&gp=0.jpg',
          img_href:'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml'
        },
        tvlist:[
          {
            img_url:'http://s2.sinaimg.cn/bmiddle/61d8244fzx6CYBs56I9c1&690',
            img_href:'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml'
          },
          {
            img_url:'http://s2.sinaimg.cn/bmiddle/61d8244fzx6CYBs56I9c1&690',
            img_href:'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml'
          },
          {
            img_url:'http://s2.sinaimg.cn/bmiddle/61d8244fzx6CYBs56I9c1&690',
            img_href:'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml'
          },
          {
            img_url:'http://s2.sinaimg.cn/bmiddle/61d8244fzx6CYBs56I9c1&690',
            img_href:'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml'
          },
          {
            img_url:'http://s2.sinaimg.cn/bmiddle/61d8244fzx6CYBs56I9c1&690',
            img_href:'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml'
          },
          {
            img_url:'http://s2.sinaimg.cn/bmiddle/61d8244fzx6CYBs56I9c1&690',
            img_href:'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml'
          }
        ]
      }
    }
  },
  methods:{
    
  }
}
</script>
<style lang="scss">
  .new_template{
    width:100%;
    padding:0 30px;
    margin-top:20px;
    .hold_box{
      width:1250px;
      margin:0 auto;
      overflow: hidden;
      .tody_hold{
        height:100px;
        width:200px;
        float: left;
        .tody_item{
          height:50px;
          width:100%;
          background-color:rgba(241, 241, 241, 1);
          text-align: center;
          line-height: 20px;
          padding:4px 0;
          font-size:12px;
          &.tody_title{
            background-color:$mainColor;
            line-height: 42px;
            color:#fff;
            font-weight: bold;
            font-size:14px;
            img{
              width: 18px;
              height: 18px;
              vertical-align: middle;
              margin-right:10px;
            }
          }
        }
      }
      .hold_new{
        float: right;
        margin-left:10px;
        width:1040px;
        padding-top:5px;
        .hold_title{
          font-size: 24px;
          font-weight: bold;
          color:#333;
        }
        .hold_doc{
          margin-top:10px;
          font-size:14px;
          line-height: 24px;
        }
      }
    }
    .focus_news{
      width:1250px;
      margin:20px auto 0;
      overflow: hidden;
      .focus_news_img{
        float: left;
        width:524px;
        height:326px;
        img{
          width:100%;
          height:100%;
        }
      }
     
      .focus_news_tab{
        float: right;
        width:700px;
      }
    }
    .news_block{
      width:1250px;
      margin:20px auto 0;
      height:auto;
      overflow: hidden;
      .daying_block{
        float: left;
        width:700px;
        .news_cont{
          padding-top:10px;
          .news_cont_img{
            float: left;
            height:210px;
            width:300px;
            img{
              width:100%;
              height:210px;
            }
          }
          .news_cont_list{
            float: right;
            width:390px;
          }
        }
      }
      .policy_block{
        float: right;
        width:530px;
        .policy_img{
          height:210px;
          width:100%;
          padding-top:10px;
          text-align: center;
          line-height: 210px;
          img{
            height:170px;
          }
        }
      }
    }
    .news_tv{
      width:1250px;
      height:auto;
      overflow: hidden;
      margin:20px auto 0;
      .tv_contnet{
        width:100%;
        height:298px;
        padding-top:10px;
        .tv_main_img{
          width:470px;
          height: 100%;
          float: left;
          img{
            width:100%;
            height:100%;
          }
        }
        .tv_img_item_list{
          float: left;
          width:780px;
          height:292px;
          .tv_img_item{
            width:33.33%;
            height:50%;
            padding-left:4px;
            padding-bottom:4px;
            float: left;
            img{
              width:100%;
              height:100%;
            }
          }
        }
      }
    }
  }
</style>