import { c as create_ssr_component, a as subscribe, e as escape } from './ssr-D_VSFOBM.js';
import { g as getCookie, s as storeLanguage } from './stores-y3q_sMZ9.js';
import './index2-ChKc9uJW.js';

const welcome = {
  "us": "Welcome",
  "se": "Välkommen",
  "fi": "Tervetuloa",
  "no": "Velkommen",
  "dk": "Velkommen",
  "is": "Velkomin",
  "de": "Willkommen",
  "es": "Bienvenido",
  "fr": "Bienvenue",
  "pt": "Bem-vinda",
  "tr": "Hoşgeldiniz",
  "gr": "Καλώς ορίσατε",
  "ru": "Добро пожаловать",
  "cn": "欢迎",
  "my": "Selamat datang",
  "vn": "Chào mừng",
  "th": "ยินดีต้อนรับ",
  "il": "ברוך הבא",
  "ae": "أهلا بك",
  "in": "स्वागत हे"
};
const index_text = {
  "us": "Hello! You are probably some curious recruiting specialist?<br><br>On this website I have published my CV and some other details. This page is under constant change, so please come back every now and then to check for updates.</p>Thanks for visiting,<br>Mikael",
  "se": "Hej! Du är antagligen någon nyfiken rekryterare?<br><br>På denna webbplats har jag publicerat mitt CV och några andra detaljer. Denna sida är under ständig förändring, så kom tillbaka då och då för att kolla efter uppdateringar.</p>Tack för besöket,<br>Mikael",
  "fi": "Hei! Olet varmaan joku utelias rekrytoija?<br><br>Tällä verkkosivustolla olen julkaissut ansioluetteloni ja joitain muita yksityiskohtia. Tämä sivu on jatkuvassa muutoksessa, joten palaa aika ajoin tarkistaaksesi päivitykset.</p>Kiitos vierailusta,<br>Mikael",
  "no": "Hei! Du er sannsynligvis en nysgjerrig rekrutterer?<br><br>På dette nettstedet har jeg publisert CV-en min og noen andre detaljer. Denne siden er under konstant endring, så kom tilbake nå og da for å sjekke etter oppdateringer.</p>Takk for besøket,<br>Mikael",
  "dk": "Hej! Du er sandsynligvis en nysgerrig rekrutteringskonsulent?<br><br>På dette websted har jeg offentliggjort mit CV og nogle andre detaljer. Denne side er under konstant ændring, så kom tilbage nu og da for at kontrollere opdateringer.</p>Tak for dit besøg,<br>Mikael",
  "is": "Halló! Þú ert líklega forvitinn starfsmaður?<br><br>Á þessari vefsíðu hef ég birt ferilskrána mína og nokkrar aðrar upplýsingar. Þessi síða er í stöðugri breytingu, svo komið aftur á meðan til að athuga uppfærslur.</p>Takk fyrir heimsóknina,<br>Mikael",
  "de": "Hallo! Du bist wahrscheinlich ein neugieriger Recruiter?<br><br>Auf dieser Website habe ich meinen Lebenslauf und einige andere Details veröffentlicht. Diese Seite befindet sich in ständigem Wandel, also kommen Sie immer wieder vorbei, um nach Updates zu suchen.</p>Danke für deinen Besuch,<br>Mikael",
  "es": "¡Hola! Probablemente seas un reclutador curioso?<br><br>En este sitio web he publicado mi CV y algunos otros detalles. Esta página está en constante cambio, así que vuelve de vez en cuando para ver si hay actualizaciones.</p>Gracias por visitar,<br>Mikael",
  "fr": "Bonjour! Vous êtes probablement un recruteur curieux?<br><br>Sur ce site, j'ai publié mon CV et quelques autres détails. Cette page est en constante évolution, alors revenez de temps en temps pour vérifier les mises à jour.</p>Merci pour votre visite,<br>Mikael",
  "pt": "Olá! Você provavelmente é um recrutador curioso?<br><br>Neste site, publiquei meu currículo e alguns outros detalhes. Esta página está em constante mudança, então volte de vez em quando para verificar as atualizações.</p>Obrigado pela visita,<br>Mikael",
  "tr": "Merhaba! Muhtemelen meraklı bir işe alım uzmanısınız?<br><br>Bu web sitesinde CV'mi ve bazı diğer ayrıntıları yayınladım. Bu sayfa sürekli değişiyor, bu yüzden güncellemeler için ara sıra geri gelin.</p>Ziyaretiniz için teşekkürler,<br>Mikael",
  "gr": "Γεια! Πιθανώς είστε κάποιος περίεργος ειδικός στην πρόσληψη;<br><br>Σε αυτήν την ιστοσελίδα έχω δημοσιεύσει το βιογραφικό μου σημείωμα και μερικές άλλες λεπτομέρειες. Αυτή η σελίδα βρίσκεται σε συνεχή αλλαγή, επομένως επιστρέψτε κάθε τόσο για να ελέγξετε τις ενημερώσεις.</p>Ευχαριστώ για την επίσκεψη,<br>Mikael",
  "ru": "Привет! Вы, вероятно, какой-то любопытный специалист по подбору персонала?<br><br>На этом сайте я опубликовал свое резюме и некоторые другие детали. Эта страница постоянно меняется, поэтому загляните время от времени, чтобы проверить обновления.</p>Спасибо за посещение,<br>Микаэль",
  "cn": "你好！ 你可能是一些好奇的招聘专家？<br><br>在这个网站上，我发布了我的简历和一些其他细节。 这个页面在不断变化，所以请不时回来检查更新。</p>感谢您的光临，<br>米卡埃尔",
  "my": "Hai! Anda mungkin seorang pakar pengambilan kerja yang ingin tahu?<br><br>Di laman web ini, saya telah menerbitkan CV saya dan beberapa butiran lain. Laman ini berubah dengan kerap, jadi sila kembali dari semasa ke semasa untuk memeriksa kemas kini.</p>Terima kasih kerana mengunjungi,<br>Mikael",
  "vn": "Xin chào! Có lẽ bạn là một chuyên gia tuyển dụng tò mò?<br><br>Trên trang web này, tôi đã đăng CV của mình và một số thông tin khác. Trang này liên tục được cập nhật, vì vậy hãy quay lại thường xuyên để kiểm tra các thay đổi.</p>Cảm ơn bạn đã ghé thăm,<br>Mikael",
  "th": "สวัสดี! คุณอาจเป็นผู้เชี่ยวชาญด้านการรับสมัครงานที่อยากรู้?<br><br>ในเว็บไซต์นี้ฉันได้เผยแพร่ประวัติศาสตร์ของฉันและรายละเอียดอื่น ๆ บางอย่าง หน้านี้เปลี่ยนแปลงอย่างต่อเนื่องดังนั้นโปรดกลับมาบ่อย ๆ เพื่อตรวจสอบการอัปเดต</p>ขอบคุณสำหรับการเยี่ยมชม,<br>มิคาเอล",
  "il": "שלום! כנראה שאתה מתמחה סקרן לגיוס?<br><br>באתר זה פרסמתי את קורות החיים שלי וכמה פרטים אחרים. דף זה נמצא בשינוי קבוע, לכן חזור מדי פעם כדי לבדוק עדכונים.</p>תודה על הביקור,<br>מיקאל",
  "ae": "مرحبا! ربما كنت متخصص توظيف فضولي؟<br><br>على هذا الموقع ، قمت بنشر سيرتي الذاتية وبعض التفاصيل الأخرى. هذه الصفحة في تغيير مستمر ، لذا يرجى العودة من حين لآخر للتحقق من التحديثات.</p>شكرا لزيارتكم ،<br>ميكائيل",
  "in": "नमस्ते! आप शायद कुछ जिज्ञासु भर्ती विशेषज्ञ हैं?<br><br>इस वेबसाइट पर मैंने अपने सीवी और कुछ अन्य विवरण प्रकाशित किए हैं। यह पृष्ठ निरंतर परिवर्तन में है, इसलिए कृपया अपडेट के लिए बार-बार वापस आएं।</p>आपके आगमन के लिए धन्यवाद,<br>मिकाएल"
};
const css = {
  code: ".narrow-screen.svelte-1y77d0l.svelte-1y77d0l{display:block;margin-top:3.236rem}@media(min-width: 720px){.narrow-screen.svelte-1y77d0l.svelte-1y77d0l{display:none}}.top-welcome.svelte-1y77d0l.svelte-1y77d0l{padding:0.5rem;margin-bottom:0;text-align:center}.narrow-screen.svelte-1y77d0l img.svelte-1y77d0l{width:100%}.narrow-screen.svelte-1y77d0l p.svelte-1y77d0l{padding:0em 2rem 2rem 2rem}.squared-screen.svelte-1y77d0l.svelte-1y77d0l{display:none;margin-top:3.236rem}@media(min-width: 720px){.squared-screen.svelte-1y77d0l.svelte-1y77d0l{display:flex;flex-direction:column}}.squared-screen.svelte-1y77d0l img.svelte-1y77d0l{width:100%;height:calc(100vw - 20rem);object-fit:cover;object-position:center 28%;align-self:center;margin-top:1rem}.squared-screen.svelte-1y77d0l p.svelte-1y77d0l{padding:0 2rem 2rem 2rem}.wide-screen.svelte-1y77d0l.svelte-1y77d0l{display:none;margin-top:3.236em}@media(min-width: 1024px){.squared-screen.svelte-1y77d0l.svelte-1y77d0l{display:none}.wide-screen.svelte-1y77d0l.svelte-1y77d0l{display:flex;flex-direction:row}}.column1.svelte-1y77d0l.svelte-1y77d0l{width:40%;margin-right:2rem;;}.column2.svelte-1y77d0l.svelte-1y77d0l{width:60%;padding-right:2rem}.wide-screen.svelte-1y77d0l img.svelte-1y77d0l{width:100%;height:100%;object-fit:cover}.shadow.svelte-1y77d0l.svelte-1y77d0l{box-shadow:0.25em 0.25em 0.5em rgba(0, 0, 0, 0.5);background-color:aliceblue;margin-bottom:4em}.bling-bling.svelte-1y77d0l.svelte-1y77d0l{animation:svelte-1y77d0l-blinker 4s linear infinite}@keyframes svelte-1y77d0l-blinker{50%{opacity:70%}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let language;
  let $storeLanguage, $$unsubscribe_storeLanguage;
  $$unsubscribe_storeLanguage = subscribe(storeLanguage, (value) => $storeLanguage = value);
  $$result.css.add(css);
  language = $storeLanguage || getCookie("language") || "us";
  $$unsubscribe_storeLanguage();
  return `<main><div class="narrow-screen shadow svelte-1y77d0l"><h1 class="top-welcome bling-bling svelte-1y77d0l">${escape(welcome[language])}</h1> <img src="/img/Mikael-Helin-1024.jpg" alt="Mikael Helin" class="svelte-1y77d0l"> <p class="svelte-1y77d0l"><!-- HTML_TAG_START -->${index_text[language]}<!-- HTML_TAG_END --></p></div> <div class="squared-screen shadow svelte-1y77d0l"><h1 class="top-welcome bling-bling svelte-1y77d0l">${escape(welcome[language])}</h1> <img src="/img/Mikael-Helin-1024.jpg" alt="Mikael Helin" class="svelte-1y77d0l"> <p class="svelte-1y77d0l"><!-- HTML_TAG_START -->${index_text[language]}<!-- HTML_TAG_END --></p></div> <div class="wide-screen shadow svelte-1y77d0l"><div class="column1 svelte-1y77d0l" data-svelte-h="svelte-przflc"><img src="/img/Mikael-Helin-1024.jpg" alt="Mikael Helin" class="svelte-1y77d0l"></div> <div class="column2 svelte-1y77d0l"><h1 class="bling-bling svelte-1y77d0l">${escape(welcome[language])}</h1> <p><!-- HTML_TAG_START -->${index_text[language]}<!-- HTML_TAG_END --></p></div></div> </main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-D1NGEN-N.js.map
