(window.webpackJsonp=window.webpackJsonp||[]).push([["kP7L"],{kP7L:function(t,e,n){"use strict";n.r(e);var l=n("t3Un");var a={filters:{statusFilter:function(t){return{published:"success",draft:"gray",deleted:"danger"}[t]}},data:function(){return{list:null,listLoading:!0}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.listLoading=!0,function(t){return Object(l.a)({url:"/table/list",method:"get",params:t})}(this.listQuery).then(function(e){t.list=e.data.items,console.log(t.list),t.listLoading=!1})}}},s=n("ZrdR"),i=Object(s.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"ID",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.$index)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Title"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.title)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Author",width:"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.author))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Pageviews",width:"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.pageviews)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{"class-name":"status-col",label:"Status",width:"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tag",{attrs:{type:t._f("statusFilter")(e.row.status)}},[t._v(t._s(e.row.status))])]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",prop:"created_at",label:"Display_time",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("i",{staticClass:"el-icon-time"}),t._v(" "),n("span",[t._v(t._s(e.row.display_time))])]}}])})],1)],1)},[],!1,null,null,null);i.options.__file="index.vue";e.default=i.exports}}]);