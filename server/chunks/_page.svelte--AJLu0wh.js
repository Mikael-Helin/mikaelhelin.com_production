import { c as create_ssr_component, a as subscribe } from './ssr-IT87nZNo.js';
import { g as getCookie, s as storeLanguage } from './stores-nw_Fd3Oo.js';
import './index2-zTFVZeQR.js';

const css = {
  code: ".card.svelte-151siq5{margin-top:3.236rem;padding:0.5rem 2rem 4rem 2rem;border-radius:2px;box-shadow:0.25em 0.25em 0.5em rgba(0, 0, 0, 0.5);background-color:aliceblue;margin-bottom:3.236rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $storeLanguage, $$unsubscribe_storeLanguage;
  $$unsubscribe_storeLanguage = subscribe(storeLanguage, (value) => $storeLanguage = value);
  $$result.css.add(css);
  $storeLanguage || getCookie("language") || "us";
  $$unsubscribe_storeLanguage();
  return `<main>${`<div class="card svelte-151siq5" data-svelte-h="svelte-rtaw9x"><h1>Privacy Policy</h1> <p>This is the default privacy policy text.<br><br>We save no data about you.<br><br>And we do not share any data with third parties.</p></div>`} </main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte--AJLu0wh.js.map
