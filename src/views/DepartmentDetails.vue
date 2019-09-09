<template>
  <div class='newdetails_template'>
    <div class='content_item'>
      <div class='newdetails_heade' v-if="mark==='leader'">
        当前位置： 网站首页 > 政府公开 > 领导之窗
      </div>
      <div class='newdetails_heade' v-else>
        当前位置： 网站首页 > 政府公开 > 机构职能
      </div>
      <div class='leader_level'>
        <div class='leader_level_item'
             v-for='(item,index) in leaderLevel'
             :key='index'
             :class='{"active":item.levelId===selectLevel}'
             @click='changeLevel(item.levelId)'>
          {{item.levelName}}
        </div>
      </div>
      <div class='leader_list'>
        <div class='leader_list_nav'>
          <ul>
            <li class='nav_item' :class='{"active":item.id===selectLeader}' v-for='(item,index) in getLevelData'
                :key='index' @click='changeLeadList(item.id)'>
              <i class='el-icon-arrow-right'></i>{{item.name}}
            </li>
          </ul>
        </div>
        <div class='leader_list_content' v-if="mark==='departmentDetails'">
          <p class='leader_name'>{{leaderList.name}} 机构职能</p>
          <div class='leader_item' v-if="leaderList" v-html="leaderList.detail">
          </div>
        </div>
        <div class='leader_list_content' v-else>
          <div class='leader_item' v-if="leaderList" v-for='(item,index) in leaderList' :key='index'>
            <a class='leader_item_content' href="javascript:;" @click="handleLeaderDetail(item.id)">
              <img class='leader_img' :src="item.photo" alt="">
              <p class='leader_name'>{{item.name}}</p>
              <p class='leader_postion'>{{item.job}}</p>
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
    props: ['mark'],
    data() {
      return {
        deptId: null,
        leaderLevel: [],
        selectLevel: null,
        selectLeader: null,
        // leveData: [],
        leaderList: [],
        // leaderJson: {
        //   level_1: [
        //     {
        //       dep_title: '高新区',
        //       id: 1,
        //       leader_list: [
        //         {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-03/21/5d398508a24a46c1b5b4ea73e5ed3a08/images/69430034c9c14ce89cbbc0e1e6e7bfe5.jpg',
        //           name: '冉光俊',
        //           postion: '成都高新区党工委管委会办公室主任'
        //         },
        //         {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/ec2bae80890f4efebfd0ce88ad2f482f/images/3cb1c331e7804504a08743ff6206ff33.png',
        //           name: '张建忠',
        //           postion: '成都高新区党工委管委会副巡视员'
        //         },
        //         {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/136286a68cb64b22a33485e9085dc22b/images/9b5762e9f8e14fcab28be1a1913d633a.jpg',
        //           name: '孙秀蓬',
        //           postion: '成都高新区党工委管委会办公室副主任'
        //         },
        //         {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-07/04/1ac0e49bc4414be28d6e5d1a04528fc8/images/4d40fbd1fc65432f953df276e002d9ba.jpg',
        //           name: '曾珏',
        //           postion: '成都高新区党工委管委会办公室纪检组长'
        //         }, {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/4867145b541e4c31bc5d657432de1fb7/images/dc0e6cd2fe584bd193c2d989065d73f6.jpg',
        //           name: '冯晓静',
        //           postion: '成都高新区党工委管委会办公室副主任'
        //         }
        //
        //       ]
        //     }
        //   ],
        //   level_2: [
        //     {
        //       dep_title: '两委办公室',
        //       id: 1,
        //       leader_list: [
        //         {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-03/21/5d398508a24a46c1b5b4ea73e5ed3a08/images/69430034c9c14ce89cbbc0e1e6e7bfe5.jpg',
        //           name: '冉光俊',
        //           postion: '成都高新区党工委管委会办公室主任'
        //         },
        //         {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/ec2bae80890f4efebfd0ce88ad2f482f/images/3cb1c331e7804504a08743ff6206ff33.png',
        //           name: '张建忠',
        //           postion: '成都高新区党工委管委会副巡视员'
        //         },
        //         {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/136286a68cb64b22a33485e9085dc22b/images/9b5762e9f8e14fcab28be1a1913d633a.jpg',
        //           name: '孙秀蓬',
        //           postion: '成都高新区党工委管委会办公室副主任'
        //         },
        //         {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-07/04/1ac0e49bc4414be28d6e5d1a04528fc8/images/4d40fbd1fc65432f953df276e002d9ba.jpg',
        //           name: '曾珏',
        //           postion: '成都高新区党工委管委会办公室纪检组长'
        //         }, {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/4867145b541e4c31bc5d657432de1fb7/images/dc0e6cd2fe584bd193c2d989065d73f6.jpg',
        //           name: '冯晓静',
        //           postion: '成都高新区党工委管委会办公室副主任'
        //         },
        //         {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/136286a68cb64b22a33485e9085dc22b/images/9b5762e9f8e14fcab28be1a1913d633a.jpg',
        //           name: '孙秀蓬',
        //           postion: '成都高新区党工委管委会办公室副主任'
        //         },
        //         {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-07/04/1ac0e49bc4414be28d6e5d1a04528fc8/images/4d40fbd1fc65432f953df276e002d9ba.jpg',
        //           name: '曾珏',
        //           postion: '成都高新区党工委管委会办公室纪检组长'
        //         }, {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/4867145b541e4c31bc5d657432de1fb7/images/dc0e6cd2fe584bd193c2d989065d73f6.jpg',
        //           name: '冯晓静',
        //           postion: '成都高新区党工委管委会办公室副主任'
        //         }
        //
        //
        //       ]
        //     },
        //     {
        //       dep_title: '纪工委、监察工委',
        //       id: 2,
        //       leader_list: [
        //         {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-03/21/5d398508a24a46c1b5b4ea73e5ed3a08/images/69430034c9c14ce89cbbc0e1e6e7bfe5.jpg',
        //           name: '冉光俊',
        //           postion: '成都高新区党工委管委会办公室主任'
        //         },
        //         {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/ec2bae80890f4efebfd0ce88ad2f482f/images/3cb1c331e7804504a08743ff6206ff33.png',
        //           name: '张建忠',
        //           postion: '成都高新区党工委管委会副巡视员'
        //         },
        //         {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/136286a68cb64b22a33485e9085dc22b/images/9b5762e9f8e14fcab28be1a1913d633a.jpg',
        //           name: '孙秀蓬',
        //           postion: '成都高新区党工委管委会办公室副主任'
        //         },
        //         {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-07/04/1ac0e49bc4414be28d6e5d1a04528fc8/images/4d40fbd1fc65432f953df276e002d9ba.jpg',
        //           name: '曾珏',
        //           postion: '成都高新区党工委管委会办公室纪检组长'
        //         }, {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/4867145b541e4c31bc5d657432de1fb7/images/dc0e6cd2fe584bd193c2d989065d73f6.jpg',
        //           name: '冯晓静',
        //           postion: '成都高新区党工委管委会办公室副主任'
        //         },
        //         {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/136286a68cb64b22a33485e9085dc22b/images/9b5762e9f8e14fcab28be1a1913d633a.jpg',
        //           name: '孙秀蓬',
        //           postion: '成都高新区党工委管委会办公室副主任'
        //         },
        //         {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-07/04/1ac0e49bc4414be28d6e5d1a04528fc8/images/4d40fbd1fc65432f953df276e002d9ba.jpg',
        //           name: '曾珏',
        //           postion: '成都高新区党工委管委会办公室纪检组长'
        //         }, {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/4867145b541e4c31bc5d657432de1fb7/images/dc0e6cd2fe584bd193c2d989065d73f6.jpg',
        //           name: '冯晓静',
        //           postion: '成都高新区党工委管委会办公室副主任'
        //         }
        //
        //
        //       ]
        //     },
        //     {
        //       dep_title: '党群工作部',
        //       id: 3,
        //       leader_list: [
        //         {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-03/21/5d398508a24a46c1b5b4ea73e5ed3a08/images/69430034c9c14ce89cbbc0e1e6e7bfe5.jpg',
        //           name: '冉光俊',
        //           postion: '成都高新区党工委管委会办公室主任'
        //         },
        //         {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/ec2bae80890f4efebfd0ce88ad2f482f/images/3cb1c331e7804504a08743ff6206ff33.png',
        //           name: '张建忠',
        //           postion: '成都高新区党工委管委会副巡视员'
        //         },
        //         {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/136286a68cb64b22a33485e9085dc22b/images/9b5762e9f8e14fcab28be1a1913d633a.jpg',
        //           name: '孙秀蓬',
        //           postion: '成都高新区党工委管委会办公室副主任'
        //         },
        //         {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-07/04/1ac0e49bc4414be28d6e5d1a04528fc8/images/4d40fbd1fc65432f953df276e002d9ba.jpg',
        //           name: '曾珏',
        //           postion: '成都高新区党工委管委会办公室纪检组长'
        //         }, {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/4867145b541e4c31bc5d657432de1fb7/images/dc0e6cd2fe584bd193c2d989065d73f6.jpg',
        //           name: '冯晓静',
        //           postion: '成都高新区党工委管委会办公室副主任'
        //         }
        //
        //
        //       ]
        //     },
        //     {
        //       dep_title: '政法委应急局',
        //       id: 4,
        //       leader_list: [
        //         {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-03/21/5d398508a24a46c1b5b4ea73e5ed3a08/images/69430034c9c14ce89cbbc0e1e6e7bfe5.jpg',
        //           name: '冉光俊',
        //           postion: '成都高新区党工委管委会办公室主任'
        //         },
        //         {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/ec2bae80890f4efebfd0ce88ad2f482f/images/3cb1c331e7804504a08743ff6206ff33.png',
        //           name: '张建忠',
        //           postion: '成都高新区党工委管委会副巡视员'
        //         },
        //         {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/136286a68cb64b22a33485e9085dc22b/images/9b5762e9f8e14fcab28be1a1913d633a.jpg',
        //           name: '孙秀蓬',
        //           postion: '成都高新区党工委管委会办公室副主任'
        //         },
        //         {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-07/04/1ac0e49bc4414be28d6e5d1a04528fc8/images/4d40fbd1fc65432f953df276e002d9ba.jpg',
        //           name: '曾珏',
        //           postion: '成都高新区党工委管委会办公室纪检组长'
        //         }, {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/4867145b541e4c31bc5d657432de1fb7/images/dc0e6cd2fe584bd193c2d989065d73f6.jpg',
        //           name: '冯晓静',
        //           postion: '成都高新区党工委管委会办公室副主任'
        //         },
        //         {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/136286a68cb64b22a33485e9085dc22b/images/9b5762e9f8e14fcab28be1a1913d633a.jpg',
        //           name: '孙秀蓬',
        //           postion: '成都高新区党工委管委会办公室副主任'
        //         },
        //         {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-07/04/1ac0e49bc4414be28d6e5d1a04528fc8/images/4d40fbd1fc65432f953df276e002d9ba.jpg',
        //           name: '曾珏',
        //           postion: '成都高新区党工委管委会办公室纪检组长'
        //         }, {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/4867145b541e4c31bc5d657432de1fb7/images/dc0e6cd2fe584bd193c2d989065d73f6.jpg',
        //           name: '冯晓静',
        //           postion: '成都高新区党工委管委会办公室副主任'
        //         }
        //
        //
        //       ]
        //     },
        //     {
        //       dep_title: '市人大高新工委',
        //       id: 5,
        //       leader_list: [
        //         {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-03/21/5d398508a24a46c1b5b4ea73e5ed3a08/images/69430034c9c14ce89cbbc0e1e6e7bfe5.jpg',
        //           name: '冉光俊',
        //           postion: '成都高新区党工委管委会办公室主任'
        //         },
        //
        //         {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-07/04/1ac0e49bc4414be28d6e5d1a04528fc8/images/4d40fbd1fc65432f953df276e002d9ba.jpg',
        //           name: '曾珏',
        //           postion: '成都高新区党工委管委会办公室纪检组长'
        //         }, {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/4867145b541e4c31bc5d657432de1fb7/images/dc0e6cd2fe584bd193c2d989065d73f6.jpg',
        //           name: '冯晓静',
        //           postion: '成都高新区党工委管委会办公室副主任'
        //         },
        //         {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/136286a68cb64b22a33485e9085dc22b/images/9b5762e9f8e14fcab28be1a1913d633a.jpg',
        //           name: '孙秀蓬',
        //           postion: '成都高新区党工委管委会办公室副主任'
        //         },
        //         {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-07/04/1ac0e49bc4414be28d6e5d1a04528fc8/images/4d40fbd1fc65432f953df276e002d9ba.jpg',
        //           name: '曾珏',
        //           postion: '成都高新区党工委管委会办公室纪检组长'
        //         }, {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/4867145b541e4c31bc5d657432de1fb7/images/dc0e6cd2fe584bd193c2d989065d73f6.jpg',
        //           name: '冯晓静',
        //           postion: '成都高新区党工委管委会办公室副主任'
        //         }
        //
        //
        //       ]
        //     },
        //   ],
        //   level_3: [
        //     {
        //       dep_title: '两委办公室',
        //       id: 1,
        //       leader_list: [
        //         {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-03/21/5d398508a24a46c1b5b4ea73e5ed3a08/images/69430034c9c14ce89cbbc0e1e6e7bfe5.jpg',
        //           name: '冉光俊',
        //           postion: '成都高新区党工委管委会办公室主任'
        //         },
        //         {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/ec2bae80890f4efebfd0ce88ad2f482f/images/3cb1c331e7804504a08743ff6206ff33.png',
        //           name: '张建忠',
        //           postion: '成都高新区党工委管委会副巡视员'
        //         },
        //         {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/136286a68cb64b22a33485e9085dc22b/images/9b5762e9f8e14fcab28be1a1913d633a.jpg',
        //           name: '孙秀蓬',
        //           postion: '成都高新区党工委管委会办公室副主任'
        //         },
        //         {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-07/04/1ac0e49bc4414be28d6e5d1a04528fc8/images/4d40fbd1fc65432f953df276e002d9ba.jpg',
        //           name: '曾珏',
        //           postion: '成都高新区党工委管委会办公室纪检组长'
        //         }, {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/4867145b541e4c31bc5d657432de1fb7/images/dc0e6cd2fe584bd193c2d989065d73f6.jpg',
        //           name: '冯晓静',
        //           postion: '成都高新区党工委管委会办公室副主任'
        //         },
        //         {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/136286a68cb64b22a33485e9085dc22b/images/9b5762e9f8e14fcab28be1a1913d633a.jpg',
        //           name: '孙秀蓬',
        //           postion: '成都高新区党工委管委会办公室副主任'
        //         },
        //         {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-07/04/1ac0e49bc4414be28d6e5d1a04528fc8/images/4d40fbd1fc65432f953df276e002d9ba.jpg',
        //           name: '曾珏',
        //           postion: '成都高新区党工委管委会办公室纪检组长'
        //         }, {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/4867145b541e4c31bc5d657432de1fb7/images/dc0e6cd2fe584bd193c2d989065d73f6.jpg',
        //           name: '冯晓静',
        //           postion: '成都高新区党工委管委会办公室副主任'
        //         }
        //
        //
        //       ]
        //     },
        //     {
        //       dep_title: '纪工委、监察工委',
        //       id: 2,
        //       leader_list: [
        //         {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-03/21/5d398508a24a46c1b5b4ea73e5ed3a08/images/69430034c9c14ce89cbbc0e1e6e7bfe5.jpg',
        //           name: '冉光俊',
        //           postion: '成都高新区党工委管委会办公室主任'
        //         },
        //         {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/4867145b541e4c31bc5d657432de1fb7/images/dc0e6cd2fe584bd193c2d989065d73f6.jpg',
        //           name: '冯晓静',
        //           postion: '成都高新区党工委管委会办公室副主任'
        //         },
        //         {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/136286a68cb64b22a33485e9085dc22b/images/9b5762e9f8e14fcab28be1a1913d633a.jpg',
        //           name: '孙秀蓬',
        //           postion: '成都高新区党工委管委会办公室副主任'
        //         },
        //         {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-07/04/1ac0e49bc4414be28d6e5d1a04528fc8/images/4d40fbd1fc65432f953df276e002d9ba.jpg',
        //           name: '曾珏',
        //           postion: '成都高新区党工委管委会办公室纪检组长'
        //         }, {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/4867145b541e4c31bc5d657432de1fb7/images/dc0e6cd2fe584bd193c2d989065d73f6.jpg',
        //           name: '冯晓静',
        //           postion: '成都高新区党工委管委会办公室副主任'
        //         }
        //
        //
        //       ]
        //     },
        //     {
        //       dep_title: '党群工作部',
        //       id: 3,
        //       leader_list: [
        //         {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-03/21/5d398508a24a46c1b5b4ea73e5ed3a08/images/69430034c9c14ce89cbbc0e1e6e7bfe5.jpg',
        //           name: '冉光俊',
        //           postion: '成都高新区党工委管委会办公室主任'
        //         },
        //         {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-07/04/1ac0e49bc4414be28d6e5d1a04528fc8/images/4d40fbd1fc65432f953df276e002d9ba.jpg',
        //           name: '曾珏',
        //           postion: '成都高新区党工委管委会办公室纪检组长'
        //         }, {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/4867145b541e4c31bc5d657432de1fb7/images/dc0e6cd2fe584bd193c2d989065d73f6.jpg',
        //           name: '冯晓静',
        //           postion: '成都高新区党工委管委会办公室副主任'
        //         }, {
        //           imgurl: 'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/4867145b541e4c31bc5d657432de1fb7/images/dc0e6cd2fe584bd193c2d989065d73f6.jpg',
        //           name: '冯晓静',
        //           postion: '成都高新区党工委管委会办公室副主任'
        //         }
        //
        //
        //       ]
        //     },
        //   ],
        // }
        //
        // ,
        // // newsdata: {},
        // // newsTop: [
        // //   {
        // //     href: 'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml',
        // //     title: '成都高新区战” 加快建设国家高质量发展示范区'
        // //   },
        // //   {
        // //     href: 'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml',
        // //     title: '加快建设国家高质量发展示范区'
        // //   },
        // //   {
        // //     href: 'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml',
        // //     title: '成都高新区打” 加快建设国家高质量发展示范区'
        // //   },
        // //   {
        // //     href: 'http://www.cdht.gov.cn/cdhtz/c142982/xwzx_list.shtml',
        // //     title: '成都高新区打家高质量发展示范区'
        // //   }
        // // ],


      }
    },
    computed: {
      getLevelData() {
        let lData = [];
        if (this.selectLevel) {
          this.leaderLevel.forEach(e => {
            if (e.levelId === this.selectLevel) {
              this.selectLeader = e.data[0].id;
              // this.deptId = e.data[0].id;
              lData = e.data;
            }
          })
        }
        return lData;
      },
    },
    watch: {
      selectLeader() {
        if (this.selectLeader) {
          if (this.mark === 'leader') this.getLeader();
          if (this.mark === 'departmentDetails') this.getDeptDetail();
        }
      }
    },
    created() {
      this.getPkParkWebsiteManagementDept();
    },
    methods: {
      handleLeaderDetail(id) {
        let json = {
          id: id,
        };
        this.$router.push({name: 'leaderDetails', query: json});
      },
      getLeader() {
        Axios.get(AjaxApi.getLeader, {deptId: this.selectLeader}).then(res => {
          if (res.status === 200) {
            console.log(res.data)
            let resData = res.data.body.datas;
            this.leaderList = resData;
            console.log("getLeader=====leaderList=====", resData)
          }
        })
      },
      changeLevel(levelId) {
        this.selectLevel = levelId;
      },
      getPkParkWebsiteManagementDept() {
        Axios.get(AjaxApi.getPkParkWebsiteManagementDept, {pkId: 238}).then(res => {
          if (res.status === 200) {
            let arr = res.data.body.datas;
            var map = {},
              dest = [];
            for (var i = 0; i < arr.length; i++) {
              var ai = arr[i];
              if (!map[ai.levelId]) {
                dest.push({
                  levelId: ai.levelId,
                  levelName: ai.levelName,
                  data: [ai]
                });
                map[ai.levelId] = ai;
              } else {
                for (var j = 0; j < dest.length; j++) {
                  var dj = dest[j];
                  if (dj.levelId == ai.levelId) {
                    dj.data.push(ai);
                    break;
                  }
                }
              }
            }
            this.leaderLevel = dest;
            this.selectLevel = dest[0].levelId;
            console.log(dest);
          }
        })
      },
      getDeptDetail() {
        Axios.get(AjaxApi.getDeptDetail + '/' + this.selectLeader).then(res => {
          if (res.status === 200) {
            console.log(res.data)
            let resData = res.data.body;
            this.leaderList = resData;
            console.log("getDeptDetail=====", resData)
          }
        })
      },
      dateFormat_YMD(val) {
        return DateFormat.dateFormat_YMD(val)
      },

      changeLeadList(deptId) {
        this.selectLeader = deptId;
      }
    }
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

    .leader_level {
      width: 100%;
      height: auto;
      display: flex;
      margin-top: 20px;
      border-bottom: 1px solid $mainColor;

      .leader_level_item {
        width: 120px;
        height: 40px;
        color: #333;
        text-align: center;
        line-height: 40px;
        font-size: $font14;
        cursor: pointer;

        &.active {
          background: $mainColor;
          color: #fff;
        }
      }
    }

    .leader_list {
      width: 100%;
      padding-top: 20px;
      overflow: hidden;

      .leader_list_nav {
        width: 20%;
        padding-right: 10px;
        float: left;

        .nav_item {
          width: 100%;
          padding: 0 10px;
          height: 48px;
          line-height: 48px;
          font-size: $font14;
          color: #333;
          background: #fafafa;
          border: 1px solid #fafafa;
          border-bottom: 1px solid #eee;
          cursor: pointer;

          i {
            margin-right: 10px;
            color: $mainColor;
          }

          &.active {
            background: $mainHOPColor;
            color: $mainColor;
            border: 1px solid $mainOPColor;
          }
        }
      }

      .leader_list_content {
        width: 80%;
        padding-left: 10px;
        float: right;
        overflow: hidden;

        .leader_item {
          float: left;
          text-align: center;
          margin-bottom: 20px;
          padding: 10px;
          box-sizing: border-box;

          .leader_item_content {
            display: block;
            background: #fafafa;
            border: 1px solid #ddd;
            padding: 25px 10px 10px 10px;

            .leader_img {
              width: 210px;
              height: 210px;
              padding: 10px;
              background: #fff;
              margin-bottom: 15px;
            }

            .leader_name {
              font-weight: bold;
              font-size: 18px;
              margin-bottom: 5px;
            }

            .leader_postion {
              height: 40px;
              overflow: hidden;
            }

            &:hover {
              color: $mainHColor;
              background: $mainHOPColor;
              border: 1px solid $mainHOPColor;
            }
          }
        }
      }

      .leader_name {
        text-align: center;
        font-size: 36px;
        font-weight: bold;
        margin-bottom: 5px;
      }
    }
  }
</style>
