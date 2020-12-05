<template>
  <div class="login">
    <div class="container">
      <div class="mana-title">ERP后台管理系统v1.01</div>
      <transition  mode="out-in">
         <el-form v-if="login"  ref="form" :status-icon='true' :model='form'  key="box1" :rules="rules" :inline-message='true'>
            <el-form-item prop='username' >
              <el-input v-model="form.username" placeholder='PHONE'></el-input>
            </el-form-item>
            <el-form-item  prop='password'>
              <el-input v-model="form.password" show-password placeholder='PASSWORD' type='password'></el-input>
            </el-form-item>
            <el-form-item>
              <el-row :gutter='20'></el-row>
              <el-col :span='9' :offset='3'><el-button type='success' @click='Login("form")'>登录</el-button></el-col>
              <el-col :span='9'><el-button type='info' @click='login=!login'>注册</el-button></el-col>
            </el-form-item>
      </el-form>
      <el-form v-if='!login' ref="form1" :model='form'  key="box2">
            <el-form-item>
              <div>注册</div>
            </el-form-item>
            <el-form-item >
              <el-input v-model="form.username" placeholder='USERNAME'></el-input>
            </el-form-item>
            <el-form-item >
              <el-input v-model="form.password" show-password placeholder='PASSWORD' type='password'></el-input>
            </el-form-item>
            <el-form-item>
              <el-row :gutter='20'></el-row>
              <el-col :span='9' :offset='3'><el-button type='success'>登录</el-button></el-col>
              <el-col :span='9'><el-button type='info' @click='login=!login'>注册</el-button></el-col>
            </el-form-item>
      </el-form>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      login: true,
      form:{
        username:'',
        password:''
      },
      rules:{
        username: [
          { required: true, message:'请输入手机号', trigger:'blur'},
          { pattern:/^0?(13[0-9]|14[0-9]|15[0-9]|16[0-9]|17[0-9]|18[0-9]|19[0-9])[0-9]{8}$/,message:'手机格式不正确',trigger: 'blur'},
          { min: 4,max:20, message:'长度在4到20个字符', trigger:'blur'}
        ],
        password: [
          { required: true, message: '请输入密码', trigger:'blur'},
          {min: 6, message: '长度不小于6位'}
        ]
      }
    }
  },
  methods:{
    Login(formName){
      this.$refs[formName].validate( async (valid) => {
        if(valid){
          // this.$loading.service()
          try{
            await this.$store.dispatch('LoginByUsername', this.form)
            // this.loading.close()
            this.$message({
              type: 'success',
              message: '登录成功'
            })
            this.$router.push({path: this.redirect ||'/'})
          }catch(error){
            console.log(error)
            // if(error.status===400){
            //   this.$message({
            //   type: 'error',
            //   message: error.error
            // })
            // }else{  //其他未知错误
              this.$message({
              type: 'error',
              message: '登录失败'
            })
            // }
           
          }     
          // this.loading.close()

        }
      })
    }
  }
}
</script>
<style lang='less' scoped>
.login {
  width :100vw;
  height: 100vh;
  background-color: rgb(121, 138, 194);
  overflow: hidden;
  .container{
    width: 400px;
    margin: 180px auto;
    color: #f5f5f5;
    .mana-title{
      width: 100%;
      font-size: 40px;
      text-align: center;
    }
    .el-form{

      width: 320px;
      padding-top: 30px;
      margin-left: 50%;
      transform: translateX(-50%);
      .el-form-item{
        .el-button{
          padding-left: 40px;
          padding-right: 40px;
        }
      }
    }
  }
}
.v-enter{
  opacity: 0;
}
.v-enter-to{
  opacity: 1;
}
.v-leave-to{
  opacity: 0;
}
.v-enter-active,.v-leave-active{
    transition: all .2s;
}
// 修改input > placeholder 样式
/deep/.el-input__inner {
    &::placeholder {
        color: #999;
        font-weight: bold;
    }

    &::-webkit-input-placeholder {
        /* WebKit browsers 适配谷歌 */
        color: #999;
        font-weight: bold;
    }

    &:-moz-placeholder {
        /* Mozilla Firefox 4 to 18 适配火狐 */
        color: #999;
        font-weight: bold;
    }

    &::-moz-placeholder {
        /* Mozilla Firefox 19+ 适配火狐 */
        color: #999;
      font-weight: bold;
    }

    &:-ms-input-placeholder {
        /* Internet Explorer 10+  适配ie*/
        color: #999;
        font-weight: bold;
    }
}
//修改表单校验样式
  /deep/.el-form-item__error {
    position: absolute !important;
    top:0;
    text-align: center;
    background-color: rgb(204, 131, 131);
    width: 120px;
    height: 38px;
    border-radius: 2px;
    font-size: 12px;
    color: #fff;
    line-height: 38px;
    z-index: 99;
  }
</style>