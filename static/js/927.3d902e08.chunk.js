"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[927],{992:function(e,t,n){n.d(t,{PL:function(){return f},$o:function(){return p},uo:function(){return x},$G:function(){return d},Mb:function(){return m}});var r=n(5861),a=n(885),u=n(7757),c=n.n(u),s=n(2791),i=n(6871),o=n(4635);function p(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),n=t[0],u=t[1],p=(0,s.useState)(!1),f=(0,a.Z)(p,2),l=f[0],h=f[1],v=(0,i.UO)().movieId;return(0,s.useEffect)((function(){function e(){return(e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.prev=1,e.next=4,(0,o.hG)(v);case 4:t=e.sent,u(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0.message);case 11:return e.prev=11,h(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[v]),{film:n,isLoading:l}}function f(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),n=t[0],u=t[1],p=(0,s.useState)(!1),f=(0,a.Z)(p,2),l=f[0],h=f[1],v=(0,i.UO)().movieId;return(0,s.useEffect)((function(){function e(){return(e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.prev=1,e.next=4,(0,o.jf)(v);case 4:t=e.sent,u(t.cast),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0.message);case 11:return e.prev=11,h(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[v]),{cast:n,isLoading:l}}var l=n(501),h=n(2007),v=n.n(h),g=n(6795);function d(){var e=(0,l.lr)(),t=(0,a.Z)(e,2),n=t[0],u=t[1],i=(0,s.useState)([]),p=(0,a.Z)(i,2),f=p[0],h=p[1],v=(0,s.useState)(!1),d=(0,a.Z)(v,2),m=d[0],x=d[1],y=n.get("query");return(0,s.useEffect)((function(){function e(){return(e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.prev=1,e.next=4,(0,o.z1)(y);case 4:if(0!==(t=e.sent).results.length){e.next=7;break}return e.abrupt("return",g.Am.error('Nothing was found for the query "'.concat(y,'", please specify your query)')));case 7:h(t.results),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0.message);case 13:return e.prev=13,x(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})))).apply(this,arguments)}y&&function(){e.apply(this,arguments)}()}),[y,n]),{query:y,setSearch:u,filmsBySearch:f,isLoading:m}}function m(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),n=t[0],u=t[1],i=(0,s.useState)(!1),p=(0,a.Z)(i,2),f=p[0],l=p[1];return(0,s.useEffect)((function(){function e(){return(e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.prev=1,e.next=4,(0,o.Hg)();case 4:t=e.sent,u(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0.message);case 11:return e.prev=11,l(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),{films:n,isLoading:f}}function x(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),n=t[0],u=t[1],p=(0,s.useState)(!1),f=(0,a.Z)(p,2),l=f[0],h=f[1],v=(0,i.UO)().movieId;return(0,s.useEffect)((function(){function e(){return(e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.prev=1,e.next=4,(0,o.Cm)(v);case 4:t=e.sent,u(t.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0.message);case 11:return e.prev=11,h(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[v]),{review:n,isLoading:l}}d.propTypes={query:v().string.isRequired}},4635:function(e,t,n){n.d(t,{Cm:function(){return x},Hg:function(){return p},hG:function(){return v},jf:function(){return d},yA:function(){return i},z1:function(){return l}});var r=n(5861),a=n(7757),u=n.n(a),c=n(4569),s=n.n(c),i="https://image.tmdb.org/t/p/w500";s().defaults.baseURL="https://api.themoviedb.org/3";var o="191efeeb865bc4c787fee73d3a367440";function p(){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/trending/all/week?api_key=".concat(o));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/search/movie?api_key=".concat(o,"&language=en-US&page=1&query=").concat(t,"&include_adult=true"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/movie/".concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},5927:function(e,t,n){n.r(t);n(2791);var r=n(992),a=n(8735),u=n(184);t.default=function(){var e=(0,r.uo)(),t=e.review,n=e.isLoading;return(0,u.jsxs)(u.Fragment,{children:[n&&"...Loading",0!==t.length?(0,u.jsx)(a.QI,{spacing:3,children:t.map((function(e){var t=e.id,n=e.author,r=e.content;return(0,u.jsxs)(a.HC,{children:[(0,u.jsxs)(a.xv,{as:"h2",fontWeight:700,children:["Author: ",n]}),(0,u.jsx)(a.xv,{as:"p",children:r})]},t)}))}):(0,u.jsx)(a.xv,{fontSize:"6xl",children:"No Reviews"})]})}}}]);
//# sourceMappingURL=927.3d902e08.chunk.js.map