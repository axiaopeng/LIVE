(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e61f936"],{"159b":function(e,t,r){var n=r("da84"),a=r("fdbc"),o=r("17c2"),i=r("9112");for(var s in a){var u=n[s],c=u&&u.prototype;if(c&&c.forEach!==o)try{i(c,"forEach",o)}catch(l){c.forEach=o}}},"17c2":function(e,t,r){"use strict";var n=r("b727").forEach,a=r("a640"),o=r("ae40"),i=a("forEach"),s=o("forEach");e.exports=i&&s?[].forEach:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}},2612:function(e,t,r){"use strict";r.d(t,"c",(function(){return a})),r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return i}));var n=r("b775");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["a"])({url:"/user/regi_u",method:"get",params:e})}function o(e){return Object(n["a"])({url:"/user/regi_u",method:"post",data:e})}function i(e){return Object(n["a"])({url:"/user/regi_u",method:"put",data:e})}},"3bbe":function(e,t,r){var n=r("861d");e.exports=function(e){if(!n(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype");return e}},"3ca3":function(e,t,r){"use strict";var n=r("6547").charAt,a=r("69f3"),o=r("7dd0"),i="String Iterator",s=a.set,u=a.getterFor(i);o(String,"String",(function(e){s(this,{type:i,string:String(e),index:0})}),(function(){var e,t=u(this),r=t.string,a=t.index;return a>=r.length?{value:void 0,done:!0}:(e=n(r,a),t.index+=e.length,{value:e,done:!1})}))},"3f8c":function(e,t){e.exports={}},4160:function(e,t,r){"use strict";var n=r("23e7"),a=r("17c2");n({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},"7c7b":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-main",[r("el-card",[r("el-button",{attrs:{icon:"el-icon-circle-plus-outline",type:"primary"},on:{click:e.addDialog}},[e._v("添加")]),r("el-dialog",{directives:[{name:"drag",rawName:"v-drag"}],attrs:{"close-on-click-modal":!1,visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("div",{staticClass:"dialog_header",attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.edit?"编辑员工":"添加新员工"))]),r("el-form",{ref:"userForm",attrs:{"status-icon":"",model:e.userForm,"label-width":"80px",rules:e.userRules}},[r("el-form-item",{attrs:{label:"员工账号",prop:"username"}},[r("el-input",{model:{value:e.userForm.username,callback:function(t){e.$set(e.userForm,"username",t)},expression:"userForm.username"}})],1),e.edit?e._e():r("el-form-item",{attrs:{label:"初始密码",prop:"password"}},[r("el-input",{model:{value:e.userForm.password,callback:function(t){e.$set(e.userForm,"password",t)},expression:"userForm.password"}})],1),r("el-form-item",{attrs:{label:"员工名称",prop:"nickname"}},[r("el-input",{attrs:{type:"text"},model:{value:e.userForm.nickname,callback:function(t){e.$set(e.userForm,"nickname",t)},expression:"userForm.nickname"}})],1),r("el-form-item",{attrs:{label:"分配角色",prop:"roles"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{multiple:"","collapse-tags":"",placeholder:"请选择角色"},on:{change:e.show},model:{value:e.userForm.roles,callback:function(t){e.$set(e.userForm,"roles",t)},expression:"userForm.roles"}},e._l(e.roles,(function(e){return r("el-option",{key:e._id,attrs:{label:e.roleName,value:e._id}})})),1)],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e.edit?r("el-button",{attrs:{type:"primary"},on:{click:e.editUser}},[e._v("确定修改")]):r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.addUser("userForm")}}},[e._v("确 定")])],1)],1),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{stripe:"","element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)","header-cell-style":{"background-color":"#eeeeee","text-align":"center","font-size":"18px","border-right":"1px solid #b8b8b8"},border:"",data:e.tableData.data,"cell-style":{"text-align":"center"}},on:{"selection-change":e.handleSelectionChange}},[r("el-table-column",{attrs:{prop:"_id",label:"用户id","min-width":"100"}}),r("el-table-column",{attrs:{prop:"username",label:"账号","min-width":"100"}}),r("el-table-column",{attrs:{prop:"nickname",label:"员工","min-width":"100"}}),r("el-table-column",{attrs:{label:"角色","min-width":"100"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.roles,(function(n,a){return r("span",{key:n._id},[e._v(" "+e._s(n.roleName)+e._s(t.row.roles.length-1>a?"、":"")+" ")])}))}}])}),r("el-table-column",{attrs:{"min-width":"120",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(r){return e.editDialog(t.row)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"danger",icon:"el-icon-delete"},on:{click:function(r){return e.removeBox(t.row._id)}}},[e._v("删除")])]}}])})],1),r("el-pagination",{attrs:{"current-page":e.params.page,"page-sizes":[5,10,20],"page-size":e.params.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.tableData.count},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},a=[],o=(r("96cf"),r("1da1")),i=r("b1ef"),s=r("2612"),u={data:function(){return{visible:!1,dialogVisible:!1,edit:!1,loading:!1,tableData:{count:0,data:[]},userForm:{username:null,password:null,nickname:null,roles:[],creator:this.$store.state.user._id},params:{page:1,pageSize:10,sort:{_id:-1},by:{creator:this.$store.state.user._id},populate:[{path:"roles",select:{roleName:1},model:"Role"}]},userRules:{username:[{required:!0,message:"请输入手机号",trigger:"blur"},{pattern:/^0?(13[0-9]|14[0-9]|15[0-9]|16[0-9]|17[0-9]|18[0-9]|19[0-9])[0-9]{8}$/,message:"手机格式不正确",trigger:"blur"},{min:4,max:20,message:"长度在4到20个字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{pattern:/^[0-9A-Za-z]{6,20}$/,message:"密码只能由数字、英文组成，长度为6-20",trigger:"blur"},{min:6,message:"长度不小于6位"}],nickname:[{required:!0,message:"请输入员工昵称",trigger:"blur"},{pattern:/^[A-Za-z0-9\u4e00-\u9fa5]+$/,message:"昵称不能输入特殊字符",trigger:"blur"}],roles:[{required:!0,message:"请选择角色",trigger:"blur"}]},roles:[]}},mounted:function(){this.init(this.params)},activated:function(){this.init(this.params)},methods:{show:function(){console.log(this.userForm)},init:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var n,a,o,u,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.loading=!0,r.next=3,Object(s["c"])(e);case 3:return n=r.sent,a=n.results,o=a.count,u=a.data,r.next=9,Object(i["f"])({page:1,pageSize:50,by:{creator:t.$store.state.user._id}});case 9:c=r.sent,t.roles=c.results.data,t.tableData={count:o,data:u},console.log(t.tableData.data),t.loading=!1;case 14:case"end":return r.stop()}}),r)})))()},addDialog:function(){this.edit=!1,this.dialogVisible=!0},editDialog:function(e){this.edit=!0,this.userForm=e,this.dialogVisible=!0},removeBox:function(e){var t=this;this.$messageBox.alert("是否确认删除该用户","提示",{confirmButtonText:"确定",callback:function(){var r=Object(o["a"])(regeneratorRuntime.mark((function r(n){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,deleteUser(e);case 2:a=r.sent,200===a.status?(t.init(),t.$message({type:"success",message:"删除成功"})):(t.init(),t.$message({type:"warn",message:"操作过程出现问题"}));case 4:case"end":return r.stop()}}),r)})));function n(e){return r.apply(this,arguments)}return n}()})},addUser:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$refs[e].validate(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!r){e.next=8;break}return e.next=3,Object(s["a"])(t.userForm);case 3:n=e.sent,console.log(n),200===n.status?(t.$message({type:"success",message:"添加成功"}),t.init()):t.$message({type:"warn",message:"操作过程出现问题"}),t.init(t.params),t.dialogVisible=!1;case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return r.stop()}}),r)})))()},editUser:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["b"])(e.userForm);case 2:r=t.sent,200===r.status&&e.$message({type:"success",message:"修改成功"}),e.init(e.params),e.dialogVisible=!1;case 6:case"end":return t.stop()}}),t)})))()},handleSizeChange:function(e){this.params.pageSize=e,this.params.page=1,this.init(this.params)},handleCurrentChange:function(e){this.params.page=e,this.init(this.params)},handleSelectionChange:function(e){this.deleteBox=e}}},c=u,l=(r("ad04"),r("2877")),d=Object(l["a"])(c,n,a,!1,null,"5bdac1d8",null);t["default"]=d.exports},"7dd0":function(e,t,r){"use strict";var n=r("23e7"),a=r("9ed3"),o=r("e163"),i=r("d2bb"),s=r("d44e"),u=r("9112"),c=r("6eeb"),l=r("b622"),d=r("c430"),p=r("3f8c"),f=r("ae93"),g=f.IteratorPrototype,m=f.BUGGY_SAFARI_ITERATORS,b=l("iterator"),h="keys",v="values",y="entries",w=function(){return this};e.exports=function(e,t,r,l,f,x,_){a(r,t,l);var k,S,O,j=function(e){if(e===f&&A)return A;if(!m&&e in R)return R[e];switch(e){case h:return function(){return new r(this,e)};case v:return function(){return new r(this,e)};case y:return function(){return new r(this,e)}}return function(){return new r(this)}},L=t+" Iterator",F=!1,R=e.prototype,T=R[b]||R["@@iterator"]||f&&R[f],A=!m&&T||j(f),C="Array"==t&&R.entries||T;if(C&&(k=o(C.call(new e)),g!==Object.prototype&&k.next&&(d||o(k)===g||(i?i(k,g):"function"!=typeof k[b]&&u(k,b,w)),s(k,L,!0,!0),d&&(p[L]=w))),f==v&&T&&T.name!==v&&(F=!0,A=function(){return T.call(this)}),d&&!_||R[b]===A||u(R,b,A),p[t]=A,f)if(S={values:j(v),keys:x?A:j(h),entries:j(y)},_)for(O in S)(m||F||!(O in R))&&c(R,O,S[O]);else n({target:t,proto:!0,forced:m||F},S);return S}},"9ed3":function(e,t,r){"use strict";var n=r("ae93").IteratorPrototype,a=r("7c73"),o=r("5c6c"),i=r("d44e"),s=r("3f8c"),u=function(){return this};e.exports=function(e,t,r){var c=t+" Iterator";return e.prototype=a(n,{next:o(1,r)}),i(e,c,!1,!0),s[c]=u,e}},ad04:function(e,t,r){"use strict";r("e524")},ae93:function(e,t,r){"use strict";var n,a,o,i=r("e163"),s=r("9112"),u=r("5135"),c=r("b622"),l=r("c430"),d=c("iterator"),p=!1,f=function(){return this};[].keys&&(o=[].keys(),"next"in o?(a=i(i(o)),a!==Object.prototype&&(n=a)):p=!0),void 0==n&&(n={}),l||u(n,d)||s(n,d,f),e.exports={IteratorPrototype:n,BUGGY_SAFARI_ITERATORS:p}},b1ef:function(e,t,r){"use strict";r.d(t,"e",(function(){return i})),r.d(t,"g",(function(){return s})),r.d(t,"a",(function(){return u})),r.d(t,"d",(function(){return c})),r.d(t,"f",(function(){return l})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return p}));r("4160"),r("d3b7"),r("3ca3"),r("159b"),r("ddb0");var n=r("b775"),a=r("bc3a"),o=r.n(a);function i(e){return Object(n["a"])({url:"/global/charts",method:"get",params:e})}function s(){return o()({url:"https://v0.yiketianqi.com/api",method:"get",params:{version:"v9",appid:"37376872",appsecret:"WV37bjCR",vue:1}})}function u(e){return Object(n["a"])({url:"/global/role",method:"post",data:e})}function c(e){return Object(n["a"])({url:"/global/role",method:"put",data:e})}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["a"])({url:"/global/role",method:"get",params:e})}function d(e){return Object(n["a"])({url:"/global/role",method:"delete",data:{_id:e}})}function p(e){var t=[];return e.forEach((function(e){t.push(Object(n["a"])({url:"/global/role",method:"delete",data:{_id:e}}))})),Promise.all(t)}},d2bb:function(e,t,r){var n=r("825a"),a=r("3bbe");e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,r={};try{e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,e.call(r,[]),t=r instanceof Array}catch(o){}return function(r,o){return n(r),a(o),t?e.call(r,o):r.__proto__=o,r}}():void 0)},d44e:function(e,t,r){var n=r("9bf2").f,a=r("5135"),o=r("b622"),i=o("toStringTag");e.exports=function(e,t,r){e&&!a(e=r?e:e.prototype,i)&&n(e,i,{configurable:!0,value:t})}},ddb0:function(e,t,r){var n=r("da84"),a=r("fdbc"),o=r("e260"),i=r("9112"),s=r("b622"),u=s("iterator"),c=s("toStringTag"),l=o.values;for(var d in a){var p=n[d],f=p&&p.prototype;if(f){if(f[u]!==l)try{i(f,u,l)}catch(m){f[u]=l}if(f[c]||i(f,c,d),a[d])for(var g in o)if(f[g]!==o[g])try{i(f,g,o[g])}catch(m){f[g]=o[g]}}}},e163:function(e,t,r){var n=r("5135"),a=r("7b0b"),o=r("f772"),i=r("e177"),s=o("IE_PROTO"),u=Object.prototype;e.exports=i?Object.getPrototypeOf:function(e){return e=a(e),n(e,s)?e[s]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?u:null}},e177:function(e,t,r){var n=r("d039");e.exports=!n((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},e260:function(e,t,r){"use strict";var n=r("fc6a"),a=r("44d2"),o=r("3f8c"),i=r("69f3"),s=r("7dd0"),u="Array Iterator",c=i.set,l=i.getterFor(u);e.exports=s(Array,"Array",(function(e,t){c(this,{type:u,target:n(e),index:0,kind:t})}),(function(){var e=l(this),t=e.target,r=e.kind,n=e.index++;return!t||n>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:n,done:!1}:"values"==r?{value:t[n],done:!1}:{value:[n,t[n]],done:!1}}),"values"),o.Arguments=o.Array,a("keys"),a("values"),a("entries")},e524:function(e,t,r){},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-4e61f936.2c453920.js.map