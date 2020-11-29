<template>
  <div class="position">
    <div>
      <router-link to="/" style="padding-right: 10px">首页</router-link>
      当前位置
      {{ position[0].title }}/
      <router-link v-if="first_path != null" :to="first_path">{{
        position[1].title
      }}</router-link>
      <router-link v-if="second_path != null" :to="second_path">{{
        position[1].title
      }}</router-link>
      <!-- <router-link :to="position"></router-link> -->
    </div>
  </div>
</template>
<script>
export default {
  props: {
    asideList: {
      type: Array
    },
    userInfo: {
      type: Object
    }
  },
  data() {
    return {
      first_path: null,
      second_path: null,
      third_path: null
    }
  },
  mounted() {
    console.log(this.$route.path)
    const path = this.$route.path;
    this.first_path = this.$route.path.split('/')[1];
    if (path.length == 3) {
      this.second_path = this.$route.path.split('/')[3];
    }
    if (path.length == 4) {
      this.third_path = this.$route.path.split('/')[3];

    }

  },
  computed: {
    position: function () {
      const arr = [{
        title: ''
      }, {
        title: '',
        to: '/'
      }]

      this.asideList.some((v, i) => {
        const istrue = v.children.some((v1, i1) => {

          if (v1.to == this.$route.path) {
            arr[1] = i1;
            return true;
          }

        })
        if (istrue == true) {
          arr[0] = this.asideList[i];
          arr[1] = this.asideList[i].children[arr[1]]

          return true;
        }

      })

      return arr;
    }
  }

}
</script>
<style lang='less' scoped>
.position {
  box-sizing: border-box;
  background-color: #fff;
  width: 100%;
  height: 64px;
  line-height: 64px;
  padding: 0 16px;
  border-bottom: 2px solid #eee;
  display: flex;
  justify-content: space-between;
  z-index: 100;
  font-size: 16px;
}
</style>