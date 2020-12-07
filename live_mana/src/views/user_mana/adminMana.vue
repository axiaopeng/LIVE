<template>
  <el-main>
    <el-card> 
      <!-- 添加按钮 -->
      <el-button @click='addDialog' icon="el-icon-circle-plus-outline" type='primary'>添加</el-button>
      <!-- 添加或编辑角色的弹框 -->
      <el-dialog
         v-drag
         :close-on-click-modal="false"  
         :visible.sync="dialogVisible"
         width="30%"
        >
        <div class="dialog_header" slot="title">{{edit?'编辑员工':'添加新员工'}}</div>
         <el-form status-icon :model='userForm'  label-width='80px' :rules='userRules' ref='userForm' >
           <el-form-item label='员工账号' prop='username'>
             <el-input v-model="userForm.username" ></el-input>
           </el-form-item>
           <el-form-item v-if='!edit' label='初始密码' prop='password'>
              <el-input v-model="userForm.password" ></el-input>
           </el-form-item>
           <el-form-item label='员工名称' prop='nickname'>
             <el-input type='text' v-model="userForm.nickname"></el-input>
           </el-form-item>
           <el-form-item label='分配角色' prop='role'>
              <el-select v-model="userForm.role" placeholder="请选择角色">
                 <el-option
                   v-for="item in roles"
                   :key="item._id"
                   :label="item.roleName"
                   :value="item._id">
                 </el-option>
              </el-select>           
           </el-form-item>      
         </el-form>
         <span slot="footer" class="dialog-footer">
           <el-button @click="dialogVisible = false">取 消</el-button>
           <el-button  v-if="edit"  type="primary" @click="editUser">确定修改</el-button>
           <el-button v-else type="primary" @click="addUser('userForm')">确 定</el-button>
         </span>
      </el-dialog>
      <!-- 表格信息 -->
      <el-table stripe v-loading='loading' element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)" :header-cell-style="{
        'background-color': '#eeeeee',
        'text-align': 'center',
        'font-size': '18px',
        'border-right': '1px solid #b8b8b8'
      }" border :data='tableData.data' :cell-style="{
        'text-align':'center'
      }"
      @selection-change="handleSelectionChange">
          <el-table-column prop="_id" label="用户id"  min-width="100"></el-table-column>
      
      <el-table-column
        prop="username"
        label="账号"
         min-width="100"
      ></el-table-column>
      <el-table-column
        prop="nickname"
        label="员工"
        min-width="100"
      ></el-table-column>
      <el-table-column prop="role.roleName" label="角色" min-width="100"></el-table-column>
       <el-table-column  min-width="120" label='操作'>
          <template slot-scope="scope" >
            <el-button   type='primary' icon='el-icon-edit' @click='editDialog(scope.row)' >编辑</el-button>
            <el-button @click='removeBox(scope.row._id)'  type='danger' icon='el-icon-delete'>删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="params.page"
      :page-sizes="[5, 10, 20]"
      :page-size="params.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.count">
    </el-pagination>
    </el-card>
  </el-main>
</template>
<script>
import { getRole} from '@/api/global'
import { usersList,addUser, editUser, removeUser} from '@/api/users'

