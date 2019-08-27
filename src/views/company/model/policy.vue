<template>
  <div class='tap_policy_template'>
    <div class='policy_head'>
      <div class='newpolicy'>
        <div class='policy_new policy_lname'>猫够电****圳有限公司  </div>
        <div class='policy_new policy_time'>刚刚完成了智能检测 </div>
        <div class='policy_new policy_rname'>广东名****建设有限公司</div>
      </div>
      <div class='policy_number'>
        <div class='policy_number_item'>
          <div class='number'>1,873,241</div>
          <div class="title">次累计智能匹配</div>
        </div>
        <div class='policy_number_item'>
          <div class='number'>1,873,241</div>
          <div class="title">条本月新增政策</div>
        </div>
      </div>
      <div class='policy_form'>
        <div class='form_item'>
          <input type="text" placeholder="请输入公司名字">
        </div>
        <div class='form_item'>
          <input type="text" placeholder="输入手机号码">
        </div>
        <div class='form_item'>
          <input type="text" class='seedinput' placeholder="验证码">
          <div class='seedkey'>
            发送验证码
          </div>
        </div>
        <div class='form_item'>
          <button>查看可申报政策</button>
        </div>
      </div>
    </div>
    <div class='policy_content'>
        <div class='policy_card'>
          <div class='policy_card_head'>{{policyList.personnel.title}}</div>
          <div class='policy_card_content'>
            <div class='policy_card_item' v-for='(item,index) in policyList.personnel.newslist' :key='index'>
              <div class='policy_card_item_title'>{{item.title}}</div>
              <div class='policy_card_item_content'>{{item.doc}}</div>
              <div class='policy_card_item_tags'>
                <div class='item_tag' v-for='tag in item.tags' :key='tag'>{{tag}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class='policy_card'>
          <div class='policy_card_head'>{{policyList.policy.title}}</div>
          <div class='policy_card_content'>
            <div class='policy_card_item' v-for='(item,index) in policyList.policy.newslist' :key='index'>
              <div class='policy_card_item_title'>{{item.title}}</div>
              <div class='policy_card_item_content'>{{item.doc}}</div>
              <div class='policy_card_item_tags'>
                <div class='item_tag' v-for='tag in item.tags' :key='tag'>{{tag}}</div>
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
      policyList:{
        personnel:{
          title:'人才引进政策',
          newslist:[
            {
              title:'大英县软件和集成电路企业核心团队专项奖励',
              doc:'【基本条件】 （一）符合《关于软件和集成电路产业企业所得税优惠政策有关问题的通知》(财税〔2016〕49号，以下简称49号文)第四条标准、以软件...',
              tags:['人才扶持','资质扶持']
            },
            {
              title:'大英县软件和集成电路企业核心团队专项奖励',
              doc:'【基本条件】 （一）符合《关于软件和集成电路产业企业所得税优惠政策有关问题的通知》(财税〔2016〕49号，以下简称49号文)第四条标准、以软件...',
              tags:['人才扶持','资质扶持']
            }
          ]
        },
        policy:{
          title:'企业扶持政策',
          newslist:[
            {
              title:'大英县软件和集成电路企业核心团队专项奖励',
              doc:'【基本条件】 （一）符合《关于软件和集成电路产业企业所得税优惠政策有关问题的通知》(财税〔2016〕49号，以下简称49号文)第四条标准、以软件...',
              tags:['人才扶持','资质扶持']
            },
            {
              title:'大英县软件和集成电路企业核心团队专项奖励',
              doc:'【基本条件】 （一）符合《关于软件和集成电路产业企业所得税优惠政策有关问题的通知》(财税〔2016〕49号，以下简称49号文)第四条标准、以软件...',
              tags:['人才扶持','资质扶持']
            }
          ]
        }
      }
    }
  }
}
</script>
<style lang="scss">
  .tap_policy_template{
    width:100%;
    .policy_head{
      width:100%;
      background:$mainColor;
      padding:20px 80px;
      .newpolicy{
        width:100%;
        border-radius: 40px;
        background:rgba(176, 0, 0, 1);
        font-size: 16px;
        color: #FFFFFF;
        font-weight: bold;
        overflow: hidden;
        .policy_new{
          width:33.33%;
          text-align: center;
          line-height: 40px;
          float: left;
        }
      }
      .policy_number{
        width:100%;
        overflow: hidden;
        .policy_number_item{
          width:50%;
          float: left;
          text-align: center;
          padding:20px;
          .number{
            display: inline-block;
            font-size:40px;
            color:#fff;
            font-weight: bold;
          }
          .title{
            display: inline-block;
            font-size:$font16;
            color: rgba(255,255,255,0.8);
            font-weight: bold;
            margin-left:5px;
          }
        }
      }
      .policy_form{
        width:100%;
        overflow: hidden;
        .form_item{
          float: left;
          width:25%;
          position: relative;
          .seedkey{
            width:100px;
            height:40px;
            text-align: center;
            line-height: 40px;
            border-radius: 20px;
            background:#fff;
            font-size:$font14;
            position: absolute;
            right:20%;
            top:0;
            border:1px solid #ddd;
            cursor: pointer;
          }
          input{
            display: inline-block;
            width:80%;
            height:40px;
            border-radius:20px;
            padding:5px 20px;
            border:0;
            outline: none;
            &.seedinput{
              padding-right:100px;
            }
          }
          button{
            display: inline-block;
            width:80%;
            height:40px;
            border-radius:20px;
            padding:5px 20px;
            border:0;
            outline: none;
            background:#fff;
          }
        }
      }
    }
    .policy_content{
      background:rgba(242, 242, 242, 0.568627450980392);
      width:100%;
      .policy_card{
        width:100%;
        padding:20px 80px;
        background:rgba(242, 242, 242, 0.568627450980392);
        .policy_card_head{
          line-height:40px;
          font-size:$font16;
          color:#333;
          font-weight: bold;
          position: relative;
          &::before{
            content: '';
            width:4px;
            height:20px;
            background:$mainColor;
            position: absolute;
            border-radius:2px;
            left:-15px;
            top:10px;
          }
        }
        .policy_card_content{
          width:100%;
          .policy_card_item{
            width:100%;
            padding-bottom:20px;
            border-bottom:1px solid #ddd;
            .policy_card_item_title{
              font-size:$font14;
              font-weight: bold;
              line-height: 30px;
            }
            .policy_card_item_content{
              width:100%;
              line-height: 30px;
              overflow: hidden;
              text-overflow:ellipsis;
              white-space: nowrap;
            }
            .policy_card_item_tags{
              width:100%;
              .item_tag{
                display: inline-block;
                padding:5px 15px;
                border-radius:15px;
                background:rgba(228, 228, 228, 1);
                color:#333;
                font-weight: bold;
                margin-right:10px;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }
</style>