(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18fff125"],{"022b":function(e,t,a){},"36ba":function(e,t,a){"use strict";var r=a("022b"),o=a.n(r);o.a},5176:function(e,t,a){e.exports=a("51b6")},6255:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"list-common-box"},[a("div",{staticClass:"title-box"},[a("h2",[e._v("权限管理")]),a("div",{staticClass:"rightbox"},[a("div",{staticClass:"item",on:{click:function(t){return e.handleAdd()}}},[a("cc-svg-icon",{attrs:{"icon-class":"add"}}),a("span",[e._v("新增")])],1)])]),a("div",{staticClass:"card-box"},[a("div",{staticClass:"search-bar"},[a("div",{staticClass:"search-left"},[a("div",{staticClass:"search-item"},[a("span",{staticClass:"search-label"},[e._v("角色名称")]),a("el-input",{attrs:{placeholder:"请输入角色名称",clearable:""},model:{value:e.searchKey.roleName,callback:function(t){e.$set(e.searchKey,"roleName","string"===typeof t?t.trim():t)},expression:"searchKey.roleName"}})],1)]),a("div",{staticClass:"search-right"},[a("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-search"},on:{click:function(t){return e.querylist()}}},[e._v("查询")]),a("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-delete"},on:{click:function(t){return e.Refreshlist()}}},[e._v("清空")])],1)]),a("div",{staticClass:"table-box"},[a("el-table",{attrs:{data:e.dataList,"tooltip-effect":"dark",stripe:"",height:"100%"}},[a("el-table-column",{attrs:{label:"序号",align:"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.$index+(e.pageNum-1)*e.pageSize+1)+"\n          ")]}}])}),a("el-table-column",{attrs:{prop:"roleName",label:"角色名称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.roleName?t.row.roleName:e.EMPTYTEXT)+"\n          ")]}}])}),a("el-table-column",{attrs:{prop:"remark",label:"角色描述",align:"center",width:"190","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.remark?t.row.remark:e.EMPTYTEXT)+"\n          ")]}}])}),a("el-table-column",{attrs:{prop:"labelShortName",label:"关联权限",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticClass:"green",attrs:{type:"primary"},on:{click:function(a){return e.handleRelation(t.row)}}},[e._v("关联权限")])]}}])}),a("el-table-column",{attrs:{prop:"createTimeStr",label:"创建时间",align:"center",width:"170"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.createTimeStr?t.row.createTimeStr:e.EMPTYTEXT)+"\n          ")]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("cc-svg-icon",{attrs:{"icon-class":"edit"},on:{click:function(a){return e.handleAdd(t.row)}}}),a("cc-svg-icon",{attrs:{"icon-class":"delete"},on:{click:function(a){return e.handleDelete(t.row)}}})]}}])})],1)],1),a("div",{staticClass:"page-box"},[a("Paginaction",{ref:"paginationEvent",staticClass:"pagination",attrs:{goPage:e.pageNum,totalNum:e.totalNum},on:{updateList:e.changePage}})],1)]),a("addRole",{attrs:{roleInfo:e.roleInfo},on:{refresh:e.getDatalist},model:{value:e.roleDialog,callback:function(t){e.roleDialog=t},expression:"roleDialog"}})],1)},o=[],s=(a("28a5"),a("5176")),l=a.n(s),i=a("a4bb"),n=a.n(i),c=(a("ac6a"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:e.roleInfo.roleId?"修改角色":"新增角色",visible:e.show,center:"",width:"500px","close-on-click-modal":!1},on:{"update:visible":function(t){e.show=t},close:function(t){return e.resetForm("ruleForm")}}},[a("el-form",{ref:"ruleForm",staticClass:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"130px"}},[a("el-form-item",{attrs:{label:"角色名称：",prop:"roleName"}},[a("el-input",{staticClass:"input-box",attrs:{placeholder:"请输入角色名称",clearable:"",maxlength:"20"},model:{value:e.ruleForm.roleName,callback:function(t){e.$set(e.ruleForm,"roleName","string"===typeof t?t.trim():t)},expression:"ruleForm.roleName"}})],1),a("el-form-item",{attrs:{label:"角色描述：",prop:"remark"}},[a("el-input",{staticClass:"input-box",attrs:{type:"textarea",placeholder:"请输入角色描述",clearable:"",maxlength:"100"},model:{value:e.ruleForm.remark,callback:function(t){e.$set(e.ruleForm,"remark","string"===typeof t?t.trim():t)},expression:"ruleForm.remark"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("确 认")])],1)],1)}),u=[],h={name:"addRole",props:{value:{type:Boolean},roleInfo:{type:Object,default:function(){}}},model:{prop:"value",event:"change"},watch:{value:function(e){if(this.show=this.value,!0===this.show)if(this.roleInfo.roleId)for(var t in this.ruleForm)this.ruleForm[t]=this.roleInfo[t];else this.initForm()}},data:function(){return{show:this.value,ruleForm:{roleName:"",remark:"",projectType:2},rules:{roleName:[{required:!0,message:"角色名称不能为空",trigger:"blur"}]}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(e){var a={projectType:2};a=l()({},t.ruleForm,a),t.roleInfo.roleId?(a.roleId=t.roleInfo.roleId,t.editRole(a)):t.addRole(a)}})},addRole:function(e){var t=this;this.$http.post("http://bj-ihealthcare.com:52081/phs/role/addRole",e,!1).then(function(e){200===e.code?(t.$message.success("添加成功"),t.show=!1,t.$emit("change",!1),t.$emit("refresh")):t.$message.error(e.msg)}).catch(function(e){t.$message.error(e)})},editRole:function(e){var t=this;this.$http.post("http://bj-ihealthcare.com:52081/phs/role/updateRole",e,!1).then(function(e){200===e.code?(t.$message.success("修改成功"),t.show=!1,t.$emit("change",!1),t.$emit("refresh")):t.$message.error(e.msg)}).catch(function(e){t.$message.error(e)})},initForm:function(){var e=this;n()(this.ruleForm).forEach(function(t){return e.ruleForm[t]=""})},resetForm:function(e){var t=this;this.show=!1,this.$emit("change",!1),this.$nextTick(function(){t.$refs[e].clearValidate()})}}},m=h,d=(a("36ba"),a("2877")),f=Object(d["a"])(m,c,u,!1,null,"3db07b88",null),p=f.exports,g={name:"authority-list",components:{addRole:p},data:function(){return{searchKey:{roleName:""},pageNum:1,pageSize:10,totalNum:0,dataList:[],roleDialog:!1,roleInfo:{}}},created:function(){this.getDatalist()},methods:{handleAdd:function(e){this.roleDialog=!0,this.roleInfo=e||{}},handleRelation:function(e){this.$router.push({path:"/authority-manage/relatedPermissions",query:{id:e.roleId,name:e.roleName}})},querylist:function(){this.pageNum=1,this.getDatalist()},Refreshlist:function(){var e=this;this.pageNum=1,this.pageSize=10,n()(this.searchKey).forEach(function(t){return e.searchKey[t]=""}),this.getDatalist()},changePage:function(e){this.pageNum=e.pageNum,this.pageSize=e.pageSize,this.getDatalist()},getDatalist:function(){var e=this;this.$emit("viewLoad",!0);var t={};t.pageNum=this.pageNum,t.pageSize=this.pageSize,t.projectType=2,t=l()({},t,this.searchKey),this.$http.post("http://bj-ihealthcare.com:52081/phs/role/getRoleInfoList",t).then(function(t){200===t.code?(e.dataList=t.data.list||[],e.totalNum=t.data.total,e.pageNum=t.data.pageNum,e.pageSize=t.data.pageSize):e.$message.error(t.msg),e.$emit("viewLoad",!1)}).catch(function(t){e.$emit("viewLoad",!1),e.$message.error(t)})},handleDelete:function(e){var t=this;this.$confirm('确定删除"'+e.roleName+'"吗？',"提示",{confirmButtonText:"确 认",cancelButtonText:"取 消",customClass:"infoMessage",center:!0}).then(function(){t.$http.post("http://bj-ihealthcare.com:52081/phs/role/deleteRole",{roleIds:e.roleId.split(",")},!1).then(function(e){200===e.code?(t.$message.success("删除成功"),t.getDatalist()):t.$message.error(e.msg)}).catch(function(e){t.$message.error(e)})})}}},b=g,v=Object(d["a"])(b,r,o,!1,null,"0bbf4d48",null);t["default"]=v.exports}}]);
//# sourceMappingURL=chunk-18fff125.3dc84bc2.js.map