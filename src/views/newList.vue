<template>
  <div class='newdetails_template'>
    <div class='content_item'>
        <div class='newdetails_heade'>
          当前位置： 网站首页 > 新闻中心 > 高新要闻
        </div>
        <div class='new_list'>
          <div class='new_list_nav'>
            <div class='new_nav_item' :class='shownewsType===item.new_type?"is_active":""' v-for="item in listNav" :key='item.new_type' @click='changNewType(item.new_type,item.name)'>
              <i class='el-icon-arrow-right'></i>{{item.name}}
            </div>
          </div>
          <div class='new_list_content'>
            <div class='new_list_seach'>
              <div class='new_type_name'>{{showName}}</div>
              <div class='new_seach'>
                  <el-input placeholder="请输入关键字" v-model="seachName" class="input-with-select">
                    <el-button slot="append" >查询</el-button>
                  </el-input>
              </div>
            </div>
            <div class='newlists_content'>
              <div class='news_item' v-for='item in newsData' :key='item.title'>
                <a :href="item.href">
                  <h3>{{item.title}}</h3>
                  <p>日期：{{item.date}}</p>
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
  data(){
    return {
      listNav:[
        {
          new_type:1,
          name:'高新要闻'
        },
        {
          new_type:2,
          name:'媒体报道'
        },
        {
          new_type:3,
          name:'视频新闻'
        },
        {
          new_type:4,
          name:'图片新闻'
        },
        {
          new_type:5,
          name:'成都高新电子报'
        },
        {
          new_type:6,
          name:'省市新闻'
        },
      ],
      shownewsType:1,
      showName:'高新要闻',
      seachName:'',
      newsDataJson:{
        1:[
          {
            title:'总投资近100亿 中软国际等软件产业总部项目落户成都高新区',
            date:'2019-08-27'
          },
          {
            title:'成都高新区公布生活垃圾考核评分细则',
            date:'2019-08-26'
          },
          {
            title:'中软国际等软件产业总部项目落户成都高新区',
            date:'2019-08-23'
          }
        ],
        2:[
          {
            title:'总投资近100亿 中软国际等软件产业总部项目落户成都高新区',
            date:'2019-08-27'
          },
          {
            title:'成都高新区公布生活垃圾考核评分细则',
            date:'2019-08-26'
          },
          {
            title:'中软国际等软件产业总部项目落户成都高新区',
            date:'2019-08-23'
          }
        ],
       3:[
          {
            title:'总投资近100亿 中软国际等软件产业总部项目落户成都高新区',
            date:'2019-08-27'
          },
          {
            title:'成都高新区公布生活垃圾考核评分细则',
            date:'2019-08-26'
          },
          {
            title:'中软国际等软件产业总部项目落户成都高新区',
            date:'2019-08-23'
          }
        ],
        4:[
          {
            title:'总投资近100亿 中软国际等软件产业总部项目落户成都高新区',
            date:'2019-08-27'
          },
          {
            title:'成都高新区公布生活垃圾考核评分细则',
            date:'2019-08-26'
          },
          {
            title:'中软国际等软件产业总部项目落户成都高新区',
            date:'2019-08-23'
          }
        ],
        5:[
          {
            title:'总投资近100亿 中软国际等软件产业总部项目落户成都高新区',
            date:'2019-08-27'
          },
          {
            title:'成都高新区公布生活垃圾考核评分细则',
            date:'2019-08-26'
          },
          {
            title:'中软国际等软件产业总部项目落户成都高新区',
            date:'2019-08-23'
          }
        ],
        6:[
          {
            title:'总投资近100亿 中软国际等软件产业总部项目落户成都高新区',
            date:'2019-08-27'
          },
          {
            title:'成都高新区公布生活垃圾考核评分细则',
            date:'2019-08-26'
          },
          {
            title:'中软国际等软件产业总部项目落户成都高新区',
            date:'2019-08-23'
          }
        ]
      },
      newsData: []
    }
  },
  created() {
    this.newsData=this.newsDataJson[1]
  },
  methods: {
    changNewType(type,name){
      this.shownewsType=type
      this.showName=name
      this.newsData=this.newsDataJson[type]
    }
  },
}
</script>
<style lang="scss">
  .newdetails_template{
    .newdetails_heade{
      width:100%;
      height: 40px;
      line-height:40px;
      border-bottom:1px solid #ddd;
      font-size: 14px;
    }
    .new_list{
      width:100%;
      padding-top:20px;
      overflow: hidden;
      .new_list_nav{
        width: 20%;
        padding: 0 10px;
        background: #fafafa;
        float: left;
        .new_nav_item{
          width:100%;
          padding:0 10px;
          height:48px;
          line-height: 48px;
          font-size: 16px;
          color:#333;
          background:$mainOPColor;
          border:1px solid $mainHOPColor;
          margin-bottom:10px;
          cursor: pointer;
          i{
            margin-right:10px;
          }
          &.is_active{
            background:$mainColor;
            color:#fff;
            font-weight: bold;
          }
        }
      }
      .new_list_content{
        width: 80%;
        padding: 0 10px;
        float: right;
        .new_list_seach{
          width:100%;
          background: #eee;
          padding: 8px 20px;
          overflow: hidden;
          .new_type_name{
            float: left;
            font-size: 20px;
            font-weight: bold;
            color:#333;
            line-height: 40px;
          }
          .new_seach{
            float: right;
            width:300px;
          }
        }
        .news_item{
          margin-top: 20px;
          border-bottom: dotted 1px #ddd;
          padding-bottom:20px;
        }
      }
     
    }
  }
</style>