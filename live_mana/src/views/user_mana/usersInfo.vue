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
        <div class="dialog_header" slot="title">{{edit?'编辑角色':'添加新角色'}}</div>
         <el-form status-icon :model='roleForm'  label-width='80px' :rules='roleRules' ref='roleForm' >
           <el-form-item label='角色名称' prop='roleName'>
             <el-input v-model="roleForm.roleName" ></el-input>
           </el-form-item>
           <el-form-item label='角色权限' prop='power'>
             <el-checkbox-group v-model='roleForm.powers' >
               <el-checkbox :label='power.value' v-for='power in allPowers' :key='power.value'>{{power.name}}</el-checkbox>
             </el-checkbox-group>
           </el-form-item>
           <el-form-item label='具体描述' prop='describe'>
             <el-input type='textarea' v-model="roleForm.describe"></el-input>
           </el-form-item>        
         </el-form>
         <span slot="footer" class="dialog-footer">
           <el-button @click="dialogVisible = false">取 消</el-button>
           <el-button  v-if="edit"  type="primary" @click="editRole">确定修改</el-button>
           <el-button v-else type="primary" @click="addRole">确 定</el-button>
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
          <el-table-column prop="_id" label="用户id"  min-width="120"></el-table-column>
      <el-table-column
        prop="nickname"
        label="客户方"
        min-width="140"
      ></el-table-column>
      <el-table-column
        prop="username"
        label="账号"
         min-width="140"
      ></el-table-column>
      <el-table-column prop="email" label="邮箱" min-width="140"></el-table-column>
      <el-table-column
        prop="power"
        label="开放权限"
         min-width="160"
      ></el-table-column>
       <el-table-column  label='操作' min-width="185">
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
import { usersList} from '@/api/users'

export default {
  data(){
    return{
      visible:false, //多删除弹框显示
      dialogVisible: false, //添加或编辑角色的弹框显示
      edit: false,  //判断是添加还是编辑角色
      loading: false, //控制表格加载中样式
      tableData:{
        count: 0,
        data:[]
      },
      roleForm:{
        roleName: null,
        powers: [],
        describe: null
      },
      params:{
        page: 1,
        pageSize: 10
      },
      roleRules:{},
      deleteBox:null,
      allPowers:[
        {
          name: '内部系统',
          value: '/insys'
        },
        {
          name: '社区系统',
          value: '/outsys'
        },
        {
          name: "用户",
          value: '/users'
        },
        {
          name: '入库',
          value: '/putIn'
        },
        {
          name: '出库',
          value: '/putOut'
        },
        {
          name: '调拨',
          value: '/allo'
        }
      ]
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
      this.roleForm = row
      this.dialogVisible = true;      
    },
    // 删除弹框显示
    removeBox(id){
      this.$messageBox.alert('是否确认删除该角色','提示',{
        confirmButtonText: '确定',
        callback:async action => {
         const res =  await deleteRole(id) 
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
    // 删除多个角色
    async deleteRoles(){
        let ids = this.deleteBox.map(item => {
          return item._id
        })
        let res = await deleteRoles(ids)
        res = res.filter(item => {       
            return item.status != 200
        })
        if(res.length === 0){
          this.$message({
            type: 'success',
            message: '删除成功'
          })
        }else{
        this.$message({
            type: 'warn',
            message: '操作过程出现问题'
          })
      }
       this.init(this.params);
       this.visible = false;

    },
    // 添加角色
    async addRole(){    
      const res = await addRole(this.roleForm)
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
    },
    // 修改角色
    async editRole(){    
      const res = await editRole(this.roleForm)
      if(res.status ===200){
        this.$message({
          type: 'success',
          message: '修改成功'
        })

        this.init()
      }else{
        this.$message({
            type: 'warn',
            message: '操作过程出现问题'
          })
      }
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
      console.log(val)
      this.deleteBox =val
    }
  }
}
</script>
<style lang='less' scoped>
.el-main{
  background-color: #b8b8b8;

  .el-card{   
      margin-bottom: 50px;
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