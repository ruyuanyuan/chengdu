<template>
  <div class='seach_list_template'>
    <div class='seach_list_head'>
      <div class='page_postion'>
        当前位置：首页 > 搜索结果 > 园区要闻
      </div>
      <div class="search-box1">
        <input v-model="seachName" id="searchLabel" type="text"> 
        <div class="search-btn" @click='searchResult'><img src="http://scyqcloud.amazingday.cn/parkPro/page/img/searchInfo.png"></div>
      </div>
    </div>
    <div id="hasdata" class="search-result">
      <div class="news-content">
        <ul class="news-list">
          <li v-for='(item,index) in searchData' :key='index'>
            <a :href="item.herf" target="_blank">{{item.title}}</a>
            <span>{{item.date}}</span>
          </li>
        </ul>
      </div>
      <div class='pagination'>
        <el-pagination
          background
          @current-change="handleCurrentChange"
          :current-page.sync="pageJson.pageIndex"
          :page-size="pageJson.pageSize"
          layout="total, prev, pager, next"
          :total="pageJson.total">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      seachName:'',
      pageJson: {
          pageIndex: 1,
          pageSize: 10,
          total: 100
      },
      searchData:[
        {
          herf:'http://scyqcloud.amazingday.cn/parkPro/page/newsDetails.html?id=747',
          title:'【成都】上半年成都高新技术产业营收增长14.3%',
          date:'2019-08-21'
        },
        {
          herf:'http://scyqcloud.amazingday.cn/parkPro/page/newsDetails.html?id=747',
          title:'【成都】上半年成都高新技术产业营收增长14.3%',
          date:'2019-08-21'
        },
        {
          herf:'http://scyqcloud.amazingday.cn/parkPro/page/newsDetails.html?id=747',
          title:'【成都】上半年成都高新技术产业营收增长14.3%',
          date:'2019-08-21'
        }
      ]
    }
  },
  methods:{
    searchResult(){

    },
    handleCurrentChange(){

    }
  }
}
</script>
<style lang="scss">
  .seach_list_template{
    background:#f5f5f5;
    .seach_list_head{
      width:100%;
      background:#fff;
      padding-bottom:20px;
      .page_postion{
        width: 1200px;
        margin: 0 auto;
        padding: 40px 0 20px 0;
        margin-bottom: 0 ;
        font-size: 16px;
        background: #fff;
      }
      .search-box1{
        width: 1200px;
        height: 65px;
        margin: 0 auto;
        border-radius: 2px;
        border: 1px solid rgba(62,65,80,0.3);
        margin-bottom: 20px;
        display: flex;
        #searchLabel{
          width: 1116px;
          border: none;
          outline: none;
          height: 63px;
          text-indent: 20px;
          font-size: 16px;
        }
        .search-btn{
          background: #2259D8;
          width: 84px;
          height: 65px;
          margin-top: -1px;
          text-align: center;
          line-height: 85px;
          cursor: pointer;
          .img{
            width: 31px;
            vertical-align: middle;
          }
        }
      }
    }
    .search-result{
      width: 1200px;
      margin: 24px auto;
       .news-content{
          .news-list{
            background: #fff;
            padding: 24px 40px 0;
            li{
              display: flex;
              line-height: 48px;
              position: relative;
              padding-left: 14px;
              border-bottom: 1px solid rgba(62,65,80,0.15);
              a{
                width: 100px;
                flex-grow: 1;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                color: #3E4150;
                padding-right: 1px;
                font-size: $font14;
                &::before{
                  content: '';
                  display: inline-block;
                  width: 6px;
                  height: 6px;
                  border-radius: 50%;
                  background: #3E4150;
                  position: absolute;
                  top: 50%;
                  left: 0;
                  transform: translateY(-50%);
                }
              }
            }
            span{
              width: 82px;
              text-align: right;
              font-size:$font14
            }
          }
        }
    } 
  }
</style>