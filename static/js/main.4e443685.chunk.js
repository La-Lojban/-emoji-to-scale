(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(t,n,e){},14:function(t,n,e){"use strict";e.r(n);var r=e(1),c=e.n(r),a=e(6),i=e.n(a),o=(e(11),e(2)),u=e(3),s=e.n(u),l=e(5),m=[e.p+"static/media/random.514a6601.csv",e.p+"static/media/travel.4cbfdb0d.csv",e.p+"static/media/nature.e01b0425.csv",e.p+"static/media/objects.e97415d8.csv"];function p(){return f.apply(this,arguments)}function f(){return(f=Object(l.a)(s.a.mark((function t(){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=m.map((function(t){return fetch(t).then((function(t){return t.text()})).then((function(t){return t.trim().split("\n").splice(1)}))})),t.abrupt("return",Promise.all(n).then((function(t){return t.flat()})));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return String(Number(t))===t}function h(){return(h=Object(l.a)(s.a.mark((function t(){var n,e,r,c,a,i;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={},t.next=3,p();case 3:for(c in e=t.sent,r=e.reduce((function(t,e){var r=e.split(","),c=Object(o.a)(r,4),a=c[0],i=c[1],u=c[2],s=c[3];return"?"===i||(n[a]&&console.warn("REPEATED",a),t[a]=i,n[a]={source:i,label:u,src:s}),t}),{}))a=r[c],r[c].includes("km")?r[c]=100*Number(a.replace("km",""))*1e3:r[c].includes("m")?r[c]=100*Number(a.replace("m","")):d(r[c])?r[c]=Number(a):r[a]?r[c]=r[a]:a.includes("*")&&(i=a.split("*").map((function(t){return d(t)?Number(t):r[t]?r[t]:t})),r[c]=i[0]*i[1]);return t.abrupt("return",Object.entries(r).sort((function(t,n){return t[1]-n[1]})).map((function(t){return[t[0],t[1],n[t[0]].label]})).filter((function(t){return"?"!==t[1]})));case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var b=e(0),j=300;function v(t){var n;return 1===t.length&&(n=t.charCodeAt(0)),(n=1024*(t.charCodeAt(0)-55296)+(t.charCodeAt(1)-56320)+65536)<0&&(n=t.charCodeAt(0)),n.toString("16")}function g(t){return t.toString().replace(/\./g," pi ")}function O(t){return t<2?"miltre li ".concat(g(10*t),"<br/> (").concat(10*t," mm)"):t<100?"centre li ".concat(g(t),"<br/> (").concat(t,"cm)"):t<1e5?"mitre li ".concat(g(Math.round(100*t)/100/100),"<br/> (").concat(Math.round(100*t)/100/100,"m)"):"ki'otre li ".concat(g(Math.round(t/100/10)/100),"<br/> (").concat(Math.round(t/100/10)/100,"km)")}var w=function(){var t=Object(r.useState)([]),n=Object(o.a)(t,2),e=n[0],c=n[1],a=Object(r.useState)(0),i=Object(o.a)(a,2),u=i[0],s=i[1];return Object(r.useEffect)((function(){(function(){return h.apply(this,arguments)})().then((function(t){document.body.style.height="".concat(j*t.length+window.innerHeight-j,"px"),c(t)})),window.requestAnimationFrame((function t(){var n=window.pageYOffset;s(n),window.requestAnimationFrame(t)}))}),[]),Object(b.jsx)("div",{className:"emoji-display",children:e.map((function(t,n){var r=Object(o.a)(t,3),c=r[0],a=r[1],i=r[2],s=window.innerWidth,l=s/2+n*j-u-150;if(l<s/2&&(l=.1*l+.9*(l+.5*s)/2),l<-225||l>s-30)return null;var m=[Math.floor(u/j),Math.ceil(u/j)];m=m.map((function(t){return t<0?0:t>e.length-1?e.length-1:t})).map((function(t){return e[t]}));var p=u/j%1,f=p*m[1][1]+(1-p)*m[0][1],d=Math.min(a/f,64),h=1;if(d>3){var g=(d-3)/8;h=Math.max(1-g,0)}return Object(b.jsxs)("div",{className:"emoji-container",style:{transform:"translatex(".concat(l,"px)")},children:[Object(b.jsx)("div",{className:"emoji",style:{opacity:h,transform:"scale(".concat(d,") translateY(10%)")},children:Object(b.jsx)("img",{alt:c,src:"https://raw.githubusercontent.com/googlefonts/noto-emoji/main/svg/emoji_u".concat(v(c),".svg")})}),Object(b.jsxs)("div",{className:"title-wrapper",children:[Object(b.jsx)("b",{children:i}),Object(b.jsx)("div",{dangerouslySetInnerHTML:{__html:O(a)},style:{marginTop:".5rem"}})]})]},c)}))})},x=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,15)).then((function(n){var e=n.getCLS,r=n.getFID,c=n.getFCP,a=n.getLCP,i=n.getTTFB;e(t),r(t),c(t),a(t),i(t)}))};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(w,{})}),document.getElementById("root")),x()}},[[14,1,2]]]);
//# sourceMappingURL=main.4e443685.chunk.js.map