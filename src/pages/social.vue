<template>
  <Layout>
    <div class="wrap">
      <el-card shadow="hover" class="box-card" v-for="(item, index) in data" :key="index">
        <g-link :to="item.node.url" target="_blank">
          <el-avatar :src="baseUrl+item.node.cover.url"></el-avatar>
          <span>{{item.node.title}}</span>
        </g-link>
      </el-card>
    </div>
  </Layout>
</template>

<page-query>
query{
  list:allStrapiSocial{
    edges{
      node{
        id
        title
        url
        cover{
          url
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  name: 'social',
  metaInfo: {
    title: '社交圈'
  },
  computed: {
    baseUrl () {
      return 'https://yjjcode.com'
    },
    data () {
      return this.$page.list.edges
    }
  },
}
</script>

<style scoped>
.wrap {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.box-card {
  width: 31.3%;
  font-size: 14px;
  margin-bottom: 10px;
  margin-right: 2%;
}
.box-card:nth-child(3) {
  margin-right: 0;
}
.box-card a {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.el-avatar {
  margin-right: 10px;
}
</style>
