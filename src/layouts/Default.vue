<template>
  <div>
    <header>
      <h1>{{userInfo.title}}</h1>
      <h2>{{userInfo.subtitle}}</h2>
      <a :href="'https://github.com/'+userInfo.title" target="_blank" class="btn">GitHub主页</a>
      <a :href="'https://github.com/' + userInfo.title + '/' + userInfo.blog" target="_blank" class="btn">博客源码</a>
    </header>

    <main class="main">
      <aside>
        <el-menu>
          <g-link class="nav-link" :to="item.link" v-for="item in menuList" :key="item.id">
            <el-menu-item :class="{ 'is-active': path === item.link }">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.name }}</span>
            </el-menu-item>
          </g-link>
        </el-menu>
      </aside>
      <content>
        <slot />
      </content>
    </main>

    <footer>
      <div class="main">
        <div>
          © 2020 GitHub-{{userInfo.title}}&emsp;&emsp;
          <a :href="'https://github.com/' + userInfo.title" target="_blank">Profile</a>&emsp;&emsp;
          <a :href="'https://github.com/' + userInfo.name + '/' + userInfo.blog" target="_blank">{{userInfo.blog}}</a>
        </div>
        <div>
          <i class="el-icon-location-outline"></i>
        </div>
        <div>
          <a href="https://developer.github.com" target="_blank">GitHub-API</a>&emsp;&emsp;
          <a href="https://cn.vuejs.org/" target="_blank">Vuejs</a>&emsp;&emsp;
          <a href="http://element.eleme.io/" target="_blank">ElementUI</a>
        </div>
      </div>
    </footer>
  </div>
</template>


<script>
import axios from 'axios'
export default {
  data () {
    return {
      menuList: [
        {
          name: '最新动态',
          icon: 'el-icon-star-off',
          link: '/',
        },
        {
          name: '社交圈',
          icon: 'el-icon-mobile-phone',
          link: '/social',
        },
        {
          name: '博客列表',
          icon: 'el-icon-edit-outline',
          link: '/blog',
        },
        {
          name: '开源项目',
          icon: 'el-icon-service',
          link: '/project',
        },
      ],
      userInfo: {},
      activeLink: '最新动态'
    }
  },
  async created () {
    const { data } = await axios.get('http://yjjcode.com:1337/general')
    this.userInfo = data
  },
  computed: {
    path () {
      return this.$route.path
    }
  }
}
</script>
<style>
a {
  text-decoration: none;
  color: #1e6bb8;
}
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}
header {
  text-align: center;
  background-image: linear-gradient(120deg, #2690f9, #fc2d2d);
  padding: 5rem 6rem;
  color: rgb(255, 255, 255);
}
header a {
  margin: 0 10px;
}
aside {
  width: 256px;
}
main {
  padding: 30px;
  min-height: 400px;
}
content {
  width: 758px;
}
footer .main {
  padding: 45px 0px;
  border-top: 1px solid rgb(225, 228, 232);
  align-items: center;
}
.main {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 64rem;
  margin: 0 auto;
  font-size: 12px;
  color: #586069;
}
.btn {
  padding: 0.75rem 1rem;
  display: inline-block;
  margin-bottom: 1rem;
  color: hsla(0, 0%, 100%, 0.7);
  background-color: hsla(0, 0%, 100%, 0.08);
  border: 1px solid hsla(0, 0%, 100%, 0.2);
  border-radius: 0.3rem;
  transition: color 0.2s, background-color 0.2s, border-color 0.2s;
}
</style>
