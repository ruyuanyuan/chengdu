<template>
  <div class='enterprise_template'>
    <div class='enterprise_head'>
      <a class='joinBtn' href="https://www.baidu.com">企业申请入驻</a>
    </div>
    <el-tabs tab-position="left" >
      <el-tab-pane v-for='(item,index) in listData' :key='index'>
        <div slot="label" class='tab_cont'><img :src="item.icon" alt="">{{item.title}}</div>
        <div class='policy_card' v-for='(card,index) in item.data' :key='index'>
          <div class='policy_card_name'>{{card.policyName}}</div>
          <div class='comment_phone'>
             <div class='policy_comment'>
                <div class='star'>
                  <div class='star_item' v-for='item in card.star' :key='item'>
                    <img src="http://114.116.31.126/daying/images/%E4%BC%81%E6%9C%8D%E9%80%9A/u580.png" alt="">
                  </div>
                </div>
                <div class='commentNumber'>{{card.commentNum}}条评论</div>
              </div>
              <div class='policy_phone'>
                <img src="http://114.116.31.126/daying/images/%E4%BC%81%E6%9C%8D%E9%80%9A/u585.png" alt="">
                {{card.iphone}}
              </div>
          </div>
          <div class='policy_main'><span class='label'>主营业务：</span>{{card.mainWork}}</div>
          <div class='policy_address'><span class='label'>详细地址</span>{{card.address}}</div>
        </div>
    
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data(){
    return {
      listData:[
        {
          icon:'http://114.116.31.126/daying/images/%E4%BC%81%E6%9C%8D%E9%80%9A/u1081.jpg',
          title:'银行',
          data:[
            {
              policyName:'上海地铁融资租赁有限公司',
              commentNum:13,
              star:4,
              mainWork:'--',
              address:'上海市徐汇区钦州路770号335室',
              iphone:'021-62785533'
            }
          ]
        },
        {
          icon:'http://114.116.31.126/daying/images/%E4%BC%81%E6%9C%8D%E9%80%9A/u1051.jpg',
          title:'小贷',
          data:[
            {
              policyName:'上海地铁融资租赁有限公司',
              commentNum:13,
              star:4,
              mainWork:'--',
              address:'上海市徐汇区钦州路770号335室',
              iphone:'021-62785533'
            }
          ]
        },
        {
          icon:'http://114.116.31.126/daying/images/%E4%BC%81%E6%9C%8D%E9%80%9A/u1054.jpg',
          title:'担保',
          data:[
            {
              policyName:'上海地铁融资租赁有限公司',
              commentNum:13,
              star:4,
              mainWork:'--',
              address:'上海市徐汇区钦州路770号335室',
              iphone:'021-62785533'
            },
             {
              policyName:'上海地铁融资租赁有限公司',
              commentNum:13,
              star:4,
              mainWork:'--',
              address:'上海市徐汇区钦州路770号335室',
              iphone:'021-62785533'
            }
          ]
        },
        {
          icon:'http://114.116.31.126/daying/images/%E4%BC%81%E6%9C%8D%E9%80%9A/u1084.jpg',
          title:'租赁',
          data:[
            {
              policyName:'上海地铁融资租赁有限公司',
              commentNum:13,
              star:4,
              mainWork:'--',
              address:'上海市徐汇区钦州路770号335室',
              iphone:'021-62785533'
            },
             {
              policyName:'上海地铁融资租赁有限公司',
              commentNum:13,
              star:4,
              mainWork:'--',
              address:'上海市徐汇区钦州路770号335室',
              iphone:'021-62785533'
            }
          ]
        },
        {
          icon:'http://114.116.31.126/daying/images/%E4%BC%81%E6%9C%8D%E9%80%9A/u1078.jpg',
          title:'私募股权投资',
          data:[
            {
              policyName:'上海地铁融资租赁有限公司',
              commentNum:13,
              star:4,
              mainWork:'--',
              address:'上海市徐汇区钦州路770号335室',
              iphone:'021-62785533'
            }
          ]
        },
        {
          icon:'http://114.116.31.126/daying/images/%E4%BC%81%E6%9C%8D%E9%80%9A/u1057.jpg',
          title:'风险投资',
          data:[
            {
              policyName:'上海地铁融资租赁有限公司',
              commentNum:13,
              star:4,
              mainWork:'--',
              address:'上海市徐汇区钦州路770号335室',
              iphone:'021-62785533'
            },
             {
              policyName:'上海地铁融资租赁有限公司',
              commentNum:13,
              star:4,
              mainWork:'--',
              address:'上海市徐汇区钦州路770号335室',
              iphone:'021-62785533'
            }
          ]
        },
        {
          icon:'http://114.116.31.126/daying/images/%E4%BC%81%E6%9C%8D%E9%80%9A/u1060.jpg',
          title:'审图',
          data:[
            {
              policyName:'上海地铁融资租赁有限公司',
              commentNum:13,
              star:4,
              mainWork:'--',
              address:'上海市徐汇区钦州路770号335室',
              iphone:'021-62785533'
            },
             {
              policyName:'上海地铁融资租赁有限公司',
              commentNum:13,
              star:4,
              mainWork:'--',
              address:'上海市徐汇区钦州路770号335室',
              iphone:'021-62785533'
            },
             {
              policyName:'上海地铁融资租赁有限公司',
              commentNum:13,
              star:4,
              mainWork:'--',
              address:'上海市徐汇区钦州路770号335室',
              iphone:'021-62785533'
            }
          ]
        }
      ]
    }
  },
  methods:{
  }
}
</script>
<style lang="scss">
  .enterprise_template{
    width:100%;
    .enterprise_head{
      width:100%;
      text-align: right;
      padding:20px 30px;
      margin-bottom:10px;
      background:#fff;
      .joinBtn{
        display: inline-block;
        padding: 5px 30px;
        background:$mainColor;
        color:#fff;
        font-weight: bold;
        font-size:16px;
        border-radius: 20px;
      }
    }
    .el-tabs--left .el-tabs__active-bar.is-left{
      width:4px;
    }
    .el-tabs__item{
      background:#fff;
      width:240px;
      height:auto;
      text-align: center;
      padding:20px 0;
      &.is-active{
        font-weight: bold;
      }
      .tab_cont{
        width:100%;
        text-align: left;
        padding-left:30px;
        font-size:16px;
      }
      img{
        width: 40px;
        vertical-align: middle;
        margin-right:20px;
      }
    }
    .el-tabs__content{
      padding-right:30px;
    }
    .policy_card{
      width:100%;
      padding:30px;
      background:#fff;
      margin-bottom:20px;
      .policy_card_name{
        font-size:20px;
        color:#333;
        font-weight: bold;
        line-height: 40px;
      }
      .comment_phone{
        width:100%;
        overflow: hidden;
        .policy_comment{
          float: left;
          .star{
            display:inline-block;
            .star_item{
              display: inline-block;
              margin-right:5px;
            }
          }
          .commentNumber{
             display:inline-block;
             font-size: 16px;
             margin-left:10px;
          }
        }
        .policy_phone{
          float: right;
          font-size:18px;
          color:#333;
          font-weight: bold;
          line-height: 30px;
          img{
            vertical-align: middle;
          }
        }
      }
      .policy_main{
        color:#333;
        font-size:14px;
        line-height: 30px;
        .label{
          color:#999;
        }
      }
      .policy_address{
        color:#333;
        font-size:14px;
        line-height: 30px;
        .label{
          color:#999;
        }
      }
    }
  }
</style>