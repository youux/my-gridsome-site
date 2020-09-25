<template>
  <div>
    <!-- {{$static.metadata.siteName}} -->
    <header>
      <h1>Laziji</h1>
      <h2>欢迎来到辣子鸡的个人博客</h2>
      <a href="https://github.com/GitHub-youux" target="_blank" class="btn">GitHub主页</a>
      <a href="https://github.com/GitHub-youux/my-gridsome-site" target="_blank" class="btn">博客源码</a>
    </header>

    <main class="main">
      <aside>
        <el-menu :default-active="activeLink">
          <el-menu-item v-for="(item,index) in menuList" :key="index" :index="index"><i :class="item.icon"></i>{{item.name}}</el-menu-item>
        </el-menu>
      </aside>
      <content>
        <slot />
      </content>
    </main>

    <footer>
      <div class="main">
        <div>
          © 2020 GitHub-youux&emsp;&emsp;
          <a href="https://github.com/GitHub-youux" target="_blank">Profile</a>&emsp;&emsp;
          <a href="https://github.com/GitHub-youux/my-gridsome-site" target="_blank">my-gridsome-site</a>
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

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data () {
    return {
      menuList: [
        {
          name: '最新动态',
          icon: 'el-icon-star-off'
        },
        {
          name: '社交圈',
          icon: 'el-icon-mobile-phone'
        },
        {
          name: '博客列表',
          icon: 'el-icon-edit-outline'
        },
        {
          name: '开源项目',
          icon: 'el-icon-service'
        },
      ],
      activeLink: 0
    }
  },
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
