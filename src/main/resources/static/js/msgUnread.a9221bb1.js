(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["msgUnread"],{"2b3a":function(e,a,t){"use strict";var r=t("4766"),i=t.n(r);i.a},4766:function(e,a,t){},"520a":function(e,a,t){"use strict";var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"table-page-search-wrapper"},[t("a-form",{ref:"searchForm",attrs:{layout:"inline",form:e.form}},[t("a-row",{attrs:{gutter:20}},[e._l(e.searchFields,(function(a,r){return r<e.size?t("a-col",{key:r,attrs:{md:e.cmd,sm:24}},[t("a-form-item",{attrs:{label:a.name}},[a.type&&"input"!==a.type?"select"===a.type?t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:[a.code],expression:"[item.code]"}],attrs:{placeholder:"请选择"+a.name}},e._l(a.list,(function(a,r){return t("a-select-option",{key:r,attrs:{value:a.value?a.value:a.label}},[e._v(e._s(a.label?a.label:a.value)+" ")])})),1):"date"===a.type?t("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:[a.code],expression:"[item.code]"}],attrs:{placeholder:"请选择"+a.name}}):"datetime"===a.type?t("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:[a.code],expression:"[item.code]"}],attrs:{"show-time":"",placeholder:"请选择"+a.name}}):"radio"===a.type?t("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:[a.code],expression:"[item.code]"}]},e._l(a.list,(function(a,r){return t("a-radio",{key:r,attrs:{value:a.value?a.value:a.label}},[e._v(" "+e._s(a.label?a.label:a.value)+" ")])})),1):[e._v("类型不支持")]:t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:[a.code],expression:"[item.code]"}],attrs:{placeholder:"请输入"+a.name},on:{pressEnter:e.handleSearch}})],2)],1):e._e()})),e.advanced?e._l(e.searchFields,(function(a,r){return r>=e.size?t("a-col",{key:r,attrs:{md:e.cmd,sm:24}},[t("a-form-item",{attrs:{label:a.name}},[a.type&&"input"!==a.type?"select"===a.type?t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:[a.code],expression:"[item.code]"}],attrs:{placeholder:"请选择"+a.name}},e._l(a.list,(function(a,r){return t("a-select-option",{key:r,attrs:{value:a.value?a.value:a.label}},[e._v(e._s(a.label?a.label:a.value)+" ")])})),1):"date"===a.type?t("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:[a.code],expression:"[item.code]"}],attrs:{placeholder:"请选择"+a.name}}):"datetime"===a.type?t("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:[a.code],expression:"[item.code]"}],attrs:{"show-time":"",placeholder:"请选择"+a.name}}):"radio"===a.type?t("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:[a.code],expression:"[item.code]"}]},e._l(a.list,(function(a,r){return t("a-radio",{key:r,attrs:{value:a.value?a.value:a.label}},[e._v(" "+e._s(a.label?a.label:a.value)+" ")])})),1):[e._v("类型不支持")]:t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:[a.code],expression:"[item.code]"}],attrs:{placeholder:"请输入"+a.name},on:{pressEnter:e.handleSearch}})],2)],1):e._e()})):e._e(),e.searchFields.length>e.size?t("a-col",{attrs:{md:!e.advanced&&e.cmd||24,sm:24}},[t("span",{staticClass:"table-page-search-submitButtons",style:e.advanced&&{float:"right",overflow:"hidden"}||{}},[t("a-button",{staticStyle:{"margin-right":"10px"},attrs:{type:"primary"},on:{click:e.handleSearch}},[e._v("查询")]),t("a-button",{staticStyle:{"margin-right":"10px"},on:{click:e.handleReset}},[e._v("重置")]),t("a",{staticStyle:{"margin-left":"8px"},on:{click:e.toggleAdvanced}},[e._v(" "+e._s(e.advanced?"收起":"展开")+" "),t("a-icon",{attrs:{type:e.advanced?"up":"down"}})],1)],1)]):t("a-col",{attrs:{md:e.cmd,sm:24}},[t("span",{staticClass:"table-page-search-submitButtons"},[t("a-button",{staticStyle:{"margin-right":"10px"},attrs:{type:"primary"},on:{click:e.handleSearch}},[e._v("查询")]),t("a-button",{on:{click:e.handleReset}},[e._v("重置")])],1)])],2)],1)],1)},i=[],n=(t("d81d"),t("a9e3"),t("ca00")),o={name:"SearchForm",data:function(){return{form:this.$form.createForm(this),advanced:!1,dateFmt:"YYYY-MM-DD",datetimeFmt:"YYYY-MM-DD HH:mm:ss"}},props:{searchFields:{type:Array,required:!0},pmd:{type:Number,default:6}},computed:{cmd:function(){var e=this.pmd;return 6===e||8===e||12===e?e:6},size:function(){var e=this.pmd;return 6===e||8===e||12===e?24/e-1:3}},methods:{handleSearch:function(){var e=this,a=[],t=[];this.searchFields.map((function(e,r){"date"===e.type&&a.push(e.code),"datetime"===e.type&&t.push(e.code)}));var r=this.form.getFieldsValue();a.map((function(a){r[a]&&(r[a]=r[a].format(e.dateFmt))})),t.map((function(a){r[a]&&(r[a]=r[a].format(e.datetimeFmt))})),r=Object(n["b"])(r),this.$emit("search",r)},handleReset:function(){this.form.resetFields(),this.handleSearch()},toggleAdvanced:function(){this.advanced=!this.advanced}}},s=o,c=t("2877"),l=Object(c["a"])(s,r,i,!1,null,null,null);a["a"]=l.exports},"89ff":function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("a-card",{attrs:{bordered:!1}},[t("search-form",{attrs:{searchFields:e.searchFields,pmd:8},on:{search:e.handleSearchEvent}}),t("a-list",{attrs:{itemLayout:"horizontal",size:"large",loading:e.loading,pagination:e.pagination,dataSource:e.data},scopedSlots:e._u([{key:"renderItem",fn:function(a){return t("a-list-item",{key:"item.title"},[t("a",{attrs:{slot:"actions"},on:{click:function(t){return e.handleRead(a.id)}},slot:"actions"},[e._v("已阅")]),t("a-list-item-meta",{attrs:{description:a.content}},[t("a",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[e._v(e._s(a.title)+" "),t("small",{staticClass:"small-title-time"},[e._v(e._s(e._f("Calendar")(a.createTime))+" ")])]),t("a-avatar",{attrs:{slot:"avatar",src:e.fileServer+"/"+a.logo},slot:"avatar"})],1)],1)}}])})],1)},i=[],n=(t("4de4"),t("d3b7"),t("5723")),o=t("520a"),s={name:"MsgUnread",components:{SearchForm:o["a"]},data:function(){var e=this;return{loading:!1,data:[],searchFields:[{name:"标题",code:"title"},{name:"内容",code:"content"},{name:"开始时间",code:"start",type:"datetime"},{name:"结束时间",code:"end",type:"datetime"}],filter:{},pagination:{total:0,current:1,pageSize:6,onChange:function(a,t){e.pagination.current=a,e.pagination.pageSize=t,e.loadData()}}}},created:function(){this.loadData()},methods:{loadData:function(){var e=this;this.loading=!0;var a={filter:this.filter,current:this.pagination.current,pageSize:this.pagination.pageSize};Object(n["f"])(a).then((function(a){e.data=a.data.records,e.pagination.current=a.data.current,e.pagination.total=a.data.total,e.pagination.pageSize=a.data.pageSize,a.status&&e.$store.commit("SET_UNREAD_COUNT",a.data.total)})).finally((function(){e.loading=!1}))},handleSearchEvent:function(e){this.pagination.current=1,this.pagination.total=0,this.filter=e,this.loadData()},handleRead:function(e){var a=this;Object(n["h"])(e).then((function(e){e.status&&a.loadData()}))}}},c=s,l=(t("2b3a"),t("2877")),d=Object(l["a"])(c,r,i,!1,null,null,null);a["default"]=d.exports}}]);