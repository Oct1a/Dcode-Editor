(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f24315e"],{"3a42":function(t,e,i){},"69a5":function(t,e,i){"use strict";i("3a42")},"902d":function(t,e,i){!function(e,i){t.exports=i()}("undefined"!=typeof self&&self,(function(){return function(t){function e(s){if(i[s])return i[s].exports;var r=i[s]={i:s,l:!1,exports:{}};return t[s].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var i={};return e.m=t,e.c=i,e.d=function(t,i,s){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:s})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=3)}([function(t,e){function i(t,e){var i=t[1]||"",r=t[3];if(!r)return i;if(e&&"function"==typeof btoa){var a=s(r);return[i].concat(r.sources.map((function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"}))).concat([a]).join("\n")}return[i].join("\n")}function s(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var s=i(e,t);return e[2]?"@media "+e[2]+"{"+s+"}":s})).join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var s={},r=0;r<this.length;r++){var a=this[r][0];"number"==typeof a&&(s[a]=!0)}for(r=0;r<t.length;r++){var n=t[r];"number"==typeof n[0]&&s[n[0]]||(i&&!n[2]?n[2]=i:i&&(n[2]="("+n[2]+") and ("+i+")"),e.push(n))}},e}},function(t,e,i){function s(t){for(var e=0;e<t.length;e++){var i=t[e],s=d[i.id];if(s){s.refs++;for(var r=0;r<s.parts.length;r++)s.parts[r](i.parts[r]);for(;r<i.parts.length;r++)s.parts.push(a(i.parts[r]));s.parts.length>i.parts.length&&(s.parts.length=i.parts.length)}else{var n=[];for(r=0;r<i.parts.length;r++)n.push(a(i.parts[r]));d[i.id]={id:i.id,refs:1,parts:n}}}}function r(){var t=document.createElement("style");return t.type="text/css",f.appendChild(t),t}function a(t){var e,i,s=document.querySelector("style["+v+'~="'+t.id+'"]');if(s){if(p)return g;s.parentNode.removeChild(s)}if(y){var a=h++;s=u||(u=r()),e=n.bind(null,s,a,!1),i=n.bind(null,s,a,!0)}else s=r(),e=o.bind(null,s),i=function(){s.parentNode.removeChild(s)};return e(t),function(s){if(s){if(s.css===t.css&&s.media===t.media&&s.sourceMap===t.sourceMap)return;e(t=s)}else i()}}function n(t,e,i,s){var r=i?"":s.css;if(t.styleSheet)t.styleSheet.cssText=b(e,r);else{var a=document.createTextNode(r),n=t.childNodes;n[e]&&t.removeChild(n[e]),n.length?t.insertBefore(a,n[e]):t.appendChild(a)}}function o(t,e){var i=e.css,s=e.media,r=e.sourceMap;if(s&&t.setAttribute("media",s),m.ssrId&&t.setAttribute(v,e.id),r&&(i+="\n/*# sourceURL="+r.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=i(7),d={},f=c&&(document.head||document.getElementsByTagName("head")[0]),u=null,h=0,p=!1,g=function(){},m=null,v="data-vue-ssr-id",y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,i,r){p=i,m=r||{};var a=l(t,e);return s(a),function(e){for(var i=[],r=0;r<a.length;r++){var n=a[r],o=d[n.id];o.refs--,i.push(o)}e?(a=l(t,e),s(a)):a=[];for(r=0;r<i.length;r++){o=i[r];if(0===o.refs){for(var c=0;c<o.parts.length;c++)o.parts[c]();delete d[o.id]}}}};var b=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()},function(t,e,i){"use strict";e.a={name:"dragVerifyImgChip",props:{isPassing:{type:Boolean,default:!1},width:{type:Number,default:250},height:{type:Number,default:40},text:{type:String,default:"swiping to the right side"},successText:{type:String,default:"success"},background:{type:String,default:"#eee"},progressBarBg:{type:String,default:"#76c61d"},completedBg:{type:String,default:"#76c61d"},circle:{type:Boolean,default:!1},radius:{type:String,default:"4px"},handlerIcon:{type:String},successIcon:{type:String},handlerBg:{type:String,default:"#fff"},textSize:{type:String,default:"14px"},textColor:{type:String,default:"#333"},imgsrc:{type:String},barWidth:{type:Number,default:40},barRadius:{type:Number,default:8},showRefresh:{type:Boolean,default:!1},refreshIcon:{type:String},showTips:{type:Boolean,default:!0},successTip:{type:String,default:"验证通过，超过80%用户"},failTip:{type:String,default:"验证未通过，拖动滑块将悬浮图像正确合并"},diffWidth:{type:Number,default:20}},mounted:function(){var t=this.$refs.dragVerify;t.style.setProperty("--textColor",this.textColor),t.style.setProperty("--width",Math.floor(this.width/2)+"px"),t.style.setProperty("--pwidth",-Math.floor(this.width/2)+"px")},computed:{handlerStyle:function(){return{left:"0px",width:this.height+"px",height:this.height+"px",background:this.handlerBg}},message:function(){return this.isPassing?"":this.text},successMessage:function(){return this.isPassing?this.successText:""},dragVerifyStyle:function(){return{width:this.width+"px",height:this.height+"px",lineHeight:this.height+"px",background:this.background,borderRadius:this.circle?this.height/2+"px":this.radius}},dragVerifyImgStyle:function(){return{width:this.width+"px",position:"relative",overflow:"hidden"}},progressBarStyle:function(){return{background:this.progressBarBg,height:this.height+"px",borderRadius:this.circle?this.height/2+"px 0 0 "+this.height/2+"px":this.radius}},textStyle:function(){return{height:this.height+"px",width:this.width+"px",fontSize:this.textSize}}},data:function(){return{isMoving:!1,x:0,isOk:!1,isKeep:!1,clipBarx:0,showErrorTip:!1}},methods:{draw:function(t,e,i,s){var r=this.barWidth,a=this.barRadius,n=Math.PI;t.beginPath(),t.moveTo(e,i),t.arc(e+r/2,i-a+2,a,.72*n,2.26*n),t.lineTo(e+r,i),t.arc(e+r+a-2,i+r/2,a,1.21*n,2.78*n),t.lineTo(e+r,i+r),t.lineTo(e,i+r),t.arc(e+a-2,i+r/2,a+.4,2.76*n,1.24*n,!0),t.lineTo(e,i),t.lineWidth=2,t.fillStyle="rgba(255, 255, 255, 0.8)",t.strokeStyle="rgba(255, 255, 255, 0.8)",t.stroke(),t[s](),t.globalCompositeOperation="destination-over"},checkimgLoaded:function(){var t=this.barWidth,e=this.$refs.checkImg.height,i=this.$refs.checkImg.width,s=Math.floor(this.width/2),r=s+Math.ceil(Math.random()*(s-t-this.barRadius-5)),a=25+Math.floor(Math.random()*(e-t-25-20));this.$refs.maincanvas.setAttribute("width",i),this.$refs.maincanvas.setAttribute("height",e),this.$refs.maincanvas.style.display="block";var n=this.$refs.maincanvas.getContext("2d");this.draw(n,r,a,"fill"),this.clipBarx=r;var o=this.$refs.movecanvas;o.setAttribute("width",i),o.setAttribute("height",e),this.$refs.movecanvas.style.display="block";var c=t+2*this.barRadius+3,l=this.$refs.movecanvas.getContext("2d");l.clearRect(0,0,i,e),this.draw(l,r,a,"clip"),l.drawImage(this.$refs.checkImg,0,0,i,e);a=a-2*this.barRadius-1;var d=l.getImageData(r,a,c,c);o.setAttribute("width",c),o.setAttribute("height",e),l.putImageData(d,0,a)},dragStart:function(t){if(!this.isPassing){this.isMoving=!0;var e=this.$refs.handler;this.x=(t.pageX||t.touches[0].pageX)-parseInt(e.style.left.replace("px",""),10)}this.showBar=!0,this.showErrorTip=!1,this.$emit("handlerMove")},dragMoving:function(t){if(this.isMoving&&!this.isPassing){var e=(t.pageX||t.touches[0].pageX)-this.x;this.$refs.handler.style.left=e+"px",this.$refs.progressBar.style.width=e+this.height/2+"px",this.$refs.movecanvas.style.left=e+"px"}},dragFinish:function(t){if(this.isMoving&&!this.isPassing){var e=(t.pageX||t.changedTouches[0].pageX)-this.x;if(Math.abs(e-this.clipBarx)>this.diffWidth){this.isOk=!0;var i=this;setTimeout((function(){i.$refs.handler.style.left="0",i.$refs.progressBar.style.width="0",i.$refs.movecanvas.style.left="0",i.isOk=!1}),500),this.$emit("passfail"),this.showErrorTip=!0}else this.passVerify();this.isMoving=!1}},passVerify:function(){var t=this;this.$emit("update:isPassing",!0),this.isMoving=!1,this.$refs.handler.children[0].className=this.successIcon,this.$refs.progressBar.style.background=this.completedBg,this.$refs.message.style["-webkit-text-fill-color"]="unset",this.$refs.message.style.animation="slidetounlock2 3s infinite",this.$refs.progressBar.style.color="#fff",this.$refs.progressBar.style.fontSize=this.textSize,this.isKeep=!0,setTimeout((function(){t.$refs.movecanvas.style.left=t.clipBarx+"px",setTimeout((function(){t.isKeep=!1,t.$refs.maincanvas.style.display="none",t.$refs.movecanvas.style.display="none"}),200)}),100),this.$emit("passcallback")},reset:function(){this.reImg(),this.checkimgLoaded()},reImg:function(){this.$emit("update:isPassing",!1);var t=this.$options.data();for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&this.$set(this,e,t[e]);var i=this.$refs.handler,s=this.$refs.message;i.style.left="0",this.$refs.progressBar.style.width="0",i.children[0].className=this.handlerIcon,s.style["-webkit-text-fill-color"]="transparent",s.style.animation="slidetounlock 3s infinite",s.style.color=this.background,this.$refs.movecanvas.style.left="0px"},refreshimg:function(){this.$emit("refresh")}},watch:{imgsrc:{immediate:!1,handler:function(){this.reImg()}}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(4);s.a.install=function(t){t.component(s.a.name,s.a)},e.default=s.a},function(t,e,i){"use strict";function s(t){i(5),i(8)}var r=i(2),a=i(11),n=i(10),o=s,c=n(r.a,a.a,!1,o,"data-v-74b8cf9d",null);e.a=c.exports},function(t,e,i){var s=i(6);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals),i(1)("d4320ae6",s,!0,{})},function(t,e,i){e=t.exports=i(0)(!1),e.push([t.i,".drag_verify[data-v-74b8cf9d]{position:relative;background-color:#e8e8e8;text-align:center;overflow:hidden}.drag_verify .dv_handler[data-v-74b8cf9d]{position:absolute;top:0;left:0;cursor:move}.drag_verify .dv_handler i[data-v-74b8cf9d]{color:#666;padding-left:0;font-size:16px}.drag_verify .dv_handler .el-icon-circle-check[data-v-74b8cf9d]{color:#6c6;margin-top:9px}.drag_verify .dv_progress_bar[data-v-74b8cf9d]{position:absolute;height:34px;width:0}.drag_verify .dv_text[data-v-74b8cf9d]{position:absolute;top:0;color:transparent;-moz-user-select:none;-webkit-user-select:none;user-select:none;-o-user-select:none;-ms-user-select:none;background:-webkit-gradient(linear,left top,right top,color-stop(0,var(--textColor)),color-stop(.4,var(--textColor)),color-stop(.5,#fff),color-stop(.6,var(--textColor)),color-stop(1,var(--textColor)));-webkit-background-clip:text;-webkit-text-fill-color:transparent;-webkit-text-size-adjust:none;animation:slidetounlock 3s infinite}.drag_verify .dv_text [data-v-74b8cf9d]{-webkit-text-fill-color:var(--textColor)}.goFirst[data-v-74b8cf9d]{left:0!important;transition:left .5s}.goKeep[data-v-74b8cf9d]{transition:left .2s}.goFirst2[data-v-74b8cf9d]{width:0!important;transition:width .5s}.drag-verify-container[data-v-74b8cf9d]{position:relative;line-height:0}.refresh[data-v-74b8cf9d]{position:absolute;right:5px;top:5px;cursor:pointer;font-size:20px;z-index:200}.tips[data-v-74b8cf9d]{position:absolute;bottom:0;height:20px;line-height:20px;text-align:center;width:100%;font-size:12px;z-index:200}.tips.success[data-v-74b8cf9d]{background:hsla(0,0%,100%,.6);color:green}.tips.danger[data-v-74b8cf9d]{background:rgba(0,0,0,.6);color:#ff0}.main-canvas[data-v-74b8cf9d]{width:100%;height:100%}.main-canvas[data-v-74b8cf9d],.move-canvas[data-v-74b8cf9d]{position:absolute;top:0;left:0}",""])},function(t,e){t.exports=function(t,e){for(var i=[],s={},r=0;r<e.length;r++){var a=e[r],n=a[0],o=a[1],c=a[2],l=a[3],d={id:t+":"+r,css:o,media:c,sourceMap:l};s[n]?s[n].parts.push(d):i.push(s[n]={id:n,parts:[d]})}return i}},function(t,e,i){var s=i(9);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals),i(1)("2d0d93c2",s,!0,{})},function(t,e,i){e=t.exports=i(0)(!1),e.push([t.i,"@-webkit-keyframes slidetounlock{0%{background-position:var(--pwidth) 0}to{background-position:var(--width) 0}}@-webkit-keyframes slidetounlock2{0%{background-position:var(--pwidth) 0}to{background-position:var(--pwidth) 0}}",""])},function(t,e){t.exports=function(t,e,i,s,r,a){var n,o=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(n=t,o=t.default);var l,d="function"==typeof o?o.options:o;if(e&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0),i&&(d.functional=!0),r&&(d._scopeId=r),a?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},d._ssrRegister=l):s&&(l=s),l){var f=d.functional,u=f?d.render:d.beforeCreate;f?(d._injectStyles=l,d.render=function(t,e){return l.call(e),u(t,e)}):d.beforeCreate=u?[].concat(u,l):[l]}return{esModule:n,exports:o,options:d}}},function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"drag-verify-container"},[i("div",{style:t.dragVerifyImgStyle},[i("img",{ref:"checkImg",staticStyle:{width:"100%"},attrs:{crossOrigin:"anonymous",src:t.imgsrc,alt:""},on:{load:t.checkimgLoaded}}),t._v(" "),i("canvas",{ref:"maincanvas",staticClass:"main-canvas"}),t._v(" "),i("canvas",{ref:"movecanvas",staticClass:"move-canvas",class:{goFirst:t.isOk,goKeep:t.isKeep}}),t._v(" "),t.showRefresh&&!this.isPassing?i("div",{staticClass:"refresh"},[i("i",{class:t.refreshIcon,on:{click:t.refreshimg}})]):t._e(),t._v(" "),t.showTips&&t.isPassing?i("div",{staticClass:"tips success"},[t._v(t._s(t.successTip))]):t._e(),t._v(" "),t.showTips&&!t.isPassing&&t.showErrorTip?i("div",{staticClass:"tips danger"},[t._v(t._s(t.failTip))]):t._e()]),t._v(" "),i("div",{ref:"dragVerify",staticClass:"drag_verify",style:t.dragVerifyStyle,on:{mousemove:t.dragMoving,mouseup:t.dragFinish,mouseleave:t.dragFinish,touchmove:t.dragMoving,touchend:t.dragFinish}},[i("div",{ref:"progressBar",staticClass:"dv_progress_bar",class:{goFirst2:t.isOk},style:t.progressBarStyle},[t._v("\n      "+t._s(t.successMessage)+"\n    ")]),t._v(" "),i("div",{ref:"message",staticClass:"dv_text",style:t.textStyle},[t._v("\n      "+t._s(t.message)+"\n    ")]),t._v(" "),i("div",{ref:"handler",staticClass:"dv_handler dv_handler_bg",class:{goFirst:t.isOk},style:t.handlerStyle,on:{mousedown:t.dragStart,touchstart:t.dragStart}},[i("i",{class:t.handlerIcon})])])])},r=[],a={render:s,staticRenderFns:r};e.a=a}])}))},a7fb:function(t,e,i){"use strict";i.r(e);var s,r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page"},[i("div",{staticClass:"page-login"},[i("div",{staticClass:"text item"},[i("el-row",{staticClass:"login-card"},[i("el-col",{staticStyle:{"margin-left":"50%",width:"40%"},attrs:{span:12}},[i("h2",{staticClass:"title"},[t._v("\n                用户登录\n              ")]),i("el-form",{ref:"loginForm",staticStyle:{padding:"0 30px 0 30px",margin:"10px"},attrs:{model:t.formData,rules:t.formRules,"label-width":"0px"}},[i("el-form-item",{attrs:{prop:"username",required:""}},[i("el-input",{attrs:{name:"userName",placeholder:"请输入用户名"},model:{value:t.formData.username,callback:function(e){t.$set(t.formData,"username",e)},expression:"formData.username"}},[i("i",{staticClass:"el-icon-user",attrs:{slot:"prefix"},slot:"prefix"})])],1),"register"===t.type?i("el-form-item",{attrs:{prop:"email",required:""}},[i("el-input",{attrs:{autocomplete:"off",placeholder:"请输入邮箱"},model:{value:t.formData.email,callback:function(e){t.$set(t.formData,"email",e)},expression:"formData.email"}},[i("span",{staticClass:"el-icon-message",attrs:{slot:"prefix"},slot:"prefix"})])],1):t._e(),i("el-form-item",{attrs:{prop:"password",required:""}},[i("el-input",{attrs:{placeholder:"请输入密码","show-password":"",name:"password"},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}},[i("span",{staticClass:"el-icon-lock",attrs:{slot:"prefix"},slot:"prefix"})])],1),i("el-form-item",{nativeOn:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.dialogVisible=!0}}},[i("el-button",{staticStyle:{width:"100%",background:"#2f54eb",padding:"15px"},attrs:{type:"primary",round:"",size:"medium"},on:{click:function(e){t.dialogVisible=!0}}},[t._v(t._s("login"===t.type?"登录":"注册"))]),i("p",{staticClass:"changeBtn",staticStyle:{float:"right",color:"#adadad"},on:{click:t.switchType}},[i("span",[t._v(t._s("login"===t.type?"立即注册":"马上登录"))])])],1)],1)],1)],1)],1),i("el-dialog",{attrs:{title:"登录验证",visible:t.dialogVisible,"show-close":!1,width:"20%","close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("drag-verify-img-chip",{ref:"dragVerify",attrs:{isPassing:t.isPassing,imgsrc:t.verifyImg,showRefresh:!0,text:"请按住滑块拖动",successText:"验证通过",width:260,handlerIcon:"el-icon-d-arrow-right",successIcon:"el-icon-circle-check"},on:{"update:isPassing":function(e){t.isPassing=e},"update:is-passing":function(e){t.isPassing=e},refresh:t.reimg,passcallback:t.doSubmit,passfail:t.passfail}})],1)],1)])},a=[],n=(i("ac67"),i("1bc7"),i("32ea"),i("55ae")),o=(i("a450"),i("8dd0")),c=i("902d"),l=i.n(c),d=i("a68a");function f(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function u(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?f(Object(i),!0).forEach((function(e){Object(n["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):f(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var h={components:(s={},Object(n["a"])(s,d["Form"].name,d["Form"]),Object(n["a"])(s,d["FormItem"].name,d["FormItem"]),Object(n["a"])(s,d["Input"].name,d["Input"]),Object(n["a"])(s,"dragVerifyImgChip",l.a),s),data:function(){return{dialogVisible:!1,isPassing:!1,imgUrl:i("b4f8"),loading:!1,loadingVerify:!1,inputType:"password",type:"login",verifyImg:"https://img0.baidu.com/it/u=3026939796,485761977&fm=26&fmt=auto&gp=0.jpg",formData:{email:"",username:"",password:""},formRules:{username:[{required:!0,message:"用户名不能为空",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}],email:[{required:!0,message:"邮箱不能为空",trigger:"change"}]}}},watch:{dialogVisible:function(){this.reimg()}},created:function(){this.fromUrl=this.$route.query.from?window.decodeURIComponent(this.$route.query.from):"",this.keyupSubmit()},methods:{keyupSubmit:function(){var t=this;document.onkeydown=function(){var e=window.event.keyCode;if(13===e){var i=u({},t.formData);console.log(i),i.password&&i.username&&(t.dialogVisible=!0)}}},doSubmit:function(){var t=this;this.isPassing=!this.isPassing,this.$refs.dragVerify.reset(),this.dialogVisible=!1,this.$refs.loginForm.validate((function(e){var i="login"===t.type?"doLogin":"doRegister";if(!e)return t.$store.dispatch("showMassage",{type:"error",message:"请正确填写表单！"}),!1;t[i]()}))},doLogin:function(){var t=this,e=u({},this.formData);o["a"].doLogin(e).then((function(){t.fromUrl?(console.log(t.fromUrl),t.$router.push(t.fromUrl)):o["a"].goBeforeLoginUrl()}))},doRegister:function(){var t=this,e=u({},this.formData);o["a"].doRegister(e).then((function(){t.fromUrl?t.$router.push(t.fromUrl):o["a"].goBeforeLoginUrl()}))},validateEmail:function(t){return/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(t)},switchType:function(){"login"===this.type?this.type="register":this.type="login"},reimg:function(){var t=["https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1017748215,3835401839&fm=26&gp=0.jpg","https://img2.baidu.com/it/u=3251757891,2905627848&fm=26&fmt=auto&gp=0.jpg","https://img2.baidu.com/it/u=1376319214,2872501189&fm=26&fmt=auto&gp=0.jpg","https://img1.baidu.com/it/u=1648934633,1654247132&fm=26&fmt=auto&gp=0.jpg"];this.verifyImg=t[Math.floor(Math.random()*(t.length-1+1)+0)]},passfail:function(){this.reimg()}}},p=h,g=(i("69a5"),i("4ac2")),m=Object(g["a"])(p,r,a,!1,null,"5ad9cf8a",null);e["default"]=m.exports},b4f8:function(t,e,i){t.exports=i.p+"static/img/login_bg.b2d321f6.png"}}]);
//# sourceMappingURL=chunk-6f24315e.3123290a.js.map