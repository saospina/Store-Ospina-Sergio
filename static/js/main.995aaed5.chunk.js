(this["webpackJsonpstore-ospina-sergio"]=this["webpackJsonpstore-ospina-sergio"]||[]).push([[0],{38:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),c=n.n(a),s=n(10),o=n.n(s),i=n(9),u=(n(38),n(24)),l=n(25),d=function(e,t){var n=Object(a.useState)(1),r=Object(l.a)(n,2),c=r[0],s=r[1],o=Math.ceil(e.length/t);return{next:function(){s((function(e){return Math.min(e+1,o)}))},prev:function(){s((function(e){return Math.max(e-1,1)}))},jump:function(e){var t=Math.max(1,e);s((function(e){return Math.min(t,o)}))},currentData:function(){var n=(c-1)*t,r=n+t;return e.slice(n,r)},currentPage:c,maxPage:o}},j=function(e){var t=e.getProducts,n=e.products,c=e.userInfo,s=e.onRedeem,o=e.onUser,i=d(n,8),l=i.currentData,j=i.maxPage,b=i.next,p=i.prev,f=i.currentPage,h=i.jump,O=Object(u.a)(Array(j).keys()),m=l();Object(a.useEffect)((function(){t()}),[]);return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("div",{className:"row",children:m.map((function(e){return Object(r.jsx)("div",{className:"col-md-3",children:Object(r.jsxs)("div",{className:"card mb-3 border-info",children:[c.points<e.cost?Object(r.jsxs)("button",{type:"button",className:"btn btn-secondary disabled",children:["Points needed",Object(r.jsx)("span",{className:"badge rounded-pill bg-info",children:e.cost-c.points})]}):Object(r.jsxs)("button",{type:"button",className:"btn btn-success",onClick:function(t){return function(e,t){t.preventDefault(),s(e),o()}(e._id,t)},children:["Buy now ",Object(r.jsx)("span",{className:"badge rounded-pill bg-info",children:e.cost})]}),Object(r.jsx)("img",{src:e.img.hdUrl,className:"card-img-top",alt:e.img.hdUrl}),Object(r.jsxs)("div",{className:"card-body text-center",children:[Object(r.jsx)("h6",{className:"card-subtitle text-muted",children:e.category}),Object(r.jsx)("hr",{}),Object(r.jsx)("div",{className:"text-muted",children:e.name}),Object(r.jsx)("i",{className:"fab fa-shopping-bag"})]})]})},e._id)}))}),Object(r.jsx)("div",{children:Object(r.jsxs)("ul",{className:"pagination justify-content-center",children:[Object(r.jsx)("li",{className:"page-item",onClick:p,children:Object(r.jsx)("a",{className:"page-link",children:"\xab"})}),O.map((function(e){return Object(r.jsx)("li",{className:e+1===f?"page-item active":"page-item",onClick:function(){return h(e+1)},children:Object(r.jsx)("a",{className:"page-link",children:e+1})},e)})),Object(r.jsx)("li",{className:"page-item",onClick:b,children:Object(r.jsx)("a",{className:"page-link",children:"\xbb"})})]})})]})},b=n(4),p=n.n(b),f=n(8),h="SHOW_MOST_RECENT_PRODUCTS",O="SHOW_LOWEST_PRICE_PRODUCTS",m="SHOW_HIGHEST_PRICE_PRODUCTS",x="REDEEM_BY_PRODUCT",v="SHOW_SPINNER",g="HIDE_SPINNER",y={"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDA1MGE3NzNkNGE1YjAwMjBjODA2MzIiLCJpYXQiOjE2MTA5NDMwOTV9.RQKna4r_MW8OlnFsskLElUaAJdf2HsvY9UfOvVqQQYg"},N=function(){var e=Object(f.a)(p.a.mark((function e(){var t,n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=S("products"),e.next=3,fetch(t,{headers:y});case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(f.a)(p.a.mark((function e(){var t,n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=S("user/me"),e.next=3,fetch(t,{headers:y});case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(f.a)(p.a.mark((function e(t){var n,r,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=S("user/points"),e.next=3,fetch(n,{method:"POST",body:JSON.stringify({amount:+t}),headers:y});case 3:return r=e.sent,e.next=6,r.json();case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(f.a)(p.a.mark((function e(t){var n,r,a,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={productId:t},r=S("redeem"),e.next=4,fetch(r,{method:"POST",body:JSON.stringify(n),headers:y});case 4:return a=e.sent,e.next=7,a.json();case 7:return c=e.sent,e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(f.a)(p.a.mark((function e(){var t,n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=S("user/history"),e.next=3,fetch(t,{headers:y});case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function S(e){return"https://coding-challenge-api.aerolab.co/".concat(e)}var I=function(){return function(){var e=Object(f.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:n=e.sent,t({type:h,payload:{mostRecentProducts:n}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},_="SHOW_USER",E="ADD_POINTS",C=function(){return function(){var e=Object(f.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:n=e.sent,t({type:_,payload:{userInfo:n}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},H=Object(i.b)((function(e){var t=e.ContentReducer,n=e.UserReducer;return{products:t.data,userInfo:n}}),(function(e){return{getProducts:function(){e(I())},onRedeem:function(t){e(function(e){return function(){var t=Object(f.a)(p.a.mark((function t(n){var r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n((function(e){e({type:"SHOW_SPINNER"})})),t.next=3,k(e);case 3:r=t.sent,n({type:x,payload:{redeemedProduct:r}}),n((function(e){e({type:"HIDE_SPINNER"})}));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},onUser:function(){e(C())}}}))(j),M=function(e){var t=e.getMostRecentProducts,n=e.getLowestPriceProducts,a=e.getHighestPriceProducts;return Object(r.jsxs)("div",{className:"container my-5",children:[Object(r.jsx)("h6",{children:"Sort by:"}),Object(r.jsx)("button",{type:"button",className:"btn btn-outline-info mr-3",onClick:function(){return t()},children:"Most Recent"}),Object(r.jsx)("button",{type:"button",className:"btn btn-outline-info mr-3",onClick:function(){return n()},children:"Lowest Price"}),Object(r.jsx)("button",{type:"button",className:"btn btn-outline-info mr-3",onClick:function(){return a()},children:"Highest Price"}),Object(r.jsx)("hr",{className:"border border-secondary my-5"})]})},D=Object(i.b)(null,(function(e){return{getMostRecentProducts:function(){e(I())},getLowestPriceProducts:function(){e(function(){var e=Object(f.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:n=e.sent,t({type:O,payload:{lowestPriceProducts:n}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},getHighestPriceProducts:function(){e(function(){var e=Object(f.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:n=e.sent,t({type:m,payload:{highestPriceProducts:n}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}}))(M),U=(n(40),function(e){var t=e.onUser,n=e.userInfo,c=e.onPoints,s=e.onHistory;Object(a.useEffect)((function(){t()}),[]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{className:"navbar-brand",children:n.name}),Object(r.jsx)("span",{className:"badge badge-pill badge-info custom-badge-pill",children:n.points})]}),Object(r.jsx)("button",{className:"navbar-toggler collapsed",type:"button","data-toggle":"collapse","data-target":"#navbarColor03","aria-controls":"navbarColor03","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsx)("div",{className:"navbar-collapse collapse",id:"navbarColor03",children:Object(r.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(r.jsx)("li",{className:"nav-item mr-5 ml-5",children:Object(r.jsxs)("button",{type:"button",className:"btn btn-info",onClick:function(){s()},children:["Shopping history",Object(r.jsx)("span",{className:"badge badge-pill badge-info"})]})}),Object(r.jsx)("li",{className:"nav-item dropdown",children:Object(r.jsx)("div",{className:"form-group search-button ",children:Object(r.jsx)("select",{className:"custom-select",onChange:function(e){return function(e){var t=e.target.value;c(t)}(e)},children:[{value:0,key:"Add Points"},{value:1e3,key:"1000 points"},{value:5e3,key:"5000 points"},{value:7500,key:"7500 points"}].map((function(e,t){return Object(r.jsx)("option",{defaultValue:"0",value:e.value,children:e.key},t)}))})})})]})})]}),Object(r.jsxs)("div",{className:"jumbotron",children:[Object(r.jsx)("h1",{className:"display-3",children:"Reward Store"}),Object(r.jsx)("p",{className:"lead",children:"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."}),Object(r.jsx)("hr",{className:"my-4"}),Object(r.jsx)("p",{className:"lead",children:Object(r.jsx)("a",{className:"btn btn-primary btn-lg",href:"https://saospina.github.io/sergio.ospina/",target:"_blank",role:"button",children:"Learn more about me going to my webpage"})})]})]})}),T="SHOW_MODAL_HISTORY",A="SHOW_MODAL",W="HIDE_MODAL",L=Object(i.b)((function(e){return{userInfo:e.UserReducer}}),(function(e){return{onUser:function(){e(C())},onPoints:function(t){e(function(e){return function(){var t=Object(f.a)(p.a.mark((function t(n){var r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n((function(e){e({type:"SHOW_SPINNER"})})),t.next=3,w(e);case 3:r=t.sent,n({type:E,payload:{pointsUpdated:r}}),n((function(e){e({type:"HIDE_SPINNER"})}));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},onHistory:function(){e(function(){var e=Object(f.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t((function(e){e({type:"SHOW_SPINNER"})})),e.next=3,R();case 3:n=e.sent,t({type:T,payload:{historyProducts:n}}),t((function(e){e({type:"HIDE_SPINNER"})})),t((function(e){e({type:"SHOW_MODAL"})}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}}))(U),J=(n(41),function(e){var t={width:"3rem",height:"3rem"};return e.spinner?Object(r.jsxs)("div",{className:"spinner text-center text-info",children:[Object(r.jsx)("div",{className:"spinner-border",style:t,role:"status"}),Object(r.jsx)("div",{className:"spinner-grow",style:t,role:"status"})]}):null}),B=Object(i.b)((function(e){return{spinner:e.ContentReducer.isloading}}),null)(J),Y=n(46),Q=n(47),z=function(e){var t=e.products,n=e.modal,a=e.handleClose,c=t.slice(-5);return Object(r.jsxs)(Y.a,{show:n,onHide:function(){return a(!1)},backdrop:"static",children:[Object(r.jsx)(Y.a.Header,{closeButton:!0,children:Object(r.jsx)(Y.a.Title,{className:"text-info",children:"Shopping history"})}),Object(r.jsxs)(Y.a.Body,{children:[Object(r.jsx)("h5",{className:"text-success",children:"Last 5 items purchased:"}),c.map((function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{className:"text-body",children:e.name}),Object(r.jsxs)("ul",{className:"text-dark",children:[Object(r.jsx)("li",{children:e.cost}),Object(r.jsx)("li",{children:e.category}),Object(r.jsx)("li",{children:e.createDate}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{target:"_blank",rel:"noreferrer",href:e.img.hdUrl,children:"Product image"})})]})]},e.createDate)}))]}),Object(r.jsx)(Y.a.Footer,{children:Object(r.jsx)(Q.a,{variant:"secondary",onClick:function(){return a(!1)},children:"Close"})})]})},F=Object(i.b)((function(e){var t=e.HistoryReducer;return{products:t.data,modal:t.isModal}}),(function(e){return{handleClose:function(t){e((function(e){e({type:"HIDE_MODAL"})}))}}}))(z);var G=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(B,{}),Object(r.jsx)(F,{}),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(L,{}),Object(r.jsx)(D,{}),Object(r.jsx)(H,{})]})]})},V=n(12),X=n(23),q=n(6),K=function(e){return e.sort((function(e,t){return t.cost-e.cost}))},Z=function(e){return e.sort((function(e,t){return e.cost-t.cost}))},$={data:[],isloading:!1},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(q.a)(Object(q.a)({},e),{},{data:t.payload.mostRecentProducts});case O:return Object(q.a)(Object(q.a)({},e),{},{data:Z(t.payload.lowestPriceProducts)});case m:return Object(q.a)(Object(q.a)({},e),{},{data:K(t.payload.highestPriceProducts)});case v:return Object(q.a)(Object(q.a)({},e),{},{isloading:!0});case g:return Object(q.a)(Object(q.a)({},e),{},{isloading:!1});default:return e}},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return t.payload.userInfo;case E:return Object(q.a)(Object(q.a)({},e),{},{points:t.payload.pointsUpdated["New Points"]});default:return e}},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return t.payload.redeemedProduct;default:return e}},re={data:[],isModal:!1},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(q.a)(Object(q.a)({},e),{},{data:t.payload.historyProducts});case A:return Object(q.a)(Object(q.a)({},e),{},{isModal:!0});case W:return Object(q.a)(Object(q.a)({},e),{},{isModal:!1});default:return e}},ce=Object(V.c)({ContentReducer:ee,UserReducer:te,RedeemReducer:ne,HistoryReducer:ae}),se=Object(V.d)(ce,Object(V.a)(X.a));o.a.render(Object(r.jsx)(i.a,{store:se,children:Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(G,{})})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.995aaed5.chunk.js.map