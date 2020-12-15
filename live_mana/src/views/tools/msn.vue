<template>
<div @click="showMember= false">
   {{status}}{{ctx.id}}
   <el-container>
    <el-container>
      <el-main >
        <el-tabs  @tab-click='changeTab' v-model="activeTab"  type="card" closable @tab-remove="removeTab">
          <el-tab-pane
            v-for="item in msgTabs"
            :key="item.name"
            :label="item.title"
            :name="item.name"
            :ref='item.title'         
          >
            <el-card shadow="always" :body-style="{padding: 0}">
              <div class="chatName" @click.stop slot="header">萧忆情 <span style='cursor: pointer;'><i v-if='!showMember' @click='showMember = true' class="el-icon-arrow-down"></i><i @click="showMember = false" v-else class="el-icon-arrow-up"></i></span></div>
              <div class="chatCtx"  >
                <div v-for='(item,index) in messages' :key='index'>
                  <div class="myCtx" v-if='item.id == $store.state.user._id'>
                  <img src="@/assets/cat.jpg" alt="">
                  <div v-text="item.msg"></div>
                  </div>
                  <div class="otherCtx" v-else>
                    <img src="@/assets/cat.jpg" alt="">
                    <div v-text="item.msg"></div>
                  </div>
                </div>
                <!-- 成员框 -->
                <!-- <transition name="member"> -->
                  <div v-if="showMember" @click.stop class="members">
                    <div class="member" @click='addTab'>
                      <img src="@/assets/cat.jpg" alt="">
                      <div class="memberName">益酬勤</div>
                    </div>
                    <div class="member">
                      <img src="@/assets/cat.jpg" alt="">
                      <div class="memberName">益酬勤</div>
                    </div>
                  </div>
                <!-- </transition> -->
                
              </div>
              <div class="chatInput">
                <div class="tools">
                  <i class="el-icon-picture-outline-round"></i>
                  <i class="el-icon-folder-opened"></i>
                  <i class="el-icon-scissors"></i>
                  <i class="el-icon-chat-dot-round"></i>
                  <i class="el-icon-video-camera-solid"></i>
                </div>
                <el-input resize='none' @change='sendInput' type="textarea" v-model='ctx.msg'></el-input>
                <div><el-tag @click="send('msg')" effect="dark" type='info' >发送(回车)</el-tag></div>
              </div>
            </el-card>
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
    <el-aside  width="300px">
      <el-card >
        <header >
          <div class="img">
            <img src="@/assets/cat.jpg" alt="">
          </div>
          <div class="username">啊卓</div>
        </header>
         <el-tabs v-model="isactive" stretch>
           <el-tab-pane  name="first">
             <i slot="label" class="iconfont icon-user"></i>
             <div class="main">
               <el-collapse>
               <el-collapse-item v-for="item in myqq.friends" :key="item.groupName" >
                 <template slot="title"> 
                   {{item.groupName+"("+item.friend.length+")"}}
                 </template>
                 <div class="friend" v-for="item1 in item.friend" :key="item1.id" @click="addTab(item1,0)">
                   <div class="img">
                     <img src="@/assets/cat.jpg" alt="">
                   </div>
                   <div class="username">{{item1.nickname}}</div>
                   <el-badge  :max='99'/>
                 </div>
               </el-collapse-item>
               </el-collapse> 
             </div>         
           </el-tab-pane>
           <el-tab-pane  name="second">
             <i slot="label" class="iconfont icon-qunliao"></i>
             <div class="main">s</div> 
           </el-tab-pane>
           <el-tab-pane  name="third">
             <i slot="label" class="iconfont icon-xinxi"></i>
             <div class="main">kk</div> 
           </el-tab-pane>
        </el-tabs>
        <!-- 自身好友或群聊main -->
        <main v-if='isactive === null'>
          <el-card>
            无搜索内容
          </el-card>
        </main>
        <!-- 添加好友或群聊main -->
        <main v-if='isactive === ""'>
          <el-card>
            <el-input placeholder='可通过好友姓名或手机或群聊名称搜索' v-model='searchFdOrGpCtIp'></el-input>
            <el-button type='success' @click='findOne'>搜索</el-button>
            <div v-if="findone != null">
              <el-card>
                <img src="@/assets/cat.jpg" alt="">
                <span>{{findone.nickName}}</span>
                <el-tag @click='applyFriend'  effect="dark" type='info'>添加</el-tag>
              </el-card>
            </div>
          </el-card>
        </main>
        <footer>
          <div v-if="!isSearch">
            <i @click='isSearch = true' class="iconfont icon-chazhao"></i>
            <el-badge :hidden='myqq.notices.length == 0'  :value='myqq.notices|newNotices'>
               <i @click='dialogMessage = true' class="iconfont icon-shengyin"></i>
            </el-badge>
            <i @click='isactive =""' class="iconfont icon-tianjia"></i>
            <i class="iconfont icon-kefu"></i>
            <i class="iconfont icon-icon"></i>
          </div>
          <div v-else>
            <el-input @input='search' v-model="searchCtx" placeholder="请输入需要查找的好友或群聊" >
               <i class="el-icon-error" @click="isSearch=false;isactive='first';searchCtx=''" slot="append" ></i>
            </el-input>
          </div>
        </footer>
        <!-- 消息通知 -->
        <el-dialog
         v-drag
         :close-on-click-modal="false"  
         :visible.sync="dialogMessage"
         width="50%"
        >
          <div class="dialog_header" slot="title">消息通知</div>  
           <div v-for='item in myqq.notices' :key='item.ctx'>
             <div v-if="item.type=='add'">
               <i class="iconfont icon-shengyin"></i>
               <span>{{item.msg}}</span>
               <div>
                 <el-button type='success' @click='acceptFriend(item)'>同意</el-button>
                 <el-button type='danger' @click='rejectFriend'>拒绝</el-button>
               </div>
             </div>
             <div v-else-if="item.type=='notice'">aa</div>
           </div> 
        </el-dialog>

      </el-card>
    </el-aside>
