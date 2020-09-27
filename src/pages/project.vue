<template>
  <Layout>
    <el-card shadow="hover" class="box-card" v-for="(item, index) in data" :key="index">
      <g-link :to="item.node.url" target="_blank" slot="header">{{item.node.title}}</g-link>
      <div class="item">{{item.node.content}}</div>
    </el-card>
  </Layout>
</template>

<page-query>
query{
  list:allStrapiProject{
    edges{
      node{
        id
        url
        title
        content
      }
    }
  }
}
</page-query>

<script>
export default {
  name: 'project',
  metaInfo: {
    title: '开源项目'
  },
  computed: {
    data () {
      return this.$page.list.edges
    }
  }
}
</script>

<style scoped>
.box-card {
  font-size: 14px;
  margin-bottom: 10px;
}
.more {
  float: right;
}
</style>
