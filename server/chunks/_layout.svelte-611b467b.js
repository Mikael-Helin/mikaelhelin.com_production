import { c as create_ssr_component, a as subscribe } from './ssr-7e1a9690.js';
import { g as getCookie, s as storeLanguage, a as setCookie } from './stores-6e74dc26.js';
import './index2-24675154.js';

const css = {
  code: '.content-wrap.svelte-1tencvj{flex-grow:1;margin-top:0.4em;padding:3.236rem 2rem 0 2rem;min-height:calc(100vh - 7.2rem)}.content-wrap.svelte-1tencvj:after{content:"";display:block;clear:both}.page__loading.svelte-1tencvj{position:fixed;top:0;left:0;width:100%;height:100%;background:var(--bg-2);color:var(--font-2);z-index:9999;display:flex;align-items:center;justify-content:center}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $storeLanguage, $$unsubscribe_storeLanguage;
  $$unsubscribe_storeLanguage = subscribe(storeLanguage, (value) => $storeLanguage = value);
  let languageMenuOpen = false;
  let tempLanguage = null;
  if (typeof window !== "undefined") {
    const urlParams = new URLSearchParams(location.search);
    tempLanguage = urlParams.get("lang") || $storeLanguage || getCookie("language") || "us";
    if ($storeLanguage !== tempLanguage) {
      storeLanguage.set(tempLanguage);
    }
    if (getCookie("language") !== tempLanguage) {
      setCookie("language", tempLanguage, 30);
    }
    document.body.classList.toggle("no-scroll", languageMenuOpen);
  }
  $$result.css.add(css);
  $$unsubscribe_storeLanguage();
  return `${`<div class="page__loading svelte-1tencvj" data-svelte-h="svelte-1cctg4u">Loading...</div>`}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-611b467b.js.map
