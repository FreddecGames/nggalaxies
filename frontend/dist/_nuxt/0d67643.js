(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{318:function(t,e,r){t.exports=r.p+"img/user.bb44295.png"},344:function(t,e,r){"use strict";r.r(e);r(17),r(13),r(18),r(7),r(19),r(16),r(20);var n=r(8),o=r(5),l=(r(44),r(76));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={data:function(){return{login:{username:null,password:null},register:{username:null,password:null,confirmPassword:null},loginError:null,registerError:null,registerSuccess:null}},computed:d({},Object(l.c)({playfabSessionTicket:"playfabSessionTicket"})),methods:d(d({},Object(l.d)({setPlayfabSessionTicket:"setPlayfabSessionTicket"})),{},{onLogin:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loginError=null,e.prev=1,e.next=4,t.$axios.$post("https://titleId.playfabapi.com/Client/LoginWithEmailAddress",{TitleId:48360,Email:t.login.username,Password:t.login.password});case 4:r=e.sent,t.setPlayfabSessionTicket({value:r.data.SessionTicket}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t.loginError=e.t0.response.data.error,console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))()},onRegister:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.registerError=null,t.registerSuccess=null,t.register.password==t.register.confirmPassword){e.next=5;break}return t.registerError="PasswordsMismatch",e.abrupt("return");case 5:return e.prev=5,e.next=8,t.$axios.$post("https://titleId.playfabapi.com/Client/RegisterPlayFabUser",{TitleId:48360,Email:t.register.username,Password:t.register.password,RequireBothUsernameAndEmail:!1});case 8:e.sent,t.registerSuccess=!0,e.next=16;break;case 12:e.prev=12,e.t0=e.catch(5),t.registerError=e.t0.response.data.error,console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[5,12]])})))()}})},v=r(63),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal fade",attrs:{id:"userModal",tabindex:"-1","aria-hidden":"true"}},[n("div",{staticClass:"modal-dialog"},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-body p-1"},[n("div",{staticClass:"row g-1 flex-column align-items-center"},[n("div",{staticClass:"col"},[n("div",{staticClass:"p-1 d-flex align-items-center"},[n("img",{attrs:{src:r(318),width:"16",height:"16"}}),t._v(" "),n("span",{staticClass:"ms-2 h5"},[t._v(t._s(t.$t("submenuName_user")))])])]),t._v(" "),t.playfabSessionTicket?n("div",{staticClass:"col"},[n("div",{staticClass:"p-1"},[n("small",{staticClass:"text-success"},[t._v(t._s(t.$t("loggedIn")))])])]):t._e(),t._v(" "),t.playfabSessionTicket?t._e():n("div",{staticClass:"col"},[n("div",{staticClass:"p-1 lh-sm"},[n("small",{staticClass:"text-light"},[t._v(t._s(t.$t("login_text")))])])]),t._v(" "),t.playfabSessionTicket?t._e():n("div",{staticClass:"col"},[n("div",{staticClass:"row g-1 flex-column align-items-center"},[n("div",{staticClass:"col"},[n("div",{staticClass:"p-1"},[n("span",[t._v(t._s(t.$t("login_title")))])]),t._v(" "),n("div",{staticClass:"mb-1"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.login.username,expression:"login.username"}],staticClass:"form-control",attrs:{type:"email",placeholder:t.$t("login_username")},domProps:{value:t.login.username},on:{input:function(e){e.target.composing||t.$set(t.login,"username",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"mb-1"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.login.password,expression:"login.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:t.$t("login_password")},domProps:{value:t.login.password},on:{input:function(e){e.target.composing||t.$set(t.login,"password",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"px-0"},[n("div",{staticClass:"row gx-2 align-items-center"},[n("div",{staticClass:"col lh-sm"},[t.loginError?n("small",{staticClass:"text-danger"},[t._v(t._s(t.$t("error_"+t.loginError)))]):t._e()]),t._v(" "),n("div",{staticClass:"col-auto"},[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.onLogin()}}},[t._v("\n                                                "+t._s(t.$t("login_btn"))+"\n                                            ")])])])])]),t._v(" "),t._m(0),t._v(" "),t.registerSuccess?n("div",{staticClass:"col"},[n("div",{staticClass:"p-1"},[n("small",{staticClass:"text-success"},[t._v(t._s(t.$t("register_success")))])])]):t._e(),t._v(" "),t.registerSuccess?t._e():n("div",{staticClass:"col"},[n("div",{staticClass:"p-1"},[n("span",[t._v(t._s(t.$t("register_title")))])]),t._v(" "),n("div",{staticClass:"mb-1"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.register.username,expression:"register.username"}],staticClass:"form-control",attrs:{type:"email",placeholder:t.$t("register_username")},domProps:{value:t.register.username},on:{input:function(e){e.target.composing||t.$set(t.register,"username",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"mb-1"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.register.password,expression:"register.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:t.$t("register_password")},domProps:{value:t.register.password},on:{input:function(e){e.target.composing||t.$set(t.register,"password",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"mb-1"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.register.confirmPassword,expression:"register.confirmPassword"}],staticClass:"form-control",attrs:{type:"password",placeholder:t.$t("register_confirmPassword")},domProps:{value:t.register.confirmPassword},on:{input:function(e){e.target.composing||t.$set(t.register,"confirmPassword",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"px-0"},[n("div",{staticClass:"row gx-2 align-items-center"},[n("div",{staticClass:"col lh-sm"},[t.registerError?n("small",{staticClass:"text-danger"},[t._v(t._s(t.$t("error_"+t.registerError)))]):t._e()]),t._v(" "),n("div",{staticClass:"col-auto"},[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.onRegister()}}},[t._v("\n                                                "+t._s(t.$t("register_btn"))+"\n                                            ")])])])])])])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col"},[e("hr")])}],!1,null,null,null);e.default=component.exports}}]);