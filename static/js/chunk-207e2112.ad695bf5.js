(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-207e2112"],{"0a0d":function(e,t,r){e.exports=r("e829")},1666:function(e,t,r){},"2b4e":function(e,t,r){"use strict";var a=r("1666"),o=r.n(a);o.a},"2f37":function(e,t,r){var a=r("63b6");a(a.S,"Date",{now:function(){return(new Date).getTime()}})},"87ec":function(e,t,r){},cd96:function(e,t,r){"use strict";var a=r("87ec"),o=r.n(a);o.a},e829:function(e,t,r){r("2f37"),e.exports=r("584a").Date.now},ed95:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"list-common-box"},[r("div",{staticClass:"title-box"},[r("Breadcrumb",{attrs:{isLevel:2}}),r("div",{staticClass:"rightbox"},[r("div",{staticClass:"item",on:{click:function(t){return e.handleAdd()}}},[r("cc-svg-icon",{attrs:{"icon-class":"add"}}),r("span",[e._v("新增人员")])],1)])],1),r("div",{staticClass:"card-box"},[r("div",{staticClass:"search-bar"},[r("div",{staticClass:"search-left"},[r("div",{staticClass:"search-item"},[r("span",{staticClass:"search-label"},[e._v("账号")]),r("el-input",{attrs:{placeholder:"请输入账号",clearable:""},model:{value:e.searchKey.accountNo,callback:function(t){e.$set(e.searchKey,"accountNo","string"===typeof t?t.trim():t)},expression:"searchKey.accountNo"}})],1),r("div",{staticClass:"search-item"},[r("span",{staticClass:"search-label"},[e._v("姓名")]),r("el-input",{attrs:{placeholder:"请输入姓名",clearable:""},model:{value:e.searchKey.realName,callback:function(t){e.$set(e.searchKey,"realName","string"===typeof t?t.trim():t)},expression:"searchKey.realName"}})],1),r("div",{staticClass:"search-item"},[r("span",{staticClass:"search-label"},[e._v("身份证")]),r("el-input",{attrs:{placeholder:"请输入身份证号码",clearable:""},model:{value:e.searchKey.idCard,callback:function(t){e.$set(e.searchKey,"idCard","string"===typeof t?t.trim():t)},expression:"searchKey.idCard"}})],1)]),r("div",{staticClass:"search-right"},[r("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-search"},on:{click:function(t){return e.querylist()}}},[e._v("查询")]),r("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-delete"},on:{click:function(t){return e.Refreshlist()}}},[e._v("清空")])],1)]),r("div",{staticClass:"table-box"},[r("el-table",{attrs:{data:e.dataList,"tooltip-effect":"dark",stripe:"",height:"100%"}},[r("el-table-column",{attrs:{label:"序号",align:"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.$index+(e.pageNum-1)*e.pageSize+1)+"\n          ")]}}])}),r("el-table-column",{attrs:{prop:"accountNo",label:"账号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.accountNo?t.row.accountNo:e.EMPTYTEXT)+"\n          ")]}}])}),r("el-table-column",{attrs:{prop:"realName",label:"姓名",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.realName?t.row.realName:e.EMPTYTEXT)+"\n          ")]}}])}),r("el-table-column",{attrs:{prop:"status",label:"状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.currentAccountNo===t.row.accountNo?r("div",[e._v("\n               "+e._s(""!==t.row.status?e.statusOption[t.row.status]:e.EMPTYTEXT)+"\n            ")]):r("div",{staticClass:"link",on:{click:function(r){return e.handleStatus(t.row)}}},[e._v("\n              "+e._s(""!==t.row.status?e.statusOption[t.row.status]:e.EMPTYTEXT)+"\n              "),r("cc-svg-icon",{attrs:{"icon-class":"yellowEdit"}})],1)]}}])}),r("el-table-column",{attrs:{prop:"idCard",label:"身份证号",align:"center",width:"170"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.idCard?t.row.idCard:e.EMPTYTEXT)+"\n          ")]}}])}),r("el-table-column",{attrs:{prop:"mobile",label:"电话",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.mobile?t.row.mobile:e.EMPTYTEXT)+"\n          ")]}}])}),r("el-table-column",{attrs:{prop:"orgList",label:"所属机构",align:"center","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return t.row.orgList.length>0?e._l(t.row.orgList,function(a,o){return r("span",{key:o},[e._v("\n               "+e._s(a.organizationName)+e._s(o!==t.row.orgList.length-1?"，":"")+"\n            ")])}):void 0}}],null,!0)}),r("el-table-column",{attrs:{prop:"orgStatus",label:"分配角色",align:"right",width:"170"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.roleName?"["+t.row.roleName+"]":"")+"\n            "),r("span",{staticClass:"yellow link",on:{click:function(r){return e.handleRole(t.row)}}},[e._v("\n             分配"),r("cc-svg-icon",{attrs:{"icon-class":"yellowEdit"}})],1)]}}])}),r("el-table-column",{attrs:{label:"操作",align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("cc-svg-icon",{attrs:{"icon-class":"edit"},on:{click:function(r){return e.handleAdd(t.row)}}}),r("cc-svg-icon",{attrs:{"icon-class":"maintain"},on:{click:function(r){return e.handleView(t.row)}}}),r("cc-svg-icon",{attrs:{"icon-class":"delete"},on:{click:function(r){return e.handleDelete(t.row.accountNo)}}})]}}])})],1)],1),r("div",{staticClass:"page-box"},[r("Paginaction",{ref:"paginationEvent",staticClass:"pagination",attrs:{goPage:e.pageNum,totalNum:e.totalNum},on:{updateList:e.changePage}})],1)]),r("addUser",{attrs:{userInfo:e.userInfo},on:{refresh:e.getDatalist},model:{value:e.userDialog,callback:function(t){e.userDialog=t},expression:"userDialog"}}),r("selectRole",{attrs:{userInfo:e.userInfo},on:{refresh:e.getDatalist},model:{value:e.roleDialog,callback:function(t){e.roleDialog=t},expression:"roleDialog"}})],1)},o=[],s=r("5176"),l=r.n(s),n=r("a4bb"),i=r.n(n),c=(r("ac6a"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{staticClass:"userForm-box",attrs:{title:e.userInfo.accountNo?"修改人员":"新增人员",visible:e.show,center:"",width:"550px","close-on-click-modal":!1},on:{"update:visible":function(t){e.show=t},close:function(t){return e.resetForm("ruleForm")}}},[r("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"账号：",prop:e.userInfo.accountNo?"":"accountNo"}},[e.userInfo.accountNo?[r("p",[e._v(e._s(e.ruleForm.accountNo||e.EMPTYTEXT))])]:[r("el-input",{staticClass:"input-box",attrs:{placeholder:"请输入账号",clearable:""},model:{value:e.ruleForm.accountNo,callback:function(t){e.$set(e.ruleForm,"accountNo","string"===typeof t?t.trim():t)},expression:"ruleForm.accountNo"}})]],2),r("el-form-item",{attrs:{label:"姓名：",prop:"realName"}},[r("el-input",{staticClass:"input-box",attrs:{placeholder:"请输入姓名",clearable:"",maxlength:"20"},model:{value:e.ruleForm.realName,callback:function(t){e.$set(e.ruleForm,"realName","string"===typeof t?t.trim():t)},expression:"ruleForm.realName"}})],1),r("el-form-item",{attrs:{label:"工号：",prop:"workNum"}},[r("el-input",{staticClass:"input-box",attrs:{placeholder:"请输入工号",clearable:"",maxlength:"20"},model:{value:e.ruleForm.workNum,callback:function(t){e.$set(e.ruleForm,"workNum","string"===typeof t?t.trim():t)},expression:"ruleForm.workNum"}})],1),r("el-form-item",{attrs:{label:"机构名称：",prop:"orgList"}},[r("treeselect",{staticClass:"input-box",attrs:{multiple:!0,options:e.organOption,flat:!0,"default-expand-level":1,placeholder:"请选择机构"},on:{input:e.changeParentOrgan},model:{value:e.ruleForm.orgList,callback:function(t){e.$set(e.ruleForm,"orgList",t)},expression:"ruleForm.orgList"}})],1),r("el-form-item",{attrs:{label:"性别：",prop:"gender"}},[r("el-select",{staticClass:"input-box",attrs:{placeholder:"请选择性别",clearable:""},model:{value:e.ruleForm.gender,callback:function(t){e.$set(e.ruleForm,"gender",t)},expression:"ruleForm.gender"}},e._l(e.sexOption,function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),r("el-form-item",{attrs:{label:"身份证号：",prop:"idCard"}},[r("el-input",{staticClass:"input-box",attrs:{placeholder:"请输入身份证号码",clearable:""},model:{value:e.ruleForm.idCard,callback:function(t){e.$set(e.ruleForm,"idCard","string"===typeof t?t.trim():t)},expression:"ruleForm.idCard"}})],1),r("el-form-item",{attrs:{label:"手机号：",prop:"mobile"}},[r("el-input",{staticClass:"input-box",attrs:{placeholder:"请输入手机号",clearable:"",maxlength:"11"},model:{value:e.ruleForm.mobile,callback:function(t){e.$set(e.ruleForm,"mobile","string"===typeof t?t.trim():t)},expression:"ruleForm.mobile"}})],1),r("el-form-item",{attrs:{label:"出生日期：",prop:"birthday"}},[r("el-date-picker",{staticClass:"input-box",attrs:{type:"date",placeholder:"选择出生日期",clearable:"","value-format":"yyyyMMdd","picker-options":e.pickerOptions},model:{value:e.ruleForm.birthday,callback:function(t){e.$set(e.ruleForm,"birthday",t)},expression:"ruleForm.birthday"}})],1),e.userInfo.accountNo?e._e():r("el-form-item",{attrs:{label:"密码：",prop:"passwords"}},[r("el-input",{attrs:{type:"password",placeholder:"8~16位，至少包含数字/字母两种组合",clearable:""},model:{value:e.ruleForm.passwords,callback:function(t){e.$set(e.ruleForm,"passwords","string"===typeof t?t.trim():t)},expression:"ruleForm.passwords"}})],1),e.userInfo.accountNo?e._e():r("el-form-item",{attrs:{label:"确认密码：",prop:"checkPasswords"}},[r("el-input",{attrs:{type:"password",placeholder:"请确认密码",clearable:""},model:{value:e.ruleForm.checkPasswords,callback:function(t){e.$set(e.ruleForm,"checkPasswords","string"===typeof t?t.trim():t)},expression:"ruleForm.checkPasswords"}})],1),r("el-form-item",{attrs:{label:"状态：",prop:"status"}},[r("el-select",{staticClass:"input-box",attrs:{placeholder:"请选择状态"},model:{value:e.ruleForm.status,callback:function(t){e.$set(e.ruleForm,"status",t)},expression:"ruleForm.status"}},e._l(e.statusOption,function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),r("el-form-item",{attrs:{label:"岗位：",prop:"userJob"}},[r("el-input",{staticClass:"input-box",attrs:{placeholder:"请输入岗位",clearable:""},model:{value:e.ruleForm.userJob,callback:function(t){e.$set(e.ruleForm,"userJob","string"===typeof t?t.trim():t)},expression:"ruleForm.userJob"}})],1),r("el-form-item",{attrs:{label:"职称：",prop:"userDuty"}},[r("el-input",{staticClass:"input-box",attrs:{placeholder:"请输入职称",clearable:""},model:{value:e.ruleForm.userDuty,callback:function(t){e.$set(e.ruleForm,"userDuty","string"===typeof t?t.trim():t)},expression:"ruleForm.userDuty"}})],1),r("el-form-item",{attrs:{label:"备注："}},[r("el-input",{attrs:{type:"textarea",placeholder:"请填写备注"},model:{value:e.ruleForm.remark,callback:function(t){e.$set(e.ruleForm,"remark","string"===typeof t?t.trim():t)},expression:"ruleForm.remark"}})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("确 认")])],1)],1)}),u=[],m=r("f499"),d=r.n(m),p=(r("a481"),r("0a0d")),h=r.n(p),f=r("af75"),g=r("7026"),b=r.n(g),v=(r("542c"),{name:"addUser",components:{Treeselect:b.a},props:{value:{type:Boolean},userInfo:{type:Object,default:function(){}}},model:{prop:"value",event:"change"},watch:{value:function(e){this.show=this.value,!0===this.show&&(this.getOrganList(),this.init())}},data:function(){var e=this,t=function(t,r,a){""===r?a(new Error("请再次输入密码")):r!==e.ruleForm.passwords?a(new Error("两次输入密码不一致!")):a()};return{show:this.value,pickerOptions:{disabledDate:function(e){return e&&e.getTime()>h()()}},sexOption:[{value:1,label:"男"},{value:2,label:"女"},{value:0,label:"未说明"},{value:9,label:"未知"}],statusOption:[{value:1,label:"正常"},{value:2,label:"冻结"},{value:3,label:"禁用"}],organOption:[],orgListJson:[],ruleForm:{realName:"",workNum:"",orgList:[],gender:"",idCard:"",mobile:"",accountNo:"",birthday:"",passwords:"",checkPasswords:"",status:1,userJob:"",userDuty:"",remark:""},rules:{accountNo:[{required:!0,message:"账号不能为空",trigger:"blur"},{validator:f["a"].validateEAN,trigger:"blur"}],realName:[{required:!0,message:"姓名不能为空",trigger:"blur"}],orgList:[{type:"array",required:!0,message:"请选择机构",trigger:"change"}],idCard:[{required:!0,message:"身份证号不能为空",trigger:"blur"},{validator:f["a"].validateIdcard,trigger:"blur"}],mobile:[{required:!0,message:"手机号不能为空",trigger:"blur"},{validator:f["a"].validateMobile,trigger:"blur"}],passwords:[{required:!0,message:"密码不能为空",trigger:"blur"},{validator:f["a"].validatePassword,trigger:"blur"}],checkPasswords:[{required:!0,validator:t,trigger:"blur"}],status:[{required:!0,message:"请选择状态",trigger:"blur"}]}}},methods:{getOrganList:function(){var e=this;this.$http.post("http://bj-ihealthcare.com:52081/phs/service/organization/getOrganization").then(function(t){if(200===t.code){var r=JSON.parse(d()(t.data).replace(/organizationId/g,"id").replace(/name/g,"label").replace(/childrens/g,"children"));e.organOption=r}else e.organOption=[],e.$message.error(t.msg)}).catch(function(t){e.$message.error(t)})},recursion:function(e,t){var r;if(e){for(var a in e){var o=e[a];if(o.id==t){var s={};s.organizationId=o.id,s.organizationName=o.label,r=s;break}if(o.children&&o.children.length>0&&(r=this.recursion(o.children,t),r))return r}return r}},changeParentOrgan:function(e){var t=this;this.orgListJson=[],e.length>0&&e.forEach(function(e){t.orgListJson.push(t.recursion(t.organOption,e))}),this.$refs.ruleForm.validateField("orgList")},submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(e){var r=JSON.parse(d()(t.ruleForm));if(delete r.orgList,r.orgListJson=d()(t.orgListJson),t.userInfo.accountNo){var a={};a=l()({},r),delete a.passwords,delete a.checkPasswords,t.editUser(a)}else{var o={};o=l()({},r),t.addUser(o)}}})},addUser:function(e){var t=this;this.$http.post("http://bj-ihealthcare.com:52081/phs/manager/user/insertUserByDto",e).then(function(e){200===e.code?(t.$message.success("添加成功"),t.show=!1,t.$emit("change",!1),t.$emit("refresh")):t.$message.error(e.msg)}).catch(function(e){t.$message.error(e)})},editUser:function(e){var t=this;this.$http.post("http://bj-ihealthcare.com:52081/phs/manager/user/updateManageUserByDto",e).then(function(e){200===e.code?(t.$message.success("修改成功"),t.show=!1,t.$emit("change",!1),t.$emit("refresh")):t.$message.error(e.msg)}).catch(function(e){t.$message.error(e)})},init:function(){var e=this;if(this.userInfo.accountNo){for(var t in this.ruleForm)this.ruleForm[t]=this.userInfo[t];var r=[];this.orgListJson=[],this.userInfo.orgList.forEach(function(t){r.push(t.organizationId);var a={};a.organizationId=t.organizationId,a.organizationName=t.organizationName,e.orgListJson.push(a)}),this.ruleForm.orgList=r}else this.initForm();this.$nextTick(function(){e.$refs["ruleForm"].clearValidate()})},initForm:function(){var e=this;i()(this.ruleForm).forEach(function(t){return e.ruleForm[t]=""}),this.ruleForm.orgList=[],this.ruleForm.status=1},resetForm:function(e){this.show=!1,this.$emit("change",!1)}}}),w=v,F=(r("2b4e"),r("2877")),y=Object(F["a"])(w,c,u,!1,null,null,null),N=y.exports,k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{title:"分配角色",visible:e.show,center:"",width:"500px","close-on-click-modal":!1},on:{"update:visible":function(t){e.show=t},close:function(t){return e.resetForm("roleForm")}}},[r("el-form",{ref:"roleForm",staticClass:"roleForm",attrs:{model:e.roleForm,rules:e.rules}},[r("el-form-item",[r("p",{staticClass:"title"},[e._v("姓名："+e._s(e.userInfo.realName||e.EMPTYTEXT))])]),r("el-form-item",{attrs:{prop:"roleId"}},[r("el-radio-group",{model:{value:e.roleForm.roleId,callback:function(t){e.$set(e.roleForm,"roleId",t)},expression:"roleForm.roleId"}},e._l(e.roleOption,function(t){return r("el-radio",{key:t.roleId,attrs:{label:t.roleId}},[e._v(e._s(t.roleName))])}),1)],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){return e.resetForm("roleForm")}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("roleForm")}}},[e._v("确 认")])],1)],1)},$=[],x={name:"select-role",props:{value:{type:Boolean},userInfo:{type:Object,default:function(){}}},model:{prop:"value",event:"change"},watch:{value:function(e){this.show=this.value,!0===this.show&&(this.getRoleList(),this.roleForm.roleId=this.userInfo.roleId?this.userInfo.roleId:"")}},data:function(){return{show:this.value,roleForm:{roleId:""},roleOption:[],rules:{roleId:[{required:!0,message:"请选择角色",trigger:"change"}]}}},methods:{getRoleList:function(){var e=this;this.$http.post("http://bj-ihealthcare.com:52081/phs/login/getUserRoleList",{projectType:2}).then(function(t){200===t.code?e.roleOption=t.data:e.$message.error(t.msg)}).catch(function(t){e.$message.error(t)})},submitForm:function(e){var t=this;this.$refs[e].validate(function(r){if(r){var a={};a.accountNo=t.userInfo.accountNo,a.newRoleId=t.roleForm.roleId,a.projectType=2,t.$http.post("http://bj-ihealthcare.com:52081/phs/manager/user/updateManageUserRole",a).then(function(r){200===r.code?(t.$message.success("分配成功"),t.show=!1,t.$emit("change",!1),t.$emit("refresh"),t.$refs[e].resetFields()):t.$message.error(r.msg)}).catch(function(e){t.$message.error(e)})}})},resetForm:function(e){var t=this;this.show=!1,this.$emit("change",!1),this.$nextTick(function(){t.$refs[e].clearValidate()})}}},_=x,C=(r("cd96"),Object(F["a"])(_,k,$,!1,null,"bca895f2",null)),I=C.exports,T={name:"organs-list",components:{addUser:N,selectRole:I},data:function(){return{currentAccountNo:"",statusOption:{1:"正常",2:"冻结",3:"禁用"},searchKey:{accountNo:"",realName:"",idCard:""},pageNum:1,pageSize:10,totalNum:0,dataList:[],userDialog:!1,userInfo:{},roleDialog:!1}},created:function(){this.currentAccountNo=localStorage.getItem("accountNo")?localStorage.getItem("accountNo"):"",this.getDatalist()},methods:{handleView:function(e){this.$router.push({path:"/basicData-manage/user-manage/userMaintain?id="+e.accountNo})},handleAdd:function(e){this.userDialog=!0,this.userInfo=e||{}},handleRole:function(e){this.roleDialog=!0,this.userInfo=e||{}},querylist:function(){this.pageNum=1,this.getDatalist()},Refreshlist:function(){var e=this;this.pageNum=1,this.pageSize=10,i()(this.searchKey).forEach(function(t){return e.searchKey[t]=""}),this.getDatalist()},changePage:function(e){this.pageNum=e.pageNum,this.pageSize=e.pageSize,this.getDatalist()},getDatalist:function(){var e=this;this.$emit("viewLoad",!0);var t={};t.pageNum=this.pageNum,t.pageSize=this.pageSize,t.projectType=2,t=l()({},t,this.searchKey),this.$http.post("http://bj-ihealthcare.com:52081/phs/manager/user/getUserCollectionByPage",t).then(function(t){200===t.code?(e.dataList=t.data.list||[],e.totalNum=t.data.total,e.pageNum=t.data.pageNum,e.pageSize=t.data.pageSize):e.$message.error(t.msg),e.$emit("viewLoad",!1)}).catch(function(t){e.$emit("viewLoad",!1),e.$message.error(t)})},handleStatus:function(e){var t=this;this.$confirm("是否"+(1===e.status?"禁用":"启用")+e.accountNo+"的账号","提示",{confirmButtonText:"确 认",cancelButtonText:"取 消",customClass:"infoMessage",center:!0}).then(function(){t.$http.post("http://bj-ihealthcare.com:52081/phs/manager/user/updateStatus",{accountNo:e.accountNo,status:1===e.status?3:1}).then(function(e){200===e.code?(t.$message.success("操作成功"),t.getDatalist()):t.$message.error(e.msg)}).catch(function(e){t.$message.error(e)})})},handleDelete:function(e){var t=this;this.$confirm("确定删除此数据，删除后将永久删除","提示",{confirmButtonText:"确 认",cancelButtonText:"取 消",customClass:"infoMessage",center:!0}).then(function(){t.$http.post("http://bj-ihealthcare.com:52081/phs/manager/user/removeOneUser",{accountNo:e}).then(function(e){200===e.code?(t.$message.success("删除成功"),t.getDatalist()):t.$message.error(e.msg)}).catch(function(e){t.$message.error(e)})})}}},L=T,D=Object(F["a"])(L,a,o,!1,null,"58f97234",null);t["default"]=D.exports}}]);
//# sourceMappingURL=chunk-207e2112.ad695bf5.js.map