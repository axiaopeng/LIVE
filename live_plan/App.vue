<script>
export default {
  globalData: {
    userInfo: null
  },
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')

  }
}
</script>

<style>
	
	@import url('https://at.alicdn.com/t/font_1891178_jf835x8s9c.css');
page{
	margin-top: var(--status-bar-height);
}	
/*每个页面公共css */
.color-yw {
  color: #ff8547;
}
.color-be {
  color: #4688fa;
}
.color-rd {
  color: #ff4759;
}
</style>
