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
      "s01.meta": "Bang Tao, Phuket · 50 m to the beach",
      "s01.hint": "Scroll or press ↓ to begin",

      "s02.kicker": "About us · BPM media × Happy People",
      "s02.mebadge": "Founder · Creative producer",
      "s02.melead_s": "Fifteen years in production — director, DP and content producer. Top-15 in Moscow, shooting for international brands. Founder of BPM Media on Phuket and of Piece — an operating system for video production.",
      "s02.p5bio_s": "A visionary with 20 years in film. 30+ international festivals, films shown in 50 countries, 200+ delivered projects — leading creative teams at international scale.",
      "s02.mespec": "Director · DP · Content producer",
      "s02.melead": "Fifteen years in production — trained as a motion designer, screenwriter, director and cinematographer. Ranked Top-15 in Moscow by Russia's videographers' association, shooting for international brands and large-scale events across dozens of countries.",
      "s02.menow": "Four years on Phuket: founded BPM Media — the island's leading podcast studio — and became a content producer, including for real-estate sales. He reads both the Russian and international content markets first-hand, speaks at business-community events, and is building Piece — an operating system for video production, from Phuket to the world.",
      "s02.prevAria": "Previous",
      "s02.nextAria": "Next",
      "s02.photo": "Photo",
      "s02.p1kicker": "Films · Stories · Premium environments",
      "s02.p1lead": "A tandem of visionaries uniting film direction, premium cinematography and cutting-edge technology. Behind us are projects delivered across dozens of countries — from international film festivals to building top-tier media ecosystems and sales formats for elite clients. We produce visual work of the highest class and set new industry standards, leading production teams of hundreds and building our own IT platform for the international market.",
      "s02.p2title": "The team",
      "s02.p1role": "Director, screenwriter",
      "s02.p2role": "Creative producer, screenwriter, DP",
      "s02.p3badge": "Recognition",
      "s02.p3title": "Selected films",
      "s02.p3lead": "Fifteen years of work — recognised at festivals across four continents.",
      "s02.p3k1": "50+ international festivals",
      "s02.p3k2": "4 continents · 20+ countries",
      "s02.p3k3": "1M views in one week",
      "s02.p3k4": "300+ people in one project",
      "s02.p3cap": "“Invitation to Cinema” — a film by Maxim Kaplya",
      "s02.p4title": "Selected projects",
      "s02.p4a": "Pandemic Diaries",
      "s02.p4ap": "International documentary featuring participants from 20 countries.",
      "s02.p4b": "M.Micallef",
      "s02.p4bp": "Ad project for the perfume house — shown in 50 countries.",
      "s02.p4c": "Full cycle in-house",
      "s02.p4cp": "Script, shoot, edit, color and sound — one team.",
      "s02.p4meta": "happypeoplefilms.com · kaply.max@mail.ru",
      "s02.p5badge": "Founder of Happy People Production",
      "s02.p5role": "Director · Producer · Showrunner",
      "s02.p5bio": "A visionary with 20 years in film and video production. He runs complex creative cycles and builds strong teams for international-scale projects.",
      "s02.p5s1": "participant in international film festivals",
      "s02.p5s2": "countries — reach of the M.Micallef perfume campaign",
      "s02.p5s3": "films delivered for business and documentary projects",
      "s02.p5s4": "people — largest team led on a single set",
      "s02.p5s5": "countries united by the Pandemic Diaries project",
      "s02.p5s6": "countries — geography of shoots organised",

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

      "s04.kicker": "Our vision",
      "s04.p1pillar": "Paradise garden",
      "s04.p1title": "A garden of paradise — first and always",
      "s04.p1lead": "The name is a promise: Gardens of Eden is paradise. Every frame — a lobby, a bedroom, a reel — has to feel green, calm and alive. Lose that feeling and it is just another Phuket condo.",
      "s04.p2pillar": "Paradise garden",
      "s04.p2title": "The garden is the hero, not the building",
      "s04.p2lead": "Gardens of Eden has what almost no one here has: 30+ acres, a park, a lake, 50 meters to the beach and no cars on the ground. So we shoot the buildings as part of the garden — not the garden as a strip of green between blocks.",
      "s04.p3pillar": "Premium",
      "s04.p3title": "Quiet luxury, not loud luxury",
      "s04.p3lead": "Real premium is felt, not announced. It lives in space, privacy, water, natural materials and light — and in a team that fixes things before you notice. Never in gold and marble shouting for attention.",
      "s04.p4pillar": "Premium",
      "s04.p4title": "Premium lives in the places, not the price",
      "s04.p4lead": "Six restaurants, the lagoon, the wellness club, the interiors, the infrastructure — we film every place as somewhere you already want to be, not as a line on an amenity list.",
      "s04.p5pillar": "Cinematic difference",
      "s04.p5title": "We don't shoot ads. We make cinema.",
      "s04.p5lead": "This is what makes Eden special. Even a 15-second reel is a tiny film — a title card, a mini-plot, a world with its own concierge. We make you feel the place is unlike anything else, without selling head-on.",
      "s04.p6pillar": "Cinematic difference",
      "s04.p6title": "The little things that make it a film",
      "s04.p6lead": "A raised eyebrow, a sunbed lined up a touch too perfectly, a mango that returns a scene later, a locked frame that breathes. We earn the feeling with craft — we never announce it.",
      "s04.p7pillar": "All three",
      "s04.p7title": "Three pillars, one world",
      "s04.p7lead": "Paradise garden, quiet premium, cinema — every format stands on the same three. Website, showroom, reels, VSL, broker decks, ads: different formats, one hand behind them.",
      "s04.p7bottom": "See it → feel it → trust it → buy it → tell someone.",

      "s05.kicker": "Flagship · game film 2:00 — concept",
      "s05.prevAria": "Previous concept", "s05.nextAria": "Next concept",
      "s05.p1badge": "Approved by the client · in production",
      "s05.p1title": "CONCIERGE",
      "s05.p1sub": "Game film · 2:00 · 16:9",
      "s05.p1spec": "2:00 · 16:9 · game film",
      "s05.p1lead": "A distinguished Thai concierge answers one question in two minutes — “What is Gardens of Eden?” He leads us through the garden, the home, the kitchen and the island, helping with his own hands in every story.",
      "s05.p1note": "But the answer is born not from his words — from the life around him. A dog carries off a ball, a child counts the steps to the sea, a chef slips him a spoon of soup. Not an ad — dozens of living scenes, and from them, like a mosaic, the answer takes shape.",
      "s05.p1close": "Each scene quietly shows one advantage — not a line from a brochure, but a moment that makes you smile. Silence, space, the sea nearby, care, taste, privacy — lived, not told.",
      "s05.p1k1": "Symmetry & frontal staging", "s05.p1k2": "Chapter title cards",
      "s05.p1k3": "Deadpan humour", "s05.p1k4": "Seamless loop ending",
      "s05.p1cap0": "Prologue · the concierge opens the gates",
      "s05.p1cap1": "A spoonful from the chef",
      "s05.p1cap2": "A ball by the pond",
      "s05.p1cap3": "Evening tea on the balcony",
      "s05.p1cap4": "Fifty steps to the sea",
      "s05.p1cap5": "The car-free alley",
      "s05.p1media": "Key frame · Prologue",
      "s05.p2sub": "Technology", "s05.p2title": "HOW WE'LL SHOOT IT",
      "s05.p2lead": "We shoot in a combined way: real people in real places, plus the built world of Gardens of Eden around them.",
      "s05.p2p1": "The living foundation is shot for real. The real concierge, real guests, children, chefs — real textures and real emotion. Everything already finished is filmed on site and in the completed showrooms, so the frame holds real life, not a picture.",
      "s05.p2p2": "And whatever is still under construction, we build out with modern technology and place our living heroes into the finished world of Eden — the gardens, the pools, the terraces, the sea, as the project will be at hand-over. The viewer sees no construction and no bare render, but a whole, warm world already alive.",
      "s05.p2capA": "Live foundation · shot for real",
      "s05.p2capB": "The finished Eden world",
      "s05.p2clip": "White studio → the built Eden world, in one take",
      "s05.p3badge": "In development", "s05.p3title": "Concept III", "s05.p3spec": "Alternative direction",
      "s05.p3lead": "A third direction — so there is a real choice of worlds, not one option.",
      "s05.p3media": "Coming soon",
      "s05.cg_eyebrow": "Chapter I · 0:14–0:33",
      "s05.cg_title": "THE GARDEN",
      "s05.cg_lead": "Seventy percent of the land is garden — the houses hide in the canopy, and the sea waits at the edge.",
      "s05.cg_b1": "Dawn from above: homes drowned in treetops, the paths like the veins of a leaf.",
      "s05.cg_b2": "The dog's own POV — a ball bounces down a tunnel of palms, and not a single car in sight.",
      "s05.cg_b3": "A lady swims the infinity edge in a wide-brimmed hat; the brim stays perfectly dry.",
      "s05.cg_b4": "A white-gloved hand slips in, makes one move on the chessboard, and leaves.",
      "s05.cg_vo": "“Seventy percent of this land is garden. The rest, we tried to keep out of its way.”",
      "s05.ch_eyebrow": "Chapter II · 0:33–0:57",
      "s05.ch_title": "THE HOME",
      "s05.ch_lead": "This is where people live, not vacation — and the loudest luxury here is silence.",
      "s05.ch_b1": "A doll-house cutaway: a birthday leaps on the sofa upstairs, while below the tea sits perfectly still.",
      "s05.ch_b2": "The concierge catches the school shuttle and hands a forgotten lunchbox through the window — before she remembers it.",
      "s05.ch_b3": "A barefoot boy counts his steps to the sea: “…forty-nine, fifty!”",
      "s05.ch_b4": "The car dives into the garage; below, dad steps straight into the private brass lift — “5”, home.",
      "s05.ch_vo": "“Silence is the only luxury you cannot photograph. So we built it into the walls.”",
      "s05.ci_eyebrow": "Chapters III–IV · 0:57–1:45",
      "s05.ci_title": "THE TABLE & THE ISLAND",
      "s05.ci_lead": "Ten restaurants and an open sea — the last, warmest turn before the answer.",
      "s05.ci_b1": "Ten kitchens in a row: a grill throws a column of fire, flour claps into the beat, a knife opens a mango.",
      "s05.ci_b2": "A wall of tropical rain — the staff open the umbrellas as one; the concierge gives his to a girl and stays in the downpour.",
      "s05.ci_b3": "The catamaran cuts the turquoise, and from the bow the children scream with joy.",
      "s05.ci_b4": "A starlit night, a brass telescope; a paper boat drifts into the dark — and dissolves into the mist where it all began.",
      "s05.ci_vo": "“Ten restaurants — one for every mood you haven't met yet.”",
      "s05.mood_eyebrow": "Reference · mood",
      "s05.mood_title": "MOOD",
      "s05.mood_lead": "The tone we're aiming for — how the world's best brands sell a feeling, not a spec sheet.",
      "s05.mood_c1": "Belmond · a resort as a whole world",
      "s05.mood_c2": "SAP · “Stay ahead”",
      "s05.mood_c3": "Hotels.com · Captain Obvious",

      "s06.kicker": "Company film · documentary · ~10 min",
      "s06.prevAria": "Previous part",
      "s06.nextAria": "Next part",
      "s06.c1badge": "Documentary",
      "s06.c1title": "Not an ad — a short film about the project",
      "s06.c1spec": "~10 min · interviews + texture",
      "s06.c1lead": "A ~10-minute documentary of interviews. The people behind Gardens of Eden speak in their own words; between the lines — the texture of the place: hands, details, light, nature. It watches like cinema, not a presentation.",
      "s06.c1media": "A short film",
      "s06.c2badge": "Trust through people",
      "s06.c2title": "Renders show walls. People show intent.",
      "s06.c2spec": "What no render can do",
      "s06.c2lead": "In the premium segment a buyer isn’t choosing square metres — they’re choosing the people they trust with the decision. Real creators, talking about what they poured themselves into, do what no render ever will.",
      "s06.c2media": "People, not renders",
      "s06.c3badge": "Structure",
      "s06.c3title": "Three acts, like a film",
      "s06.c3spec": "Vision · Soul · Life",
      "s06.c3a1": "Act I · Vision — the land, the idea, why this way (founder + architect)",
      "s06.c3a2": "Act II · Soul — the operator (Minor Hotels), design, dining, wellness: the people who bring it to life",
      "s06.c3a3": "Act III · Life — a day in the resident’s life; the feeling it’s all for",
      "s06.c3media": "Vision → Soul → Life",
      "s06.c4badge": "The cast",
      "s06.c4title": "Each speaks their own truth",
      "s06.c4spec": "One or two deep questions each",
      "s06.c4h1": "The founder (Amal Group) — the vision and a personal promise",
      "s06.c4h2": "The operator, Minor Hotels — how a global hotelier will run daily life for residents",
      "s06.c4h3": "The architect — why the garden is the hero, not the building",
      "s06.c4h4": "The designer — details, materials, the Etro aesthetic",
      "s06.c4h5": "GOCO · wellness — rituals, care, a philosophy of well-being",
      "s06.c4h6": "Etro Cafe · the restaurateur — the taste and mood of the place",
      "s06.c4h7": "A resident — living proof from the inside",
      "s06.c4media": "Voices of the project",
      "s06.c5badge": "Method",
      "s06.c5title": "Script and questions — prepared and approved first",
      "s06.c5spec": "Crafted cinema, not improvisation",
      "s06.c5m1": "A detailed script and questions, written in advance and signed off before the shoot",
      "s06.c5m2": "No one reads from a card — everyone speaks for themselves",
      "s06.c5m3": "Between interviews — b-roll: the place, hands, details, nature. The rhythm breathes.",
      "s06.c5m4": "Cine camera, light, sound, drone",
      "s06.c5media": "Crafted cinema",
      "s06.c6badge": "One shoot",
      "s06.c6title": "One film → 25–30 pieces of content",
      "s06.c6spec": "The film, plus months of Reels",
      "s06.c6lead": "The main ~10-minute film is the foundation of trust — for the site, decks and meetings.",
      "s06.c6x1": "From each hero — 3–4 vertical Reels from what didn’t make the final cut",
      "s06.c6x2": "7–8 heroes × 3–4 = 25–30 clips for social, all about this place",
      "s06.c6x3": "One shoot cycle → the film plus months of content in the feed",
      "s06.c6media": "Film + 25–30 Reels",
      "s06.c7badge": "The best do exactly this",
      "s06.c7title": "A documentary strengthens the brand",
      "s06.c7spec": "Not an experiment — the premium-segment norm",
      "s06.c7e1a": "Aman",
      "s06.c7e1b": "Rosewood “A Sense of Place”",
      "s06.c7e1c": "Belmond",
      "s06.c7e1t": "— hospitality told as culture",
      "s06.c7e2": "Zaha Hadid · One Thousand Museum",
      "s06.c7e2t": "— a full PBS documentary about a developer’s tower",
      "s06.c7e3": "OMNIYAT, Dubai",
      "s06.c7e3t": "— a founder’s film for its branded residences",
      "s06.c7e4": "Hermès “Footsteps Across the World”",
      "s06.c7e4t": "— an interview-doc about meaning, not product",
      "s06.c7media": "The precedent is set",

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
      "s10.f3": "“Why Phuket” — investor explainers", "s10.f4": "Construction vlog",
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
      "s14.lead": "Video that shows the development itself — and keeps trust alive through construction.",
      "s14.f1": "Drone overview of Bang Tao and the site",
      "s14.f2": "Unit tours by type",
      "s14.f3": "Monthly construction updates",
      "s14.f4": "Buyer testimonials",

      "s15.title": "Packages",
      "s15.lead": "The full line-up of packages and the detailed estimate live in the commercial proposal.",
      "s15.open": "Open the proposal — packages & estimate →",
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
      "s01.meta": "Банг Тао, Пхукет · 50 м до пляжа",
      "s01.hint": "Листайте вниз или нажмите ↓",

      "s02.kicker": "О нас · BPM media × Happy People",
      "s02.mebadge": "Основатель · Креативный продюсер",
      "s02.melead_s": "Пятнадцать лет в продакшене — режиссёр, оператор и продюсер контента. Топ-15 Москвы, съёмки для международных брендов. Основатель BPM Media на Пхукете и Piece — операционной системы для видеопроизводства.",
      "s02.p5bio_s": "Визионер с 20-летним опытом в кино. 30+ международных фестивалей, показы в 50 странах, 200+ реализованных проектов — во главе творческих команд международного уровня.",
      "s02.mespec": "Режиссёр · Оператор · Продюсер контента",
      "s02.melead": "Пятнадцать лет в продакшене — школа моушн-дизайна, сценаристики, режиссуры и операторского мастерства. Входил в топ-15 Москвы в ассоциации лучших видеографов России, снимал для международных брендов и крупных мероприятий в десятках стран.",
      "s02.menow": "Четыре года на Пхукете: основал BPM Media — лучшую подкаст-студию острова — и стал продюсером контента, в том числе для продаж недвижимости. Хорошо знает и российский, и международный рынок контента, выступает на мероприятиях бизнес-сообщества и строит Piece — операционную систему для видеопроизводства, от Пхукета до всего мира.",
      "s02.prevAria": "Назад",
      "s02.nextAria": "Вперёд",
      "s02.photo": "Фото",
      "s02.p1kicker": "Фильмы-Истории-Премиальные среды",
      "s02.p1lead": "Тандем визионеров, объединивший кинорежиссуру, премиальное операторское мастерство и передовые технологии. За нашими плечами реализация проектов в десятках стран мира: от международных кинофестивалей до создания топовых медиа-экосистем и продающих форматов для элитных заказчиков. Мы производим визуальный продукт высшего класса и задаём новые стандарты индустрии, управляя съёмочными командами из сотен человек и разрабатывая собственную IT-платформу для международного рынка.",
      "s02.p2title": "Команда",
      "s02.p1role": "Режиссёр-постановщик, сценарист",
      "s02.p2role": "Креативный продюсер, сценарист, оператор",
      "s02.p3badge": "Признание",
      "s02.p3title": "Избранные фильмы",
      "s02.p3lead": "Пятнадцать лет работы — признание на фестивалях четырёх континентов.",
      "s02.p3k1": "50+ международных фестивалей",
      "s02.p3k2": "4 континента · 20+ стран",
      "s02.p3k3": "1 млн просмотров за неделю",
      "s02.p3k4": "300+ человек в одном проекте",
      "s02.p3cap": "«Приглашение в кино» — фильм Максима Капля",
      "s02.p4title": "Избранные проекты",
      "s02.p4a": "Pandemic Diaries",
      "s02.p4ap": "Международный документальный фильм с участием представителей 20 стран.",
      "s02.p4b": "M.Micallef",
      "s02.p4bp": "Рекламный проект для парфюмерного дома — показан в 50 странах.",
      "s02.p4c": "Полный цикл у нас",
      "s02.p4cp": "Сценарий, съёмка, монтаж, цвет и звук — одна команда.",
      "s02.p4meta": "happypeoplefilms.com · kaply.max@mail.ru",
      "s02.p5badge": "Основатель Happy People Production",
      "s02.p5role": "Режиссёр · Продюсер · Шоураннер",
      "s02.p5bio": "Визионер с 20-летним опытом в киноиндустрии и видеопроизводстве. Управляет сложными креативными циклами и создаёт сильные творческие команды для проектов международного уровня.",
      "s02.p5s1": "участник международных кинофестивалей",
      "s02.p5s2": "стран — география показов рекламного проекта M.Micallef",
      "s02.p5s3": "реализованных роликов для бизнеса и документальных проектов",
      "s02.p5s4": "человек — максимальный масштаб команды на одной площадке",
      "s02.p5s5": "стран объединил авторский проект Pandemic Diaries",
      "s02.p5s6": "стран — география организованных съёмок",

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

      "s04.kicker": "Наше видение",
      "s04.p1pillar": "Райский сад",
      "s04.p1title": "Райский сад — прежде всего",
      "s04.p1lead": "Название — это обещание: Gardens of Eden — рай. Любой кадр — лобби, спальня, рилс — должен ощущаться зелёным, спокойным и живым. Потеряешь это чувство — и остался просто ещё один кондо на Пхукете.",
      "s04.p2pillar": "Райский сад",
      "s04.p2title": "Главный герой — сад, а не здание",
      "s04.p2lead": "У Gardens of Eden есть то, чего почти нет у других: 30+ акров, парк, озеро, 50 метров до пляжа и ни одной машины на земле. Поэтому здания мы снимаем как часть сада — а не сад как полоску зелени между корпусами.",
      "s04.p3pillar": "Премиальность",
      "s04.p3title": "Тихий люкс, а не громкий",
      "s04.p3lead": "Настоящий премиум чувствуют, а не объявляют. Он в пространстве, приватности, воде, натуральных материалах и свете — и в команде, которая решает вопрос раньше, чем ты его заметил. Не в золоте и мраморе, кричащих о себе.",
      "s04.p4pillar": "Премиальность",
      "s04.p4title": "Премиум — в местах, а не в ценнике",
      "s04.p4lead": "Шесть ресторанов, лагуна, wellness-клуб, интерьеры, инфраструктура — каждое место снимаем как то, где уже хочется быть, а не как пункт в списке amenities.",
      "s04.p5pillar": "Необычность · кино",
      "s04.p5title": "Мы не снимаем рекламу. Мы снимаем кино.",
      "s04.p5lead": "Именно это делает Eden особенным. Даже 15-секундный рилс — это маленькое кино: заставка, мини-сюжет, мир со своим консьержем. Мы даём почувствовать, что место ни на что не похоже, — не продавая в лоб.",
      "s04.p6pillar": "Необычность · кино",
      "s04.p6title": "Мелочи, которые делают это кино",
      "s04.p6lead": "Приподнятая бровь, лежак, выровненный чуть слишком идеально, манго, которое возвращается сценой позже, статичный кадр, который дышит. Чувство мы зарабатываем ремеслом — а не объявляем его.",
      "s04.p7pillar": "Три столба",
      "s04.p7title": "Три столба, один мир",
      "s04.p7lead": "Райский сад, тихий премиум, кино — каждый формат стоит на этих трёх. Сайт, шоурум, рилсы, VSL, брокерские материалы, реклама: разные форматы, но за ними одна рука.",
      "s04.p7bottom": "Увидел → почувствовал → поверил → купил → рассказал.",

      "s05.kicker": "Флагман · игровой фильм 2:00 — концепция",
      "s05.prevAria": "Предыдущая концепция", "s05.nextAria": "Следующая концепция",
      "s05.p1badge": "Принята клиентом · в производстве",
      "s05.p1title": "КОНСЬЕРЖ",
      "s05.p1sub": "Игровой фильм · 2:00 · 16:9",
      "s05.p1spec": "2:00 · 16:9 · игровой фильм",
      "s05.p1lead": "Взрослый тайский консьерж за две минуты отвечает на один вопрос — «что такое Gardens of Eden?». Он ведёт нас через сад, дом, кухню и остров, и в каждой истории помогает своими руками.",
      "s05.p1note": "Но ответ рождается не из его слов, а из жизни вокруг. Где-то пёс уносит мяч, где-то ребёнок считает шаги до моря, где-то повар сует ложку супа, а кто-то за кадром задаёт неудобный вопрос. Мы не смотрим рекламу — мы проваливаемся в десятки живых сцен, и из них, как из мозаики, складывается ответ.",
      "s05.p1close": "Каждая сцена незаметно показывает одно преимущество — не строчкой из брошюры, а моментом, с которого улыбаешься. Тишина, простор, море рядом, забота, вкус, приватность — всё это прожито, а не рассказано.",
      "s05.p1k1": "Симметрия и фронтальные мизансцены", "s05.p1k2": "Главы-титры",
      "s05.p1k3": "Деадпан-юмор", "s05.p1k4": "Бесшовный луп в финале",
      "s05.p1cap0": "Пролог · консьерж открывает ворота",
      "s05.p1cap1": "Ложка супа от повара",
      "s05.p1cap2": "Мяч у пруда",
      "s05.p1cap3": "Вечерний чай на балконе",
      "s05.p1cap4": "Пятьдесят шагов до моря",
      "s05.p1cap5": "Аллея без машин",
      "s05.p1media": "Ключевой кадр · Пролог",
      "s05.p2sub": "Технология", "s05.p2title": "КАК МЫ ЭТО СНИМЕМ",
      "s05.p2lead": "Мы снимаем комбинированно: настоящие люди в настоящих местах плюс достроенный мир Gardens of Eden вокруг них.",
      "s05.p2p1": "Живую основу снимаем вживую. Реальный консьерж, реальные гости, дети, повара, реальные фактуры и эмоции. Всё, что уже готово, снимаем прямо на объекте и в готовых шоурумах, чтобы в кадре была настоящая жизнь, а не картинка.",
      "s05.p2p2": "А то, что пока строится, мы достраиваем современными технологиями и помещаем наших живых героев в финальный мир Eden: в сады, к бассейнам, на террасы, к морю, каким проект станет к сдаче. Зритель видит не стройку и не голый рендер, а цельный, тёплый, уже живущий мир.",
      "s05.p2capA": "Живая основа · снято вживую",
      "s05.p2capB": "Достроенный мир Eden",
      "s05.p2clip": "Белая студия → достроенный мир Eden, одним кадром",
      "s05.p3badge": "В разработке", "s05.p3title": "Концепция III", "s05.p3spec": "Альтернативное направление",
      "s05.p3lead": "Третье направление — чтобы выбор миров был настоящим, а не из одного варианта.",
      "s05.p3media": "Скоро",
      "s05.cg_eyebrow": "Глава I · 0:14–0:33",
      "s05.cg_title": "САД",
      "s05.cg_lead": "Семьдесят процентов земли — сад: дома тонут в кронах, а у края ждёт море.",
      "s05.cg_b1": "Рассвет сверху: дома утопают в деревьях, дорожки — как прожилки листа.",
      "s05.cg_b2": "POV пса — мяч скачет по тоннелю пальм, и ни одной машины вокруг.",
      "s05.cg_b3": "Дама плывёт по кромке инфинити-пула в широкополой шляпе — поля идеально сухие.",
      "s05.cg_b4": "Рука в белой перчатке входит в кадр, делает один ход на шахматной доске и исчезает.",
      "s05.cg_vo": "«Семьдесят процентов этой земли — сад. Остальное мы постарались сделать незаметным.»",
      "s05.ch_eyebrow": "Глава II · 0:33–0:57",
      "s05.ch_title": "ДОМ",
      "s05.ch_lead": "Здесь живут, а не отдыхают — и самая громкая роскошь тут это тишина.",
      "s05.ch_b1": "Кукольный разрез дома: наверху день рождения прыгает на диване, а внизу чай в чашке неподвижен.",
      "s05.ch_b2": "Консьерж догоняет школьный шаттл и подаёт в окно забытый ланчбокс — раньше, чем о нём вспомнили.",
      "s05.ch_b3": "Босой мальчик считает шаги до моря: «…сорок девять, пятьдесят!»",
      "s05.ch_b4": "Машина ныряет в паркинг; внизу папа заходит прямо в приватный латунный лифт — «5», домой.",
      "s05.ch_vo": "«Тишина — единственная роскошь, которую нельзя сфотографировать. Пришлось встроить её в стены.»",
      "s05.ci_eyebrow": "Главы III–IV · 0:57–1:45",
      "s05.ci_title": "КУХНЯ И ОСТРОВ",
      "s05.ci_lead": "Десять ресторанов и открытое море — последний, самый тёплый поворот перед ответом.",
      "s05.ci_b1": "Десять кухонь подряд: гриль выбрасывает столб огня, мука хлопает в ритм, нож раскрывает манго.",
      "s05.ci_b2": "Стена тропического ливня — персонал раскрывает зонты как один; консьерж отдаёт свой девочке и остаётся под дождём.",
      "s05.ci_b3": "Катамаран режет бирюзу, а с носа дети визжат от восторга.",
      "s05.ci_b4": "Звёздная ночь, латунный телескоп; бумажный кораблик уплывает в темноту — и растворяется в тумане, где всё началось.",
      "s05.ci_vo": "«Десять ресторанов — по одному на каждое настроение, которое у вас ещё впереди.»",
      "s05.mood_eyebrow": "Референс · настроение",
      "s05.mood_title": "НАСТРОЕНИЕ",
      "s05.mood_lead": "Тон, к которому мы идём — как лучшие бренды мира продают чувство, а не список характеристик.",
      "s05.mood_c1": "Belmond · курорт как целый мир",
      "s05.mood_c2": "SAP · «Stay ahead»",
      "s05.mood_c3": "Hotels.com · Captain Obvious",

      "s06.kicker": "Фильм о компании · документальный · ~10 мин",
      "s06.prevAria": "Предыдущая часть",
      "s06.nextAria": "Следующая часть",
      "s06.c1badge": "Документальный",
      "s06.c1title": "Не реклама — маленькое кино о проекте",
      "s06.c1spec": "~10 минут · интервью + фактура",
      "s06.c1lead": "~10-минутный документальный фильм-интервью. Люди, создающие Gardens of Eden, говорят своими словами; между репликами — фактура места: руки, детали, свет, природа. Смотрится как кино, а не презентация.",
      "s06.c1media": "Маленькое кино",
      "s06.c2badge": "Доверие через людей",
      "s06.c2title": "Рендеры показывают стены. Люди — намерение.",
      "s06.c2spec": "то, чего не сделает ни один рендер",
      "s06.c2lead": "В премиум-сегменте покупатель выбирает не метры, а тех, кому доверяет своё решение. Живые создатели, говорящие о том, во что вложили душу, делают то, чего не сделает ни один рендер.",
      "s06.c2media": "Люди, а не рендеры",
      "s06.c3badge": "Структура",
      "s06.c3title": "Три акта — как в кино",
      "s06.c3spec": "Замысел · Душа · Жизнь",
      "s06.c3a1": "Акт I · Замысел — земля, идея, почему именно так (основатель + архитектор)",
      "s06.c3a2": "Акт II · Душа — оператор (Minor Hotels), дизайн, гастрономия, wellness: люди, вдохнувшие в проект жизнь",
      "s06.c3a3": "Акт III · Жизнь — день из жизни резидента; эмоция, ради которой всё",
      "s06.c3media": "Замысел → Душа → Жизнь",
      "s06.c4badge": "Герои",
      "s06.c4title": "Каждый говорит свою правду",
      "s06.c4spec": "один-два глубоких вопроса на человека",
      "s06.c4h1": "Основатель (Amal Group) — замысел и личное обещание",
      "s06.c4h2": "Оператор Minor Hotels — как мировой отельер выстроит быт и сервис резидентов",
      "s06.c4h3": "Архитектор — почему сад главный герой, а не здание",
      "s06.c4h4": "Дизайнер — детали, материалы, эстетика Etro",
      "s06.c4h5": "GOCO · wellness — ритуалы, забота, философия здоровья",
      "s06.c4h6": "Etro Cafe · ресторатор — вкус и атмосфера места",
      "s06.c4h7": "Резидент — живое свидетельство изнутри",
      "s06.c4media": "Голоса проекта",
      "s06.c5badge": "Метод",
      "s06.c5title": "Сценарий и вопросы — заранее и на утверждение",
      "s06.c5spec": "выверенное кино, не импровизация",
      "s06.c5m1": "Подробный сценарий и вопросы пишутся заранее и утверждаются до съёмки",
      "s06.c5m2": "Никто не читает по бумажке — говорят от себя",
      "s06.c5m3": "Между интервью — b-roll: место, руки, детали, природа. Ритм дышит.",
      "s06.c5m4": "Кино-камера, свет, звук, дрон",
      "s06.c5media": "Выверенное кино",
      "s06.c6badge": "Один съёмочный цикл",
      "s06.c6title": "Один фильм → 25–30 единиц контента",
      "s06.c6spec": "фильм плюс месяцы Reels",
      "s06.c6lead": "Основной ~10-минутный фильм — фундамент доверия: для сайта, презентаций и встреч.",
      "s06.c6x1": "Из каждого героя — 3–4 вертикальных Reels из того, что не вошло в фильм",
      "s06.c6x2": "7–8 героев × 3–4 = 25–30 роликов для соцсетей — всё про это место",
      "s06.c6x3": "Один съёмочный цикл → фильм плюс месяцы контента в ленте",
      "s06.c6media": "Фильм + 25–30 Reels",
      "s06.c7badge": "Так делают лучшие",
      "s06.c7title": "Документальный фильм укрепляет бренд",
      "s06.c7spec": "не эксперимент — норма премиум-сегмента",
      "s06.c7e1a": "Aman",
      "s06.c7e1b": "Rosewood «A Sense of Place»",
      "s06.c7e1c": "Belmond",
      "s06.c7e1t": "— гостеприимство как культура",
      "s06.c7e2": "Zaha Hadid · One Thousand Museum",
      "s06.c7e2t": "— полнометражный PBS-док о девелоперской башне",
      "s06.c7e3": "OMNIYAT, Дубай",
      "s06.c7e3t": "— фильм-обращение основателя о branded residences",
      "s06.c7e4": "Hermès «Footsteps Across the World»",
      "s06.c7e4t": "— интервью-док о смысле, не о продукте",
      "s06.c7media": "Прецедент задан",

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
      "s10.f3": "«Почему Пхукет» — ролики для инвесторов", "s10.f4": "Влог стройки",
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
      "s14.lead": "Видео, которое показывает сам объект — и держит доверие на всём протяжении стройки.",
      "s14.f1": "Дрон-обзор Банг Тао и объекта",
      "s14.f2": "Туры по юнитам по типам",
      "s14.f3": "Ежемесячные стройка-апдейты",
      "s14.f4": "Отзывы покупателей",

      "s15.title": "Пакеты",
      "s15.lead": "Полный состав пакетов и подробная смета — в коммерческом предложении.",
      "s15.open": "Открыть КП — пакеты и смета →",
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
    // Russian is the default language of the deck; a saved choice still wins.
    applyLang(saved || "ru");
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
      var pagerSlide = root.closest ? root.closest(".slide") : null;
      if (pagerSlide) pagerSlide.setAttribute("data-pager-index", String(idx));
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

  /* ---- vision slide: light pointer parallax on the media plane ---- */
  (function initVisionParallax() {
    var slide = document.querySelector(".slide--vision");
    if (!slide || prefersReduced()) return;
    var raf = null, tx = 0, ty = 0;
    function apply() {
      raf = null;
      slide.style.setProperty("--vision-x", tx.toFixed(2) + "px");
      slide.style.setProperty("--vision-y", ty.toFixed(2) + "px");
    }
    function schedule() { if (!raf) raf = requestAnimationFrame(apply); }
    slide.addEventListener("pointermove", function (e) {
      var r = slide.getBoundingClientRect();
      tx = -(((e.clientX - r.left) / r.width) - 0.5) * 26;
      ty = -(((e.clientY - r.top) / r.height) - 0.5) * 20;
      schedule();
    });
    slide.addEventListener("pointerleave", function () { tx = 0; ty = 0; schedule(); });
  })();

  /* ---- hummingbird: glides between perch points as you scroll. It follows
     the active slide, settling near a "window" (image / frame) on it. It is
     never flipped — the bird always faces the same way so its volume holds. ---- */
  (function initBird() {
    var bird = document.getElementById("bird");
    if (!bird) return;
    var video = bird.querySelector(".bird__video");
    var W = 150, H = 150;
    var current = null;
    var frozen = false;   // double-click freezes her in place; another resumes
    var laneX = null;     // horizontal lane set by dragging; null = follow the perch
    var dragging = false; // true while she is being dragged by the mouse

    function perchEl(slide) {
      return slide.querySelector(".vision__media, .frame16, .frameimg, .about-media, .tier--featured, .concept__media, .slide__in") || slide;
    }
    function moveTo(slide) {
      if (!slide || frozen || dragging) return; // frozen or being dragged: leave her be
      current = slide;
      var r = perchEl(slide).getBoundingClientRect();
      var vw = window.innerWidth, vh = window.innerHeight;
      // horizontal: the lane you dragged her to, else the perch's right edge
      var bx = (laneX !== null)
        ? Math.max(0, Math.min(vw - W, laneX))
        : Math.max(12, Math.min(vw - W - 16, r.right - W * 0.86));
      // vertical: still driven by scroll (drifts down slide to slide)
      var by = Math.max(64, Math.min(vh - H - 16, r.top - H * 0.34));
      bird.style.setProperty("--bx", bx + "px");
      bird.style.setProperty("--by", by + "px");
      bird.classList.add("is-visible");
    }

    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) moveTo(e.target); });
      }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
      slides.forEach(function (s) { io.observe(s); });
    }

    // land on the first slide shortly after load
    setTimeout(function () { moveTo(current || slides[0]); }, 700);

    var rt = null;
    window.addEventListener("resize", function () {
      clearTimeout(rt);
      rt = setTimeout(function () { if (current) moveTo(current); }, 150);
    });

    // The bird keeps pointer-events:none so it never blocks the deck; every
    // interaction below is hit-tested by coordinates against her box.
    function withinBird(x, y) {
      var r = bird.getBoundingClientRect();
      return x >= r.left && x <= r.right && y >= r.top && y <= r.bottom;
    }

    // double-click: freeze (pause wings + hold position); double-click again to release.
    function toggleFreeze() {
      frozen = !frozen;
      bird.classList.toggle("is-frozen", frozen);
      if (!video) return;
      if (frozen) { try { video.pause(); } catch (e) {} }
      else { try { video.play(); } catch (e) {} moveTo(current || slides[0]); }
    }
    document.addEventListener("dblclick", function (e) {
      if (withinBird(e.clientX, e.clientY)) { e.preventDefault(); toggleFreeze(); }
    });

    // drag: grab the bird and move her; where you drop her sets the horizontal
    // lane, and scroll keeps driving her vertical drift within that lane.
    var grabDX = 0, grabDY = 0, dragMoved = false, lastBx = 0;
    document.addEventListener("pointerdown", function (e) {
      if (e.button !== 0 || !withinBird(e.clientX, e.clientY)) return;
      var r = bird.getBoundingClientRect();
      grabDX = e.clientX - r.left; grabDY = e.clientY - r.top;
      dragging = true; dragMoved = false;
      bird.classList.add("is-dragging");
      document.body.classList.add("bird-dragging");
    });
    document.addEventListener("pointermove", function (e) {
      if (!dragging) return;
      e.preventDefault();
      dragMoved = true;
      var vw = window.innerWidth, vh = window.innerHeight;
      lastBx = Math.max(0, Math.min(vw - W, e.clientX - grabDX));
      var by = Math.max(0, Math.min(vh - H, e.clientY - grabDY));
      bird.style.setProperty("--bx", lastBx + "px");
      bird.style.setProperty("--by", by + "px");
      bird.classList.add("is-visible");
    });
    function endDrag() {
      if (!dragging) return;
      dragging = false;
      bird.classList.remove("is-dragging");
      document.body.classList.remove("bird-dragging");
      if (dragMoved) { laneX = lastBx; } // remember the horizontal lane from the drag itself
    }
    document.addEventListener("pointerup", endDrag);
    document.addEventListener("pointercancel", endDrag);
  })();

  /* ---- Concierge hero parallax (subtle, deck-scroll driven) ---- */
  (function initParallax() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var deck = document.getElementById("deck");
    var nodes = Array.prototype.slice.call(document.querySelectorAll("[data-parallax] img"));
    if (!deck || !nodes.length) return;
    var AMP = 26; // px of travel
    var ticking = false;
    function update() {
      ticking = false;
      var vh = window.innerHeight;
      nodes.forEach(function (img) {
        var fig = img.parentElement;
        var r = fig.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) return; // off-screen, skip
        var progress = (r.top + r.height / 2) / vh - 0.5; // -0.5..0.5
        img.style.setProperty("--par", (progress * AMP).toFixed(1) + "px");
      });
    }
    function onScroll() {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }
    deck.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();
  })();

  /* ---- video lightbox (precedent players) ---- */
  function initVideobox() {
    var box = document.getElementById("videobox");
    if (!box) return;
    var frame = document.getElementById("videoboxIframe");
    var yt = document.getElementById("videoboxYt");
    var closeBtn = box.querySelector(".videobox__close");
    function openVideo(id) {
      if (!id) return;
      frame.src = "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1&rel=0";
      yt.href = "https://www.youtube.com/watch?v=" + id;
      box.classList.add("is-open");
      box.setAttribute("aria-hidden", "false");
    }
    function closeVideo() {
      box.classList.remove("is-open");
      box.setAttribute("aria-hidden", "true");
      frame.src = "";
    }
    document.querySelectorAll("[data-video]").forEach(function (el) {
      el.addEventListener("click", function (e) { e.preventDefault(); openVideo(el.getAttribute("data-video")); });
    });
    if (closeBtn) closeBtn.addEventListener("click", closeVideo);
    box.addEventListener("click", function (e) { if (e.target === box) closeVideo(); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && box.classList.contains("is-open")) closeVideo();
    });
  }

  /* ---- init ---- */
  initLang();
  initVideobox();
})();
