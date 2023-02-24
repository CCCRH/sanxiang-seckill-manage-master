<template>
  <div class="Product-box">
    <el-dialog title="添加商品" :visible.sync="dialogVisible" :show-close="false" :close-on-click-modal="false" :close-on-press-escape="false">
      <el-form ref="form" :model="form" label-width="125px">
        <el-form-item label="商品名称">
          <el-input v-model="form.productStoreName"></el-input>
        </el-form-item>
        <el-form-item label="商品图片">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="商品价格">
          <el-input v-model="form.productPrice"></el-input>
        </el-form-item>
        <el-form-item label="商品库存">
          <el-input v-model="form.productStock"></el-input>
        </el-form-item>
        <el-form-item label="商品简介">
          <el-input v-model="form.productStoreInfo"></el-input>
        </el-form-item>
        <el-form-item label="商品创建时间">
          <el-date-picker
            v-model="form.seckillCreationTime"
            type="datetime"
            placeholder="选择日期时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="商品开始秒杀时间">
          <el-date-picker
            v-model="form.seckillStartTime"
            type="datetime"
            placeholder="选择日期时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="商品结束时间">
          <el-date-picker
            v-model="form.seckillStopTime"
            type="datetime"
            placeholder="选择日期时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="商品秒杀数量">
          <el-input v-model="form.seckillNumber"></el-input>

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
  name: 'ProductForm',
  props: ['dialogVisible'],
  data(){
    return{
      dialogImageUrl: '',
      form: [{
        productStoreName:'',
        productImage:'',
        productPrice:'',
        productStock:'',
        productStoreInfo:'',
        seckillCreationTime:'',
        seckillStartTime:'',
        seckillStopTime:'',
        seckillNumber:''
      }]
    }
  },
  methods:{
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    submit(){

    },
    complete(){
      this.$emit('ChangeDialog')
    }
  }
}
</script>

<style scoped>

</style>