export default {
  data(){
    return{
      visible:false, //多删除弹框显示
      dialogVisible: false, //添加或编辑角色的弹框显示
      edit: false,  //判断是添加还是编辑角色
      loading: false, //控制表格加载中样式
      tableData:{  //表格数据
        count: 0,
        data:[]
      },
      userForm:{  //员工表单
        username: null,
        password: null,
        nickname: null,
        role: null,
        creator: this.$store.state.user._id // 创建者ID必须传，否则无法通过索引获取
      },
      params:{   //表格数据请求的参数
        page: 1,
        pageSize: 10,
        sort:{
          _id: -1
        },
        by:{
          creator: this.$store.state.user._id
        },
        populate:[{
          path:'role',   //对应mongodb集合中对应字段名称
          select: {roleName: 1},  //填充关联集合中哪个字段 也可以用数组对象形式 [{roleName: 1}]
          // model: 'Role',    //关联哪个集合, 没有指定就会使用Schema的ref
          // match: {} ,    //查询条件
          //options    //  排序,条数限制等等同 mongodb中 find()
        }]
      },
      userRules:{
         username: [
          { required: true, message:'请输入手机号', trigger:'blur'},
          { pattern:/^0?(13[0-9]|14[0-9]|15[0-9]|16[0-9]|17[0-9]|18[0-9]|19[0-9])[0-9]{8}$/,message:'手机格式不正确',trigger: 'blur'},
          { min: 4,max:20, message:'长度在4到20个字符', trigger:'blur'}
        ],
        password: [
          { required: true, message: '请输入密码', trigger:'blur'},
          { pattern: /^[0-9A-Za-z]{6,20}$/,message:'密码只能由数字、英文组成，长度为6-20',trigger: 'blur'},    
          {min: 6, message: '长度不小于6位'}
        ],
        nickname: [
          { required: true, message: '请输入员工昵称', trigger:'blur'},
          { pattern: /^[A-Za-z0-9\u4e00-\u9fa5]+$/,message:'昵称不能输入特殊字符',trigger: 'blur'}    
        ],
        role: [
           { required: true, message: '请选择角色', trigger:'blur'},         
        ]
      }, //员工表单校验规则
      roles:[] //所有角色
      
    }
  },
  mounted(){  
    this.init(this.params)
  },
  methods: {
     // 页面初始化
   async init(obj){
     this.loading = true
   const {results:{count,data}}= await  usersList(obj)
    const roleResults = await getRole({
     page: 1,
     pageSize: 50 //防止用户角色类型没有全部获取
   })
    this.roles = roleResults.results.data
    this.tableData ={count,data}
    this.loading = false
    },
    // 添加弹框显示
    addDialog(){
      this.edit= false;
      this.dialogVisible = true;  
    },
    // 修改弹框显示
    editDialog(row){
      this.edit= true;
      this.userForm = row
      this.dialogVisible = true;      
    },
    // 删除用户弹框显示
    removeBox(id){
      this.$messageBox.alert('是否确认删除该用户','提示',{
        confirmButtonText: '确定',
        callback:async action => {
         const res =  await deleteUser(id) 
        if(res.status === 200){
          this.init()
          this.$message({
            type: 'success',
            message: '删除成功'
          })
        }else{
          this.init()
          this.$message({
            type: 'warn',
            message: '操作过程出现问题'
          })
        }      
        }
      })
    },
    // 添加用户
    async addUser(formName){    
       this.$refs[formName].validate( async (valid) => {
         if(valid){
           const res = await addUser(this.userForm)
           if(res.status ===200){
             this.$message({
               type: 'success',
               message: '添加成功'
             })
             this.init()
           }else{
             this.$message({
                 type: 'warn',
                 message: '操作过程出现问题'
               })
           }
           this.init(this.params)
           this.dialogVisible = false;
         }
       })
    },
    // 修改用户
    async editUser(){    
      const res = await editUser(this.userForm)
      if(res.status ===200){
        this.$message({
          type: 'success',
          message: '修改成功'
        })  
      }
      this.init(this.params)
      this.dialogVisible = false;
    },
    // 每页数据数量按钮
    handleSizeChange(size){
      this.params.pageSize =size
      this.params.page =1
      this.init(this.params)
    },
    // 页码按钮
    handleCurrentChange(page){
      this.params.page =page
      this.init(this.params)
    },
    // 删除多选触发
    handleSelectionChange(val){
  
      this.deleteBox =val
    }
  }
}
</script>
<style lang='less' scoped>
.el-main{
  background-color: #b8b8b8;
  .el-card{
    .btn{
      margin-right: 10px!important;
    }
    /deep/.el-dialog__header{
      background-color:#1d1c1d;
      color:#fff;
      padding-bottom: 20px;
    }
    .el-table{
      margin-top: 20px;
    }
    .el-pagination{
      margin-top: 20px;
      text-align: center;
    }
  }
}
</style>