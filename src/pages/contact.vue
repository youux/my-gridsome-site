<template>
  <Layout>
    <el-form label-position="right" label-width="80px" :model="formLabel">
      <el-form-item label="主题">
        <el-input v-model="formLabel.title"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input type="email" v-model="formLabel.email"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <el-input type="textarea" resize="none" :rows="10" v-model="formLabel.content"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click.prevent="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </Layout>
</template>

<script>
import axios from 'axios'
export default {
  name: 'contact',
  metaInfo: {
    title: '联系我'
  },
  data () {
    return {
      formLabel: {
        title: '',
        email: '',
        content: ''
      }
    }
  },
  methods: {
    async onSubmit () {
      let isBool = true
      for (const key in this.formLabel) {
        if (this.formLabel.hasOwnProperty(key)) {
          const element = this.formLabel[key]
          if (!element) {
            isBool = false
          }
        }
      }
      if (isBool) {
        try {
          await axios({
            method: "POST",
            url: 'https://yjjcode.com/contacts',
            data: this.formLabel
          })
          this.$message({ message: '发送成功', type: 'success' })
          this.formLabel = {
            title: '',
            email: '',
            content: ''
          }
        } catch (error) {
          this.$message({ message: '发送失败', type: 'error' })
        }
      }
    }
  },
}
</script>

<style scoped>
</style>
