(this["webpackJsonpgif-expert"]=this["webpackJsonpgif-expert"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),i=a.n(c),u=a(1),l=a(8),o=function(e){var t=e.setCategories,a=Object(n.useState)(""),c=Object(u.a)(a,2),i=c[0],o=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>=1&&(t((function(e){return[i.trim()].concat(Object(l.a)(e))})),o(""))}},r.a.createElement("input",{type:"text",placeholder:"Search for a GIF",value:i,onChange:function(e){return o(e.target.value)}}))},s=a(4),m=a.n(s),d=a(7),f=function(){var e=Object(d.a)(m.a.mark((function e(t){var a,n,r,c,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t))+"&limit=10&api_key=jFlqPHAKYLo2S7UKLQKOlXK7w4sLTFPK",e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,c=r.data,i=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.fixed_height.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(u.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){f(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r},g=function(e){var t=e.title,a=e.url;return r.a.createElement("div",{className:"card animate__animated animate__slideInUp"},r.a.createElement("img",{src:a,alt:t}),r.a.createElement("p",{className:"card-title"},t))},h=function(e){var t=e.category,a=p(t),n=a.data,c=a.loading;return r.a.createElement("div",{className:"card-grid"},c&&r.a.createElement("p",{className:"animate__animated animate__flash"},"Loading . . ."),r.a.createElement("h2",{className:"card-category animate__animated animate__slideInUp"},t),n.map((function(e){return r.a.createElement(g,Object.assign({key:e.id},e))})))},E=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"GIF Expert"),r.a.createElement(o,{setCategories:c}),r.a.createElement("hr",null),a.map((function(e){return r.a.createElement(h,{key:e,category:e})})))};a(15);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.dd644dc0.chunk.js.map