<template>
  <div class='newdetails_template'>
    <div class='content_item'>
      <div class='newdetails_heade'>
        {{modelId==='8'?'当前位置： 网站首页 > 党群党建':'当前位置： 网站首页 > 新闻中心'}}
      </div>
      <div class='new_list'>
        <div class='new_list_nav'>
          <div class='new_nav_item' :class='shownewsType===item.id?"is_active":""' v-for="item in listNav"
               :key='item.id' @click='changNewType(item.id,item.name)'>
            <i class='el-icon-arrow-right'></i>{{item.name}}
          </div>
        </div>
        <div class='new_list_content'>
          <div class='new_list_seach'>
            <div class='new_type_name'>{{showName}}</div>
            <div class='new_seach'>
              <el-input placeholder="请输入关键字" v-model="seachName" class="input-with-select">
                <el-button slot="append" @click="OnSearch">查询</el-button>
              </el-input>
            </div>
          </div>
          <div class='newlists_content'>
            <div class='news_item' v-for='item in newsData' :key='item.title'>
              <a target="_blank" rel="noopener noreferrer" @click="getDetail(item)">
                <h3>{{item.title}}</h3>
                <p>日期：{{dateFormat_YMD(item.newsDate)}}</p>
              </a>
            </div>
            <div class='pagination'>
              <el-pagination
                background
                @current-change="handleCurrentChange"
                :current-page.sync="pageIndex"
                :page-size="pageSize"
                layout="total, prev, pager, next"
                :total="total">
              </el-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Axios from '@/utils/axiosWrap'
  import DateFormat from '@/utils/momentWrap'
  import AjaxApi from '@/service/ajaxApi'

  export default {
    props: {
      modelId: String,
      pkNewsTypeId: String,
      pkNewsType: String,
    },
    data() {
      return {
        listNav: [],
        shownewsType: '',
        showName: '',
        seachName: '',
        newsData: [],
        setPkNewsTypeId: null,
        pageIndex: 1,
        pageSize: 6,
        total: null,
      }
    },
    computed: {
      pkNewsTypeIdShow() {
        if (this.setPkNewsTypeId) return this.setPkNewsTypeId;
        return Number(this.pkNewsTypeId)
      },
    },
    mounted() {
    },
    created() {
      this.shownewsType = this.pkNewsTypeIdShow;
      this.showName = this.pkNewsType;
      this.getPkParkWebsiteNewsTypeList();
    },
    methods: {
      OnSearch() {
        this.querylist();
      },
      getDetail(item) {
        let json = {
          id: item.id,
          mark: item.pkNewsTypeId,
          modelId: this.modelId,
        };
        this.$router.push({name: 'newDetails', query: json})
      },
      dateFormat_YMD(val) {
        return DateFormat.dateFormat_YMD(val)
      },
      changNewType(type, name) {
        this.pageIndex = 1;
        this.shownewsType = type;
        this.showName = name;
        this.setPkNewsTypeId = type;
        this.querylist();
      },
      getPkParkWebsiteNewsTypeList() {
        this.openload();
        Axios.get(AjaxApi.getPkParkWebsiteNewsTypeList + '/' + this.modelId).then(res => {
          if (res.status === 200) {
            let resData = res.data.body;
            this.listNav = resData;
            this.querylist();
          }
        })
      },
      querylist() {
        let json = {
          size: this.pageSize,
          page:this.pageIndex,
          pkModelId: this.modelId,
          pkNewsTypeId: this.pkNewsTypeIdShow,
        };
        if (this.seachName) json.title = this.seachName;
        Axios.get(AjaxApi.querylist, json).then(res => {
          if (res.status === 200) {
            let resData = res.data.body;
            this.newsData = resData.datas;
            this.pageIndex = resData.current;
            this.total = resData.total;
            this.closeload()
          }
        })
      },
      //跳转至第几页
      handleCurrentChange(val) {
        this.pageIndex = val;
        this.querylist();
      },
    },
  }
</script>
<style lang="scss">
  .newdetails_template {
    .newdetails_heade {
      width: 100%;
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #ddd;
      font-size: $font14;
    }

    .new_list {
      width: 100%;
      padding-top: 20px;
      overflow: hidden;

      .new_list_nav {
        width: 20%;
        padding: 0 10px;
        background: #fafafa;
        float: left;

        .new_nav_item {
          width: 100%;
          padding: 0 10px;
          height: 48px;
          line-height: 48px;
          font-size: 16px;
          color: #333;
          background: $mainOPColor;
          border: 1px solid $mainHOPColor;
          margin-bottom: 10px;
          cursor: pointer;

          i {
            margin-right: 10px;
          }

          &.is_active {
            background: $mainColor;
            color: #fff;
            font-weight: bold;
          }
        }
      }

      .new_list_content {
        width: 80%;
        padding: 0 10px;
        float: right;

        .new_list_seach {
          width: 100%;
          background: #eee;
          padding: 8px 20px;
          overflow: hidden;

          .new_type_name {
            float: left;
            font-size: 20px;
            font-weight: bold;
            color: #333;
            line-height: 40px;
          }

          .new_seach {
            float: right;
            width: 300px;
          }
        }

        .news_item {
          margin-top: 20px;
          border-bottom: dotted 1px #ddd;
          padding-bottom: 20px;
        }
      }

    }
  }
</style>
