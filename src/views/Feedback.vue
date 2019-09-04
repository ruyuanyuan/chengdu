<template>
  <div class='feedback_template'>
    <div class='head_img'>
      <img src="@/assets/img/feedbackbanner.png" alt="">
    </div>
    <div class='feedback_content'>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="feedbackForm">
        <el-form-item label="你的姓名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="手机号码" prop="phone">
          <el-input v-model="ruleForm.phone" maxlength="11"></el-input>
        </el-form-item>
        <el-form-item label="反馈内容" prop="content">
          <el-input type="textarea" :rows="4" v-model="ruleForm.content"></el-input>
        </el-form-item>
        <el-form-item class='btnbox'>
          <el-button type="primary" @click="submitForm('ruleForm')">提交反馈</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      ruleForm:{
        name:'',
        phone:'',
        content:''
      },
      rules: {
          name: [
            { required: true, message: '请输入你的姓名', trigger: 'blur' },
          ],
          phone: [
            { required: true, message: '请输入手机号码', trigger: 'blur' },
            { pattern: /^1[345678]\d{9}$/, message: '手机号码格式不正确' }
          ],
          content: [
            { required: true, message: '请输入反馈内容', trigger: 'blur' },
          ],
      }
    }
  },
  methods:{
    submitForm(formName){
       this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
}
</script>
<style lang="scss" scoped>
  .feedback_template{
    width:100%;
    .head_img{
      width:100%;
      img{
        width:100%;
      }
    }
    .feedback_content{
      padding:20px 20px;
      background: #fafafa;
      .feedbackForm{
        width: 1200px;
        height: auto;
        margin: 40px auto;
        background:#fff;
        box-shadow: 0px 6px 12px 0px rgba(0,0,0,0.08);
        padding:40px 140px;
      }
      .btnbox{
        text-align: center;
      }
    }
  }
</style>
