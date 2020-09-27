<template>
  <Layout>
    <el-card shadow="hover" class="box-card" v-for="(item, index) in data" :key="index">
      <g-link :to="'/post/'+item.node.id" slot="header">{{item.node.title}}</g-link>
      <div class="text item" v-html="item.node.content.slice(0, 100)"></div>
    </el-card>
  </Layout>
</template>

<page-query>
query{
  list:allStrapiBlog{
    edges{
      node{
        id
        title
        content
      }
    }
  }
}
</page-query>

<script>
import MarkdownIt from 'markdown-it'
export default {
  name: 'blog',
  metaInfo: {
    title: '博客列表'
  },
  computed: {
    data () {
      return this.$page.list.edges
    }
  },
}
</script>

<style scoped>
.box-card {
  font-size: 14px;
  margin-bottom: 10px;
}
</style>
