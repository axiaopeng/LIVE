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
                    <div class="member">
                      <img src="@/assets/cat.jpg" alt="">
                      <div class="memberName">益酬勤</div>
                    </div>
                    <div class="member">
                      <img src="@/assets/cat.jpg" alt="">
                      <div class="memberName">益酬勤</div>
                    </div>
                    <div class="member">
                      <img src="@/assets/cat.jpg" alt="">
                      <div class="memberName">益酬勤</div>
                    </div>
                    <div class="member">
                      <img src="@/assets/cat.jpg" alt="">
                      <div class="memberName">益酬勤</div>
                    </div>
                    <div class="member">
                      <img src="@/assets/cat.jpg" alt="">
                      <div class="memberName">益酬勤</div>
                    </div>
                    <div class="member">
                      <img src="@/assets/cat.jpg" alt="">
                      <div class="memberName">益酬勤</div>
                    </div>
                    <div class="member">
                      <img src="@/assets/cat.jpg" alt="">
                      <div class="memberName">益酬勤</div>
                    </div>
                    <div class="member">
                      <img src="@/assets/cat.jpg" alt="">
                      <div class="memberName">益酬勤</div>
                    </div>
                    <div class="member">
                      <img src="@/assets/cat.jpg" alt="">
                      <div class="memberName">益酬勤</div>
                    </div>
                    <div class="member">
                      <img src="@/assets/cat.jpg" alt="">
                      <div class="memberName">益酬勤</div>
                    </div>
                    <div class="member">
                      <img src="@/assets/cat.jpg" alt="">
                      <div class="memberName">益酬勤</div>
                    </div>
                    <div class="member">
                      <img src="@/assets/cat.jpg" alt="">
                      <div class="memberName">益酬勤</div>
                    </div>
                    <div class="member">
                      <img src="@/assets/cat.jpg" alt="">
                      <div class="memberName">益酬勤</div>
                    </div>
                    <div class="member">
                      <img src="@/assets/cat.jpg" alt="">
                      <div class="memberName">益酬勤</div>
                    </div>
                    <div class="member">
                      <img src="@/assets/cat.jpg" alt="">
                      <div class="memberName">益酬勤</div>
                    </div>
                    <div class="member">
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
                <div><el-tag @click="send" effect="dark" type='info' >发送(回车)</el-tag></div>
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
         <el-tabs v-model='isactive' stretch>
           <el-tab-pane  name="first">
             <i slot="label" class="iconfont icon-user"></i>
             <div class="main">
               <el-collapse>
               <el-collapse-item >
                 <template slot="title"> 
                   列表1
                 </template>
                 <div class="friend" @click="addTab('item',0)">
                   <div class="img">
                     <img src="@/assets/cat.jpg" alt="">
                   </div>
                   <div class="username">啊卓</div>
                 </div>
                 <div class="friend" @click='addTab'>
                   <div class="img">
                     <img src="@/assets/cat.jpg" alt="">
                   </div>
                   <div class="username">啊卓</div>
                 </div>
                 <div class="friend" @click='addTab'>
                   <div class="img">
                     <img src="@/assets/cat.jpg" alt="">
                   </div>
                   <div class="username">啊卓</div>
                 </div>
               </el-collapse-item>
               <el-collapse-item>
                 <template slot="title"> 
                   列表2
                 </template>
                 <div>sdfsdfsdf</div>
                 <div>sdfsdfsdf</div>
                 <div>sdfsdfsdf</div>
               </el-collapse-item>
               <el-collapse-item>
                 <template slot="title"> 
                   列表3
                 </template>
                 <div>sdfsdfsdf</div>
                 <div>sdfsdfsdf</div>
                 <div>sdfsdfsdf</div>
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
        <main v-if='isactive === null'>
          <el-card>
            无搜索内容
          </el-card>
        </main>
        <footer>
          <div v-if="!isSearch">
            <i @click='isSearch = true' class="iconfont icon-chazhao"></i>
            <i class="iconfont icon-shengyin"></i>
            <i class="iconfont icon-tianjia"></i>
            <i class="iconfont icon-kefu"></i>
            <i class="iconfont icon-icon"></i>
          </div>
          <div v-else>
            <el-input @input='search' v-model="searchCtx" placeholder="请输入需要查找的好友或群聊" >
               <i class="el-icon-error" @click="isSearch=false;isactive='first';searchCtx=''" slot="append" ></i>
            </el-input>
          </div>
        </footer>
        <!-- 消息通知
        <el-dialog
         v-drag
         :close-on-click-modal="false"  
         :visible.sync="dialogMessage"
         width="30%"
        >
          <div class="dialog_header" slot="title">查看好友或群聊</div>    
        </el-dialog>
        搜索好友或群聊
        <el-dialog
         v-drag
         :close-on-click-modal="false"  
         :visible.sync="dialogFriend"
         width="30%"
        >
        <div class="dialog_header" slot="title">查看好友或群聊</div>    
      </el-dialog> -->
      </el-card>
    </el-aside>
</el-container>
</div>
 
</template>
<script>
export default {
  data(){   
    return{
      socket: null,
      messages: [],
      status: null,
      ctx: {
        id: null,  //私聊或群聊id
        login: null,  //判断请求是登录还是发送信息
        to: null,   //  发送至 的id
        myself:{  //无论私聊或群聊都要添加自己的信息
          id: this.$store.state.user._id,
          myImg: null
        },
        msg: '' //发送的信息
      },
      isactive:'first', //默认显示第一列
      isSearch: false, //是否点击了搜索图标
      searchCtx: '', // 搜索内容
      msgTabs: [
        { id: '5fccf9339e7edc2d54a3c95c',
          type: 0,
          title: 'Tab 1', //对方的名字
          name: '1',      //该字段不能修改名称,值为唯一标识
          type:'',  //用来区别打开的类型
          content: 'Tab 1 content'
        }, {
          id: '5fc85e78e24ba247040a096e',
          type: 0,
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }
      ],
      activeTab: '1',
      showMember: false, // 是否展现成员
    }
  },
  mounted(){
    this.openWs()
  },
  methods: {

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
        that.messages.push(JSON.parse(event.data)) 
        console.log(JSON.parse(event.data))
      };
      this.socket.onopen = function(event){
       that.status = '连接开启'
      } 
      this.socket.onclose = function(event){
         that.status = '连接被关闭'
      }
    } else {
        alert('你的浏览器不支持WebSocket!')
      }
    },
    send(){
      if(!window.WebSocket){
        alert('你的浏览器不支持WebSocket!')
        return;
      }
      if(this.socket.readyState == WebSocket.OPEN){
        if(this.ctx.msg.trim() == '' &&this.ctx.login==false){
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
      console.log('触发')
      this.ctx.login = true
      this.msgTabs.some(item => {
        if(item.name ==this.activeTab){
          if(item.type == 0){ //私聊
            this.ctx.id = this.$store.state.user._id+ '-'+item.id
            this.ctx.to = item.id+ '-'+this.$store.state.user._id
         }else{   //群聊
            this.ctx.id = item.id   
            this.ctx.to = item.id     
          }
          return true
        }
      })
      console.log(this.ctx.id)
      this.send()
      this.ctx.login =false
    },
    addTab(item,type){
      this.msgTabs.push({
         id: '222',
         type: 0,
         title: 'Tab 3',
         name: '3',
         content: 'Tab 3 content'
      })
      this.activeTab = '3'
      this.changeTab()
    
     
     
    },
    // 发送聊天内容
    sendInput(){

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
</style>