<template>
  <div class="registration">
    <el-dialog title="注册用户" :visible.sync="dialogVisible" :show-close="false" :close-on-click-modal="false" :close-on-press-escape="false">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="身份证">
          <el-input v-model="form.id"></el-input>
      </el-form-item>
      <el-form-item label="用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit" >确定</el-button>
        <el-button @click="complete">取消</el-button>
      </el-form-item>
    </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name:'Form',
  props: ['dialogVisible'],
  data() {
    return {
      form: {
        name: '',
        id:'',
        username:'',
      }
    }
  },
  methods: {
    submit(){
      let tableData = JSON.stringify(this.form);
      console.log(tableData)
      this.$http.get('../static/json/fakeuser.json', tableData).then((res) =>{
        if (res.status === 200) {
          console.log("保存成功")
        } else {
          console.log("保存成功")
        }
      })
    },
    complete(){
      this.$emit('ChangeDialog')
    }
  }
}
</script>

<style scoped>
.registration{
  width: 500px;
  height: 600px;
}
</style>
