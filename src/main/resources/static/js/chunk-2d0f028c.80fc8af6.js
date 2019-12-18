(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f028c"],{"9ad2":function(e,a,r){"use strict";r.r(a);var t=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"account-settings-info-view"},[r("a-row",{attrs:{gutter:16}},[r("a-col",{attrs:{md:20}},[r("a-form",{attrs:{form:e.form}},[r("a-form-item",e._b({attrs:{label:"原密码"}},"a-form-item",e.formLayout,!1),[r("a-input-password",{directives:[{name:"decorator",rawName:"v-decorator",value:["oldPwd",{rules:[{required:!0,message:"请输入姓名!"}]}],expression:"['oldPwd',{ rules: [{ required: true, message: '请输入姓名!' }]}]"}],attrs:{placeholder:"输入原密码"}})],1),r("a-form-item",e._b({attrs:{label:"新密码"}},"a-form-item",e.formLayout,!1),[r("a-input-password",{directives:[{name:"decorator",rawName:"v-decorator",value:["newPwd",{rules:[{required:!0,message:"输入新密码!"},{pattern:/^[\w]{6,10}$/,message:"密码格式 必须位 6-15位数字或字母"},{validator:e.handleNewPwd}],validateFirst:!0}],expression:"['newPwd',{ rules: [{ required: true, message: '输入新密码!' },\n                                             {pattern: /^[\\w]{6,10}$/, message: '密码格式 必须位 6-15位数字或字母'},\n                                             {validator: handleNewPwd}], validateFirst: true}]"}],attrs:{name:"newPwd",placeholder:"输入新密码"}})],1),r("a-form-item",e._b({attrs:{label:"确认密码"}},"a-form-item",e.formLayout,!1),[r("a-input-password",{directives:[{name:"decorator",rawName:"v-decorator",value:["confirmNewPwd",{rules:[{required:!0,message:"输入确认密码!"},{pattern:/^[\w]{6,10}$/,message:"密码格式 必须位 6-15位数字或字母"},{validator:e.handleConfirmNewPwd}],validateFirst:!0}],expression:"['confirmNewPwd',{ rules: [{ required: true, message: '输入确认密码!' },\n                                                    {pattern: /^[\\w]{6,10}$/, message: '密码格式 必须位 6-15位数字或字母'},\n                                                    {validator: handleConfirmNewPwd}], validateFirst: true}]"}],attrs:{name:"confirmNewPwd",placeholder:"输入确认密码"}})],1),r("a-form-item",[r("a-row",[r("a-col",{attrs:{xs:24,sm:4}}),r("a-col",{attrs:{xs:24,sm:19}},[r("a-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:e.handleBtnClick}},[e._v("保存")])],1)],1)],1)],1)],1)],1)],1)},n=[],o=(r("d3b7"),r("5723")),s={name:"Pwd",data:function(){return{form:this.$form.createForm(this),formLayout:{labelCol:{xs:{span:24},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:15}}},btnLoading:!1}},methods:{handleNewPwd:function(e,a,r){var t=this.form.getFieldValue("confirmNewPwd");t&&t!==a?r(new Error("新密码和确认密码不一致")):r()},handleConfirmNewPwd:function(e,a,r){var t=this.form.getFieldValue("newPwd");t&&t!==a?r(new Error("确认密码和新密码输入不一致")):r()},handleBtnClick:function(){var e=this;this.form.validateFields((function(a,r){a||(e.btnLoading=!0,Object(o["a"])({newPwd:r.newPwd,oldPwd:r.oldPwd}).then((function(a){a.status&&setTimeout((function(){e.form.resetFields()}),1e3)})).finally((function(){e.btnLoading=!1})))}))}}},i=s,d=r("2877"),l=Object(d["a"])(i,t,n,!1,null,null,null);a["default"]=l.exports}}]);