<template>
  <div class='newdetails_template'>
    <div class='content_item'>
        <div class='newdetails_heade'>
         当前位置： 网站首页 / 政务公开 / 基本信息公开 / 领导之窗 / 部门 / 两委办公室
        </div>
        <div class='leader_level'>
          <div class='leader_level_item' :class='{"active":item.level===selectLevel}' 
          v-for='item in leaderLevel'  
          :key='item.level'
          @click='changeLevel(item.level)'
          >
          {{item.level_name}}
          </div>
        </div>
        <div class='leader_list'>
          <div class='leader_list_nav'>
            <ul>
              <li class='nav_item' :class='{"active":item.id===selectLeader}' v-for='(item,index) in leveData' :key='index' @click='changeLeadList(item)'>
                <i class='el-icon-arrow-right'></i>{{item.dep_title}}
              </li>
            </ul>
          </div>
          <div class='leader_list_content'>
            <div class='leader_item' v-for='(item,index) in leaderList' :key='index'>
              <a class='leader_item_content' href="javascript:;">
              <img class='leader_img' :src="item.imgurl" alt="">
              <p class='leader_name'>{{item.name}}</p>
              <p class='leader_postion'>{{item.postion}}</p>
              </a>
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
      leaderLevel:[
        {
          level:1,
          level_name:'区级领导'
        },
        {
          level:2,
          level_name:'部门'
        },
        {
          level:3,
          level_name:'街道(乡镇)'
        }
      ],
      selectLevel:1,
      selectLeader:1,
      leveData:[],
      leaderList:[],
      leaderJson:{
        level_1:[
            {
              dep_title:'高新区',
              id:1,
              leader_list:[
                {
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-03/21/5d398508a24a46c1b5b4ea73e5ed3a08/images/69430034c9c14ce89cbbc0e1e6e7bfe5.jpg',
                  name:'冉光俊',
                  postion:'成都高新区党工委管委会办公室主任'
                },
                {
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/ec2bae80890f4efebfd0ce88ad2f482f/images/3cb1c331e7804504a08743ff6206ff33.png',
                  name:'张建忠',
                  postion:'成都高新区党工委管委会副巡视员'
                },
                {
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/136286a68cb64b22a33485e9085dc22b/images/9b5762e9f8e14fcab28be1a1913d633a.jpg',
                  name:'孙秀蓬',
                  postion:'成都高新区党工委管委会办公室副主任'
                },
                {
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-07/04/1ac0e49bc4414be28d6e5d1a04528fc8/images/4d40fbd1fc65432f953df276e002d9ba.jpg',
                  name:'曾珏',
                  postion:'成都高新区党工委管委会办公室纪检组长'
                },{
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/4867145b541e4c31bc5d657432de1fb7/images/dc0e6cd2fe584bd193c2d989065d73f6.jpg',
                  name:'冯晓静',
                  postion:'成都高新区党工委管委会办公室副主任'
                }

              ]
            }
          ],
        level_2:[
            {
              dep_title:'两委办公室',
              id:1,
              leader_list:[
                {
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-03/21/5d398508a24a46c1b5b4ea73e5ed3a08/images/69430034c9c14ce89cbbc0e1e6e7bfe5.jpg',
                  name:'冉光俊',
                  postion:'成都高新区党工委管委会办公室主任'
                },
                {
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/ec2bae80890f4efebfd0ce88ad2f482f/images/3cb1c331e7804504a08743ff6206ff33.png',
                  name:'张建忠',
                  postion:'成都高新区党工委管委会副巡视员'
                },
                {
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/136286a68cb64b22a33485e9085dc22b/images/9b5762e9f8e14fcab28be1a1913d633a.jpg',
                  name:'孙秀蓬',
                  postion:'成都高新区党工委管委会办公室副主任'
                },
                {
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-07/04/1ac0e49bc4414be28d6e5d1a04528fc8/images/4d40fbd1fc65432f953df276e002d9ba.jpg',
                  name:'曾珏',
                  postion:'成都高新区党工委管委会办公室纪检组长'
                },{
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/4867145b541e4c31bc5d657432de1fb7/images/dc0e6cd2fe584bd193c2d989065d73f6.jpg',
                  name:'冯晓静',
                  postion:'成都高新区党工委管委会办公室副主任'
                },
                           {
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/136286a68cb64b22a33485e9085dc22b/images/9b5762e9f8e14fcab28be1a1913d633a.jpg',
                  name:'孙秀蓬',
                  postion:'成都高新区党工委管委会办公室副主任'
                },
                {
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-07/04/1ac0e49bc4414be28d6e5d1a04528fc8/images/4d40fbd1fc65432f953df276e002d9ba.jpg',
                  name:'曾珏',
                  postion:'成都高新区党工委管委会办公室纪检组长'
                },{
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/4867145b541e4c31bc5d657432de1fb7/images/dc0e6cd2fe584bd193c2d989065d73f6.jpg',
                  name:'冯晓静',
                  postion:'成都高新区党工委管委会办公室副主任'
                }


              ]
            },
            {
              dep_title:'纪工委、监察工委',
              id:2,
              leader_list:[
                {
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-03/21/5d398508a24a46c1b5b4ea73e5ed3a08/images/69430034c9c14ce89cbbc0e1e6e7bfe5.jpg',
                  name:'冉光俊',
                  postion:'成都高新区党工委管委会办公室主任'
                },
                {
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/ec2bae80890f4efebfd0ce88ad2f482f/images/3cb1c331e7804504a08743ff6206ff33.png',
                  name:'张建忠',
                  postion:'成都高新区党工委管委会副巡视员'
                },
                {
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/136286a68cb64b22a33485e9085dc22b/images/9b5762e9f8e14fcab28be1a1913d633a.jpg',
                  name:'孙秀蓬',
                  postion:'成都高新区党工委管委会办公室副主任'
                },
                {
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-07/04/1ac0e49bc4414be28d6e5d1a04528fc8/images/4d40fbd1fc65432f953df276e002d9ba.jpg',
                  name:'曾珏',
                  postion:'成都高新区党工委管委会办公室纪检组长'
                },{
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/4867145b541e4c31bc5d657432de1fb7/images/dc0e6cd2fe584bd193c2d989065d73f6.jpg',
                  name:'冯晓静',
                  postion:'成都高新区党工委管委会办公室副主任'
                },
                           {
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/136286a68cb64b22a33485e9085dc22b/images/9b5762e9f8e14fcab28be1a1913d633a.jpg',
                  name:'孙秀蓬',
                  postion:'成都高新区党工委管委会办公室副主任'
                },
                {
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-07/04/1ac0e49bc4414be28d6e5d1a04528fc8/images/4d40fbd1fc65432f953df276e002d9ba.jpg',
                  name:'曾珏',
                  postion:'成都高新区党工委管委会办公室纪检组长'
                },{
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/4867145b541e4c31bc5d657432de1fb7/images/dc0e6cd2fe584bd193c2d989065d73f6.jpg',
                  name:'冯晓静',
                  postion:'成都高新区党工委管委会办公室副主任'
                }


              ]
            },
            {
              dep_title:'党群工作部',
              id:3,
              leader_list:[
                {
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-03/21/5d398508a24a46c1b5b4ea73e5ed3a08/images/69430034c9c14ce89cbbc0e1e6e7bfe5.jpg',
                  name:'冉光俊',
                  postion:'成都高新区党工委管委会办公室主任'
                },
                {
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/ec2bae80890f4efebfd0ce88ad2f482f/images/3cb1c331e7804504a08743ff6206ff33.png',
                  name:'张建忠',
                  postion:'成都高新区党工委管委会副巡视员'
                },
                {
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/136286a68cb64b22a33485e9085dc22b/images/9b5762e9f8e14fcab28be1a1913d633a.jpg',
                  name:'孙秀蓬',
                  postion:'成都高新区党工委管委会办公室副主任'
                },
                {
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-07/04/1ac0e49bc4414be28d6e5d1a04528fc8/images/4d40fbd1fc65432f953df276e002d9ba.jpg',
                  name:'曾珏',
                  postion:'成都高新区党工委管委会办公室纪检组长'
                },{
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/4867145b541e4c31bc5d657432de1fb7/images/dc0e6cd2fe584bd193c2d989065d73f6.jpg',
                  name:'冯晓静',
                  postion:'成都高新区党工委管委会办公室副主任'
                }


              ]
            },
            {
              dep_title:'政法委应急局',
              id:4,
              leader_list:[
                {
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-03/21/5d398508a24a46c1b5b4ea73e5ed3a08/images/69430034c9c14ce89cbbc0e1e6e7bfe5.jpg',
                  name:'冉光俊',
                  postion:'成都高新区党工委管委会办公室主任'
                },
                {
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/ec2bae80890f4efebfd0ce88ad2f482f/images/3cb1c331e7804504a08743ff6206ff33.png',
                  name:'张建忠',
                  postion:'成都高新区党工委管委会副巡视员'
                },
                {
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/136286a68cb64b22a33485e9085dc22b/images/9b5762e9f8e14fcab28be1a1913d633a.jpg',
                  name:'孙秀蓬',
                  postion:'成都高新区党工委管委会办公室副主任'
                },
                {
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-07/04/1ac0e49bc4414be28d6e5d1a04528fc8/images/4d40fbd1fc65432f953df276e002d9ba.jpg',
                  name:'曾珏',
                  postion:'成都高新区党工委管委会办公室纪检组长'
                },{
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/4867145b541e4c31bc5d657432de1fb7/images/dc0e6cd2fe584bd193c2d989065d73f6.jpg',
                  name:'冯晓静',
                  postion:'成都高新区党工委管委会办公室副主任'
                },
                           {
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/136286a68cb64b22a33485e9085dc22b/images/9b5762e9f8e14fcab28be1a1913d633a.jpg',
                  name:'孙秀蓬',
                  postion:'成都高新区党工委管委会办公室副主任'
                },
                {
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-07/04/1ac0e49bc4414be28d6e5d1a04528fc8/images/4d40fbd1fc65432f953df276e002d9ba.jpg',
                  name:'曾珏',
                  postion:'成都高新区党工委管委会办公室纪检组长'
                },{
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/4867145b541e4c31bc5d657432de1fb7/images/dc0e6cd2fe584bd193c2d989065d73f6.jpg',
                  name:'冯晓静',
                  postion:'成都高新区党工委管委会办公室副主任'
                }


              ]
            },
            {
              dep_title:'市人大高新工委',
              id:5,
              leader_list:[
                {
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-03/21/5d398508a24a46c1b5b4ea73e5ed3a08/images/69430034c9c14ce89cbbc0e1e6e7bfe5.jpg',
                  name:'冉光俊',
                  postion:'成都高新区党工委管委会办公室主任'
                },
               
                {
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-07/04/1ac0e49bc4414be28d6e5d1a04528fc8/images/4d40fbd1fc65432f953df276e002d9ba.jpg',
                  name:'曾珏',
                  postion:'成都高新区党工委管委会办公室纪检组长'
                },{
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/4867145b541e4c31bc5d657432de1fb7/images/dc0e6cd2fe584bd193c2d989065d73f6.jpg',
                  name:'冯晓静',
                  postion:'成都高新区党工委管委会办公室副主任'
                },
                           {
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/136286a68cb64b22a33485e9085dc22b/images/9b5762e9f8e14fcab28be1a1913d633a.jpg',
                  name:'孙秀蓬',
                  postion:'成都高新区党工委管委会办公室副主任'
                },
                {
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-07/04/1ac0e49bc4414be28d6e5d1a04528fc8/images/4d40fbd1fc65432f953df276e002d9ba.jpg',
                  name:'曾珏',
                  postion:'成都高新区党工委管委会办公室纪检组长'
                },{
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/4867145b541e4c31bc5d657432de1fb7/images/dc0e6cd2fe584bd193c2d989065d73f6.jpg',
                  name:'冯晓静',
                  postion:'成都高新区党工委管委会办公室副主任'
                }


              ]
            },
          ],
        level_3:[
            {
              dep_title:'两委办公室',
              id:1,
              leader_list:[
                {
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-03/21/5d398508a24a46c1b5b4ea73e5ed3a08/images/69430034c9c14ce89cbbc0e1e6e7bfe5.jpg',
                  name:'冉光俊',
                  postion:'成都高新区党工委管委会办公室主任'
                },
                {
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/ec2bae80890f4efebfd0ce88ad2f482f/images/3cb1c331e7804504a08743ff6206ff33.png',
                  name:'张建忠',
                  postion:'成都高新区党工委管委会副巡视员'
                },
                {
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/136286a68cb64b22a33485e9085dc22b/images/9b5762e9f8e14fcab28be1a1913d633a.jpg',
                  name:'孙秀蓬',
                  postion:'成都高新区党工委管委会办公室副主任'
                },
                {
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-07/04/1ac0e49bc4414be28d6e5d1a04528fc8/images/4d40fbd1fc65432f953df276e002d9ba.jpg',
                  name:'曾珏',
                  postion:'成都高新区党工委管委会办公室纪检组长'
                },{
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/4867145b541e4c31bc5d657432de1fb7/images/dc0e6cd2fe584bd193c2d989065d73f6.jpg',
                  name:'冯晓静',
                  postion:'成都高新区党工委管委会办公室副主任'
                },
                           {
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/136286a68cb64b22a33485e9085dc22b/images/9b5762e9f8e14fcab28be1a1913d633a.jpg',
                  name:'孙秀蓬',
                  postion:'成都高新区党工委管委会办公室副主任'
                },
                {
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-07/04/1ac0e49bc4414be28d6e5d1a04528fc8/images/4d40fbd1fc65432f953df276e002d9ba.jpg',
                  name:'曾珏',
                  postion:'成都高新区党工委管委会办公室纪检组长'
                },{
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/4867145b541e4c31bc5d657432de1fb7/images/dc0e6cd2fe584bd193c2d989065d73f6.jpg',
                  name:'冯晓静',
                  postion:'成都高新区党工委管委会办公室副主任'
                }


              ]
            },
            {
              dep_title:'纪工委、监察工委',
              id:2,
              leader_list:[
                {
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-03/21/5d398508a24a46c1b5b4ea73e5ed3a08/images/69430034c9c14ce89cbbc0e1e6e7bfe5.jpg',
                  name:'冉光俊',
                  postion:'成都高新区党工委管委会办公室主任'
                },
               {
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/4867145b541e4c31bc5d657432de1fb7/images/dc0e6cd2fe584bd193c2d989065d73f6.jpg',
                  name:'冯晓静',
                  postion:'成都高新区党工委管委会办公室副主任'
                },
                           {
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/136286a68cb64b22a33485e9085dc22b/images/9b5762e9f8e14fcab28be1a1913d633a.jpg',
                  name:'孙秀蓬',
                  postion:'成都高新区党工委管委会办公室副主任'
                },
                {
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-07/04/1ac0e49bc4414be28d6e5d1a04528fc8/images/4d40fbd1fc65432f953df276e002d9ba.jpg',
                  name:'曾珏',
                  postion:'成都高新区党工委管委会办公室纪检组长'
                },{
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/4867145b541e4c31bc5d657432de1fb7/images/dc0e6cd2fe584bd193c2d989065d73f6.jpg',
                  name:'冯晓静',
                  postion:'成都高新区党工委管委会办公室副主任'
                }


              ]
            },
            {
              dep_title:'党群工作部',
              id:3,
              leader_list:[
                {
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-03/21/5d398508a24a46c1b5b4ea73e5ed3a08/images/69430034c9c14ce89cbbc0e1e6e7bfe5.jpg',
                  name:'冉光俊',
                  postion:'成都高新区党工委管委会办公室主任'
                },
                {
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-07/04/1ac0e49bc4414be28d6e5d1a04528fc8/images/4d40fbd1fc65432f953df276e002d9ba.jpg',
                  name:'曾珏',
                  postion:'成都高新区党工委管委会办公室纪检组长'
                },{
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/4867145b541e4c31bc5d657432de1fb7/images/dc0e6cd2fe584bd193c2d989065d73f6.jpg',
                  name:'冯晓静',
                  postion:'成都高新区党工委管委会办公室副主任'
                },{
                  imgurl:'http://www.cdht.gov.cn/cdhtz/c143437q//2019-01/07/4867145b541e4c31bc5d657432de1fb7/images/dc0e6cd2fe584bd193c2d989065d73f6.jpg',
                  name:'冯晓静',
                  postion:'成都高新区党工委管委会办公室副主任'
                }


              ]
            },
          ],
      }
    }
  },
  created() {
    this.leveData=this.leaderJson['level_'+this.selectLevel]
    this.leaderList=this.leveData[0].leader_list
  },
  methods: {
    changeLevel(level){
      this.selectLevel=level,
      this.leveData=this.leaderJson['level_'+this.selectLevel]
    },
    changeLeadList(item){
      this.selectLeader=item.id
      this.leaderList=item.leader_list
      console.log(1234)
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
      font-size: $font14;
    }
    .leader_level{
      width:100%;
      height:auto;
      display: flex;
      margin-top:20px;
      border-bottom:1px solid $mainColor;
      .leader_level_item{
        width:120px;
        height:40px;
        color:#333;
        text-align: center;
        line-height: 40px;
        font-size:$font14;
        cursor: pointer;
        &.active{
          background:$mainColor;
          color:#fff;
        }
      }
    }
    .leader_list{
      width:100%;
      padding-top:20px;
      overflow: hidden;
      .leader_list_nav{
        width: 20%;
        padding-right:10px;
        float: left;
        .nav_item{
           width:100%;
          padding:0 10px;
          height:48px;
          line-height: 48px;
          font-size: $font14;
          color:#333;
          background:#fafafa;
          border: 1px solid #fafafa;
          border-bottom: 1px solid #eee;
          cursor: pointer;
          i{
            margin-right:10px;
            color:$mainColor;
          }
          &.active{
            background:$mainHOPColor;
            color:$mainColor;
            border:1px solid $mainOPColor;
          }
        }
      }
      .leader_list_content{
        width: 80%;
        padding-left:10px;
        float: right;
        overflow: hidden;
        .leader_item{
          width: 25%;
          float: left;
          text-align: center;
          margin-bottom: 20px;
          padding: 10px;
          box-sizing: border-box;
          .leader_item_content{
            display: block;
            background: #fafafa;
            border: 1px solid #ddd;
            padding: 25px 10px 10px 10px;
            .leader_img{
              width: 100%;
              height: 270px;
              padding: 10px;
              background: #fff;
              margin-bottom: 15px;
            }
            .leader_name{
              font-weight: bold;
              font-size: 18px;
              margin-bottom: 5px;
            }
            .leader_postion{
              height: 40px;
              overflow: hidden;
            }
            &:hover{
              color:$mainHColor;
              background: $mainHOPColor;
              border:1px solid $mainHOPColor;
            }
          }
          
        }
      }
     
    }
  }
</style>