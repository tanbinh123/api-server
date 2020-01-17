(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["resetPwd"],{"30a5":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-form-item",e._b({attrs:{label:!!e.showLabel&&e.inputName}},"a-form-item",!!e.showLabel&&e.formLayout,!1),[a("a-popover",{attrs:{placement:e.placement,trigger:["focus"]},model:{value:e.state.passwordLevelChecked,callback:function(t){e.$set(e.state,"passwordLevelChecked",t)},expression:"state.passwordLevelChecked"}},[a("template",{slot:"content"},[a("div",{style:{width:"240px"}},[a("div",{class:["user-register",e.passwordLevelClass]},[e._v("强度："),a("span",[e._v(e._s(e.passwordLevelName))])]),a("a-progress",{attrs:{percent:e.state.percent,showInfo:!1,strokeColor:e.passwordLevelColor}}),a("div",{staticStyle:{"margin-top":"10px"}},[a("span",[e._v("请至少输入 6 个字符。请不要使用容易被猜到的密码。")])])],1)]),a("a-input-password",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.inputId,{rules:[{required:!0,message:"输入新密码!"},{validator:this.handlePasswordLevel}],validateTrigger:["change","blur"],validateFirst:!0}],expression:"[inputId,{ rules: [{ required: true, message: '输入新密码!' },{ validator: this.handlePasswordLevel }],\n                              validateTrigger: ['change', 'blur'], validateFirst: true}]"}],attrs:{size:e.inputSize,autocomplete:"false",placeholder:"请输入"+e.inputName},on:{click:e.handlePasswordInputClick}},[e.inputPrefixIcon?a("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:e.inputPrefixIcon},slot:"prefix"}):e._e()],1)],2)],1)},s=[],o=a("ac0d"),i={0:"低",1:"低",2:"中",3:"强"},n={0:"error",1:"error",2:"warning",3:"success"},l={0:"#ff0000",1:"#ff0000",2:"#ff7e05",3:"#52c41a"},d={name:"PasswordLevel",mixins:[o["c"]],props:{inputId:{type:String,default:"password"},inputName:{type:String,default:"密码"},inputSize:{type:String,default:"default"},inputPrefixIcon:{type:String,default:""},showLabel:{type:Boolean,default:!0},formLayout:{type:Object,default:function(){return{}}}},data:function(){return{state:{passwordLevel:0,passwordLevelChecked:!1,percent:10,progressColor:"#FF0000"},placement:"rightTop"}},computed:{passwordLevelClass:function(){return n[this.state.passwordLevel]},passwordLevelName:function(){return i[this.state.passwordLevel]},passwordLevelColor:function(){return l[this.state.passwordLevel]}},methods:{handlePasswordLevel:function(e,t,a){var r=0;t.length<6?a(new Error("密码不能少于6个字符")):t.length>20?a(new Error("密码不能多于20个字符")):(/[0-9]/.test(t)&&r++,/[a-zA-Z]/.test(t)&&r++,/[^0-9a-zA-Z_]/.test(t)&&r++,this.state.passwordLevel=r,this.state.percent=30*r,r>=2?(r>=3&&(this.state.percent=100),a()):(0===r&&(this.state.percent=10),a(new Error("密码强度不够"))))},handlePasswordInputClick:function(){this.isMobile()&&(this.placement="bottom"),this.state.passwordLevelChecked=!0}}},u=d,p=a("2877"),c=Object(p["a"])(u,r,s,!1,null,"42b2bf7d",null);t["a"]=c.exports},"991c":function(e,t,a){"use strict";var r=a("d931"),s=a.n(r);s.a},bdb4:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[a("a-form",{ref:"formReset",attrs:{form:e.form},on:{submit:e.handleSubmit}},[e.errorMsg?a("a-alert",{staticStyle:{"margin-bottom":"24px"},attrs:{type:"error",showIcon:"",message:e.errorMsg}}):e._e(),a("a-form-item",{staticStyle:{"text-align":"center"}},[a("a-radio-group",{attrs:{buttonStyle:"solid"},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[a("a-radio-button",{attrs:{value:"phone"}},[e._v("手机号")]),a("a-radio-button",{attrs:{value:"email"}},[e._v("电子邮箱")])],1)],1),"phone"===e.type?a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["phone",{validateFirst:!0,rules:[{required:!0,message:"请输入手机号"},{pattern:/^[1][3,4,5,6,7,8,9][0-9]{9}$/,message:"请输入格式正确的手机号"}],validateTrigger:"blur"}],expression:"['phone',{validateFirst: true,rules: [{ required: true, message: '请输入手机号' },\n                                                           {pattern: /^[1][3,4,5,6,7,8,9][0-9]{9}$/, message: '请输入格式正确的手机号'}], validateTrigger: 'blur'}]"}],attrs:{size:"large",placeholder:"手机号"}},[a("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"phone"},slot:"prefix"})],1)],1):e._e(),"email"===e.type?a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["email",{validateFirst:!0,rules:[{required:!0,message:"请输入邮箱"},{pattern:/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,message:"请输入格式正确的邮箱地址"}],validateTrigger:"blur"}],expression:"['email',{validateFirst: true,rules: [{ required: true, message: '请输入邮箱' },\n                                                           {pattern: /^[A-Za-z0-9\\u4e00-\\u9fa5]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$/, message: '请输入格式正确的邮箱地址'}], validateTrigger: 'blur'}]"}],attrs:{size:"large",placeholder:"邮箱"}},[a("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"mail"},slot:"prefix"})],1)],1):e._e(),a("a-row",{attrs:{gutter:16}},[a("a-col",{staticClass:"gutter-row",attrs:{span:16}},[a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["code",{rules:[{required:!0,message:"请输入验证码"}],validateTrigger:"blur"}],expression:"['code', {rules: [{ required: true, message: '请输入验证码' }], validateTrigger: 'blur'}]"}],attrs:{size:"large",type:"text",placeholder:"验证码"}})],1)],1),a("a-col",{staticClass:"gutter-row",attrs:{span:8}},[a("a-button",{staticClass:"sendCodeBtn",attrs:{size:"large",disabled:e.smsSendBtnState},domProps:{textContent:e._s(e.smsSendBtnState?e.time+" s":"获取验证码")},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.getCode(t)}}})],1)],1),a("password",{attrs:{inputId:"password",showLabel:!1,inputPrefixIcon:"lock",inputSize:"large"}}),a("a-form-item",[a("a-input-password",{directives:[{name:"decorator",rawName:"v-decorator",value:["confirmPassword",{validateFirst:!0,rules:[{required:!0,message:"请输入确认密码"},{validator:e.handleConfirmPassword}],validateTrigger:["change","blur"]}],expression:"['confirmPassword',{validateFirst: true, rules: [{ required: true, message: '请输入确认密码' },\n                                                                      {validator: handleConfirmPassword}],\n                                         validateTrigger: ['change', 'blur']} ]"}],attrs:{size:"large",type:"password",autocomplete:"false",placeholder:"确认密码"}},[a("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1),a("a-form-item",{staticStyle:{"margin-top":"24px"}},[a("a-button",{staticClass:"yesBtn",attrs:{size:"large",type:"primary",htmlType:"submit",loading:e.resetBtnState,disabled:e.resetBtnState}},[e._v("确定")])],1)],1)],1)},s=[],o=(a("d3b7"),a("5723")),i=a("30a5"),n={name:"ResetPwd",components:{Password:i["a"]},data:function(){return{form:this.$form.createForm(this),errorMsg:"",type:"phone",resetBtnState:!1,time:60,smsSendBtnState:!1}},created:function(){},methods:{handleConfirmPassword:function(e,t,a){var r=this.form.getFieldValue("password");r&&r!==t?a(new Error("确认密码和密码输入不一致")):a()},getCode:function(e){var t=this;e.preventDefault(),this.form.validateFields(["phone","email"],{force:!0},(function(e,a){if(!e){t.smsSendBtnState=!0;var r,s=window.setInterval((function(){t.time--<=0&&(t.time=60,t.smsSendBtnState=!1,window.clearInterval(s))}),1e3);"email"===t.type?r=Object(o["j"])(a.email):"phone"===t.type&&(r=Object(o["k"])(a.phone)),r.then((function(e){e.status||(clearInterval(s),t.time=60,t.smsSendBtnState=!1)})).catch((function(e){clearInterval(s),t.time=60,t.smsSendBtnState=!1}))}}))},handleSubmit:function(e){var t=this;e.preventDefault();var a=this.form.validateFields;a({force:!0},(function(e,a){if(!e){t.resetBtnState=!0;var r={};r.account="email"===t.type?a.email:a.phone,r.password=a.password,r.code=a.code,Object(o["i"])(r).then((function(e){e.status&&setTimeout((function(){t.$router.push({name:"Login"})}),2e3)})).finally((function(){t.resetBtnState=!1}))}}))}}},l=n,d=(a("991c"),a("2877")),u=Object(d["a"])(l,r,s,!1,null,"d386f940",null);t["default"]=u.exports},d931:function(e,t,a){}}]);