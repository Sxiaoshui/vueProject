(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a05c89dc"],{"03c5":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.signInfo?a("div",{staticClass:"table-detail-box sign-detail flex-column"},[a("div",{staticClass:"title-box"},[a("Breadcrumb",[a("span",{attrs:{slot:"custom"},slot:"custom"},[t._v(t._s(t.signInfo.familyPerson&&t.signInfo.familyPerson.userName))])])],1),a("div",{staticClass:"inner-box flex-overflow"},[a("table",{staticClass:"default-table resident-table",attrs:{cellspacing:"0",cellspadding:"0"}},[t.signInfo.familyPerson?[a("tr",[a("th",[t._v("姓名")]),a("td",[a("span",[t._v(t._s(t.signInfo.familyPersonsignInfo.familyPerson.userName||t.EMPTYTEXT))]),a("el-link",{attrs:{type:"primary",underline:!1},on:{click:function(e){return t.handleView(t.signInfo.familyPerson.personId,t.signInfo.familyPerson.userName)}}},[a("cc-svg-icon",{attrs:{"icon-class":"magnifier"}}),t._v(" 查看协议")],1)],1)]),a("tr",[a("th",[t._v("性别")]),a("td",[t._v(t._s(t.signInfo.familyPerson.sexTypeStr||t.EMPTYTEXT))])]),a("tr",[a("th",[t._v("身份证号")]),a("td",[t._v(t._s(t.signInfo.familyPerson.idNo||t.EMPTYTEXT))])])]:t._e(),a("tr",[a("th",[t._v("服务包信息")]),a("td",{staticClass:"tstd"},[a("table",{attrs:{cellspacing:"0",cellspadding:"0"}},[t._m(0),t.signInfo.packages&&t.signInfo.packages.length>0?t._l(t.signInfo.packages,function(e,s){return a("tr",{key:s},[a("td",[t._v(t._s(e.packageName||t.EMPTYTEXT))]),a("td",[t._v(t._s(1===e.packageType?"收费":2===e.packageType?"免费":t.EMPTYTEXT))]),a("td",{staticClass:"large"},[t._v(t._s(e.createDateStr+t.EMPTYTEXT+e.invalidDateStr))]),a("td",[t._v(t._s(e.packageOriginalPrice||t.EMPTYTEXT))]),a("td",[t._v(t._s(e.packageDiscountPrice||t.EMPTYTEXT))]),a("td",[t._v(t._s(e.positionName||t.EMPTYTEXT))]),a("td",[t._v(t._s(e.invalidStatusStr||t.EMPTYTEXT))])])}):[a("tr",[a("td",{attrs:{colspan:"7"}},[t._v(t._s(t.EMPTYTEXT))])])]],2)])]),a("tr"),a("tr",[a("th",[t._v("总服务价格")]),a("td",[t._v(t._s(t.signInfo.totalOriginalPrice||t.EMPTYTEXT))])]),a("tr",[a("th",[t._v("总优惠价格")]),a("td",[t._v(t._s(t.signInfo.totalDiscountPrice||t.EMPTYTEXT))])]),a("tr",[a("th",[t._v("所属机构")]),a("td",[t._v(t._s(t.signInfo.registerOrganization||t.EMPTYTEXT))])]),t._m(1),t.signInfo.packages&&t.signInfo.packages.length>0?t._l(t.signInfo.packages,function(e,s){return a("tr",{key:s},[a("th",[t._v(t._s(e.packageName||t.EMPTYTEXT))]),a("td",{staticClass:"tstd"},[a("table",{staticClass:"tTable",attrs:{cellspacing:"0",cellspadding:"0"}},[e.items.length>0?t._l(e.items,function(s,n){return a("tr",{key:n},[s.parentItemId?t._e():[a("td",[t._v(t._s(s.itemName||t.EMPTYTEXT))]),a("td",{class:16===s.appointType?"flex-column":""},[16===s.appointType?t._l(t.forMatName(e.items,s.itemId),function(e,s){return a("td",{key:s},[t._v(t._s(e.itemName))])}):[t._v("-")]],2),a("td",[t._v(t._s(t.appointType[s.appointType]))]),a("td",[t._v(t._s(t.appointFormat[s.appointFormat]))]),a("td",[t._v(t._s(s.appointNum))]),a("td",[t._v("已服务次数")])]],2)}):[a("tr",[a("td",[t._v(t._s(t.EMPTYTEXT))])])]],2)])])}):[a("tr",[a("th",[t._v(t._s(t.EMPTYTEXT))]),a("td",[t._v(t._s(t.EMPTYTEXT))])])]],2)])]):t._e()},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",[t._v("名称")]),a("td",[t._v("服务包类型")]),a("td",{staticClass:"large"},[t._v("服务期限")]),a("td",[t._v("服务价格")]),a("td",[t._v("优惠价格")]),a("td",[t._v("生效区域")]),a("td",[t._v("是否过期")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",[t._v("服务包名称")]),a("td",{staticClass:"tstd"},[a("table",{staticClass:"tTable",attrs:{cellspacing:"0",cellspadding:"0"}},[a("tr",[a("td",[t._v("服务项目名称")]),a("td",[t._v("执行项")]),a("td",[t._v("履约类型")]),a("td",[t._v("履约格式（每）")]),a("td",[t._v("周期履约次数")]),a("td",[t._v("已服务次数")])])])])])}],i={name:"sign-detail",data:function(){return{signInfo:null,appointFormat:{1:"年",2:"季度",4:"月",8:"日"},appointType:{1:"测量类",2:"标记类",4:"公共卫生类",8:"指导类",16:"组合类"}}},created:function(){this.getDetailInfo()},methods:{handleView:function(t,e){this.$router.push({path:"/resident-manage/family-archives/agreement-list",query:{id:t,name:e}})},forMatName:function(t,e){var a=t.filter(function(t){return t.parentItemId===e});return a},getDetailInfo:function(){var t=this;this.$emit("viewLoad",!0),this.$http.get("http://bj-ihealthcare.com:52081/phs/family/service/getDtoByServiceId?serviceId="+this.$route.query.id).then(function(e){200===e.code?t.signInfo=e.data:t.$message.error(e.msg),t.$emit("viewLoad",!1)}).catch(function(e){t.$emit("viewLoad",!1),t.$message.error(e)})}}},r=i,o=(a("f330"),a("2877")),l=Object(o["a"])(r,s,n,!1,null,"149290be",null);e["default"]=l.exports},"36af":function(t,e,a){},f330:function(t,e,a){"use strict";var s=a("36af"),n=a.n(s);n.a}}]);
//# sourceMappingURL=chunk-a05c89dc.9261c74c.js.map