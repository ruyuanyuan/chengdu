<template>
  <div class="header_templater">
    <div class="header_logo">
      <p class='header_name'>四川省大英经济开发区</p>
      <p class='header_en'>SICHUAN DAYING ECONOMIC DEVELOPMENT ZONE </p>
    </div>
    <div class='head_right'>
      <div class="header_seach">
        <el-input placeholder="请输入关键字" v-model="searchName" class="input-with-select">
          <el-button slot="append" icon="el-icon-search" @click="onSearch">搜索</el-button>
        </el-input>
      </div>
      <div class="WeatHer_potal">
        <div class='potal_item' v-for="item in potalList" :key='item.name'>
          <a :href="item.href" target="_blank">{{item.name}}</a>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        searchName: '',
        keywordList: ['化工', '汽车制造'],
        potalList: [
          {
            name: '遂宁新闻网',
            href: 'http://www.snxw.com/'
          },
          {
            name: '遂宁传媒网',
            href: 'http://www.sngdw.com/'
          }
        ]
      };
    },
    created() {
    },
    methods: {
      onSearch() {
        this.$router.push({name: 'seachList', query: {searchName: this.searchName}})
      }
    },
  };
</script>
<style lang="scss">
  .header_templater {
    width: 1250px;
    margin: 0 auto;
    padding: 20px 30px;
    overflow: hidden;

    .header_logo {
      float: left;

      .header_name {
        font-size: $font18;
        color: #333;
        line-height: 20px;
        font-weight: bold;
      }

      .header_en {
        font-size: $font14;
        color: #666;
        line-height: 20px;
        font-weight: bold;
      }
    }

    .head_right {
      float: right;
      overflow: hidden;

      .header_seach {
        float: left;

        .hold_word {
          font-size: $font14;
          color: #333;
          font-weight: bold;
          line-height: 30px;
        }

        .word_item {
          margin: 0 5px;
          font-weight: 400;
        }
      }
    }

    .WeatHer_potal {
      float: right;

      .potal_item {
        display: inline-block;
        height: 16px;
        font-size: $font14;
        line-height: 16px;
        padding: 0 20px;
        margin-top: 10px;
        border-left: 1px solid #666;

        &:first-child {
          border-left: 0;
        }

        &:last-child {
          padding-right: 0;
        }
      }
    }
  }
</style>
