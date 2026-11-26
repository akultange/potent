// Russian for everything that is not a person or a project.
// (People and projects are translated in src/content/people-ru/, one file per person.)
//
// How it works: the page is written in English. Wherever a piece of text has a line here, the
// Russian page (/ru/) shows that line; where it has none, the Russian page shows the English.
// So a new English text never breaks anything, it just stays English until a line is added.
// Spaces that must not break a line (after short words such as "в", "и", "для", before a dash)
// are added automatically, so write plain spaces.

export const RU = {
  /** Page texts, keyed by the English text exactly as it is written in the templates. */
  ui: {
    // header
    Sections: 'Разделы',
    Services: 'Услуги',
    'Who does what': 'Кто что делает',
    People: 'Люди',
    Work: 'Работы',
    Language: 'Язык',

    // top of the page
    'Design & engineering agency · {city}': 'Агентство дизайна и разработки · {city}',
    'Product, brand and engineering, from <em>one senior team.</em>':
      'Продукт, бренд и разработка — от <em>одной опытной команды.</em>',
    "{name} pairs a founder-led product design practice with a network of specialists in Tbilisi. Between us, we've designed and built for banks, regulators, retailers and consumer brands.":
      '{name} объединяет студию продуктового дизайна, которую ведут сами основатели, и сеть специалистов в Тбилиси. Вместе мы проектировали и разрабатывали для банков, регуляторов, ритейла и потребительских брендов.',
    'Work for': 'Среди клиентов',

    // everything digital
    // "Digital" as a noun is never "цифра" (it reads as "a number"): say "цифровая сфера",
    // "цифровые продукты", "цифровые услуги". The trade's own name for us is "digital-агентство".
    // Keep long words such as "цифровизация" out of headings: on a 360px phone one word is one line.
    'Everything <em>digital</em>': 'Делаем всё <em>в цифровой сфере</em>',
    'From a ten-second sound to the software a whole company runs on. One team takes it from the idea to the finished thing.':
      'От десятисекундной мелодии до системы, на которой работает вся компания. Одна команда ведёт проект от идеи до результата — под ключ.',
    'Pause the pictures': 'Остановить анимацию',
    'Play the pictures': 'Включить анимацию',
    'From our work': 'Из наших работ',

    // what we do
    'What we <em>do</em>': 'Что мы <em>делаем</em>',
    'Every service is backed by someone in the network who has already done it, with the projects to prove it.':
      'За каждой услугой стоит человек из нашей сети, который уже делал такую работу, — и проекты, которые это подтверждают.',
    'Delivered by': 'Кто делает',

    // who does what
    'Who does <em>what</em>': 'Кто что <em>делает</em>',
    'Each person and the services they can lead.': 'Каждый человек и услуги, которые он может вести.',
    Person: 'Человек',
    Yes: 'Да',
    No: 'Нет',

    // the people
    'The <em>people</em>': 'Наши <em>люди</em>',
    'Founders and the specialists we bring in, with the work each of them has done.':
      'Основатели и специалисты, которых мы подключаем, — и работы каждого из них.',
    Founders: 'Основатели',
    Network: 'Сеть специалистов',
    Portfolio: 'Портфолио',
    'Profile coming soon.': 'Профиль скоро появится.',
    '{name} online': 'Профили: {name}',
    "{name}'s projects": 'Проекты: {name}',
    Projects: 'Проекты',
    Role: 'Роль',
    'Case study': 'Разбор проекта',

    // selected work
    'Selected <em>work</em>': 'Избранные <em>работы</em>',
    'Filter by service to see everything the network has shipped in that area.':
      'Выберите услугу, чтобы увидеть всё, что наша сеть сделала в этой области.',
    'Filter work by service': 'Фильтр работ по услугам',
    All: 'Все',
    by: 'Автор:',

    // footer
    "Project credits come from each person's own portfolio and profiles.":
      'Сведения о проектах взяты из портфолио и профилей самих специалистов.',

    // the agency blueprint
    "{name}: big money is in digital. Here's the plan.": '{name}: большие деньги — в цифровой сфере. Вот план.',
    'Big money is in digital.': 'Большие\u00a0деньги — в цифровой сфере.',
    'We know how to earn it.': 'Мы знаем, как их зарабатывать.',
    "Here's the plan.": 'Вот план.',
    'Our people have worked for': 'С кем работала команда',
    'Film by co-founder Luka Skhiladze': 'Видео: сооснователь Лука Схиладзе',
    'Pause the film': 'Остановить видео',
    Scroll: 'Листайте',
    Market: 'Рынок',
    Team: 'Команда',
    Plan: 'План',

    // proof
    'Four of us have built products for Bank of Georgia. Two are CTOs of other companies.':
      'Четверо из нас создавали цифровые продукты для Bank of Georgia. Двое — технические директора других компаний.',
    '1.8M': '1,8 млн',
    'people use the Bank of Georgia app our designer works on':
      'человек пользуются приложением Bank of Georgia — над ним работает наш дизайнер',
    // No "CRM" on the Russian page: the reader is not from our trade.
    "European markets covered by Yamaha's dealer CRM, designed by our designer":
      'рынков Европы охватывает дилерская система Yamaha — её спроектировал наш дизайнер',
    "works in our people's portfolios": 'работ в портфолио нашей команды',
    Source: 'Источник',

    // selected work
    'Selected work': 'Избранные работы',
    'View project': 'Смотреть проект',
    'More work': 'Ещё работы',
    "Ad platform for the bank's business customers": 'Рекламный кабинет для бизнес-клиентов банка',
    'One CRM for 1,500+ dealers in 40+ European markets': 'Одна на 1 500+ дилеров и 40+ рынков Европы',
    "The bank's app: 1.8M active users": 'Приложение банка: 1,8 млн активных пользователей',
    "Kärcher's official online store in Georgia": 'Официальный магазин бренда в Грузии — с каталогом и оплатой картой',
    'Online store for EV chargers, with a map of charging stations':
      'Магазин для владельцев электромобилей: зарядные устройства и карта зарядных станций',
    'Reporting software for regulators in 14 countries': 'Система отчётности для финансовых регуляторов в 14 странах',
    "Luka's own app for building-site safety, live on the App Store":
      'Собственное приложение Луки для строительных площадок — уже в App Store',
    'Marketplace for Georgian handmade goods': 'Маркетплейс грузинских изделий ручной работы',
    'Hiring platform; its design system made design 5× faster':
      'Единая система компонентов ускорила работу дизайнеров в 5 раз',
    'Cybersecurity monitoring platform': 'Платформа мониторинга кибербезопасности',

    // the team
    "Senior people who've done it for <em>big names.</em>": 'За плечами команды — <em>крупные бренды.</em>',
    Specialists: 'Специалисты',
    'Worked for': 'Опыт работы',
    '+{n} developers': '+{n} разработчиков',
    '+{n} designers': '+{n} дизайнеров',
    'From our network in Tbilisi': 'Из нашего круга в Тбилиси',

    // how the team is built
    // Plain words for a reader who is not from our trade: "руководитель команды", not "тимлид";
    // "подрядчики", not "аутсорс"; "блогер", not "инфлюенсер".
    'How the team <em>is built.</em>': 'Как устроена <em>команда.</em>',
    'Head of Digital': 'Руководитель цифрового направления',
    CTO: 'Технический директор',
    'Team lead': 'Руководитель команды',
    '2–3 team leads, each with a team': '2–3 руководителя, у каждого своя команда',
    Outsource: 'Подрядчики',
    'Partner teams for extra hands': 'Команды-партнёры — когда нужно больше рук',
    'Sales & marketing': 'Продажи и маркетинг',
    'Sales manager': 'Менеджер по продажам',
    Marketer: 'Маркетолог',
    'Marketer & influencer': 'Маркетолог и блогер',

    // how a project runs
    'How a project <em>runs.</em>': 'Как мы ведём <em>проект.</em>',
    Brief: 'Задача',
    'Sales brings the client; a team lead sets the scope, timeline and price.':
      'Продажи приводят клиента, руководитель команды определяет объём работ, сроки и цену.',
    Design: 'Дизайн',
    'Design teams shape the product, brand and motion before anything is built.':
      'Дизайнеры продумывают продукт, бренд и анимацию до начала разработки.',
    Build: 'Разработка',
    'Engineering teams build it; outsource partners add hands at peaks.':
      'Разработчики создают продукт; в пиковые периоды подключаем подрядчиков.',
    Launch: 'Запуск',
    'Release, measure, fix.': 'Запускаем, измеряем результат, дорабатываем.',
    Support: 'Поддержка',
    'Monthly updates, ads and content keep the client with us.':
      'Ежемесячные обновления, реклама и контент — клиент остаётся с нами.',

    // what we sell, the market, how we make money
    'What we sell': 'Что мы продаём',
    'Every business pays for digital. <em>More every year.</em>':
      'Каждый бизнес платит за цифровые услуги. <em>С каждым годом — всё больше.</em>',
    '$3.9 trillion': '$3,9 трлн',
    'what companies worldwide will spend on going digital in 2027':
      'потратят компании всего мира на цифровизацию в 2027 году',
    '+16% a year': '+16% в год',
    'how fast that spending grows': 'темп роста этих расходов',
    '0% profit tax': '0% налога на прибыль',
    'on IT that Georgian companies with Virtual Zone status build and sell abroad':
      'от продажи собственных IT-разработок за рубеж — для грузинских компаний со статусом Virtual Zone',
    'How we make money': 'Как мы зарабатываем',
    'Sites, apps and brands, paid per project.': 'Сайты, приложения и бренды — оплата за каждый проект.',
    'Monthly support': 'Ежемесячная поддержка',
    'Clients pay every month for updates, ads and content.':
      'Клиенты платят каждый месяц за обновления, рекламу и контент.',
    Academy: 'Академия',
    'Students pay to learn. The best join our team.': 'Студенты платят за обучение. Лучшие приходят к нам в команду.',
    Podcast: 'Подкаст',
    'An audience that brings in clients and students.': 'Аудитория, которая приводит клиентов и студентов.',

    // the plan: agency now, scale next, the academy after scale
    'Agency first. <em>Academy after scale.</em>': 'Сначала агентство. <em>Академия — после роста.</em>',
    Now: 'Сейчас',
    Next: 'Дальше',
    'After scale': 'После роста',
    Agency: 'Агентство',
    Scale: 'Рост',
    'Sites, apps and brands for companies, paid per project and every month.':
      'Сайты, приложения и бренды для компаний. Оплата — за проект и ежемесячно.',
    'More team leads and outsource partners; sales and marketing keep clients coming.':
      'Больше руководителей команд и подрядчиков; продажи и маркетинг постоянно приводят новых клиентов.',
    'Our own academy grows our own people, so the margin goes up.':
      'Собственная академия готовит кадры для агентства — и маржа растёт.',
    'After scale: the academy': 'После роста: академия',
    'Seniors will lead, academy graduates will do the volume: more projects with the same team, and a higher margin.':
      'Опытные специалисты ведут проекты, а основной объём работы берут на себя выпускники академии. Та же команда делает больше проектов — и маржа выше.',
    'Academy co-founded by Giorgi Kheladze': 'Сооснователь академии — Гиорги Хеладзе',
    '90 days': '90 дней',
    'from junior to mid-level designer': 'от начинающего дизайнера до специалиста среднего уровня',
    Interns: 'Стажёры',
    Revenue: 'Выручка',
    'Higher margin': 'Выше маржа',

    // next step
    "Next step: <em>let's talk.</em>": 'Следующий шаг: <em>давайте поговорим.</em>',
    '{a} and {b} will answer any question.': '{a} и {b} ответят на любые вопросы.',
    'Co-founder': 'Сооснователь',
    'Reply to the message this link came in.': 'Просто ответьте на сообщение с этой ссылкой.',
  } as Record<string, string>,

  /** Words that follow a number: one, a few (2 to 4), many. */
  nouns: {
    people: ['человек', 'человека', 'человек'],
    services: ['услуга', 'услуги', 'услуг'],
    projects: ['проект', 'проекта', 'проектов'],
    partners: ['управляющий партнёр', 'управляющих партнёра', 'управляющих партнёров'],
    specialists: ['специалист', 'специалиста', 'специалистов'],
  },

  /** src/data/site.ts */
  site: {
    tagline: 'Digital-агентство · Тбилиси',
    description: 'Digital-агентство из Тбилиси. Команда работала с Yamaha Motor Europe, Bank of Georgia и Kärcher. Вот план роста.',
    city: 'Тбилиси, Грузия',
  },

  /** src/data/services.ts, by service id. */
  services: {
    'product-design': {
      name: 'Дизайн продуктов и интерфейсов',
      short: 'Дизайн',
      blurb:
        'Исследования, пользовательские сценарии, дизайн интерфейсов, прототипы и тесты с пользователями для сайтов и мобильных приложений, а также дизайн-системы, которые растут вместе с командами.',
    },
    branding: {
      name: 'Фирменный стиль',
      short: 'Бренд',
      blurb: 'Логотипы, системы фирменного стиля и бренд-стратегия, которые дают продукту узнаваемое лицо.',
    },
    'graphic-design': {
      name: 'Графический дизайн и иллюстрация',
      short: 'Графика',
      blurb: 'Постеры, иллюстрации, оформление рекламных кампаний и соцсетей.',
    },
    motion: {
      name: 'Анимация и видео',
      short: 'Видео',
      blurb:
        'Ролики к запуску и объясняющие видео, анимация логотипов и интерфейсов, видео для соцсетей и монтаж.',
    },
    web: {
      name: 'Сайты и контент-платформы',
      short: 'Сайты',
      blurb: 'Промосайты, журналы и платформы с системой управления контентом: дизайн и разработка под ключ.',
    },
    ecommerce: {
      name: 'Интернет-магазины и маркетплейсы',
      short: 'Магазины',
      blurb: 'Магазины на Shopify, собственные витрины и маркетплейсы с множеством продавцов.',
    },
    engineering: {
      name: 'Разработка продуктов',
      short: 'Разработка',
      blurb: 'Веб-приложения, API, облачная архитектура, интеграция ИИ и техническое руководство.',
    },
  } as Record<string, { name: string; short: string; blurb: string }>,

  /**
   * src/data/scope.ts, by tile id. `examples` holds the one-line note for each real project
   * shown under the tile, keyed by the project's English name.
   */
  scope: {
    sound: {
      title: 'Звук и музыка',
      text: 'Музыка, озвучка и звуковые эффекты для роликов, рекламы и приложений.',
      examples: {
        'Showreel 2026': 'Минутный ролик, смонтированный под музыку, которую мы написали сами.',
      },
    },
    edit: {
      title: 'Монтаж и цветокоррекция',
      text: 'Превращаем отснятый материал в готовый ролик или фильм и доводим цвет.',
      examples: {
        Showreel: 'Объясняющие ролики и видео для соцсетей: монтаж и анимация.',
        Nichiyomu: 'Рекламный ролик для соцсетей: приложение для чтения на японском.',
      },
    },
    motion: {
      title: 'Анимация и 3D',
      text: 'Анимационная реклама, объясняющие ролики и видео о продукте — в 2D и 3D.',
      examples: {
        'Logicor Park 08': 'Видеобаннеры для логистического парка — во всех рекламных форматах.',
        'Fuse 2': '3D-ролик о продукте для платформы ИИ-агентов (концепт).',
        'Coffee prices': 'Рисованный объясняющий ролик о ценах на кофе (концепт).',
      },
    },
    brand: {
      title: 'Бренд и графика',
      text: 'Логотип, цвета и стиль, которые узнают с первого взгляда.',
      examples: {
        'Atlantis Dental Clinic': 'Логотип стоматологической клиники.',
        'SOCAR Instagram feed': 'Концепт ленты Instagram для SOCAR.',
        'MZESUMZIRA posters': 'Серия постеров.',
      },
    },
    design: {
      title: 'Дизайн интерфейсов',
      text: 'Продумываем, как выглядит и работает сайт или приложение, и проверяем это до начала разработки.',
      examples: {
        'Ads Manager': 'Рекламный кабинет для бизнес-клиентов Bank of Georgia.',
        Cyngular: 'Экраны платформы мониторинга кибербезопасности.',
        Guma: 'Прототип платёжной платформы для показа инвесторам.',
      },
    },
    web: {
      title: 'Сайты',
      text: 'Для компании, продукта или рекламной кампании. Дизайн и разработка — одной командой.',
      examples: {
        'Homeland of Wine Magazine': 'Журнал о грузинском вине на двух языках.',
        'skhiladze.com': 'Сайт-портфолио, номинант Awwwards (ноябрь 2026).',
        'Urban Industry': 'Сайт магазина кроссовок с 3D-витриной (концепт).',
      },
    },
    store: {
      title: 'Интернет-магазины',
      text: 'Магазин, который показывает товар, принимает заказ и оплату и отправляет покупку.',
      examples: {
        'Kärcher Georgia online store': 'Официальный интернет-магазин Kärcher в Грузии.',
        Sachemo: 'Маркетплейс грузинских изделий ручной работы.',
      },
    },
    app: {
      title: 'Мобильные приложения',
      text: 'Приложение для телефона: от первой идеи до выхода в App Store.',
      examples: {
        'B2B safety app': 'Наше приложение для специалистов по охране труда на стройке. Уже в App Store.',
        Seensme: 'Дизайн приложения, в котором авторы зарабатывают на подписках.',
        mBank: 'Дизайн мобильного банка Bank of Georgia.',
      },
    },
    company: {
      title: 'Система, на которой работает вся компания',
      text: 'Заказы, клиенты, склад, сотрудники и деньги — в одной системе вместо десятка таблиц. Все цифры — на одном экране.',
      examples: {
        'Yamaha Motor Europe CRM': 'Дизайн единой системы для 1 500+ дилеров Yamaha на 40+ рынках Европы.',
        FINA: 'Система отчётности, которой пользуются регуляторы в 14 странах.',
        'Webiz talent platform': 'Дизайн платформы найма: портал кандидата, кабинет компании, панель администратора.',
        Egofy: 'Дизайн системы графиков и планирования персонала для разных стран.',
      },
    },
  } as Record<string, { title: string; text: string; examples: Record<string, string> }>,
};
