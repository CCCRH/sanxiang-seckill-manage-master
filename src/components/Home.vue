<template>
  <!-- <div>
  </div>
  <el-container> -->
  <el-container class="home-container">
    <el-header>
      <div>
        <img src="" alt="后台管理" />
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <!-- 侧边栏 -->
        <el-menu background-color="#373b41" text-color="#fff" active-text-color="#ffd04b" router>
          <el-menu-item index="/home">
            <i class="el-icon-location"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>超级管理员</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/User">用户管理</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="/Admin">角色管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="/seckillAdd">
            <i class="el-icon-location"></i>
            <span slot="title">商品管理</span>
          </el-menu-item>
          <el-menu-item index="/Order">
            <i class="el-icon-location"></i>
            <span slot="title">订单管理</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods: {
    logout () {
      window.sessionStorage.clear()
        this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
.el-header {
  background-color: #373b41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
}
.el-aside {
  background-color: #373b41;
}
.el-main {
  background-color: #eaedf1;
}
.home-container {
  height: 100%;
}

</style>
