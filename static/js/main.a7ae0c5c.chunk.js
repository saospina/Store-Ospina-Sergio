(this["webpackJsonpstore-ospina-sergio"]=this["webpackJsonpstore-ospina-sergio"]||[]).push([[0],{39:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),a=n.n(c),s=n(10),o=n.n(s),i=n(9),u=(n(39),n(24)),l=n(25),d=function(e,t){var n=Object(c.useState)(1),r=Object(l.a)(n,2),a=r[0],s=r[1],o=Math.ceil(e.length/t);return{next:function(){s((function(e){return Math.min(e+1,o)}))},prev:function(){s((function(e){return Math.max(e-1,1)}))},jump:function(e){var t=Math.max(1,e);s((function(e){return Math.min(t,o)}))},currentData:function(){var n=(a-1)*t,r=n+t;return e.slice(n,r)},currentPage:a,maxPage:o}},j=function(e){var t=e.getProducts,n=e.products,a=e.userInfo,s=e.onRedeem,o=e.onUser,i=d(n,8),l=i.currentData,j=i.maxPage,b=i.next,p=i.prev,f=i.currentPage,h=i.jump,O=Object(u.a)(Array(j).keys()),m=l();Object(c.useEffect)((function(){t()}),[]);return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("div",{className:"row",children:m.map((function(e){return Object(r.jsx)("div",{className:"col-md-3",children:Object(r.jsxs)("div",{className:"card mb-3 border-info",children:[a.points<e.cost?Object(r.jsxs)("button",{type:"button",className:"btn btn-secondary disabled",children:["Points needed",Object(r.jsx)("span",{className:"badge rounded-pill bg-info",children:e.cost-a.points})]}):Object(r.jsxs)("button",{type:"button",className:"btn btn-success",onClick:function(t){return function(e,t){t.preventDefault(),s(e),o()}(e._id,t)},children:["Buy now ",Object(r.jsx)("span",{className:"badge rounded-pill bg-info",children:e.cost})]}),Object(r.jsx)("img",{src:e.img.hdUrl,className:"card-img-top",alt:e.img.hdUrl}),Object(r.jsxs)("div",{className:"card-body text-center",children:[Object(r.jsx)("h6",{className:"card-subtitle text-muted",children:e.category}),Object(r.jsx)("hr",{}),Object(r.jsx)("div",{className:"text-muted",children:e.name}),Object(r.jsx)("i",{className:"fab fa-shopping-bag"})]})]})},e._id)}))}),Object(r.jsx)("div",{children:Object(r.jsxs)("ul",{className:"pagination justify-content-center",children:[Object(r.jsx)("li",{className:"page-item",onClick:p,children:Object(r.jsx)("a",{className:"page-link",children:"\xab"})}),O.map((function(e){return Object(r.jsx)("li",{className:e+1===f?"page-item active":"page-item",onClick:function(){return h(e+1)},children:Object(r.jsx)("a",{className:"page-link",children:e+1})},e)})),Object(r.jsx)("li",{className:"page-item",onClick:b,children:Object(r.jsx)("a",{className:"page-link",children:"\xbb"})})]})})]})},b=n(4),p=n.n(b),f=n(8),h="SHOW_MOST_RECENT_PRODUCTS",O="SHOW_LOWEST_PRICE_PRODUCTS",m="SHOW_HIGHEST_PRICE_PRODUCTS",x="REDEEM_BY_PRODUCT",v="SHOW_SPINNER",y="HIDE_SPINNER",g={"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDA1MGE3NzNkNGE1YjAwMjBjODA2MzIiLCJpYXQiOjE2MTA5NDMwOTV9.RQKna4r_MW8OlnFsskLElUaAJdf2HsvY9UfOvVqQQYg"},N=function(){var e=Object(f.a)(p.a.mark((function e(){var t,n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=R("products"),e.next=3,fetch(t,{headers:g});case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(f.a)(p.a.mark((function e(){var t,n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=R("user/me"),e.next=3,fetch(t,{headers:g});case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(f.a)(p.a.mark((function e(t){var n,r,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=R("user/points"),e.next=3,fetch(n,{method:"POST",body:JSON.stringify({amount:+t}),headers:g});case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(f.a)(p.a.mark((function e(t){var n,r,c,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={productId:t},r=R("redeem"),e.next=4,fetch(r,{method:"POST",body:JSON.stringify(n),headers:g});case 4:return c=e.sent,e.next=7,c.json();case 7:return a=e.sent,e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(f.a)(p.a.mark((function e(){var t,n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=R("user/history"),e.next=3,fetch(t,{headers:g});case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function R(e){return"https://coding-challenge-api.aerolab.co/".concat(e)}var I="SHOW_MODAL_HISTORY",H="SHOW_MODAL",C="HIDE_MODAL",_=function(e){return function(t){t({type:"SHOW_MODAL",modalType:e})}},E=function(){return function(){var e=Object(f.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:n=e.sent,t({type:h,payload:{mostRecentProducts:n}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},D="SHOW_USER",M="ADD_POINTS",T=function(){return function(){var e=Object(f.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:n=e.sent,t({type:D,payload:{userInfo:n}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},U=Object(i.b)((function(e){var t=e.ContentReducer,n=e.UserReducer;return{products:t.data,userInfo:n}}),(function(e){return{getProducts:function(){e(E())},onRedeem:function(t){e(function(e){return function(){var t=Object(f.a)(p.a.mark((function t(n){var r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n((function(e){e({type:"SHOW_SPINNER"})})),t.next=3,S(e);case 3:r=t.sent,n({type:x,payload:{redeemedProduct:r}}),n((function(e){e({type:"HIDE_SPINNER"})})),n(_("confirmation"));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},onUser:function(){e(T())}}}))(j),A=function(e){var t=e.getMostRecentProducts,n=e.getLowestPriceProducts,c=e.getHighestPriceProducts;return Object(r.jsxs)("div",{className:"container my-5",children:[Object(r.jsx)("h6",{children:"Sort by:"}),Object(r.jsx)("button",{type:"button",className:"btn btn-outline-info mr-3",onClick:function(){return t()},children:"Most Recent"}),Object(r.jsx)("button",{type:"button",className:"btn btn-outline-info mr-3",onClick:function(){return n()},children:"Lowest Price"}),Object(r.jsx)("button",{type:"button",className:"btn btn-outline-info mr-3",onClick:function(){return c()},children:"Highest Price"}),Object(r.jsx)("hr",{className:"border border-secondary my-5"})]})},L=Object(i.b)(null,(function(e){return{getMostRecentProducts:function(){e(E())},getLowestPriceProducts:function(){e(function(){var e=Object(f.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:n=e.sent,t({type:O,payload:{lowestPriceProducts:n}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},getHighestPriceProducts:function(){e(function(){var e=Object(f.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:n=e.sent,t({type:m,payload:{highestPriceProducts:n}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}}))(A),W=(n(41),function(e){var t=e.onUser,n=e.userInfo,a=e.onPoints,s=e.onHistory;Object(c.useEffect)((function(){t()}),[]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{className:"navbar-brand",children:n.name}),Object(r.jsx)("span",{className:"badge badge-pill badge-info custom-badge-pill",children:n.points})]}),Object(r.jsx)("button",{className:"navbar-toggler collapsed",type:"button","data-toggle":"collapse","data-target":"#navbarColor03","aria-controls":"navbarColor03","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsx)("div",{className:"navbar-collapse collapse",id:"navbarColor03",children:Object(r.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(r.jsx)("li",{className:"nav-item mr-5 ml-5",children:Object(r.jsxs)("button",{type:"button",className:"btn btn-info",onClick:function(){s()},children:["Shopping history",Object(r.jsx)("span",{className:"badge badge-pill badge-info"})]})}),Object(r.jsx)("li",{className:"nav-item dropdown",children:Object(r.jsx)("div",{className:"form-group search-button ",children:Object(r.jsx)("select",{className:"custom-select",onChange:function(e){return function(e){var t=e.target.value;a(t)}(e)},children:[{value:0,key:"Add Points"},{value:1e3,key:"1000 points"},{value:5e3,key:"5000 points"},{value:7500,key:"7500 points"}].map((function(e,t){return Object(r.jsx)("option",{defaultValue:"0",value:e.value,children:e.key},t)}))})})})]})})]}),Object(r.jsxs)("div",{className:"jumbotron",children:[Object(r.jsx)("h1",{className:"display-3",children:"Reward Store"}),Object(r.jsx)("p",{className:"lead",children:"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."}),Object(r.jsx)("hr",{className:"my-4"}),Object(r.jsx)("p",{className:"lead",children:Object(r.jsx)("a",{className:"btn btn-primary btn-lg",href:"https://saospina.github.io/sergio.ospina/",target:"_blank",role:"button",children:"Learn more about me going to my webpage"})})]})]})}),J=Object(i.b)((function(e){return{userInfo:e.UserReducer}}),(function(e){return{onUser:function(){e(T())},onPoints:function(t){e(function(e){return function(){var t=Object(f.a)(p.a.mark((function t(n){var r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n((function(e){e({type:"SHOW_SPINNER"})})),t.next=3,w(e);case 3:r=t.sent,n({type:M,payload:{pointsUpdated:r}}),n((function(e){e({type:"HIDE_SPINNER"})}));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},onHistory:function(){e(function(){var e=Object(f.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t((function(e){e({type:"SHOW_SPINNER"})})),e.next=3,k();case 3:n=e.sent,t({type:I,payload:{historyProducts:n}}),t((function(e){e({type:"HIDE_SPINNER"})})),t(_("history"));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}}))(W),B=(n(42),function(e){var t={width:"3rem",height:"3rem"};return e.spinner?Object(r.jsxs)("div",{className:"spinner text-center text-info",children:[Object(r.jsx)("div",{className:"spinner-border",style:t,role:"status"}),Object(r.jsx)("div",{className:"spinner-grow",style:t,role:"status"})]}):null}),z=Object(i.b)((function(e){return{spinner:e.ContentReducer.isloading}}),null)(B),Y=n(46),Q=n(47),F=function(e){var t=e.products,n=e.modal,c=e.handleClose,a=t.slice(-5);return Object(r.jsxs)(Y.a,{show:n,onHide:function(){return c(!1)},backdrop:"static",children:[Object(r.jsx)(Y.a.Header,{closeButton:!0,children:Object(r.jsx)(Y.a.Title,{className:"text-info",children:"Shopping history"})}),Object(r.jsxs)(Y.a.Body,{children:[Object(r.jsx)("h5",{className:"text-success",children:"Last 5 items purchased:"}),a.map((function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{className:"text-body",children:e.name}),Object(r.jsxs)("ul",{className:"text-dark",children:[Object(r.jsxs)("li",{children:["Price:",e.cost]}),Object(r.jsxs)("li",{children:["Category:",e.category]}),Object(r.jsxs)("li",{children:["Date:",e.createDate]}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{target:"_blank",rel:"noreferrer",href:e.img.hdUrl,children:"Product image:"})})]})]},e.createDate)}))]}),Object(r.jsx)(Y.a.Footer,{children:Object(r.jsx)(Q.a,{variant:"secondary",onClick:function(){return c(!1)},children:"Close"})})]})},G=Object(i.b)((function(e){var t=e.HistoryReducer;return{products:t.data,modal:"history"===t.modalType}}),(function(e){return{handleClose:function(t){e((function(e){e({type:"HIDE_MODAL"})}))}}}))(F),V=function(e){var t=e.smShow,n=e.handleClose;return Object(r.jsxs)(Y.a,{className:"text-dark",size:"sm",show:t,onHide:function(){return n(!1)},"aria-labelledby":"example-modal-sizes-title-sm",centered:!0,children:[Object(r.jsx)(Y.a.Header,{closeButton:!0,children:Object(r.jsx)(Y.a.Title,{className:"text-success",id:"example-modal-sizes-title-sm",children:"Success"})}),Object(r.jsx)(Y.a.Body,{className:"text-info",children:"You have successfully redeemed this product."})]})},X=Object(i.b)((function(e){return{smShow:"confirmation"===e.HistoryReducer.modalType}}),(function(e){return{handleClose:function(t){e((function(e){e({type:"HIDE_MODAL"})}))}}}))(V);var q=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(z,{}),Object(r.jsx)(G,{}),Object(r.jsx)(X,{}),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(J,{}),Object(r.jsx)(L,{}),Object(r.jsx)(U,{})]})]})},K=n(12),Z=n(23),$=n(7),ee=function(e){return e.sort((function(e,t){return t.cost-e.cost}))},te=function(e){return e.sort((function(e,t){return e.cost-t.cost}))},ne={data:[],isloading:!1},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object($.a)(Object($.a)({},e),{},{data:t.payload.mostRecentProducts});case O:return Object($.a)(Object($.a)({},e),{},{data:te(t.payload.lowestPriceProducts)});case m:return Object($.a)(Object($.a)({},e),{},{data:ee(t.payload.highestPriceProducts)});case v:return Object($.a)(Object($.a)({},e),{},{isloading:!0});case y:return Object($.a)(Object($.a)({},e),{},{isloading:!1});default:return e}},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return t.payload.userInfo;case M:return Object($.a)(Object($.a)({},e),{},{points:t.payload.pointsUpdated["New Points"]});default:return e}},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return t.payload.redeemedProduct;default:return e}},se={data:[],isModal:!1,modalType:null},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object($.a)(Object($.a)({},e),{},{data:t.payload.historyProducts});case H:return Object($.a)(Object($.a)({},e),{},{modalType:t.modalType});case C:return se;default:return e}},ie=Object(K.c)({ContentReducer:re,UserReducer:ce,RedeemReducer:ae,HistoryReducer:oe}),ue=Object(K.d)(ie,Object(K.a)(Z.a));o.a.render(Object(r.jsx)(i.a,{store:ue,children:Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(q,{})})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.a7ae0c5c.chunk.js.map