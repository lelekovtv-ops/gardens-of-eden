/* Campaign proposal site — nav, i18n (RU/EN), currency, reveals.
   Plain JS, no build. Both languages are complete so the toggle never
   shows an empty/half-translated section. */

(function () {
  "use strict";

  /* ============================================================
     i18n dictionary — EN + RU (keep both in sync)
     ============================================================ */
  var I18N = {
    en: {
      "meta.description": "Video advertising campaign proposal — brand film, showroom reel, ad spots.",
      "brand.name": "Studio",
      "nav.concept": "Concept", "nav.work": "Work", "nav.process": "Process",
      "nav.pricing": "Pricing", "nav.about": "About", "nav.contact": "Contact", "nav.cta": "Discuss",
      "hero.eyebrow": "Campaign proposal · Client · 2026",
      "hero.title": "A film that makes the brand impossible to ignore.",
      "hero.lede": "A brand film, a showroom reel and a series of 20-second ad spots — one campaign, one production team.",
      "hero.ctaPrimary": "See the work", "hero.ctaSecondary": "Packages & pricing", "hero.scroll": "Begin",
      "concept.title": "The Concept",
      "concept.lead": "The creative direction for the campaign — the world, the tone, the feeling the brand should leave behind.",
      "concept.tagLead": "Direction A", "concept.c1Title": "Gardens of Eden",
      "concept.c1Text": "Botanical, symmetrical, warm — precise framing and a lush palette. A cinematic, unhurried world.",
      "concept.tag2": "Direction B", "concept.c2Title": "Concept two",
      "concept.c2Text": "An alternative creative territory — to be developed together with the client.",
      "concept.tag3": "More", "concept.c3Title": "Further directions",
      "concept.c3Text": "Additional creative directions on request.",
      "work.title": "The Work", "work.lead": "Three products, one production. Each is built to do a specific job.",
      "work.comingSoon": "Video coming soon",
      "work.d1Title": "Showroom Reel",
      "work.d1Purpose": "A seamless loop for the showroom screens — reads with the sound off, always on.",
      "work.d1Spec": "Looping · no-audio-reliant · 16:9 & vertical for in-store screens",
      "work.d2Title": "Company / Brand Film",
      "work.d2Purpose": "A ~2-minute cinematic film that tells the company's story — the anchor of the campaign.",
      "work.d2Spec": "~2 min · 16:9 cinematic · full sound design",
      "work.d3Title": "Ad Spots · 20 sec",
      "work.d3Purpose": "A set of short spots for social and paid media — cut for attention in the first second.",
      "work.d3Spec": "Several × 20s · 16:9 / 9:16 / 1:1 / 4:5",
      "process.title": "Process & Timeline",
      "process.lead": "From first idea to final delivery — a clear path, typically 5–7 weeks.",
      "process.p1Title": "Pre-production", "process.p1Text": "Script, storyboard, casting, locations.", "process.p1Meta": "~1–2 weeks",
      "process.p2Title": "Production", "process.p2Text": "The shoot — crew, camera, light, art.", "process.p2Meta": "2–4 shoot days",
      "process.p3Title": "Post-production", "process.p3Text": "Edit, color, sound design, VFX.", "process.p3Meta": "~2–3 weeks",
      "process.p4Title": "Delivery", "process.p4Text": "All formats, revisions, handoff.", "process.p4Meta": "~1 week",
      "pricing.title": "Packages & Pricing",
      "pricing.lead": "Everything below is produced in-house — from script to final grade. Transparent packages, no surprises.",
      "pricing.from": "from",
      "pricing.t1Name": "Essential", "pricing.t1For": "One hero deliverable, done beautifully.",
      "pricing.t1i1": "Showroom reel OR 3× 20-sec spots", "pricing.t1i2": "1 shoot day", "pricing.t1i3": "1 creative concept",
      "pricing.t1i4": "Color grade + basic sound", "pricing.t1i5": "HD · 16:9 + vertical", "pricing.t1i6": "2 revision rounds",
      "pricing.popular": "Most chosen",
      "pricing.t2Name": "Signature", "pricing.t2For": "The full campaign — film, reel and spots.",
      "pricing.t2i1": "Brand film (~2 min)", "pricing.t2i2": "Showroom reel + 3× 20-sec spots", "pricing.t2i3": "2 shoot days",
      "pricing.t2i4": "Up to 2 concepts", "pricing.t2i5": "Full grade + sound design", "pricing.t2i6": "4K · all social formats", "pricing.t2i7": "3 revision rounds",
      "pricing.t3Name": "Premiere", "pricing.t3For": "The flagship — every format, no compromise.",
      "pricing.t3i1": "Everything in Signature", "pricing.t3i2": "6× 20-sec spots", "pricing.t3i3": "3 shoot days",
      "pricing.t3i4": "Original music + motion graphics", "pricing.t3i5": "4K / HDR · all formats", "pricing.t3i6": "Stills + BTS package", "pricing.t3i7": "Priority scheduling",
      "pricing.t4Name": "Custom", "pricing.t4For": "Bigger scope, multiple locations, a bespoke idea? Let's build it together.",
      "pricing.choose": "Choose", "pricing.quote": "Request a quote",
      "pricing.note": "Prices are indicative and confirmed after a short scoping call.",
      "about.title": "About Us",
      "about.lead": "A production studio that takes a film from the first word of the script to the final grade — in-house.",
      "about.r1": "Director", "about.r2": "DP / Cinematographer", "about.r3": "Producer", "about.r4": "Editor / Colorist",
      "about.n1": "Name", "about.n2": "Name", "about.n3": "Name", "about.n4": "Name",
      "about.w1t": "In-house, end to end", "about.w1p": "Script, shoot, edit, color and sound under one roof.",
      "about.w2t": "Our own gear", "about.w2p": "Cinema camera and lighting — no rental delays.",
      "about.w3t": "Fast turnaround", "about.w3p": "A full campaign in weeks, not months.",
      "about.clients": "Selected work & clients",
      "contact.title": "Next Step",
      "contact.lead": "Pick a package or tell us the idea — a short call is the fastest way to a plan and a number.",
      "contact.book": "Book a 15-min call", "contact.chat": "WhatsApp / Telegram", "contact.email": "Email us",
      "footer.tag": "Campaign proposal",
    },
    ru: {
      "meta.description": "Предложение по видеорекламной кампании — фильм о компании, реел для шоурума, ролики.",
      "brand.name": "Студия",
      "nav.concept": "Концепция", "nav.work": "Работы", "nav.process": "Процесс",
      "nav.pricing": "Стоимость", "nav.about": "О нас", "nav.contact": "Контакт", "nav.cta": "Обсудить",
      "hero.eyebrow": "Предложение по кампании · Клиент · 2026",
      "hero.title": "Фильм, после которого бренд невозможно не заметить.",
      "hero.lede": "Фильм о компании, реел для шоурума и серия 20-секундных роликов — одна кампания, одна команда продакшена.",
      "hero.ctaPrimary": "Смотреть работы", "hero.ctaSecondary": "Пакеты и цены", "hero.scroll": "Начать",
      "concept.title": "Концепция",
      "concept.lead": "Креативное направление кампании — мир, тон и ощущение, которое должен оставлять бренд.",
      "concept.tagLead": "Направление A", "concept.c1Title": "Gardens of Eden",
      "concept.c1Text": "Ботаника, симметрия, тепло — выверенные кадры и насыщенная палитра. Кинематографичный, неспешный мир.",
      "concept.tag2": "Направление B", "concept.c2Title": "Концепция два",
      "concept.c2Text": "Альтернативное креативное направление — разрабатываем вместе с клиентом.",
      "concept.tag3": "Ещё", "concept.c3Title": "Другие направления",
      "concept.c3Text": "Дополнительные направления — по запросу.",
      "work.title": "Работы", "work.lead": "Три продукта, один продакшен. Каждый решает свою задачу.",
      "work.comingSoon": "Видео скоро",
      "work.d1Title": "Реел для шоурума",
      "work.d1Purpose": "Бесшовная петля для экранов в шоуруме — читается без звука, крутится постоянно.",
      "work.d1Spec": "Петля · без опоры на звук · 16:9 и вертикаль для экранов в зале",
      "work.d2Title": "Фильм о компании",
      "work.d2Purpose": "Кинематографичный фильм ~2 минуты, рассказывающий историю компании — ядро кампании.",
      "work.d2Spec": "~2 мин · 16:9 кино · полный саунд-дизайн",
      "work.d3Title": "Рекламные ролики · 20 сек",
      "work.d3Purpose": "Серия коротких роликов для соцсетей и рекламы — смонтированы, чтобы захватить внимание в первую секунду.",
      "work.d3Spec": "Несколько × 20 сек · 16:9 / 9:16 / 1:1 / 4:5",
      "process.title": "Процесс и сроки",
      "process.lead": "От первой идеи до финальной сдачи — понятный путь, обычно 5–7 недель.",
      "process.p1Title": "Препродакшн", "process.p1Text": "Сценарий, раскадровка, кастинг, локации.", "process.p1Meta": "~1–2 недели",
      "process.p2Title": "Съёмка", "process.p2Text": "Съёмочные дни — команда, камера, свет, декорации.", "process.p2Meta": "2–4 съёмочных дня",
      "process.p3Title": "Постпродакшн", "process.p3Text": "Монтаж, цвет, саунд-дизайн, графика.", "process.p3Meta": "~2–3 недели",
      "process.p4Title": "Сдача", "process.p4Text": "Все форматы, правки, передача материалов.", "process.p4Meta": "~1 неделя",
      "pricing.title": "Пакеты и цены",
      "pricing.lead": "Всё ниже мы делаем сами — от сценария до финального цвета. Прозрачные пакеты, без сюрпризов.",
      "pricing.from": "от",
      "pricing.t1Name": "Базовый", "pricing.t1For": "Один ключевой продукт, сделанный красиво.",
      "pricing.t1i1": "Реел для шоурума ИЛИ 3× ролика по 20 сек", "pricing.t1i2": "1 съёмочный день", "pricing.t1i3": "1 креативная концепция",
      "pricing.t1i4": "Цветокоррекция + базовый звук", "pricing.t1i5": "HD · 16:9 + вертикаль", "pricing.t1i6": "2 круга правок",
      "pricing.popular": "Чаще выбирают",
      "pricing.t2Name": "Оптимальный", "pricing.t2For": "Полная кампания — фильм, реел и ролики.",
      "pricing.t2i1": "Фильм о компании (~2 мин)", "pricing.t2i2": "Реел для шоурума + 3× ролика по 20 сек", "pricing.t2i3": "2 съёмочных дня",
      "pricing.t2i4": "До 2 концепций", "pricing.t2i5": "Полный цвет + саунд-дизайн", "pricing.t2i6": "4K · все форматы для соцсетей", "pricing.t2i7": "3 круга правок",
      "pricing.t3Name": "Премиальный", "pricing.t3For": "Флагман — все форматы, без компромиссов.",
      "pricing.t3i1": "Всё из «Оптимального»", "pricing.t3i2": "6× роликов по 20 сек", "pricing.t3i3": "3 съёмочных дня",
      "pricing.t3i4": "Оригинальная музыка + моушн-графика", "pricing.t3i5": "4K / HDR · все форматы", "pricing.t3i6": "Фотографии + backstage-пакет", "pricing.t3i7": "Приоритет в графике",
      "pricing.t4Name": "Индивидуальный", "pricing.t4For": "Больше масштаб, несколько локаций, особая идея? Соберём под вас.",
      "pricing.choose": "Выбрать", "pricing.quote": "Запросить смету",
      "pricing.note": "Цены ориентировочные и подтверждаются после короткого созвона по задаче.",
      "about.title": "О нас",
      "about.lead": "Продакшен-студия, которая ведёт фильм от первого слова сценария до финального цвета — своими силами.",
      "about.r1": "Режиссёр", "about.r2": "Оператор-постановщик", "about.r3": "Продюсер", "about.r4": "Монтаж / колорист",
      "about.n1": "Имя", "about.n2": "Имя", "about.n3": "Имя", "about.n4": "Имя",
      "about.w1t": "Полный цикл у нас", "about.w1p": "Сценарий, съёмка, монтаж, цвет и звук — под одной крышей.",
      "about.w2t": "Своё оборудование", "about.w2p": "Кинокамера и свет — без задержек на аренду.",
      "about.w3t": "Быстрые сроки", "about.w3p": "Полная кампания за недели, а не месяцы.",
      "about.clients": "Избранные работы и клиенты",
      "contact.title": "Следующий шаг",
      "contact.lead": "Выберите пакет или расскажите идею — короткий созвон это самый быстрый путь к плану и смете.",
      "contact.book": "Записаться на 15-мин звонок", "contact.chat": "WhatsApp / Telegram", "contact.email": "Написать на почту",
      "footer.tag": "Предложение по кампании",
    },
  };

  var nav = document.getElementById("nav");
  var navToggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");
  var links = Array.prototype.slice.call(document.querySelectorAll("[data-nav]"));

  /* ---- i18n apply ---- */
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
    var lang = saved || (nav0.indexOf("ru") === 0 ? "ru" : "en");
    applyLang(lang);
  }
  document.querySelectorAll(".langswitch button").forEach(function (b) {
    b.addEventListener("click", function () { applyLang(b.getAttribute("data-lang")); });
  });

  /* ---- currency swap ---- */
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
  function initCurrency() {
    var saved;
    try { saved = localStorage.getItem("goe-cur"); } catch (e) {}
    applyCurrency(saved || "usd");
  }
  document.querySelectorAll(".curswitch button").forEach(function (b) {
    b.addEventListener("click", function () { applyCurrency(b.getAttribute("data-cur")); });
  });

  /* ---- Nav background after scroll ---- */
  function onScroll() {
    if (window.scrollY > 24) nav.classList.add("is-scrolled");
    else nav.classList.remove("is-scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Mobile menu ---- */
  function closeMenu() { nav.classList.remove("is-open"); navToggle.setAttribute("aria-expanded", "false"); }
  navToggle.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  navLinks.addEventListener("click", function (e) { if (e.target.closest("a")) closeMenu(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });

  /* ---- Active-section highlight ---- */
  var sections = links
    .map(function (a) { return document.querySelector(a.getAttribute("href")); })
    .filter(Boolean);
  if ("IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.id;
        links.forEach(function (a) { a.classList.toggle("is-active", a.getAttribute("href") === "#" + id); });
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---- Reveal on scroll ---- */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if ("IntersectionObserver" in window) {
    var revealObs = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("is-in"); obs.unobserve(entry.target); }
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.1 });
    revealEls.forEach(function (el) { revealObs.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-in"); });
  }

  /* ---- Footer year ---- */
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  /* ---- init ---- */
  initLang();
  initCurrency();
})();
