<template>
  <el-card shadow="always">
    <div class="header" slot="header">
      <div class="fw">用户列表</div>
    </div>
    <el-table border :data="users">
      <el-table-column prop="id" label="用户id" width="180"></el-table-column>
      <el-table-column
        prop="nickname"
        label="昵称"
        width="180"
      ></el-table-column>
      <el-table-column
        prop="username"
        label="账号"
        width="180"
      ></el-table-column>
      <el-table-column prop="email" label="邮箱" width="180"></el-table-column>
      <el-table-column
        prop="updatetime"
        label="最近登录"
        width="180"
      ></el-table-column>
    </el-table>
  </el-card>
</template>
<script>
export default {
  data() {
    return {
      users: [],
      count: 0
    }
  },
  async mounted() {
    const res = await this.$api.usermana.userList({
      page: 1,
      pageSize: 11,
      sort: {
        '_id': -1
      },
      by: {
        username: '/^13/'
      }
    })

    if (res.status == 200) {
      this.users = res.results.data
      this.count = res.results.count
    }
  }
}
</script>
<style lang='less' scoped>
.el-card {
  margin: 20px;
  min-height: calc(100vh - 124px);
  .header {
    // height: 40px;
    .fw {
      font-size: 18px;
    }
  }
}
</style>