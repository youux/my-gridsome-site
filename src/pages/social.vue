<template>
  <Layout>
    <div class="wrap">
      <el-card shadow="hover" class="box-card" v-for="(item, index) in 4" :key="index">
        <div slot="header">卡片名称</div>
        <div v-for="o in 4" :key="o" class="text item">
          {{'列表内容 ' + o }}
        </div>
      </el-card>
    </div>
  </Layout>
</template>

<script>
export default {
  name: 'social',
  metaInfo: {
    title: '社交圈'
  }
}
</script>

<style scoped>
.wrap {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.box-card {
  width: 30%;
  font-size: 14px;
  margin-bottom: 10px;
  margin-right: 3.3%;
}
.box-card:nth-child(3) {
  margin-right: 0;
}
</style>
