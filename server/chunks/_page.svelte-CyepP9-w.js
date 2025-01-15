import { c as create_ssr_component, a as subscribe, e as escape, d as add_attribute } from './ssr-D_VSFOBM.js';
import { g as getCookie, s as storeLanguage } from './stores-y3q_sMZ9.js';
import './index2-ChKc9uJW.js';

const contact_title = {
  "us": "Contact",
  "se": "Kontakt",
  "fi": "Yhteystiedot",
  "no": "Kontakt",
  "dk": "Kontakt",
  "is": "Hafðu samband",
  "de": "Kontakt",
  "es": "Contacto",
  "fr": "Contact",
  "pt": "Contato",
  "tr": "İletişim",
  "gr": "Επικοινωνία",
  "ru": "контакт",
  "cn": "联系",
  "my": "Hubungi",
  "th": "ติดต่อ",
  "il": "איש קשר",
  "ae": "اتصل",
  "in": "संपर्क"
};
const contact_info = {
  "Mobile": "+46 72 212 46 23",
  "Twitter": "https://twitter.com/Mikael_Helin",
  "LinkedIn": "https://www.linkedin.com/in/mikael-helin-931a0a/",
  "ResearchGate": "https://www.researchgate.net/profile/Mikael-Helin"
};
const mobile = {
  "us": "Mobile Number",
  "se": "Mobilnummer",
  "fi": "Matkapuhelinnumero",
  "no": "Mobilnummer",
  "dk": "Mobilnummer",
  "is": "Farsímanúmer",
  "de": "Handynummer",
  "es": "Número de móvil",
  "fr": "Numéro de portable",
  "pt": "Número de celular",
  "tr": "Cep numarası",
  "gr": "Αριθμός κινητού",
  "ru": "Мобильный номер",
  "cn": "手机号码",
  "my": "Nombor telefon bimbit",
  "th": "หมายเลขโทรศัพท์มือถือ",
  "il": "מספר נייד",
  "ae": "رقم الجوال",
  "in": "मोबाइल नंबर"
};
const css = {
  code: ".card.svelte-9se72v{margin-top:3.236rem;padding:0.5rem 2rem 4rem 2rem;border-radius:2px;box-shadow:0.25em 0.25em 0.5em rgba(0, 0, 0, 0.5);background-color:aliceblue;margin-bottom:3.236rem}.two-column.svelte-9se72v{display:flex;flex-direction:row;justify-content:space-between}.w62.svelte-9se72v{width:62%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let language;
  let $storeLanguage, $$unsubscribe_storeLanguage;
  $$unsubscribe_storeLanguage = subscribe(storeLanguage, (value) => $storeLanguage = value);
  $$result.css.add(css);
  language = $storeLanguage || getCookie("language") || "us";
  $$unsubscribe_storeLanguage();
  return `<main><div class="card svelte-9se72v"><h2><center>${escape(contact_title[language])}</center></h2> <div class="two-column svelte-9se72v"><p>${escape(mobile[language])}:</p> <p class="w62 svelte-9se72v">${escape(contact_info["Mobile"])}</p></div> <div class="two-column svelte-9se72v"><p data-svelte-h="svelte-1vg567t">Twitter:</p> <a class="w62 svelte-9se72v"${add_attribute("href", contact_info["Twitter"], 0)} target="_blank"><p>${escape(contact_info["Twitter"])}</p></a></div> <div class="two-column svelte-9se72v"><p data-svelte-h="svelte-w27ueo">LinkedIn:</p> <a class="w62 svelte-9se72v"${add_attribute("href", contact_info["LinkedIn"], 0)} target="_blank"><p>${escape(contact_info["LinkedIn"])}</p></a></div> <div class="two-column svelte-9se72v"><p data-svelte-h="svelte-131uzls">ResearchGate:</p> <p class="w62 svelte-9se72v"><a${add_attribute("href", contact_info["ResearchGate"], 0)} target="_blank">${escape(contact_info["ResearchGate"])}</a></p></div></div> </main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CyepP9-w.js.map
