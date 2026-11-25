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
    'Everything <em>digital</em>': 'Делаем всё в <em>цифре</em>',
    'From a ten-second sound to the software a whole company runs on. One team takes it from the idea to the finished thing.':
      'От десятисекундного звука до системы, на которой работает целая компания. Одна команда ведёт проект от идеи до готового результата.',
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
    '{name} online': '{name} в сети',
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
    'Potent — digital agency · {city}': 'Potent — диджитал-агентство · {city}',
    'Big money is in digital.': 'Большие деньги — в цифре.',
    'Showreel: Luka Skhiladze': 'Шоурил: Лука Схиладзе',
    Scroll: 'Листайте',
    'A team of {n} with 80+ shipped projects for Bank of Georgia, Yamaha Motor Europe, SOCAR and Kärcher.':
      'Команда из {n} человек и 80+ проектов для Bank of Georgia, Yamaha Motor Europe, SOCAR и Kärcher.',
    'Selected work': 'Избранные работы',
    'View project': 'Смотреть проект',
    'We know how to earn it.': 'Мы знаем, как их зарабатывать.',
    "Here's the plan.": 'Вот план.',
    Market: 'Рынок',
    Team: 'Команда',
    Plan: 'План',
    'Our people have worked for': 'Наши люди работали с',
    'projects shipped by our people': 'проектов сделали наши люди',
    '1.8M': '1,8 млн',
    'people use the Bank of Georgia app our designer works on':
      'человек пользуются приложением Bank of Georgia — над ним работает наш дизайнер',
    "markets run on Yamaha's dealer CRM, led by our designer":
      'рынков работают в дилерской CRM Yamaha — проект нашего дизайнера',
    'The market': 'Рынок',
    'Every business pays for digital. <em>Every year.</em>': 'Каждый бизнес платит за цифру. <em>Каждый год.</em>',
    '$3.9 trillion': '3,9 трлн $',
    'what companies worldwide will spend on going digital in 2027':
      'потратят компании мира на цифровизацию в 2027 году',
    '+16% a year': '+16% в год',
    'how fast that spending grows': 'так быстро растут эти расходы',
    '0% profit tax': '0% налога на прибыль',
    'for IT companies in Georgia that sell abroad (Virtual Zone)':
      'для IT-компаний в Грузии, которые продают за рубеж (статус Virtual Zone)',
    Source: 'Источник',
    'How an agency earns': 'Как зарабатывает агентство',
    'Sites, apps and brands, paid per project.': 'Сайты, приложения и бренды — оплата за каждый проект.',
    'Monthly support': 'Ежемесячная поддержка',
    'Clients pay every month for updates, ads and content.':
      'Клиенты платят каждый месяц за обновления, рекламу и контент.',
    Academy: 'Академия',
    'Students pay to learn. The best join our team.': 'Студенты платят за обучение. Лучшие приходят к нам в команду.',
    Podcast: 'Подкаст',
    'An audience that brings in clients and students.': 'Аудитория, которая приводит клиентов и студентов.',
    'The team': 'Команда',
    "Senior people who've done it for <em>big names.</em>":
      'Опытные люди, которые уже работали на <em>больших клиентов.</em>',
    Specialists: 'Специалисты',
    'Next hires, with the investment': 'Следующие наймы — на инвестиции',
    'Project managers': 'Проджект-менеджеры',
    Developers: 'Разработчики',
    Designers: 'Дизайнеры',
    Sales: 'Продажи',
    Marketing: 'Маркетинг',
    'Academy mentors': 'Наставники академии',
    'Worked for': 'Работали с',
    'What we sell': 'Что мы продаём',
    'Growth engine': 'Двигатель роста',
    'Our own academy grows <em>our own people.</em>': 'Своя академия растит <em>своих людей.</em>',
    'Seniors lead, academy graduates do the volume: more projects with the same team, and a higher margin.':
      'Опытные ведут проекты, выпускники академии делают объём: больше проектов той же командой и выше маржа.',
    'Academy co-founded by Giorgi Kheladze': 'Академия, сооснователь — Гиорги Хеладзе',
    '90 days': '90 дней',
    'from junior to mid-level designer': 'от новичка до дизайнера среднего уровня',
    Interns: 'Стажёры',
    Revenue: 'Выручка',
    'Higher margin': 'Выше маржа',
    'The plan': 'План',
    '$100,000 to build it <em>faster.</em>': '$100 000 — чтобы построить <em>быстрее.</em>',
    '$40k': '$40 тыс.',
    '$100k': '$100 тыс.',
    Start: 'Старт',
    Scale: 'Рост',
    Recommended: 'Рекомендуем',
    'A small core team': 'Небольшая основная команда',
    'First clients': 'Первые клиенты',
    'Grow step by step': 'Рост шаг за шагом',
    'The full team from day one': 'Полная команда с первого дня',
    'Our own academy and interns': 'Своя академия и стажёры',
    'Sales and marketing from the start': 'Продажи и маркетинг с самого начала',
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
    tagline: 'Диджитал-агентство · Тбилиси',
    description: 'Диджитал-агентство из Тбилиси: 80+ проектов для Bank of Georgia, Yamaha Motor Europe, SOCAR и Kärcher, опытная команда и план роста.',
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
      title: 'Монтаж и цвет',
      text: 'Собираем из отснятого материала готовый фильм и доводим цвет.',
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
        'SOCAR Instagram feed': 'Оформление ленты Instagram для SOCAR.',
        'MZESUMZIRA posters': 'Серия постеров.',
      },
    },
    design: {
      title: 'Дизайн продукта',
      text: 'Как сайт или приложение выглядит и работает. Проверяем до начала разработки.',
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
      text: 'Приложение для телефона: от первой идеи до дня, когда оно появляется в App Store.',
      examples: {
        'B2B safety app': 'Наше приложение для специалистов по охране труда на стройке. Уже в App Store.',
        Seensme: 'Дизайн приложения, в котором авторы зарабатывают на подписках.',
        mBank: 'Дизайн мобильного банка Bank of Georgia.',
      },
    },
    company: {
      title: 'Система, которая управляет всей компанией',
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
