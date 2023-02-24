<template>
  <div class="register_container">
    <div class="register_box">
      <div class="head">
        <el-button class="headLogin" @click="LoginForm">登录</el-button>
        <el-button class="headRegister">注册</el-button>
      </div>
      <div class="register_Form">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"  class="demo-ruleForm">
          <el-form-item  prop="username">
            <el-input v-model="ruleForm.username" placeholder="账号"></el-input>
          </el-form-item>
          <el-form-item prop="IDcard">
            <el-input v-model="ruleForm.IDcard" placeholder="身份证号"></el-input>
          </el-form-item>
          <el-form-item prop="name">
            <el-input  v-model="ruleForm.name" placeholder="姓名"></el-input>
          </el-form-item>
          <el-form-item prop="phone">
            <el-input  v-model="ruleForm.phone" placeholder="手机号"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" v-model="ruleForm.password" autocomplete="off" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" placeholder="确认密码"></el-input>
          </el-form-item>
          <el-form-item prop="verify" class="verify">
            <el-input v-model="ruleForm.verify" placeholder="验证码" style="width: 200px;"></el-input>
            <img src="../../static/image/login_img.png" class="login_img" style="height: 40px"/>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')" class="submit">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    var checkname = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空'))
      }
      setTimeout(() => {
        if (this.ruleForm.username.length < 6) {
          callback(new Error('用户名不得少于6位'))
        } else {
          callback()
        }
      }, 1000)
    }
    var checkPhone=(rule,value,callback) =>{
      if(value === ''){
        callback(new Error('请输入手机号'))
      }else if(value.length !== 11){
        callback(new Error('请输入正确的手机号'))
      }else{
        callback()
      }
    }
    var validatePass = (rule, value, callback) =>{
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        username: '',
        IDcard:'',
        naem:'',
        phone:'',
        password: '',
        checkPass: '',
        verify:''
      },
      rules: {
        username: [
          {
            validator: checkname,
            trigger: 'blur'
          }
        ],
        password: [
          {
            validator: validatePass,
            trigger: 'blur'
          }
        ],
        checkPass: [
          {
            validator: validatePass2,
            trigger: 'blur'
          }
        ],
        phone: [
          {
            validator:checkPhone,
            trigger:'blur'
          }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          alert('submit!')
          const { data: res } = await this.$http({
            method: 'post',
            url: '/auth/register',
            data: this.ruleForm
          }).then(res)
          {
            console.log(res)
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    LoginForm(){
      this.$router.push('/Login')
    }
  }
}


</script>

<style lang="less" scoped>
.register_container {
  background-color: white;
  width: 100%;
  height: 100%;
}

.register_box {
  width: 350px;
  height: 650px;
  background-color: #fff;
  border-radius: 5px;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.register_Form {
  border: 3px solid;
  border-color: blue;
  padding: 20px;
}
.headLogin{
  background: deepskyblue;
  width: 50%;
  margin-right: 0px;
  border-radius: 5px;
}
.headRegister{
  background: rgba(255,42,46,0.64);
  width: 50%;
  margin-left: 0px;
  margin-top: 0px;
  border-radius: 5px;
}
.submit{
  float: right;
  margin-right: 25%;
  border-radius: 5px;
  background: rgba(255,42,46,0.64);
}
.verify{

}
.login_img{
  float: right;

}


</style>
