<template>
  <div class='company_template'>
    <div class='company_head'>
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
    </div>
    <div class='tap_content' v-if='activeTap==="policy"'>
      <Policy></Policy>
    </div>
    <div class='tap_content' v-if='activeTap==="enterprise"'>
      <Enterprise></Enterprise>
    </div>
    <div class='tap_content' v-if='activeTap==="government"'>
      <Government></Government>
    </div>
    <div class='tap_content' v-if='activeTap==="policyNeed"'>
      <PolicyNeed></PolicyNeed>
    </div>
  </div>
</template>
<script>
import Policy from './model/policy'
import Enterprise from './model/enterprise'
import PolicyNeed from './model/policyNeed'
import Government from './model/government'
export default {
  components:{
    Policy,
    Enterprise,
    PolicyNeed,
    Government
  },
  data(){
    return {
      activeTap:'policy'
    }
  },
  methods:{
    selecedTab(name){
      this.activeTap=name
    }
  }
}
</script>
<style lang="scss">
  .company_template{
    width:1250px;
    margin:0 auto;
    background-color: rgba(249, 249, 249, 1);
    .company_head{
      width:100%;
      padding:20px;
      .w_tap{
        width:800px;
        margin:0 auto;
        overflow: hidden;
        .w_tap_item{
          width:200px;
          text-align: center;
          float: left;
          font-size: 18px;
          font-weight: bold;
          a{
            display:inline-block;
            padding:10px 20px;
          }
          &.is_active{
            a{
              background: $mainColor;
              color:#fff;
              
            }
          }
        }
      }
    }
  }
</style>