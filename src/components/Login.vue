<template>
  <div class="login_container">
    <div class="login_box">
      <div class="head">
        <el-button class="headLogin">登录</el-button>
        <el-button class="headRegister" @click="RegisterForm">注册</el-button>
      </div>
      <!-- 登录表单区 -->
      <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="el-icon-s-custom" placeholder="账号"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" prefix-icon="el-icon-s-cooperation" type="password"
                    placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item prop="verify" class="verify">
          <el-input v-model="loginForm.verify" placeholder="验证码" style="width: 150px"></el-input>
          <img src="../static/image/login_img.png" class="login_img" style="height: 40px"/>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns-left">
          <el-button @click="login" class="login">登录</el-button>
        </el-form-item>
        <el-form-item class="btns-right">
          <el-button @click="resetLoginForm" class="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        code: '',
        username: '',
        password: '',
        verify: '',
        uuid: ''
      },
      //   表单验证规则
      loginFormRules: {
        //   验证用户名
        username: [
          {
            required: true,
            message: '请输入账号',
            trigger: 'blur'
          }
        ],
        // 验证密码
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          },
          {
            min: 6,
            message: '输入6位数以上密码',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    resetLoginForm () {
      this.$refs.loginFormRef.resetFields()
    },
    login () {
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return
        const { data: res } = await this.$http({
          method: 'post',
          url: '/auth/login',
          data: this.loginForm
        })
        // .catch(error => {
        // if (error.response.status === 401) {
        //     console.log('登录失败')
        // }
        // post('/auth/login', this.loginForm)
        if (res.code != '200') {
          return this.$message.error('登录失败')
        }
        this.$message.success('登录成功')
        window.sessionStorage.setItem('token', res.data.token)
        this.$router.push('/home')
      })
    },
    RegisterForm () {
      this.$router.push('/register')
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
  background-color: white;
  width: 100%;
  height: 100%;
}

.login_box {
  width: 300px;
  height: 300px;
  background-color: #fff;
  border-radius: 5px;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.login_form {
  border: 3px solid;
  border-color: rgba(80, 80, 80, 0.44);
  padding: 20px;
}

.btns-left {
  width: 50%;
  position: absolute;
}

.btns-right {
  width: 50%;
  margin-left: 60%;
}

.head {

}

.login {
  background: rgba(11, 255, 36, 0.44);
  border-radius: 8px;
}

.reset {
  background: rgba(255, 42, 46, 0.64);
  border-radius: 8px;
}

.headLogin {
  background: deepskyblue;
  width: 50%;
  margin-right: 0px;
  border-radius: 5px;
}

.headRegister {
  background: rgba(255, 42, 46, 0.64);
  width: 50%;
  margin-left: 0px;
  margin-top: 0px;
  border-radius: 5px;
}

.login {
  border-left: 0px;
}

.verify {

}

.login_img {
  float: right;
}
</style>
