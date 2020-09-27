<template>
  <Layout>
    <el-card shadow="never" class="box-card">
      <h1 slot="header">{{data.title}}</h1>
      <div class="text" v-html="mdTohtml(data.content)"></div>
    </el-card>
  </Layout>
</template>

<page-query>
query{
  list:strapiBlog (tui: true){
    id
    title
    content
    tui
  }
}
</page-query>

<script>
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
export default {
  name: 'news',
  metaInfo: {
    title: '最新动态'
  },
  computed: {
    data () {
      return this.$page.list
    }
  },
  methods: {
    mdTohtml (mkd) {
      const md = new MarkdownIt({
        highlight: function (str, lang) {
          if (lang && hljs.getLanguage(lang)) {
            try {
              return '<pre class="hljs"><code>' +
                hljs.highlight(lang, str, true).value +
                '</code></pre>'
            } catch (__) { }
          }

          return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>'
        },
        html: true,
        linkify: true,
        typographer: true,
      })
      return md.render(mkd)
    }
  },
}
</script>

<style scoped>
.box-card {
  font-size: 14px;
}
</style>
