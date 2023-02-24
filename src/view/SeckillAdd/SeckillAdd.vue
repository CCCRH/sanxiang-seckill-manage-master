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
          <el-table-column type="selection" label="是否展示" width="55px"/>
          <el-table-column prop="productStoreName" label="商品名称" ></el-table-column>
          <el-table-column prop="productImage" label="商品图片"></el-table-column>
          <el-table-column prop="productPrice" label="商品价格" width="80px"></el-table-column>
          <el-table-column prop="productStock" label="商品库存" width="80px"></el-table-column>
          <el-table-column prop="productStoreInfo" label="商品简介"></el-table-column>
          <el-table-column prop="seckillCreationTime" label="商品创建时间" width="140px">
            <template slot-scope="scope">
              {{scope.row.seckillCreationTime|timeData}}
            </template>
          </el-table-column>
          <el-table-column prop="seckillStartTime" label="商品开始秒杀时间" width="140px">
            <template slot-scope="scope">
              {{scope.row.seckillStartTime|timeData}}
            </template>
          </el-table-column>
          <el-table-column prop="seckillStopTime" label="商品结束时间" width="140px">
            <template slot-scope="scope">
              {{scope.row.seckillStopTime|timeData}}
            </template>
          </el-table-column>
          <el-table-column prop="productId" label="商品ID"></el-table-column>
          <el-table-column prop="seckillNumber" label="商品秒杀数量" width="80px"></el-table-column>
          <el-table-column prop="address" label="操作" width="150px">
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
    <ProductForm :dialogVisible="dialogVisible" @ChangeDialog="ChangeDialog"/>
  </div>
</template>

<script>
import ProductForm from '@/view/SeckillAdd/ProductForm'
import tsconfig from '../../static/json/tsconfig.json'
export default {
  components:{
    ProductForm,
  },
  data () {
    return {
      dialogVisible:false,
      input: '',
      tableData:tsconfig.tableData,
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
  filters: {
    timeData: function (value) {
      let date = new Date(value);
      let y = date.getFullYear();
      let MM = date.getMonth() + 1;
      MM = MM < 10 ? ('0' + MM) : MM;
      let d = date.getDate();
      d = d < 10 ? ('0' + d) : d;
      let h = date.getHours();
      h = h < 10 ? ('0' + h) : h;
      let m = date.getMinutes();
      m = m < 10 ? ('0' + m) : m;
      let s = date.getSeconds();
      s = s < 10 ? ('0' + s) : s;
      return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
    }},
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
