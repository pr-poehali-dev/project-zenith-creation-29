const works = [
  {
    title: 'Проект «Великая Отечественная»',
    description: 'Исследовательская работа учеников 9 класса: сбор воспоминаний ветеранов, составление интерактивной карты боевых действий.',
    tag: 'Проект учеников',
  },
  {
    title: 'Урок-дебаты «Реформы Петра I»',
    description: 'Авторская методика дебатов: ученики защищают противоположные точки зрения, опираясь на исторические источники.',
    tag: 'Методическая разработка',
  },
  {
    title: 'Музейная экспозиция «Быт XIX века»',
    description: 'Совместный проект с городским музеем: ученики исследовали артефакты и составили описания экспонатов.',
    tag: 'Совместный проект',
  },
  {
    title: 'Олимпиада по истории — 1 место',
    description: 'Подготовка победителей районной олимпиады по истории на протяжении трёх лет подряд.',
    tag: 'Достижение',
  },
  {
    title: 'Интерактивная хронология цивилизаций',
    description: 'Авторский учебный плакат и цифровая версия хронологии от Древнего Египта до наших дней для уроков 5–6 классов.',
    tag: 'Учебный материал',
  },
  {
    title: 'Открытый урок «Революция 1917 года»',
    description: 'Урок с элементами театральной реконструкции исторических событий. Отмечен на городском методическом конкурсе.',
    tag: 'Открытый урок',
  },
];

const tagColors: Record<string, string> = {
  'Проект учеников': 'bg-amber-900/60 text-amber-200',
  'Методическая разработка': 'bg-blue-900/60 text-blue-200',
  'Совместный проект': 'bg-green-900/60 text-green-200',
  'Достижение': 'bg-purple-900/60 text-purple-200',
  'Учебный материал': 'bg-rose-900/60 text-rose-200',
  'Открытый урок': 'bg-teal-900/60 text-teal-200',
};

