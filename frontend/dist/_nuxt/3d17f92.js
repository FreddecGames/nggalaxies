(window.webpackJsonp=window.webpackJsonp||[]).push([[5,7],{274:function(e,t,l){"use strict";l.r(t);l(278),l(44),l(9),l(37),l(26),l(64);var r={props:["value"],computed:{format:function(){var e=parseFloat(Math.abs(this.value));if(0==e)return{value:parseFloat(this.value),symbol:""};if(e>0&&e<1)return{value:parseFloat(this.value).toFixed(1),symbol:""};var t=[{value:1,symbol:""},{value:1e3,symbol:"e3"},{value:1e6,symbol:"e6"},{value:1e9,symbol:"e9"},{value:1e12,symbol:"e12"},{value:1e15,symbol:"e15"},{value:1e18,symbol:"e18"},{value:1e21,symbol:"e21"},{value:1e24,symbol:"e24"},{value:1e27,symbol:"e27"},{value:1e30,symbol:"e30"},{value:1e33,symbol:"e33"},{value:1e36,symbol:"e36"},{value:1e39,symbol:"e39"},{value:1e42,symbol:"e42"},{value:1e45,symbol:"e45"},{value:1e48,symbol:"e48"},{value:1e51,symbol:"e51"},{value:1e54,symbol:"e54"},{value:1e57,symbol:"e57"},{value:1e60,symbol:"e60"},{value:1e63,symbol:"e63"},{value:1e66,symbol:"e66"},{value:1e69,symbol:"e69"},{value:1e72,symbol:"e72"},{value:1e75,symbol:"e75"},{value:1e78,symbol:"e78"},{value:1e81,symbol:"e81"},{value:1e84,symbol:"e84"},{value:1e87,symbol:"e87"},{value:1e90,symbol:"e90"},{value:1e93,symbol:"e93"},{value:1e96,symbol:"e96"},{value:1e99,symbol:"e99"},{value:1e102,symbol:"e102"},{value:1e105,symbol:"e105"},{value:1e108,symbol:"e108"},{value:1e111,symbol:"e111"},{value:1e114,symbol:"e114"},{value:1e117,symbol:"e117"},{value:1e120,symbol:"e120"},{value:1e123,symbol:"e123"}].slice().reverse().find((function(t){return e>=t.value}));return this.value<0&&(e*=-1),{value:t?(e/t.value).toPrecision(4).replace(/\.0+$|(\.[0-9]*[1-9])0+$/,"$1"):"0",symbol:t?t.symbol:null}}}},o=l(62),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("span",[e._v(e._s(e.format.value.toLocaleString())),e.format.symbol?l("small",{staticClass:"text-muted",staticStyle:{"font-size":".75em"}},[e._v(" "+e._s(e.format.symbol))]):e._e()])}),[],!1,null,null,null);t.default=component.exports},278:function(e,t,l){"use strict";var r=l(3),o=l(0),n=l(4),v=l(63),y=l(279),c=l(191),f=l(6),m=o.RangeError,d=o.String,x=Math.floor,h=n(c),O=n("".slice),I=n(1..toFixed),j=function(e,t,l){return 0===t?l:t%2==1?j(e,t-1,l*e):j(e*e,t/2,l)},w=function(data,e,t){for(var l=-1,r=t;++l<6;)r+=e*data[l],data[l]=r%1e7,r=x(r/1e7)},_=function(data,e){for(var t=6,l=0;--t>=0;)l+=data[t],data[t]=x(l/e),l=l%e*1e7},F=function(data){for(var e=6,s="";--e>=0;)if(""!==s||0===e||0!==data[e]){var t=d(data[e]);s=""===s?t:s+h("0",7-t.length)+t}return s};r({target:"Number",proto:!0,forced:f((function(){return"0.000"!==I(8e-5,3)||"1"!==I(.9,0)||"1.25"!==I(1.255,2)||"1000000000000000128"!==I(0xde0b6b3a7640080,0)}))||!f((function(){I({})}))},{toFixed:function(e){var t,l,r,o,n=y(this),c=v(e),data=[0,0,0,0,0,0],f="",x="0";if(c<0||c>20)throw m("Incorrect fraction digits");if(n!=n)return"NaN";if(n<=-1e21||n>=1e21)return d(n);if(n<0&&(f="-",n=-n),n>1e-21)if(l=(t=function(e){for(var t=0,l=e;l>=4096;)t+=12,l/=4096;for(;l>=2;)t+=1,l/=2;return t}(n*j(2,69,1))-69)<0?n*j(2,-t,1):n/j(2,t,1),l*=4503599627370496,(t=52-t)>0){for(w(data,0,l),r=c;r>=7;)w(data,1e7,0),r-=7;for(w(data,j(10,r,1),0),r=t-1;r>=23;)_(data,1<<23),r-=23;_(data,1<<r),w(data,1,1),_(data,2),x=F(data)}else w(data,0,l),w(data,1<<-t,0),x=F(data)+h("0",c);return x=c>0?f+((o=x.length)<=c?"0."+h("0",c-o)+x:O(x,0,o-c)+"."+O(x,o-c)):f+x}})},279:function(e,t,l){var r=l(4);e.exports=r(1..valueOf)},309:function(e,t,l){"use strict";l.r(t);l(17),l(14),l(18),l(9),l(24),l(16),l(25);var r=l(7),o=l(75);function n(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,l)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var y={props:["value"],computed:v(v({},Object(o.c)({currentGalaxyId:"currentGalaxyId",galaxyById:"galaxy/byId",fleetById:"fleet/byId",fleetByGalaxy:"fleet/byGalaxy",fleetIndexById:"fleet/indexById"})),{},{fleetCount:function(){return this.fleetByGalaxy(this.currentGalaxyId).length},fleetIndex:function(){return this.fleetIndexById(this.fleetById(this.galaxyById(this.currentGalaxyId).currentFleetId).id)+1}})},c=l(62),component=Object(c.a)(y,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"col-12 text-center"},[l("div",{staticClass:"text-warning"},[e._v(e._s(e.$t("boneHunterFleet"))+" "+e._s(e.fleetIndex)+" / "+e._s(e.fleetCount))]),e._v(" "),l("FormatNumber",{staticClass:"h4 text-warning",attrs:{value:e.value}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{FormatNumber:l(274).default})}}]);