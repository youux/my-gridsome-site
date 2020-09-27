<template>
  <Layout>
    <el-card shadow="never" class="box-card">
      <div slot="header">卡片名称</div>
      <div v-for="o in 4" :key="o" class="text item">
        {{'列表内容 ' + o }}
      </div>
    </el-card>
  </Layout>
</template>

<script>
export default {
  name: 'news',
  metaInfo: {
    title: '最新动态'
  }
}
</script>

<style scoped>
.box-card {
  font-size: 14px;
}
</style>
