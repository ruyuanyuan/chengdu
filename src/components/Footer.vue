<template>
  <div class='footer_template'>
    <div class='footer_content_box'>
      <div class='footer_content'>
        <div class='wx_img'>
          <!--            <img src="@/assets/img/wx.png" alt="">-->
        </div>
        <div class='footer_p_list'>
          <p class='footer_p_item'>
            <template v-for="item in resData">
              <template v-if="item.urlType===1">
                {{item.title.indexOf('网站标识码')>-1?item.title:item.title+'  |  '}}
              </template>
            </template>
          </p>
          <template v-for="item in resData">
            <template v-if="item.urlType===2">
              {{item.title}} &nbsp;&nbsp;
            </template>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Axios from '@/utils/axiosWrap'
  import AjaxApi from '@/service/ajaxApi'

  export default {
    data() {
      return {
        resData: null,
      }
    },
    mounted() {
      this.openload();
      setTimeout(() => {
        this.closeload()
      }, 1000)
    },
    created() {
      this.pkParkWebsiteNavigation();
    },
    methods: {
      pkParkWebsiteNavigation() {
        Axios.get(AjaxApi.pkParkWebsiteNavigation).then(res => {
          if (res.status === 200) {
            let resData = res.data.body;
            if (resData) this.resData = resData
          }
        })
      },
    }
  }
</script>
<style lang="scss">
  .footer_template {
    width: 100%;
    height: auto;
    margin-top: 20px;

    .footer_content_box {
      width: 100%;
      background-color: rgba(242, 242, 242, 1);
      padding: 20px 0;

      .footer_content {
        width: 1250px;
        margin: 0 auto;
        text-align: center;

        .wx_img {
          display: inline-block;
          height: 60px;
          position: relative;
          top: 12px;

          img {
            height: 60px;
          }
        }

        .footer_p_list {
          display: inline-block;
          line-height: 30px;
          margin-left: 10px;

          .footer_p_item {
            text-align: left;
          }
        }
      }
    }

  }
</style>
