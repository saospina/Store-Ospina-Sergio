(this["webpackJsonpstore-ospina-sergio"]=this["webpackJsonpstore-ospina-sergio"]||[]).push([[0],{31:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),a=n.n(c),s=n(7),o=n.n(s),i=n(4),u=(n(31),n(16)),l=n(17),d=function(e,t){var n=Object(c.useState)(1),r=Object(l.a)(n,2),a=r[0],s=r[1],o=Math.ceil(e.length/t);return{next:function(){s((function(e){return Math.min(e+1,o)}))},prev:function(){s((function(e){return Math.max(e-1,1)}))},jump:function(e){var t=Math.max(1,e);s((function(e){return Math.min(t,o)}))},currentData:function(){var n=(a-1)*t,r=n+t;return e.slice(n,r)},currentPage:a,maxPage:o}},p=function(e){var t=e.getProducts,n=e.products,a=e.userInfo,s=e.onRedeem,o=e.onUser,i=d(n,8),l=i.currentData,p=i.maxPage,b=i.next,j=i.prev,h=i.currentPage,f=i.jump,O=Object(u.a)(Array(p).keys()),m=l();Object(c.useEffect)((function(){t()}),[]);return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("div",{className:"row",children:m.map((function(e){return Object(r.jsx)("div",{className:"col-md-3",children:Object(r.jsxs)("div",{className:"card mb-3 border-info",children:[a.points<e.cost?Object(r.jsxs)("button",{type:"button",className:"btn btn-success",children:["Points needed",Object(r.jsx)("span",{className:"badge rounded-pill bg-info",children:e.cost-a.points})]}):Object(r.jsxs)("button",{type:"button",className:"btn btn-success",onClick:function(t){return function(e,t){t.preventDefault(),s(e),o()}(e._id,t)},children:["Buy now ",Object(r.jsx)("span",{className:"badge rounded-pill bg-info",children:e.cost})]}),Object(r.jsx)("img",{src:e.img.hdUrl,className:"card-img-top",alt:e.img.hdUrl}),Object(r.jsxs)("div",{className:"card-body text-center",children:[Object(r.jsx)("h6",{className:"card-subtitle text-muted",children:e.category}),Object(r.jsx)("hr",{}),Object(r.jsx)("div",{className:"text-muted",children:e.name}),Object(r.jsx)("i",{className:"fab fa-shopping-bag"})]})]})},e._id)}))}),Object(r.jsx)("div",{children:Object(r.jsxs)("ul",{className:"pagination justify-content-center",children:[Object(r.jsx)("li",{className:"page-item",onClick:j,children:Object(r.jsx)("a",{className:"page-link",children:"\xab"})}),O.map((function(e){return Object(r.jsx)("li",{className:e+1===h?"page-item active":"page-item",onClick:function(){return f(e+1)},children:Object(r.jsx)("a",{className:"page-link",children:e+1})},e)})),Object(r.jsx)("li",{className:"page-item",onClick:b,children:Object(r.jsx)("a",{className:"page-link",children:"\xbb"})})]})})]})},b=n(2),j=n.n(b),h=n(3),f="SHOW_MOST_RECENT_PRODUCTS",O="SHOW_LOWEST_PRICE_PRODUCTS",m="SHOW_HIGHEST_PRICE_PRODUCTS",x="REDEEM_BY_PRODUCT",g={"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk"},v=function(){var e=Object(h.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://coding-challenge-api.aerolab.co/products",e.next=3,fetch("https://coding-challenge-api.aerolab.co/products",{headers:g});case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(h.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://coding-challenge-api.aerolab.co/user/me",e.next=3,fetch("https://coding-challenge-api.aerolab.co/user/me",{headers:g});case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(h.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t,"points on service"),"https://coding-challenge-api.aerolab.co/user/points",e.next=4,fetch("https://coding-challenge-api.aerolab.co/user/points",{method:"POST",body:JSON.stringify({amount:+t}),headers:{"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk"}});case 4:return n=e.sent,e.next=7,n.json();case 7:return r=e.sent,console.log(r,"add points service"),e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(h.a)(j.a.mark((function e(t){var n,r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={productId:t},"https://coding-challenge-api.aerolab.co/redeem",e.next=4,fetch("https://coding-challenge-api.aerolab.co/redeem",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk"}});case 4:return r=e.sent,e.next=7,r.json();case 7:return c=e.sent,e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){return function(){var e=Object(h.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:n=e.sent,t({type:f,payload:{mostRecentProducts:n}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},k="SHOW_USER",w="ADD_POINTS",R=function(){return function(){var e=Object(h.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:n=e.sent,t({type:k,payload:{userInfo:n}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},C=Object(i.b)((function(e){var t=e.ContentReducer,n=e.UserReducer;return console.log(t,"user products"),{products:t,userInfo:n}}),(function(e){return{getProducts:function(){e(I())},onRedeem:function(t){e(function(e){return function(){var t=Object(h.a)(j.a.mark((function t(n){var r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P(e);case 2:r=t.sent,n({type:x,payload:{redeemedProduct:r}});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},onUser:function(){e(R())}}}))(p),T=function(e){var t=e.getMostRecentProducts,n=e.getLowestPriceProducts,c=e.getHighestPriceProducts;return Object(r.jsxs)("div",{className:"container my-5",children:[Object(r.jsx)("h6",{children:"Sort by:"}),Object(r.jsx)("button",{type:"button",className:"btn btn-outline-info mr-3",onClick:function(){return t()},children:"Most Recent"}),Object(r.jsx)("button",{type:"button",className:"btn btn-outline-info mr-3",onClick:function(){return n()},children:"Lowest Price"}),Object(r.jsx)("button",{type:"button",className:"btn btn-outline-info mr-3",onClick:function(){return c()},children:"Highest Price"}),Object(r.jsx)("hr",{className:"border border-secondary my-5"})]})},S=Object(i.b)(null,(function(e){return{getMostRecentProducts:function(){e(I())},getLowestPriceProducts:function(){e(function(){var e=Object(h.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:n=e.sent,t({type:O,payload:{lowestPriceProducts:n}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},getHighestPriceProducts:function(){e(function(){var e=Object(h.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:n=e.sent,t({type:m,payload:{highestPriceProducts:n}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}}))(T),U=function(e){var t=e.onUser,n=e.userInfo,a=e.onPoints;Object(c.useEffect)((function(){t()}),[]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(r.jsx)("a",{className:"navbar-brand",children:n.name}),Object(r.jsx)("div",{className:"badge badge-pill badge-info",children:n.points}),Object(r.jsx)("button",{className:"navbar-toggler collapsed",type:"button","data-toggle":"collapse","data-target":"#navbarColor03","aria-controls":"navbarColor03","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsx)("div",{className:"navbar-collapse collapse",id:"navbarColor03",children:Object(r.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link","data-target":"#exampleModal",children:"Historical"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link",children:"About"})}),Object(r.jsx)("li",{className:"nav-item dropdown",children:Object(r.jsx)("div",{class:"form-group",children:Object(r.jsxs)("select",{class:"custom-select",onChange:function(e){return function(e){var t=e.target.value;a(t)}(e)},children:[Object(r.jsx)("option",{selected:"",children:"Add more points"}),Object(r.jsx)("option",{value:"1000",children:"1000 points"}),Object(r.jsx)("option",{value:"5000",children:"5000 points"}),Object(r.jsx)("option",{value:"7500",children:"7500 points"})]})})})]})})]}),Object(r.jsxs)("div",{className:"jumbotron",children:[Object(r.jsx)("h1",{className:"display-3",children:"Reward Store"}),Object(r.jsx)("p",{className:"lead",children:"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."}),Object(r.jsx)("hr",{className:"my-4"}),Object(r.jsx)("p",{className:"lead",children:Object(r.jsx)("a",{className:"btn btn-primary btn-lg",href:"#",role:"button",children:"Learn more or go to my page"})})]})]})},J=Object(i.b)((function(e){return{userInfo:e.UserReducer}}),(function(e){return{onUser:function(){e(R())},onPoints:function(t){e(function(e){return function(){var t=Object(h.a)(j.a.mark((function t(n){var r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e,"points in thunks"),t.next=3,N(e);case 3:r=t.sent,n({type:w,payload:{pointsUpdated:r}});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))(U);var D=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(J,{}),Object(r.jsx)(S,{}),Object(r.jsx)(C,{})]})},E=n(5),B=n(15),_=function(e){return e.sort((function(e,t){return t.cost-e.cost}))},G=function(e){return e.sort((function(e,t){return e.cost-t.cost}))},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return t.payload.mostRecentProducts;case O:return G(t.payload.lowestPriceProducts);case m:return _(t.payload.highestPriceProducts);default:return e}},W=n(12),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return t.payload.userInfo;case w:return Object(W.a)(Object(W.a)({},e),{},{points:t.payload.pointsUpdated["New Points"]});default:return e}},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return t.payload.redeemedProduct;default:return e}},L=Object(E.c)({ContentReducer:Q,UserReducer:M,RedeemReducer:A}),H=Object(E.d)(L,Object(E.a)(B.a));o.a.render(Object(r.jsx)(i.a,{store:H,children:Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(D,{})})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.23e63ea7.chunk.js.map