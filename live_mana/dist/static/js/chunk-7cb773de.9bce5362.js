(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7cb773de"],{5186:function(e,r,t){},"530e":function(e,r,t){"use strict";t("5186")},dc3f:function(e,r,t){"use strict";t.r(r);var s=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"login"},[t("div",{staticClass:"container"},[t("div",{staticClass:"mana-title"},[e._v("ERP后台管理系统v1.00")]),t("transition",{attrs:{mode:"out-in"}},[e.login?t("el-form",{key:"box1",ref:"form",attrs:{"status-icon":!0,model:e.form,rules:e.rules,"inline-message":!0}},[t("el-form-item",{attrs:{prop:"username"}},[t("el-input",{attrs:{placeholder:"PHONE"},model:{value:e.form.username,callback:function(r){e.$set(e.form,"username",r)},expression:"form.username"}})],1),t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{attrs:{"show-password":"",placeholder:"PASSWORD",type:"password"},model:{value:e.form.password,callback:function(r){e.$set(e.form,"password",r)},expression:"form.password"}})],1),t("el-form-item",[t("el-row",{attrs:{gutter:20}}),t("el-col",{attrs:{span:9,offset:3}},[t("el-button",{attrs:{type:"success"},on:{click:function(r){return e.Login("form")}}},[e._v("登录")])],1),t("el-col",{attrs:{span:9}},[t("el-button",{attrs:{type:"info"},on:{click:function(r){e.login=!e.login}}},[e._v("注册")])],1)],1)],1):e._e(),e.login?e._e():t("el-form",{key:"box2",ref:"form1",attrs:{model:e.form}},[t("el-form-item",[t("div",[e._v("注册")])]),t("el-form-item",[t("el-input",{attrs:{placeholder:"USERNAME"},model:{value:e.form.username,callback:function(r){e.$set(e.form,"username",r)},expression:"form.username"}})],1),t("el-form-item",[t("el-input",{attrs:{"show-password":"",placeholder:"PASSWORD",type:"password"},model:{value:e.form.password,callback:function(r){e.$set(e.form,"password",r)},expression:"form.password"}})],1),t("el-form-item",[t("el-row",{attrs:{gutter:20}}),t("el-col",{attrs:{span:9,offset:3}},[t("el-button",{attrs:{type:"success"}},[e._v("登录")])],1),t("el-col",{attrs:{span:9}},[t("el-button",{attrs:{type:"info"},on:{click:function(r){e.login=!e.login}}},[e._v("注册")])],1)],1)],1)],1)],1)])},o=[],a=(t("96cf"),t("1da1")),n={data:function(){return{login:!0,form:{username:"",password:""},rules:{username:[{required:!0,message:"请输入手机号",trigger:"blur"},{pattern:/^0?(13[0-9]|14[0-9]|15[0-9]|16[0-9]|17[0-9]|18[0-9]|19[0-9])[0-9]{8}$/,message:"手机格式不正确",trigger:"blur"},{min:4,max:20,message:"长度在4到20个字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,message:"长度不小于6位"}]}}},methods:{Login:function(e){var r=this;this.$refs[e].validate(function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t){e.next=12;break}return e.prev=1,e.next=4,r.$store.dispatch("LoginByUsername",r.form);case 4:r.$message({type:"success",message:"登录成功"}),r.$router.push({path:r.redirect||"/"}),e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](1),console.log(e.t0),r.$message({type:"error",message:"登录失败"});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(r){return e.apply(this,arguments)}}())}}},l=n,i=(t("530e"),t("2877")),u=Object(i["a"])(l,s,o,!1,null,"2b1aa0e2",null);r["default"]=u.exports}}]);
//# sourceMappingURL=chunk-7cb773de.9bce5362.js.map