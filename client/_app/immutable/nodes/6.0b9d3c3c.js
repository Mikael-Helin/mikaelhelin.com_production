import{s as w,f as _,l as g,g as m,z as E,m as d,h as p,d as c,i as u,w as b,A,j as k,u as x,n as D}from"../chunks/scheduler.db032cbe.js";import{e as y}from"../chunks/each.e59479a4.js";import{S as F,i as L}from"../chunks/index.9876fdb0.js";function C(o,n,s){const l=o.slice();return l[1]=n[s].slug,l[2]=n[s].title,l}function T(o){let n,s,l=o[2]+"",r,h;return{c(){n=_("li"),s=_("a"),r=g(l),this.h()},l(i){n=m(i,"LI",{});var t=p(n);s=m(t,"A",{href:!0});var e=p(s);r=d(e,l),e.forEach(c),t.forEach(c),this.h()},h(){k(s,"href",h="/blog/"+o[1])},m(i,t){u(i,n,t),x(n,s),x(s,r)},p(i,t){t&1&&l!==(l=i[2]+"")&&D(r,l),t&1&&h!==(h="/blog/"+i[1])&&k(s,"href",h)},d(i){i&&c(n)}}}function S(o){let n,s="Blog",l,r,h,i=y(o[0].summaries),t=[];for(let e=0;e<i.length;e+=1)t[e]=T(C(o,i,e));return{c(){n=_("h1"),n.textContent=s,l=g(`

Test page!

`),r=_("ul");for(let e=0;e<t.length;e+=1)t[e].c();h=g(`

Detta är en test sida. Förväntar mig att denna webbplats ska vara klar nästa månad.

Testing testing 1 2 3 ...

store: se

cookie: se

language: se

123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890`)},l(e){n=m(e,"H1",{"data-svelte-h":!0}),E(n)!=="svelte-dbxyy8"&&(n.textContent=s),l=d(e,`

Test page!

`),r=m(e,"UL",{});var f=p(r);for(let a=0;a<t.length;a+=1)t[a].l(f);f.forEach(c),h=d(e,`

Detta är en test sida. Förväntar mig att denna webbplats ska vara klar nästa månad.

Testing testing 1 2 3 ...

store: se

cookie: se

language: se

123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890`)},m(e,f){u(e,n,f),u(e,l,f),u(e,r,f);for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(r,null);u(e,h,f)},p(e,[f]){if(f&1){i=y(e[0].summaries);let a;for(a=0;a<i.length;a+=1){const v=C(e,i,a);t[a]?t[a].p(v,f):(t[a]=T(v),t[a].c(),t[a].m(r,null))}for(;a<t.length;a+=1)t[a].d(1);t.length=i.length}},i:b,o:b,d(e){e&&(c(n),c(l),c(r),c(h)),A(t,e)}}}function j(o,n,s){let{data:l}=n;return o.$$set=r=>{"data"in r&&s(0,l=r.data)},[l]}class H extends F{constructor(n){super(),L(this,n,j,S,w,{data:0})}}export{H as component};
