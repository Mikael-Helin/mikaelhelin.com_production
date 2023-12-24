import { c as create_ssr_component, a as subscribe, e as escape, b as each } from './ssr-7e1a9690.js';
import { g as getCookie, s as storeLanguage } from './stores-6e74dc26.js';
import './index2-24675154.js';

const cv_last_update = "2023-12";
const introduction = {
  "us": "Born and raised in Stockholm, Sweden with roots from Finland. Already at early childhood, Science fascinated me, which ignited me to become the Computational Scientist I am today. Curios about the world, I visited over 30 countries, obtained diving certificates and explored different cultures. I hope to carry my spirit of enthusiasm into my work to and to delve into challenges to tackle.",
  "se": "Född och uppvuxen i Stockholm, Sverige med rötter från Finland. Redan i tidig ålder fascinerade mig vetenskap, vilket tände mig att bli den beräkningsvetenskapliga forskare jag är idag. Nyfiken på världen besökte jag över 30 länder, fick dykcertifikat och utforskade olika kulturer. Jag hoppas kunna föra min entusiasm till mitt arbete och fördjupa mig i utmaningar att ta itu med.",
  "fi": "Syntynyt ja kasvanut Tukholmassa, Ruotsissa, jossa on juuret Suomesta. Jo varhaislapsuudesta lähtien tiede kiehtoi minua, mikä sytytti minut tulemaan laskennalliseksi tutkijaksi. Utelias maailmasta, kävin yli 30 maassa, sain sukellustodistuksia ja tutustuin eri kulttuureihin. Toivon voivani viedä innostukseni työhöni ja syventyä haasteisiin.",
  "no": "Født og oppvokst i Stockholm, Sverige med røtter fra Finland. Allerede i tidlig barndom fascinerte vitenskapen meg, noe som tente meg til å bli den beregningsforskeren jeg er i dag. Nysgjerrig på verden, besøkte jeg over 30 land, fikk dykkesertifikater og utforsket forskjellige kulturer. Jeg håper å bære min entusiasme inn i arbeidet mitt og å fordype meg i utfordringer å takle.",
  "de": "In Stockholm, Schweden, geboren und aufgewachsen mit Wurzeln aus Finnland. Schon in jungen Jahren faszinierte mich die Wissenschaft, was mich dazu brachte, der Berechnungswissenschaftler zu werden, der ich heute bin. Neugierig auf die Welt besuchte ich über 30 Länder, erwarb Tauchzertifikate und erkundete verschiedene Kulturen. Ich hoffe, meinen Enthusiasmus in meine Arbeit einbringen zu können und mich Herausforderungen zu stellen.",
  "es": "Nacido y criado en Estocolmo, Suecia, con raíces de Finlandia. Ya en la primera infancia, la ciencia me fascinó, lo que me impulsó a convertirme en el científico computacional que soy hoy. Curioso por el mundo, visité más de 30 países, obtuve certificados de buceo y exploré diferentes culturas. Espero poder llevar mi espíritu de entusiasmo a mi trabajo y profundizar en los desafíos a los que enfrentarme.",
  "fr": "Né et élevé à Stockholm, en Suède, avec des racines de Finlande. Déjà dans ma petite enfance, la science me fascinait, ce qui m'a incité à devenir le scientifique informatique que je suis aujourd'hui. Curieux du monde, j'ai visité plus de 30 pays, obtenu des certificats de plongée et exploré différentes cultures. J'espère pouvoir apporter mon enthousiasme dans mon travail et me plonger dans les défis à relever.",
  "pt": "Nascido e criado em Estocolmo, Suécia, com raízes da Finlândia. Já na primeira infância, a Ciência me fascinou, o que me impulsionou a me tornar o Cientista Computacional que sou hoje. Curioso sobre o mundo, visitei mais de 30 países, obtive certificados de mergulho e explorei diferentes culturas. Espero levar meu espírito de entusiasmo para o meu trabalho e me aprofundar nos desafios a serem enfrentados.",
  "tr": "Stockholm, İsveç'te Finlandiya kökenli olarak doğup büyüdü. Bilim beni çocukluğumdan beri büyüledi ve bugün olduğum Hesaplamalı Bilimci olmamı sağladı. Dünyaya meraklı, 30'dan fazla ülkeyi ziyaret ettim, dalış sertifikaları aldım ve farklı kültürleri keşfettim. İşime coşku ruhumu taşımayı ve ele alınacak zorluklara dalmayı umuyorum.",
  "gr": "Γεννημένος και μεγαλωμένος στη Στοκχόλμη, Σουηδία με ρίζες από τη Φινλανδία. Ήδη από την παιδική ηλικία, η Επιστήμη με γοήτευσε, που με έκανε να γίνω ο Υπολογιστικός Επιστήμονας που είμαι σήμερα. Περίεργος για τον κόσμο, επισκέφθηκα πάνω από 30 χώρες, απέκτησα πιστοποιητικά κατάδυσης και εξερεύνησα διαφορετικούς πολιτισμούς. Ελπίζω να μεταφέρω το πνεύμα του ενθουσιασμού μου στη δουλειά μου και να εμβαθύνω στις προκλήσεις που πρέπει να αντιμετωπίσω.",
  "ru": "Родился и вырос в Стокгольме, Швеция, с корнями из Финляндии. Уже в раннем детстве наука меня очаровала, что воспламенило меня, чтобы стать вычислительным ученым, которым я являюсь сегодня. Любопытный о мире, я посетил более 30 стран, получил сертификаты по дайвингу и исследовал различные культуры. Я надеюсь, что смогу принести свой дух энтузиазма в свою работу и погрузиться в вызовы, с которыми столкнуться.",
  "cn": "出生于瑞典斯德哥尔摩，根源来自芬兰。早在童年时期，科学就让我着迷，这激发了我成为今天的计算科学家。对世界充满好奇，我访问了30多个国家，获得了潜水证书并探索了不同的文化。我希望能将我的热情带入我的工作中，并深入挑战。",
  "my": "Lahir dan dibesarkan di Stockholm, Sweden dengan akar dari Finlandia. Sejak kecil, Sains memikat saya, yang mengilhami saya untuk menjadi Ilmuwan Komputasi yang saya miliki hari ini. Penasaran dengan dunia, saya mengunjungi lebih dari 30 negara, mendapatkan sertifikat menyelam dan menjelajahi berbagai budaya. Saya berharap dapat membawa semangat antusiasme saya ke dalam pekerjaan saya dan untuk menyelami tantangan untuk ditangani.",
  "th": "เกิดและโตในสตอกโฮล์ม สวีเดน กับรากฐานจากฟินแลนด์ ตั้งแต่เด็กอายุน้อย วิทยาศาสตร์ที่ทึ่งฉัน ซึ่งเป็นแรงบันดาลใจให้ฉันเป็นนักวิทยาศาสตร์คอมพิวเตอร์ที่ฉันเป็นในปัจจุบัน อยากรู้อยากเห็นโลก ฉันเดินทางไปยังประเทศกว่า 30 ประเทศ ได้รับใบรับรองการดำน้ำและสำรวจวัฒนธรรมที่แตกต่างกัน ฉันหวังว่าจะสามารถนำจิตวิญญาณของความกระตือรือร้นของฉันเข้าสู่การทำงานและลึกซึ้งในความท้าทายที่จะต่อสู้",
  "in": "स्टॉकहोम, स्वीडन में पैदा हुआ और बढ़ा जिसकी जड़ें फ़िनलैंड से हैं। बचपन से ही विज्ञान मुझे आकर्षित करता था, जो मुझे आज जो कम्प्यूटेशनल साइंटिस्ट बनाता है। दुनिया के बारे में जिज्ञासु, मैंने 30 से अधिक देशों का दौरा किया, डाइविंग प्रमाणपत्र प्राप्त किया और विभिन्न संस्कृतियों का अन्वेषण किया। मैं अपने काम में उत्साह की भावना ले जाने और सामने आने वाली चुनौतियों में खोजने की उम्मीद करता हूं।"
};
const other_names = {
  "cv": {
    "us": "Curriculum Vitae",
    "se": "Meritförteckning",
    "fi": "Ansioluettelo",
    "no": "Merittliste",
    "de": "Lebenslauf",
    "es": "Curriculum Vitae",
    "fr": "Curriculum Vitae",
    "pt": "Curriculum Vitae",
    "tr": "Özgeçmiş",
    "gr": "Βιογραφικό Σημείωμα",
    "ru": "Резюме",
    "cn": "履历",
    "my": "Curriculum Vitae",
    "th": "ประวัติ",
    "in": "जीवन परिचय"
  },
  "contents": {
    "us": "Contents",
    "se": "Innehåll",
    "fi": "Sisältö",
    "no": "Innhold",
    "de": "Inhalt",
    "es": "Contenido",
    "fr": "Contenu",
    "pt": "Conteúdo",
    "tr": "İçindekiler",
    "gr": "Περιεχόμενα",
    "ru": "Содержание",
    "cn": "目录",
    "my": "Kandungan",
    "th": "สารบัญ",
    "ae": "विषयसूची",
    "il": "תוכן עניינים",
    "in": "सामग्री"
  },
  "introduction": {
    "us": "Introduction",
    "se": "Introduktion",
    "fi": "Johdanto",
    "no": "Introduksjon",
    "de": "Einführung",
    "es": "Introducción",
    "fr": "Introduction",
    "pt": "Introdução",
    "tr": "Giriş",
    "gr": "Εισαγωγή",
    "ru": "Введение",
    "cn": "介绍",
    "my": "Pengenalan",
    "th": "บทนำ",
    "ae": "परिचय",
    "il": "הקדמה",
    "in": "परिचय"
  },
  "personal": {
    "us": "Personal",
    "se": "Personligt",
    "fi": "Henkilökohtainen",
    "no": "Personlig",
    "de": "Persönlich",
    "es": "Personal",
    "fr": "Personnel",
    "pt": "Pessoal",
    "tr": "Kişisel",
    "gr": "Προσωπικός",
    "ru": "Личный",
    "cn": "个人",
    "my": "Peribadi",
    "th": "ส่วนตัว",
    "ae": "निजी",
    "il": "אישי",
    "in": "व्यक्तिगत"
  },
  "objectives": {
    "us": "Objectives",
    "se": "Mål",
    "fi": "Tavoitteet",
    "no": "Mål",
    "de": "Ziele",
    "es": "Objetivos",
    "fr": "Objectifs",
    "pt": "Objetivos",
    "tr": "Hedefler",
    "gr": "Στόχοι",
    "ru": "Цели",
    "cn": "目标",
    "my": "Objektif",
    "th": "เป้าหมาย",
    "ae": "लक्ष्य",
    "il": "מטרות",
    "in": "लक्ष्य"
  },
  "core skills": {
    "us": "Core Skills",
    "se": "Kärnkompetenser",
    "fi": "Ydinosaaminen",
    "no": "Kjernekompetanse",
    "de": "Kernkompetenzen",
    "es": "Habilidades principales",
    "fr": "Compétences de base",
    "pt": "Habilidades principais",
    "tr": "Temel Beceriler",
    "gr": "Βασικές δεξιότητες",
    "ru": "Основные навыки",
    "cn": "核心技能",
    "my": "Kemahiran Utama",
    "th": "ทักษะหลัก",
    "ae": "मूल कौशल",
    "il": "מיומנויות עיקריות",
    "in": "मूल कौशल"
  },
  "work experience": {
    "us": "Work Experience",
    "se": "Arbetslivserfarenhet",
    "fi": "Työkokemus",
    "no": "Arbeidserfaring",
    "de": "Berufserfahrung",
    "es": "Experiencia laboral",
    "fr": "Expérience professionnelle",
    "pt": "Experiência de trabalho",
    "tr": "İş deneyimi",
    "gr": "Εργασιακή εμπειρία",
    "ru": "Опыт работы",
    "cn": "工作经验",
    "my": "Pengalaman Kerja",
    "th": "ประสบการณ์การทำงาน",
    "ae": "कार्य अनुभव",
    "il": "ניסיון תעסוקתי",
    "in": "कार्य अनुभव"
  },
  "education": {
    "us": "Education",
    "se": "Utbildning",
    "fi": "Koulutus",
    "no": "Utdanning",
    "de": "Bildung",
    "es": "Educación",
    "fr": "Éducation",
    "pt": "Educação",
    "tr": "Eğitim",
    "gr": "Εκπαίδευση",
    "ru": "Образование",
    "cn": "教育",
    "my": "Pendidikan",
    "th": "การศึกษา",
    "ae": "शिक्षा",
    "il": "חינוך",
    "in": "शिक्षा"
  },
  "language skills": {
    "us": "Language Skills",
    "se": "Språkkunskaper",
    "fi": "Kielitaito",
    "no": "Språkkunnskap",
    "de": "Sprachkenntnisse",
    "es": "Habilidades lingüísticas",
    "fr": "Compétences linguistiques",
    "pt": "Habilidades linguísticas",
    "tr": "Dil becerileri",
    "gr": "Γλωσσικές δεξιότητες",
    "ru": "Языковые навыки",
    "cn": "语言技能",
    "my": "Kemahiran Bahasa",
    "th": "ทักษะทางภาษา",
    "ae": "भाषा कौशल",
    "il": "מיומנויות שפה",
    "in": "भाषा कौशल"
  },
  "additional skills": {
    "us": "Additional Skills",
    "se": "Ytterligare kompetens",
    "fi": "Lisätaidot",
    "no": "Tilleggsferdigheter",
    "de": "Zusätzliche Fähigkeiten",
    "es": "Habilidades adicionales",
    "fr": "Compétences supplémentaires",
    "pt": "Habilidades adicionais",
    "tr": "Ek beceriler",
    "gr": "Επιπλέον δεξιότητες",
    "ru": "Дополнительные навыки",
    "cn": "额外技能",
    "my": "Kemahiran Tambahan",
    "th": "ทักษะเพิ่มเติม",
    "ae": "अतिरिक्त कौशल",
    "il": "מיומנויות נוספות",
    "in": "अतिरिक्त कौशल"
  }
};
const objectives = {
  "us": [
    "As a dedicated computational scientist, my primary interest lies in leveraging my skills in Mathematical Modeling, Data Science, and Machine Learning. I am seeking opportunities where I can contribute and grow in domains such as:",
    [
      "Computational or Data Sciences, Mathematical Modeling and Analysis,",
      "Algorithm Development and Application Programming.",
      "Preferably in the Fin-Tech, Finance, and Banking sectors."
    ],
    "A few of my ideal work environment preferences are:",
    [
      "Developing under the Linux environment.",
      "Mixing programming languages in my work, preferably to:",
      [
        "Prototype algorithms in Matlab/R/Python.",
        "Build production-grade algorithms in CUDA/C/C++/Numba."
      ]
    ]
  ],
  "se": [
    "Som en hängiven beräkningsvetare ligger mitt huvudsakliga intresse i att utnyttja mina färdigheter inom matematisk modellering, data science och maskininlärning. Jag eftersöker möjligheter där jag kan bidra och växa inom områden som:",
    [
      "Matematisk analys, modellering och beräkning samt data science.",
      "Algoritmutveckling och applikationsprogrammering.",
      "Gärna inom sektorerna fin-tech, finans och bank."
    ],
    "Några av mina idealiska arbetsmiljöpreferenser är:",
    [
      "Utveckling under Linux-miljön.",
      "Blanda programmeringsspråk i mitt arbete, gärna för att:",
      [
        "Utveckla prototyper i Matlab/R/Python.",
        "Utveckla algoritmer för produktion i CUDA/C/C++/Numba."
      ]
    ]
  ],
  "fi": [
    "Olen omistautunut laskennallinen tiedemies, ja pääasiallinen kiinnostukseni on hyödyntää taitoja matemaattisessa mallinnuksessa, data science ja koneoppiminen. Etsin mahdollisuuksia, joissa voin kasvaa ja kehittyä alueilla, kuten:",
    [
      "Matemaattinen analyysi, mallinnus ja laskenta sekä data science.",
      "Algoritmin kehittäminen ja sovellusohjelmointi.",
      "Mielellään fin-tech, rahoitus ja pankkialoilla."
    ],
    "Jotkut ihanteellisista työympäristöasetuksistani ovat:",
    [
      "Kehittäminen Linux-ympäristössä.",
      "Ohjelmointikielten sekoittaminen työssäni, mieluiten:",
      [
        "Prototyyppien kehittäminen Matlab/R/Python.",
        "Tuotantotasoiset algoritmit CUDA/C/C++/Numba."
      ]
    ]
  ],
  "no": [
    "Som en dedikert beregningsforsker ligger min primære interesse i å utnytte mine ferdigheter innen matematisk modellering, data science og maskinlæring. Jeg søker muligheter der jeg kan bidra og vokse innen domener som:",
    [
      "Matematisk analyse, modellering og beregning samt data science.",
      "Algoritmeutvikling og applikasjonsprogrammering.",
      "Helst innen fin-tech, finans og bank."
    ],
    "Noen av mine ideelle arbeidsmiljøpreferanser er:",
    [
      "Utvikling under Linux-miljøet.",
      "Bland programmeringsspråk i arbeidet mitt, helst til:",
      [
        "Prototypalgoritmer i Matlab/R/Python.",
        "Algoritmer for produksjon i CUDA/C/C++/Numba."
      ]
    ]
  ],
  "de": [
    "Als engagierter Computational Scientist liegt mein Hauptinteresse darin, meine Fähigkeiten in mathematischer Modellierung, Data Science und maschinellem Lernen zu nutzen. Ich suche nach Möglichkeiten, in denen ich mich in Bereichen wie:",
    [
      "Mathematische Analyse, Modellierung und Berechnung sowie Data Science.",
      "Algorithmusentwicklung und Anwendungsprogrammierung.",
      "Vorzugsweise in den Bereichen Fin-Tech, Finanzen und Banken."
    ],
    "Einige meiner idealen Arbeitsumgebungseinstellungen sind:",
    [
      "Entwicklung unter der Linux-Umgebung.",
      "Programmiersprachen in meiner Arbeit mischen, vorzugsweise um:",
      [
        "Prototypalgorithmen in Matlab/R/Python zu entwickeln.",
        "Produktionsalgorithmen in CUDA/C/C++/Numba zu entwickeln."
      ]
    ]
  ],
  "es": [
    "Como científico computacional dedicado, mi interés principal radica en aprovechar mis habilidades en modelado matemático, ciencia de datos y aprendizaje automático. Estoy buscando oportunidades donde pueda contribuir y crecer en dominios como:",
    [
      "Análisis, modelado y cálculo matemático, así como ciencia de datos.",
      "Desarrollo de algoritmos y programación de aplicaciones.",
      "Preferiblemente en los sectores Fin-Tech, Finanzas y Banca."
    ],
    "Algunas de mis preferencias ideales de entorno de trabajo son:",
    [
      "Desarrollo en el entorno Linux.",
      "Mezclar lenguajes de programación en mi trabajo, preferiblemente para:",
      [
        "Prototipos de algoritmos en Matlab/R/Python.",
        "Algoritmos de producción en CUDA/C/C++/Numba."
      ]
    ]
  ],
  "fr": [
    "En tant que scientifique computationnel dévoué, mon intérêt principal réside dans l'utilisation de mes compétences en modélisation mathématique, science des données et apprentissage automatique. Je recherche des opportunités où je peux contribuer et me développer dans des domaines tels que:",
    [
      "Analyse, modélisation et calcul mathématique ainsi que science des données.",
      "Développement d'algorithmes et programmation d'applications.",
      "De préférence dans les secteurs Fin-Tech, Finance et Banque."
    ],
    "Quelques-unes de mes préférences idéales en matière d'environnement de travail sont:",
    [
      "Développement dans l'environnement Linux.",
      "Mélanger les langages de programmation dans mon travail, de préférence pour:",
      [
        "Prototypes d'algorithmes en Matlab/R/Python.",
        "Algorithmes de production en CUDA/C/C++/Numba."
      ]
    ]
  ],
  "pt": [
    "Como cientista computacional dedicado, meu interesse principal é aproveitar minhas habilidades em modelagem matemática, ciência de dados e aprendizado de máquina. Estou procurando oportunidades onde eu possa contribuir e crescer em domínios como:",
    [
      "Análise, modelagem e cálculo matemático, bem como ciência de dados.",
      "Desenvolvimento de algoritmos e programação de aplicativos.",
      "Preferencialmente nos setores Fin-Tech, Finanças e Bancos."
    ],
    "Algumas das minhas preferências ideais de ambiente de trabalho são:",
    [
      "Desenvolvendo no ambiente Linux.",
      "Misturando linguagens de programação no meu trabalho, de preferência para:",
      [
        "Protótipos de algoritmos em Matlab/R/Python.",
        "Algoritmos de produção em CUDA/C/C++/Numba."
      ]
    ]
  ],
  "tr": [
    "Dedicated computational scientist olarak, temel ilgim matematiksel modelleme, veri bilimi ve makine öğrenimindeki becerilerimi kullanmaktır. Fin-Tech, Finans ve Bankacılık gibi alanlarda katkıda bulunabileceğim ve büyüyebileceğim fırsatlar arıyorum.",
    [
      "Matematiksel analiz, modelleme ve hesaplama ile veri bilimi.",
      "Algoritma geliştirme ve uygulama programlama.",
      "Linux ortamında geliştirme."
    ],
    "İdeal çalışma ortamı tercihlerimden bazıları:",
    [
      "Linux ortamında geliştirme.",
      "Çalışmamda programlama dillerini karıştırma, tercihen:",
      [
        "Matlab/R/Python'da prototip algoritmaları geliştirme.",
        "CUDA/C/C++/Numba'da üretim algoritmaları geliştirme."
      ]
    ]
  ],
  "gr": [
    "Ως αφοσιωμένος επιστήμονας υπολογιστών, το κύριο ενδιαφέρον μου είναι να αξιοποιήσω τις δεξιότητές μου στο μαθηματικό μοντελοποίηση, την επιστήμη δεδομένων και τη μηχανική μάθηση. Ψάχνω για ευκαιρίες όπου μπορώ να συνεισφέρω και να μεγαλώσω σε τομείς όπως:",
    [
      "Μαθηματική ανάλυση, μοντελοποίηση και υπολογισμός καθώς και επιστήμη δεδομένων.",
      "Ανάπτυξη αλγορίθμων και προγραμματισμός εφαρμογών.",
      "Προτιμώτερο στους τομείς Fin-Tech, Finance και Banking."
    ],
    "Μερικές από τις ιδανικές προτιμήσεις του περιβάλλοντος εργασίας μου είναι:",
    [
      "Ανάπτυξη υπό το περιβάλλον Linux.",
      "Ανάμειξη γλωσσών προγραμματισμού στη δουλειά μου, προτιμώτερα για:",
      [
        "Πρωτότυπα αλγόριθμα σε Matlab/R/Python.",
        "Αλγόριθμοι παραγωγής σε CUDA/C/C++/Numba."
      ]
    ]
  ],
  "ru": [
    "Как преданный вычислительный ученый, мой основной интерес заключается в использовании своих навыков математического моделирования, науки о данных и машинного обучения. Я ищу возможности, где я могу внести вклад и развиваться в таких областях, как:",
    [
      "Математический анализ, моделирование и вычисление, а также наука о данных.",
      "Разработка алгоритмов и программирование приложений.",
      "Предпочтительно в секторах Fin-Tech, финансы и банковское дело."
    ],
    "Некоторые из моих идеальных настроек рабочей среды:",
    [
      "Разработка в среде Linux.",
      "Смешивание языков программирования в моей работе, предпочтительно для:",
      [
        "Прототипы алгоритмов на Matlab/R/Python.",
        "Алгоритмы производства в CUDA/C/C++/Numba."
      ]
    ]
  ],
  "cn": [
    "作为一名专注的计算科学家，我的主要兴趣在于利用我的数学建模，数据科学和机器学习技能。我正在寻找可以在以下领域做出贡献并发展的机会：",
    [
      "数学分析，建模和计算以及数据科学。",
      "算法开发和应用程序编程。",
      "最好在Fin-Tech，金融和银行业。"
    ],
    "我的一些理想工作环境偏好是：",
    [
      "在Linux环境下开发。",
      "在我的工作中混合编程语言，最好是：",
      [
        "在Matlab/R/Python中开发原型算法。",
        "在CUDA/C/C++/Numba中开发生产级算法。"
      ]
    ]
  ],
  "my": [
    "Sebagai saintis komputasi yang berdedikasi, minat utama saya terletak pada memanfaatkan kemahiran saya dalam Pemodelan Matematik, Sains Data, dan Pembelajaran Mesin. Saya mencari peluang di mana saya dapat memberi sumbangan dan berkembang dalam domain seperti:",
    [
      "Analisis, Pemodelan dan Pengiraan Matematik, serta Sains Data.",
      "Pembangunan Algoritma dan Pemrograman Aplikasi.",
      "Lebih baik dalam sektor Fin-Tech, Kewangan, dan Perbankan."
    ],
    "Beberapa keutamaan persekitaran kerja saya yang ideal adalah:",
    [
      "Pembangunan di bawah persekitaran Linux.",
      "Mencampur bahasa pengaturcaraan dalam kerja saya, lebih baik untuk:",
      [
        "Prototaip algoritma dalam Matlab/R/Python.",
        "Algoritma pengeluaran dalam CUDA/C/C++/Numba."
      ]
    ]
  ],
  "th": [
    "เป็นนักวิทยาการคำนวณที่มุ่งมั่น ความสนใจหลักของฉันอยู่ที่การใช้ทักษะของฉันในการจำลองทางคณิตศาสตร์ วิทยาการข้อมูล และการเรียนรู้ของเครื่อง ฉันกำลังมองหาโอกาสที่ฉันสามารถมีส่วนร่วมและเติบโตในโดเมนเช่น:",
    [
      "การวิเคราะห์ การจำลองและการคำนวณทางคณิตศาสตร์ และวิทยาการข้อมูล",
      "การพัฒนาอัลกอริทึมและการเขียนโปรแกรมแอปพลิเคชัน",
      "โดยเฉพาะอย่างยิ่งในภาค Fin-Tech การเงินและธนาคาร"
    ],
    "บางสิ่งที่เป็นความชอบของสภาพแวดล้อมการทำงานที่เหมาะสมของฉันคือ:",
    [
      "การพัฒนาในสภาพแวดล้อม Linux",
      "การผสมภาษาโปรแกรมในงานของฉัน โดยเฉพาะอย่างยิ่ง:",
      [
        "ต้นแบบของอัลกอริทึมใน Matlab/R/Python",
        "อัลกอริทึมการผลิตใน CUDA/C/C++/Numba"
      ]
    ]
  ],
  "ae": [
    "كعالم حاسوب مكرس ، يكمن اهتمامي الرئيسي في تسخير مهاراتي في النمذجة الرياضية وعلوم البيانات والتعلم الآلي. أسعى إلى الفرص التي يمكنني من خلالها المساهمة والنمو في المجالات مثل:",
    [
      "التحليل والنمذجة الرياضية والحساب وعلوم البيانات.",
      "تطوير الخوارزميات وبرمجة التطبيقات.",
      "يفضل في قطاعات Fin-Tech والتمويل والبنوك."
    ],
    "بعض تفضيلات بيئة العمل المثالية لدي هي:",
    [
      "التطوير في بيئة Linux.",
      "مزج لغات البرمجة في عملي ، ويفضل:",
      [
        "نماذج الخوارزميات في Matlab/R/Python.",
        "خوارزميات الإنتاج في CUDA/C/C++/Numba."
      ]
    ]
  ],
  "il": [
    "כמדען חישובי מסור, העניין העיקרי שלי הוא לנצל את הכישורים שלי במודלים מתמטיים, מדעי הנתונים ולמידת מכונה. אני מחפש הזדמנויות שבהן אוכל לתרום ולצמוח בתחומים כגון:",
    [
      "ניתוח, ייצוג וחישובים מתמטיים ומדעי הנתונים.",
      "פיתוח אלגוריתמים ותכנות יישומים.",
      "מועדף בתחומי Fin-Tech, פיננסים ובנקאות."
    ],
    "חלק מההעדפות האידיאליות של סביבת העבודה שלי הם:",
    [
      "פיתוח בסביבת Linux.",
      "מיזוג שפות תכנות בעבודה שלי, מועדף ל:",
      [
        "אלגוריתמים פרוטוטיפים ב- Matlab/R/Python.",
        "אלגוריתמים לייצור ב- CUDA/C/C++/Numba."
      ]
    ]
  ],
  "in": [
    "एक समर्पित गणनात्मक वैज्ञानिक के रूप में, मेरी प्राथमिक रुचि गणितीय मॉडलिंग, डेटा साइंस और मशीन लर्निंग में मेरी कौशल का उपयोग करने में है। मैं उन दोमेन में योगदान और विकास कर सकता हूं जहां मैं इस तरह से विकसित कर सकता हूं:",
    [
      "गणितीय विश्लेषण, मॉडलिंग और गणना और डेटा साइंस।",
      "एल्गोरिथ्म डेवलपमेंट और एप्लिकेशन प्रोग्रामिंग।",
      "प्राथमिक रूप से Fin-Tech, फाइनेंस और बैंकिंग क्षेत्रों में।"
    ],
    "मेरी कुछ आदर्श कार्य वातावरण पसंदीदा सेटिंग्स हैं:",
    [
      "लिनक्स वातावरण के तहत विकास।",
      "मेरे काम में प्रोग्रामिंग भाषाओं को मिश्रित करना, वर prefer:",
      [
        "Matlab/R/Python में प्रोटोटाइप एल्गोरिथ्म।",
        "CUDA/C/C++/Numba में उत्पादन ग्रेड एल्गोरिथ्म।"
      ]
    ]
  ]
};
const core_skills = {
  "us": [
    "As a computational scientist, my natural core skills are the following:",
    [
      "Proficient in translating real-world problems into mathematical models.",
      "Experienced in creating custom solvers from mathematical models for computational applications, and got",
      "basic understanding for operation of Debian and Red Hat Linux operating systems."
    ]
  ],
  "se": [
    "Som en beräkningsvetare, är mina naturliga kärnkompetenser följande:"["grundläggande förståelse för drift av Debian och Red Hat Linux operativsystem."]
  ],
  "fi": [
    "Laskennallisen tieteilijänä minun luontaiset ydinosaamiseni ovat seuraavat:",
    [
      "Taitava kääntämään todellisia ongelmia matemaattisiksi malleiksi.",
      "Kokenut luomaan räätälöityjä ratkaisijoita matemaattisista malleista laskennallisille sovelluksille ja",
      "perusymmärrys Debian- ja Red Hat Linux-käyttöjärjestelmien toiminnasta."
    ]
  ],
  "no": [
    "Som en beregningsvitenskapsmann er mine naturlige kjernekompetanse følgende:",
    [
      "Dyktig i å oversette virkelighetsproblemer til matematiske modeller.",
      "Erfaren i å lage tilpassede løsere fra matematiske modeller for beregningsapplikasjoner, og har",
      "grunnleggende forståelse for drift av Debian og Red Hat Linux-operativsystemer."
    ]
  ],
  "de": [
    "Als Computational Scientist sind meine natürlichen Kernkompetenzen die folgenden:",
    [
      "Kompetent in der Übersetzung realer Probleme in mathematische Modelle.",
      "Erfahren in der Erstellung benutzerdefinierter Solver aus mathematischen Modellen für rechnergestützte Anwendungen und",
      "Grundverständnis für den Betrieb von Debian- und Red Hat Linux-Betriebssystemen."
    ]
  ],
  "es": [
    "Como científico computacional, mis habilidades básicas naturales son las siguientes:",
    [
      "Competente en la traducción de problemas del mundo real a modelos matemáticos.",
      "Experimentado en la creación de solucionadores personalizados a partir de modelos matemáticos para aplicaciones computacionales y",
      "comprensión básica del funcionamiento de los sistemas operativos Linux Debian y Red Hat."
    ]
  ],
  "fr": [
    "En tant que scientifique informatique, mes compétences de base naturelles sont les suivantes:",
    [
      "Compétent dans la traduction de problèmes réels en modèles mathématiques.",
      "Expérimenté dans la création de solveurs personnalisés à partir de modèles mathématiques pour des applications informatiques et",
      "compréhension de base du fonctionnement des systèmes d'exploitation Linux Debian et Red Hat."
    ]
  ],
  "pt": [
    "Como cientista computacional, minhas habilidades básicas naturais são as seguintes:",
    [
      "Competente na tradução de problemas do mundo real em modelos matemáticos.",
      "Experiente na criação de solucionadores personalizados a partir de modelos matemáticos para aplicativos de computação e",
      "compreensão básica do funcionamento dos sistemas operacionais Debian e Red Hat Linux."
    ]
  ],
  "tr": [
    "Bir hesaplamalı bilimci olarak, doğal temel becerilerim aşağıdakilerdir:",
    [
      "Gerçek dünya problemlerini matematiksel modellere çevirme konusunda uzman.",
      "Hesaplama uygulamaları için matematiksel modellerden özel çözücüler oluşturmakta deneyimli ve",
      "Debian ve Red Hat Linux işletim sistemlerinin çalışmasını temel düzeyde anlayış."
    ]
  ],
  "gr": [
    "Ως υπολογιστικός επιστήμονας, οι φυσικές βασικές δεξιότητές μου είναι οι εξής:",
    [
      "Ειδικός στη μετάφραση πραγματικών προβλημάτων σε μαθηματικά μοντέλα.",
      "Έμπειρος στη δημιουργία προσαρμοσμένων λύτη από μαθηματικά μοντέλα για υπολογιστικές εφαρμογές και",
      "βασική κατανόηση για τη λειτουργία των λειτουργικών συστημάτων Debian και Red Hat Linux."
    ]
  ],
  "ru": [
    "Как вычислительный ученый, мои естественные основные навыки следующие:",
    [
      "Компетентен в переводе реальных проблем в математические модели.",
      "Опытный в создании настраиваемых решателей из математических моделей для вычислительных приложений и",
      "базовое понимание работы операционных систем Debian и Red Hat Linux."
    ]
  ],
  "cn": [
    "作为计算科学家，我的自然核心技能如下：",
    [
      "能够将现实世界的问题转化为数学模型。",
      "有经验从数学模型创建用于计算应用的定制求解器，并且对Debian和Red Hat Linux操作系统的运行有",
      "基本理解。"
    ]
  ],
  "my": [
    "Sebagai seorang saintis pengiraan, kemahiran asas semulajadi saya adalah seperti berikut:"["pemahaman asas untuk operasi sistem operasi Debian dan Red Hat Linux."]
  ],
  "th": [
    "เป็นนักวิทยาการคำนวณซึ่งทักษะหลักที่เกิดมาด้วยธรรมชาติของฉันคือ:",
    [
      "สามารถแปลงปัญหาในโลกจริงเป็นแบบจำลองทางคณิตศาสตร์ได้",
      "มีประสบการณ์ในการสร้างตัวแก้ปัญหาที่กำหนดเองจากแบบจำลองทางคณิตศาสตร์สำหรับแอปพลิเคชันทางคอมพิวเตอร์และ",
      "เข้าใจพื้นฐานในการทำงานของระบบปฏิบัติการ Debian และ Red Hat Linux"
    ]
  ],
  "ae": [
    "كعالم حاسوبي ، فإن مهاراتي الأساسية الطبيعية هي التالية:",
    [
      "ماهر في ترجمة المشاكل الحقيقية إلى نماذج رياضية.",
      "خبرة في إنشاء محللين مخصصين من النماذج الرياضية لتطبيقات الحوسبة ، و",
      "فهم أساسي لتشغيل أنظمة تشغيل Debian و Red Hat Linux."
    ]
  ],
  "il": [
    "כמדען חישובי, המיומנויות העיקריות הטבעיות שלי הן הבאות:",
    [
      "מיומן בתרגום בעיות מציאותיות למודלים מתמטיים.",
      "ניסיון ביצירת פתרנים מותאמים אישית ממודלים מתמטיים ליישומי חישוב, ו",
      "הבנה בסיסית של הפעלת מערכות ההפעלה Debian ו- Red Hat Linux."
    ]
  ],
  "in": [
    "एक गणनात्मक वैज्ञानिक के रूप में, मेरे प्राकृतिक मूल कौशल निम्नलिखित हैं:",
    [
      "गणितीय मॉडल में वास्तविक दुनिया की समस्याओं का अनुवाद करने में दक्ष।",
      "गणनात्मक अनुप्रयोगों के लिए गणितीय मॉडल से कस्टम सॉल्वर बनाने में अनुभवी, और",
      "डेबियन और रेड हैट लिनक्स ऑपरेटिंग सिस्टम के संचालन के लिए मूल जानकारी।"
    ]
  ]
};
const months = {
  "us": {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "Oktober",
    11: "November",
    12: "December"
  },
  "se": {
    1: "Januari",
    2: "Februari",
    3: "Mars",
    4: "April",
    5: "Maj",
    6: "Juni",
    7: "Juli",
    8: "Augusti",
    9: "September",
    10: "Oktober",
    11: "November",
    12: "December"
  },
  "fi": {
    1: "Tammikuu",
    2: "Helmikuu",
    3: "Maaliskuu",
    4: "Huhtikuu",
    5: "Toukokuu",
    6: "Kesäkuu",
    7: "Heinäkuu",
    8: "Elokuu",
    9: "Syyskuu",
    10: "Lokakuu",
    11: "Marraskuu",
    12: "Joulukuu"
  },
  "no": {
    1: "Januar",
    2: "Februar",
    3: "Mars",
    4: "April",
    5: "Mai",
    6: "Juni",
    7: "Juli",
    8: "August",
    9: "September",
    10: "Oktober",
    11: "November",
    12: "Desember"
  },
  "de": {
    1: "Januar",
    2: "Februar",
    3: "März",
    4: "April",
    5: "Mai",
    6: "Juni",
    7: "Juli",
    8: "August",
    9: "September",
    10: "Oktober",
    11: "November",
    12: "Dezember"
  },
  "es": {
    1: "Enero",
    2: "Febrero",
    3: "Marzo",
    4: "Abril",
    5: "Mayo",
    6: "Junio",
    7: "Julio",
    8: "Agosto",
    9: "Septiembre",
    10: "Octubre",
    11: "Noviembre",
    12: "Diciembre"
  },
  "fr": {
    1: "Janvier",
    2: "Février",
    3: "Mars",
    4: "Avril",
    5: "Mai",
    6: "Juin",
    7: "Juillet",
    8: "Août",
    9: "Septembre",
    10: "Octobre",
    11: "Novembre",
    12: "Décembre"
  },
  "pt": {
    1: "Janeiro",
    2: "Fevereiro",
    3: "Março",
    4: "Abril",
    5: "Maio",
    6: "Junho",
    7: "Julho",
    8: "Agosto",
    9: "Setembro",
    10: "Outubro",
    11: "Novembro",
    12: "Dezembro"
  },
  "tr": {
    1: "Ocak",
    2: "Şubat",
    3: "Mart",
    4: "Nisan",
    5: "Mayıs",
    6: "Haziran",
    7: "Temmuz",
    8: "Ağustos",
    9: "Eylül",
    10: "Ekim",
    11: "Kasım",
    12: "Aralık"
  },
  "gr": {
    1: "Ιανουάριος",
    2: "Φεβρουάριος",
    3: "Μάρτιος",
    4: "Απρίλιος",
    5: "Μάιος",
    6: "Ιούνιος",
    7: "Ιούλιος",
    8: "Αύγουστος",
    9: "Σεπτέμβριος",
    10: "Οκτώβριος",
    11: "Νοέμβριος",
    12: "Δεκέμβριος"
  },
  "ru": {
    1: "Январь",
    2: "Февраль",
    3: "Март",
    4: "Апрель",
    5: "Май",
    6: "Июнь",
    7: "Июль",
    8: "Август",
    9: "Сентябрь",
    10: "Октябрь",
    11: "Ноябрь",
    12: "Декабрь"
  },
  "cn": {
    1: "一月",
    2: "二月",
    3: "三月",
    4: "四月",
    5: "五月",
    6: "六月",
    7: "七月",
    8: "八月",
    9: "九月",
    10: "十月",
    11: "十一月",
    12: "十二月"
  },
  "my": {
    1: "Januari",
    2: "Februari",
    3: "Mac",
    4: "April",
    5: "Mei",
    6: "Jun",
    7: "Julai",
    8: "Ogos",
    9: "September",
    10: "Oktober",
    11: "November",
    12: "Disember"
  },
  "th": {
    1: "มกราคม",
    2: "กุมภาพันธ์",
    3: "มีนาคม",
    4: "เมษายน",
    5: "พฤษภาคม",
    6: "มิถุนายน",
    7: "กรกฎาคม",
    8: "สิงหาคม",
    9: "กันยายน",
    10: "ตุลาคม",
    11: "พฤศจิกายน",
    12: "ธันวาคม"
  },
  "ae": {
    1: "يناير",
    2: "فبراير",
    3: "مارس",
    4: "أبريل",
    5: "مايو",
    6: "يونيو",
    7: "يوليو",
    8: "أغسطس",
    9: "سبتمبر",
    10: "أكتوبر",
    11: "نوفمبر",
    12: "ديسمبر"
  },
  "il": {
    1: "ינואר",
    2: "פברואר",
    3: "מרץ",
    4: "אפריל",
    5: "מאי",
    6: "יוני",
    7: "יולי",
    8: "אוגוסט",
    9: "ספטמבר",
    10: "אוקטובר",
    11: "נובמבר",
    12: "דצמבר"
  },
  "in": {
    1: "जनवरी",
    2: "फरवरी",
    3: "मार्च",
    4: "अप्रैल",
    5: "मई",
    6: "जून",
    7: "जुलाई",
    8: "अगस्त",
    9: "सितंबर",
    10: "अक्टूबर",
    11: "नवंबर",
    12: "दिसंबर"
  }
};
const current_in_different_languages = {
  "us": "Current",
  "se": "Pågående",
  "fi": "Nykyinen",
  "de": "Aktuell",
  "es": "Actual",
  "fr": "Actuel",
  "pt": "Atual",
  "tr": "Mevcut",
  "gr": "Τρέχων",
  "ru": "Текущий",
  "cn": "当前",
  "my": "Semasa",
  "th": "ปัจจุบัน",
  "ae": "الحالي",
  "il": "נוכחי",
  "in": "वर्तमान"
};
const locations = {
  "Sweden": {
    "us": "Sweden",
    "se": "Sverige",
    "fi": "Ruotsi",
    "de": "Schweden",
    "es": "Suecia",
    "fr": "Suède",
    "pt": "Suécia",
    "tr": "İsveç",
    "gr": "Σουηδία",
    "ru": "Швеция",
    "cn": "瑞典",
    "my": "Sweden",
    "th": "สวีเดน",
    "ae": "السويد",
    "il": "שוודיה",
    "in": "स्वीडन"
  },
  "Stockholm": {
    "us": "Stockholm",
    "se": "Stockholm",
    "fi": "Tukholma",
    "de": "Stockholm",
    "es": "Estocolmo",
    "fr": "Stockholm",
    "pt": "Estocolmo",
    "tr": "Stokholm",
    "gr": "Στοκχόλμη",
    "ru": "Стокгольм",
    "cn": "斯德哥尔摩",
    "my": "Stockholm",
    "th": "สตอกโฮล์ม",
    "ae": "ستوكهولم",
    "il": "שטוקהולם",
    "in": "स्टॉकहोम"
  },
  "Laholm": {
    "us": "Laholm",
    "se": "Laholm",
    "fi": "Laholm",
    "de": "Laholm",
    "es": "Laholm",
    "fr": "Laholm",
    "pt": "Laholm",
    "tr": "Laholm",
    "gr": "Laholm",
    "ru": "Лахольм",
    "cn": "拉霍尔姆",
    "my": "Laholm",
    "th": "ลาฮอล์ม",
    "ae": "لاهولم",
    "il": "להולם",
    "in": "लाहोल्म"
  },
  "Remote": {
    "us": "Remote",
    "se": "Distans",
    "fi": "Etä",
    "de": "Remote",
    "es": "Remoto",
    "fr": "À distance",
    "pt": "Remoto",
    "tr": "Uzaktan",
    "gr": "Απομακρυσμένο",
    "ru": "Удаленный",
    "cn": "远程",
    "my": "Remote",
    "th": "ระยะไกล",
    "ae": "البعيد",
    "il": "מרחוק",
    "in": "रिमोट"
  },
  "Many Countries": {
    "us": "Many Countries",
    "se": "Många Länder",
    "fi": "Monet Maat",
    "de": "Viele Länder",
    "es": "Muchos Países",
    "fr": "Beaucoup de Pays",
    "pt": "Muitos Países",
    "tr": "Birçok Ülke",
    "gr": "Πολλές χώρες",
    "ru": "Много стран",
    "cn": "许多国家",
    "my": "Banyak Negara",
    "th": "หลายประเทศ",
    "ae": "كثير من البلدان",
    "il": "מדינות רבות",
    "in": "कई देश"
  },
  "Various Cities": {
    "us": "Various Cities",
    "se": "Olika Städer",
    "fi": "Eri Kaupungit",
    "de": "Verschiedene Städte",
    "es": "Varias Ciudades",
    "fr": "Diverses Villes",
    "pt": "Várias Cidades",
    "tr": "Çeşitli Şehirler",
    "gr": "Διάφορες πόλεις",
    "ru": "Разные города",
    "cn": "各种城市",
    "my": "Pelbagai Bandar",
    "th": "เมืองต่างๆ",
    "ae": "مدن مختلفة",
    "il": "ערים שונות",
    "in": "विभिन्न शहरों"
  },
  "Thailand": {
    "us": "Thailand",
    "se": "Thailand",
    "fi": "Thaimaa",
    "de": "Thailand",
    "es": "Tailandia",
    "fr": "Thaïlande",
    "pt": "Tailândia",
    "tr": "Tayland",
    "gr": "Ταϊλάνδη",
    "ru": "Таиланд",
    "cn": "泰国",
    "my": "Thailand",
    "th": "ประเทศไทย",
    "ae": "تايلاند",
    "il": "תאילנד",
    "in": "थाईलैंड"
  },
  "Pitsanulok": {
    "us": "Pitsanulok",
    "se": "Pitsanulok",
    "fi": "Pitsanulok",
    "de": "Pitsanulok",
    "es": "Pitsanulok",
    "fr": "Pitsanulok",
    "pt": "Pitsanulok",
    "tr": "Pitsanulok",
    "gr": "Pitsanulok",
    "ru": "Питсанулок",
    "cn": "彭世洛",
    "my": "Pitsanulok",
    "th": "พิษณุโลก",
    "ae": "بيتسانولوك",
    "il": "פיצנולוק",
    "in": "पिट्सनुलोक"
  }
};
const work_history = {
  1: {
    "date-from": "2022-11",
    "date-to": "current",
    "company": "",
    "city": "Stockholm",
    "country": "Sweden"
  },
  2: {
    "date-from": "2018-11",
    "date-to": "2022-4",
    "company": "Meta Bytes",
    "city": "Laholm",
    "country": "Sweden"
  },
  3: {
    "date-from": "2016-5",
    "date-to": "2018-8",
    "company": "Northmill Bank",
    "city": "Stockholm",
    "country": "Sweden"
  },
  4: {
    "date-from": "2015-11",
    "date-to": "2016-8",
    "company": "Ackebrink",
    "city": "Stockholm",
    "country": "Sweden"
  },
  5: {
    "date-from": "2015-1",
    "date-to": "2015-8",
    "company": "Nord Fondkommission",
    "city": "Stockholm",
    "country": "Sweden"
  },
  6: {
    "date-from": "1990-3",
    "date-to": "2014-4",
    "company": "Multitronics",
    "city": "Stockholm",
    "country": "Sweden"
  },
  7: {
    "date-from": "1987-1",
    "date-to": "2012-8",
    "company": "",
    "city": "Various Cities",
    "country": "Many Countries"
  },
  8: {
    "date-from": "2013-4",
    "date-to": "2013-7",
    "company": "Princess Chulabhorn Science High School",
    "city": "Pitsanulok",
    "country": "Thailand"
  }
};
const work_titles = {
  1: {
    "us": "Personal Projects",
    "se": "Personliga Projekt",
    "fi": "Henkilökohtaiset Projektit",
    "no": "Personlige Prosjekter",
    "de": "Persönliche Projekte",
    "es": "Proyectos Personales",
    "fr": "Projets Personnels",
    "pt": "Projetos Pessoais",
    "tr": "Kişisel Projeler",
    "gr": "Προσωπικά Έργα",
    "ru": "Личные проекты",
    "cn": "个人项目",
    "my": "Projek Peribadi",
    "th": "โครงการส่วนตัว",
    "ae": "مشاريع شخصية",
    "il": "פרויקטים אישיים",
    "in": "व्यक्तिगत परियोजनाओं"
  },
  2: {
    "us": "Systems Developer",
    "se": "Systemutvecklare",
    "fi": "Järjestelmäkehittäjä",
    "no": "Systemutvikler",
    "de": "Systementwickler",
    "es": "Desarrollador de Sistemas",
    "fr": "Développeur de Systèmes",
    "pt": "Desenvolvedor de Sistemas",
    "tr": "Sistem Geliştirici",
    "gr": "Προγραμματιστής Συστημάτων",
    "ru": "Разработчик систем",
    "cn": "系统开发人员",
    "my": "Pembangun Sistem",
    "th": "นักพัฒนาระบบ",
    "ae": "مطور نظم",
    "il": "מפתח מערכות",
    "in": "सिस्टम डेवलपर"
  },
  3: {
    "us": "Credit Risk Analyst",
    "se": "Kreditriskanalytiker",
    "fi": "Luottoriskianalyytikko",
    "no": "Kredittrisikoanalytiker",
    "de": "Kreditrisikoanalyst",
    "es": "Analista de Riesgo Crediticio",
    "fr": "Analyste du Risque de Crédit",
    "pt": "Analista de Risco de Crédito",
    "tr": "Kredi Risk Analisti",
    "gr": "Αναλυτής Πιστωτικού Κινδύνου",
    "ru": "Аналитик по кредитному риску",
    "cn": "信用风险分析师",
    "my": "Penganalisis Risiko Kredit",
    "th": "นักวิเคราะห์ความเสี่ยงเครดิต",
    "ae": "محلل مخاطر الائتمان",
    "il": "אנליסט סיכון אשראי",
    "in": "क्रेडिट रिस्क विश्लेषक"
  },
  4: {
    "us": "Mathematics Consulant",
    "se": "Matematikkonsult",
    "fi": "Matematiikkakonsultti",
    "no": "Matematikkonsulent",
    "de": "Mathematikberater",
    "es": "Consultor de Matemáticas",
    "fr": "Consultant en Mathématiques",
    "pt": "Consultor de Matemática",
    "tr": "Matematik Danışmanı",
    "gr": "Μαθηματικός Σύμβουλος",
    "ru": "Консультант по математике",
    "cn": "数学顾问",
    "my": "Perunding Matematik",
    "th": "ที่ปรึกษาคณิตศาสตร์",
    "ae": "مستشار الرياضيات",
    "il": "יועץ מתמטיקה",
    "in": "गणित परामर्शदाता"
  },
  5: {
    "us": "Risk Analyst",
    "se": "Riskanalytiker",
    "fi": "Riskianalyytikko",
    "no": "Risikoanalytiker",
    "de": "Risikoanalyst",
    "es": "Analista de Riesgo",
    "fr": "Analyste du Risque",
    "pt": "Analista de Risco",
    "tr": "Risk Analisti",
    "gr": "Αναλυτής Κινδύνου",
    "ru": "Аналитик рисков",
    "cn": "风险分析师",
    "my": "Penganalisis Risiko",
    "th": "นักวิเคราะห์ความเสี่ยง",
    "ae": "محلل المخاطر",
    "il": "אנליסט סיכון",
    "in": "रिस्क विश्लेषक"
  },
  6: {
    "us": "Owner",
    "se": "Ägare",
    "fi": "Omistaja",
    "no": "Eier",
    "de": "Inhaber",
    "es": "Dueño",
    "fr": "Propriétaire",
    "pt": "Proprietário",
    "tr": "Sahip",
    "gr": "Ιδιοκτήτης",
    "ru": "Владелец",
    "cn": "所有者",
    "my": "Pemilik",
    "th": "เจ้าของ",
    "ae": "صاحب",
    "il": "בעלים",
    "in": "मालिक"
  },
  7: {
    "us": "Mathematics and English Teacher",
    "se": "Matematik- och Engelsklärare",
    "fi": "Matematiikan ja Englannin Opettaja",
    "no": "Matematikk- og Engelsklærer",
    "de": "Mathematik- und Englischlehrer",
    "es": "Profesor de Matemáticas e Inglés",
    "fr": "Professeur de Mathématiques et d'Anglais",
    "pt": "Professor de Matemática e Inglês",
    "tr": "Matematik ve İngilizce Öğretmeni",
    "gr": "Καθηγητής Μαθηματικών και Αγγλικών",
    "ru": "Учитель математики и английского языка",
    "cn": "数学和英语老师",
    "my": "Guru Matematik dan Bahasa Inggeris",
    "th": "ครูคณิตศาสตร์และภาษาอังกฤษ",
    "ae": "مدرس الرياضيات واللغة الإنجليزية",
    "il": "מורה למתמטיקה ואנגלית",
    "in": "गणित और अंग्रेजी शिक्षक"
  },
  8: {
    "us": "Other Jobs",
    "se": "Andra Jobb",
    "fi": "Muut Työt",
    "no": "Andre Jobber",
    "de": "Andere Jobs",
    "es": "Otros Trabajos",
    "fr": "Autres Emplois",
    "pt": "Outros Trabalhos",
    "tr": "Diğer İşler",
    "gr": "Άλλες δουλειές",
    "ru": "Другие работы",
    "cn": "其他工作",
    "my": "Kerja Lain",
    "th": "งานอื่นๆ",
    "ae": "وظائف أخرى",
    "il": "עבודות אחרות",
    "in": "अन्य नौकरियां"
  }
};
const work_descriptions = {
  1: {
    "us": [
      "The motivation for the personal projects is to turn a home lab cluster into an educational platform in Computational Science, Data Science and Machine Learning.",
      [
        "Practice daily prompt engineering with ChatGPT.",
        "Use Red Hat Podman containers as an alternative to Docker containers and Kubernetes.",
        "Configuration and scripting of IPv6, DNS, load balancers and reverse proxies with SSL termination. Build a production-grade key-value store for use in a home lab or home cloud setup."
      ]
    ],
    "se": [
      "Motivationen för de personliga projekten är att bygga ett hemlabbkluster till en utbildningsplattform inom matematik och data.",
      [
        "Övar dagligen prompt engineering med ChatGPT.",
        "Använder Red Hat Podman-containers som ett alternativ till Docker-containers och Kubernetes.",
        "Konfiguration och skriptning av IPv6, DNS, load balancers och reverse proxys med SSL-avslutning.",
        "Utveckling av en produktionsklar nyckelvärdesdatabas för användning i ett hemlabb eller ett mindre privat moln."
      ]
    ],
    "fi": [
      "Henkilökohtaisten projektien motivaationa on rakentaa kotilaboratorioklusteri koulutusalustaksi matematiikassa ja tietotekniikassa.",
      [
        "Harjoittele päivittäistä prompt engineeringia ChatGPT: n kanssa.",
        "Käytä Red Hat Podman -säiliöitä Docker-säiliöiden ja Kubernetesin vaihtoehtona.",
        "IPv6-, DNS-, kuormantasaus- ja käänteisvälityspalvelinten määritys ja skriptaus SSL-päättymisellä.",
        "Kehittää tuotantovalmis avainarvotietokanta kotilaboratorioon tai pienempään yksityiseen pilveen."
      ]
    ],
    "no": [
      "Motivasjonen for de personlige prosjektene er å bygge et hjemmelaboratoriumskluster til en utdanningsplattform innen matematikk og data.",
      [
        "Øv daglig prompt engineering med ChatGPT.",
        "Bruk Red Hat Podman-containere som et alternativ til Docker-containere og Kubernetes.",
        "Konfigurasjon og skripting av IPv6, DNS, load balancers og reverse proxys med SSL-terminering.",
        "Utvikle en produksjonsklar nøkkelverdidatabase for bruk i et hjemmelaboratorium eller en mindre privat sky."
      ]
    ],
    "de": [
      "Die Motivation für die persönlichen Projekte besteht darin, ein Heimlaborcluster zu einer Bildungsplattform für Mathematik und Informatik auszubauen.",
      [
        "Üben Sie tägliches Prompt Engineering mit ChatGPT.",
        "Verwenden Sie Red Hat Podman-Container als Alternative zu Docker-Containern und Kubernetes.",
        "Konfiguration und Skripting von IPv6, DNS, Load Balancern und Reverse Proxys mit SSL-Terminierung.",
        "Entwickeln Sie eine produktionsreife Key-Value-Datenbank für den Einsatz in einem Heimlabor oder einer kleineren privaten Cloud."
      ]
    ],
    "es": [
      "La motivación de los proyectos personales es convertir un clúster de laboratorio doméstico en una plataforma educativa en matemáticas e informática.",
      [
        "Practique la ingeniería de indicaciones diarias con ChatGPT.",
        "Utilice contenedores Red Hat Podman como alternativa a los contenedores Docker y Kubernetes.",
        "Configuración y scripting de IPv6, DNS, equilibradores de carga y proxies inversos con terminación SSL.",
        "Desarrolle una base de datos de valores clave de producción para su uso en un laboratorio doméstico o una nube privada más pequeña."
      ]
    ],
    "fr": [
      "La motivation des projets personnels est de transformer un cluster de laboratoire domestique en une plate-forme éducative en mathématiques et informatique.",
      [
        "Pratiquez l'ingénierie des invites quotidiennes avec ChatGPT.",
        "Utilisez les conteneurs Red Hat Podman comme alternative aux conteneurs Docker et Kubernetes.",
        "Configuration et script IPv6, DNS, équilibreurs de charge et proxies inverses avec terminaison SSL.",
        "Développez une base de données de valeurs clés de production pour une utilisation dans un laboratoire domestique ou un cloud privé plus petit."
      ]
    ],
    "pt": [
      "A motivação para os projetos pessoais é transformar um cluster de laboratório doméstico em uma plataforma educacional em matemática e ciência da computação.",
      [
        "Pratique a engenharia de prompt diário com o ChatGPT.",
        "Use contêineres Red Hat Podman como alternativa aos contêineres Docker e Kubernetes.",
        "Configuração e script IPv6, DNS, balanceadores de carga e proxies reversos com terminação SSL.",
        "Desenvolva um banco de dados de valores-chave de produção para uso em um laboratório doméstico ou nuvem privada menor."
      ]
    ],
    "tr": [
      "Kişisel projelerin motivasyonu, bir ev laboratuvarı kümesini matematik ve bilgisayar biliminde eğitim platformuna dönüştürmektir.",
      [
        "ChatGPT ile günlük prompt mühendisliği uygulayın.",
        "Docker konteynerleri ve Kubernetes yerine Red Hat Podman konteynerlerini kullanın.",
        "SSL sonlandırma ile IPv6, DNS, yük dengeleyicileri ve ters proxy'lerin yapılandırılması ve komut dosyası.",
        "Ev laboratuvarında veya daha küçük bir özel bulutta kullanılmak üzere üretim için bir anahtar-değer veritabanı geliştirin."
      ]
    ],
    "gr": [
      "Η κίνητρο για τα προσωπικά έργα είναι να μετατρέψει ένα σύμπλεγμα εργαστηρίου στο σπίτι σε μια εκπαιδευτική πλατφόρμα στα μαθηματικά και την πληροφορική.",
      [
        "Εξάσκηση καθημερινής μηχανικής εντολών με ChatGPT.",
        "Χρησιμοποιήστε εναλλακτικά δοχεία Red Hat Podman αντί για δοχεία Docker και Kubernetes.",
        "Διαμόρφωση και σεναριογράφηση IPv6, DNS, εξισορροπητών φόρτωσης και αντίστροφων διακομιστών με τερματισμό SSL.",
        "Ανάπτυξη βάσης δεδομένων παραγωγής κλειδιού-τιμής για χρήση σε εργαστήριο στο σπίτι ή μικρότερο ιδιωτικό νέφος."
      ]
    ],
    "ru": [
      "Мотивация личных проектов - превратить домашний лабораторный кластер в образовательную платформу по математике и информатике.",
      [
        "Практика ежедневной инженерии приглашений с ChatGPT.",
        "Используйте контейнеры Red Hat Podman в качестве альтернативы контейнерам Docker и Kubernetes.",
        "Конфигурация и скриптинг IPv6, DNS, балансировщиков нагрузки и обратных прокси-серверов с завершением SSL.",
        "Разработка базы данных ключевых значений для использования в домашней лаборатории или более маленьком частном облаке."
      ]
    ],
    "cn": [
      "个人项目的动机是将家庭实验室集群转变为数学和计算机科学的教育平台。",
      [
        "使用ChatGPT进行每日提示工程。",
        "使用Red Hat Podman容器作为Docker容器和Kubernetes的替代方案。",
        "使用SSL终止配置和脚本IPv6，DNS，负载均衡器和反向代理。",
        "为在家实验室或较小的私有云中使用而构建生产级键值存储。"
      ]
    ],
    "my": [
      "Motivasi untuk projek peribadi adalah untuk mengubah kluster makmal rumah menjadi platform pendidikan dalam matematik dan sains komputer.",
      [
        "Latih kejuruteraan prompt harian dengan ChatGPT.",
        "Gunakan bekas Red Hat Podman sebagai alternatif kepada bekas Docker dan Kubernetes.",
        "Konfigurasi dan scripting IPv6, DNS, load balancers dan reverse proxies dengan SSL termination.",
        "Bina stor nilai kunci bertaraf pengeluaran untuk digunakan dalam makmal rumah atau setup awan rumah."
      ]
    ],
    "th": [
      "แรงบันดาลใจของโครงการส่วนบุคคลคือการแปลงคลัสเตอร์ห้องปฏิบัติการที่บ้านเป็นแพลตฟอร์มการศึกษาในคณิตศาสตร์และวิทยาการคอมพิวเตอร์",
      [
        "ฝึกการวิศวกรรมของคำพูดทุกวันกับ ChatGPT",
        "ใช้คอนเทนเนอร์ Red Hat Podman เป็นทางเลือกแทนคอนเทนเนอร์ Docker และ Kubernetes",
        "การกำหนดค่าและสคริปต์ IPv6, DNS, load balancers และ reverse proxies ด้วย SSL termination",
        "สร้างฐานข้อมูลค่าสำหรับใช้ในห้องปฏิบัติการที่บ้านหรือการติดตั้งคลาวด์ที่บ้าน"
      ]
    ],
    "ae": [
      "دافع المشاريع الشخصية هو تحويل مجموعة مختبر المنزل إلى منصة تعليمية في الرياضيات وعلوم الكمبيوتر.",
      [
        "ممارسة الهندسة اليومية مع ChatGPT.",
        "استخدم حاويات Red Hat Podman كبديل لحاويات Docker و Kubernetes.",
        "تكوين وبرمجة IPv6 و DNS وموازني الحمل والوكلاء العكسيين مع إنهاء SSL.",
        "بناء قاعدة بيانات قيمة مفتاحية للاستخدام في مختبر منزلي أو إعداد سحابة منزلية."
      ]
    ],
    "il": [
      "המוטיבציה לפרויקטים האישיים היא להפוך את אשכול המעבדה הביתית לפלטפורמה ללימודים במתמטיקה ובמדעי המחשב.",
      [
        "תרגול הנדסת הזמנה יומית עם ChatGPT.",
        "השתמש במיכלי Red Hat Podman כאלטרנטיבה למיכלי Docker ו Kubernetes.",
        "תצורה ותסריטים של IPv6, DNS, מאזני מעמסה ופרוקסיים הפוכים עם סיום SSL.",
        "בניית בסיס נתונים של ערכי מפתח לשימוש במעבדה ביתית או בהגדרת ענן ביתי."
      ]
    ],
    "in": [
      "व्यक्तिगत परियोजनाओं के लिए प्रेरणा गणित और कंप्यूटर विज्ञान में एक शिक्षण प्लेटफॉर्म में एक घर के प्रयोगशाला क्लस्टर को बदलने के लिए है।",
      [
        "चैटजीपीटी के साथ दैनिक प्रॉम्प्ट इंजीनियरिंग का अभ्यास करें।",
        "डॉकर कंटेनर और कुबरनेट के विकल्प के रूप में रेड हैट पोडमैन कंटेनर का उपयोग करें।",
        "आईपीवी 6, डीएनएस, लोड बैलेंसर और एसएसएल समापन के साथ रिवर्स प्रॉक्सी की विन्यास और स्क्रिप्टिंग।",
        "घर के प्रयोगशाला या घर के बादल सेटअप में उपयोग के लिए उत्पादन-ग्रेड कुंजी-मूल्य संग्रह का निर्माण।"
      ]
    ]
  },
  2: {
    "us": [
      "Meta Bytes, is a start-up company that is providing cloud and IT-solutions to various clients within EU.",
      [
        "My main task was to explore new technologies for future business benefit.",
        "Reused technologies for measuring soil moisture from NASA weather satellite data for drones in precision agriculture.",
        "Designed and evaluated solvers of the traditionally mathematical type versus machine learning type.",
        "We explored the use of open-source machine learning software: Tesseract (OCR) and OpenCV which was then used in the development of visual document identification programs.",
        "We explored the application of speech-to-text transcription.",
        "We implemented secure information transfer through the use of serialization, NoSQL, secret key-value databases and RabbitMQ."
      ]
    ],
    "se": [
      "Meta Bytes, är ett start-up företag som tillhandahåller moln- och IT-lösningar till olika kunder inom EU.",
      [
        "Min huvuduppgift var att utforska nya tekniker till framtida företagsnytta.",
        "Återanvände tekniker för att mäta markfuktigheten från NASA-vädersattelitdata tillämpat på drönare inom precision jordbruk.",
        "Konstruerade och utvärderade lösare av den traditionellt matematiska typen genetemot maskininlärnings tyoen.",
        "Vi utforskade användningen av open-source maskininlärningsprogramvara: Tesseract (OCR) och OpenCV som sedan användes inom utvecklading av program för visuell dokumentidentifiering.",
        "Vi utforskade tillämpningen av tal-till-text-transkription.",
        "Vi implementerade säker informationsöverföring genom användning av serialisering, NoSQL, hemliga nyckelvärdesdatabaser och RabbitMQ."
      ]
    ],
    "fi": [
      "Meta Bytes, on start-up yritys, joka tarjoaa pilvi- ja IT-ratkaisuja eri asiakkaille EU: ssa.",
      [
        "Päätehtäväni oli tutkia uusia tekniikoita tulevaa liiketoimintahyötyä varten.",
        "Uudelleenkäytetyt tekniikat maaperän kosteuden mittaamiseksi NASAn säätietojen satelliittidatan perusteella sovellettuina tarkkuusmaataloudessa käytettäviin droneihin.",
        "Suunniteltu ja arvioitu ratkaisijat perinteisesti matemaattisesta tyypistä koneoppimistyypin sijaan.",
        "Tutkimme avoimen lähdekoodin koneoppimisohjelmiston käyttöä: Tesseract (OCR) ja OpenCV, jotka otettiin sitten käyttöön visuaalisten asiakirja tunnistusohjelmien kehittämisessä.",
        "Tutkimme puheen tekstiksi transkription soveltamista.",
        "Toteutimme turvallisen tiedonsiirron sarjallistamisen, NoSQL: n, salaisen avainarvotietokantojen ja RabbitMQ: n avulla."
      ]
    ],
    "no": [
      "Meta Bytes, er et oppstartsselskap som leverer sky- og IT-løsninger til ulike kunder innen EU.",
      [
        "Min hovedoppgave var å utforske nye teknologier for fremtidig forretningsnytte.",
        "Gjenbrukte teknologier for å måle jordfuktighet fra NASA-værsatellittdata for droner i presisjonslandbruk.",
        "Designet og evaluerte løsere av den tradisjonelt matematiske typen versus maskinlæringstypen.",
        "Vi utforsket bruken av åpen kildekode maskinlæring programvare: Tesseract (OCR) og OpenCV som deretter ble brukt i utviklingen av visuelle dokumentidentifikasjonsprogrammer.",
        "Vi utforsket bruken av tale-til-tekst transkripsjon.",
        "Vi implementerte sikker informasjonsoverføring gjennom bruk av serialisering, NoSQL, hemmelige nøkkelverdi databaser og RabbitMQ."
      ]
    ],
    "de": [
      "Meta Bytes, ist ein Start-up-Unternehmen, das Cloud- und IT-Lösungen für verschiedene Kunden innerhalb der EU anbietet.",
      [
        "Meine Hauptaufgabe bestand darin, neue Technologien für zukünftige Geschäftsvorteile zu erkunden.",
        "Wiederverwendete Technologien zur Messung der Bodenfeuchtigkeit aus NASA-Wetter-Satellitendaten für Drohnen in der Präzisionslandwirtschaft.",
        "Entwarf und bewertete Löser des traditionell mathematischen Typs gegenüber dem maschinellen Lerntyp.",
        "Wir haben die Verwendung von Open-Source-Maschinenlernsoftware untersucht: Tesseract (OCR) und OpenCV, die dann bei der Entwicklung von Programmen zur visuellen Dokumentenidentifikation verwendet wurden.",
        "Wir haben die Anwendung der Sprach-zu-Text-Transkription untersucht.",
        "Wir haben die sichere Informationsübertragung durch die Verwendung von Serialisierung, NoSQL, geheimen Schlüsselwert-Datenbanken und RabbitMQ implementiert."
      ]
    ],
    "es": [
      "Meta Bytes, es una empresa emergente que proporciona soluciones en la nube y de TI a varios clientes dentro de la UE.",
      [
        "Mi principal tarea fue explorar nuevas tecnologías para el beneficio comercial futuro.",
        "Tecnologías reutilizadas para medir la humedad del suelo a partir de datos de satélites meteorológicos de la NASA para drones en agricultura de precisión.",
        "Diseñado y evaluado solucionadores del tipo matemático tradicional versus el tipo de aprendizaje automático.",
        "Exploramos el uso de software de aprendizaje automático de código abierto: Tesseract (OCR) y OpenCV que luego se utilizó en el desarrollo de programas de identificación de documentos visuales.",
        "Exploramos la aplicación de transcripción de voz a texto.",
        "Implementamos la transferencia segura de información mediante el uso de serialización, NoSQL, bases de datos de valores clave secretos y RabbitMQ."
      ]
    ],
    "fr": [
      "Meta Bytes, est une start-up qui fournit des solutions cloud et informatiques à divers clients au sein de l'UE.",
      [
        "Ma tâche principale était d'explorer de nouvelles technologies pour un bénéfice commercial futur.",
        "Technologies réutilisées pour mesurer l'humidité du sol à partir de données de satellites météorologiques de la NASA pour les drones en agriculture de précision.",
        "Conçu et évalué des solveurs du type mathématique traditionnel par rapport au type d'apprentissage automatique.",
        "Nous avons exploré l'utilisation de logiciels d'apprentissage automatique open source: Tesseract (OCR) et OpenCV qui ont ensuite été utilisés dans le développement de programmes d'identification de documents visuels.",
        "Nous avons exploré l'application de la transcription de la parole en texte.",
        "Nous avons mis en œuvre le transfert sécurisé d'informations grâce à l'utilisation de la sérialisation, de NoSQL, de bases de données de valeurs clés secrètes et de RabbitMQ."
      ]
    ],
    "pt": [
      "Meta Bytes, é uma empresa iniciante que fornece soluções em nuvem e de TI para vários clientes dentro da UE.",
      [
        "Minha principal tarefa era explorar novas tecnologias para benefícios comerciais futuros.",
        "Tecnologias reutilizadas para medir a umidade do solo a partir de dados de satélite meteorológico da NASA para drones na agricultura de precisão.",
        "Projetado e avaliado solucionadores do tipo matemático tradicional versus o tipo de aprendizado de máquina.",
        "Exploramos o uso de software de aprendizado de máquina de código aberto: Tesseract (OCR) e OpenCV que foi então usado no desenvolvimento de programas de identificação de documentos visuais.",
        "Exploramos a aplicação da transcrição de fala para texto.",
        "Implementamos a transferência segura de informações por meio do uso de serialização, NoSQL, bancos de dados de valores-chave secretos e RabbitMQ."
      ]
    ],
    "tr": [
      "Meta Bytes, AB içindeki çeşitli müşterilere bulut ve BT çözümleri sunan bir start-up şirketidir.",
      [
        "Gelecekteki iş faydası için yeni teknolojileri keşfetmek benim ana görevimdi.",
        "Hassas tarımda drone'lar için NASA hava durumu uydu verilerinden toprak nemini ölçmek için yeniden kullanılan teknolojiler.",
        "Geleneksel matematiksel türün çözücülerini ve makine öğrenme türünü tasarladık ve değerlendirdik.",
        "Açık kaynak makine öğrenme yazılımının kullanımını araştırdık: Tesseract (OCR) ve OpenCV, ardından görsel belge tanımlama programlarının geliştirilmesinde kullanıldı.",
        "Konuşmadan metne transkripsiyonun uygulanmasını araştırdık.",
        "Serielleştirme, NoSQL, gizli anahtar-değer veritabanları ve RabbitMQ kullanarak güvenli bilgi aktarımını uyguladık."
      ]
    ],
    "gr": [
      "Η Meta Bytes είναι μια εταιρεία εκκίνησης που παρέχει λύσεις στον τομέα του cloud και της πληροφορικής σε διάφορους πελάτες εντός της ΕΕ.",
      [
        "Ο κύριος στόχος μου ήταν να εξερευνήσω νέες τεχνολογίες για μελλοντικά οφέλη επιχειρήσεων.",
        "Επαναχρησιμοποιήθηκαν τεχνολογίες για τη μέτρηση της υγρασίας του εδάφους από δεδομένα δορυφόρου καιρού της NASA για drones στην ακριβή γεωργία.",
        "Σχεδιάστηκαν και αξιολογήθηκαν επιλυτές του παραδοσιακού μαθηματικού τύπου έναντι του τύπου μηχανικής μάθησης.",
        "Εξερευνήσαμε τη χρήση λογισμικού ανοιχτού κώδικα μηχανικής μάθησης: Tesseract (OCR) και OpenCV που στη συνέχεια χρησιμοποιήθηκαν στην ανάπτυξη προγραμμάτων αναγνώρισης οπτικών εγγράφων.",
        "Εξερευνήσαμε την εφαρμογή μεταγραφής ομιλίας σε κείμενο.",
        "Εφαρμόσαμε την ασφαλή μεταφορά πληροφοριών μέσω της χρήσης σειριοποίησης, NoSQL, μυστικών βάσεων δεδομένων κλειδιού-τιμής και RabbitMQ."
      ]
    ],
    "ru": [
      "Meta Bytes, это стартап, который предоставляет облачные и IT-решения для различных клиентов в ЕС.",
      [
        "Моя основная задача - исследовать новые технологии для будущей коммерческой выгоды.",
        "Повторно использовались технологии для измерения влажности почвы по данным спутниковой погоды NASA для дронов в точном сельском хозяйстве.",
        "Разработаны и оценены решатели традиционного математического типа по сравнению с типом машинного обучения.",
        "Мы исследовали использование программного обеспечения с открытым исходным кодом для машинного обучения: Tesseract (OCR) и OpenCV, которые затем использовались при разработке программ для визуальной идентификации документов.",
        "Мы исследовали применение транскрипции речи в текст.",
        "Мы реализовали безопасную передачу информации с помощью сериализации, NoSQL, секретных баз данных ключ-значение и RabbitMQ."
      ]
    ],
    "cn": [
      "Meta Bytes是一家初创公司，为欧盟内的各种客户提供云和IT解决方案。",
      [
        "我的主要任务是探索新技术以获得未来的商业利益。",
        "重复使用技术以测量NASA天气卫星数据中的土壤湿度，以用于精密农业中的无人机。",
        "设计和评估传统数学类型与机器学习类型的求解器。",
        "我们探索了使用开源机器学习软件：Tesseract（OCR）和OpenCV，然后将其用于开发视觉文档识别程序。",
        "我们探索了语音转文本的应用。",
        "我们通过使用序列化，NoSQL，秘密键值数据库和RabbitMQ实现了安全的信息传输。"
      ]
    ],
    "my": [
      "Meta Bytes adalah syarikat permulaan yang menyediakan penyelesaian awan dan IT kepada pelbagai pelanggan dalam EU.",
      [
        "Tugas utama saya adalah untuk meneroka teknologi baru untuk faedah perniagaan masa depan.",
        "Teknologi yang digunakan semula untuk mengukur kelembapan tanah dari data satelit cuaca NASA untuk dron dalam pertanian presisi.",
        "Direka dan dinilai penyelesaian jenis matematik tradisional berbanding jenis pembelajaran mesin.",
        "Kami meneroka penggunaan perisian pembelajaran mesin sumber terbuka: Tesseract (OCR) dan OpenCV yang kemudiannya digunakan dalam pembangunan program pengenalan dokumen visual.",
        "Kami meneroka aplikasi transkripsi ucapan-ke-teks.",
        "Kami melaksanakan pemindahan maklumat yang selamat melalui penggunaan serialisasi, NoSQL, pangkalan data nilai kunci rahsia dan RabbitMQ."
      ]
    ],
    "th": [
      "Meta Bytes เป็น บริษัท สตาร์ทอัพ ที่ให้บริการคลาวด์และ IT ให้กับลูกค้าต่าง ๆ ภายใน EU",
      [
        "งานหลักของฉันคือการสำรวจเทคโนโลยีใหม่เพื่อประโยชน์ทางธุรกิจในอนาคต",
        "เทคโนโลยีที่นำกลับมาใช้ใหม่ในการวัดความชื้นในดินจากข้อมูลดาวเทียมสภาพอากาศของ NASA สำหรับโดรนในการเกษตรแบบความแม่นยำ",
        "ออกแบบและประเมินผลตัวแก้ปัญหาของชนิดทางคณิตศาสตร์แบบดั้งเดิมเทียบกับชนิดการเรียนรู้ของเครื่อง",
        "เราได้สำรวจการใช้ซอฟต์แวร์การเรียนรู้ของเครื่องจักรแบบเปิด: Tesseract (OCR) และ OpenCV ซึ่งจากนั้นนำมาใช้ในการพัฒนาโปรแกรมการระบุเอกสารทางสายตา",
        "เราได้สำรวจการประยุกต์ใช้การแปลงคำพูดเป็นข้อความ",
        "เราได้นำเสนอการถ่ายโอนข้อมูลที่ปลอดภัยผ่านการใช้งาน serialisasi, NoSQL, ฐานข้อมูลค่าสำคัญที่เป็นความลับและ RabbitMQ"
      ]
    ],
    "ae": [
      "Meta Bytes هي شركة ناشئة تقدم حلول سحابية وتقنية المعلومات لعملاء مختلفين داخل الاتحاد الأوروبي.",
      [
        "كانت مهمتي الرئيسية هي استكشاف التقنيات الجديدة للحصول على فائدة تجارية مستقبلية.",
        "تم إعادة استخدام التقنيات لقياس رطوبة التربة من بيانات الأقمار الصناعية الجوية لوكالة ناسا للطائرات بدون طيار في الزراعة عالية الدقة.",
        "صمم وقيم محللو الحلول من النوع الرياضي التقليدي مقابل نوع التعلم الآلي.",
        "استكشفنا استخدام برامج تعلم الآلة مفتوحة المصدر: Tesseract (OCR) و OpenCV التي تم استخدامها بعد ذلك في تطوير برامج تحديد الوثائق البصرية.",
        "استكشفنا تطبيق التسجيل الصوتي إلى نص.",
        "نفذنا نقل المعلومات الآمنة من خلال استخدام التسلسل و NoSQL وقواعد بيانات قيمة المفتاح السري و RabbitMQ."
      ]
    ],
    "il": [
      "Meta Bytes היא חברת הזנק שמספקת פתרונות ענן ו- IT ללקוחות שונים באיחוד האירופי.",
      [
        "המשימה העיקרית שלי היתה לחקור טכנולוגיות חדשות למענה עסקי עתידי.",
        'טכנולוגיות משומשות למדידת לחות האדמה מנתוני שכבת מזג אוויר של נאס"א לשימוש במזל"טים בחקלאות מדויקת.',
        "מעצב ומעריך פותרים של הסוג המתמטי המסורתי לעומת סוג למידת מכונה.",
        "חקרנו את שימוש בתוכנה ללמידת מכונה קוד פתוח: Tesseract (OCR) ו- OpenCV שאז הושכבו בפיתוח תוכניות זיהוי מסמכים חזותיים.",
        "חקרנו את היישום של העתקת דיבור לטקסט.",
        "יישמנו העברת מידע מאובטחת דרך שימוש בסידור, NoSQL, מסדי נתונים ערך מפתח סודיים ו- RabbitMQ."
      ]
    ],
    "in": [
      "मेटा बाइट्स, यूई के भीतर विभिन्न ग्राहकों के लिए बादल और आईटी समाधान प्रदान करने वाली एक स्टार्टअप कंपनी है।",
      [
        "मेरा मुख्य कार्य भविष्य के व्यावसायिक लाभ के लिए नई तकनीकों का अन्वेषण करना था।",
        "ड्रोन के लिए नासा मौसम उपग्रह डेटा से मिट्टी की नमी को मापने के लिए पुनर्चक्रण तकनीकों का पुनर्चक्रण किया गया।",
        "पारंपरिक रूप से गणितीय प्रकार के समाधानकर्ताओं का डिजाइन और मूल्यांकन मशीन सीखने के प्रकार के विपरीत।",
        "हमने ओपन-सोर्स मशीन सीखने के सॉफ्टवेयर का उपयोग अन्वेषण किया: Tesseract (OCR) और OpenCV जो फिर विजुअल दस्तावेज़ पहचान कार्यक्रमों के विकास में उपयोग किया गया।",
        "हमने वाक्य-से-पाठ ट्रांसक्रिप्शन के आवेदन का अन्वेषण किया।",
        "हमने संशोधन, NoSQL, गुप्त कुंजी मान-मूल्य डेटाबेस और रैबिटएमक्यू का उपयोग करके सुरक्षित जानकारी स्थानांतरण को लागू किया।"
      ]
    ]
  },
  3: {
    "us": [
      "Northmill Bank is a Swedish bank providing financial services to consumers and businesses in the EU. I worked at Northmill before they were granted a banking license.",
      [
        "My main task was to solve computationally intensive analysis problems in the organization.",
        [
          "With my computational analysis I contributed to decision making processes at the top management level.",
          "Handled Big Data problems before the bank expanded to dedicated IT infrastructure.",
          "We assessed risks, predicted portfolio sizes and estimated assumptions and KPIs.",
          "Benchmarked machine learning algorithms versus traditional analytical methods."
        ],
        "Marketing Analysis:",
        [
          "Evaluated and priced Google AdWords keywords for different rankings, times and customer groups."
        ],
        "Behavioral Analysis:",
        [
          "Performed behavioral analysis and categorization of customers and transaction text data by utilizing regular expressions.",
          "Analyzed the analysts to partners to Northmills in a counter-negotiation. Result: More than 14M EUR extra profit in 5 years."
        ],
        "Modeled and simulated Northmill Bank's customer behavior, based on underlying IT infrastructure, for credit stress testing and for decision support.",
        "Assisted in the preparations for Northmill Bank's treasury function."
      ]
    ],
    "se": [
      "Northmill Bank är en svensk bank som tillhandahåller finansiella tjänster till konsumenter och företag inom EU. Jag arbetade i Northmill innan de beviljades en banklicens.",
      [
        "Min huvuduppgift var att lösa beräkningsintensiva analysproblem i organisationen.",
        [
          "Med mina intensiva beräkningsanalyser bidrog jag med underlag till beslut inom ledningen.",
          "Hanterade Big Data problem innan bankens expanderade till dedikerad IT infrastruktur.",
          "Vi bedömde risker, förutsåg portföljstorlekar och uppskattade standarder och KPI:er.",
          "Benchmarkade maskininlärnings-algoritmer gentemot traditionella analytiska metoder."
        ],
        "Marknadsanalys:",
        [
          "Utvärderade och prissatte Google AdWords nyckelord för olika rankingar, tider och kundgrupper."
        ],
        "Beteendeanalys:",
        [
          "Genomförde beteendeanalys och kategorisering av kunder och transaktionstextdata genom att utnyttja reguljära uttryck.",
          "Analyserade själva analytikerna till partners till Northmills i en motförhandling. Resultat: Mer än 14M EUR extra vinst på 5 år."
        ],
        "Modellerade och simulerade Northmill Banks kundbeteende, baserat på underliggande IT-infrastruktur, för att utföra kreditstress-tester och för stödjande av beslut.",
        "Assisterade i förberedelserna för Northmill Banks treauryfunktion."
      ]
    ],
    "fi": [
      "Northmill Pankki on ruotsalainen pankki, joka tarjoaa rahoituspalveluja kuluttajille ja yrityksille EU: ssa. Työskentelin Northmillissä ennen kuin heille myönnettiin pankkilupa.",
      [
        "Päätehtäväni oli ratkaista laskennallisesti intensiivisiä analyysiongelmia organisaatiossa.",
        [
          "Intensiivisillä laskennallisilla analyyseillani osallistuin johtotasolla tehtäviin päätöksiin.",
          "Käsitelty Big Data -ongelmia ennen kuin pankki laajensi omistettuun IT-infrastruktuuriin.",
          "Arvioimme riskejä, ennustimme salkkukokoja ja arvioimme oletuksia ja KPI: itä.",
          "Benchmarkattiin koneoppimisalgoritmeja perinteisiin analyyttisiin menetelmiin verrattuna."
        ],
        "Markkinointianalyysi:",
        [
          "Arvioi ja hinnoittele Google AdWords -avainsanoja eri sijoituksille, ajoille ja asiakasryhmille."
        ],
        "Käyttäytymisanalyysi:",
        [
          "Suoritti asiakkaiden ja tapahtumatekstidatan käyttäytymisanalyysin ja luokittelun hyödyntämällä säännöllisiä lausekkeita.",
          "Analysoi analyytikot Northmillin kumppaneiksi vastaneuvottelussa. Tulos: Yli 14 miljoonaa euroa ylimääräistä voittoa 5 vuodessa."
        ],
        "Mallinnettiin ja simuloitiin Northmill Bankin asiakaskäyttäytymistä, perustuen taustalla olevaan IT-infrastruktuuriin, luottoriskitestien suorittamiseen ja päätöksenteon tukemiseen.",
        "Avusti valmisteluissa Northmill Pankkin rahaston toimintaa varten."
      ]
    ],
    "no": [
      "Northmill Bank er en svensk bank som tilbyr finansielle tjenester til forbrukere og bedrifter i EU. Jeg jobbet i Northmill før de fikk banklisens.",
      [
        "Min hovedoppgave var å løse beregningsintensive analyseproblemer i organisasjonen.",
        [
          "Med mine beregningsintensive analyser bidro jeg med beslutningsgrunnlag på toppledernivå.",
          "Håndterte Big Data-problemer før banken utvidet til dedikert IT-infrastruktur.",
          "Vi vurderte risikoer, forutså porteføljestørrelser og estimerte antagelser og KPIer.",
          "Benchmarket maskinlæringsalgoritmer versus tradisjonelle analytiske metoder."
        ],
        "Markedsanalyse:",
        [
          "Evaluerte og priset Google AdWords-nøkkelord for forskjellige rangeringer, tider og kundegrupper."
        ],
        "Atferdsanalyse:",
        [
          "Utførte atferdsanalyse og kategorisering av kunder og transaksjonstekstdata ved å bruke regulære uttrykk.",
          "Analyserer analytikere til partnere til Northmills i en motforhandling. Resultat: Mer enn 14 millioner euro ekstra fortjeneste på 5 år."
        ],
        "Modellerte og simulerte Northmill Banks kundeadferd, basert på underliggende IT-infrastruktur, for kredittstresstesting og for beslutningsstøtte.",
        "Assisterte i forberedelsene til Northmill Banks treasury-funksjon."
      ]
    ],
    "de": [
      "Northmill Bank ist eine schwedische Bank, die Finanzdienstleistungen für Verbraucher und Unternehmen in der EU anbietet. Ich habe bei Northmill gearbeitet, bevor ihnen eine Banklizenz erteilt wurde.",
      [
        "Meine Hauptaufgabe bestand darin, rechenintensive Analyseprobleme in der Organisation zu lösen.",
        [
          "Mit meinen rechenintensiven Analysen trug ich zur Entscheidungsfindung auf Top-Management-Ebene bei.",
          "Behandelte Big-Data-Probleme, bevor die Bank auf eine dedizierte IT-Infrastruktur erweitert wurde.",
          "Wir bewerteten Risiken, prognostizierten Portfoliogrößen und schätzten Annahmen und KPIs.",
          "Benchmarkte Machine-Learning-Algorithmen gegenüber traditionellen analytischen Methoden."
        ],
        "Marktanalyse:",
        [
          "Bewertete und bewertete Google AdWords-Schlüsselwörter für verschiedene Rankings, Zeiten und Kundengruppen."
        ],
        "Verhaltensanalyse:",
        [
          "Führte eine Verhaltensanalyse und Kategorisierung von Kunden und Transaktionstextdaten unter Verwendung regulärer Ausdrücke durch.",
          "Analysierte die Analysten zu Partnern von Northmills in einer Gegenverhandlung. Ergebnis: Mehr als 14 Mio. EUR zusätzlicher Gewinn in 5 Jahren."
        ],
        "Modellierte und simulierte das Kundenverhalten von Northmill Bank basierend auf der zugrunde liegenden IT-Infrastruktur für Kredit-Stresstests und Entscheidungsunterstützung.",
        "Unterstützte bei den Vorbereitungen für die Treasury-Funktion von Northmill Bank."
      ]
    ],
    "es": [
      "Northmill Bank es un banco sueco que brinda servicios financieros a consumidores y empresas en la UE. Trabajé en Northmill antes de que se le otorgara una licencia bancaria.",
      [
        "Mi principal tarea fue resolver problemas de análisis intensivos en cómputo en la organización.",
        [
          "Con mis análisis intensivos de cómputo contribuí a la toma de decisiones a nivel de alta dirección.",
          "Manejó problemas de Big Data antes de que el banco se expandiera a una infraestructura de TI dedicada.",
          "Evaluamos riesgos, predijimos tamaños de cartera y estimamos supuestos y KPI.",
          "Benchmarket algoritmos de aprendizaje automático versus métodos analíticos tradicionales."
        ],
        "Análisis de marketing:",
        [
          "Evaluó y valoró las palabras clave de Google AdWords para diferentes clasificaciones, horarios y grupos de clientes."
        ],
        "Análisis de comportamiento:",
        [
          "Realizó un análisis y categorización del comportamiento de los clientes y los datos de texto de transacciones utilizando expresiones regulares.",
          "Analizó a los analistas a los socios de Northmills en una contra-negociación. Resultado: Más de 14 millones de euros de ganancia extra en 5 años."
        ],
        "Modeló y simuló el comportamiento del cliente de Northmill Bank, basado en la infraestructura de TI subyacente, para pruebas de estrés crediticio y para soporte de decisiones.",
        "Asistió en los preparativos para la función del tesoro de Northmill Bank."
      ]
    ],
    "fr": [
      "Northmill Bank est une banque suédoise qui fournit des services financiers aux consommateurs et aux entreprises de l'UE. J'ai travaillé chez Northmill avant qu'ils ne reçoivent une licence bancaire.",
      [
        "Ma tâche principale était de résoudre des problèmes d'analyse intensifs en calcul dans l'organisation.",
        [
          "Avec mes analyses intensives en calcul, j'ai contribué à la prise de décision au niveau de la haute direction.",
          "Géré les problèmes de Big Data avant que la banque ne s'étende à une infrastructure informatique dédiée.",
          "Nous avons évalué les risques, prédit les tailles de portefeuille et estimé les hypothèses et les KPI.",
          "Benchmarket algorithmes d'apprentissage automatique par rapport aux méthodes analytiques traditionnelles."
        ],
        "Analyse marketing:",
        [
          "Évalué et évalué les mots clés Google AdWords pour différents classements, horaires et groupes de clients."
        ],
        "Analyse comportementale:",
        [
          "A effectué une analyse comportementale et une catégorisation des clients et des données de texte de transaction en utilisant des expressions régulières.",
          "A analysé les analystes aux partenaires de Northmills dans une contre-négociation. Résultat: plus de 14 millions d'euros de bénéfice supplémentaire en 5 ans."
        ],
        "Modélisé et simulé le comportement des clients de Northmill Bank, basé sur l'infrastructure informatique sous-jacente, pour les tests de stress de crédit et pour le support de décision.",
        "A aidé à la préparation de la fonction de trésorerie de Northmill Bank."
      ]
    ],
    "pt": [
      "O Northmill Bank é um banco sueco que fornece serviços financeiros a consumidores e empresas na UE. Trabalhei na Northmill antes de receberem uma licença bancária.",
      [
        "Minha principal tarefa era resolver problemas de análise intensiva de computação na organização.",
        [
          "Com minhas análises intensivas de computação, contribuí para a tomada de decisões no nível de alta gerência.",
          "Lidou com problemas de Big Data antes que o banco se expandisse para uma infraestrutura de TI dedicada.",
          "Avaliamos riscos, previmos tamanhos de portfólio e estimamos suposições e KPIs.",
          "Benchmarket algoritmos de aprendizado de máquina versus métodos analíticos tradicionais."
        ],
        "Análise de marketing:",
        [
          "Avaliou e precificou palavras-chave do Google AdWords para classificações, horários e grupos de clientes diferentes."
        ],
        "Análise comportamental:",
        [
          "Realizou análise comportamental e categorização de clientes e dados de texto de transação usando expressões regulares.",
          "Analisou os analistas para os parceiros da Northmills em uma contra-negociação. Resultado: mais de 14 milhões de euros de lucro extra em 5 anos."
        ],
        "Modelou e simulou o comportamento do cliente do Northmill Bank, com base na infraestrutura de TI subjacente, para testes de estresse de crédito e para suporte à decisão.",
        "Auxiliou nos preparativos para a função do tesouro do Northmill Bank."
      ]
    ],
    "tr": [
      "Northmill Bank, AB'deki tüketicilere ve işletmelere finansal hizmetler sunan İsveçli bir bankadır. Bankacılık lisansı verilmeden önce Northmill'de çalıştım.",
      [
        "Ana görevim organizasyondaki hesaplama yoğun analiz sorunlarını çözmekti.",
        [
          "Hesaplama yoğun analizlerimle üst düzey yönetim düzeyinde karar verme süreçlerine katkıda bulundum.",
          "Banka, ayrılmış BT altyapısına genişlemeden önce Büyük Veri sorunlarıyla uğraştı.",
          "Riskleri değerlendirdik, portföy boyutlarını tahmin ettik ve varsayımları ve KPI'ları tahmin ettik.",
          "Geleneksel analitik yöntemlere karşı makine öğrenimi algoritmalarını karşılaştırdık."
        ],
        "Pazarlama Analizi:",
        [
          "Farklı sıralamalar, zamanlar ve müşteri grupları için Google AdWords anahtar kelimelerini değerlendirdi ve fiyatlandırdı."
        ],
        "Davranışsal Analiz:",
        [
          "Düzenli ifadeleri kullanarak müşterilerin ve işlem metin verilerinin davranışsal analizini ve kategorizasyonunu gerçekleştirdi.",
          "Karşı müzakerelerde Northmills'in ortaklarına analistleri analiz etti. Sonuç: 5 yılda 14 milyon avrodan fazla ekstra kar."
        ],
        "Kredi stres testi ve karar destek için temel BT altyapısına dayalı olarak Northmill Bank müşteri davranışını modelledi ve simüle etti.",
        "Northmill Bank'in hazırlıklarına yardımcı oldu."
      ]
    ],
    "gr": [
      "Η Northmill Bank είναι μια σουηδική τράπεζα που παρέχει χρηματοοικονομικές υπηρεσίες σε καταναλωτές και επιχειρήσεις στην ΕΕ. Εργάστηκα στη Northmill πριν τους χορηγηθεί άδεια τραπεζικής.",
      [
        "Ο κύριος στόχος μου ήταν να επιλύσω προβλήματα ανάλυσης που απαιτούν υπολογισμό στον οργανισμό.",
        [
          "Με την ανάλυση υπολογισμού συνέβαλα στη διαδικασία λήψης αποφάσεων στο επίπεδο της ανώτατης διοίκησης.",
          "Χειρίστηκε προβλήματα Big Data πριν η τράπεζα επεκταθεί σε αφιερωμένη υποδομή IT.",
          "Εκτιμήσαμε τους κινδύνους, προβλέψαμε το μέγεθος του χαρτοφυλακίου και εκτιμήσαμε υποθέσεις και KPI.",
          "Συγκρίναμε αλγόριθμους μηχανικής μάθησης έναντι παραδοσιακών αναλυτικών μεθόδων."
        ],
        "Ανάλυση μάρκετινγκ:",
        [
          "Αξιολόγησε και τιμολόγησε λέξεις-κλειδιά Google AdWords για διαφορετικές κατατάξεις, ώρες και ομάδες πελατών."
        ],
        "Συμπεριφορική ανάλυση:",
        [
          "Πραγματοποίησε συμπεριφορική ανάλυση και κατηγοριοποίηση πελατών και δεδομένων κειμένου συναλλαγών χρησιμοποιώντας τακτικές εκφράσεις.",
          "Ανέλυσε τους αναλυτές στους εταίρους της Northmills σε μια αντιπαράθεση. Αποτέλεσμα: Πάνω από 14 εκατομμύρια ευρώ επιπλέον κέρδος σε 5 χρόνια."
        ],
        "Μοντελοποίησε και προσομοίωσε τη συμπεριφορά πελατών της Northmill Bank, με βάση την υποκείμενη υποδομή IT, για δοκιμές άγχους πίστωσης και για υποστήριξη λήψης αποφάσεων.",
        "Βοήθησε στις προετοιμασίες για τη λειτουργία ταμείου της Northmill Bank."
      ]
    ],
    "ru": [
      "Northmill Bank - это шведский банк, предоставляющий финансовые услуги потребителям и предприятиям в ЕС. Я работал в Northmill до того, как им была предоставлена банковская лицензия.",
      [
        "Моя основная задача - решать вычислительно интенсивные проблемы анализа в организации.",
        [
          "С помощью моих вычислительных анализов я внес вклад в процесс принятия решений на уровне топ-менеджмента.",
          "Обрабатывал проблемы Big Data до того, как банк расширился до выделенной ИТ-инфраструктуры.",
          "Мы оценили риски, предсказали размеры портфеля и оценили предположения и KPI.",
          "Сравнили алгоритмы машинного обучения с традиционными аналитическими методами."
        ],
        "Маркетинговый анализ:",
        [
          "Оценил и оценил ключевые слова Google AdWords для разных рейтингов, времени и групп клиентов."
        ],
        "Поведенческий анализ:",
        [
          "Проводил поведенческий анализ и категоризацию клиентов и текстовых данных транзакций с помощью регулярных выражений.",
          "Проанализировал аналитиков партнеров Northmills в контр-переговорах. Результат: более 14 млн. евро дополнительной прибыли за 5 лет."
        ],
        "Моделировал и симулировал поведение клиентов Northmill Bank на основе базовой ИТ-инфраструктуры для стресс-тестирования кредитов и для поддержки принятия решений.",
        "Помог в подготовке к функции казначейства Northmill Bank."
      ]
    ],
    "cn": [
      "Northmill Bank是一家瑞典银行，为欧盟的消费者和企业提供金融服务。 我在Northmill获得银行牌照之前就在那里工作了。",
      [
        "我的主要任务是解决组织中计算密集型分析问题。",
        [
          "通过我的计算分析，我为高级管理层的决策做出了贡献。",
          "在银行扩展到专用IT基础设施之前处理大数据问题。",
          "我们评估风险，预测投资组合规模并估计假设和KPI。",
          "对比机器学习算法与传统分析方法。"
        ],
        "市场分析：",
        [
          "评估和定价不同排名，时间和客户群的Google AdWords关键字。"
        ],
        "行为分析：",
        [
          "通过使用正则表达式执行客户和交易文本数据的行为分析和分类。",
          "分析Northmills的合作伙伴的分析师在反对谈判中。 结果：5年内超过1400万欧元的额外利润。"
        ],
        "建模和模拟Northmill Bank的客户行为，基于基础IT基础设施，用于信贷压力测试和决策支持。",
        "协助Northmill Bank财务部门的准备工作。"
      ]
    ],
    "my": [
      "Northmill Bank adalah bank Sweden yang menyediakan perkhidmatan kewangan kepada pengguna dan perniagaan di EU. Saya bekerja di Northmill sebelum mereka diberikan lesen bank.",
      [
        "Tugas utama saya adalah untuk menyelesaikan masalah analisis yang memerlukan pengiraan di dalam organisasi.",
        [
          "Dengan analisis pengiraan saya, saya menyumbang kepada proses membuat keputusan pada tahap pengurusan atasan.",
          "Menangani masalah Big Data sebelum bank berkembang ke infrastruktur IT yang didedikasikan.",
          "Kami menilai risiko, meramalkan saiz portfolio dan menganggarkan andaian dan KPI.",
          "Benchmark algoritma pembelajaran mesin berbanding kaedah analisis tradisional."
        ],
        "Analisis Pemasaran:",
        [
          "Menilai dan menentukan harga kata kunci Google AdWords untuk peringkat, masa dan kumpulan pelanggan yang berbeza."
        ],
        "Analisis Tingkah Laku:",
        [
          "Melakukan analisis tingkah laku dan pengelasan pelanggan dan data teks transaksi dengan menggunakan ungkapan biasa.",
          "Menganalisis analis kepada rakan kongsi Northmills dalam perbincangan balas. Hasil: Lebih daripada 14 juta EUR keuntungan tambahan dalam 5 tahun."
        ],
        "Memodelkan dan mensimulasikan tingkah laku pelanggan Northmill Bank, berdasarkan infrastruktur IT yang mendasari, untuk ujian tekanan kredit dan untuk sokongan keputusan.",
        "Membantu dalam persiapan untuk fungsi perbendaharaan Northmill Bank."
      ]
    ],
    "th": [
      "Northmill Bank เป็น ธนาคารสวีเดนที่ให้บริการทางการเงินแก่ผู้บริโภคและธุรกิจใน EU ฉันทำงานที่ Northmill ก่อนที่พวกเขาจะได้รับใบอนุญาตธนาคาร",
      [
        "งานหลักของฉันคือการแก้ปัญหาการวิเคราะห์ที่ต้องการการคำนวณในองค์กร",
        [
          "ด้วยการวิเคราะห์ที่ใช้การคำนวณของฉันฉันมีส่วนร่วมในการตัดสินใจในระดับบริหารสูงสุด",
          "จัดการปัญหาข้อมูลขนาดใหญ่ก่อนที่ธนาคารจะขยายโต้ตอบไปยังโครงสร้างพื้นฐาน IT ที่ได้รับการจัดสรร",
          "เราประเมินความเสี่ยงทำนายขนาดพอร์ตโฟลิโอและประเมินสมมติฐานและ KPI",
          "เปรียบเทียบอัลกอริทึมการเรียนรู้ของเครื่องกับวิธีการวิเคราะห์แบบดั้งเดิม"
        ],
        "การวิเคราะห์การตลาด:",
        [
          "ประเมินและกำหนดราคาคำสำคัญ Google AdWords สำหรับการจัดอันดับเวลาและกลุ่มลูกค้าที่แตกต่างกัน"
        ],
        "การวิเคราะห์พฤติกรรม:",
        [
          "ดำเนินการวิเคราะห์พฤติกรรมและจัดหมวดหมู่ของลูกค้าและข้อมูลข้อความธุรกรรมโดยใช้สูตรประจำตัว",
          "วิเคราะห์นักวิเคราะห์กับพันธมิตรกับ Northmills ในการต่อรองตรงข้าม ผลลัพธ์: กำไรเพิ่มเติมมากกว่า 14 ล้านยูโรใน 5 ปี"
        ],
        "จำลองและจำลองพฤติกรรมลูกค้า Northmill Bank ขึ้นอยู่กับโครงสร้างพื้นฐาน IT สำหรับการทดสอบเครดิตและสนับสนุนการตัดสินใจ",
        "ช่วยในการเตรียมการสำหรับฟังก์ชั่นการเงินของ Northmill Bank"
      ]
    ],
    "il": [
      "Northmill Bank היא בנק שוודי המספק שירותים פיננסיים לצרכנים ולעסקים באיחוד האירופי. עבדתי ב-Northmill לפני שקיבלו רישיון בנקאות.",
      [
        "המשימה העיקרית שלי היתה לפתור בעיות ניתוח מורכבות בארגון.",
        [
          "עם הניתוח החישובי שלי תרמתי לתהליך קבלת ההחלטות ברמת ההנהלה הגבוהה.",
          "טיפל בבעיות נתונים גדולים לפני שהבנק הרחיב לתשתית ה- IT המוקדשת.",
          "הערכנו סיכונים, חזנו גדלי תיקי השקעות והערכנו הנחות ו- KPI.",
          "Benchmarked אלגוריתמי למידת מכונה לעומת שיטות ניתוחיות מסורתיות."
        ],
        "ניתוח שיווק:",
        [
          "העריך והעריך מילות מפתח של Google AdWords עבור דירוגים, זמנים וקבוצות לקוחות שונות."
        ],
        "ניתוח התנהגותי:",
        [
          "ביצע ניתוח התנהגותי וסיווג של לקוחות ונתוני טקסט עסקאות על ידי ניצול ביטויים רגילים.",
          "ניתח את הניתוחים לנותני שירותים של Northmills במוות נגד. תוצאה: יותר מ- 14 מיליון יורו רווח נוסף במשך 5 שנים."
        ],
        "מודל ומודל Northmill Bank התנהגות הלקוח, על סמך התשתית ה- IT המתחתנת, לבדיקות לחץ אשראי ולתמיכה בקבלת החלטות.",
        "עזר בהכנות לתפקיד האוצר של Northmill Bank."
      ]
    ],
    "ae": [
      "Northmill Bank هي بنك سويدي يقدم خدمات مالية للمستهلكين والشركات في الاتحاد الأوروبي. عملت في Northmill قبل منحهم ترخيصًا مصرفيًا.",
      [
        "كانت مهمتي الرئيسية هي حل مشكلات التحليل المكثفة في المنظمة.",
        [
          "مع تحليلاتي المكثفة للحسابات ، ساهمت في عملية اتخاذ القرارات على مستوى الإدارة العليا.",
          "تعامل مع مشكلات البيانات الكبيرة قبل أن يتم توسيع البنك إلى بنية تحتية لتكنولوجيا المعلومات مخصصة.",
          "قيمنا المخاطر وتنبأنا بأحجام المحافظ وقدرنا الافتراضات و KPIs.",
          "مقارنة خوارزميات التعلم الآلي مقابل الأساليب التحليلية التقليدية."
        ],
        "تحليل التسويق:",
        [
          "قيمت وسعرت كلمات Google AdWords لتصنيفات وأوقات ومجموعات عملاء مختلفة."
        ],
        "تحليل السلوك:",
        [
          "أجرى تحليلات السلوك والتصنيف للعملاء وبيانات نص المعاملات باستخدام التعبيرات العادية.",
          "تحليل المحللين لشركاء Northmills في مفاوضة مضادة. النتيجة: أكثر من 14 مليون يورو ربح إضافي في 5 سنوات."
        ],
        "نمذجة ومحاكاة سلوك عملاء Northmill Bank ، استنادًا إلى البنية التحتية لتكنولوجيا المعلومات الأساسية ، لاختبار الضغط الائتماني ودعم اتخاذ القرارات.",
        "ساعد في التحضيرات لوظيفة خزانة Northmill Bank."
      ]
    ],
    "in": [
      "Northmill Bank एक स्वीडिश बैंक है जो यूरोपीय संघ में उपभोक्ताओं और व्यापारों को वित्तीय सेवाएं प्रदान करता है। मुझे बैंक लाइसेंस प्रदान किए जाने से पहले Northmill में काम किया गया था।",
      [
        "मेरा मुख्य कार्य तंत्रिक रूप से विश्लेषण समस्याओं को संगठन में हल करना था।",
        [
          "मेरे तंत्रिक विश्लेषण के साथ मैं शीर्ष प्रबंधन स्तर पर निर्णय लेने में योगदान दिया।",
          "बैंक विशेष आईटी बुनियादी ढांचे तक बड़े डेटा समस्याओं को संभाला।",
          "हमने जोखिमों का मूल्यांकन किया, पोर्टफोलियो के आकारों का अनुमान लगाया और अनुमान और केपीआई का अनुमान लगाया।",
          "पारंपरिक विश्लेषण पद्धतियों के बनाम मशीन सीखने के एल्गोरिदमों का बेंचमार्क किया।"
        ],
        "विपणन विश्लेषण:",
        [
          "विभिन्न रैंकिंग, समय और ग्राहक समूहों के लिए Google AdWords की कीमतों का मूल्यांकन किया।"
        ],
        "व्यवहार विश्लेषण:",
        [
          "नियमित अभिव्यक्तियों का उपयोग करके ग्राहकों और लेनदेन पाठ डेटा का व्यवहार विश्लेषण और वर्गीकरण किया।",
          "एक विरोध-वार्ता में Northmills के साथी विश्लेषकों का विश्लेषण किया। परिणाम: 5 वर्षों में 14 लाख यूरो से अधिक अतिरिक्त लाभ।"
        ],
        "नॉर्थमिल बैंक के ग्राहक व्यवहार का मॉडल बनाया और सिम्युलेट किया, आधारभूत आईटी बुनियादी ढांचे पर, क्रेडिट स्ट्रेस टेस्टिंग के लिए और निर्णय समर्थन के लिए।",
        "नॉर्थमिल बैंक के ट्रेजरी कार्य की तैयारी में मदद की।"
      ]
    ]
  },
  4: {
    "us": [
      "Ackebrink is a company that provides consultants to various market education insitutions within Sweden.",
      [
        "My main task was to teach mathematics and programming logic to students within computer science.",
        "Participated in the development of course material and course plans."
      ]
    ],
    "se": [
      "Ackebrink är ett företag som tillhandahåller konsulter till olika marknadsutbildningsinstitutioner inom Sverige.",
      [
        "Min huvuduppgift var att undervisa i matematik och programmeringslogik till elever inom datalogi.",
        "Deltog i utveckling av kursmaterial och kursplaner."
      ]
    ],
    "fi": [
      "Ackebrink on yritys, joka tarjoaa konsultteja eri markkinakoulutuslaitoksille Ruotsissa.",
      [
        "Päätehtäväni oli opettaa matematiikkaa ja ohjelmointilogiikkaa tietojenkäsittelytieteen opiskelijoille.",
        "Osallistui kurssimateriaalin ja kurssisuunnitelmien kehittämiseen."
      ]
    ],
    "no": [
      "Ackebrink er et selskap som leverer konsulenter til ulike markedsutdanningsinstitusjoner i Sverige.",
      [
        "Min hovedoppgave var å undervise i matematikk og programmeringslogikk for studenter innen informatikk.",
        "Deltok i utviklingen av kursmateriale og kursplaner."
      ]
    ],
    "de": [
      "Ackebrink ist ein Unternehmen, das Berater für verschiedene Marktbildungseinrichtungen in Schweden bereitstellt.",
      [
        "Meine Hauptaufgabe bestand darin, Mathematik und Programmierlogik für Studenten der Informatik zu unterrichten.",
        "Nahm an der Entwicklung von Kursmaterial und Kursplänen teil."
      ]
    ],
    "es": [
      "Ackebrink es una empresa que proporciona consultores a varias instituciones de educación de mercado dentro de Suecia.",
      [
        "Mi principal tarea fue enseñar matemáticas y lógica de programación a estudiantes de informática.",
        "Participó en el desarrollo de material y planes de estudio."
      ]
    ],
    "fr": [
      "Ackebrink est une société qui fournit des consultants à diverses institutions d'éducation du marché en Suède.",
      [
        "Ma tâche principale était d'enseigner les mathématiques et la logique de programmation aux étudiants en informatique.",
        "A participé au développement du matériel de cours et des plans de cours."
      ]
    ],
    "pt": [
      "Ackebrink é uma empresa que fornece consultores para várias instituições de educação de mercado dentro da Suécia.",
      [
        "Minha principal tarefa era ensinar matemática e lógica de programação para alunos de ciência da computação.",
        "Participou do desenvolvimento de material e planos de curso."
      ]
    ],
    "tr": [
      "Ackebrink, İsveç'teki çeşitli pazar eğitim kurumlarına danışmanlar sağlayan bir şirkettir.",
      [
        "Ana görevim bilgisayar bilimindeki öğrencilere matematik ve programlama mantığını öğretmekti.",
        "Ders materyali ve ders planlarının geliştirilmesine katıldı."
      ]
    ],
    "gr": [
      "Η Ackebrink είναι μια εταιρεία που παρέχει συμβούλους σε διάφορα ιδρύματα εκπαίδευσης αγοράς στη Σουηδία.",
      [
        "Ο κύριος ρόλος μου ήταν να διδάξω μαθηματικά και λογική προγραμματισμού σε φοιτητές πληροφορικής.",
        "Συμμετείχε στην ανάπτυξη υλικού μαθήματος και προγραμμάτων μαθημάτων."
      ]
    ],
    "ru": [
      "Ackebrink - это компания, которая предоставляет консультантов различным учреждениям рыночного образования в Швеции.",
      [
        "Моя основная задача - преподавать математику и логику программирования студентам по информатике.",
        "Участвовал в разработке учебных материалов и учебных планов."
      ]
    ],
    "cn": [
      "Ackebrink是一家为瑞典各种市场教育机构提供顾问的公司。",
      [
        "我的主要任务是教授计算机科学专业的学生数学和编程逻辑。",
        "参与课程材料和课程计划的开发。"
      ]
    ],
    "my": [
      "Ackebrink adalah syarikat yang menyediakan perunding kepada pelbagai institusi pendidikan pasaran di Sweden.",
      [
        "Tugas utama saya adalah mengajar matematik dan logik pemrograman kepada pelajar dalam sains komputer.",
        "Mengambil bahagian dalam pembangunan bahan kursus dan rancangan kursus."
      ]
    ],
    "th": [
      "Ackebrink เป็น บริษัท ที่ให้ที่ปรึกษาให้กับสถาบันการศึกษาตลาดต่าง ๆ ในสวีเดน",
      [
        "งานหลักของฉันคือการสอนคณิตศาสตร์และตรรกะการเขียนโปรแกรมให้กับนักศึกษาในวิทยาการคอมพิวเตอร์",
        "มีส่วนร่วมในการพัฒนาวัสดุการเรียนการสอนและแผนการเรียนการสอน"
      ]
    ],
    "ae": [
      "Ackebrink هي شركة توفر مستشارين لمؤسسات التعليم السوقية المختلفة داخل السويد.",
      [
        "كانت مهمتي الرئيسية هي تدريس الرياضيات ومنطق البرمجة لطلاب علوم الحاسب الآلي.",
        "شارك في تطوير المواد الدراسية وخطط الدورة."
      ]
    ],
    "il": [
      "Ackebrink היא חברה המספקת יועצים למספר מוסדות החינוך השונים בשוודיה.",
      [
        "המשימה העיקרית שלי היתה ללמד מתמטיקה ולוגיקת תכנות לתלמידים במדעי המחשב.",
        "השתתף בפיתוח חומרי הלימוד ותוכניות הקורס."
      ]
    ],
    "in": [
      "Ackebrink एक कंपनी है जो स्वीडन में विभिन्न बाजार शिक्षा संस्थानों को सलाहकार प्रदान करती है।",
      [
        "मेरा मुख्य कार्य गणित और कंप्यूटर विज्ञान में छात्रों को प्रोग्रामिंग तर्क सिखाना था।",
        "कोर्स सामग्री और कोर्स योजनाओं के विकास में भाग लिया।"
      ]
    ]
  },
  5: {
    "us": [
      "Nord Fondkommission specialized in managing funds and financial assets, for high-income earners in Sweden, where several financial products outperformed market indices. Nord Fondkommission lost its license for not following the rules of the Swedish Financial Supervisory Authority.",
      [
        "My main task was to perform risk and stress tests on structured products and portfolios.",
        "Had greatly varying job tasks, such as:",
        [
          "Had Chief Information roles.",
          "Developed automated scripts and tools for back-office use.",
          "Solved simple IT problems for the resellers of Nord Fondkommissions financial products."
        ]
      ]
    ],
    "se": [
      "På Nord Fondkommission specialiserade vi oss på att förvalta fonder och finansiella tillgångar, för höginkomsttagare i Sverige, där flera finansiella produkter överträffade marknadsindex. Nord Fondkommission förlorade sin licens för att inte följa reglerna för Finansinspektionen.",
      [
        "Min huvuduppgift var att utföra risk- och stresstester på strukturerade produkter och portföljer.",
        "Hade mycket varierande arbetsuppgifter, som:",
        [
          "Hade Chief Information roller.",
          "Utvecklade automatiserade skript och verktyg för backoffice-användning.",
          "Löste enklare IT-problem till återförsäljarna av Nord Fondkommissions finansiella produkter."
        ]
      ]
    ],
    "fi": [
      "Nord Fondkommission erikoistui rahastojen ja taloudellisten varojen hallintaan, korkean tulotason saajille Ruotsissa, jossa useat taloudelliset tuotteet ylittivät markkinaindeksit. Nord Fondkommission menetti lisenssinsä, koska se ei noudattanut Ruotsin Finanssivalvonnan sääntöjä.",
      [
        "Päätehtäväni oli suorittaa riski- ja stressitestejä strukturoiduille tuotteille ja salkuille.",
        "Työtehtävät vaihtelivat suuresti, kuten:",
        [
          "Oli Chief Information -rooleja.",
          "Kehitti automatisoituja skriptejä ja työkaluja backoffice-käyttöön.",
          "Ratkaisi yksinkertaisia IT-ongelmia Nord Fondkommissions taloudellisten tuotteiden jälleenmyyjille."
        ]
      ]
    ],
    "no": [
      "Nord Fondkommission spesialiserte seg på å forvalte fond og finansielle eiendeler, for personer med høy inntekt i Sverige, der flere finansielle produkter presterte bedre enn markedsindekser. Nord Fondkommission mistet lisensen sin for ikke å følge reglene til den svenske Finanstilsynet.",
      [
        "Min hovedoppgave var å utføre risiko- og stresstester på strukturerte produkter og porteføljer.",
        "Hadde svært varierte jobboppgaver, som:",
        [
          "Hadde Chief Information-roller.",
          "Utviklet automatiserte skript og verktøy for backoffice-bruk.",
          "Løste enkle IT-problemer for forhandlerne av Nord Fondkommissions finansielle produkter."
        ]
      ]
    ],
    "de": [
      "Nord Fondkommission hat sich auf die Verwaltung von Fonds und Finanzanlagen für Gutverdiener in Schweden spezialisiert, wo mehrere Finanzprodukte die Marktindizes übertroffen haben. Nord Fondkommission hat seine Lizenz verloren, weil es die Regeln der schwedischen Finanzaufsichtsbehörde nicht befolgt hat.",
      [
        "Meine Hauptaufgabe bestand darin, Risiko- und Stresstests für strukturierte Produkte und Portfolios durchzuführen.",
        "Hatte sehr unterschiedliche Aufgaben, wie z.B.:",
        [
          "Hatte Chief Information-Rollen.",
          "Entwickelte automatisierte Skripte und Tools für den Backoffice-Einsatz.",
          "Löste einfache IT-Probleme für die Wiederverkäufer von Nord Fondkommissions Finanzprodukten."
        ]
      ]
    ],
    "es": [
      "Nord Fondkommission se especializó en la gestión de fondos y activos financieros, para personas con altos ingresos en Suecia, donde varios productos financieros superaron los índices de mercado. Nord Fondkommission perdió su licencia por no seguir las reglas de la Autoridad Sueca de Supervisión Financiera.",
      [
        "Mi principal tarea fue realizar pruebas de riesgo y estrés en productos y carteras estructurados.",
        "Tenía tareas de trabajo muy variadas, como:",
        [
          "Tenía roles de información principal.",
          "Desarrolló scripts y herramientas automatizados para uso en back-office.",
          "Resolvió problemas de TI simples para los revendedores de los productos financieros de Nord Fondkommission."
        ]
      ]
    ],
    "fr": [
      "Nord Fondkommission s'est spécialisé dans la gestion de fonds et d'actifs financiers, pour les personnes à hauts revenus en Suède, où plusieurs produits financiers ont dépassé les indices de marché. Nord Fondkommission a perdu sa licence pour ne pas avoir suivi les règles de l'Autorité suédoise de surveillance financière.",
      [
        "Ma principale tâche était d'effectuer des tests de risque et de stress sur des produits et des portefeuilles structurés.",
        "Avait des tâches très variées, comme:",
        [
          "Avait des rôles d'information en chef.",
          "A développé des scripts et des outils automatisés pour une utilisation en back-office.",
          "A résolu des problèmes informatiques simples pour les revendeurs des produits financiers de Nord Fondkommission."
        ]
      ]
    ],
    "pt": [
      "A Nord Fondkommission especializou-se na gestão de fundos e ativos financeiros, para pessoas com alto rendimento na Suécia, onde vários produtos financeiros superaram os índices de mercado. A Nord Fondkommission perdeu sua licença por não seguir as regras da Autoridade Sueca de Supervisão Financeira.",
      [
        "Minha principal tarefa era realizar testes de risco e estresse em produtos e portfólios estruturados.",
        "Tinha tarefas de trabalho muito variadas, como:",
        [
          "Tinha funções de informação-chefe.",
          "Desenvolveu scripts e ferramentas automatizadas para uso em back-office.",
          "Resolveu problemas simples de TI para os revendedores dos produtos financeiros da Nord Fondkommission."
        ]
      ]
    ],
    "tr": [
      "Nord Fondkommission, İsveç'teki yüksek gelirli kişiler için fon ve finansal varlıkların yönetiminde uzmanlaşmıştır, burada birkaç finansal ürün piyasa endekslerini aşmıştır. Nord Fondkommission, İsveç Finansal Denetim Otoritesi'nin kurallarını izlemediği için lisansını kaybetti.",
      [
        "Ana görevim yapılandırılmış ürünler ve portföyler üzerinde risk ve stres testleri yapmaktı.",
        "Çok çeşitli iş görevleri vardı, örneğin:",
        [
          "Baş bilgi rolleri vardı.",
          "Back-office kullanımı için otomatikleştirilmiş komut dosyaları ve araçlar geliştirdi.",
          "Nord Fondkommission finansal ürünlerinin bayileri için basit BT sorunlarını çözdü."
        ]
      ]
    ],
    "gr": [
      "Η Nord Fondkommission εξειδικεύεται στη διαχείριση κεφαλαίων και χρηματοοικονομικών περιουσιακών στοιχείων, για υψηλού εισοδήματος στη Σουηδία, όπου αρκετά χρηματοοικονομικά προϊόντα υπερέβησαν τους δείκτες αγοράς. Η Nord Fondkommission έχασε την άδειά της για μη τήρηση των κανόνων της Σουηδικής Αρχής Χρηματοπιστωτικής Εποπτείας.",
      [
        "Η κύρια εργασία μου ήταν να πραγματοποιήσω δοκιμές κινδύνου και άγχους σε δομημένα προϊόντα και σε πορτοφόλια.",
        "Είχε πολύ διαφορετικές εργασιακές απαιτήσεις, όπως:",
        [
          "Είχε ρόλους Αρχηγού Πληροφοριών.",
          "Ανέπτυξε αυτοματοποιημένα σενάρια και εργαλεία για χρήση στο back-office.",
          "Λύνει απλά προβλήματα Πληροφορικής για τους αντιπροσώπους των χρηματοοικονομικών προϊόντων της Nord Fondkommission."
        ]
      ]
    ],
    "ru": [
      "Nord Fondkommission специализируется на управлении фондами и финансовыми активами для лиц с высоким доходом в Швеции, где несколько финансовых продуктов превзошли рыночные индексы. Nord Fondkommission потерял лицензию за несоблюдение правил Шведского финансового надзорного ведомства.",
      [
        "Моя основная задача - проводить рисковые и стресс-тесты структурированных продуктов и портфелей.",
        "Имел очень разнообразные задачи, такие как:",
        [
          "Имел роли главной информации.",
          "Разработал автоматизированные сценарии и инструменты для использования в бэк-офисе.",
          "Решал простые проблемы с ИТ для перекупщиков финансовых продуктов Nord Fondkommission."
        ]
      ]
    ],
    "cn": [
      "Nord Fondkommission专门管理瑞典高收入者的基金和金融资产，其中有几种金融产品的表现超过了市场指数。 Nord Fondkommission因未遵守瑞典金融监管机构的规定而失去了执照。",
      [
        "我的主要任务是对结构化产品和投资组合进行风险和压力测试。",
        "工作任务差异很大，例如：",
        [
          "担任首席信息官。",
          "为后台办公室开发自动脚本和工具。",
          "解决Nord Fondkommission金融产品的转售商的简单IT问题。"
        ]
      ]
    ],
    "my": [
      "Nord Fondkommission mengkhususkan diri dalam mengurus dana dan aset kewangan, untuk pendapatan tinggi di Sweden, di mana beberapa produk kewangan mengatasi indeks pasaran. Nord Fondkommission kehilangan lesen mereka kerana tidak mengikuti peraturan Pihak Berkuasa Pengawasan Kewangan Sweden.",
      [
        "Tugas utama saya adalah untuk melakukan ujian risiko dan tekanan pada produk dan portfolio berstruktur.",
        "Memiliki tugas kerja yang sangat berbeza, seperti:",
        [
          "Memiliki peranan Ketua Maklumat.",
          "Membangunkan skrip dan alat automatik untuk kegunaan pejabat belakang.",
          "Menyelesaikan masalah IT mudah untuk penjual semula produk kewangan Nord Fondkommission."
        ]
      ]
    ],
    "th": [
      "Nord Fondkommission เชี่ยวชาญในการจัดการกองทุนและสินทรัพย์ทางการเงินสำหรับผู้มีรายได้สูงในสวีเดนที่ผลิตภัณฑ์ทางการเงินหลายรายการมีผลงานดีกว่าดัชนีตลาด Nord Fondkommission สูญเสียใบอนุญาตของตนเพราะไม่ปฏิบัติตามกฎของหน่วยงานการกำกับดูแลทางการเงินของสวีเดน",
      [
        "งานหลักของฉันคือการทดสอบความเสี่ยงและความเครียดในผลิตภัณฑ์และพอร์ตการลงทุนที่มีโครงสร้าง",
        "มีงานที่แตกต่างกันมาก เช่น:",
        [
          "มีบทบาทหลักของหัวหน้าสารสนเทศ",
          "พัฒนาสคริปต์และเครื่องมืออัตโนมัติสำหรับใช้ในสำนักงานด้านหลัง",
          "แก้ไขปัญหาไอทีที่ง่ายขึ้นสำหรับผู้ค้าปลีกผลิตภัณฑ์ทางการเงินของ Nord Fondkommission"
        ]
      ]
    ],
    "ae": [
      "Nord Fondkommission متخصصة في إدارة الصناديق والأصول المالية ، لأصحاب الدخل العالي في السويد ، حيث تفوقت العديد من المنتجات المالية على مؤشرات السوق. فقدت Nord Fondkommission ترخيصها لعدم اتباع قواعد هيئة الرقابة المالية السويدية.",
      [
        "كانت مهمتي الرئيسية هي إجراء اختبارات المخاطر والضغوط على المنتجات المنظمة والمحافظ.",
        "كانت لديها مهام عمل متنوعة للغاية ، مثل:",
        [
          "كان لديها أدوار المعلومات الرئيسية.",
          "طورت النصوص والأدوات الآلية للاستخدام في الخلفية.",
          "حلت مشاكل تكنولوجيا المعلومات البسيطة لبائعي منتجات Nord Fondkommission المالية."
        ]
      ]
    ],
    "il": [
      "Nord Fondkommission מתמחה בניהול קרנות ונכסים פיננסיים, עבור עושר גבוה בשוודיה, שבה מספר מוצרים פיננסיים עקבו אחר מדדי השוק. Nord Fondkommission איבד את הרישיון שלו על אי הישמור על חוקי הרשות השוודית לפיקוח על פיננסים.",
      [
        "המשימה העיקרית שלי היתה לבצע בדיקות סיכון ולחץ על מוצרים מובנים ופורטפוליו.",
        "היה לי משימות עבודה מאוד שונות, כגון:",
        [
          "היה לי תפקידי מידע ראשיים.",
          "פיתח סקריפטים וכלים אוטומטיים לשימוש במשרד האחורי.",
          "פתר בעיות טכנולוגיות מידע פשוטות עבור סוחרי מוצרים פיננסיים של Nord Fondkommission."
        ]
      ]
    ],
    "in": [
      "Nord Fondkommission ने फंड और वित्तीय संपत्तियों का प्रबंधन करने में विशेषज्ञ होने के लिए विशेषज्ञों की पेशकश की, जो स्वीडन में उच्च आय वालों के लिए वित्तीय उत्पादों के कई बाजार सूचकांकों से बेहतर प्रदर्शन करते हैं। Nord Fondkommission ने स्वीडिश फाइनेंशियल सुपरवाइजन अथॉरिटी के नियमों का पालन न करने के लिए अपना लाइसेंस खो दिया।",
      [
        "मेरा मुख्य कार्य संरचित उत्पादों और पोर्टफोलियों पर जोखिम और तनाव परीक्षण करना था।",
        "बहुत भिन्न कार्य कार्य थे, जैसे:",
        [
          "मुख्य सूचना भूमिकाओं थे।",
          "बैक ऑफिस के उपयोग के लिए स्वचालित स्क्रिप्ट और उपकरण विकसित किए।",
          "Nord Fondkommission के वित्तीय उत्पादों के पुनर्विक्रेताओं के लिए सरल आईटी समस्याओं को हल किया।"
        ]
      ]
    ]
  },
  6: {
    "us": [
      "I was the owner of the sole proprietorship Multitronics, which I terminated in 2014. (My company should not be confused with the new Multitronics which has other owners)",
      [
        "Imported new electronics and computer hardware from Asia as well as bought and sold used computers.",
        "Performed installations and IT-help.",
        "Built webpages."
      ]
    ],
    "se": [
      "Jag var ägaren till det enskilda företaget Multitronics, som jag avslutade 2014. (Mitt företag bör inte förväxlas med det nya Multitronics som har andra ägare)",
      [
        "Importerade ny elektronik och dator hårdvara från Asien samt köpte och sålde begagnade datorer.",
        "Utförde installationer och IT-hjälp.",
        "Bygge av webbsidor."
      ]
    ],
    "fi": [
      "Olin yksinoikeuden omistaja Multitronics, jonka lopetin vuonna 2014. (Yritystäni ei pidä sekoittaa uuteen Multitronicsiin, jolla on muita omistajia)",
      [
        "Tuonut uutta elektroniikkaa ja tietokoneiden laitteistoja Aasiasta sekä ostanut ja myynyt käytettyjä tietokoneita.",
        "Suoritti asennuksia ja IT-apua.",
        "Rakennettu verkkosivuja."
      ]
    ],
    "no": [
      "Jeg var eier av enkeltpersonforetaket Multitronics, som jeg avsluttet i 2014. (Selskapet mitt må ikke forveksles med det nye Multitronics som har andre eiere)",
      [
        "Importerte ny elektronikk og datamaskinvare fra Asia, samt kjøpte og solgte brukte datamaskiner.",
        "Utførte installasjoner og IT-hjelp.",
        "Bygget nettsider."
      ]
    ],
    "de": [
      "Ich war der Eigentümer des Einzelunternehmens Multitronics, das ich 2014 beendete. (Mein Unternehmen sollte nicht mit dem neuen Multitronics verwechselt werden, das andere Eigentümer hat)",
      [
        "Importierte neue Elektronik und Computerhardware aus Asien sowie gekaufte und verkaufte gebrauchte Computer.",
        "Führte Installationen und IT-Hilfe durch.",
        "Gebaute Webseiten."
      ]
    ],
    "es": [
      "Yo era el dueño de la empresa unipersonal Multitronics, que terminé en 2014. (Mi empresa no debe confundirse con el nuevo Multitronics que tiene otros propietarios)",
      [
        "Importó nuevos productos electrónicos y hardware de computadora de Asia, así como compró y vendió computadoras usadas.",
        "Realizó instalaciones y ayuda de TI.",
        "Construido páginas web."
      ]
    ],
    "fr": [
      "J'étais propriétaire de la société Multitronics, que j'ai terminée en 2014. (Ma société ne doit pas être confondue avec la nouvelle Multitronics qui a d'autres propriétaires)",
      [
        "Importé de nouveaux produits électroniques et du matériel informatique d'Asie ainsi que l'achat et la vente d'ordinateurs d'occasion.",
        "Effectué des installations et de l'aide informatique.",
        "Construit des pages Web."
      ]
    ],
    "pt": [
      "Eu era o proprietário da empresa individual Multitronics, que terminei em 2014. (Minha empresa não deve ser confundida com a nova Multitronics que tem outros proprietários)",
      [
        "Importou novos produtos eletrônicos e hardware de computador da Ásia, bem como comprou e vendeu computadores usados.",
        "Realizou instalações e ajuda de TI.",
        "Construído páginas da web."
      ]
    ],
    "tr": [
      "2014 yılında sona erdirdiğim tek kişilik şirket Multitronics'in sahibiydim. (Şirketim, diğer sahipleri olan yeni Multitronics ile karıştırılmamalıdır)",
      [
        "Asya'dan yeni elektronik ve bilgisayar donanımı ithal etti ve kullanılmış bilgisayarlar satın aldı ve sattı.",
        "Kurulumlar ve BT yardımı yaptı.",
        "Web sayfaları inşa etti."
      ]
    ],
    "gr": [
      "Ήμουν ο ιδιοκτήτης της εταιρείας προσώπου Multitronics, την οποία τερμάτισα το 2014. (Η εταιρεία μου δεν πρέπει να συγχέεται με τη νέα Multitronics που έχει άλλους ιδιοκτήτες)",
      [
        "Εισήγαγε νέα ηλεκτρονικά και υλικά υπολογιστών από την Ασία καθώς και αγόρασε και πούλησε μεταχειρισμένους υπολογιστές.",
        "Πραγματοποίησε εγκαταστάσεις και βοήθεια στην τεχνολογία της πληροφορίας.",
        "Κτίστηκαν ιστοσελίδες."
      ]
    ],
    "ru": [
      "Я был владельцем частной фирмы Multitronics, которую я завершил в 2014 году. (Мою компанию не следует путать с новой Multitronics, которая имеет других владельцев)",
      [
        "Импортировал новую электронику и компьютерное оборудование из Азии, а также покупал и продавал подержанные компьютеры.",
        "Выполнял установки и IT-помощь.",
        "Построенные веб-страницы."
      ]
    ],
    "cn": [
      "我是独资企业Multitronics的所有者，该企业于2014年终止。 （我的公司不应与新的Multitronics混淆，该公司有其他所有者）",
      [
        "从亚洲进口新电子产品和计算机硬件，以及购买和出售二手计算机。",
        "执行安装和IT帮助。",
        "建立网页。"
      ]
    ],
    "my": [
      "Saya adalah pemilik syarikat Multitronics, yang saya tamatkan pada tahun 2014. (Syarikat saya tidak boleh dikelirukan dengan Multitronics baru yang mempunyai pemilik lain)",
      [
        "Memasuki elektronik baru dan perkakasan komputer dari Asia serta membeli dan menjual komputer terpakai.",
        "Melakukan pemasangan dan bantuan IT.",
        "Membina laman web."
      ]
    ],
    "th": [
      "ฉันเป็นเจ้าของ Multitronics ซึ่งฉันสิ้นสุดลงในปี 2014 (บริษัทของฉันไม่ควรสับสนกับ Multitronics ใหม่ที่มีเจ้าของอื่น)",
      [
        "นำเข้าอิเล็กทรอนิกส์และฮาร์ดแวร์คอมพิวเตอร์ใหม่จากเอเชียและซื้อขายคอมพิวเตอร์มือสอง",
        "ดำเนินการติดตั้งและช่วยเหลือด้านไอที",
        "สร้างเว็บไซต์"
      ]
    ],
    "ae": [
      "كنت مالكًا لشركة Multitronics ذات المسؤولية المحدودة ، والتي أنهيتها في عام 2014. (لا يجب الخلط بين شركتي وشركة Multitronics الجديدة التي لها مالكون آخرون)",
      [
        "استوردت إلكترونيات وأجهزة كمبيوتر جديدة من آسيا ، بالإضافة إلى شراء وبيع أجهزة الكمبيوتر المستعملة.",
        "أجرى التثبيتات والمساعدة في تكنولوجيا المعلومات.",
        "بناء صفحات الويب."
      ]
    ],
    "il": [
      "הייתי בעלים של החברה הבלעדית Multitronics, שביטלתי בשנת 2014. (החברה שלי לא צריכה להתבלבל עם ה-Multitronics החדשה שיש לה בעלים אחרים)",
      [
        "ייבוא אלקטרוניקה חדשה וחומרה למחשב מאסיה וגם קנה ומכר מחשבים משומשים.",
        "ביצע התקנות ועזרה ב- IT.",
        "בניית דפי אינטרנט."
      ]
    ],
    "in": [
      "मैं 2014 में समाप्त किए गए एकल स्वामित्व कंपनी मल्टीट्रोनिक्स के मालिक था। (मेरी कंपनी को नए मल्टीट्रोनिक्स से गलत न करें जिसके पास अन्य मालिक हैं)",
      [
        "एशिया से नई इलेक्ट्रॉनिक्स और कंप्यूटर हार्डवेयर आयात किए और उपयोग किए गए कंप्यूटर खरीदे और बेचे।",
        "स्थापनाएं और आईटी मदद की प्रदान की।",
        "वेब पेज बनाएं।"
      ]
    ]
  },
  7: {
    "us": [
      "Princess Chulabhorn's College Phitsanulok is a science high school for talented and gifted children in Thailand.",
      [
        "My main task was to teach Mathematics and English to junior high school and high school students.",
        "Also participated in the development of course materials and course plans."
      ]
    ],
    "se": [
      "Princess Chulabhorn's College Phitsanulok är en naturvetenskaplig högskola för begåvade och begåvade barn i Thailand.",
      [
        "Min huvuduppgift var att lära matematik och engelska till högstadie- och gymnasieelever.",
        "Medverkade även i utvecklingen av kursmaterial och kursplaner."
      ]
    ],
    "fi": [
      "Princess Chulabhornin College Phitsanulok on luonnontieteellinen korkeakoulu lahjakkaille ja lahjakkaille lapsille Thaimaassa.",
      [
        "Päätehtäväni oli opettaa matematiikkaa ja englantia yläasteen ja lukion opiskelijoille.",
        "Osallistui myös kurssimateriaalien ja kurssisuunnitelmien kehittämiseen."
      ]
    ],
    "no": [
      "Princess Chulabhorn's College Phitsanulok er en vitenskapelig høyskole for talentfulle og begavede barn i Thailand.",
      [
        "Min hovedoppgave var å undervise matematikk og engelsk til ungdomsskole og videregående skoleelever.",
        "Deltok også i utviklingen av kursmateriell og kursplaner."
      ]
    ],
    "de": [
      "Princess Chulabhorn's College Phitsanulok ist ein naturwissenschaftliches College für talentierte und begabte Kinder in Thailand.",
      [
        "Meine Hauptaufgabe bestand darin, Mathematik und Englisch für Schüler der Mittel- und Oberstufe zu unterrichten.",
        "Nahm auch an der Entwicklung von Kursmaterialien und Kursplänen teil."
      ]
    ],
    "es": [
      "Princess Chulabhorn's College Phitsanulok es una escuela secundaria de ciencias para niños talentosos y dotados en Tailandia.",
      [
        "Mi principal tarea fue enseñar matemáticas e inglés a estudiantes de secundaria y preparatoria.",
        "También participó en el desarrollo de materiales y planes de estudio."
      ]
    ],
    "fr": [
      "Princess Chulabhorn's College Phitsanulok est un lycée scientifique pour les enfants talentueux et doués en Thaïlande.",
      [
        "Ma tâche principale était d'enseigner les mathématiques et l'anglais aux élèves du secondaire et du secondaire.",
        "A également participé au développement de matériel et de plans de cours."
      ]
    ],
    "pt": [
      "Princess Chulabhorn's College Phitsanulok é uma escola secundária de ciências para crianças talentosas e dotadas na Tailândia.",
      [
        "Minha principal tarefa era ensinar matemática e inglês para alunos do ensino fundamental e médio.",
        "Também participou do desenvolvimento de materiais e planos de curso."
      ]
    ],
    "tr": [
      "Princess Chulabhorn's College Phitsanulok, Tayland'daki yetenekli ve yetenekli çocuklar için bir fen lisesidir.",
      [
        "Ana görevim ortaokul ve lise öğrencilerine matematik ve İngilizce öğretmekti.",
        "Ayrıca ders materyallerinin ve ders planlarının geliştirilmesine katıldı."
      ]
    ],
    "gr": [
      "Το Princess Chulabhorn's College Phitsanulok είναι ένα επιστημονικό λύκειο για ταλαντούχα και ταλαντούχα παιδιά στην Ταϊλάνδη.",
      [
        "Ο κύριος στόχος μου ήταν να διδάξω μαθηματικά και αγγλικά σε μαθητές γυμνασίου και λυκείου.",
        "Συμμετείχε επίσης στην ανάπτυξη υλικού και προγραμμάτων μαθημάτων."
      ]
    ],
    "ru": [
      "Колледж принцессы Чулабхорн в Фитсанулоке - это научный колледж для талантливых и одаренных детей в Таиланде.",
      [
        "Моя основная задача - преподавать математику и английский язык учащимся средней и старшей школы.",
        "Также принимал участие в разработке учебных материалов и учебных планов."
      ]
    ],
    "cn": [
      "Princess Chulabhorn's College Phitsanulok是泰国天才和天才儿童的科学高中。",
      [
        "我的主要任务是教授初中和高中学生的数学和英语。",
        "还参与了课程材料和课程计划的开发。"
      ]
    ],
    "my": [
      "Princess Chulabhorn's College Phitsanulok adalah sekolah menengah sains untuk kanak-kanak berbakat dan berbakat di Thailand.",
      [
        "Tugas utama saya adalah mengajar Matematik dan Bahasa Inggeris kepada pelajar sekolah menengah dan sekolah menengah.",
        "Juga mengambil bahagian dalam pembangunan bahan kursus dan pelan kursus."
      ]
    ],
    "th": [
      "Princess Chulabhorn's College Phitsanulok เป็นวิทยาลัยวิทยาศาสตร์สำหรับเด็กที่มีความสามารถและมีพรสวรรค์ในประเทศไทย",
      [
        "งานหลักของฉันคือการสอนคณิตศาสตร์และภาษาอังกฤษให้กับนักเรียนมัธยมต้นและมัธยมปลาย",
        "เข้าร่วมในการพัฒนาวัสดุการเรียนการสอนและแผนการเรียนการสอน"
      ]
    ],
    "ae": [
      "كلية الأميرة تشولابهورن في فيتسانولوك هي كلية علوم للأطفال الموهوبين والموهوبين في تايلاند.",
      [
        "كانت مهمتي الرئيسية هي تدريس الرياضيات واللغة الإنجليزية لطلاب المدارس الإعدادية والثانوية.",
        "شارك أيضًا في تطوير مواد الدورة وخطط الدورة."
      ]
    ],
    "il": [
      "קולג 'פרינסס צ'ולאבהורן בפיטסנולוק היא קולג 'מדע לילדים מוכשרים ומוכשרים בתאילנד.",
      [
        "המשימה העיקרית שלי היתה ללמד מתמטיקה ואנגלית לתלמידי בית הספר היסודי והתיכון.",
        "השתתפתי גם בפיתוח חומרי הלימוד ותוכניות הלימודים."
      ]
    ],
    "in": [
      "प्रिंसेस चुलाभोर्न कॉलेज फिटसानुलोक थाईलैंड में प्रतिभाशाली और प्रतिभाशाली बच्चों के लिए एक विज्ञान महाविद्यालय है।",
      [
        "मेरा मुख्य कार्य माध्यमिक और उच्च माध्यमिक विद्यालय के छात्रों को गणित और अंग्रेजी सिखाना था।",
        "कोर्स सामग्री और कोर्स योजनाओं के विकास में भी भाग लिया।"
      ]
    ]
  },
  8: {
    "us": [
      "I was the owner of the sole proprietorship Multitronics, which I terminated in 2014. (My company should not be confused with the new Multitronics which has other owners)",
      [
        "Imported new electronics and computer hardware from Asia as well as bought and sold used computers.",
        "Performed installations and IT-help.",
        "Built webpages."
      ]
    ],
    "se": [
      "En lista på arbeten sedan min barndom:",
      [
        "Reklamutdelare, städare, säljare, telefonsäljare, lärare, reseguide och eventarrangör.",
        "Har arbetat i Sverige, Spanien, Portugal, Thailand, Cambodia och Japan."
      ]
    ],
    "fi": [
      "Luettelo töistäni lapsuudestani lähtien:",
      [
        "Mainostenjakaja, siivooja, myyjä, puhelinmyyjä, opettaja, matkaopas ja tapahtumajärjestäjä.",
        "Olen työskennellyt Ruotsissa, Espanjassa, Portugalissa, Thaimaassa, Kambodžassa ja Japanissa."
      ]
    ],
    "no": [
      "En liste over jobber siden barndommen:",
      [
        "Reklameutdeler, renholder, selger, telefonselger, lærer, reiseguide og arrangementarrangør.",
        "Har jobbet i Sverige, Spania, Portugal, Thailand, Kambodsja og Japan."
      ]
    ],
    "de": [
      "Eine Liste der Jobs seit meiner Kindheit:",
      [
        "Werbeverteiler, Reiniger, Verkäufer, Telefonverkäufer, Lehrer, Reiseleiter und Veranstalter.",
        "Habe in Schweden, Spanien, Portugal, Thailand, Kambodscha und Japan gearbeitet."
      ]
    ],
    "es": [
      "Una lista de trabajos desde mi infancia:",
      [
        "Repartidor de publicidad, limpiador, vendedor, teleoperador, maestro, guía turístico y organizador de eventos.",
        "He trabajado en Suecia, España, Portugal, Tailandia, Camboya y Japón."
      ]
    ],
    "fr": [
      "Une liste d'emplois depuis mon enfance:",
      [
        "Distributeur de publicité, nettoyeur, vendeur, télévendeur, enseignant, guide touristique et organisateur d'événements.",
        "J'ai travaillé en Suède, Espagne, Portugal, Thaïlande, Cambodge et Japon."
      ]
    ],
    "pt": [
      "Uma lista de empregos desde a minha infância:",
      [
        "Distribuidor de publicidade, faxineiro, vendedor, vendedor por telefone, professor, guia turístico e organizador de eventos.",
        "Trabalhei na Suécia, Espanha, Portugal, Tailândia, Camboja e Japão."
      ]
    ],
    "tr": [
      "Çocukluğumdan beri işlerin bir listesi:",
      [
        "Reklam dağıtıcı, temizlikçi, satıcı, telefon satıcısı, öğretmen, rehber ve organizatör.",
        "İsveç, İspanya, Portekiz, Tayland, Kamboçya ve Japonya'da çalıştı."
      ]
    ],
    "gr": [
      "Μια λίστα με εργασίες από την παιδική μου ηλικία:",
      [
        "Διανομέας διαφημίσεων, καθαριστής, πωλητής, τηλεφωνικός πωλητής, δάσκαλος, τουριστικός οδηγός και διοργανωτής εκδηλώσεων.",
        "Έχει εργαστεί στη Σουηδία, Ισπανία, Πορτογαλία, Ταϊλάνδη, Καμπότζη και Ιαπωνία."
      ]
    ],
    "ru": [
      "Список работ с детства:",
      [
        "Распространитель рекламы, уборщик, продавец, телемаркетолог, учитель, гид и организатор мероприятий.",
        "Работал в Швеции, Испании, Португалии, Таиланде, Камбодже и Японии."
      ]
    ],
    "cn": [
      "自童年以来的工作列表：",
      [
        "广告分发员，清洁工，销售员，电话销售员，教师，导游和活动组织者。",
        "曾在瑞典，西班牙，葡萄牙，泰国，柬埔寨和日本工作。"
      ]
    ],
    "my": [
      "Senarai pekerjaan saya sejak kecil:",
      [
        "Pengedar iklan, pembersih, penjual, penjual telefon, guru, pemandu pelancong dan penganjur acara.",
        "Telah bekerja di Sweden, Sepanyol, Portugal, Thailand, Kemboja dan Jepun."
      ]
    ],
    "th": [
      "รายการงานตั้งแต่วัยเด็ก:",
      [
        "ผู้แจกโฆษณา, คนทำความสะอาด, พนักงานขาย, พนักงานขายโทรศัพท์, ครู, ไกด์ท่องเที่ยวและผู้จัดงาน",
        "เคยทำงานในสวีเดน สเปน โปรตุเกส ประเทศไทย กัมพูชาและญี่ปุ่น"
      ]
    ],
    "ae": [
      "قائمة بالوظائف منذ طفولتي:",
      [
        "موزع الإعلانات ، منظف ، بائع ، بائع هاتف ، مدرس ، مرشد سياحي ومنظم أحداث.",
        "عملت في السويد وإسبانيا والبرتغال وتايلاند وكمبوديا واليابان."
      ]
    ],
    "il": [
      "רשימת עבודות מאז ילדותי:",
      [
        "מפיץ פרסומות, מנקה, מוכר, מוכר טלפונים, מורה, מדריך תיירים ומארגן אירועים.",
        "עבדתי בשוודיה, ספרד, פורטוגל, תאילנד, קמבודיה ויפן."
      ]
    ],
    "in": [
      "बचपन से कामों की सूची:",
      [
        "विज्ञापन वितरक, क्लीनर, विक्रेता, टेलीफोन विक्रेता, शिक्षक, यात्रा मार्गदर्शक और आयोजक।",
        "स्वीडन, स्पेन, पुर्तगाल, थाईलैंड, कम्बोडिया और जापान में काम किया है।"
      ]
    ]
  }
};
const education_history = {
  1: {
    "date-from": "2022-2",
    "date-to": "2022-11",
    "institution": "Lexicon",
    "city": "Stockholm",
    "country": "Sweden"
  },
  2: {
    "date-from": "2012-11",
    "date-to": "2013-4",
    "institution": "KTH",
    "city": "Stockholm",
    "country": "Sweden"
  },
  3: {
    "date-from": "1994-9",
    "date-to": "1999-2",
    "institution": "KTH",
    "city": "Stockholm",
    "country": "Sweden"
  },
  4: {
    "date-from": "2003-9",
    "date-to": "2004-10",
    "institution": "KTH",
    "city": "Stockholm",
    "country": "Sweden"
  },
  5: {
    "date-from": "1992-9",
    "date-to": "1994-1",
    "institution": "SU",
    "city": "Stockholm",
    "country": "Sweden"
  }
};
const institution_names = {
  "Lexicon": {
    "us": "Lexicon",
    "se": "Lexicon",
    "fi": "Lexicon",
    "no": "Lexicon",
    "de": "Lexicon",
    "es": "Lexicon",
    "fr": "Lexicon",
    "pt": "Lexicon",
    "tr": "Lexicon",
    "gr": "Lexicon",
    "ru": "Lexicon",
    "cn": "Lexicon",
    "my": "Lexicon",
    "th": "Lexicon",
    "ae": "Lexicon",
    "il": "Lexicon",
    "in": "Lexicon"
  },
  "KTH": {
    "us": "Royal Institute of Technology",
    "se": "Kungliga Tekniska Högskolan",
    "fi": "Kuninkaallinen Tekninen Korkeakoulu",
    "no": "Kongelig Teknisk Høyskolen",
    "de": "Königliche Technische Hochschule",
    "es": "Real Instituto de Tecnología",
    "fr": "Institut royal de technologie",
    "pt": "Instituto Real de Tecnologia",
    "tr": "Kraliyet Teknoloji Enstitüsü",
    "gr": "Βασιλικό Ινστιτούτο Τεχνολογίας",
    "ru": "Королевский технологический институт",
    "cn": "皇家理工学院",
    "my": "Royal Institute of Technology",
    "th": "สถาบันเทคโนโลยีราชมงคล",
    "ae": "المعهد الملكي للتكنولوجيا",
    "il": "מכון הטכנולוגיה המלכותי",
    "in": "रॉयल इंस्टीट्यूट ऑफ टेक्नोलॉजी"
  },
  "SU": {
    "us": "Stockholm University",
    "se": "Stockholms Universitet",
    "fi": "Tukholman Yliopisto",
    "no": "Universitetet i Stockholm",
    "de": "Universität Stockholm",
    "es": "Universidad de Estocolmo",
    "fr": "Université de Stockholm",
    "pt": "Universidade de Estocolmo",
    "tr": "Stockholm Üniversitesi",
    "gr": "Πανεπιστήμιο της Στοκχόλμης",
    "ru": "Стокгольмский университет",
    "cn": "斯德哥尔摩大学",
    "my": "Stockholm University",
    "th": "มหาวิทยาลัยสตอกโฮล์ม",
    "ae": "جامعة ستوكهولم",
    "il": "אוניברסיטת שטוקהולם",
    "in": "स्टॉकहोम विश्वविद्यालय"
  }
};
const education_description = {
  1: {
    "us": [
      "Lexicon provides professional education in Sweden. Internship as Systems Frontend Developer.",
      [
        "We learned Vue and React, but I picked up interest for Svelte in favor of Vue and React.",
        "Remote internship with a Swedish agriculture company based in Thailand."
      ]
    ],
    "se": [
      "Lexicon erbjuder yrkesutbildningar i Sverige. Praktik och utbildning som frontend utveckling.",
      [
        "Vi lärde oss Vue och React, men jag fattade intresse för Svelte i stället för Vue och React.",
        "Praktik på distans med ett svenskt jordbruksföretag baserat i Thailand."
      ]
    ],
    "fi": [
      "Lexicon tarjoaa ammatillista koulutusta Ruotsissa. Harjoittelu ja koulutus frontend-kehityksessä.",
      [
        "Opimme Vue ja React, mutta kiinnostuin Sveltesta Vue ja Reactin sijaan.",
        "Etäharjoittelu ruotsalaisen maatalousyrityksen kanssa, joka sijaitsee Thaimaassa."
      ]
    ],
    "no": [
      "Lexicon tilbyr yrkesopplæring i Sverige. Internship og opplæring i frontend-utvikling.",
      [
        "Vi lærte Vue og React, men jeg ble interessert i Svelte i stedet for Vue og React.",
        "Fjern internship med et svensk landbruksselskap basert i Thailand."
      ]
    ],
    "de": [
      "Lexicon bietet berufliche Ausbildung in Schweden an. Praktikum und Ausbildung in der Frontend-Entwicklung.",
      [
        "Wir haben Vue und React gelernt, aber ich habe mich für Svelte anstelle von Vue und React interessiert.",
        "Remote-Praktikum bei einem schwedischen Agrarunternehmen mit Sitz in Thailand."
      ]
    ],
    "es": [
      "Lexicon ofrece educación profesional en Suecia. Pasantía y capacitación en desarrollo frontend.",
      [
        "Aprendimos Vue y React, pero me interesé por Svelte en lugar de Vue y React.",
        "Prácticas remotas con una empresa agrícola sueca con sede en Tailandia."
      ]
    ],
    "fr": [
      "Lexicon propose une formation professionnelle en Suède. Stage et formation au développement frontend.",
      [
        "Nous avons appris Vue et React, mais je me suis intéressé à Svelte au lieu de Vue et React.",
        "Stage à distance avec une entreprise agricole suédoise basée en Thaïlande."
      ]
    ],
    "pt": [
      "A Lexicon oferece educação profissional na Suécia. Estágio e treinamento no desenvolvimento de frontend.",
      [
        "Aprendemos Vue e React, mas me interessei por Svelte em vez de Vue e React.",
        "Estágio remoto com uma empresa agrícola sueca com sede na Tailândia."
      ]
    ],
    "tr": [
      "Lexicon İsveç'te profesyonel eğitim sunmaktadır. Sistemler Frontend Geliştirici olarak staj.",
      [
        "Vue ve React öğrendik, ancak Vue ve React yerine Svelte için ilgi duydum.",
        "Tayland merkezli İsveç tarım şirketiyle uzaktan staj."
      ]
    ],
    "gr": [
      "Το Lexicon παρέχει επαγγελματική εκπαίδευση στη Σουηδία. Πρακτική ως Συστήματα Frontend Developer.",
      [
        "Μάθαμε Vue και React, αλλά πήρα ενδιαφέρον για το Svelte υπέρ του Vue και του React.",
        "Απομακρυσμένη πρακτική με μια σουηδική εταιρεία γεωργίας με έδρα την Ταϊλάνδη."
      ]
    ],
    "ru": [
      "Lexicon предлагает профессиональное образование в Швеции. Стажировка и обучение разработке фронтенда.",
      [
        "Мы изучали Vue и React, но я заинтересовался Svelte вместо Vue и React.",
        "Удаленная стажировка в шведской сельскохозяйственной компании с офисом в Таиланде."
      ]
    ],
    "cn": [
      "Lexicon在瑞典提供专业教育。前端开发实习和培训。",
      [
        "我们学习了Vue和React，但我对Svelte感兴趣，而不是Vue和React。",
        "与总部位于泰国的瑞典农业公司的远程实习。"
      ]
    ],
    "my": [
      "Lexicon menyediakan pendidikan profesional di Sweden. Praktikal dan latihan dalam pembangunan frontend.",
      [
        "Kami belajar Vue dan React, tetapi saya tertarik pada Svelte bukan Vue dan React.",
        "Internship jarak jauh dengan perusahaan pertanian Swedia yang berbasis di Thailand."
      ]
    ],
    "th": [
      "Lexicon ให้การศึกษาทางวิชาชีพในสวีเดน ฝึกงานและฝึกอบรมในการพัฒนาฟร้อนเอนด์",
      [
        "เราเรียนรู้ Vue และ React แต่ฉันสนใจ Svelte แทน Vue และ React",
        "ฝึกงานระยะไกลกับบริษัทเกษตรสวีเดนที่มีฐานที่ประเทศไทย"
      ]
    ],
    "ae": [
      "توفر Lexicon التعليم المهني في السويد. عملية وكبيرة في الواجهة الأمامية.",
      [
        "تعلمنا Vue و React ، لكنني كنت مهتمًا بـ Svelte بدلاً من Vue و React.",
        "التدريب عن بعد مع شركة زراعية سويدية مقرها في تايلاند."
      ]
    ],
    "il": [
      "לקסיקון מספקת השכלה מקצועית בשוודיה. תקופת פרקטיקה והכשרה בפיתוח חזיתי.",
      [
        "למדנו Vue ו- React, אבל ניסיתי את Svelte במקום Vue ו- React.",
        "פרקטיקה מרחוק עם חברת חקלאות שוודית הממוקמת בתאילנד."
      ]
    ],
    "in": [
      "Lexicon स्वीडन में व्यावसायिक शिक्षा प्रदान करता है। अंतर्निहित और फ्रंटएंड डेवलपमेंट में प्रशिक्षण।",
      [
        "हमने Vue और React सीखा, लेकिन मैं Vue और React के बजाय Svelte में रुचि लिया।",
        "थाईलैंड में आधारित एक स्वीडिश कृषि कंपनी के साथ दूरस्थ प्रशिक्षण।"
      ]
    ]
  },
  2: {
    "us": [
      "Completed Master of Science in Engineering Physics",
      [
        "Completed 5-year Master of Science in Engineering from the School of Engineering Physics.",
        "Major: Applied Mathematics and Computation Science.",
        "Thesis title: Inverse Parameter Estimation using Hamilton-Jacobi Equations.",
        "http://kth.diva-portal.org/smash/get/diva2:624555/FULLTEXT03.pdf"
      ]
    ],
    "se": [
      "Avslutade Civilingenjörsutbildningen i Teknisk Fysik",
      [
        "Avslutade 5-årig Civilingenjörsutbildning i Teknisk Fysik.",
        "Huvudämne: Tillämpad Matematik och Beräkningsteknik.",
        "Examensarbete: Inversa parameteruppskattningar genom tillämpning av Hamilton-Jacobi ekvationer.",
        "http://kth.diva-portal.org/smash/get/diva2:624555/FULLTEXT03.pdf"
      ]
    ],
    "fi": [
      "Suoritti diplomi-insinöörin tutkinnon teknisessä fysiikassa",
      [
        "Suoritti 5-vuotisen diplomi-insinöörin tutkinnon teknisessä fysiikassa.",
        "Pääaine: Soveltava matematiikka ja laskennallinen tiede.",
        "Opinnäytetyön otsikko: Inversio-parametrin arviointi Hamilton-Jacobi-yhtälöiden avulla.",
        "http://kth.diva-portal.org/smash/get/diva2:624555/FULLTEXT03.pdf"
      ]
    ],
    "no": [
      "Fullførte mastergrad i teknisk fysikk",
      [
        "Fullførte 5-årig mastergrad i teknisk fysikk.",
        "Hovedfag: Anvendt matematikk og beregningsvitenskap.",
        "Oppgavetittel: Invers parameterestimering ved bruk av Hamilton-Jacobi-ligninger.",
        "http://kth.diva-portal.org/smash/get/diva2:624555/FULLTEXT03.pdf"
      ]
    ],
    "de": [
      "Abschluss als Master of Science in Engineering Physics",
      [
        "Abschluss als Master of Science in Engineering Physics.",
        "Hauptfach: Angewandte Mathematik und Berechnungswissenschaft.",
        "Titel der Abschlussarbeit: Inverse Parameterabschätzung mit Hamilton-Jacobi-Gleichungen.",
        "http://kth.diva-portal.org/smash/get/diva2:624555/FULLTEXT03.pdf"
      ]
    ],
    "es": [
      "Completó la Maestría en Ciencias en Física de Ingeniería",
      [
        "Completó la Maestría en Ciencias en Física de Ingeniería.",
        "Materia principal: Matemáticas aplicadas y ciencias de la computación.",
        "Título de la tesis: Estimación de parámetros inversos usando ecuaciones de Hamilton-Jacobi.",
        "http://kth.diva-portal.org/smash/get/diva2:624555/FULLTEXT03.pdf"
      ]
    ],
    "fr": [
      "Master of Science en physique de l'ingénieur",
      [
        "Master of Science en physique de l'ingénieur.",
        "Majeure: Mathématiques appliquées et sciences du calcul.",
        "Titre de la thèse: Estimation des paramètres inverses à l'aide des équations de Hamilton-Jacobi.",
        "http://kth.diva-portal.org/smash/get/diva2:624555/FULLTEXT03.pdf"
      ]
    ],
    "pt": [
      "Mestre em Ciências em Física de Engenharia",
      [
        "Mestre em Ciências em Física de Engenharia.",
        "Maior: Matemática Aplicada e Ciência da Computação.",
        "Título da tese: Estimativa de parâmetros inversos usando equações de Hamilton-Jacobi.",
        "http://kth.diva-portal.org/smash/get/diva2:624555/FULLTEXT03.pdf"
      ]
    ],
    "tr": [
      "Mühendislik Fiziğinde Bilim Yüksek Lisansını Tamamladı",
      [
        "Mühendislik Fiziğinde Bilim Yüksek Lisansını Tamamladı.",
        "Ana: Uygulamalı Matematik ve Hesaplama Bilimi.",
        "Tez başlığı: Hamilton-Jacobi Denklemleri Kullanarak Ters Parametre Tahmini.",
        "http://kth.diva-portal.org/smash/get/diva2:624555/FULLTEXT03.pdf"
      ]
    ],
    "gr": [
      "Ολοκλήρωσε το Master of Science στην Μηχανική Φυσική",
      [
        "Ολοκλήρωσε το Master of Science στην Μηχανική Φυσική.",
        "Κύριο: Εφαρμοσμένα Μαθηματικά και Επιστήμη Υπολογιστών.",
        "Τίτλος διατριβής: Αντίστροφη εκτίμηση παραμέτρων χρησιμοποιώντας εξισώσεις Hamilton-Jacobi.",
        "http://kth.diva-portal.org/smash/get/diva2:624555/FULLTEXT03.pdf"
      ]
    ],
    "ru": [
      "Магистр наук по инженерной физике",
      [
        "Магистр наук по инженерной физике.",
        "Основной предмет: Прикладная математика и вычислительная наука.",
        "Название диссертации: Обратная оценка параметров с использованием уравнений Гамильтона-Якоби.",
        "http://kth.diva-portal.org/smash/get/diva2:624555/FULLTEXT03.pdf"
      ]
    ],
    "cn": [
      "工程物理学硕士",
      [
        "工程物理学硕士。",
        "主修：应用数学和计算科学。",
        "论文题目：使用Hamilton-Jacobi方程进行反向参数估计。",
        "http://kth.diva-portal.org/smash/get/diva2:624555/FULLTEXT03.pdf"
      ]
    ],
    "my": [
      "Ijazah Sarjana Sains dalam Fizik Kejuruteraan",
      [
        "Ijazah Sarjana Sains dalam Fizik Kejuruteraan.",
        "Major: Matematik Terapan dan Sains Pengiraan.",
        "Tajuk tesis: Penentuan Parameter Invers menggunakan Persamaan Hamilton-Jacobi.",
        "http://kth.diva-portal.org/smash/get/diva2:624555/FULLTEXT03.pdf"
      ]
    ],
    "th": [
      "ปริญญาโทในวิศวกรรมฟิสิกส์",
      [
        "ปริญญาโทในวิศวกรรมฟิสิกส์",
        "สาขาหลัก: คณิตศาสตร์ประยุกต์และวิทยาการคำนวณ",
        "ชื่อเรื่องวิทยานิพนธ์: การประมาณค่าพารามิเตอร์กลับด้วยการใช้สมการ Hamilton-Jacobi",
        "http://kth.diva-portal.org/smash/get/diva2:624555/FULLTEXT03.pdf"
      ]
    ],
    "ae": [
      "حاصل على درجة الماجستير في الفيزياء الهندسية",
      [
        "حاصل على درجة الماجستير في الفيزياء الهندسية.",
        "التخصص الرئيسي: الرياضيات التطبيقية وعلوم الحساب.",
        "عنوان الرسالة: تقدير المعلمات العكسية باستخدام معادلات هاملتون - جاكوبي.",
        "http://kth.diva-portal.org/smash/get/diva2:624555/FULLTEXT03.pdf"
      ]
    ],
    "il": [
      "השלים את המאסטר של מדעי ההנדסה בפיזיקה",
      [
        "השלים את המאסטר של מדעי ההנדסה בפיזיקה.",
        "מיינר: מתמטיקה שימושית ומדעי החישוב.",
        "כותרת התזה: הערכת פרמטרים הפוכים באמצעות משוואות המילטון-יעקובי.",
        "http://kth.diva-portal.org/smash/get/diva2:624555/FULLTEXT03.pdf"
      ]
    ],
    "in": [
      "इंजीनियरिंग भौतिकी में विज्ञान की स्नातक",
      [
        "इंजीनियरिंग भौतिकी में विज्ञान की स्नातक।",
        "मुख्य: अनुप्रयोगी गणित और गणना विज्ञान।",
        "थीसिस शीर्षक: हैमिल्टन-जेकोबी समीकरणों का उपयोग करके उलटे पैरामीटर अनुमानन।",
        "http://kth.diva-portal.org/smash/get/diva2:624555/FULLTEXT03.pdf"
      ]
    ]
  },
  3: {
    "us": [
      [
        "Completed 4 years + 7 months of the Engineering Physics program.",
        "GPA: 3.7 out of 5.0"
      ]
    ],
    "se": [
      [
        "Avslutade 4 år + 7 månader av Civilingenjörsutbildningen i Teknisk Fysik.",
        "Medelbetyg: 3.7 av 5.0"
      ]
    ],
    "fi": [
      [
        "Suoritti 4 vuotta + 7 kuukautta diplomi-insinöörin tutkinnosta teknisessä fysiikassa.",
        "Keskiarvo: 3.7 / 5.0"
      ]
    ],
    "no": [
      [
        "Fullførte 4 år + 7 måneder av mastergraden i teknisk fysikk.",
        "Gjennomsnittskarakter: 3.7 av 5.0"
      ]
    ],
    "de": [
      [
        "Abschluss von 4 Jahren + 7 Monaten des Masterstudiengangs Engineering Physics.",
        "Durchschnittsnote: 3.7 von 5.0"
      ]
    ],
    "es": [
      [
        "Completó 4 años + 7 meses del programa de Física de Ingeniería.",
        "Promedio: 3.7 de 5.0"
      ]
    ],
    "fr": [
      [
        "A terminé 4 ans + 7 mois du programme de physique de l'ingénieur.",
        "Moyenne: 3.7 sur 5.0"
      ]
    ],
    "pt": [
      [
        "Concluiu 4 anos + 7 meses do programa de Física de Engenharia.",
        "Nota média: 3.7 de 5.0"
      ]
    ],
    "tr": [
      [
        "Mühendislik Fiziğinde 4 yıl + 7 ay tamamlandı.",
        "Ortalama puanı: 5.0 üzerinden 3.7"
      ]
    ],
    "gr": [
      [
        "Ολοκλήρωσε 4 χρόνια + 7 μήνες του προγράμματος φυσικής μηχανικής.",
        "Μέσος όρος: 3.7 από 5.0"
      ]
    ],
    "ru": [
      [
        "Завершил 4 года + 7 месяцев программы инженерной физики.",
        "Средний балл: 3.7 из 5.0"
      ]
    ],
    "cn": [
      [
        "完成了工程物理学计划的4年+ 7个月。",
        "平均绩点：5.0中的3.7"
      ]
    ],
    "my": [
      [
        "Menamatkan 4 tahun + 7 bulan program Fizik Kejuruteraan.",
        "GPA: 3.7 daripada 5.0"
      ]
    ],
    "th": [
      [
        "เสร็จสิ้น 4 ปี + 7 เดือนของโปรแกรมวิศวกรรมฟิสิกส์",
        "เกรดเฉลี่ย: 3.7 จาก 5.0"
      ]
    ],
    "ae": [
      [
        "أكملت 4 سنوات + 7 أشهر من برنامج الفيزياء الهندسية.",
        "المعدل التراكمي: 3.7 من 5.0"
      ]
    ],
    "il": [
      [
        "השלים 4 שנים + 7 חודשים של תוכנית הפיזיקה ההנדסית.",
        "ממוצע: 3.7 מתוך 5.0"
      ]
    ],
    "in": [
      [
        "4 वर्ष + 7 महीने के इंजीनियरिंग भौतिकी कार्यक्रम का पूरा किया।",
        "जीपीए: 5.0 में 3.7"
      ]
    ]
  },
  4: {
    "us": [
      [
        "Started the Master of Science in Engineering Physics program."
      ]
    ],
    "se": [
      [
        "Påbörjade Civilingenjörsutbildningen i Teknisk Fysik."
      ]
    ],
    "fi": [
      [
        "Aloitti diplomi-insinöörin tutkinnon teknisessä fysiikassa."
      ]
    ],
    "no": [
      [
        "Startet mastergraden i teknisk fysikk."
      ]
    ],
    "de": [
      [
        "Startete den Masterstudiengang Engineering Physics."
      ]
    ],
    "es": [
      [
        "Comenzó el programa de Física de Ingeniería."
      ]
    ],
    "fr": [
      [
        "A commencé le programme de physique de l'ingénieur."
      ]
    ],
    "pt": [
      [
        "Começou o programa de Física de Engenharia."
      ]
    ],
    "tr": [
      [
        "Mühendislik Fiziği Yüksek Lisans programına başladı."
      ]
    ],
    "gr": [
      [
        "Ξεκίνησε το πρόγραμμα μεταπτυχιακών σπουδών στη μηχανική φυσική."
      ]
    ],
    "ru": [
      [
        "Начал программу инженерной физики."
      ]
    ],
    "cn": [
      [
        "开始工程物理学计划。"
      ]
    ],
    "my": [
      [
        "Memulakan program Fizik Kejuruteraan."
      ]
    ],
    "th": [
      [
        "เริ่มโปรแกรมวิศวกรรมฟิสิกส์"
      ]
    ],
    "ae": [
      [
        "بدأ برنامج الفيزياء الهندسية."
      ]
    ],
    "il": [
      [
        "התחיל את תוכנית המדעים בהנדסה בפיזיקה."
      ]
    ],
    "in": [
      [
        "इंजीनियरिंग भौतिकी कार्यक्रम शुरू किया।"
      ]
    ]
  },
  5: {
    "us": [
      [
        "Completed 1.5 years of study of the Mathematics and Nature Sciences Program."
      ]
    ],
    "se": [
      [
        "Avslutade 1.5 år av studier av Matematik och Naturvetenskapligt Program."
      ]
    ],
    "fi": [
      [
        "Suoritti 1,5 vuotta matematiikan ja luonnontieteiden opintoja."
      ]
    ],
    "no": [
      [
        "Fullførte 1,5 års studier av matematikk og naturvitenskap."
      ]
    ],
    "de": [
      [
        "Abschluss von 1,5 Jahren Studium des Mathematik- und Naturwissenschaftsprogramms."
      ]
    ],
    "es": [
      [
        "Completó 1.5 años de estudio del Programa de Matemáticas y Ciencias Naturales."
      ]
    ],
    "fr": [
      [
        "A terminé 1,5 ans d'études du programme de mathématiques et de sciences naturelles."
      ]
    ],
    "pt": [
      [
        "Concluiu 1,5 anos de estudo do Programa de Matemática e Ciências Naturais."
      ]
    ],
    "tr": [
      [
        "Matematik ve Fen Bilimleri Programı'nın 1,5 yılını tamamladı."
      ]
    ],
    "gr": [
      [
        "Ολοκλήρωσε 1,5 χρόνια σπουδών του Προγράμματος Μαθηματικών και Φυσικών Επιστημών."
      ]
    ],
    "ru": [
      [
        "Завершил 1,5 года обучения по программе математики и естественных наук."
      ]
    ],
    "cn": [
      [
        "完成了1.5年的数学和自然科学课程。"
      ]
    ],
    "my": [
      [
        "Menamatkan 1.5 tahun pengajian Program Matematik dan Sains Alam."
      ]
    ],
    "th": [
      [
        "เสร็จสิ้นการศึกษา 1.5 ปีของหลักสูตรคณิตศาสตร์และวิทยาศาสตร์ธรรมชาติ"
      ]
    ],
    "ae": [
      [
        "أكمل 1.5 عامًا من دراسة برنامج الرياضيات والعلوم الطبيعية."
      ]
    ],
    "il": [
      [
        "השלים 1.5 שנים של לימודי תוכנית המתמטיקה והמדעים הטבעיים."
      ]
    ],
    "in": [
      [
        "गणित और प्राकृतिक विज्ञान कार्यक्रम के अध्ययन के 1.5 वर्ष पूरे किए।"
      ]
    ]
  }
};
const mikael_language_skills = {
  "us": 4,
  "se": 5,
  "fi": 2,
  "de": 1
};
const language_ratings_description = {
  "us": {
    0: "Cannot speak this language",
    1: "Basic, can manage some small talk",
    2: "Intermediate, can hold a conversation",
    3: "Proficient, can read and write well",
    4: "Fluent, second language",
    5: "Native, mother tongue"
  },
  "se": {
    0: "Kan inte tala detta språk",
    1: "Grundläggande, kan hantera lite småprat",
    2: "Mellanliggande, kan föra en konversation",
    3: "Kunnig, kan läsa och skriva bra",
    4: "Flytande, ett andra språk",
    5: "Modersmål"
  },
  "fi": {
    0: "Ei osaa puhua tätä kieltä",
    1: "Perustaso, voi käsitellä hieman pientä puhetta",
    2: "Välitaso, voi pitää keskustelun",
    3: "Taitava, voi lukea ja kirjoittaa hyvin",
    4: "Sujuva, toinen kieli",
    5: "Äidinkieli"
  },
  "no": {
    0: "Kan ikke snakke dette språket",
    1: "Grunnleggende, kan håndtere litt småprat",
    2: "Mellomnivå, kan holde en samtale",
    3: "Dyktig, kan lese og skrive godt",
    4: "Flytende, andre språk",
    5: "Morsmål"
  },
  "de": {
    0: "Kann diese Sprache nicht sprechen",
    1: "Grundkenntnisse, kann etwas Smalltalk führen",
    2: "Mittelstufe, kann ein Gespräch führen",
    3: "Kompetent, kann gut lesen und schreiben",
    4: "Fließend, zweite Sprache",
    5: "Muttersprache"
  },
  "es": {
    0: "No puede hablar este idioma",
    1: "Básico, puede manejar un poco de conversación",
    2: "Intermedio, puede mantener una conversación",
    3: "Competente, puede leer y escribir bien",
    4: "Fluido, segundo idioma",
    5: "Lengua materna"
  },
  "fr": {
    0: "Ne peut pas parler cette langue",
    1: "Basique, peut gérer un peu de conversation",
    2: "Intermédiaire, peut tenir une conversation",
    3: "Compétent, peut lire et écrire bien",
    4: "Fluent, deuxième langue",
    5: "Langue maternelle"
  },
  "pt": {
    0: "Não pode falar este idioma",
    1: "Básico, pode gerenciar um pouco de conversa",
    2: "Intermediário, pode manter uma conversa",
    3: "Competente, pode ler e escrever bem",
    4: "Fluente, segunda língua",
    5: "Língua materna"
  },
  "tr": {
    0: "Bu dili konuşamaz",
    1: "Temel, biraz sohbet edebilir",
    2: "Orta, bir konuşma yapabilir",
    3: "Uzman, iyi okuyup yazabilir",
    4: "Akıcı, ikinci dil",
    5: "Anadili"
  },
  "gr": {
    0: "Δεν μπορεί να μιλήσει αυτήν τη γλώσσα",
    1: "Βασικό, μπορεί να διαχειριστεί λίγο μικρή συζήτηση",
    2: "Μεσαίο, μπορεί να διατηρήσει μια συνομιλία",
    3: "Ειδικός, μπορεί να διαβάσει και να γράψει καλά",
    4: "Ρευστό, δεύτερη γλώσσα",
    5: "Μητρική γλώσσα"
  },
  "ru": {
    0: "Не может говорить на этом языке",
    1: "Базовый, может управлять небольшим разговором",
    2: "Средний, может вести разговор",
    3: "Компетентный, может хорошо читать и писать",
    4: "Беглый, второй язык",
    5: "Родной язык"
  },
  "cn": {
    0: "无法说这种语言",
    1: "基础，可以处理一些闲聊",
    2: "中级，可以进行对话",
    3: "熟练，可以阅读和写作",
    4: "流利，第二语言",
    5: "母语"
  },
  "my": {
    0: "Tidak boleh bercakap dalam bahasa ini",
    1: "Asas, boleh mengendalikan sedikit perbualan",
    2: "Pertengahan, boleh memegang perbualan",
    3: "Mahir, boleh membaca dan menulis dengan baik",
    4: "Lancar, bahasa kedua",
    5: "Bahasa ibunda"
  },
  "th": {
    0: "ไม่สามารถพูดภาษานี้ได้",
    1: "พื้นฐาน, สามารถจัดการบทสนทนาบางส่วนได้",
    2: "ระดับกลาง, สามารถควบคุมการสนทนาได้",
    3: "ชำนาญ, สามารถอ่านและเขียนได้ดี",
    4: "คล่องแคล่ว, ภาษาที่สอง",
    5: "ภาษาแม่"
  },
  "ae": {
    0: "لا يمكن التحدث بهذه اللغة",
    1: "أساسي ، يمكن التعامل مع بعض الحديث الصغير",
    2: "متوسط ، يمكن الحفاظ على محادثة",
    3: "ماهر ، يمكن قراءة وكتابة بشكل جيد",
    4: "طلاقة ، لغة ثانية",
    5: "لغة الأم"
  },
  "il": {
    0: "לא יכול לדבר בשפה זו",
    1: "בסיסי, יכול לנהל דיבור קטן",
    2: "בינוני, יכול להחזיק שיחה",
    3: "מיומן, יכול לקרוא ולכתוב היטב",
    4: "רציני, שפה שנייה",
    5: "שפת אם"
  },
  "in": {
    0: "इस भाषा में बोल नहीं सकता",
    1: "बुनियादी, थोड़ी बातचीत को संभाल सकता है",
    2: "इंटरमीडिएट, बातचीत कर सकता है",
    3: "दक्ष, अच्छी तरह से पढ़ने और लिखने कर सकता है",
    4: "धाराप्रवाह, दूसरी भाषा",
    5: "मातृभाषा"
  }
};
const language_names = {
  "us": {
    "us": "English",
    "se": "Swedish",
    "fi": "Finnish",
    "no": "Norwegian",
    "de": "German",
    "es": "Spanish",
    "fr": "French",
    "pt": "Portuguese",
    "tr": "Turkish",
    "gr": "Greek",
    "ru": "Russian",
    "cn": "Chinese",
    "my": "Malay",
    "th": "Thai",
    "ae": "Arabic",
    "in": "Hindi"
  },
  "se": {
    "us": "Engelska",
    "se": "Svenska",
    "fi": "Finska",
    "no": "Norska",
    "de": "Tyska",
    "es": "Spanska",
    "fr": "Franska",
    "pt": "Portugisiska",
    "tr": "Turkiska",
    "gr": "Grekiska",
    "ru": "Ryska",
    "cn": "Kinesiska",
    "my": "Malajiska",
    "th": "Thailändska",
    "ae": "Arabiska",
    "in": "Hindi"
  },
  "fi": {
    "us": "Englanti",
    "se": "Ruotsi",
    "fi": "Suomi",
    "no": "Norja",
    "de": "Saksa",
    "es": "Espanja",
    "fr": "Ranska",
    "pt": "Portugali",
    "tr": "Turkki",
    "gr": "Kreikka",
    "ru": "Venäjä",
    "cn": "Kiina",
    "my": "Malaiji",
    "th": "Thaimaa",
    "ae": "Arabia",
    "in": "Hindi"
  },
  "no": {
    "us": "Engelsk",
    "se": "Svensk",
    "fi": "Finsk",
    "no": "Norsk",
    "de": "Tysk",
    "es": "Spansk",
    "fr": "Fransk",
    "pt": "Portugisisk",
    "tr": "Tyrkisk",
    "gr": "Gresk",
    "ru": "Russisk",
    "cn": "Kinesisk",
    "my": "Malay",
    "th": "Thai",
    "ae": "Arabisk",
    "in": "Hindi"
  },
  "de": {
    "us": "Englisch",
    "se": "Schwedisch",
    "fi": "Finnisch",
    "no": "Norwegisch",
    "de": "Deutsch",
    "es": "Spanisch",
    "fr": "Französisch",
    "pt": "Portugiesisch",
    "tr": "Türkisch",
    "gr": "Griechisch",
    "ru": "Russisch",
    "cn": "Chinesisch",
    "my": "Malaiisch",
    "th": "Thailändisch",
    "ae": "Arabisch",
    "in": "Hindi"
  },
  "es": {
    "us": "Inglés",
    "se": "Sueco",
    "fi": "Finlandés",
    "no": "Noruego",
    "de": "Alemán",
    "es": "Español",
    "fr": "Francés",
    "pt": "Portugués",
    "tr": "Turco",
    "gr": "Griego",
    "ru": "Ruso",
    "cn": "Chino",
    "my": "Malayo",
    "th": "Tailandés",
    "ae": "Árabe",
    "in": "Hindi"
  },
  "fr": {
    "us": "Anglais",
    "se": "Suédois",
    "fi": "Finnois",
    "no": "Norvégien",
    "de": "Allemand",
    "es": "Espagnol",
    "fr": "Français",
    "pt": "Portugais",
    "tr": "Turc",
    "gr": "Grec",
    "ru": "Russe",
    "cn": "Chinois",
    "my": "Malais",
    "th": "Thaïlandais",
    "ae": "Arabe",
    "in": "Hindi"
  },
  "pt": {
    "us": "Inglês",
    "se": "Sueco",
    "fi": "Finlandês",
    "no": "Norueguês",
    "de": "Alemão",
    "es": "Espanhol",
    "fr": "Francês",
    "pt": "Português",
    "tr": "Turco",
    "gr": "Grego",
    "ru": "Russo",
    "cn": "Chinês",
    "my": "Malaio",
    "th": "Tailandês",
    "ae": "Árabe",
    "in": "Hindi"
  },
  "tr": {
    "us": "İngilizce",
    "se": "İsveççe",
    "fi": "Fince",
    "no": "Norveççe",
    "de": "Almanca",
    "es": "İspanyolca",
    "fr": "Fransızca",
    "pt": "Portekizce",
    "tr": "Türkçe",
    "gr": "Yunanca",
    "ru": "Rusça",
    "cn": "Çince",
    "my": "Malay",
    "th": "Taylandlı",
    "ae": "Arapça",
    "in": "Hindi"
  },
  "gr": {
    "us": "Αγγλικά",
    "se": "Σουηδικά",
    "fi": "Φινλανδικά",
    "no": "Νορβηγικά",
    "de": "Γερμανικά",
    "es": "Ισπανικά",
    "fr": "Γαλλικά",
    "pt": "Πορτογαλικά",
    "tr": "Τουρκικά",
    "gr": "Ελληνικά",
    "ru": "Ρωσικά",
    "cn": "Κινέζικα",
    "my": "Μαλαϊκά",
    "th": "Ταϊλανδικά",
    "ae": "Αραβικά",
    "in": "Χίντι"
  },
  "ru": {
    "us": "Английский",
    "se": "Шведский",
    "fi": "Финский",
    "no": "Норвежский",
    "de": "Немецкий",
    "es": "Испанский",
    "fr": "Французский",
    "pt": "Португальский",
    "tr": "Турецкий",
    "gr": "Греческий",
    "ru": "Русский",
    "cn": "Китайский",
    "my": "Малайский",
    "th": "Тайский",
    "ae": "Арабский",
    "in": "Хинди"
  },
  "cn": {
    "us": "英语",
    "se": "瑞典语",
    "fi": "芬兰语",
    "no": "挪威语",
    "de": "德语",
    "es": "西班牙语",
    "fr": "法语",
    "pt": "葡萄牙语",
    "tr": "土耳其语",
    "gr": "希腊语",
    "ru": "俄语",
    "cn": "中文",
    "my": "马来语",
    "th": "泰语",
    "ae": "阿拉伯语",
    "in": "印地语"
  },
  "my": {
    "us": "Bahasa Inggeris",
    "se": "Bahasa Sweden",
    "fi": "Bahasa Finland",
    "no": "Bahasa Norway",
    "de": "Bahasa Jerman",
    "es": "Bahasa Sepanyol",
    "fr": "Bahasa Perancis",
    "pt": "Bahasa Portugis",
    "tr": "Bahasa Turki",
    "gr": "Bahasa Greek",
    "ru": "Bahasa Rusia",
    "cn": "Bahasa Cina",
    "my": "Bahasa Melayu",
    "th": "Bahasa Thai",
    "ae": "Bahasa Arab",
    "in": "Bahasa Hindi"
  },
  "th": {
    "us": "ภาษาอังกฤษ",
    "se": "ภาษาสวีเดน",
    "fi": "ภาษาฟินแลนด์",
    "no": "ภาษานอร์เวย์",
    "de": "ภาษาเยอรมัน",
    "es": "ภาษาสเปน",
    "fr": "ภาษาฝรั่งเศส",
    "pt": "ภาษาโปรตุเกส",
    "tr": "ภาษาตุรกี",
    "gr": "ภาษากรีก",
    "ru": "ภาษารัสเซีย",
    "cn": "ภาษาจีน",
    "my": "ภาษามาเลย์",
    "th": "ภาษาไทย",
    "ae": "ภาษาอาหรับ",
    "in": "ภาษาฮินดี"
  },
  "ae": {
    "us": "الإنجليزية",
    "se": "السويدية",
    "fi": "الفنلندية",
    "no": "النرويجية",
    "de": "الألمانية",
    "es": "الأسبانية",
    "fr": "الفرنسية",
    "pt": "البرتغالية",
    "tr": "التركية",
    "gr": "اليونانية",
    "ru": "الروسية",
    "cn": "الصينية",
    "my": "الملايو",
    "th": "التايلاندية",
    "ae": "العربية",
    "in": "الهندية"
  },
  "il": {
    "us": "אנגלית",
    "se": "שוודית",
    "fi": "פינית",
    "no": "נורווגית",
    "de": "גרמנית",
    "es": "ספרדית",
    "fr": "צרפתית",
    "pt": "פורטוגזית",
    "tr": "טורקית",
    "gr": "יוונית",
    "ru": "רוסית",
    "cn": "סינית",
    "my": "מלאית",
    "th": "תאילנדית",
    "ae": "ערבית",
    "in": "הינדי"
  },
  "in": {
    "us": "अंग्रेज़ी",
    "se": "स्वीडिश",
    "fi": "फिनिश",
    "no": "नॉर्वेजियन",
    "de": "जर्मन",
    "es": "स्पेनिश",
    "fr": "फ्रेंच",
    "pt": "पुर्तगाली",
    "tr": "तुर्की",
    "gr": "यूनानी",
    "ru": "रूसी",
    "cn": "चीनी",
    "my": "मलय",
    "th": "थाई",
    "ae": "अरबी",
    "in": "हिंदी"
  },
  "other": {
    "us": "Other Languages",
    "se": "Andra språk",
    "fi": "Muut kielet",
    "no": "Andre språk",
    "de": "Andere Sprachen",
    "es": "Otros idiomas",
    "fr": "Autres langues",
    "pt": "Outras línguas",
    "tr": "Diğer diller",
    "gr": "Άλλες γλώσσες",
    "ru": "Другие языки",
    "cn": "其他语言",
    "my": "Bahasa lain",
    "th": "ภาษาอื่น ๆ",
    "ae": "لغات أخرى",
    "in": "अन्य भाषाएं"
  }
};
const css = {
  code: ".ml.svelte-gl9dk3{margin-left:3em}.mr.svelte-gl9dk3{margin-right:3em}ol.svelte-gl9dk3{padding-left:0;margin-left:1em}.cv_title.svelte-gl9dk3{margin-bottom:-1.2em}.cv_date.svelte-gl9dk3{font-size:0.61em}",
  map: null
};
function formatData2(data, prefix = "", start = 1) {
  let result = "";
  if (typeof data === "string") {
    return `<li>${data}</li>`;
  }
  if (typeof data === "object" && data.length === 0) {
    return "";
  }
  if (typeof data === "object" && data.length > 0) {
    result += `<ul style="margin-left: 3em">`;
    for (let i = 0; i < data.length; i++) {
      result += formatData2(data[i]);
    }
    result += "</ul>";
  }
  return result;
}
function formatData(data, start = 1) {
  let result = "";
  if (typeof data === "string") {
    return data;
  }
  if (typeof data === "object" && data.length === 0) {
    return "";
  }
  if (typeof data === "object" && data.length > 0) {
    for (let i = 0; i < data.length; i++) {
      if (typeof data[i] === "string") {
        result += `<p>${data[i]}</p>`;
      } else if (typeof data[i] === "object" && data[i].length > 0) {
        result += `<ul style="margin-left: 3em">`;
        for (let j = 0; j < data[i].length; j++) {
          result += formatData2(data[i][j]);
        }
        result += "</ul>";
      }
    }
  }
  return result;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let language;
  let cv;
  let cvdate;
  let contents;
  let personal;
  let objectives_name;
  let coreskills;
  let workexperience;
  let education;
  let languageskills;
  let contents_list;
  let objectives_list;
  let coreskills_list;
  let objectives_html;
  let coreskills_html;
  let workexperience_html;
  let education_html;
  let languageskills_html;
  let $storeLanguage, $$unsubscribe_storeLanguage;
  $$unsubscribe_storeLanguage = subscribe(storeLanguage, (value) => $storeLanguage = value);
  const SortedWorkIds = Object.keys(work_history);
  SortedWorkIds.sort((a, b) => {
    const dateA = new Date(work_history[b]["date-from"]);
    const dateB = new Date(work_history[a]["date-from"]);
    return dateA - dateB;
  });
  function date2text(date, lang = language) {
    if (date == "current") {
      return current_in_different_languages[language];
    }
    const [year, month] = date.split("-");
    return `${months[lang][month]} ${year}`;
  }
  function formatWorkExperience(ids, lang = language) {
    let result = "";
    for (let i = 0; i < ids.length; i++) {
      let temp_work_history = work_history[ids[i]];
      let temp_date_from = temp_work_history["date-from"];
      let temp_date_to = temp_work_history["date-to"];
      result += `<i>${date2text(temp_date_from)}&nbsp;&mdash;&nbsp;${date2text(temp_date_to)}</i><br>`;
      let temp_work_title = work_titles[ids[i]][lang];
      let temp_company_name = temp_work_history["company"];
      if (temp_company_name !== "") {
        temp_company_name = " @ " + temp_company_name;
      }
      let temp_city = temp_work_history["city"];
      temp_city = locations[temp_city][lang];
      let temp_country = temp_work_history["country"];
      temp_country = locations[temp_country][lang];
      result += `<b>${temp_work_title} ${temp_company_name}, ${temp_city}, ${temp_country}</b>`;
      let temp_work_description = work_descriptions[ids[i]][lang];
      result += `<p style="margin-top: -1em">${formatData(temp_work_description)}</p><br>`;
    }
    return result;
  }
  const SortedEducationIds = Object.keys(education_history);
  SortedEducationIds.sort((a, b) => {
    const dateA = new Date(education_history[b]["date-from"]);
    const dateB = new Date(education_history[a]["date-from"]);
    return dateA - dateB;
  });
  function formatEducation(ids, lang = language) {
    let result = "";
    for (let i = 0; i < ids.length; i++) {
      let temp_education_history = education_history[ids[i]];
      let temp_date_from = temp_education_history["date-from"];
      let temp_date_to = temp_education_history["date-to"];
      result += `<i>${date2text(temp_date_from)}&nbsp;&mdash;&nbsp;${date2text(temp_date_to)}</i><br>`;
      let temp_school_name = temp_education_history["institution"];
      temp_school_name = institution_names[temp_school_name][lang];
      let temp_city = temp_education_history["city"];
      temp_city = locations[temp_city][lang];
      let temp_country = temp_education_history["country"];
      temp_country = locations[temp_country][lang];
      result += `<b>${temp_school_name}, ${temp_city}, ${temp_country}</b>`;
      let temp_education_description = education_description[ids[i]][lang];
      result += `<p style="margin-top: -1em">${formatData(temp_education_description)}</p><br>`;
    }
    return result;
  }
  function formatLanguageSkills(lang = language) {
    let result = "";
    for (const [language_code, language_skill] of Object.entries(mikael_language_skills)) {
      result += `${language_names[lang][language_code]}: ${language_ratings_description[lang][language_skill]}<br>`;
    }
    return result;
  }
  $$result.css.add(css);
  language = $storeLanguage || getCookie("language") || "us";
  cv = other_names["cv"][language];
  cvdate = date2text(cv_last_update, language);
  contents = other_names["contents"][language];
  personal = other_names["personal"][language];
  objectives_name = other_names["objectives"][language];
  coreskills = other_names["core skills"][language];
  workexperience = other_names["work experience"][language];
  education = other_names["education"][language];
  languageskills = other_names["language skills"][language];
  contents_list = [
    personal,
    objectives_name,
    coreskills,
    workexperience,
    education,
    languageskills
  ];
  objectives_list = objectives[language];
  coreskills_list = core_skills[language];
  objectives_html = formatData(objectives_list);
  coreskills_html = formatData(coreskills_list);
  workexperience_html = formatWorkExperience(SortedWorkIds, language);
  education_html = formatEducation(SortedEducationIds, language);
  languageskills_html = formatLanguageSkills(language);
  $$unsubscribe_storeLanguage();
  return `<main><h2 class="cv_title svelte-gl9dk3"><center>${escape(cv)}</center></h2> <p><center><i class="cv_date svelte-gl9dk3">${escape(cvdate)}</i></center></p> <h3>${escape(contents)}</h3> <div class="ml mr svelte-gl9dk3"><ol class="svelte-gl9dk3">${each(contents_list, (content) => {
    return `<li>${escape(content)}</li>`;
  })}</ol></div> <h3>${escape(personal)}</h3> <p class="ml mr svelte-gl9dk3">${escape(introduction[language])}</p> <h3>${escape(objectives_name)}</h3> <p class="ml svelte-gl9dk3"><!-- HTML_TAG_START -->${objectives_html}<!-- HTML_TAG_END --></p> <h3>${escape(coreskills)}</h3> <p class="ml mr svelte-gl9dk3"><!-- HTML_TAG_START -->${coreskills_html}<!-- HTML_TAG_END --></p> <h3>${escape(workexperience)}</h3> <p><!-- HTML_TAG_START -->${workexperience_html}<!-- HTML_TAG_END --></p> <h3>${escape(education)}</h3> <p><!-- HTML_TAG_START -->${education_html}<!-- HTML_TAG_END --></p> <h3>${escape(languageskills)}</h3> <p><!-- HTML_TAG_START -->${languageskills_html}<!-- HTML_TAG_END --></p> <br> </main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-87818ede.js.map
