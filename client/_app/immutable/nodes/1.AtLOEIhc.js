import{s as E,f as b,l as _,a as S,g as d,h as f,m as g,d as p,c as x,i as l,u as h,n as v,w as $,D as q}from"../chunks/scheduler.PFF7CSlZ.js";import{S as w,i as y}from"../chunks/index.GXezNr8v.js";import{d as C}from"../chunks/singletons.J9WA5qBL.js";const D=()=>{const s=C;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},H={subscribe(s){return D().page.subscribe(s)}};function P(s){let t,r=s[0].status+"",o,n,i,c=s[0].error?.message+"",u;return{c(){t=b("h1"),o=_(r),n=S(),i=b("p"),u=_(c)},l(e){t=d(e,"H1",{});var a=f(t);o=g(a,r),a.forEach(p),n=x(e),i=d(e,"P",{});var m=f(i);u=g(m,c),m.forEach(p)},m(e,a){l(e,t,a),h(t,o),l(e,n,a),l(e,i,a),h(i,u)},p(e,[a]){a&1&&r!==(r=e[0].status+"")&&v(o,r),a&1&&c!==(c=e[0].error?.message+"")&&v(u,c)},i:$,o:$,d(e){e&&(p(t),p(n),p(i))}}}function j(s,t,r){let o;return q(s,H,n=>r(0,o=n)),[o]}let B=class extends w{constructor(t){super(),y(this,t,j,P,E,{})}};export{B as component};
