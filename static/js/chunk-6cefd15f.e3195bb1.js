(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6cefd15f"],{"210f":function(t,e,a){"use strict";var i={shortcuts:[{text:"昨天",onClick:function(t){var e=new Date;e.setTime(e.getTime()-864e5);var a=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate();t.$emit("pick",[a,a])}},{text:"今天",onClick:function(t){var e=new Date;t.$emit("pick",[e,e])}},{text:"上周",onClick:function(t){var e=new Date,a=e.getFullYear(),i=e.getMonth(),n=e.getDate(),s=e.getDay(),r=new Date(a,i,n-s-6),l=new Date(a,i,n-s);t.$emit("pick",[r,l])}},{text:"本周",onClick:function(t){var e=new Date,a=e.getFullYear(),i=e.getMonth(),n=e.getDate(),s=e.getDay(),r=new Date(a,i,n-s+1);t.$emit("pick",[r,e])}},{text:"上月",onClick:function(t){var e=new Date,a=e.getFullYear(),i=e.getMonth()-1,n=new Date(a,i,1),s=new Date(a,i,1),r=new Date(a,i+1,1),l=(r-s)/864e5,o=new Date(a,i,l);t.$emit("pick",[n,o])}},{text:"本月",onClick:function(t){var e=new Date,a=e.getFullYear(),i=e.getMonth(),n=new Date;n.setDate(1),n.setMonth(n.getMonth()-1);var s=new Date(a,i,1);t.$emit("pick",[s,e])}},{text:"本季度",onClick:function(t){var e=new Date,a=e.getFullYear(),i=e.getMonth(),n=0;i<3&&(n=0),2<i&&i<6&&(n=3),5<i&&i<9&&(n=6),i>8&&(n=9);var s=new Date(a,n,1);t.$emit("pick",[s,e])}},{text:"本年",onClick:function(t){var e=new Date,a=e.getFullYear(),i=new Date(a,0,1);t.$emit("pick",[i,e])}}]};e["a"]=i},2965:function(t,e,a){"use strict";var i=a("f879"),n=a.n(i);n.a},"3f7b":function(t,e,a){},"7d22":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list-common-box flex-column"},[a("div",{staticClass:"title-box"},[a("Breadcrumb",{attrs:{isLevel:2}})],1),a("div",{staticClass:"count-box flex-overflow"},[a("div",{staticClass:"count-top-box"},[a("div",{staticClass:"card-box"},[a("div",{staticClass:"search-bar"},[a("div",{staticClass:"search-left"},[a("div",{staticClass:"search-item"},[a("span",{staticClass:"search-label"},[t._v("统计时间")]),a("el-date-picker",{attrs:{type:"daterange",align:"left","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":t.pickerOptions,"value-format":"yyyy-MM-dd",clearable:""},on:{change:t.handleDatechange},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1),a("div",{staticClass:"search-item"},[a("span",{staticClass:"search-label"},[t._v("所属机构")]),a("treeselect",{attrs:{multiple:!1,options:t.OrganOptions,placeholder:"请选择机构"},model:{value:t.searchKey.organizationId,callback:function(e){t.$set(t.searchKey,"organizationId",e)},expression:"searchKey.organizationId"}})],1),a("div",{staticClass:"search-item"},[a("span",{staticClass:"search-label"},[t._v("所属团队")]),a("el-select",{attrs:{placeholder:"请选择团队",clearable:""},model:{value:t.searchKey.teamId,callback:function(e){t.$set(t.searchKey,"teamId",e)},expression:"searchKey.teamId"}},t._l(t.teamOptions,function(t){return a("el-option",{key:t.teamId,attrs:{label:t.teamName,value:t.teamId}})}),1)],1)]),a("div",{staticClass:"search-right"},[a("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-search"},on:{click:function(e){return t.querylist()}}},[t._v("查询")]),a("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-delete"},on:{click:function(e){return t.Refreshlist()}}},[t._v("清空")])],1)]),a("div",{staticClass:"table-box"},[a("el-table",{attrs:{data:t.dataList,"tooltip-effect":"dark",stripe:""}},[a("el-table-column",{attrs:{label:"序号",align:"center",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\r\n                "+t._s(e.$index+(t.pageNum-1)*t.pageSize+1)+"\r\n              ")]}}])}),a("el-table-column",{attrs:{prop:"labelName",label:"人群种类",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\r\n                "+t._s(e.row.labelName?e.row.labelName:t.EMPTYTEXT)+"\r\n              ")]}}])}),a("el-table-column",{attrs:{prop:"totalTarget",label:"目标签约人数",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\r\n                "+t._s(""!==e.row.totalTarget?e.row.totalTarget:t.EMPTYTEXT)+"\r\n              ")]}}])}),a("el-table-column",{attrs:{prop:"actualTotal",label:"实际签约人数",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("                  \r\n                "+t._s(""!==e.row.actualTotal?e.row.actualTotal:t.EMPTYTEXT)+"\r\n              ")]}}])}),a("el-table-column",{attrs:{prop:"actualTargetSignRate",label:"签约率（%）",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("                  \r\n                "+t._s(""!==e.row.actualTargetSignRate?e.row.actualTargetSignRate+"%":t.EMPTYTEXT)+"\r\n              ")]}}])}),a("el-table-column",{attrs:{prop:"actualAppoint",label:"履约人数",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("                  \r\n                "+t._s(""!==e.row.actualAppoint?e.row.actualAppoint:t.EMPTYTEXT)+"\r\n              ")]}}])}),a("el-table-column",{attrs:{prop:"actualAppointTime",label:"履约人次",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\r\n                "+t._s(""!==e.row.actualAppointTime?e.row.actualAppointTime:t.EMPTYTEXT)+"\r\n              ")]}}])}),a("el-table-column",{attrs:{prop:"appointRate",label:"履约率（%）",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("                  \r\n                "+t._s(""!==e.row.appointRate?e.row.appointRate+"%":t.EMPTYTEXT)+"\r\n              ")]}}])})],1)],1),a("div",{staticClass:"page-box"},[a("Paginaction",{ref:"paginationEvent",staticClass:"pagination",attrs:{goPage:t.pageNum,totalNum:t.totalNum,pageNum:t.pageSize},on:{updateList:t.changePage}})],1)])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.dataList.length>0,expression:"dataList.length>0"}],staticClass:"count-bottom-box"},[a("h3",[t._v("数据对比")]),a("div",{staticClass:"echart-box"},[a("ColumnChart",{directives:[{name:"show",rawName:"v-show",value:t.signData,expression:"signData"}],attrs:{id:"labelSignChart",chartData:t.signData}})],1),a("ColumnChart",{directives:[{name:"show",rawName:"v-show",value:t.signRateData,expression:"signRateData"}],attrs:{id:"labelSignRateChart",chartData:t.signRateData}})],1)])])},n=[],s=a("5176"),r=a.n(s),l=a("f499"),o=a.n(l),c=(a("a481"),a("a4bb")),u=a.n(c),h=(a("ac6a"),a("210f")),p=a("7026"),g=a.n(p),d=(a("542c"),a("e9ad")),f={name:"team-count",components:{Treeselect:g.a,ColumnChart:d["a"]},data:function(){return{date:"",searchKey:{startDate:"",endDate:"",organizationId:null,teamId:""},pickerOptions:h["a"],pageNum:1,pageSize:10,totalNum:0,dataList:[],OrganOptions:[],teamOptions:[],signData:null,signRateData:null,signDataObj:{title:"",legend:[],xAxis:[],series:[]},signRateDataObj:{title:"",legend:[],xAxis:[],series:[]}}},created:function(){this.getOrganList(),this.getTeamList(),this.getDatalist()},methods:{handleDatechange:function(t){t&&t.length>0?(this.searchKey.startDate=t[0],this.searchKey.endDate=t[1]):(this.searchKey.startDate="",this.searchKey.endDate="")},querylist:function(){this.pageNum=1,this.getDatalist()},Refreshlist:function(){var t=this;this.pageNum=1,this.pageSize=10,this.date="",u()(this.searchKey).forEach(function(e){return t.searchKey[e]=""}),this.searchKey.organizationId=null,this.getDatalist()},changePage:function(t){this.pageNum=t.pageNum,this.pageSize=t.pageSize,this.getDatalist()},getOrganList:function(){var t=this;this.$http.post("http://bj-ihealthcare.com:52081/phs/service/organization/getOrganization").then(function(e){if(200===e.code){var a=JSON.parse(o()(e.data).replace(/organizationId/g,"id").replace(/name/g,"label").replace(/childrens/g,"children"));t.OrganOptions=a}else t.OrganOptions=[],t.$message.error(e.msg)}).catch(function(e){t.$message.error(e)})},getTeamList:function(){var t=this;this.$http.post("http://bj-ihealthcare.com:52081/phs/family/team/getBy").then(function(e){200===e.code?t.teamOptions=e.data||[]:(t.teamOptions=[],t.$message.error(e.msg))}).catch(function(e){t.$message.error(e)})},getDatalist:function(t){var e=this;this.$emit("viewLoad",!0);var a={};a.pageNum=this.pageNum,a.pageSize=this.pageSize,a=r()({},a,this.searchKey),this.$http.post("http://bj-ihealthcare.com:52081/phs/family/label/getStatDtoByPage",a).then(function(t){if(200===t.code){if(e.dataList=t.data.list||[],e.totalNum=t.data.total,e.pageNum=t.data.pageNum,e.pageSize=t.data.pageSize,e.dataList.length>0){e.signData=r()({},e.signDataObj),e.signRateData=r()({},e.signRateDataObj);var a=[],i=[],n=[],s=[],l=[];e.dataList.forEach(function(t){a.push(t.labelName||""),i.push(t.totalTarget),n.push(t.actualTotal),s.push(t.actualTargetSignRate),l.push(t.appointRate)}),e.signData.type=1,e.signData.title="签约人数统计",e.signData.legend=["目标签约人数","实际签约人数"],e.signData.xAxis=a,e.signData.series=[i,n],e.signRateData.type=2,e.signRateData.title="签约率/履约率统计",e.signRateData.legend=["签约率","履约率"],e.signRateData.xAxis=a,e.signRateData.series=[s,l]}}else e.$message.error(t.msg);e.$emit("viewLoad",!1)}).catch(function(t){e.$emit("viewLoad",!1),e.$message.error(t)})}}},m=f,v=(a("2965"),a("2877")),b=Object(v["a"])(m,i,n,!1,null,null,null);e["default"]=b.exports},8390:function(t,e,a){"use strict";var i=a("3f7b"),n=a.n(i);n.a},e9ad:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"charts",attrs:{id:t.id}})},n=[],s=(a("ac6a"),a("7f7f"),a("313e")),r=a.n(s),l={name:"column-chart",props:{chartData:{type:Object,default:function(){}},id:{type:String,default:"charts"}},watch:{chartData:{handler:function(t,e){this.chartData=t,this.init()},deep:!0}},methods:{init:function(){var t=this,e=r.a.init(document.getElementById(this.id));e.setOption({textStyle:{fontSize:14},title:{text:this.chartData.title,left:"5%",textStyle:{color:"#62523a",fontSize:16}},legend:{data:this.chartData.legend,itemWidth:10,itemHeight:10,itemGap:60,textStyle:{color:"#746651"}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(e){for(var a=2===t.chartData.type?"%":1===t.chartData.type?"人":"",i=["linear-gradient(0deg,#5cf2c6 0%, #8cffb8 100%,#56ecc3 100%, #20d8cd 100%)","linear-gradient(180deg, #fde18d 0%,#ff8676 100%)"],n=["linear-gradient(0deg,#72c6f2 0%, #befaff 100%);","linear-gradient(180deg, #ffea8b 0%, #ffc376 100%)"],s=1===t.chartData.type?i:n,r=e[0].name+"<br/>",l=0;l<e.length;l++){var o='<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-image:'+s[l]+';"></span>';r+=o+e[l].seriesName+"："+e[l].value+" "+a+"<br/>"}return r}},grid:{left:"5%",right:"5%",bottom:"5%",containLabel:!0},xAxis:[{type:"category",data:this.chartData.xAxis,axisPointer:{type:"shadow"},axisLine:{lineStyle:{color:"#f5efea"}},axisLabel:{color:"#746651",interval:0,textStyle:{fontSize:14}}}],yAxis:[{type:"value",nameGap:30,min:2===this.chartData.type?0:null,max:2===this.chartData.type?100:null,splitNumber:5,axisLine:{lineStyle:{color:"#f5efea"}},splitLine:{lineStyle:{color:"#f5efea"}},axisLabel:{color:"#746651",formatter:2===this.chartData.type?"{value} %":"{value}",textStyle:{fontSize:14}}}],series:this.formatSeries()},!0),window.addEventListener("resize",function(){e.resize()})},formatSeries:function(){var t=this,e=[];if(this.chartData.series.length>0){var a=[];a=2===this.chartData.type?[["#72c6f2","#befaff"],["#ffea8b","#ffc376"]]:[["#5cf2c6","#8cffb8"],["#fde18d","#ff8676"]],this.chartData.series.forEach(function(i,n){var s={};s.name=t.chartData.legend[n],s.type="bar",s.data=i,s.barWidth=20,s.label={},s.label.normal={},s.label.normal.show=!0,s.label.normal.position="top",s.itemStyle={},s.itemStyle.normal={},s.itemStyle.normal.color=function(){return{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:a[n][0]},{offset:1,color:a[n][1]}]}},e.push(s)})}return e}}},o=l,c=(a("8390"),a("2877")),u=Object(c["a"])(o,i,n,!1,null,"37586dee",null);e["a"]=u.exports},f879:function(t,e,a){}}]);
//# sourceMappingURL=chunk-6cefd15f.e3195bb1.js.map