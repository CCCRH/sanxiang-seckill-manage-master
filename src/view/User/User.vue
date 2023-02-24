<template>
  <div>
    <!--搜索栏-->
    <div class="header">
      <el-input v-model="input" placeholder="请输入内容"></el-input>
      <el-button type="info" @click="find()">查询</el-button>
      <el-button type="info" @click="AddUser">添加</el-button>
    </div>
    <!--内容-->
    <div class="content">
      <el-table :data="tableData" stripe border style="width: 100%">
        <el-table-column type="selection" width="55px"/>
        <el-table-column prop="id" label="身份证号"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="username" label="用户名"></el-table-column>
        <el-table-column prop="address" label="操作">
          <template v-slot="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, {id:tableData.id,name:tableData.name,username:tableData.username})">编辑
            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="page">
      <el-pagination background layout="prev, pager, next" page-size="2" :total="0"></el-pagination>
    </div>
    <Form :dialogVisible="dialogVisible" @ChangeDialog="ChangeDialog"/>
  </div>
</template>

<script>
import Form from  '../../components/Form.vue'
import fakeuser from '../../static/json/fakeuser.json'
export default {
  components:{
    Form,
  },
  name: 'User',
  data () {
    return {
      dialogVisible:false,
      input: '',
      tableData:fakeuser.tableData,
      queryinfo:{
        query:'',
        pagenum: 1,
        pagesize:10
      }
    }
  },
  methods: {
    handleEdit (index,data) {
      this.tableData.tableData.splice(index, 1,data)
      this.dialogVisible=true
    },
    handleDelete (index) {
      this.tableData.tableData.splice(index, 1)
    },
    AddUser () {
      this.dialogVisible=true
    },
    ChangeDialog(){
      this.dialogVisible=false
    },
    find(){

    }
  },
  }

</script>

<style lang="less" scoped>

.header {
  display: flex;
  margin-bottom: 20px;

  button {
    margin-left: 20px;
  }
}
.page{
  text-align: center;
}


</style>
