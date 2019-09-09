<template>
  <div class='newdetails_template'>
    <!--    <div class='content_item'>-->
    <!--        <div class='pad_card dep_pad'>-->
    <!--          <div class='pad_card_title'>-->
    <!--            <span class='pad_name'>部门</span>-->
    <!--          </div>-->
    <!--          <div class='pad_card_content'>-->
    <!--            <div class='dep_item' v-for="(item,index) in departmentList" :key='index'>-->
    <!--              <a :href="item.href">-->
    <!--                 <i class='el-icon-arrow-right'></i>{{item.name}}-->
    <!--              </a>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--    </div>-->
    <div class='content_item' v-if="deptList" v-for="(dept,index) in deptList" :key="index">

      <div class='pad_card dep_pad'>
        <div class='pad_card_title'>
          <span class='pad_name'>{{index}}</span>
        </div>
        <div class='pad_card_content'>
          <div class='dep_item' v-for="(item,index) in dept" :key='index'>
            <a @click="handleDetail(item.id)">
              <i class='el-icon-arrow-right'></i>{{item.name}}
            </a>
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
    data() {
      return {
        deptList: [],
        departmentList: [
          {
            name: '两委办公室',
            href: 'javascript:;'
          },
          {
            name: '纪工委、监察工委',
            href: 'javascript:;'
          },
          {
            name: '党群工作部',
            href: 'javascript:;'
          },
          {
            name: '政法委应急局',
            href: 'javascript:;'
          },
          {
            name: '市人大高新工委',
            href: 'javascript:;'
          },
          {
            name: '市政协高新工委',
            href: 'javascript:;'
          },
          {
            name: '法院',
            href: 'javascript:;'
          },
          {
            name: '检察院',
            href: 'javascript:;'
          },
          {
            name: '发展规划局',
            href: 'javascript:;'
          },
          {
            name: '两委办公室',
            href: 'javascript:;'
          },
          {
            name: '纪工委、监察工委',
            href: 'javascript:;'
          },
          {
            name: '党群工作部',
            href: 'javascript:;'
          },
          {
            name: '政法委应急局',
            href: 'javascript:;'
          },
          {
            name: '市人大高新工委',
            href: 'javascript:;'
          },
          {
            name: '市政协高新工委',
            href: 'javascript:;'
          },
          {
            name: '法院',
            href: 'javascript:;'
          },
          {
            name: '检察院',
            href: 'javascript:;'
          },
          {
            name: '发展规划局',
            href: 'javascript:;'
          },
        ]
      }
    },
    created() {
      this.getPkParkWebsiteManagementDept();
    },
    methods: {
      handleDetail(id) {
        let json = {
          id: id,
          // dept: this.deptList,
        };
        this.$router.push({name: 'departmentDetails', query: json});
      },
      getPkParkWebsiteManagementDept() {
        Axios.get(AjaxApi.getPkParkWebsiteManagementDept, {pkId: 238}).then(res => {
          if (res.status === 200) {
            // this.deptList = res.data.body.datas;
            let resData = res.data.body.datas;

            let keyContainer = {};
            resData.forEach(element => {
              keyContainer[element.levelName] = keyContainer[element.levelName] || [];
              keyContainer[element.levelName].push(element);
            });
            console.info(keyContainer);
            this.deptList = keyContainer;
            console.log(this.deptList)
          }
        })
      }
    },
  }
</script>
<style lang="scss" scoped>
  .newdetails_template {
    .newdetails_heade {
      width: 100%;
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #ddd;
      font-size: $font14;
    }

    .dep_pad {
      .pad_card_title {
        background-color: #fafafa;
      }

      .pad_card_content {
        padding: 20px;
        padding-right: 5px;

        .dep_item {
          width: 25%;
          float: left;
          height: 40px;
          line-height: 40px;
          margin-bottom: 20px;

          a {
            display: block;
            margin-right: 15px;
            font-size: 14px;
            border: 1px solid #eee;
            color: #333;
            padding-left: 20px;

            i {
              margin-right: 10px;
            }

            &:hover {
              color: $mainHColor;
              background: $mainHOPColor;
              border: 1px solid $mainHOPColor;
            }
          }
        }
      }
    }
  }
</style>
