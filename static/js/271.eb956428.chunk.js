"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[271],{992:function(e,n,r){r.d(n,{PL:function(){return f},$o:function(){return l},uo:function(){return x},$G:function(){return g},Mb:function(){return m}});var t=r(5861),a=r(885),c=r(7757),i=r.n(c),s=r(2791),u=r(6871),o=r(4635);function l(){var e=(0,s.useState)([]),n=(0,a.Z)(e,2),r=n[0],c=n[1],l=(0,s.useState)(!1),f=(0,a.Z)(l,2),p=f[0],d=f[1],h=(0,u.UO)().movieId;return(0,s.useEffect)((function(){function e(){return(e=(0,t.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.prev=1,e.next=4,(0,o.hG)(h);case 4:n=e.sent,c(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0.message);case 11:return e.prev=11,d(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[h]),{film:r,isLoading:p}}function f(){var e=(0,s.useState)([]),n=(0,a.Z)(e,2),r=n[0],c=n[1],l=(0,s.useState)(!1),f=(0,a.Z)(l,2),p=f[0],d=f[1],h=(0,u.UO)().movieId;return(0,s.useEffect)((function(){function e(){return(e=(0,t.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.prev=1,e.next=4,(0,o.jf)(h);case 4:n=e.sent,c(n.cast),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0.message);case 11:return e.prev=11,d(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[h]),{cast:r,isLoading:p}}var p=r(501),d=r(2007),h=r.n(d),v=r(6795);function g(){var e=(0,p.lr)(),n=(0,a.Z)(e,2),r=n[0],c=n[1],u=(0,s.useState)([]),l=(0,a.Z)(u,2),f=l[0],d=l[1],h=(0,s.useState)(!1),g=(0,a.Z)(h,2),m=g[0],x=g[1],y=r.get("query");return(0,s.useEffect)((function(){function e(){return(e=(0,t.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.prev=1,e.next=4,(0,o.z1)(y);case 4:if(0!==(n=e.sent).results.length){e.next=7;break}return e.abrupt("return",v.Am.error('Nothing was found for the query "'.concat(y,'", please specify your query)')));case 7:d(n.results),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0.message);case 13:return e.prev=13,x(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})))).apply(this,arguments)}y&&function(){e.apply(this,arguments)}()}),[y,r]),{query:y,setSearch:c,filmsBySearch:f,isLoading:m}}function m(){var e=(0,s.useState)([]),n=(0,a.Z)(e,2),r=n[0],c=n[1],u=(0,s.useState)(!1),l=(0,a.Z)(u,2),f=l[0],p=l[1];return(0,s.useEffect)((function(){function e(){return(e=(0,t.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.prev=1,e.next=4,(0,o.Hg)();case 4:n=e.sent,c(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0.message);case 11:return e.prev=11,p(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),{films:r,isLoading:f}}function x(){var e=(0,s.useState)([]),n=(0,a.Z)(e,2),r=n[0],c=n[1],l=(0,s.useState)(!1),f=(0,a.Z)(l,2),p=f[0],d=f[1],h=(0,u.UO)().movieId;return(0,s.useEffect)((function(){function e(){return(e=(0,t.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.prev=1,e.next=4,(0,o.Cm)(h);case 4:n=e.sent,c(n.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0.message);case 11:return e.prev=11,d(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[h]),{review:r,isLoading:p}}g.propTypes={query:h().string.isRequired}},4635:function(e,n,r){r.d(n,{Cm:function(){return x},Hg:function(){return l},hG:function(){return h},jf:function(){return g},yA:function(){return u},z1:function(){return p}});var t=r(5861),a=r(7757),c=r.n(a),i=r(4569),s=r.n(i),u="https://image.tmdb.org/t/p/w500";s().defaults.baseURL="https://api.themoviedb.org/3";var o="191efeeb865bc4c787fee73d3a367440";function l(){return f.apply(this,arguments)}function f(){return(f=(0,t.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/trending/all/week?api_key=".concat(o));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return d.apply(this,arguments)}function d(){return(d=(0,t.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/search/movie?api_key=".concat(o,"&language=en-US&page=1&query=").concat(n,"&include_adult=true"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return(v=(0,t.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/movie/".concat(n,"?api_key=").concat(o,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return m.apply(this,arguments)}function m(){return(m=(0,t.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/movie/".concat(n,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return y.apply(this,arguments)}function y(){return(y=(0,t.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/movie/".concat(n,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},8271:function(e,n,r){r.r(n);var t=r(6871),a=r(501),c=r(992),i=r(8735),s=r(2504),u=r(3046),o=r(4635),l=r(3266),f=r(2791),p=r(184);n.default=function(){var e=(0,c.$o)(),n=e.film,r=e.isLoading,d=n.name,h=n.title,v=n.poster_path,g=n.release_date,m=void 0===g?"2022-00-00":g,x=n.vote_average,y=n.overview,b=n.genres,k=void 0===b?[{id:1,name:""}]:b,w=(0,t.s0)(),S=(0,t.TH)();return(0,p.jsxs)(i.xu,{p:4,children:[(0,p.jsx)(i.xu,{mb:"10",children:(0,p.jsx)(s.zx,{colorScheme:"gray",type:"button",onClick:function(){var e;w((null===S||void 0===S||null===(e=S.state)||void 0===e?void 0:e.from)||"/")},children:"Go Back"})}),r&&"Loading...",(0,p.jsxs)(i.kC,{children:[!r&&(0,p.jsx)(i.xu,{mr:"7",minW:"15rem",children:(0,p.jsx)(u.Ee,{src:v?"".concat(o.yA+v):l,alt:null!==h&&void 0!==h?h:d,borderRadius:"lg"})}),!r&&(0,p.jsxs)(i.xu,{children:[(0,p.jsxs)(i.xv,{fontSize:"3xl",fontWeight:"700",children:[h," ",m.slice(0,4)]}),(0,p.jsx)(i.xv,{fontWeight:"700",children:"User Score:"}),(0,p.jsxs)(i.xv,{children:[" ",x]}),(0,p.jsx)(i.xv,{fontWeight:"700",children:"Overview:"}),(0,p.jsxs)(i.xv,{children:[" ",y]}),(0,p.jsx)(i.xv,{fontWeight:"700",children:"Genres:"}),k.map((function(e){return(0,p.jsx)(i.xv,{children:e.name},e.id)}))]})]}),(0,p.jsxs)(i.M5,{children:[(0,p.jsx)(i.xv,{as:a.OL,to:"cast",state:S.state,mr:"20",fontSize:"4xl",children:"Cast"}),(0,p.jsx)(i.xv,{as:a.OL,to:"reviews",state:S.state,mr:"20",fontSize:"4xl",children:"Reviews"})]}),(0,p.jsx)(f.Suspense,{fallback:"Loading...",children:(0,p.jsx)(t.j3,{})})]})}},3046:function(e,n,r){r.d(n,{Ee:function(){return p}});var t=r(1340),a=r(5971),c=r(2791),i=r(4083);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},s.apply(this,arguments)}function u(e,n){if(null==e)return{};var r,t,a={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}var o=["htmlWidth","htmlHeight","alt"],l=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin","fallbackStrategy","referrerPolicy"],f=c.forwardRef((function(e,n){var r=e.htmlWidth,t=e.htmlHeight,a=e.alt,i=u(e,o);return c.createElement("img",s({width:r,height:t,ref:n,alt:a},i))}));a.Ts&&(f.displayName="NativeImage");var p=(0,t.Gp)((function(e,n){var r=e.fallbackSrc,o=e.fallback,p=e.src,d=e.srcSet,h=e.align,v=e.fit,g=e.loading,m=e.ignoreFallback,x=e.crossOrigin,y=e.fallbackStrategy,b=void 0===y?"beforeLoadOrError":y,k=e.referrerPolicy,w=u(e,l),S=null!=g||m||!(void 0!==r||void 0!==o),j=function(e){var n=e.loading,r=e.src,t=e.srcSet,a=e.onLoad,s=e.onError,u=e.crossOrigin,o=e.sizes,l=e.ignoreFallback,f=(0,c.useState)("pending"),p=f[0],d=f[1];(0,c.useEffect)((function(){d(r?"loading":"pending")}),[r]);var h=(0,c.useRef)(),v=(0,c.useCallback)((function(){if(r){g();var e=new Image;e.src=r,u&&(e.crossOrigin=u),t&&(e.srcset=t),o&&(e.sizes=o),n&&(e.loading=n),e.onload=function(e){g(),d("loaded"),null==a||a(e)},e.onerror=function(e){g(),d("failed"),null==s||s(e)},h.current=e}}),[r,u,t,o,a,s,n]),g=function(){h.current&&(h.current.onload=null,h.current.onerror=null,h.current=null)};return(0,i.a)((function(){if(!l)return"loading"===p&&v(),function(){g()}}),[p,v,l]),l?"loaded":p}(s({},e,{ignoreFallback:S})),Z=function(e,n){return"loaded"!==e&&"beforeLoadOrError"===n||"failed"===e&&"onError"===n}(j,b),O=s({ref:n,objectFit:v,objectPosition:h},S?w:(0,a.CE)(w,["onError","onLoad"]));return Z?o||c.createElement(t.m$.img,s({as:f,className:"chakra-image__placeholder",src:r},O)):c.createElement(t.m$.img,s({as:f,src:p,srcSet:d,crossOrigin:x,loading:g,referrerPolicy:k,className:"chakra-image"},O))}));a.Ts&&(p.displayName="Image")},3266:function(e,n,r){e.exports=r.p+"static/media/movieIconDefault.0034d6b52beacab39295.jpg"}}]);
//# sourceMappingURL=271.eb956428.chunk.js.map