</el-container>
</div>
 
</template>
<script>
import {getMyQQ,findOne,acceptFriend} from '@/api/users'
export default {
  filters:{
    newNotices(msg){
     let notices = msg.filter(item => {
        if(item.isRead == false){
          return true
        }
      })
      return notices.length
    }
  },
  data(){   
    return{
      socket: null,   
      messages: [],  //当前显示的聊天窗的显示信息
      status: null, //判断当前socket连接状态
      ctx: {         //发送的信息对象
        id: null,  //私聊或群聊id
        type:'',  //判断请求是登录还是发送信息
        to: '',   //  发送至 的id
        myself:{  //无论私聊或群聊都要添加自己的信息
          id: this.$store.state.user._id,
          nickName: this.$store.state.user.nickName,
          myImg: '测试图片地址'
        },
        msg: '' //发送的信息内容
      },
      isactive:'first', //默认显示第一列
      isSearch: false, //是否点击了搜索图标
      searchCtx: '', // 搜索内容
      msgTabs: [],     //当前打开的聊天窗
      activeTab: '1',//当前显示的聊天窗的name
      showMember: false, // 是否展现群聊成员
      myqq:{
        friends:[{
          groupName: '我的好友',
          friend: []
        }],
        groupChats:[{
          id: '',
          name:''
        }],
        notices:[]
      },
      searchFdOrGpCtIp: '', //搜索好友或群聊的输入框内容
      findone:null,
      dialogMessage: false
    }
  },
  mounted(){
    this.openWs() //连接服务端socket
    this.getMyQQ() //获取我的好友群聊
  },
  methods: {
    async findOne(){
      if(this.searchFdOrGpCtIp.trim != ''){
       const res = await findOne(this.searchFdOrGpCtIp)
        console.log(res.result)
        this.findone = {
          id: res.result._id,
          nickName: res.result.nickname,
          img: res.result.img
        }
      }else{
        alert('请输入搜索内容')
      }
    },
    async getMyQQ(){
      const res = await getMyQQ({userId:this.$store.state.user._id,populate:[{
          path:'friends.friend',   //对应mongodb集合中对应字段名称
          select: {_id: 1,nickname:1,img:1},  //填充关联集合中哪个字段 也可以用数组对象形式 [{roleName: 1}]
          model: 'User',    //关联哪个集合, 没有指定就会使用Schema的ref
          // match: {} ,    //查询条件
          //options    //  排序,条数限制等等同 mongodb中 find()
        }]})
      this.myqq.friends = res.result.friends
      this.myqq.groupChats = res.result.groupChats
      this.myqq.notices = res.result.notices
      console.log(res)
    },
    // 点击了侧标栏顶部工具栏第一个搜索自身好友群聊的图标
    search(e){
      this.isactive = null
    },
    // 删除聊天Tab
    removeTab(tabName){
      // 只用于删除的tab高亮时，切换高亮tab
        if (this.activeTab === tabName) {
          this.msgTabs.forEach((tab, index) => {
            if (tab.name === tabName) {
              let nextTab =  this.msgTabs[index + 1] ||  this.msgTabs[index - 1];
              if (nextTab) {
                this.activeTab = nextTab.name;
              }
            }
          });
        }
        // 过滤掉被删除的tab
        this.msgTabs = this.msgTabs.filter(tab => tab.name !== tabName);
    },
    openWs(){
        var that = this
    if(!window.WebSocket){
      window.WebSocket = window.MozWebSocket;
    }
    if(window.WebSocket){
      this.socket = new WebSocket("ws://localhost:8225/ws")
      this.socket.onmessage = function(event){
        let data = JSON.parse(event.data)
        if(data.type&&data.type == 'add'){
          that.myqq.notices.push(data)
        }else if(data.type&&data.type == 'msg'){
          that.messages.push(JSON.parse(event.data)) 
        }else if(data.type == 'unRead'){
          console.log(data)
        }
      };
      this.socket.onopen = function(event){
       that.status = '连接开启'
       that.ctx.type= 'notice'
       console.log(that.ctx)
       that.ctx.id = that.$store.state.user._id
       that.send();
       
      } 
      this.socket.onclose = function(event){
         that.status = '连接被关闭'
      }
    } else {
        alert('你的浏览器不支持WebSocket!')
      }
    },
      // 发送聊天内容 或登录
    send(type){
      if(type){
    this.ctx.type = type
      }
      if(!window.WebSocket){
        alert('你的浏览器不支持WebSocket!')
        return;
      }
      if(this.socket.readyState == WebSocket.OPEN){
        if(this.ctx.msg.trim() == '' &&type=='msg'){
          alert('发送消息不能为空')
        }else{

          this.socket.send(JSON.stringify(this.ctx))
        }  
      }else{
        alert('连接没有开启')
      }
      this.ctx.msg = ''
    },
    changeTab(e){
      this.msgTabs.some(item => {
        if(item.name ==this.activeTab){
          if(item.type == 0){ //私聊
            this.ctx.id = this.$store.state.user._id+ '-'+item.name
            this.ctx.to = item.name+ '-'+this.$store.state.user._id
          }else{   //群聊
            this.ctx.id = item.name   
            this.ctx.to = item.name     
          }
          return true
        }
      })
      this.send('login')

    },
    addTab(item,type){
      this.msgTabs.push({
         type: 0,
         title: item.nickname,
         name: item._id
      })
      this.activeTab = item._id
      this.changeTab()  
    },
    sendInput(){

    },
    // 申请添加好友
    applyFriend(){
        this.ctx.id = this.$store.state.user._id
        this.ctx.type = 'notice'
        this.ctx.myself.type='add'
        this.ctx.to = this.findone.id
        this.ctx.msg = this.findone.nickName+ '请求添加你为好友'
        this.send()
        this.$messageBox.alert('请求已发送','提示',{
          confirmButtonText: '确定'
        })
        this.findone = null;
        this.isactive = 'first'
    },
    // 同意添加好友
    async acceptFriend(item){
      const res = await acceptFriend({
        toid:item.id,
        tonickName:item.nickName,
        toimg:item.myImg,
        ...this.ctx.myself}) 
      console.log(res)
    },
    // 拒绝添加好友
   rejectFriend(){

    }
  },
  beforeDestory(){
    this.socket.onclose()
  }
}
</script>
<style lang='less' scoped>
.el-container{
  .el-container{
    .el-header{}
    .el-main{
      /deep/.el-tabs__content{
        box-shadow:  0 0 6px 8px #e2e0e0;
        margin: 0 20px;
      }
      .el-card{
        background: url('../../assets/wsbg.jpg');
        // 聊天框 对方名称
       /deep/.el-card__header{
          padding: 0!important;
          background-color: #eee;     
        }
        .chatName{
          padding-left: 20px;
          line-height: 40px;
        }
        .chatCtx{
          height: 45vh;
          overflow-y: scroll;
          padding: 10px 20px;
          background-color: #fff;
          opacity: 0.95;
          position: relative;
          overflow-x: hidden;
          .otherCtx{
              opacity: 1;
            &::after{
              content:'';
              display: block;
              height:0;
               clear:both;
              visibility: hidden;
            }
            margin-bottom: 10px;
            
            img{
               float: left;
               width:40px;
               height:40px;
               margin-right: 10px;
            }
            &>div{
               float: left;
               width: 60%;
               background-color: #9eea6a;
               padding: 8px ;
               line-height: 24px;
               word-wrap:break-word;
               position: relative;
               border-radius: 5px;
               &::before{
                 content:'';
                 position: absolute;
                 top: 15px;
                 left:-11px;
                 border-top: 6px solid transparent;
                 border-right: 6px solid #9eea6a;
                 border-bottom: 6px solid transparent;
                 border-left: 6px solid transparent;
               }
            };
          }
          .myCtx{
            &::after{
              content:'';
              display: block;
              height:0;
              clear:both;
              visibility: hidden;
            }
            margin-bottom: 10px;
            img{
               float: right;
               width:40px;
               height:40px;
               
            }
            &>div{
               float: right;
               margin-right: 10px;
               width: 60%;
               background-color: #9eea6a;
               padding: 8px ;
               line-height: 24px;
               word-wrap:break-word;
               position: relative;
               border-radius: 5px;
                &::after{
                 content:'';
                 position: absolute;
                 top: 15px;
                 right:-11px;
                 border-top: 6px solid transparent;
                 border-right: 6px solid transparent;
                 border-bottom: 6px solid transparent;
                 border-left: 6px solid #9eea6a;
               }
            };
          }
          .members{
            position: absolute;
            top:0;
            left:0;
            background-color: #eee;
            width: 100%;
            height: 30vh;
            overflow-y:scroll;
            
            display: flex;
            flex-wrap: wrap;
            padding: 6px;
            .member{
              margin:15px 20px 0;
              text-align: center;
              img{
                width: 60px;
                height:60px;
                border-radius: 50px;
              }
            }
          }
        }
        .chatInput{
          height: 140px;
          border-top: 1px solid #000;
          background-color: #fff;
          .tools{
            height: 30px;
            background-color: #eee;
            display: flex;
            align-items: center;
            padding: 0 10px;
            i{
              font-size: 20px;
              margin-right: 10px;
              cursor: pointer;
            }
          }
          /deep/.el-textarea__inner{
            border: none;
          }
          &>div{
            padding: 3px 20px 0;
            text-align: right;
            .el-tag{
              cursor: pointer;
              &:active{
                box-shadow: 0 0 4px 4px #666565;
              }
            }
          }
        }
      }
    }
    .el-aside{
      margin-top: 20px;
      &>.el-card{
        background: url('../../assets/wsbg.jpg');
        header{
          display: flex;
          display: flex;
            justify-content: center;
            align-items: center;
          .img{
            flex:1;
            img{
              width: 50px;
              height: 50px;
              border-radius: 50px;
            }
          }
          .username{
            flex:3
          }
        }
        .friend{
          padding: 5px 10px ;
          display: flex;
          align-items: center;
          .img{
            margin-right: 10px;
            img{
              width: 34px;
              height: 34px;
              border-radius: 50px;
              vertical-align: middle;
            }
          }
          .username{
            font-size: 16px;
          }
          &:hover{
            background-color: #c5c2c3;
          }
        }
        .main{
          height: 60vh;
          scrollbar-width: none; /* firefox */
          -ms-overflow-style: none; /* IE 10+ */
          overflow-x: hidden;
          overflow-y: scroll;
        }
        /deep/.el-tabs__content{
          cursor: pointer;
          margin: -15px -20px;
          opacity: 0.95;
          .el-collapse-item__header{
            border:none;
            padding: 0 10px;
            height: 40px;
            line-height: 40px;
          } 
        }
        main{
          margin:15px -20px -14px;
          opacity: 0.95;
          height:60vh;
          background-color: #fff;
          .el-card{
            height: 100%;
            /deep/.el-input__inner {
                  padding-right: 60px;
                  background: rgba(245, 245, 245, 1);
                  color: #000000;
                  background: #dddddd;
                  &:focus{
                    background: #dddddd;
                  } 
                   &::placeholder {
                      color:rgb(80, 78, 78);
                  }
                  &::-webkit-input-placeholder {
                      /* WebKit browsers 适配谷歌 */
                      color: rgb(80, 78, 78);
                  }
                  &:-moz-placeholder {
                      /* Mozilla Firefox 4 to 18 适配火狐 */
                      color: rgb(80, 78, 78);
                  }
                  &::-moz-placeholder {
                      /* Mozilla Firefox 19+ 适配火狐 */
                      color: rgb(80, 78, 78);
                  }
                  &:-ms-input-placeholder {
                      /* Internet Explorer 10+  适配ie*/
                      color: rgb(80, 78, 78);
                  }        
             }
             .el-button{
               margin-top: 10px;
             }
             .el-card{
               margin-top: 10px;

               img{
                 width: 40px;
                 height: 40px;
                 border-radius: 50px;
                 vertical-align: middle;
                 margin-right: 10px; 
                }
                span{
                  flex:1;
                }
                .el-tag{
                  float: right;
                  &:active{
                    box-shadow: 0 0 6px 6px rgb(121, 120, 120);
                  }
                }

             }
            
          }
        }
        footer{
          background-color: #f6f6f6;     
          height:40px;
          margin:14px -20px -20px;
          &>div{
            height: 100%;
             display: flex;
             align-items: center;
            i{
               flex: 1;
               text-align: center;
               font-size: 24px;
               cursor: pointer;
               &:hover{
                 background-color:  #cecccc ;
               }
            }
            /deep/.el-input__inner {
                  padding-right: 60px;
                  background: rgba(245, 245, 245, 1);
                  color: #000000;
                  background: #dddddd;
                  &:focus{
                    background: #dddddd;
                  } 
                   &::placeholder {
                      color:rgb(80, 78, 78);
                  }
                  &::-webkit-input-placeholder {
                      /* WebKit browsers 适配谷歌 */
                      color: rgb(80, 78, 78);
                  }
                  &:-moz-placeholder {
                      /* Mozilla Firefox 4 to 18 适配火狐 */
                      color: rgb(80, 78, 78);
                  }
                  &::-moz-placeholder {
                      /* Mozilla Firefox 19+ 适配火狐 */
                      color: rgb(80, 78, 78);
                  }
                  &:-ms-input-placeholder {
                      /* Internet Explorer 10+  适配ie*/
                      color: rgb(80, 78, 78);
                  }        
             }
             /deep/.el-input-group__append{
               padding-right: 10px;
               color:#000000;
               cursor: pointer;
               font-size: 24px;
               background-color: #dddddd ;
               .el-icon-error{
                &:hover{
                  background-color: #dddddd ;
                }
               }
             }

          }
        }
      }
    }
  }
}
.el-dialog{
  line-height: 40px;
 .iconfont{
    font-size: 24px;
    vertical-align: middle;
    color: rgb(83, 127, 231);
  }
  span{
    line-height: 40px;
    font-size: 16px;
  }
}

</style>