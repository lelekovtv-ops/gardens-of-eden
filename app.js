/* Gardens of Eden — Vision & Concept.
   Presentation deck: sidebar chapters, keyboard navigation, slide counter,
   progress, i18n (RU/EN) and currency swap. Plain JS, no build.
   Both languages are complete so the toggle never shows a half-translated deck. */

(function () {
  "use strict";

  /* ============================================================
     i18n dictionary — EN + RU (keep both in sync)
     ============================================================ */
  var I18N = {
    en: {
      "meta.description": "Gardens of Eden Phuket — content vision & concept presentation.",
      "side.sub": "Vision & Concept",
      "side.g1": "Introduction", "side.g2": "Concepts", "side.g3": "Content system", "side.g4": "Closing",
      "side.s01": "Title", "side.s02": "About us", "side.s03": "How we see content",
      "side.s04": "Concept I", "side.s05": "Concept II", "side.s06": "Concept III",
      "side.s07": "Content map", "side.s08": "Brand film & showroom", "side.s09": "YouTube",
      "side.s10": "Reels / Shorts", "side.s11": "VSL", "side.s12": "Sales team training",
      "side.s13": "Sales & the site", "side.s14": "Packages", "side.s15": "Next step",
      "side.hint": "Use ↑ ↓ keys",

      "s01.eyebrow": "Content presentation · BPM Media",
      "s01.sub": "Vision & Concept",
      "s01.meta": "Bang Tao, Phuket · handover Q4 2026",
      "s01.hint": "Scroll or press ↓ to begin",

      "s02.title": "About us",
      "s02.lead": "Two people who take a film from the first word of the script to the final grade.",
      "s02.photo": "Photo",
      "s02.p1role": "Role — to be filled",
      "s02.p2role": "Role — to be filled",
      "s02.w1t": "Full cycle in-house", "s02.w1p": "Script, shoot, edit, color and sound — one team.",
      "s02.w2t": "Cinema craft", "s02.w2p": "Film-grade look: staging, light, grade.",
      "s02.w3t": "AI previz", "s02.w3p": "We preview every frame before the shoot.",

      "s03.title": "How we see content",
      "s03.lead": "Not a set of clips — one world and one system. Every video speaks the same language and does its own job.",
      "s03.t1": "Brand", "s03.t1p": "The film and the showroom — they make people fall in love.",
      "s03.t2": "Sales", "s03.t2p": "VSL, villa tours, ads — they turn love into a deal.",
      "s03.t3": "Organic", "s03.t3p": "YouTube and Reels — a steady stream of new attention.",
      "s03.t4": "Team", "s03.t4p": "Training for sellers and brokers — everyone tells the same story.",
      "s03.funnel": "Discover → fall in love → buy → sell it on.",

      "s04.badge": "Approved by the client · in production",
      "s04.title": "Concept I — “Grand Budapest on Bang Tao”",
      "s04.lead": "A legendary Thai concierge answers one question in two minutes — “What is Gardens of Eden?” — and leads us through the garden, the home, the kitchen and the island, helping with his own hands in every story.",
      "s04.k1": "Symmetry & frontal staging", "s04.k2": "Chapter title cards", "s04.k3": "Deadpan humour",
      "s04.k4": "Sage green palette", "s04.k5": "60 frames scripted", "s04.k6": "Seamless loop ending",
      "s04.structLabel": "Film structure:",
      "s04.struct": "Prologue → Garden → Home → project insert R1–R12 → Kitchen → Phuket → Finale (loops back to frame 1)",

      "s05.badge": "In development", "s05.title": "Concept II",
      "s05.text": "An alternative creative territory — we will present it at the next meeting.",
      "s05.soon": "Coming soon",
      "s06.badge": "In development", "s06.title": "Concept III",
      "s06.text": "A third direction — so there is a real choice of worlds, not one option.",
      "s06.soon": "Coming soon",

      "s07.title": "Content map — every position",
      "s07.lead": "Everything a resort development needs, grouped into four tracks. We start with the film — the rest plugs into the same world.",
      "s07.c1t": "Brand",
      "s07.c1i1": "Brand film 2:00", "s07.c1i2": "Lobby loop (silent, seamless)", "s07.c1i3": "Project insert R1–R12",
      "s07.c1i4": "Cutdowns 30 / 15 sec", "s07.c1i5": "Verticals 9:16 per chapter", "s07.c1i6": "Behind the scenes",
      "s07.c2t": "Sales",
      "s07.c2i1": "VSL for the landing page", "s07.c2i2": "Ad spots 15–30 sec", "s07.c2i3": "Villa tours by unit type",
      "s07.c2i4": "Drone overview of Bang Tao", "s07.c2i5": "Construction updates", "s07.c2i6": "Virtual tour",
      "s07.c3t": "Organic",
      "s07.c3i1": "YouTube channel", "s07.c3i2": "Reels / Shorts / TikTok", "s07.c3i3": "Founder & expert interviews",
      "s07.c3i4": "Buyer testimonials", "s07.c3i5": "Event coverage",
      "s07.c4t": "Team",
      "s07.c4i1": "Sales team training library", "s07.c4i2": "Broker & agency kit", "s07.c4i3": "Investor video",
      "s07.c4i4": "Localisation RU / EN / ZH",

      "s08.title": "Brand film & showroom",
      "s08.lead": "The anchor of the whole system — one shoot, five deliverables.",
      "s08.d1": "Master 2:00 with sound — for the website and presentations",
      "s08.d2": "Lobby loop without sound — seamless, always on in the showroom",
      "s08.d3": "Project insert R1–R12 — renders of the development for pitches",
      "s08.d4": "Cutdowns 30 / 15 sec — for advertising",
      "s08.d5": "Verticals 9:16 from the chapters — for social media",
      "s08.statusLabel": "Status:",
      "s08.status": "script of 60 frames done, previz in progress.",

      "s09.title": "YouTube",
      "s09.lead": "A channel that builds demand for “life on Phuket” — and makes Gardens of Eden its answer.",
      "s09.f1": "Project overview films", "s09.f2": "Bang Tao neighbourhood guides",
      "s09.f3": "“Why Phuket” — investor explainers", "s09.f4": "Construction vlog until handover",
      "s09.f5": "Interviews with the team behind the project",
      "s09.metaLabel": "Cadence:", "s09.meta": "2–4 videos per month.",

      "s10.title": "Reels / Shorts",
      "s10.lead": "A vertical stream cut from the film shoots and the site — attention in the first second.",
      "s10.f1": "8–16 reels per month", "s10.f2": "Hooks from the film world — the concierge, the details, the island",
      "s10.f3": "Instagram, TikTok, YouTube Shorts", "s10.f4": "RU / EN versions",

      "s11.title": "VSL — video sales letter",
      "s11.lead": "A selling video for the landing page: it walks a cold visitor to a request.",
      "s11.f1": "Structure: dream → the project → the offer → call to action",
      "s11.f2": "3–5 minutes, presenter-led or narrated",
      "s11.f3": "A/B versions of the opening",
      "s11.f4": "RU / EN / ZH localisations",

      "s12.title": "Training videos for sellers",
      "s12.lead": "A closed video library so every seller and agent tells the project the same way.",
      "s12.f1": "The product by unit type — what to show and say",
      "s12.f2": "Objection handling — short answer clips",
      "s12.f3": "Onboarding for new agents",
      "s12.f4": "Broker & agency kit",

      "s13.title": "Sales & the site",
      "s13.lead": "Video that shows the development itself — and keeps trust alive until handover in Q4 2026.",
      "s13.f1": "Drone overview of Bang Tao and the site",
      "s13.f2": "Villa tours by unit type",
      "s13.f3": "Monthly construction updates",
      "s13.f4": "Buyer testimonials after handover",

      "s14.title": "Packages",
      "s14.lead": "Three ways to start — from the film alone to the full content system.",
      "s14.from": "from", "s14.choose": "Choose", "s14.popular": "Most chosen",
      "s14.t1Name": "Film",
      "s14.t1i1": "Brand film 2:00 + lobby loop", "s14.t1i2": "Insert R1–R12", "s14.t1i3": "Cutdowns + verticals",
      "s14.t2Name": "Film + Sales",
      "s14.t2i1": "Everything in “Film”", "s14.t2i2": "VSL + ad spots", "s14.t2i3": "Villa tours + drone",
      "s14.t2i4": "Sales team training library",
      "s14.t3Name": "Content system",
      "s14.t3i1": "Everything in “Film + Sales”", "s14.t3i2": "YouTube + Reels, monthly",
      "s14.t3i3": "Construction updates", "s14.t3i4": "Localisation RU / EN / ZH",
      "s14.note": "Numbers are filled in after the scope is agreed — this slide fixes the structure of the offer.",

      "s15.title": "Next step",
      "s15.lead": "Choose the concept, approve the content map — and we bring the budget and the calendar to the next meeting.",
      "s15.n1": "Concept — approved / discuss",
      "s15.n2": "Content map — pick the tracks to start with",
      "s15.n3": "Budget & timeline — we prepare within 3 days",
      "s15.chat": "WhatsApp / Telegram", "s15.email": "Email us",
    },
    ru: {
      "meta.description": "Gardens of Eden Пхукет — презентация видения и концепции контента.",
      "side.sub": "Vision & Concept",
      "side.g1": "Введение", "side.g2": "Концепции", "side.g3": "Контент-система", "side.g4": "Финал",
      "side.s01": "Титул", "side.s02": "О нас", "side.s03": "Как мы видим контент",
      "side.s04": "Концепция I", "side.s05": "Концепция II", "side.s06": "Концепция III",
      "side.s07": "Карта контента", "side.s08": "Бренд-фильм и шоурум", "side.s09": "YouTube",
      "side.s10": "Рилсы / Shorts", "side.s11": "VSL", "side.s12": "Обучение селлеров",
      "side.s13": "Продажи и объект", "side.s14": "Пакеты", "side.s15": "Следующий шаг",
      "side.hint": "Листайте клавишами ↑ ↓",

      "s01.eyebrow": "Контент-презентация · BPM Media",
      "s01.sub": "Vision & Concept",
      "s01.meta": "Банг Тао, Пхукет · сдача Q4 2026",
      "s01.hint": "Листайте вниз или нажмите ↓",

      "s02.title": "О нас",
      "s02.lead": "Два человека, которые ведут фильм от первого слова сценария до финального цвета.",
      "s02.photo": "Фото",
      "s02.p1role": "Роль — заполним",
      "s02.p2role": "Роль — заполним",
      "s02.w1t": "Полный цикл у нас", "s02.w1p": "Сценарий, съёмка, монтаж, цвет и звук — одна команда.",
      "s02.w2t": "Кино-качество", "s02.w2p": "Плёночный лук: мизансцена, свет, грейд.",
      "s02.w3t": "AI-превиз", "s02.w3p": "Каждый кадр показываем заранее — до съёмки.",

      "s03.title": "Как мы видим контент",
      "s03.lead": "Не набор роликов, а один мир и одна система. Каждое видео говорит на одном языке и решает свою задачу.",
      "s03.t1": "Бренд", "s03.t1p": "Фильм и шоурум — влюбляют в проект.",
      "s03.t2": "Продажи", "s03.t2p": "VSL, туры по виллам, реклама — превращают любовь в сделку.",
      "s03.t3": "Органика", "s03.t3p": "YouTube и рилсы — постоянный поток нового внимания.",
      "s03.t4": "Команда", "s03.t4p": "Обучение селлеров и брокеров — все рассказывают одну историю.",
      "s03.funnel": "Узнали → влюбились → купили → продают дальше.",

      "s04.badge": "Принята клиентом · в производстве",
      "s04.title": "Концепция I — «Гранд Будапешт на Банг Тао»",
      "s04.lead": "Легендарный тайский консьерж за две минуты отвечает на один вопрос — «что такое Gardens of Eden?» — и ведёт через сад, дом, кухню и остров, в каждой истории помогая своими руками.",
      "s04.k1": "Симметрия и фронтальные мизансцены", "s04.k2": "Главы-титры", "s04.k3": "Деадпан-юмор",
      "s04.k4": "Палитра sage green", "s04.k5": "60 кадров в сценарии", "s04.k6": "Бесшовный луп в финале",
      "s04.structLabel": "Структура фильма:",
      "s04.struct": "Пролог → Сад → Дом → врезка о проекте R1–R12 → Кухня → Пхукет → Финал (стыкуется в кадр 1)",

      "s05.badge": "В разработке", "s05.title": "Концепция II",
      "s05.text": "Альтернативная креативная территория — представим на следующей встрече.",
      "s05.soon": "Скоро",
      "s06.badge": "В разработке", "s06.title": "Концепция III",
      "s06.text": "Третье направление — чтобы выбор миров был настоящим, а не из одного варианта.",
      "s06.soon": "Скоро",

      "s07.title": "Карта контента — все позиции",
      "s07.lead": "Всё, что нужно курортному девелоперу, — в четырёх треках. Начинаем с фильма, остальное подключается к тому же миру.",
      "s07.c1t": "Бренд",
      "s07.c1i1": "Бренд-фильм 2:00", "s07.c1i2": "Лобби-луп (без звука, бесшовный)", "s07.c1i3": "Врезка о проекте R1–R12",
      "s07.c1i4": "Катдауны 30 / 15 сек", "s07.c1i5": "Вертикали 9:16 по главам", "s07.c1i6": "Бэкстейдж",
      "s07.c2t": "Продажи",
      "s07.c2i1": "VSL для лендинга", "s07.c2i2": "Рекламные ролики 15–30 сек", "s07.c2i3": "Туры по виллам по типам",
      "s07.c2i4": "Дрон-обзор Банг Тао", "s07.c2i5": "Стройка-апдейты", "s07.c2i6": "Виртуальный тур",
      "s07.c3t": "Органика",
      "s07.c3i1": "YouTube-канал", "s07.c3i2": "Рилсы / Shorts / TikTok", "s07.c3i3": "Интервью с основателями и экспертами",
      "s07.c3i4": "Отзывы покупателей", "s07.c3i5": "Событийные видео",
      "s07.c4t": "Команда",
      "s07.c4i1": "Обучающая библиотека для селлеров", "s07.c4i2": "Пакет для брокеров и агентств", "s07.c4i3": "Инвестор-видео",
      "s07.c4i4": "Локализация RU / EN / ZH",

      "s08.title": "Бренд-фильм и шоурум",
      "s08.lead": "Якорь всей системы — одна съёмка, пять деливераблов.",
      "s08.d1": "Мастер 2:00 со звуком — для сайта и презентаций",
      "s08.d2": "Лобби-луп без звука — бесшовный, крутится в шоуруме постоянно",
      "s08.d3": "Врезка о проекте R1–R12 — рендеры объекта для питчей",
      "s08.d4": "Катдауны 30 / 15 сек — для рекламы",
      "s08.d5": "Вертикали 9:16 из глав — для соцсетей",
      "s08.statusLabel": "Статус:",
      "s08.status": "сценарий на 60 кадров готов, превиз в работе.",

      "s09.title": "YouTube",
      "s09.lead": "Канал, который создаёт спрос на «жизнь на Пхукете» — и делает Gardens of Eden ответом.",
      "s09.f1": "Обзорные фильмы о проекте", "s09.f2": "Гиды по району Банг Тао",
      "s09.f3": "«Почему Пхукет» — ролики для инвесторов", "s09.f4": "Влог стройки до сдачи",
      "s09.f5": "Интервью с командой проекта",
      "s09.metaLabel": "Ритм:", "s09.meta": "2–4 видео в месяц.",

      "s10.title": "Рилсы / Shorts",
      "s10.lead": "Вертикальный поток из съёмок фильма и объекта — внимание в первую секунду.",
      "s10.f1": "8–16 рилсов в месяц", "s10.f2": "Хуки из мира фильма — консьерж, детали, остров",
      "s10.f3": "Instagram, TikTok, YouTube Shorts", "s10.f4": "Версии RU / EN",

      "s11.title": "VSL — продающее видео",
      "s11.lead": "Видео для лендинга: проводит холодного посетителя до заявки.",
      "s11.f1": "Структура: мечта → проект → оффер → призыв к действию",
      "s11.f2": "3–5 минут, с ведущим или закадром",
      "s11.f3": "A/B-версии открытия",
      "s11.f4": "Локализации RU / EN / ZH",

      "s12.title": "Обучающие видео для селлеров",
      "s12.lead": "Закрытая видеобиблиотека, чтобы каждый селлер и агент рассказывал проект одинаково.",
      "s12.f1": "Продукт по типам юнитов — что показывать и говорить",
      "s12.f2": "Отработка возражений — короткие ролики-ответы",
      "s12.f3": "Онбординг новых агентов",
      "s12.f4": "Пакет для брокеров и агентств",

      "s13.title": "Продажи и объект",
      "s13.lead": "Видео, которое показывает сам объект — и держит доверие до сдачи в Q4 2026.",
      "s13.f1": "Дрон-обзор Банг Тао и объекта",
      "s13.f2": "Туры по виллам по типам",
      "s13.f3": "Ежемесячные стройка-апдейты",
      "s13.f4": "Отзывы покупателей после сдачи",

      "s14.title": "Пакеты",
      "s14.lead": "Три способа начать — от одного фильма до полной контент-системы.",
      "s14.from": "от", "s14.choose": "Выбрать", "s14.popular": "Чаще выбирают",
      "s14.t1Name": "Фильм",
      "s14.t1i1": "Бренд-фильм 2:00 + лобби-луп", "s14.t1i2": "Врезка R1–R12", "s14.t1i3": "Катдауны + вертикали",
      "s14.t2Name": "Фильм + Продажи",
      "s14.t2i1": "Всё из «Фильма»", "s14.t2i2": "VSL + рекламные ролики", "s14.t2i3": "Туры по виллам + дрон",
      "s14.t2i4": "Обучающая библиотека для селлеров",
      "s14.t3Name": "Контент-система",
      "s14.t3i1": "Всё из «Фильм + Продажи»", "s14.t3i2": "YouTube + рилсы, ежемесячно",
      "s14.t3i3": "Стройка-апдейты", "s14.t3i4": "Локализация RU / EN / ZH",
      "s14.note": "Цифры появятся после согласования объёма — этот слайд фиксирует структуру предложения.",

      "s15.title": "Следующий шаг",
      "s15.lead": "Выбираем концепцию, утверждаем карту контента — и к следующей встрече мы приносим смету и календарь.",
      "s15.n1": "Концепция — утвердить / обсудить",
      "s15.n2": "Карта контента — выбрать стартовые треки",
      "s15.n3": "Смета и график — готовим за 3 дня",
      "s15.chat": "WhatsApp / Telegram", "s15.email": "Написать на почту",
    },
  };

  /* ---- elements ---- */
  var deck = document.getElementById("deck");
  var slides = Array.prototype.slice.call(document.querySelectorAll(".slide"));
  var navLinks = Array.prototype.slice.call(document.querySelectorAll("[data-slide]"));
  var counter = document.getElementById("counter");
  var counterM = document.getElementById("counterM");
  var total = document.getElementById("total");
  var totalM = document.getElementById("totalM");
  var progress = document.getElementById("progress");
  var burger = document.getElementById("burger");
  var current = 0;

  function pad2(n) { return n < 10 ? "0" + n : String(n); }
  if (total) total.textContent = pad2(slides.length);
  if (totalM) totalM.textContent = pad2(slides.length);

  /* ---- i18n ---- */
  function applyLang(lang) {
    var dict = I18N[lang] || I18N.en;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (!(key in dict)) return;
      var attr = el.getAttribute("data-i18n-attr");
      if (attr) el.setAttribute(attr, dict[key]);
      else el.textContent = dict[key];
    });
    document.documentElement.lang = lang;
    document.querySelectorAll(".langswitch button").forEach(function (b) {
      b.classList.toggle("is-active", b.getAttribute("data-lang") === lang);
    });
    try { localStorage.setItem("goe-lang", lang); } catch (e) {}
  }
  function initLang() {
    var saved;
    try { saved = localStorage.getItem("goe-lang"); } catch (e) {}
    var nav0 = (navigator.language || "en").toLowerCase();
    applyLang(saved || (nav0.indexOf("ru") === 0 ? "ru" : "en"));
  }
  document.querySelectorAll(".langswitch button").forEach(function (b) {
    b.addEventListener("click", function () { applyLang(b.getAttribute("data-lang")); });
  });

  /* ---- currency ---- */
  function applyCurrency(cur) {
    document.querySelectorAll("[data-usd]").forEach(function (el) {
      var v = el.getAttribute(cur === "rub" ? "data-rub" : "data-usd");
      if (v) el.textContent = v;
    });
    document.querySelectorAll(".curswitch button").forEach(function (b) {
      b.classList.toggle("is-active", b.getAttribute("data-cur") === cur);
    });
    try { localStorage.setItem("goe-cur", cur); } catch (e) {}
  }
  document.querySelectorAll(".curswitch button").forEach(function (b) {
    b.addEventListener("click", function () { applyCurrency(b.getAttribute("data-cur")); });
  });
  (function initCurrency() {
    var saved;
    try { saved = localStorage.getItem("goe-cur"); } catch (e) {}
    applyCurrency(saved || "usd");
  })();

  /* ---- active slide tracking ---- */
  function setActive(index) {
    if (index === current) return;
    current = index;
    var id = "#" + slides[index].id;
    navLinks.forEach(function (a) {
      a.classList.toggle("is-active", a.getAttribute("href") === id);
    });
    var label = pad2(index + 1);
    if (counter) counter.textContent = label;
    if (counterM) counterM.textContent = label;
    if (progress) progress.style.width = ((index + 1) / slides.length) * 100 + "%";
    if (history.replaceState) history.replaceState(null, "", id);
  }

  if ("IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var idx = slides.indexOf(entry.target);
        if (idx >= 0) setActive(idx);
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
    slides.forEach(function (s) { spy.observe(s); });
  }
  /* Initialize counter/progress for slide 0 */
  navLinks.forEach(function (a) { a.classList.toggle("is-active", a.getAttribute("href") === "#" + slides[0].id); });
  if (progress) progress.style.width = (1 / slides.length) * 100 + "%";

  /* ---- keyboard navigation ---- */
  function go(index) {
    var i = Math.max(0, Math.min(slides.length - 1, index));
    slides[i].scrollIntoView({ behavior: prefersReduced() ? "auto" : "smooth" });
  }
  function prefersReduced() {
    return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
  document.addEventListener("keydown", function (e) {
    if (e.target && /^(input|textarea|select)$/i.test(e.target.tagName)) return;
    switch (e.key) {
      case "ArrowDown": case "ArrowRight": case "PageDown": case " ":
        e.preventDefault(); go(current + 1); break;
      case "ArrowUp": case "ArrowLeft": case "PageUp":
        e.preventDefault(); go(current - 1); break;
      case "Home": e.preventDefault(); go(0); break;
      case "End": e.preventDefault(); go(slides.length - 1); break;
      case "Escape": closeMenu(); break;
    }
  });

  /* ---- mobile menu ---- */
  function closeMenu() {
    document.body.classList.remove("menu-open");
    if (burger) burger.setAttribute("aria-expanded", "false");
  }
  if (burger) {
    burger.addEventListener("click", function () {
      var open = document.body.classList.toggle("menu-open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
  navLinks.forEach(function (a) { a.addEventListener("click", closeMenu); });

  /* ---- init ---- */
  initLang();
})();
