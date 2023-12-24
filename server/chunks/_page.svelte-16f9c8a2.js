import { c as create_ssr_component, a as subscribe, e as escape, d as add_attribute } from './ssr-7e1a9690.js';
import { g as getCookie, s as storeLanguage } from './stores-6e74dc26.js';
import './index2-24675154.js';

const links_titles = {
  "us": "My only link",
  "se": "Min enda länk",
  "fi": "Ainoa linkkini",
  "no": "Min eneste lenke",
  "de": "Mein einziger Link",
  "es": "Mi único enlace",
  "fr": "Mon seul lien",
  "pt": "Meu único link",
  "tr": "Tek bağlantım",
  "gr": "Το μοναδικό μου σύνδεσμο",
  "ru": "Моя единственная ссылка",
  "cn": "我的唯一链接",
  "my": "Pautan saya sahaja",
  "th": "ลิงค์เดียวของฉัน",
  "il": "הקישור היחיד שלי",
  "ae": "رابطي الوحيد",
  "in": "मेरा एकमात्र लिंक"
};
const links_descriptions = {
  "us": "I do not really yet know where to link, but you can examine my Master's thesis.",
  "se": "Jag vet inte vart jag ska länka, men du kan ta en titt på mitt examensarbete.",
  "fi": "En tiedä vielä minne linkittää, mutta voit tutustua diplomityöhöni",
  "no": "Jeg vet ikke hvor jeg skal linke, men du kan ta en titt på oppgaven min.",
  "de": "Ich weiß noch nicht, wohin ich verlinken soll, aber Sie können sich meine Masterarbeit ansehen.",
  "es": "No sé a dónde enlazar, pero puedes examinar mi tesis de maestría.",
  "fr": "Je ne sais pas encore où faire un lien, mais vous pouvez examiner ma thèse de maîtrise.",
  "pt": "Ainda não sei onde fazer um link, mas você pode examinar minha tese de mestrado.",
  "tr": "Henüz nereye bağlantı vereceğimi bilmiyorum, ancak yüksek lisans tezime göz atabilirsiniz.",
  "gr": "Δεν ξέρω πού να συνδέσω, αλλά μπορείτε να εξετάσετε τη διατριβή μου.",
  "ru": "Я еще не знаю, куда ссылаться, но вы можете изучить мою магистерскую диссертацию.",
  "cn": "我还不知道要链接到哪里，但您可以查看我的硕士论文。",
  "my": "Saya tidak tahu di mana untuk menghubungkan, tetapi anda boleh mengkaji tesis Master saya.",
  "th": "ฉันไม่รู้ว่าจะลิงก์ไปที่ไหน แต่คุณสามารถตรวจสอบวิทยานิพนธ์ของฉันได้",
  "il": "אני לא יודע איפה לקשר, אבל אתה יכול לבדוק את עבודת הגמר שלי.",
  "ae": "لا أعرف حقًا أين أربط ، ولكن يمكنك فحص أطروحة الماجستير.",
  "in": "मुझे वास्तव में अभी तक नहीं पता कि कहां लिंक करना है, लेकिन आप मेरे स्नातकोत्तर थीसिस की जांच कर सकते हैं।"
};
const links = "https://kth.diva-portal.org/smash/get/diva2:624555/FULLTEXT03.pdf";
const css = {
  code: ".card.svelte-151siq5{margin-top:3.236rem;padding:0.5rem 2rem 4rem 2rem;border-radius:2px;box-shadow:0.25em 0.25em 0.5em rgba(0, 0, 0, 0.5);background-color:aliceblue;margin-bottom:3.236rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let language;
  let $storeLanguage, $$unsubscribe_storeLanguage;
  $$unsubscribe_storeLanguage = subscribe(storeLanguage, (value) => $storeLanguage = value);
  $$result.css.add(css);
  language = $storeLanguage || getCookie("language") || "us";
  $$unsubscribe_storeLanguage();
  return `<main><div class="card svelte-151siq5"><h3>${escape(links_titles[language])}</h3> <p>${escape(links_descriptions[language])}</p> <a${add_attribute("href", links, 0)}>${escape(links)}</a></div> </main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-16f9c8a2.js.map
