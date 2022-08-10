(function(){"use strict";var t={2433:function(t,e,a){a(6992),a(8674),a(9601),a(7727);var n=a(144),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",{staticClass:"pa-3"},[a("v-overlay",{attrs:{value:t.overlay}},[a("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1),a("v-row",{staticClass:"mb-2",attrs:{"no-gutters":""}},[a("v-spacer"),a("v-btn",{attrs:{color:"primary",outlined:"",disabled:t.passData.button&&1==t.passData.button.restrict_btn.rules.disabled},on:{click:function(e){return t.newPass()}}},[t._v(" 新辦 ")])],1),t._l(t.passData,(function(e,n){return a("v-hover",{key:n,scopedSlots:t._u([{key:"default",fn:function(o){var s=o.hover;return[a("v-row",{staticClass:"row-border hover-bd-l-color py-lg-4 pr-lg-0 py-md-2 pr-md-0 py-5 pr-2 pl-2 mr-3",attrs:{"no-gutters":""}},[a("v-col",{attrs:{lg:"2",md:"2",cols:"4"}},[a("v-row",{attrs:{"no-gutters":""}},[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,s=e.attrs;return[a("v-icon",t._g(t._b({staticStyle:{cursor:"pointer"},attrs:{size:"35",color:"black"},on:{click:function(){t.currentPassDataIndex=n,t.controllDialog(!0,1,"","")}}},"v-icon",s,!1),o),[t._v("mdi-information-outline ")])]}}],null,!0)},[a("span",[t._v("審核意見")])]),a("div",{staticClass:"d-flex ml-3 pa-0 pr-3",staticStyle:{"font-size":"25px","line-height":"40px"}},[t._v(" "+t._s(e.list_data.app_smye)+"-"+t._s(e.list_data.app_smty))])],1)],1),a("v-col",{attrs:{lg:"2",md:"2",cols:"12"}},[a("div",{style:{"font-size":"30px","line-height":"40px","font-weight":s?"bold":"normal"}},[t._v(" "+t._s(e.list_data.plate_number)+" ")])]),a("v-col",{attrs:{lg:"2",md:"2",cols:"4"}},[a("div",{staticClass:"d-flex pa-0 pr-3",staticStyle:{"font-size":"23px","line-height":"40px"}},[t._v(" "+t._s(t.changePassTypeToString(e.list_data.app_pass_type)))])]),a("v-col",{attrs:{lg:"1",md:"1",cols:"4"}},[a("div",{staticClass:"d-flex pa-0 pr-3",staticStyle:{"font-size":"23px","line-height":"40px"}},[t._v(" "+t._s(t.changeStatusToString(e.list_data.todo_flag)))])]),a("v-col",{attrs:{lg:"3",md:"3",cols:"12"}},[0!=e.list_data.todo_date.length?a("div",{staticClass:"d-flex pa-0 pr-3 txt-overflow",staticStyle:{"font-size":"20px","line-height":"40px"}},[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,s=n.attrs;return[a("span",t._g(t._b({staticClass:"txt-overflow"},"span",s,!1),o),[t._v(" "+t._s(t.changeTodoFlagString(e.list_data)))])]}}],null,!0)},[a("span",[t._v(" "+t._s(t.changeTodoFlagString(e.list_data)))])])],1):t._e()]),a("v-col",{staticClass:"d-flex justify-end pr-2",attrs:{lg:"2",md:"2",cols:"12"}},t._l(e.button,(function(o,r){return a("div",{key:o.type},["del_button"==o.type?a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(i){var l=i.on,c=i.attrs;return[a("v-icon",t._g(t._b({class:{"mr-7":r+1!=e.button.length},style:1==o.rules.disabled?"cursor:not-allowed":"cursor:pointer",attrs:{size:"35",color:s?1==o.rules.disabled?"grey":"black":"grey"},on:{click:function(e){1==o.rules.disabled||t.deleteDialog(n)}}},"v-icon",c,!1),l),[t._v("mdi-delete-outline ")])]}}],null,!0)},[a("span",[t._v(t._s(1==o.rules.disabled?t.changeDBMToString(o.rules.delete_button_msg):o.value))])]):"pay_button"==o.type?a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(i){var l=i.on,c=i.attrs;return[a("v-icon",t._g(t._b({class:{"mr-7":r+1!=e.button.length},style:1==o.rules.disabled?"cursor:not-allowed":"cursor:pointer",attrs:{size:"35",color:s?1==o.rules.disabled?"grey":"black":"grey"},on:{click:function(a){1==o.rules.disabled||t.payDialog(n,e,o)}}},"v-icon",c,!1),l),[t._v("mdi-cash ")])]}}],null,!0)},[a("span",[t._v(t._s(1==o.rules.disabled?t.changePBMToString(o.rules.payment_button_msg):o.value))])]):"reapp_button"==o.type?a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(i){var l=i.on,c=i.attrs;return[a("v-icon",t._g(t._b({class:{"mr-7":r+1!=e.button.length},style:1==o.rules.disabled?"cursor:not-allowed":"cursor:pointer",attrs:{size:"35",color:s?1==o.rules.disabled?"grey":"black":"grey"},on:{click:function(a){1==o.rules.disabled||t.renewPass(n,e)}}},"v-icon",c,!1),l),[t._v("mdi-clipboard-check-outline ")])]}}],null,!0)},[a("span",[t._v(t._s(1==o.rules.disabled?t.changeRBMToString(o.rules.reapp_button_msg):o.value))])]):t._e()],1)})),0)],1)]}}],null,!0)})})),t.getFirstDataState&&0==t.passData.length?a("v-alert",{attrs:{type:"info",text:""}},[t._v(" 無資料 ")]):t._e(),a("v-dialog",{attrs:{"max-width":"600"},model:{value:t.dialog.show,callback:function(e){t.$set(t.dialog,"show",e)},expression:"dialog.show"}},[0==t.dialog.index?a("v-card",[a("v-card-title",{staticClass:"text-h5"},[t._v(" "+t._s(t.dialog.title)+" ")]),a("v-card-text",{staticClass:"text-h6"},[t._v(" "+t._s(t.dialog.msg)+" ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog.show=!1}}},[t._v(" close ")])],1)],1):1==t.dialog.index?a("v-card",[a("v-card-title",{staticClass:"text-h5"},[t._v(" 審核意見 ")]),a("v-card-text",[t._l(t.passData[t.currentPassDataIndex].list_data.check_reason,(function(e){return a("v-row",{key:e.sno,staticClass:"py-2",attrs:{"no-gutters":""}},[a("v-row",{staticClass:"mb-1",staticStyle:{"font-size":"18px","font-weight":"400"},attrs:{"no-gutters":""}},[t._v(t._s(e.check_reason))]),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{staticClass:"d-flex justify-end",staticStyle:{"font-size":"14px",color:"grey"},attrs:{cols:"12"}},[t._v(" "+t._s(e.contact_info))]),a("v-col",{staticClass:"d-flex justify-end",staticStyle:{"font-size":"14px",color:"grey"},attrs:{cols:"12"}},[t._v(" "+t._s(e.check_date))])],1)],1)})),t.passData[t.currentPassDataIndex]&&0==t.passData[t.currentPassDataIndex].list_data.check_reason.length?a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12"}},[a("v-alert",{attrs:{type:"info",text:""}},[t._v(" 無資料 ")])],1)],1):t._e()],2),a("v-card-actions",[a("v-row",{attrs:{"no-gutters":""}},[a("v-spacer"),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){return t.controllDialog(!1,0,"","")}}},[t._v(" close ")])],1)],1)],1):2==t.dialog.index?a("v-card",[a("v-card-title",{staticClass:"text-h5"},[t._v(" 確定刪除? ")]),a("v-card-text"),a("v-card-actions",[a("v-row",{attrs:{"no-gutters":""}},[a("v-spacer"),a("v-btn",{attrs:{color:"error",text:""},on:{click:function(e){return t.controllDialog(!1,0,"","")}}},[t._v(" no ")]),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){return t.deleteItem()}}},[t._v(" yes ")])],1)],1)],1):3==t.dialog.index?a("v-card",[a("v-card-title",{staticClass:"text-h5"},[t._v(" 繳費詳細資料 ")]),a("v-card-text",[a("v-form",{attrs:{readonly:""}},[a("v-text-field",{attrs:{label:"學年",outlined:""},model:{value:t.dialog.form.app_smye,callback:function(e){t.$set(t.dialog.form,"app_smye",e)},expression:"dialog.form.app_smye"}}),a("v-text-field",{attrs:{label:"學期",outlined:""},model:{value:t.dialog.form.app_smty,callback:function(e){t.$set(t.dialog.form,"app_smty",e)},expression:"dialog.form.app_smty"}}),a("v-text-field",{attrs:{label:"車牌號碼",outlined:""},model:{value:t.dialog.form.plate_number,callback:function(e){t.$set(t.dialog.form,"plate_number",e)},expression:"dialog.form.plate_number"}}),a("v-select",{attrs:{items:t.info.app_pass_type,"item-text":"code_value","item-value":"code_no",label:"類別",outlined:""},model:{value:t.dialog.form.app_pass_type,callback:function(e){t.$set(t.dialog.form,"app_pass_type",e)},expression:"dialog.form.app_pass_type"}})],1),a("v-alert",{attrs:{text:"",type:"info",icon:"mdi-currency-usd "}},[t._v(" "+t._s(t.dialog.form.title)+" ")]),a("v-alert",{attrs:{text:"",type:"warning"}},[t._v(" PDF將會開啟另一視窗產生 ")])],1),a("v-card-actions",[a("v-row",{attrs:{"no-gutters":""}},[a("v-spacer"),a("v-btn",{attrs:{color:"error",text:""},on:{click:function(e){return t.controllDialog(!1,0,"","")}}},[t._v(" 不同意 ")]),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){return t.exportPDF()}}},[t._v(" 同意 ")])],1)],1)],1):t._e()],1)],2)],1)},s=[],r=a(6198),i=(a(5666),a(2222),a(1539),a(4747),a(1703),a(4553),a(9826),a(9669)),l=a.n(i),c={name:"App",components:{},data:function(){return{testMode:!1,target:"gGroups_i=".concat(gGroups,"&gSys_s=").concat(gSys_s,"&gFunc_s=").concat(gFunc_s),themeColor:"",overlay:!1,getFirstDataState:!1,step:1,valid:!0,passData:[],currentPassDataIndex:0,info:{app_pass_type:[],vr_data:[],vehicle_category:[],todo_flag:[],violation_msg:[],alert_msg:[],driver_license_pass_msg:[],delete_button_msg:[],payment_button_msg:[],reapp_button_msg:[]},dialog:{index:0,show:!1,title:"",msg:"",form:{app_no:"",app_smye:0,app_smty:0,app_pass_type:"",plate_number:"",title:"",price:"",app_identity:""}}}},created:function(){var t=this;-1!=location.href.indexOf("localhost")||-1!=location.href.indexOf("github")?t.testMode=!0:t.testMode=!1},mounted:function(){var t=this,e=function(){var e=function(t){var e;switch(t){case"blue":e="#3b5998";break;case"green":e="#098c6e";break;case"red":e="#b72e4a";break;case"highway":e="#c60";break;case"violet":e="#8b00ff";break}return e};window.localStorage.getItem("_client_color")?t.themeColor=e(window.localStorage.getItem("_client_color")):t.themeColor=e(window.localStorage.getItem("_default_color"))};e(),window.addEventListener("storage",(function(){e()})),t.mainProcess()},updated:function(){var t=this;t.updateHeight()},computed:{years:function(){var t=this,e=[],a=Date.now();if(t.passData.vehicle_license_list&&0!=t.passData.vehicle_license_list.length){var n=t.passData.vehicle_license_list[t.currentPassDataIndex].app_restrictions;n.rules.forEach((function(t){var n=Date.parse(t.canapp_date_b),o=Date.parse(t.canapp_date_e);n<=a&&o>=a&&e.push(t)}))}return e},passes:function(){var t=this,e=[],a=Date.now();return t.passData.vehicle_license_list&&0!=t.passData.vehicle_license_list.length&&0!=t.form.app_smye.length&&t.years.forEach((function(n){var o=Date.parse(n.canapp_date_b),s=Date.parse(n.canapp_date_e);if(o<=a&&s>=a&&n.canapp_smye==t.form.app_smye){var r={};r.value=n.canapp_pass_type;var i=t.changePassTypeToString(n.canapp_pass_type);r.text=i.code_value,e.push(r)}})),e}},methods:{mainProcess:function(){var t=(0,r.Z)(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this,t.prev=1,e.overlay=!0,t.next=5,e.getPassInfo();case 5:return a=t.sent,e.setPassInfo(a),t.next=9,e.getPassData();case 9:e.passData=t.sent,e.getFirstDataState=!0,e.overlay=!1,t.next=17;break;case 14:throw t.prev=14,t.t0=t["catch"](1),new Error(t.t0);case 17:case"end":return t.stop()}}),t,this,[[1,14]])})));function e(){return t.apply(this,arguments)}return e}(),controllDialog:function(t,e,a,n){var o=this;o.dialog.show=t,o.dialog.index=e,o.dialog.title=a,o.dialog.msg=n},setForm:function(t,e){var a=this,n=a.dialog.form;n.app_no=t.list_data.app_no,n.app_smye=t.list_data.app_smye,n.app_smty=t.list_data.app_smty,n.app_pass_type=t.list_data.app_pass_type,n.plate_number=t.list_data.plate_number,n.app_identity=t.list_data.app_identity,n.title=e.payment_form.title,n.price=e.payment_form.price},payDialog:function(t,e,a){var n=this;n.currentPassDataIndex=t,n.setForm(e,a),n.controllDialog(!0,3,"","")},deleteDialog:function(t){var e=this;e.currentPassDataIndex=t,e.controllDialog(!0,2,"","")},changeCategoryToString:function(t){var e,a=this,n="";return e=a.info.vehicle_category.findIndex((function(e){return e.code_no==parseInt(t)})),n=a.info.vehicle_category[e].code_value,n},changePassTypeToString:function(t){var e=this,a="";return a=e.info.app_pass_type.find((function(e){return t==e.code_no})),a.code_value},changeStatusToString:function(t){var e=this,a="";return a=e.info.todo_flag.find((function(e){return t==e.code_no})),a.code_value},changeDBMToString:function(t){var e=this,a="";return a=e.info.delete_button_msg.find((function(e){return t==e.code_no})),a.code_value},changePBMToString:function(t){var e=this,a="";return a=e.info.payment_button_msg.find((function(e){return t==e.code_no})),a.code_value},changeRBMToString:function(t){var e=this,a="";return a=e.info.reapp_button_msg.find((function(e){return t==e.code_no})),a.code_value},changeTodoFlagString:function(t){var e="";switch(parseInt(t.todo_flag)){case 0:e="申請日期  "+t.app_date;break;case 1:e="2"==t.app_identity?0!=t.payment_start_date.length&&0!=t.payment_end_date.length?"繳費期間  "+t.payment_start_date+" ~ "+t.payment_end_date:"非繳費期間":"即日起可繳費";break;case 5:e="審核日期  "+t.todo_date;break;case 9:e="已繳費日期  "+t.pay_date;break}return e},deleteItem:function(){var t=this,e={app_no:t.passData[t.currentPassDataIndex].list_data.app_no};t.testMode?console.log(e):t.postPassData(0,e)},exportPDF:function(){var t=this,e={app_no:t.dialog.form.app_no,app_smye:t.dialog.form.app_smye,app_smty:t.dialog.form.app_smty,plate_number:t.dialog.form.plate_number,app_pass_type:t.dialog.form.app_pass_type,app_identity:t.dialog.form.app_identity,price:t.dialog.form.price};t.testMode?console.log(e):t.postPassData(1,e)},renewPass:function(t,e){var a=this;a.currentPassDataIndex=t;var n=e.list_data.plate_number,o="./dyupass_app.php?"+a.target+"&plate_number="+n;-1!=location.href.indexOf("github")?location.href="https://mmss8949.github.io/apply-pass?"+a.target+"&plate_number="+n:a.testMode?console.log(o):location.href=o},newPass:function(){var t=this,e="./dyupass_app.php?"+t.target;t.testMode?location.href="https://mmss8949.github.io/apply-pass":location.href=e},getPassData:function(){var t=this;return new Promise((function(e,a){t.testMode?l().get("./dyupass_apped_list/tools/json/testData.json?"+Math.random()).then((function(t){e(t.data.data)})).catch((function(t){parent.sysDisplayMessage("",-1,"","",null,"取得資訊失敗:-102"),a(t)})):l().get("../kernel/dyupass_apped_list_oci.php?"+t.target).then((function(t){e(t.data.data)})).catch((function(t){parent.sysDisplayMessage("",-1,"","",null,"取得資訊失敗:-102"),a(t)}))}))},postPassData:function(t,e){var a=this;switch(a.overlay=!0,t){case 0:l().post("../kernel/dyupass_apped_list_save.php?"+a.target,e).then(function(){var t=(0,r.Z)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(1!=e.data.result){t.next=8;break}return parent.sysDisplayMessage("",0,"","",null,"刪除成功"),t.next=4,a.getPassData();case 4:a.passData=t.sent,a.controllDialog(!1,0,"",""),t.next=9;break;case 8:parent.sysDisplayMessage("",-1,"","",null,"刪除失敗: "+e.data.msg);case 9:a.overlay=!1;case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){return console.log(t)}));break;case 1:l().post("../kernel/dyupass_payfee.php?"+a.target,e).then(function(){var t=(0,r.Z)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:1==e.data.result?(window.open(e.data.data),a.controllDialog(!1,0,"","")):parent.sysDisplayMessage("",-1,"","",null,e.data.msg),a.overlay=!1;case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){return console.log(t)}));break}},getPassInfo:function(){var t=this;return new Promise((function(e,a){t.testMode?l().get("./dyupass_apped_list/tools/json/dyupass_tw.json?"+Math.random()).then((function(t){e(t.data)})).catch((function(t){parent.sysDisplayMessage("",-1,"","",null,"取得資訊失敗:-101"),a(t)})):l().get("../json/tw/dyupass_tw.json?"+Math.random()).then((function(t){e(t.data)})).catch((function(t){parent.sysDisplayMessage("",-1,"","",null,"取得資訊失敗:-101"),a(t)}))}))},setPassInfo:function(t){var e=this;e.info.app_pass_type=t.app_pass_type,e.info.vr_data=t.vr_data,e.info.vehicle_category=t.vehicle_category,e.info.todo_flag=t.todo_flag,e.info.pay_flag=t.pay_flag,e.info.violation_msg=t.violation_msg,e.info.alert_msg=t.alert_msg,e.info.driver_license_pass_msg=t.driver_license_pass_msg,e.info.delete_button_msg=t.delete_button_msg,e.info.payment_button_msg=t.payment_button_msg,e.info.reapp_button_msg=t.reapp_button_msg},updateHeight:function(){var t=this;t.$nextTick((function(){setTimeout((function(){if(document.getElementById("app").scrollHeight>900){var t=document.body.scrollHeight+1;window.parent.postMessage('{"event": "changeHeight", "value": '+t+"}","*")}}),1e3)}))}}},p=c,u=a(1001),d=a(3453),_=a.n(d),f=a(9602),g=a(303),v=a(9787),m=a(2026),y=a(5255),h=a(7024),b=a(9257),x=a(3240),w=a(9657),D=a(4456),k=a(927),S=a(8913),P=a(3297),C=a(7894),M=a(4081),T=a(6946),Z=a(2660),I=a(127),V=(0,u.Z)(p,o,s,!1,null,"1d125fb4",null),j=V.exports;_()(V,{VAlert:f.Z,VApp:g.Z,VBtn:v.Z,VCard:m.Z,VCardActions:y.h7,VCardText:y.ZB,VCardTitle:y.EB,VCol:h.Z,VDialog:b.Z,VForm:x.Z,VHover:w.Z,VIcon:D.Z,VMain:k.Z,VOverlay:S.Z,VProgressCircular:P.Z,VRow:C.Z,VSelect:M.Z,VSpacer:T.Z,VTextField:Z.Z,VTooltip:I.Z});var O=a(5121);n.Z.use(O.Z);var F=new O.Z({});n.Z.config.productionTip=!1,new n.Z({vuetify:F,render:function(t){return t(j)}}).$mount("#app")}},e={};function a(n){var o=e[n];if(void 0!==o)return o.exports;var s=e[n]={exports:{}};return t[n](s,s.exports,a),s.exports}a.m=t,function(){var t=[];a.O=function(e,n,o,s){if(!n){var r=1/0;for(p=0;p<t.length;p++){n=t[p][0],o=t[p][1],s=t[p][2];for(var i=!0,l=0;l<n.length;l++)(!1&s||r>=s)&&Object.keys(a.O).every((function(t){return a.O[t](n[l])}))?n.splice(l--,1):(i=!1,s<r&&(r=s));if(i){t.splice(p--,1);var c=o();void 0!==c&&(e=c)}}return e}s=s||0;for(var p=t.length;p>0&&t[p-1][2]>s;p--)t[p]=t[p-1];t[p]=[n,o,s]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,s,r=n[0],i=n[1],l=n[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(o in i)a.o(i,o)&&(a.m[o]=i[o]);if(l)var p=l(a)}for(e&&e(n);c<r.length;c++)s=r[c],a.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return a.O(p)},n=self["webpackChunkdyupass_apped_list"]=self["webpackChunkdyupass_apped_list"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(2433)}));n=a.O(n)})();
//# sourceMappingURL=app-legacy.ebd33251.js.map