<template>
  <Layout>
    <el-card shadow="hover" class="box-card" v-for="(item, index) in 4" :key="index">
      <div slot="header">卡片名称</div>
      <div v-for="o in 4" :key="o" class="text item">
        {{'列表内容 ' + o }}
      </div>
    </el-card>
  </Layout>
</template>

<script>
export default {
  name: 'project',
  metaInfo: {
    title: '开源项目'
  }
}
</script>

<style scoped>
.box-card {
  font-size: 14px;
  margin-bottom: 10px;
}
</style>