export default function PortfolioSection() {
  return (
    <section className="bg-neutral-950 py-24 px-8 md:px-16">
      <div className="container mx-auto">
        <div className="mb-16">
          <p className="text-xs uppercase tracking-widest text-white/40 mb-3">Портфолио</p>
          <h2 className="text-3xl font-light text-white md:text-4xl">
            Методические работы и проекты
          </h2>
          <p className="mt-4 max-w-xl text-white/50 text-base font-light">
            Избранные разработки, проекты учеников и педагогические достижения за годы преподавания
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="group rounded-2xl border border-white/8 bg-white/4 overflow-hidden transition-all duration-300 hover:border-white/20 hover:bg-white/8">
            <div className="flex items-center justify-center bg-white p-6">
              <img
                src="https://cdn.poehali.dev/projects/e81b20dc-3c95-48ef-b77a-5cc885f0c8ea/bucket/725d070b-08ce-42bc-9d62-456962dd4d46.png"
                alt="QR-код практической работы"
                className="w-40 h-40 object-contain"
              />
            </div>
            <div className="p-6">
              <span className="inline-block rounded-full px-3 py-1 text-xs font-medium mb-4 bg-orange-900/60 text-orange-200">
                Практическая работа
              </span>
              <h3 className="text-lg font-light text-white mb-3 leading-snug">Практическая работа №8</h3>
              <p className="text-sm text-white/50 font-light leading-relaxed">Учебная практическая работа по программе ПОИО(б)-52. QR-код ведёт к материалам работы.</p>
            </div>
          </div>

          <div className="group rounded-2xl border border-white/8 bg-white/4 overflow-hidden transition-all duration-300 hover:border-white/20 hover:bg-white/8 flex flex-col">
            <div className="p-6 flex flex-col flex-1">
              <span className="inline-block rounded-full px-3 py-1 text-xs font-medium mb-4 bg-blue-900/60 text-blue-200">
                Интерактивное задание
              </span>
              <h3 className="text-lg font-light text-white mb-3 leading-snug">Интерактивное задание LearningApps</h3>
              <p className="text-sm text-white/50 font-light leading-relaxed flex-1">Учебное интерактивное упражнение по истории, созданное на платформе LearningApps.</p>
              <a href="https://learningapps.org/watch?v=pu6xa7vc326" target="_blank" rel="noopener noreferrer" className="mt-5 inline-block text-center rounded-lg border border-white/20 px-4 py-2 text-sm text-white/70 hover:border-white/50 hover:text-white transition-colors">
                Открыть задание →
              </a>
            </div>
          </div>

          <div className="group rounded-2xl border border-white/8 bg-white/4 overflow-hidden transition-all duration-300 hover:border-white/20 hover:bg-white/8 flex flex-col">
            <div className="p-6 flex flex-col flex-1">
              <span className="inline-block rounded-full px-3 py-1 text-xs font-medium mb-4 bg-rose-900/60 text-rose-200">
                Тест
              </span>
              <h3 className="text-lg font-light text-white mb-3 leading-snug">Тест по истории — Банк тестов</h3>
              <p className="text-sm text-white/50 font-light leading-relaxed flex-1">Авторский тест по истории, опубликованный на платформе Банк тестов для проверки знаний учащихся.</p>
              <a href="https://banktestov.ru/test/113680" target="_blank" rel="noopener noreferrer" className="mt-5 inline-block text-center rounded-lg border border-white/20 px-4 py-2 text-sm text-white/70 hover:border-white/50 hover:text-white transition-colors">
                Открыть тест →
              </a>
            </div>
          </div>

          <div className="group rounded-2xl border border-white/8 bg-white/4 overflow-hidden transition-all duration-300 hover:border-white/20 hover:bg-white/8 flex flex-col">
            <div className="p-6 flex flex-col flex-1">
              <span className="inline-block rounded-full px-3 py-1 text-xs font-medium mb-4 bg-rose-900/60 text-rose-200">
                Тест
              </span>
              <h3 className="text-lg font-light text-white mb-3 leading-snug">Тест — OnlineTestPad</h3>
              <p className="text-sm text-white/50 font-light leading-relaxed flex-1">Интерактивный тест по истории на платформе OnlineTestPad для самопроверки и контроля знаний.</p>
              <a href="https://onlinetestpad.com/iaudwabv2uyty" target="_blank" rel="noopener noreferrer" className="mt-5 inline-block text-center rounded-lg border border-white/20 px-4 py-2 text-sm text-white/70 hover:border-white/50 hover:text-white transition-colors">
                Открыть тест →
              </a>
            </div>
          </div>

          <div className="group rounded-2xl border border-white/8 bg-white/4 overflow-hidden transition-all duration-300 hover:border-white/20 hover:bg-white/8 flex flex-col">
            <div className="p-6 flex flex-col flex-1">
              <span className="inline-block rounded-full px-3 py-1 text-xs font-medium mb-4 bg-amber-900/60 text-amber-200">
                Форма опроса
              </span>
              <h3 className="text-lg font-light text-white mb-3 leading-snug">Форма — Яндекс Формы</h3>
              <p className="text-sm text-white/50 font-light leading-relaxed flex-1">Авторская форма опроса или проверочное задание, созданное в сервисе Яндекс Формы.</p>
              <a href="https://forms.yandex.ru/u/6a1bd07890fa7b214d835398" target="_blank" rel="noopener noreferrer" className="mt-5 inline-block text-center rounded-lg border border-white/20 px-4 py-2 text-sm text-white/70 hover:border-white/50 hover:text-white transition-colors">
                Открыть форму →
              </a>
            </div>
          </div>

          <div className="group rounded-2xl border border-white/8 bg-white/4 overflow-hidden transition-all duration-300 hover:border-white/20 hover:bg-white/8 flex flex-col">
            <div className="p-6 flex flex-col flex-1">
              <span className="inline-block rounded-full px-3 py-1 text-xs font-medium mb-4 bg-green-900/60 text-green-200">
                Учебное задание
              </span>
              <h3 className="text-lg font-light text-white mb-3 leading-snug">Задание — 1С:Урок</h3>
              <p className="text-sm text-white/50 font-light leading-relaxed flex-1">Учебное задание по истории, опубликованное на образовательной платформе 1С:Урок.</p>
              <a href="https://urok.1c.ru/share/task/eaa0723f5287d7ea25f8ebcc97c41557/" target="_blank" rel="noopener noreferrer" className="mt-5 inline-block text-center rounded-lg border border-white/20 px-4 py-2 text-sm text-white/70 hover:border-white/50 hover:text-white transition-colors">
                Открыть задание →
              </a>
            </div>
          </div>

          <div className="group rounded-2xl border border-white/8 bg-white/4 overflow-hidden transition-all duration-300 hover:border-white/20 hover:bg-white/8">
            <img
              src="https://cdn.poehali.dev/projects/e81b20dc-3c95-48ef-b77a-5cc885f0c8ea/bucket/229701c4-8492-4b34-aadc-376f889a2ead.jpg"
              alt="Типы личности по MBTI"
              className="w-full h-56 object-cover object-top"
            />
            <div className="p-6">
              <span className="inline-block rounded-full px-3 py-1 text-xs font-medium mb-4 bg-teal-900/60 text-teal-200">
                Учебный материал
              </span>
              <h3 className="text-lg font-light text-white mb-3 leading-snug">Типы личности по MBTI</h3>
              <p className="text-sm text-white/50 font-light leading-relaxed">Инфографика с описанием типов личности по методике MBTI: INTJ, INFJ, ISTJ, ESTP, ENTP, ENFP. Используется как наглядное пособие на занятиях.</p>
            </div>
          </div>

          <div className="group rounded-2xl border border-white/8 bg-white/4 overflow-hidden transition-all duration-300 hover:border-white/20 hover:bg-white/8">
            <img
              src="https://cdn.poehali.dev/projects/e81b20dc-3c95-48ef-b77a-5cc885f0c8ea/bucket/e7e478cc-28e8-4146-bd47-6ce1d01e3b39.png"
              alt="Брошюра MBTI"
              className="w-full h-56 object-cover object-top"
            />
            <div className="p-6">
              <span className="inline-block rounded-full px-3 py-1 text-xs font-medium mb-4 bg-purple-900/60 text-purple-200">
                Методическая разработка
              </span>
              <h3 className="text-lg font-light text-white mb-3 leading-snug">Брошюра «Найди свой тип личности»</h3>
              <p className="text-sm text-white/50 font-light leading-relaxed">Авторская брошюра о методиках типирования личности: MBTI, Психософия, Эннеаграмма, Big Five, Соционика. Разработана для учебных занятий по психологии и самопознанию.</p>
            </div>
          </div>
          {works.map((work) => (
            <div
              key={work.title}
              className="group rounded-2xl border border-white/8 bg-white/4 p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/8"
            >
              <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium mb-4 ${tagColors[work.tag]}`}>
                {work.tag}
              </span>
              <h3 className="text-lg font-light text-white mb-3 leading-snug">{work.title}</h3>
              <p className="text-sm text-white/50 font-light leading-relaxed">{work.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 border-t border-white/10 pt-16 grid gap-8 sm:grid-cols-3 text-center">
          <div>
            <p className="text-4xl font-light text-white">15+</p>
            <p className="mt-2 text-sm text-white/40 uppercase tracking-widest">Лет опыта</p>
          </div>
          <div>
            <p className="text-4xl font-light text-white">300+</p>
            <p className="mt-2 text-sm text-white/40 uppercase tracking-widest">Выпускников</p>
          </div>
          <div>
            <p className="text-4xl font-light text-white">12</p>
            <p className="mt-2 text-sm text-white/40 uppercase tracking-widest">Олимпиадных призёров</p>
          </div>
        </div>
      </div>
    </section>
  );
}