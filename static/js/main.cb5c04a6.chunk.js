(this["webpackJsonpstore-ospina-sergio"]=this["webpackJsonpstore-ospina-sergio"]||[]).push([[0],{31:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),c=n.n(a),s=n(8),o=n.n(s),i=n(5),u=(n(31),n(16)),l=n(17),d=function(e,t){var n=Object(a.useState)(1),r=Object(l.a)(n,2),c=r[0],s=r[1],o=Math.ceil(e.length/t);return{next:function(){s((function(e){return Math.min(e+1,o)}))},prev:function(){s((function(e){return Math.max(e-1,1)}))},jump:function(e){var t=Math.max(1,e);s((function(e){return Math.min(t,o)}))},currentData:function(){var n=(c-1)*t,r=n+t;return e.slice(n,r)},currentPage:c,maxPage:o}},p=function(e){var t=e.getProducts,n=e.products,c=e.userInfo,s=e.onRedeem,o=e.onUser,i=d(n,8),l=i.currentData,p=i.maxPage,b=i.next,j=i.prev,f=i.currentPage,h=i.jump,m=Object(u.a)(Array(p).keys()),O=l();Object(a.useEffect)((function(){t()}),[]);return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("div",{className:"row",children:O.map((function(e){return Object(r.jsx)("div",{className:"col-md-3",children:Object(r.jsxs)("div",{className:"card mb-3 border-info",children:[c.points<e.cost?Object(r.jsxs)("button",{type:"button",className:"btn btn-secondary disabled",children:["Points needed",Object(r.jsx)("span",{className:"badge rounded-pill bg-info",children:e.cost-c.points})]}):Object(r.jsxs)("button",{type:"button",className:"btn btn-success",onClick:function(t){return function(e,t){t.preventDefault(),s(e),o()}(e._id,t)},children:["Buy now ",Object(r.jsx)("span",{className:"badge rounded-pill bg-info",children:e.cost})]}),Object(r.jsx)("img",{src:e.img.hdUrl,className:"card-img-top",alt:e.img.hdUrl}),Object(r.jsxs)("div",{className:"card-body text-center",children:[Object(r.jsx)("h6",{className:"card-subtitle text-muted",children:e.category}),Object(r.jsx)("hr",{}),Object(r.jsx)("div",{className:"text-muted",children:e.name}),Object(r.jsx)("i",{className:"fab fa-shopping-bag"})]})]})},e._id)}))}),Object(r.jsx)("div",{children:Object(r.jsxs)("ul",{className:"pagination justify-content-center",children:[Object(r.jsx)("li",{className:"page-item",onClick:j,children:Object(r.jsx)("a",{className:"page-link",children:"\xab"})}),m.map((function(e){return Object(r.jsx)("li",{className:e+1===f?"page-item active":"page-item",onClick:function(){return h(e+1)},children:Object(r.jsx)("a",{className:"page-link",children:e+1})},e)})),Object(r.jsx)("li",{className:"page-item",onClick:b,children:Object(r.jsx)("a",{className:"page-link",children:"\xbb"})})]})})]})},b=n(2),j=n.n(b),f=n(4),h="SHOW_MOST_RECENT_PRODUCTS",m="SHOW_LOWEST_PRICE_PRODUCTS",O="SHOW_HIGHEST_PRICE_PRODUCTS",x="REDEEM_BY_PRODUCT",g="SHOW_SPINNER",v="HIDE_SPINNER",y={"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDA1MGE3NzNkNGE1YjAwMjBjODA2MzIiLCJpYXQiOjE2MTA5NDMwOTV9.RQKna4r_MW8OlnFsskLElUaAJdf2HsvY9UfOvVqQQYg"},N=function(){var e=Object(f.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://coding-challenge-api.aerolab.co/products",e.next=3,fetch("https://coding-challenge-api.aerolab.co/products",{headers:y});case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(f.a)(j.a.mark((function e(){var t,n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=R("user/me"),e.next=3,fetch(t,{headers:y});case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(f.a)(j.a.mark((function e(t){var n,r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=R("user/points"),e.next=3,fetch(n,{method:"POST",body:JSON.stringify({amount:+t}),headers:y});case 3:return r=e.sent,e.next=6,r.json();case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(f.a)(j.a.mark((function e(t){var n,r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={productId:t},"https://coding-challenge-api.aerolab.co/redeem",e.next=4,fetch("https://coding-challenge-api.aerolab.co/redeem",{method:"POST",body:JSON.stringify(n),headers:y});case 4:return r=e.sent,e.next=7,r.json();case 7:return a=e.sent,e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function R(e){return"https://coding-challenge-api.aerolab.co/".concat(e)}var I=function(){return function(){var e=Object(f.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:n=e.sent,t({type:h,payload:{mostRecentProducts:n}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},S="SHOW_USER",E="ADD_POINTS",C=function(){return function(){var e=Object(f.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:n=e.sent,t({type:S,payload:{userInfo:n}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},_=Object(i.b)((function(e){var t=e.ContentReducer,n=e.UserReducer;return{products:t.data,userInfo:n}}),(function(e){return{getProducts:function(){e(I())},onRedeem:function(t){e(function(e){return function(){var t=Object(f.a)(j.a.mark((function t(n){var r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n((function(e){e({type:"SHOW_SPINNER"})})),t.next=3,k(e);case 3:r=t.sent,n({type:x,payload:{redeemedProduct:r}}),n((function(e){e({type:"HIDE_SPINNER"})}));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},onUser:function(){e(C())}}}))(p),M=function(e){var t=e.getMostRecentProducts,n=e.getLowestPriceProducts,a=e.getHighestPriceProducts;return Object(r.jsxs)("div",{className:"container my-5",children:[Object(r.jsx)("h6",{children:"Sort by:"}),Object(r.jsx)("button",{type:"button",className:"btn btn-outline-info mr-3",onClick:function(){return t()},children:"Most Recent"}),Object(r.jsx)("button",{type:"button",className:"btn btn-outline-info mr-3",onClick:function(){return n()},children:"Lowest Price"}),Object(r.jsx)("button",{type:"button",className:"btn btn-outline-info mr-3",onClick:function(){return a()},children:"Highest Price"}),Object(r.jsx)("hr",{className:"border border-secondary my-5"})]})},U=Object(i.b)(null,(function(e){return{getMostRecentProducts:function(){e(I())},getLowestPriceProducts:function(){e(function(){var e=Object(f.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:n=e.sent,t({type:m,payload:{lowestPriceProducts:n}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},getHighestPriceProducts:function(){e(function(){var e=Object(f.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:n=e.sent,t({type:O,payload:{highestPriceProducts:n}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}}))(M),H=(n(33),function(e){var t=e.onUser,n=e.userInfo,c=e.onPoints;Object(a.useEffect)((function(){t()}),[]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{className:"navbar-brand",children:n.name}),Object(r.jsx)("span",{className:"badge badge-pill badge-info custom-badge-pill",children:n.points})]}),Object(r.jsx)("button",{className:"navbar-toggler collapsed",type:"button","data-toggle":"collapse","data-target":"#navbarColor03","aria-controls":"navbarColor03","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsx)("div",{className:"navbar-collapse collapse",id:"navbarColor03",children:Object(r.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(r.jsx)("li",{className:"nav-item mr-5 ml-5",children:Object(r.jsx)("a",{className:"nav-link","data-target":"#exampleModal",children:"Historical"})}),Object(r.jsx)("li",{className:"nav-item dropdown",children:Object(r.jsx)("div",{className:"form-group search-button ",children:Object(r.jsx)("select",{className:"custom-select",onChange:function(e){return function(e){var t=e.target.value;c(t)}(e)},children:[{value:0,key:"Add Points"},{value:1e3,key:"1000 points"},{value:5e3,key:"5000 points"},{value:7500,key:"7500 points"}].map((function(e,t){return Object(r.jsx)("option",{defaultValue:"0",value:e.value,children:e.key},t)}))})})})]})})]}),Object(r.jsxs)("div",{className:"jumbotron",children:[Object(r.jsx)("h1",{className:"display-3",children:"Reward Store"}),Object(r.jsx)("p",{className:"lead",children:"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."}),Object(r.jsx)("hr",{className:"my-4"}),Object(r.jsx)("p",{className:"lead",children:Object(r.jsx)("a",{className:"btn btn-primary btn-lg",href:"https://saospina.github.io/sergio.ospina/",target:"_blank",role:"button",children:"Learn more about me going to my webpage"})})]})]})}),D=Object(i.b)((function(e){return{userInfo:e.UserReducer}}),(function(e){return{onUser:function(){e(C())},onPoints:function(t){e(function(e){return function(){var t=Object(f.a)(j.a.mark((function t(n){var r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n((function(e){e({type:"SHOW_SPINNER"})})),t.next=3,w(e);case 3:r=t.sent,n({type:E,payload:{pointsUpdated:r}}),n((function(e){e({type:"HIDE_SPINNER"})}));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))(H),T=(n(34),function(e){var t={width:"3rem",height:"3rem"};return e.spinner?Object(r.jsxs)("div",{className:"spinner text-center text-info",children:[Object(r.jsx)("div",{className:"spinner-border",style:t,role:"status"}),Object(r.jsx)("div",{className:"spinner-grow",style:t,role:"status"})]}):null}),A=Object(i.b)((function(e){return{spinner:e.ContentReducer.isloading}}),null)(T);var J=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(A,{}),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(D,{}),Object(r.jsx)(U,{}),Object(r.jsx)(_,{})]})]})},W=n(6),L=n(15),B=n(3),Q=function(e){return e.sort((function(e,t){return t.cost-e.cost}))},Y=function(e){return e.sort((function(e,t){return e.cost-t.cost}))},z={data:[],isloading:!1},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(B.a)(Object(B.a)({},e),{},{data:t.payload.mostRecentProducts});case m:return Object(B.a)(Object(B.a)({},e),{},{data:Y(t.payload.lowestPriceProducts)});case O:return Object(B.a)(Object(B.a)({},e),{},{data:Q(t.payload.highestPriceProducts)});case g:return Object(B.a)(Object(B.a)({},e),{},{isloading:!0});case v:return Object(B.a)(Object(B.a)({},e),{},{isloading:!1});default:return e}},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return t.payload.userInfo;case E:return Object(B.a)(Object(B.a)({},e),{},{points:t.payload.pointsUpdated["New Points"]});default:return e}},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return t.payload.redeemedProduct;default:return e}},X=Object(W.c)({ContentReducer:G,UserReducer:V,RedeemReducer:F}),q=Object(W.d)(X,Object(W.a)(L.a));o.a.render(Object(r.jsx)(i.a,{store:q,children:Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(J,{})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.cb5c04a6.chunk.js.map