(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b63fc9bc"],{"2b19":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list-common-box argument-list-box"},[a("div",{staticClass:"title-box"},[a("Breadcrumb",{attrs:{isLevel:2}})],1),a("div",{staticClass:"card-box"},[a("div",{staticClass:"search-bar"},[a("div",{staticClass:"search-left"},[a("div",{staticClass:"search-item"},[a("span",{staticClass:"search-label"},[t._v("协议标题")]),a("el-input",{attrs:{placeholder:"请输入协议标题",clearable:""},model:{value:t.searchKey.agreementName,callback:function(e){t.$set(t.searchKey,"agreementName","string"===typeof e?e.trim():e)},expression:"searchKey.agreementName"}})],1),a("div",{staticClass:"search-item"},[a("span",{staticClass:"search-label"},[t._v("协议类型")]),a("el-select",{attrs:{placeholder:"请选择协议类型",clearable:""},model:{value:t.searchKey.agreementType,callback:function(e){t.$set(t.searchKey,"agreementType",e)},expression:"searchKey.agreementType"}},t._l(t.agreementTypeOption,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1)]),a("div",{staticClass:"search-right"},[a("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-search"},on:{click:function(e){return t.querylist()}}},[t._v("查询")]),a("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-delete"},on:{click:function(e){return t.Refreshlist()}}},[t._v("清空")])],1)]),a("div",{staticClass:"table-box"},[a("el-table",{attrs:{data:t.dataList,"tooltip-effect":"dark",stripe:"",height:"100%"}},[a("el-table-column",{attrs:{label:"序号",align:"center",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(e.$index+(t.pageNum-1)*t.pageSize+1)+"\n          ")]}}])}),a("el-table-column",{attrs:{prop:"agreementName",label:"协议标题",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(e.row.agreementName?e.row.agreementName:t.EMPTYTEXT)+"\n          ")]}}])}),a("el-table-column",{attrs:{prop:"agreementTypeStr",label:"协议类型",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(e.row.agreementTypeStr?e.row.agreementTypeStr:t.EMPTYTEXT)+"\n          ")]}}])}),a("el-table-column",{attrs:{prop:"teamIsFirstStr",label:"甲方或乙方",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(e.row.teamIsFirstStr?e.row.teamIsFirstStr:t.EMPTYTEXT)+"\n          ")]}}])}),a("el-table-column",{attrs:{prop:"registerOrganization",label:"机构",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(e.row.registerOrganization?e.row.registerOrganization:t.EMPTYTEXT)+"\n          ")]}}])}),a("el-table-column",{attrs:{prop:"agreementStatus",label:"状态",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return a("div",{staticClass:"link",on:{click:function(a){return t.handleStatus(e.row)}}},[t._v("\n            "+t._s(e.row.agreementStatus?t.statusOption[e.row.agreementStatus]:t.EMPTYTEXT)+"\n            "),e.row.agreementStatus?a("cc-svg-icon",{attrs:{"icon-class":"yellowEdit"}}):t._e()],1)}}])}),a("el-table-column",{attrs:{prop:"createDateStr",label:"最后修改时间",align:"center",width:"170"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(e.row.createDateStr?e.row.createDateStr:t.EMPTYTEXT)+"\n          ")]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.agreementStatus?a("el-button",{staticClass:"green",attrs:{type:"primary"},on:{click:function(a){return t.handleDetail(e.row)}}},[t._v("查看详情")]):a("el-button",{attrs:{type:"primary"},on:{click:function(a){return t.handleAdd(e.row.templateId)}}},[t._v("新增协议")])]}}])})],1)],1),a("div",{staticClass:"page-box"},[a("Paginaction",{ref:"paginationEvent",staticClass:"pagination",attrs:{goPage:t.pageNum,totalNum:t.totalNum},on:{updateList:t.changePage}})],1)]),a("changeStatus",{attrs:{dataInfo:t.agreementInfo},on:{refresh:t.getDatalist},model:{value:t.statusDialog,callback:function(e){t.statusDialog=e},expression:"statusDialog"}})],1)},n=[],r=a("5176"),i=a.n(r),l=a("a4bb"),o=a.n(l),u=(a("ac6a"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:"修改状态",visible:t.show,center:"",width:"400px","close-on-click-modal":!1},on:{"update:visible":function(e){t.show=e},close:function(e){return t.resetForm("statusForm")}}},[a("el-form",{ref:"statusForm",staticClass:"statusForm",attrs:{model:t.statusForm,rules:t.rules}},[a("el-form-item",[a("p",{staticClass:"title"},[t._v("协议标题："+t._s(t.dataInfo.agreementName||t.EMPTYTEXT))])]),a("el-form-item",{attrs:{prop:"status"}},[a("el-radio-group",{model:{value:t.statusForm.status,callback:function(e){t.$set(t.statusForm,"status",e)},expression:"statusForm.status"}},t._l(t.statusOption,function(e){return a("el-radio",{key:e.value,attrs:{label:e.value}},[t._v(t._s(e.label))])}),1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){return t.resetForm("statusForm")}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("statusForm")}}},[t._v("确 认")])],1)],1)}),c=[],m={name:"change-status",props:{value:{type:Boolean},dataInfo:{type:Object,default:function(){}}},model:{prop:"value",event:"change"},watch:{value:function(t){this.show=this.value,!0===this.show&&(this.statusForm.status=""!==this.dataInfo.agreementStatus?this.dataInfo.agreementStatus:"")}},data:function(){return{show:this.value,statusForm:{status:""},statusOption:[{value:1,label:"已启用"},{value:2,label:"已禁用"}],rules:{status:[{required:!0,message:"请选择状态",trigger:"change"}]}}},methods:{submitForm:function(t){var e=this;this.$refs[t].validate(function(a){if(a){var s={};s.templateId=e.dataInfo.templateId,s.agreementStatus=e.statusForm.status,e.$http.post("http://bj-ihealthcare.com:52081/phs/family/agreementTemplate/updateStatus",s).then(function(a){200===a.code?(e.$message.success("操作成功"),e.show=!1,e.$emit("change",!1),e.$emit("refresh"),e.$refs[t].resetFields()):e.$message.error(a.msg)}).catch(function(t){e.$message.error(t)})}})},resetForm:function(t){this.show=!1,this.$emit("change",!1),this.$refs[t].resetFields()}}},p=m,g=(a("9ae4"),a("2877")),h=Object(g["a"])(p,u,c,!1,null,"9c7f1984",null),d=h.exports,f={name:"agreement-manage-list",components:{changeStatus:d},data:function(){return{searchKey:{agreementName:"",agreementType:""},agreementTypeOption:[{value:0,label:"全部"},{value:1,label:"签约协议"},{value:2,label:"解约协议"}],statusOption:{1:"已启用",2:"已禁用"},pageNum:1,pageSize:10,totalNum:0,dataList:[],statusDialog:!1,agreementInfo:{}}},created:function(){this.getDatalist()},methods:{handleAdd:function(t){this.$router.push({path:"/system-manage/agreement-manage/add",query:{id:t,status:"add"}})},handleDetail:function(t){this.$router.push({path:"/system-manage/agreement-manage/detail?id="+t.templateId})},handleStatus:function(t){this.statusDialog=!0,this.agreementInfo=t||{}},querylist:function(){this.pageNum=1,this.getDatalist()},Refreshlist:function(){var t=this;this.pageNum=1,this.pageSize=10,o()(this.searchKey).forEach(function(e){return t.searchKey[e]=""}),this.getDatalist()},changePage:function(t){this.pageNum=t.pageNum,this.pageSize=t.pageSize,this.getDatalist()},getDatalist:function(t){var e=this;this.$emit("viewLoad",!0);var a={};a.pageNum=this.pageNum,a.pageSize=this.pageSize,a=i()({},a,this.searchKey),this.$http.post("http://bj-ihealthcare.com:52081/phs/family/agreementTemplate/getByPage",a).then(function(t){200===t.code?(e.dataList=t.data.list||[],e.totalNum=t.data.total,e.pageNum=t.data.pageNum,e.pageSize=t.data.pageSize):e.$message.error(t.msg),e.$emit("viewLoad",!1)}).catch(function(t){e.$emit("viewLoad",!1),e.$message.error(t)})}}},b=f,v=Object(g["a"])(b,s,n,!1,null,"e4eefb9c",null);e["default"]=v.exports},5176:function(t,e,a){t.exports=a("51b6")},8712:function(t,e,a){},"9ae4":function(t,e,a){"use strict";var s=a("8712"),n=a.n(s);n.a}}]);
//# sourceMappingURL=chunk-b63fc9bc.12ee9869.js.map