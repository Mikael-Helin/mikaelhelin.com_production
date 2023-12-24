import{s as P,f as m,l as E,a as D,g as p,h as k,m as H,d,c as S,j as h,r as Q,i as L,u as _,v as y,n as B,w as j,x as N,y as Z,z as X,A as x,B as Y,C as G,e as le,D as me,o as pe,E as ve,F as ke,G as be,H as Me,I as ye}from"../chunks/scheduler.db032cbe.js";import{S as T,i as V,b as A,d as z,m as K,a as w,t as C,e as R,c as Le,g as je}from"../chunks/index.9876fdb0.js";import{r as ee,h as I,g as se,s as J,a as re}from"../chunks/stores.24e049fb.js";import{e as F}from"../chunks/each.e59479a4.js";function Oe(s,e){const n={},t={},u={$$scope:1};let g=s.length;for(;g--;){const o=s[g],c=e[g];if(c){for(const i in o)i in c||(t[i]=1);for(const i in c)u[i]||(n[i]=c[i],u[i]=1);s[g]=c}else for(const i in o)u[i]=1}for(const o in t)o in n||(n[o]=void 0);return n}function $e(s){return typeof s=="object"&&s!==null?s:{}}const U={us:"Mikael Helin",se:"Mikael Helin",fi:"Mikael Helin",no:"Mikael Helin",de:"Mikael Helin",es:"Mikael Helin",fr:"Mikael Helin",pt:"Mikael Helin",tr:"Mikael Helin",gr:"Mikael Helin",my:"Mikael Helin",ru:"Микаэль Хелин",cn:"米卡埃尔·海林",th:"มิคาเอล เฮลิน",ae:"ميكائيل هيلين",il:"מיקאל הלין",in:"मिकाएल हेलिन"},W={us:"English",se:"Svenska",fi:"Suomi",no:"Norsk",de:"Deutsch",es:"Español",fr:"Français",pt:"Português",tr:"Türkçe",gr:"Ελληνικά",ru:"Русский",cn:"中文",my:"Bahasa Melayu",th:"ภาษาไทย",ae:"العربية",il:"עברית",in:"हिन्दी"},ie={"/about":{us:"About",se:"Om mig",fi:"Minusta",no:"Om meg",de:"Über mich",es:"Sobre mí",fr:"À propos de moi",pt:"Sobre mim",tr:"Hakkımda",gr:"Σχετικά με εμένα",ru:"Обо мне",cn:"关于我",my:"Tentang saya",th:"เกี่ยวกับฉัน",ae:"حولي",il:"עלי",in:"के बारे में"},"/contact":{us:"Contact",se:"Kontakt",fi:"Yhteystiedot",no:"Kontakt",de:"Kontakt",es:"Contacto",fr:"Contact",pt:"Contato",tr:"İletişim",gr:"Επικοινωνία",ru:"Контакт",cn:"联系",my:"Hubungi",th:"ติดต่อ",ae:"اتصل",il:"צור קשר",in:"संपर्क"}},oe={"/":{us:"Home",se:"Hem",fi:"Koti",no:"Hjem",de:"Zuhause",es:"Casa",fr:"Accueil",pt:"Casa",tr:"Ev",gr:"Σπίτι",ru:"Главная",cn:"家",my:"Rumah",th:"บ้าน",ae:"الصفحة الرئيسية",il:"בית",in:"घर"},"/projects":{us:"Projects",se:"Projekt",fi:"Projektit",no:"Prosjekter",de:"Projekte",es:"Proyectos",fr:"Projets",pt:"Projetos",tr:"Projeler",gr:"Έργα",ru:"Проекты",cn:"项目",my:"Projek",th:"โครงการ",ae:"مشاريع",il:"פרויקטים",in:"परियोजनाओं"},"/links":{us:"Links",se:"Länkar",fi:"Linkit",no:"Lenker",de:"Links",es:"Enlaces",fr:"Liens",pt:"Links",tr:"Bağlantılar",gr:"Σύνδεσμοι",ru:"Ссылки",cn:"链接",my:"Pautan",th:"ลิงค์",ae:"روابط",il:"קישורים",in:"लिंक"},"/about":{us:"About",se:"Om mig",fi:"Minusta",no:"Om meg",de:"Über mich",es:"Sobre mí",fr:"À propos de moi",pt:"Sobre mim",tr:"Hakkımda",gr:"Σχετικά με εμένα",ru:"Обо мне",cn:"关于我",my:"Tentang saya",th:"เกี่ยวกับฉัน",ae:"حولي",il:"עלי",in:"के बारे में"},"/contact":{us:"Contact",se:"Kontakt",fi:"Yhteystiedot",no:"Kontakt",de:"Kontakt",es:"Contacto",fr:"Contact",pt:"Contato",tr:"İletişim",gr:"Επικοινωνία",ru:"Контакт",cn:"联系",my:"Hubungi",th:"ติดต่อ",ae:"اتصل",il:"צור קשר",in:"संपर्क"}};function Ee(s){let e,n,t,u,g=U[s[0]]+"",o,c,i,r,l,a,f,v,O,b;return{c(){e=m("nav"),n=m("div"),t=m("a"),u=m("b"),o=E(g),i=D(),r=m("div"),l=m("img"),f=E("  "),v=E(s[0]),this.h()},l(M){e=p(M,"NAV",{class:!0});var $=k(e);n=p($,"DIV",{role:!0,tabindex:!0,class:!0});var te=k(n);t=p(te,"A",{href:!0,class:!0});var ne=k(t);u=p(ne,"B",{});var ae=k(u);o=H(ae,g),ae.forEach(d),ne.forEach(d),te.forEach(d),i=S($),r=p($,"DIV",{role:!0,tabindex:!0,class:!0});var q=k(r);l=p(q,"IMG",{src:!0,alt:!0,class:!0}),f=H(q,"  "),v=H(q,s[0]),q.forEach(d),$.forEach(d),this.h()},h(){h(t,"href",c="/?lang="+s[0]),h(t,"class","svelte-1jv59ot"),h(n,"role","button"),h(n,"tabindex","0"),h(n,"class","svelte-1jv59ot"),Q(l.src,a="/flags/"+s[0]+".png")||h(l,"src",a),h(l,"alt",""),h(l,"class","svelte-1jv59ot"),h(r,"role","button"),h(r,"tabindex","0"),h(r,"class","svelte-1jv59ot"),h(e,"class","header-left svelte-1jv59ot")},m(M,$){L(M,e,$),_(e,n),_(n,t),_(t,u),_(u,o),_(e,i),_(e,r),_(r,l),_(r,f),_(r,v),O||(b=[y(n,"click",ee),y(n,"keydown",I),y(r,"click",s[1]),y(r,"keydown",I)],O=!0)},p(M,[$]){$&1&&g!==(g=U[M[0]]+"")&&B(o,g),$&1&&c!==(c="/?lang="+M[0])&&h(t,"href",c),$&1&&!Q(l.src,a="/flags/"+M[0]+".png")&&h(l,"src",a),$&1&&B(v,M[0])},i:j,o:j,d(M){M&&d(e),O=!1,N(b)}}}function He(s,e,n){let{language:t}=e;const u=Z();function g(){u("toggleLanguageMenu")}return s.$$set=o=>{"language"in o&&n(0,t=o.language)},[t,g]}class we extends T{constructor(e){super(),V(this,e,He,Ee,P,{language:0})}}function ue(s,e,n){const t=s.slice();return t[3]=e[n][0],t[4]=e[n][1],t}function ge(s){let e,n,t=s[4][s[0]]+"",u,g,o,c;return{c(){e=m("div"),n=m("a"),u=E(t),this.h()},l(i){e=p(i,"DIV",{class:!0,role:!0,tabindex:!0});var r=k(e);n=p(r,"A",{href:!0,class:!0});var l=k(n);u=H(l,t),l.forEach(d),r.forEach(d),this.h()},h(){h(n,"href",g=s[3]+"?lang="+s[0]),h(n,"class","svelte-1g6w4ka"),h(e,"class","header-right-large svelte-1g6w4ka"),h(e,"role","button"),h(e,"tabindex","0")},m(i,r){L(i,e,r),_(e,n),_(n,u),o||(c=[y(e,"click",ee),y(e,"keydown",I)],o=!0)},p(i,r){r&1&&t!==(t=i[4][i[0]]+"")&&B(u,t),r&1&&g!==(g=i[3]+"?lang="+i[0])&&h(n,"href",g)},d(i){i&&d(e),o=!1,N(c)}}}function Ce(s){let e,n,t,u='<i class="hamburger fa-solid fa-bars svelte-1g6w4ka"></i>',g,o,c=F(Object.entries(ie)),i=[];for(let r=0;r<c.length;r+=1)i[r]=ge(ue(s,c,r));return{c(){e=m("nav");for(let r=0;r<i.length;r+=1)i[r].c();n=D(),t=m("div"),t.innerHTML=u,this.h()},l(r){e=p(r,"NAV",{class:!0});var l=k(e);for(let a=0;a<i.length;a+=1)i[a].l(l);n=S(l),t=p(l,"DIV",{role:!0,tabindex:!0,class:!0,"data-svelte-h":!0}),X(t)!=="svelte-73q6ov"&&(t.innerHTML=u),l.forEach(d),this.h()},h(){h(t,"role","button"),h(t,"tabindex","0"),h(t,"class","svelte-1g6w4ka"),h(e,"class","header-right svelte-1g6w4ka")},m(r,l){L(r,e,l);for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(e,null);_(e,n),_(e,t),g||(o=[y(t,"click",s[1]),y(t,"keydown",I)],g=!0)},p(r,[l]){if(l&1){c=F(Object.entries(ie));let a;for(a=0;a<c.length;a+=1){const f=ue(r,c,a);i[a]?i[a].p(f,l):(i[a]=ge(f),i[a].c(),i[a].m(e,n))}for(;a<i.length;a+=1)i[a].d(1);i.length=c.length}},i:j,o:j,d(r){r&&d(e),x(i,r),g=!1,N(o)}}}function De(s,e,n){let{language:t}=e;const u=Z();function g(){u("toggleSlideMenu")}return s.$$set=o=>{"language"in o&&n(0,t=o.language)},[t,g]}class Se extends T{constructor(e){super(),V(this,e,De,Ce,P,{language:0})}}function ce(s,e,n){const t=s.slice();return t[4]=e[n][0],t[5]=e[n][1],t}function fe(s){let e,n,t,u,g=s[5]+"",o,c,i;function r(){return s[2](s[4])}return{c(){e=m("div"),n=m("img"),u=E("  "),o=E(g),this.h()},l(l){e=p(l,"DIV",{class:!0,role:!0,tabindex:!0});var a=k(e);n=p(a,"IMG",{src:!0,alt:!0,class:!0}),u=H(a,"  "),o=H(a,g),a.forEach(d),this.h()},h(){Q(n.src,t="/flags/"+s[4]+".png")||h(n,"src",t),h(n,"alt",W[s[4]]),h(n,"class","svelte-1pnshuu"),h(e,"class","language-menu-item svelte-1pnshuu"),h(e,"role","button"),h(e,"tabindex","0")},m(l,a){L(l,e,a),_(e,n),_(e,u),_(e,o),c||(i=[y(e,"click",r),y(e,"keydown",I)],c=!0)},p(l,a){s=l},d(l){l&&d(e),c=!1,N(i)}}}function Ie(s){let e,n=F(Object.entries(W)),t=[];for(let u=0;u<n.length;u+=1)t[u]=fe(ce(s,n,u));return{c(){e=m("div");for(let u=0;u<t.length;u+=1)t[u].c();this.h()},l(u){e=p(u,"DIV",{class:!0});var g=k(e);for(let o=0;o<t.length;o+=1)t[o].l(g);g.forEach(d),this.h()},h(){h(e,"class","language-menu svelte-1pnshuu"),Y(e,"open",s[0])},m(u,g){L(u,e,g);for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(e,null)},p(u,[g]){if(g&2){n=F(Object.entries(W));let o;for(o=0;o<n.length;o+=1){const c=ce(u,n,o);t[o]?t[o].p(c,g):(t[o]=fe(c),t[o].c(),t[o].m(e,null))}for(;o<t.length;o+=1)t[o].d(1);t.length=n.length}g&1&&Y(e,"open",u[0])},i:j,o:j,d(u){u&&d(e),x(t,u)}}}function Pe(s,e,n){let{languageMenuOpen:t=!1}=e;const u=Z();function g(c){u("setLanguage",c)}const o=c=>g(c);return s.$$set=c=>{"languageMenuOpen"in c&&n(0,t=c.languageMenuOpen)},[t,g,o]}class Te extends T{constructor(e){super(),V(this,e,Pe,Ie,P,{languageMenuOpen:0})}}function he(s,e,n){const t=s.slice();return t[4]=e[n][0],t[5]=e[n][1],t}function de(s){let e,n,t=s[5][s[0]]+"",u,g,o,c;return{c(){e=m("div"),n=m("a"),u=E(t),this.h()},l(i){e=p(i,"DIV",{class:!0,role:!0,tabindex:!0});var r=k(e);n=p(r,"A",{href:!0,class:!0});var l=k(n);u=H(l,t),l.forEach(d),r.forEach(d),this.h()},h(){h(n,"href",g=s[4]+"?lang="+s[0]),h(n,"class","svelte-azjug6"),h(e,"class","slide-menu-item svelte-azjug6"),h(e,"role","button"),h(e,"tabindex","0")},m(i,r){L(i,e,r),_(e,n),_(n,u),o||(c=[y(e,"click",ee),y(e,"keydown",I)],o=!0)},p(i,r){r&1&&t!==(t=i[5][i[0]]+"")&&B(u,t),r&1&&g!==(g=i[4]+"?lang="+i[0])&&h(n,"href",g)},d(i){i&&d(e),o=!1,N(c)}}}function Ve(s){let e,n,t,u='<i class="fa-solid fa-globe svelte-azjug6"></i> <i class="fa-regular fa-flag svelte-azjug6"></i>',g,o,c,i=F(Object.entries(oe)),r=[];for(let l=0;l<i.length;l+=1)r[l]=de(he(s,i,l));return{c(){e=m("div"),n=m("center"),t=m("div"),t.innerHTML=u,g=D();for(let l=0;l<r.length;l+=1)r[l].c();this.h()},l(l){e=p(l,"DIV",{class:!0});var a=k(e);n=p(a,"CENTER",{});var f=k(n);t=p(f,"DIV",{class:!0,role:!0,tabindex:!0,"data-svelte-h":!0}),X(t)!=="svelte-sxzg83"&&(t.innerHTML=u),g=S(f);for(let v=0;v<r.length;v+=1)r[v].l(f);f.forEach(d),a.forEach(d),this.h()},h(){h(t,"class","slide-menu-item svelte-azjug6"),h(t,"role","button"),h(t,"tabindex","0"),h(e,"class","slide-menu svelte-azjug6"),Y(e,"open",s[1])},m(l,a){L(l,e,a),_(e,n),_(n,t),_(n,g);for(let f=0;f<r.length;f+=1)r[f]&&r[f].m(n,null);o||(c=[y(t,"click",s[2]),y(t,"keydown",I)],o=!0)},p(l,[a]){if(a&1){i=F(Object.entries(oe));let f;for(f=0;f<i.length;f+=1){const v=he(l,i,f);r[f]?r[f].p(v,a):(r[f]=de(v),r[f].c(),r[f].m(n,null))}for(;f<r.length;f+=1)r[f].d(1);r.length=i.length}a&2&&Y(e,"open",l[1])},i:j,o:j,d(l){l&&d(e),x(r,l),o=!1,N(c)}}}function Ae(s,e,n){let{language:t="us"}=e,{slideMenuOpen:u=!1}=e;const g=Z();function o(){g("toggleLanguageMenu")}return s.$$set=c=>{"language"in c&&n(0,t=c.language),"slideMenuOpen"in c&&n(1,u=c.slideMenuOpen)},[t,u,o]}class ze extends T{constructor(e){super(),V(this,e,Ae,Ve,P,{language:0,slideMenuOpen:1})}}function Ke(s){let e,n,t,u,g,o,c,i,r,l;return t=new we({props:{language:s[0]}}),t.$on("toggleLanguageMenu",s[3]),g=new Se({props:{language:s[0]}}),g.$on("toggleSlideMenu",s[4]),c=new Te({props:{languageMenuOpen:s[1]}}),c.$on("setLanguage",s[5]),r=new ze({props:{language:s[0],slideMenuOpen:s[2]}}),r.$on("toggleLanguageMenu",s[6]),{c(){e=m("main"),n=m("header"),A(t.$$.fragment),u=D(),A(g.$$.fragment),o=D(),A(c.$$.fragment),i=D(),A(r.$$.fragment),this.h()},l(a){e=p(a,"MAIN",{});var f=k(e);n=p(f,"HEADER",{class:!0});var v=k(n);z(t.$$.fragment,v),u=S(v),z(g.$$.fragment,v),v.forEach(d),o=S(f),z(c.$$.fragment,f),i=S(f),z(r.$$.fragment,f),f.forEach(d),this.h()},h(){h(n,"class","svelte-1j8wys9")},m(a,f){L(a,e,f),_(e,n),K(t,n,null),_(n,u),K(g,n,null),_(e,o),K(c,e,null),_(e,i),K(r,e,null),l=!0},p(a,[f]){const v={};f&1&&(v.language=a[0]),t.$set(v);const O={};f&1&&(O.language=a[0]),g.$set(O);const b={};f&2&&(b.languageMenuOpen=a[1]),c.$set(b);const M={};f&1&&(M.language=a[0]),f&4&&(M.slideMenuOpen=a[2]),r.$set(M)},i(a){l||(w(t.$$.fragment,a),w(g.$$.fragment,a),w(c.$$.fragment,a),w(r.$$.fragment,a),l=!0)},o(a){C(t.$$.fragment,a),C(g.$$.fragment,a),C(c.$$.fragment,a),C(r.$$.fragment,a),l=!1},d(a){a&&d(e),R(t),R(g),R(c),R(r)}}}function Re(s,e,n){let{language:t}=e,{languageMenuOpen:u=!1}=e,{slideMenuOpen:g=!1}=e;function o(l){G.call(this,s,l)}function c(l){G.call(this,s,l)}function i(l){G.call(this,s,l)}function r(l){G.call(this,s,l)}return s.$$set=l=>{"language"in l&&n(0,t=l.language),"languageMenuOpen"in l&&n(1,u=l.languageMenuOpen),"slideMenuOpen"in l&&n(2,g=l.slideMenuOpen)},[t,u,g,o,c,i,r]}class Fe extends T{constructor(e){super(),V(this,e,Re,Ke,P,{language:0,languageMenuOpen:1,slideMenuOpen:2})}}function Ne(s){let e,n,t=new Date().getFullYear()+"",u,g,o,c=U[s[0]]+"",i;return{c(){e=m("footer"),n=E("Copyright © "),u=E(t),g=D(),o=m("b"),i=E(c),this.h()},l(r){e=p(r,"FOOTER",{class:!0});var l=k(e);n=H(l,"Copyright © "),u=H(l,t),g=S(l),o=p(l,"B",{});var a=k(o);i=H(a,c),a.forEach(d),l.forEach(d),this.h()},h(){h(e,"class","svelte-1jx2q29")},m(r,l){L(r,e,l),_(e,n),_(e,u),_(e,g),_(e,o),_(o,i)},p(r,[l]){l&1&&c!==(c=U[r[0]]+"")&&B(i,c)},i:j,o:j,d(r){r&&d(e)}}}function Be(s,e,n){let{language:t="us"}=e;return s.$$set=u=>{"language"in u&&n(0,t=u.language)},[t]}class qe extends T{constructor(e){super(),V(this,e,Be,Ne,P,{language:0})}}const Ge=s=>({language:s&1}),_e=s=>({language:s[0]});function Ye(s){let e,n="Loading...";return{c(){e=m("div"),e.textContent=n,this.h()},l(t){e=p(t,"DIV",{class:!0,"data-svelte-h":!0}),X(e)!=="svelte-1cctg4u"&&(e.textContent=n),this.h()},h(){h(e,"class","page__loading svelte-1tencvj")},m(t,u){L(t,e,u)},p:j,i:j,o:j,d(t){t&&d(e)}}}function Ue(s){let e,n,t,u,g,o;const c=[s[2]];let i={};for(let a=0;a<c.length;a+=1)i=ve(i,c[a]);e=new Fe({props:i}),e.$on("toggleLanguageMenu",s[3]),e.$on("toggleSlideMenu",s[4]),e.$on("setLanguage",s[5]);const r=s[10].default,l=ke(r,s,s[9],_e);return g=new qe({props:{language:s[0]}}),{c(){A(e.$$.fragment),n=D(),t=m("div"),l&&l.c(),u=D(),A(g.$$.fragment),this.h()},l(a){z(e.$$.fragment,a),n=S(a),t=p(a,"DIV",{class:!0});var f=k(t);l&&l.l(f),f.forEach(d),u=S(a),z(g.$$.fragment,a),this.h()},h(){h(t,"class","content-wrap svelte-1tencvj")},m(a,f){K(e,a,f),L(a,n,f),L(a,t,f),l&&l.m(t,null),L(a,u,f),K(g,a,f),o=!0},p(a,f){const v=f&4?Oe(c,[$e(a[2])]):{};e.$set(v),l&&l.p&&(!o||f&513)&&be(l,r,a,a[9],o?ye(r,a[9],f,Ge):Me(a[9]),_e);const O={};f&1&&(O.language=a[0]),g.$set(O)},i(a){o||(w(e.$$.fragment,a),w(l,a),w(g.$$.fragment,a),o=!0)},o(a){C(e.$$.fragment,a),C(l,a),C(g.$$.fragment,a),o=!1},d(a){a&&(d(n),d(t),d(u)),R(e,a),l&&l.d(a),R(g,a)}}}function Ze(s){let e,n,t,u;const g=[Ue,Ye],o=[];function c(i,r){return i[1]?0:1}return e=c(s),n=o[e]=g[e](s),{c(){n.c(),t=le()},l(i){n.l(i),t=le()},m(i,r){o[e].m(i,r),L(i,t,r),u=!0},p(i,[r]){let l=e;e=c(i),e===l?o[e].p(i,r):(je(),C(o[l],1,1,()=>{o[l]=null}),Le(),n=o[e],n?n.p(i,r):(n=o[e]=g[e](i),n.c()),w(n,1),n.m(t.parentNode,t))},i(i){u||(w(n),u=!0)},o(i){C(n),u=!1},d(i){i&&d(t),o[e].d(i)}}}function Je(s,e,n){let t,u,g;me(s,J,b=>n(11,g=b));let{$$slots:o={},$$scope:c}=e,i=!1,r=!1,l=!1,a=null;typeof window<"u"&&(a=new URLSearchParams(location.search).get("lang")||g||se("language")||"us",g!==a&&J.set(a),se("language")!==a&&re("language",a,30),document.body.classList.toggle("no-scroll",l||r));function f(){n(7,l=!1),n(6,r=!r)}function v(){n(6,r=!1),n(7,l=!l),console.log("toggleSlideMenu",l)}function O(b){n(0,t=b.detail),J.set(b.detail),re("language",b.detail,30),n(6,r=!1)}return pe(()=>{n(1,i=!0)}),s.$$set=b=>{"$$scope"in b&&n(9,c=b.$$scope)},s.$$.update=()=>{s.$$.dirty&256&&n(0,t=a||"us"),s.$$.dirty&193&&n(2,u={language:t,languageMenuOpen:r,slideMenuOpen:l})},[t,i,u,f,v,O,r,l,a,c,o]}class et extends T{constructor(e){super(),V(this,e,Je,Ze,P,{})}}export{et as component};