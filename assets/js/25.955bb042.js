(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{229:function(t,e,o){"use strict";var n=o(8),s=o(22),i=o(42),r=o(136),a=o(88),c=o(17),l=o(135).f,u=o(89).f,f=o(14).f,p=o(230).trim,d=n.Number,h=d,m=d.prototype,g="Number"==i(o(57)(m)),v="trim"in String.prototype,y=function(t){var e=a(t,!1);if("string"==typeof e&&e.length>2){var o,n,s,i=(e=v?e.trim():p(e,3)).charCodeAt(0);if(43===i||45===i){if(88===(o=e.charCodeAt(2))||120===o)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:n=2,s=49;break;case 79:case 111:n=8,s=55;break;default:return+e}for(var r,c=e.slice(2),l=0,u=c.length;l<u;l++)if((r=c.charCodeAt(l))<48||r>s)return NaN;return parseInt(c,n)}}return+e};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var e=arguments.length<1?0:t,o=this;return o instanceof d&&(g?c(function(){m.valueOf.call(o)}):"Number"!=i(o))?r(new h(y(e)),o,d):y(e)};for(var C,b=o(13)?l(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;b.length>_;_++)s(h,C=b[_])&&!s(d,C)&&f(d,C,u(h,C));d.prototype=m,m.constructor=d,o(21)(n,"Number",d)}},230:function(t,e,o){var n=o(2),s=o(28),i=o(17),r=o(231),a="["+r+"]",c=RegExp("^"+a+a+"*"),l=RegExp(a+a+"*$"),u=function(t,e,o){var s={},a=i(function(){return!!r[t]()||"​"!="​"[t]()}),c=s[t]=a?e(f):r[t];o&&(s[o]=c),n(n.P+n.F*a,"String",s)},f=u.trim=function(t,e){return t=String(s(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(l,"")),t};t.exports=u},231:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},235:function(t,e,o){},248:function(t,e,o){"use strict";var n=o(235);o.n(n).a},250:function(t,e,o){"use strict";o(41),o(56),o(40);var n=o(227),s=(o(229),o(134),o(0)),i=o(232);function r(t,e,o){var n=o.message,s=o.type,i=o.showClose,r=o.duration,a=o.position,c=o.offset,l=o.noPrefix,u=o.icon,f=o.onClose,p=o.dangerouslyUseHTMLString,d=new(t.extend(e))({propsData:{type:s,showClose:i,duration:r,position:a,message:n,offset:c,noPrefix:l,icon:u,onClose:f,dangerouslyUseHTMLString:p}});d.$slots.default=[n],d.$mount(),document.body.appendChild(d.$el)}var a={name:"lgm-toast",data:function(){return{timer:null}},props:{type:{type:String,default:"info",validator:function(t){return["success","error","info","warning"].indexOf(t)>=0}},showClose:{type:Boolean,default:!1},message:{type:String},duration:{type:Number,default:3e3},offset:{type:Number,default:20},noPrefix:{type:Boolean,default:!1},icon:{type:String},onClose:{type:Function},dangerouslyUseHTMLString:{type:Boolean,default:!1},position:{type:String,default:"middle",validator:function(t){return["left","middle","right"].indexOf(t)>=0}}},computed:{toastTop:function(){return this.resetTop("attr")},toastStyle:function(){return this.resetTop("style")},toastClass:function(){return Object(n.a)({showClose:this.showClose},this.position,this.position)},showIcon:function(){var t;switch(this.type){case"info":return this.icon?this.icon:"i-infoFilled";case"success":return this.icon?this.icon:"i-checkFilled";case"warning":return this.icon?this.icon:"i-warning";case"error":return this.icon?this.icon:"i-error"}return t}},components:Object(n.a)({},i.a.name,i.a),mounted:function(){this.startTimer()},methods:{resetTop:function(t){var e,o=document.querySelectorAll(".lgm-toast.".concat(this.position));if(o.length){var n=o[o.length-1].getBoundingClientRect().height,s=o[o.length-1].getAttribute("top");return e={top:"".concat(this.offset+parseInt(s)+n,"px")},"attr"===t?e.top:e}return e={top:"".concat(this.offset,"px")},"attr"===t?e.top:e},startTimer:function(){var t=this;this.duration>0&&(this.timer=setTimeout(function(){t.close()},this.duration))},clearTimer:function(){clearTimeout(this.timer)},beforeClose:function(){var t,e=this,o=document.querySelectorAll(".lgm-toast.".concat(this.position)),n=this.$el.style.top,s=this.$el.getBoundingClientRect().height;o.forEach(function(o,i){if(o.style.top===n&&(t=i),(t||0===t)&&i>t){var r=parseInt(o.style.top)-s-e.offset;o.style.top=r+"px",o.setAttribute("top","".concat(r,"px"))}})},close:function(){var t=this;this.beforeClose(),this.$el.classList.add("close"),this.onClose&&this.onClose(this.$el),setTimeout(function(){t.$el.remove(),t.$destroy()},200)}},use:function(t){r(s.a,this,t)},install:function(t){var e=this;t.prototype.$toast=function(o){r(t,e,o)}}},c=(o(248),o(39)),l=Object(c.a)(a,function(){var t,e=this,o=e.$createElement,n=e._self._c||o;return n("div",{staticClass:"lgm-toast",class:e.toastClass,style:e.toastStyle,attrs:{top:e.toastTop},on:{mouseenter:e.clearTimer,mouseleave:e.startTimer}},[n("div",{staticClass:"lgm-toast-content"},[e.noPrefix?e._e():n("lgm-icon",{staticClass:"prefix-icon",class:(t={},t[e.type]=e.type,t),attrs:{icon:e.showIcon}}),e._v(" "),e.dangerouslyUseHTMLString?n("p",{staticClass:"message",domProps:{innerHTML:e._s(e.$slots.default[0])}}):n("p",{staticClass:"message"},[e._t("default")],2),e._v(" "),e.showClose?n("lgm-icon",{staticClass:"closeIcon",attrs:{icon:"i-close"},on:{click:e.close}}):e._e()],1)])},[],!1,null,"3ca7b61c",null);e.a=l.exports},312:function(t,e,o){},372:function(t,e,o){"use strict";var n=o(312);o.n(n).a},431:function(t,e,o){"use strict";o.r(e);var n=o(250),s={name:"color-demo-1",data:function(){return{copyValue:"",normalColor:["#ffffff","#eeeeee","#dddddd","#606266"],basicNames:["Primary","Success","Danger","Warning","Info"],basicColor:{Primary:["#a0cfff","#66aeff","#409eff","#109eff"],Success:["#a9e999","#75e291","#44e291","#10d291"],Danger:["#fab6b6","#fd8989","#eb7070","#db7070"],Warning:["#f3d19e","#ffd771","#fec771","#dec771"],Info:["#bbbbbb","#999999","#888888","#777777"]}}},methods:{toastShow:function(t){var e=document.createElement("input");e.value=t,document.body.appendChild(e),e.select(),document.execCommand("Copy"),document.body.removeChild(e),n.a.use({type:"success",message:"已复制 ".concat(t," 到剪切板"),duration:1500})}}},i=(o(372),o(39)),r=Object(i.a)(s,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"colorWrapper"},[o("h1",[t._v("默认色")]),t._v(" "),o("section",t._l(t.normalColor,function(e){return o("div",{key:e,staticClass:"normalColor",style:{backgroundColor:e},on:{click:function(){return t.toastShow(e)}}},[o("span",[t._v(t._s(e))])])}),0),t._v(" "),o("h1",[t._v("基础色")]),t._v(" "),t._l(t.basicNames,function(e){return o("div",{key:e,staticClass:"basicWrapper"},[o("span",[t._v(t._s(e))]),t._v(" "),o("section",t._l(t.basicColor[e],function(e){return o("div",{key:e,staticClass:"basicColor",style:{backgroundColor:e},on:{click:function(){return t.toastShow(e)}}},[o("span",[t._v(t._s(e))])])}),0)])})],2)},[],!1,null,"4e5227b0",null);e.default=r.exports}}]);