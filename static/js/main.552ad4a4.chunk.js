(this["webpackJsonpstore-ospina-sergio"]=this["webpackJsonpstore-ospina-sergio"]||[]).push([[0],{30:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),a=n.n(c),s=n(7),i=n.n(s),o=n(4),u=(n(30),function(){return Object(r.jsxs)("div",{className:"jumbotron",children:[Object(r.jsx)("h1",{className:"display-3",children:"Reward Store"}),Object(r.jsx)("p",{className:"lead",children:"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."}),Object(r.jsx)("hr",{className:"my-4"}),Object(r.jsx)("p",{className:"lead",children:Object(r.jsx)("a",{className:"btn btn-primary btn-lg",href:"#",role:"button",children:"Learn more or go to my page"})})]})}),l=n(15),d=n(16),j=function(e,t){var n=Object(c.useState)(1),r=Object(d.a)(n,2),a=r[0],s=r[1],i=Math.ceil(e.length/t);return{next:function(){s((function(e){return Math.min(e+1,i)}))},prev:function(){s((function(e){return Math.max(e-1,1)}))},jump:function(e){var t=Math.max(1,e);s((function(e){return Math.min(t,i)}))},currentData:function(){var n=(a-1)*t,r=n+t;return e.slice(n,r)},currentPage:a,maxPage:i}},b=function(e){var t=e.getProducts,n=e.products,a=j(n,4),s=a.currentData,i=a.maxPage,o=a.next,u=a.prev,d=a.currentPage,b=a.jump,p=Object(l.a)(Array(i).keys()),h=s();return Object(c.useEffect)((function(){t()}),[]),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("div",{className:"row",children:h.map((function(e){return Object(r.jsx)("div",{className:"col-md-3",children:Object(r.jsxs)("div",{className:"card mb-3 border-info",children:[Object(r.jsx)("img",{src:e.img.hdUrl,className:"card-img-top",alt:e.img.hdUrl}),Object(r.jsxs)("div",{className:"card-body text-center",children:[Object(r.jsx)("h6",{className:"card-subtitle text-muted",children:e.category}),Object(r.jsx)("hr",{}),Object(r.jsx)("div",{className:"text-muted",children:e.name})]})]})},e._id)}))}),Object(r.jsx)("div",{children:Object(r.jsxs)("ul",{className:"pagination justify-content-center",children:[Object(r.jsx)("li",{className:"page-item",onClick:u,children:Object(r.jsx)("a",{className:"page-link",children:"\xab"})}),p.map((function(e){return Object(r.jsx)("li",{className:e+1===d?"page-item active":"page-item",onClick:function(){return b(e+1)},children:Object(r.jsx)("a",{className:"page-link",children:e+1})},e)})),Object(r.jsx)("li",{className:"page-item",onClick:o,children:Object(r.jsx)("a",{className:"page-link",children:"\xbb"})})]})})]})},p=n(2),h=n.n(p),m=n(5),f="SHOW_MOST_RECENT_PRODUCTS",O="SHOW_LOWEST_PRICE_PRODUCTS",x="SHOW_HIGHEST_PRICE_PRODUCTS",g={"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk"},y=function(){var e=Object(m.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://coding-challenge-api.aerolab.co/products",e.next=3,fetch("https://coding-challenge-api.aerolab.co/products",{headers:g});case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){return function(){var e=Object(m.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:n=e.sent,t({type:f,payload:{mostRecentProducts:n}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},N=Object(o.b)((function(e){return{products:e.ContentReducer}}),(function(e){return{getProducts:function(){e(v())}}}))(b),P=function(e){var t=e.getMostRecentProducts,n=e.getLowestPriceProducts,c=e.getHighestPriceProducts;return Object(r.jsxs)("div",{className:"container my-5",children:[Object(r.jsx)("h6",{children:"Sort by:"}),Object(r.jsx)("button",{type:"button",className:"btn btn-outline-info mr-3",onClick:function(){return t()},children:"Most Recent"}),Object(r.jsx)("button",{type:"button",className:"btn btn-outline-info mr-3",onClick:function(){return n()},children:"Lowest Price"}),Object(r.jsx)("button",{type:"button",className:"btn btn-outline-info mr-3",onClick:function(){return c()},children:"Highest Price"}),Object(r.jsx)("hr",{className:"border border-secondary my-5"})]})},k=Object(o.b)(null,(function(e){return{getMostRecentProducts:function(){e(v())},getLowestPriceProducts:function(){e(function(){var e=Object(m.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:n=e.sent,t({type:O,payload:{lowestPriceProducts:n}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},getHighestPriceProducts:function(){e(function(){var e=Object(m.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:n=e.sent,t({type:x,payload:{highestPriceProducts:n}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}}))(P);var w=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(u,{}),Object(r.jsx)(k,{}),Object(r.jsx)(N,{})]})},C=n(3),R=n(14),I=function(e){return e.sort((function(e,t){return t.cost-e.cost}))},S=function(e){return e.sort((function(e,t){return e.cost-t.cost}))},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return t.payload.mostRecentProducts;case O:return S(t.payload.lowestPriceProducts);case x:return I(t.payload.highestPriceProducts);default:return e}},_=Object(C.c)({ContentReducer:T}),E=Object(C.d)(_,Object(C.a)(R.a));i.a.render(Object(r.jsx)(o.a,{store:E,children:Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(w,{})})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.552ad4a4.chunk.js.map