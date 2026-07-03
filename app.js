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
      "side.g1": "Introduction", "side.g2": "Films", "side.g3": "Channels", "side.g4": "Closing",
      "side.s01": "Title", "side.s02": "About us", "side.s03": "The product: 10 advantages",
      "side.s04": "How we see content",
      "side.s05": "Flagship film 2:00", "side.s06": "Company film", "side.s07": "Ad spots · targeting",
      "side.s08": "Showroom package",
      "side.s09": "Content map", "side.s10": "YouTube", "side.s11": "Reels / Shorts",
      "side.s12": "VSL", "side.s13": "Sales team training", "side.s14": "The site on camera",
      "side.s15": "Packages", "side.s16": "Next step",
      "side.hint": "Use ↑ ↓ keys",

      "s01.eyebrow": "Content presentation · BPM Media",
      "s01.sub": "Vision & Concept",
      "s01.meta": "Bang Tao, Phuket · 50 m to the beach · handover Q4 2026",
      "s01.hint": "Scroll or press ↓ to begin",

      "s02.title": "About us",
      "s02.lead": "Two people who take a film from the first word of the script to the final grade.",
      "s02.photo": "Photo",
      "s02.p1role": "Role — to be filled",
      "s02.p2role": "Role — to be filled",
      "s02.w1t": "Full cycle in-house", "s02.w1p": "Script, shoot, edit, color and sound — one team.",
      "s02.w2t": "Cinema craft", "s02.w2p": "Film-grade look: staging, light, grade.",
      "s02.w3t": "AI previz", "s02.w3p": "We preview every frame before the shoot.",

      "s03.title": "The product — Eden in 10 advantages",
      "s03.lead": "Every buyer fear on Bang Tao — and how Eden closes it. This is the message platform all the content is built on.",
      "s03.f1": "Dense construction, greenery squeezed between buildings", "s03.w1": "70% of the land is a park — 12 ha, low-density",
      "s03.f2": "A courtyard that belongs to cars", "s03.w2": "Car-free: cars go underground, gardens above",
      "s03.f3": "Shared lobbies and long corridors", "s03.w3": "Elevator from the parking straight to your floor",
      "s03.f4": "Standard 2.7 m ceilings", "s03.w4": "3.2 m ceilings — air from the doorway",
      "s03.f5": "Hearing the neighbours upstairs", "s03.w5": "Triple glazing + thick slabs — engineered silence",
      "s03.f6": "One lobby bar for the whole complex", "s03.w6": "Six restaurants of its own — resort-level dining",
      "s03.f7": "One standard pool in the yard", "s03.w7": "Infinity pool, sand-entry lagoon, 150 m pool",
      "s03.f8": "A gym in the basement", "s03.w8": "Flagship wellness centre and clubhouse",
      "s03.f9": "Nowhere to take the kids", "s03.w9": "A kids' club building, school nearby, Boat Avenue in 5 min",
      "s03.f10": "Crowds and walk-through grounds", "s03.w10": "50 steps to the sea, gated grounds, privacy",
      "s03.note": "Figures to be cross-checked against the developer's current brochure before client use.",

      "s04.title": "How we see content",
      "s04.lead": "One world, one system. The flagship film sets the language — every other format reuses its world, footage and tone.",
      "s04.t1": "Brand", "s04.t1p": "The flagship film and the showroom — they make people fall in love.",
      "s04.t2": "Sales", "s04.t2p": "Ad spots, VSL, unit tours — they turn love into a deal.",
      "s04.t3": "Organic", "s04.t3p": "YouTube and Reels — a steady stream of new attention.",
      "s04.t4": "Team", "s04.t4p": "Training for sellers and brokers — everyone tells the same story.",
      "s04.funnel": "Discover → fall in love → buy → sell it on.",

      "s05.kicker": "Flagship · game film 2:00 — concept",
      "s05.prevAria": "Previous concept", "s05.nextAria": "Next concept",
      "s05.p1badge": "Approved by the client · in production",
      "s05.p1title": "Concept I — “Grand Budapest on Bang Tao”",
      "s05.p1spec": "2:00 · 16:9 · game film",
      "s05.p1lead": "A legendary Thai concierge answers one question in two minutes — “What is Gardens of Eden?” — and leads us through the garden, the home, the kitchen and the island, helping with his own hands in every story.",
      "s05.p1k1": "Symmetry & frontal staging", "s05.p1k2": "Chapter title cards",
      "s05.p1k3": "Deadpan humour", "s05.p1k4": "Seamless loop ending",
      "s05.p1media": "Key frame · Prologue",
      "s05.p2badge": "In development", "s05.p2title": "Concept II", "s05.p2spec": "Alternative direction",
      "s05.p2lead": "An alternative creative territory — we develop it together with the client.",
      "s05.p2media": "Coming soon",
      "s05.p3badge": "In development", "s05.p3title": "Concept III", "s05.p3spec": "Alternative direction",
      "s05.p3lead": "A third direction — so there is a real choice of worlds, not one option.",
      "s05.p3media": "Coming soon",

      "s06.badge": "In development",
      "s06.title": "Company film — the founders",
      "s06.spec": "3–5 min · interview + b-roll · website, YouTube, sales office",
      "s06.lead": "The people behind Eden, on camera: why this project, the 70%-park philosophy, the team and the build. Trust through faces — the film a buyer watches before wiring the deposit.",
      "s06.f1": "Founders tell the concept in their own words",
      "s06.f2": "B-roll of the site, renders and construction",
      "s06.f3": "Works for buyers, brokers and investors",
      "s06.f4": "RU / EN / ZH subtitled versions",

      "s07.badge": "Series of 10",
      "s07.title": "Ad spots — targeting",
      "s07.spec": "15–30 sec each · 9:16 / 1:1 / 16:9 · paid social & pre-roll",
      "s07.lead": "Each spot closes ONE buyer fear with ONE Eden advantage — straight from the 10-advantage platform on slide 03.",
      "s07.f1": "“Silence” — the neighbour is loud, your home is not",
      "s07.f2": "“Car-free” — the courtyard belongs to children",
      "s07.f3": "“50 steps” — from the gate to the sea",
      "s07.f4": "…one spot per advantage, 10 in the series",
      "s07.metaLabel": "Hooks:", "s07.meta": "attention in the first second, RU / EN / ZH versions per audience.",

      "s08.title": "Showroom package",
      "s08.spec": "Derived from the flagship shoot — one production, five deliverables",
      "s08.d1": "Master 2:00 with sound — for the website and presentations",
      "s08.d2": "Lobby loop without sound — seamless, always on in the showroom",
      "s08.d3": "Project insert R1–R12 — renders of the development for pitches",
      "s08.d4": "Cutdowns 30 / 15 sec — for advertising",
      "s08.d5": "Verticals 9:16 from the chapters — for social media",
      "s08.statusLabel": "Status:",
      "s08.status": "script of 60 frames done, previz in progress.",

      "s09.title": "Content map — every position",
      "s09.lead": "Everything a resort development needs, grouped into four tracks. We start with the films — the rest plugs into the same world.",
      "s09.c1t": "Brand",
      "s09.c1i1": "Flagship film 2:00", "s09.c1i2": "Company film (founders)", "s09.c1i3": "Lobby loop (silent, seamless)",
      "s09.c1i4": "Project insert R1–R12", "s09.c1i5": "Cutdowns + verticals", "s09.c1i6": "Behind the scenes",
      "s09.c2t": "Sales",
      "s09.c2i1": "Ad spots — series of 10", "s09.c2i2": "VSL for the landing page", "s09.c2i3": "Unit tours by type",
      "s09.c2i4": "Drone overview of Bang Tao", "s09.c2i5": "Construction updates", "s09.c2i6": "Virtual tour",
      "s09.c3t": "Organic",
      "s09.c3i1": "YouTube channel", "s09.c3i2": "Reels / Shorts / TikTok", "s09.c3i3": "Founder & expert interviews",
      "s09.c3i4": "Buyer testimonials", "s09.c3i5": "Event coverage",
      "s09.c4t": "Team",
      "s09.c4i1": "Sales team training library", "s09.c4i2": "Broker & agency kit", "s09.c4i3": "Investor video",
      "s09.c4i4": "Localisation RU / EN / ZH",

      "s10.title": "YouTube",
      "s10.lead": "A channel that builds demand for “life on Phuket” — and makes Gardens of Eden its answer.",
      "s10.f1": "Project overview films", "s10.f2": "Bang Tao neighbourhood guides",
      "s10.f3": "“Why Phuket” — investor explainers", "s10.f4": "Construction vlog until handover",
      "s10.f5": "Interviews with the team behind the project",
      "s10.metaLabel": "Cadence:", "s10.meta": "2–4 videos per month.",

      "s11.title": "Reels / Shorts",
      "s11.lead": "A vertical stream cut from the film shoots and the site — attention in the first second.",
      "s11.f1": "8–16 reels per month", "s11.f2": "Hooks from the film world — the concierge, the details, the island",
      "s11.f3": "Instagram, TikTok, YouTube Shorts", "s11.f4": "RU / EN versions",

      "s12.title": "VSL — video sales letter",
      "s12.lead": "A selling video for the landing page: it walks a cold visitor to a request.",
      "s12.f1": "Structure: dream → the project → the offer → call to action",
      "s12.f2": "3–5 minutes, presenter-led or narrated",
      "s12.f3": "A/B versions of the opening",
      "s12.f4": "RU / EN / ZH localisations",

      "s13.title": "Training videos for sellers",
      "s13.lead": "A closed video library so every seller and agent tells the project the same way.",
      "s13.f1": "The product by unit type — what to show and say",
      "s13.f2": "Objection handling — the 10 advantages as answer clips",
      "s13.f3": "Onboarding for new agents",
      "s13.f4": "Broker & agency kit",

      "s14.title": "The site on camera",
      "s14.lead": "Video that shows the development itself — and keeps trust alive until handover in Q4 2026.",
      "s14.f1": "Drone overview of Bang Tao and the site",
      "s14.f2": "Unit tours by type",
      "s14.f3": "Monthly construction updates",
      "s14.f4": "Buyer testimonials after handover",

      "s15.title": "Packages",
      "s15.lead": "Three ways to start — from the flagship film alone to the full content system.",
      "s15.from": "from", "s15.choose": "Choose", "s15.popular": "Most chosen",
      "s15.t1Name": "Films",
      "s15.t1i1": "Flagship film 2:00 + lobby loop", "s15.t1i2": "Company film (founders)",
      "s15.t1i3": "Insert R1–R12, cutdowns, verticals",
      "s15.t2Name": "Films + Sales",
      "s15.t2i1": "Everything in “Films”", "s15.t2i2": "Ad spots — series of 10",
      "s15.t2i3": "VSL + unit tours + drone", "s15.t2i4": "Sales team training library",
      "s15.t3Name": "Content system",
      "s15.t3i1": "Everything in “Films + Sales”", "s15.t3i2": "YouTube + Reels, monthly",
      "s15.t3i3": "Construction updates", "s15.t3i4": "Localisation RU / EN / ZH",
      "s15.note": "Numbers are filled in after the scope is agreed — this slide fixes the structure of the offer.",

      "s16.title": "Next step",
      "s16.lead": "Approve the content map — and we bring the budget and the calendar to the next meeting.",
      "s16.n1": "Flagship film — in production, casting the concierge",
      "s16.n2": "Content map — pick the tracks to start with",
      "s16.n3": "Budget & timeline — we prepare within 3 days",
      "s16.chat": "WhatsApp / Telegram", "s16.email": "Email us",
    },
    ru: {
      "meta.description": "Gardens of Eden Пхукет — презентация видения и концепции контента.",
      "side.sub": "Vision & Concept",
      "side.g1": "Введение", "side.g2": "Фильмы", "side.g3": "Каналы", "side.g4": "Финал",
      "side.s01": "Титул", "side.s02": "О нас", "side.s03": "Продукт: 10 преимуществ",
      "side.s04": "Как мы видим контент",
      "side.s05": "Флагман · фильм 2:00", "side.s06": "Фильм о компании", "side.s07": "Ролики · таргет",
      "side.s08": "Шоурум-пакет",
      "side.s09": "Карта контента", "side.s10": "YouTube", "side.s11": "Рилсы / Shorts",
      "side.s12": "VSL", "side.s13": "Обучение селлеров", "side.s14": "Объект в кадре",
      "side.s15": "Пакеты", "side.s16": "Следующий шаг",
      "side.hint": "Листайте клавишами ↑ ↓",

      "s01.eyebrow": "Контент-презентация · BPM Media",
      "s01.sub": "Vision & Concept",
      "s01.meta": "Банг Тао, Пхукет · 50 м до пляжа · сдача Q4 2026",
      "s01.hint": "Листайте вниз или нажмите ↓",

      "s02.title": "О нас",
      "s02.lead": "Два человека, которые ведут фильм от первого слова сценария до финального цвета.",
      "s02.photo": "Фото",
      "s02.p1role": "Роль — заполним",
      "s02.p2role": "Роль — заполним",
      "s02.w1t": "Полный цикл у нас", "s02.w1p": "Сценарий, съёмка, монтаж, цвет и звук — одна команда.",
      "s02.w2t": "Кино-качество", "s02.w2p": "Плёночный лук: мизансцена, свет, грейд.",
      "s02.w3t": "AI-превиз", "s02.w3p": "Каждый кадр показываем заранее — до съёмки.",

      "s03.title": "Продукт — Eden в 10 преимуществах",
      "s03.lead": "Каждый страх покупателя на Банг Тао — и как Eden его закрывает. Это месседж-платформа, на которой строится весь контент.",
      "s03.f1": "Плотная застройка, зелень втиснута между зданиями", "s03.w1": "70% территории — парк: 12 га, low-density",
      "s03.f2": "Двор принадлежит машинам", "s03.w2": "Car-free: машины под землёй, наверху сады",
      "s03.f3": "Общие лобби и длинные коридоры", "s03.w3": "Лифт с паркинга прямо на свой этаж",
      "s03.f4": "Стандартные потолки 2,7 м", "s03.w4": "Потолки 3,2 м — воздух с порога",
      "s03.f5": "Слышно соседей сверху", "s03.w5": "Тройной стеклопакет + толстые перекрытия — тишина инженерно",
      "s03.f6": "Один лобби-бар на весь комплекс", "s03.w6": "Шесть собственных ресторанов — уровень курорта",
      "s03.f7": "Один типовой бассейн во дворе", "s03.w7": "Инфинити-пул, лагуна с песчаным заходом, 150-м бассейн",
      "s03.f8": "«Фитнес в подвале»", "s03.w8": "Флагманский wellness-центр и клабхаус",
      "s03.f9": "Некуда пойти с детьми", "s03.w9": "Детский клуб-здание, школа рядом, Boat Avenue в 5 минутах",
      "s03.f10": "Толпа и проходной двор", "s03.w10": "50 шагов до моря, закрытая территория, приватность",
      "s03.note": "Цифры сверяются с актуальной брошюрой застройщика перед показом клиенту.",

      "s04.title": "Как мы видим контент",
      "s04.lead": "Один мир, одна система. Флагманский фильм задаёт язык — все остальные форматы переиспользуют его мир, кадры и тон.",
      "s04.t1": "Бренд", "s04.t1p": "Флагманский фильм и шоурум — влюбляют в проект.",
      "s04.t2": "Продажи", "s04.t2p": "Таргет-ролики, VSL, туры по юнитам — превращают любовь в сделку.",
      "s04.t3": "Органика", "s04.t3p": "YouTube и рилсы — постоянный поток нового внимания.",
      "s04.t4": "Команда", "s04.t4p": "Обучение селлеров и брокеров — все рассказывают одну историю.",
      "s04.funnel": "Узнали → влюбились → купили → продают дальше.",

      "s05.kicker": "Флагман · игровой фильм 2:00 — концепция",
      "s05.prevAria": "Предыдущая концепция", "s05.nextAria": "Следующая концепция",
      "s05.p1badge": "Принята клиентом · в производстве",
      "s05.p1title": "Концепция I — «Гранд Будапешт на Банг Тао»",
      "s05.p1spec": "2:00 · 16:9 · игровой фильм",
      "s05.p1lead": "Легендарный тайский консьерж за две минуты отвечает на один вопрос — «что такое Gardens of Eden?» — и ведёт через сад, дом, кухню и остров, в каждой истории помогая своими руками.",
      "s05.p1k1": "Симметрия и фронтальные мизансцены", "s05.p1k2": "Главы-титры",
      "s05.p1k3": "Деадпан-юмор", "s05.p1k4": "Бесшовный луп в финале",
      "s05.p1media": "Ключевой кадр · Пролог",
      "s05.p2badge": "В разработке", "s05.p2title": "Концепция II", "s05.p2spec": "Альтернативное направление",
      "s05.p2lead": "Альтернативная креативная территория — разрабатываем вместе с клиентом.",
      "s05.p2media": "Скоро",
      "s05.p3badge": "В разработке", "s05.p3title": "Концепция III", "s05.p3spec": "Альтернативное направление",
      "s05.p3lead": "Третье направление — чтобы выбор миров был настоящим, а не из одного варианта.",
      "s05.p3media": "Скоро",

      "s06.badge": "В разработке",
      "s06.title": "Фильм о компании — основатели",
      "s06.spec": "3–5 мин · интервью + b-roll · сайт, YouTube, офис продаж",
      "s06.lead": "Люди за проектом Eden — в кадре: почему этот проект, философия 70% парка, команда и стройка. Доверие через лица — фильм, который покупатель смотрит перед тем, как перевести депозит.",
      "s06.f1": "Основатели рассказывают концепцию своими словами",
      "s06.f2": "B-roll объекта, рендеры и стройка",
      "s06.f3": "Работает на покупателей, брокеров и инвесторов",
      "s06.f4": "Версии с субтитрами RU / EN / ZH",

      "s07.badge": "Серия из 10",
      "s07.title": "Рекламные ролики — таргет",
      "s07.spec": "15–30 сек каждый · 9:16 / 1:1 / 16:9 · таргет и pre-roll",
      "s07.lead": "Каждый ролик закрывает ОДИН страх покупателя ОДНИМ преимуществом Eden — прямо из платформы 10 преимуществ на слайде 03.",
      "s07.f1": "«Тишина» — сосед шумит, а у тебя тихо",
      "s07.f2": "«Car-free» — двор принадлежит детям",
      "s07.f3": "«50 шагов» — от калитки до моря",
      "s07.f4": "…по ролику на преимущество, 10 в серии",
      "s07.metaLabel": "Хуки:", "s07.meta": "внимание в первую секунду, версии RU / EN / ZH под аудитории.",

      "s08.title": "Шоурум-пакет",
      "s08.spec": "Производные флагманской съёмки — одна съёмка, пять деливераблов",
      "s08.d1": "Мастер 2:00 со звуком — для сайта и презентаций",
      "s08.d2": "Лобби-луп без звука — бесшовный, крутится в шоуруме постоянно",
      "s08.d3": "Врезка о проекте R1–R12 — рендеры объекта для питчей",
      "s08.d4": "Катдауны 30 / 15 сек — для рекламы",
      "s08.d5": "Вертикали 9:16 из глав — для соцсетей",
      "s08.statusLabel": "Статус:",
      "s08.status": "сценарий на 60 кадров готов, превиз в работе.",

      "s09.title": "Карта контента — все позиции",
      "s09.lead": "Всё, что нужно курортному девелоперу, — в четырёх треках. Начинаем с фильмов, остальное подключается к тому же миру.",
      "s09.c1t": "Бренд",
      "s09.c1i1": "Флагманский фильм 2:00", "s09.c1i2": "Фильм о компании (основатели)", "s09.c1i3": "Лобби-луп (без звука, бесшовный)",
      "s09.c1i4": "Врезка о проекте R1–R12", "s09.c1i5": "Катдауны + вертикали", "s09.c1i6": "Бэкстейдж",
      "s09.c2t": "Продажи",
      "s09.c2i1": "Таргет-ролики — серия из 10", "s09.c2i2": "VSL для лендинга", "s09.c2i3": "Туры по юнитам по типам",
      "s09.c2i4": "Дрон-обзор Банг Тао", "s09.c2i5": "Стройка-апдейты", "s09.c2i6": "Виртуальный тур",
      "s09.c3t": "Органика",
      "s09.c3i1": "YouTube-канал", "s09.c3i2": "Рилсы / Shorts / TikTok", "s09.c3i3": "Интервью с основателями и экспертами",
      "s09.c3i4": "Отзывы покупателей", "s09.c3i5": "Событийные видео",
      "s09.c4t": "Команда",
      "s09.c4i1": "Обучающая библиотека для селлеров", "s09.c4i2": "Пакет для брокеров и агентств", "s09.c4i3": "Инвестор-видео",
      "s09.c4i4": "Локализация RU / EN / ZH",

      "s10.title": "YouTube",
      "s10.lead": "Канал, который создаёт спрос на «жизнь на Пхукете» — и делает Gardens of Eden ответом.",
      "s10.f1": "Обзорные фильмы о проекте", "s10.f2": "Гиды по району Банг Тао",
      "s10.f3": "«Почему Пхукет» — ролики для инвесторов", "s10.f4": "Влог стройки до сдачи",
      "s10.f5": "Интервью с командой проекта",
      "s10.metaLabel": "Ритм:", "s10.meta": "2–4 видео в месяц.",

      "s11.title": "Рилсы / Shorts",
      "s11.lead": "Вертикальный поток из съёмок фильмов и объекта — внимание в первую секунду.",
      "s11.f1": "8–16 рилсов в месяц", "s11.f2": "Хуки из мира фильма — консьерж, детали, остров",
      "s11.f3": "Instagram, TikTok, YouTube Shorts", "s11.f4": "Версии RU / EN",

      "s12.title": "VSL — продающее видео",
      "s12.lead": "Видео для лендинга: проводит холодного посетителя до заявки.",
      "s12.f1": "Структура: мечта → проект → оффер → призыв к действию",
      "s12.f2": "3–5 минут, с ведущим или закадром",
      "s12.f3": "A/B-версии открытия",
      "s12.f4": "Локализации RU / EN / ZH",

      "s13.title": "Обучающие видео для селлеров",
      "s13.lead": "Закрытая видеобиблиотека, чтобы каждый селлер и агент рассказывал проект одинаково.",
      "s13.f1": "Продукт по типам юнитов — что показывать и говорить",
      "s13.f2": "Отработка возражений — 10 преимуществ как ролики-ответы",
      "s13.f3": "Онбординг новых агентов",
      "s13.f4": "Пакет для брокеров и агентств",

      "s14.title": "Объект в кадре",
      "s14.lead": "Видео, которое показывает сам объект — и держит доверие до сдачи в Q4 2026.",
      "s14.f1": "Дрон-обзор Банг Тао и объекта",
      "s14.f2": "Туры по юнитам по типам",
      "s14.f3": "Ежемесячные стройка-апдейты",
      "s14.f4": "Отзывы покупателей после сдачи",

      "s15.title": "Пакеты",
      "s15.lead": "Три способа начать — от одного флагманского фильма до полной контент-системы.",
      "s15.from": "от", "s15.choose": "Выбрать", "s15.popular": "Чаще выбирают",
      "s15.t1Name": "Фильмы",
      "s15.t1i1": "Флагманский фильм 2:00 + лобби-луп", "s15.t1i2": "Фильм о компании (основатели)",
      "s15.t1i3": "Врезка R1–R12, катдауны, вертикали",
      "s15.t2Name": "Фильмы + Продажи",
      "s15.t2i1": "Всё из «Фильмов»", "s15.t2i2": "Таргет-ролики — серия из 10",
      "s15.t2i3": "VSL + туры по юнитам + дрон", "s15.t2i4": "Обучающая библиотека для селлеров",
      "s15.t3Name": "Контент-система",
      "s15.t3i1": "Всё из «Фильмы + Продажи»", "s15.t3i2": "YouTube + рилсы, ежемесячно",
      "s15.t3i3": "Стройка-апдейты", "s15.t3i4": "Локализация RU / EN / ZH",
      "s15.note": "Цифры появятся после согласования объёма — этот слайд фиксирует структуру предложения.",

      "s16.title": "Следующий шаг",
      "s16.lead": "Утверждаем карту контента — и к следующей встрече мы приносим смету и календарь.",
      "s16.n1": "Флагманский фильм — в производстве, кастинг консьержа",
      "s16.n2": "Карта контента — выбрать стартовые треки",
      "s16.n3": "Смета и график — готовим за 3 дня",
      "s16.chat": "WhatsApp / Telegram", "s16.email": "Написать на почту",
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
  /* ← / → page a pager on the current slide if it has one; else move the deck. */
  function pageH(dir) {
    var pager = slides[current] && slides[current].querySelector("[data-carousel]");
    if (pager && pager._pager) { dir > 0 ? pager._pager.next() : pager._pager.prev(); }
    else { go(current + dir); }
  }
  document.addEventListener("keydown", function (e) {
    if (e.target && /^(input|textarea|select)$/i.test(e.target.tagName)) return;
    switch (e.key) {
      case "ArrowDown": case "PageDown": case " ":
        e.preventDefault(); go(current + 1); break;
      case "ArrowUp": case "PageUp":
        e.preventDefault(); go(current - 1); break;
      case "ArrowRight": e.preventDefault(); pageH(1); break;
      case "ArrowLeft": e.preventDefault(); pageH(-1); break;
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

  /* ---- pagers: whole panel changes with ← → (concepts, storyboards) ---- */
  function initCarousel(root) {
    var track = root.querySelector("[data-track]");
    if (!track) return;
    var items = Array.prototype.slice.call(track.children);
    if (!items.length) return;
    var dotsWrap = root.querySelector("[data-dots]");
    var counter = root.querySelector("[data-counter]");
    var idx = 0;
    var dots = [];
    if (dotsWrap) {
      items.forEach(function (_, n) {
        var b = document.createElement("button");
        b.type = "button";
        b.setAttribute("aria-label", "Slide " + (n + 1));
        b.addEventListener("click", function () { go(n); });
        dotsWrap.appendChild(b);
        dots.push(b);
      });
    }
    function go(n) {
      idx = (n + items.length) % items.length;
      track.style.transform = "translateX(" + -idx * 100 + "%)";
      dots.forEach(function (d, x) { d.classList.toggle("is-active", x === idx); });
      items.forEach(function (f, x) { f.setAttribute("aria-hidden", x === idx ? "false" : "true"); });
      if (counter) counter.textContent = pad2(idx + 1) + " / " + pad2(items.length);
    }
    var prev = root.querySelector("[data-prev]");
    var next = root.querySelector("[data-next]");
    if (prev) prev.addEventListener("click", function () { go(idx - 1); });
    if (next) next.addEventListener("click", function () { go(idx + 1); });
    var x0 = null;
    root.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    root.addEventListener("touchend", function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 40) go(dx < 0 ? idx + 1 : idx - 1);
      x0 = null;
    });
    go(0);
    root._pager = { prev: function () { go(idx - 1); }, next: function () { go(idx + 1); } };
  }
  Array.prototype.slice.call(document.querySelectorAll("[data-carousel]")).forEach(initCarousel);

  /* ---- init ---- */
  initLang();
})();
