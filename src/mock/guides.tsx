type StepWithoutMedia = {
  title: string;
  summary: string;
  text?: string;
  mediaSrc?: never;
}

type StepWithMedia = Omit<StepWithoutMedia, "mediaSrc"> & {
  mediaSrc: string;
}

type Step = StepWithMedia | StepWithoutMedia;

export type Guide = {
  id: number;
  title: string;
  description: string;
  content: Step[];
  time_to_read: number;
  date: string;
  views: number;
}

export const guides: Guide[] = [
  {
    id: 1,
    title: "Как зарегистрироваться на дисциплины",
    description: "На этом гайде ты узнаешь как зарегистрироваться на дисциплины в wsp + получишь практические советы по использованию платформы",
    time_to_read: 3,
    date: "10.03.2024",
    views: 87,
    content: [
      {
        title: "Шаг 1",
        summary: "Перейдите в главную страницу",
        text: "Чтобы начать регистрацию на дисциплины в WSP, первым шагом необходимо перейти на главную страницу.",
        mediaSrc: "/guide/main-page.jpeg",
      },
      {
        title: "Шаг 2",
        summary: "Нажмите на кнопку 'Регистрация на дисциплины'",
        text: "На главной странице найдите кнопку 'Регистрация на дисциплины' и нажмите на нее.",
        mediaSrc: "/guide/registration.jpeg",
      },
      {
        title: "Шаг 3",
        summary: "Выберите дисциплины и нажмите на кнопку 'Зарегистрироваться'",
        text: "После нажатия на кнопку 'Регистрация на дисциплины', выберите необходимые дисциплины из списка и нажмите на кнопку 'Зарегистрироваться'.",
        mediaSrc: "/guide/registration-page.jpeg",
      },
      {
        title: "Успех!",
        summary: "Поздравляем! Вы успешно зарегистрировались на дисциплины",
        text: "После выполнения всех предыдущих шагов, вы успешно зарегистрировались на выбранные дисциплины. Поздравляем!",
      }
    ]
  },
  {
    id: 2,
    title: "Как выбрать специальность",
    description: "На этом гайде ты узнаешь как выбрать подходящую специальность в университете + получишь советы по процессу выбора",
    time_to_read: 5,
    date: "15.03.2024",
    views: 92,
    content: [
      {
        title: "Шаг 1",
        summary: "Исследуйте свои интересы и увлечения",
        text: "Первым шагом в выборе специальности является исследование своих интересов и увлечений. Подумайте о том, что вам нравится делать и в чем вы хороши.",
      },
      {
        title: "Шаг 2",
        summary: "Изучите доступные специальности",
        text: "Ознакомьтесь с различными специальностями, которые предлагаются в университете. Изучите их описания, узнайте о предметах, которые вы будете изучать и возможных карьерных путях.",
      },
      {
        title: "Шаг 3",
        summary: "Поговорите с профессионалами",
        text: "Поговорите с людьми, работающими в интересующих вас областях. Узнайте о их опыте, задайте вопросы и получите рекомендации от экспертов.",
      },
      {
        title: "Шаг 4",
        summary: "Примите информированное решение",
        text: "На основе своих интересов, исследований и бесед с профессионалами, примите информированное решение о выборе специальности. Помните, что это важный шаг в вашей карьере.",
      }
    ]
  },
  {
    id: 3,
    title: "Как подготовиться к экзаменам",
    description: "На этом гайде ты узнаешь как эффективно подготовиться к экзаменам в университете + получишь полезные советы и стратегии",
    time_to_read: 7,
    date: "20.03.2024",
    views: 105,
    content: [
      {
        title: "Шаг 1",
        summary: "Составьте план подготовки",
        text: "Первым шагом в подготовке к экзаменам является составление плана. Определите, какие предметы требуют особого внимания и распределите время между ними.",
      },
      {
        title: "Шаг 2",
        summary: "Изучите материалы",
        text: "Ознакомьтесь с учебными материалами, лекциями и учебниками. Уделите внимание ключевым понятиям, формулам и примерам.",
      },
      {
        title: "Шаг 3",
        summary: "Практикуйтесь с задачами",
        text: "Решайте практические задачи, чтобы закрепить свои знания. Используйте учебные пособия, интерактивные задания и практические тесты.",
      },
      {
        title: "Шаг 4",
        summary: "Поддерживайте здоровый образ жизни",
        text: "Не забывайте о здоровье во время подготовки к экзаменам. Поддерживайте режим сна, занимайтесь физическими упражнениями и питайтесь правильно.",
      }
    ]
  },
  {
    id: 4,
    title: "Как зарегистрироваться в деканате",
    description: "На этом гайде ты узнаешь как зарегистрироваться в деканате университета + получишь информацию о необходимых документах и процедуре",
    time_to_read: 4,
    date: "25.03.2024",
    views: 78,
    content: [
      {
        title: "Шаг 1",
        summary: "Подготовьте необходимые документы",
        text: "Перед посещением деканата, убедитесь, что у вас есть все необходимые документы, такие как студенческий билет, паспорт и другие идентификационные документы.",
      },
      {
        title: "Шаг 2",
        summary: "Запишитесь на прием",
        text: "Свяжитесь с деканатом и запишитесь на прием. Уточните время и место встречи, чтобы избежать лишних ожиданий.",
      },
      {
        title: "Шаг 3",
        summary: "Посетите деканат",
        text: "Приходите в деканат в назначенное время. Предъявите свои документы и сообщите о цели вашего визита.",
      },
      {
        title: "Шаг 4",
        summary: "Пройдите регистрацию",
        text: "Пройдите процедуру регистрации в деканате. Заполните необходимые формы и предоставьте требуемую информацию.",
      }
    ]
  },
  {
    id: 5,
    title: "Как получить справку из деканата",
    description: "На этом гайде ты узнаешь как получить справку из деканата университета + получишь информацию о необходимых документах и процедуре",
    time_to_read: 3,
    date: "30.03.2024",
    views: 65,
    content: [
      {
        title: "Шаг 1",
        summary: "Определите цель справки",
        text: "Определите, для чего вам нужна справка из деканата. Уточните требования и формат справки.",
      },
      {
        title: "Шаг 2",
        summary: "Соберите необходимые документы",
        text: "Соберите все необходимые документы, которые могут потребоваться для получения справки. Это могут быть студенческий билет, паспорт и другие идентификационные документы.",
      },
      {
        title: "Шаг 3",
        summary: "Запишитесь на получение справки",
        text: "Свяжитесь с деканатом и запишитесь на получение справки. Уточните время и место получения.",
      },
      {
        title: "Шаг 4",
        summary: "Получите справку",
        text: "Приходите в деканат в назначенное время и получите справку. Убедитесь, что все данные в справке верны.",
      }
    ]
  },
  {
    id: 6,
    title: "Как оформить отпуск в офисе",
    description: "На этом гайде ты узнаешь как оформить отпуск в офисе + получишь информацию о процедуре и необходимых документах",
    time_to_read: 4,
    date: "05.04.2024",
    views: 73,
    content: [
      {
        title: "Шаг 1",
        summary: "Ознакомьтесь с политикой отпусков",
        text: "Ознакомьтесь с политикой отпусков в вашем офисе. Узнайте о правилах, сроках и процедуре оформления отпуска.",
      },
      {
        title: "Шаг 2",
        summary: "Сообщите о своем намерении",
        text: "Сообщите своему руководителю о своем намерении взять отпуск. Уточните, какую информацию и документы необходимо предоставить.",
      },
      {
        title: "Шаг 3",
        summary: "Заполните заявление",
        text: "Заполните заявление на отпуск. Укажите даты отпуска, количество дней и другую необходимую информацию.",
      },
      {
        title: "Шаг 4",
        summary: "Предоставьте документы",
        text: "Предоставьте необходимые документы, такие как заявление, медицинскую справку (если требуется) и другие документы, указанные в политике отпусков.",
      }
    ]
  },
  {
    id: 7,
    title: "Как получить разрешение на пропуск в офис",
    description: "На этом гайде ты узнаешь как получить разрешение на пропуск в офис + получишь информацию о процедуре и необходимых документах",
    time_to_read: 3,
    date: "10.04.2024",
    views: 68,
    content: [
      {
        title: "Шаг 1",
        summary: "Ознакомьтесь с политикой пропусков",
        text: "Ознакомьтесь с политикой пропусков в вашем офисе. Узнайте о правилах, сроках и процедуре получения разрешения на пропуск.",
      },
      {
        title: "Шаг 2",
        summary: "Сообщите о своей необходимости",
        text: "Сообщите своему руководителю о своей необходимости получить разрешение на пропуск. Уточните, какую информацию и документы необходимо предоставить.",
      },
      {
        title: "Шаг 3",
        summary: "Заполните заявление",
        text: "Заполните заявление на разрешение на пропуск. Укажите причину пропуска, даты и другую необходимую информацию.",
      },
      {
        title: "Шаг 4",
        summary: "Предоставьте документы",
        text: "Предоставьте необходимые документы, такие как заявление и другие документы, указанные в политике пропусков.",
      }
    ]
  },
  {
    id: 8,
    title: "Как оформить заявление в деканате",
    description: "На этом гайде ты узнаешь как оформить заявление в деканате университета + получишь информацию о процедуре и необходимых документах",
    time_to_read: 4,
    date: "15.04.2024",
    views: 71,
    content: [
      {
        title: "Шаг 1",
        summary: "Определите цель заявления",
        text: "Определите, для чего вам нужно оформить заявление в деканате. Уточните требования и формат заявления.",
      },
      {
        title: "Шаг 2",
        summary: "Соберите необходимые документы",
        text: "Соберите все необходимые документы, которые могут потребоваться для оформления заявления. Это могут быть студенческий билет, паспорт и другие идентификационные документы.",
      },
      {
        title: "Шаг 3",
        summary: "Заполните заявление",
        text: "Заполните заявление в соответствии с требованиями деканата. Укажите цель заявления и другую необходимую информацию.",
      },
      {
        title: "Шаг 4",
        summary: "Предоставьте заявление и документы",
        text: "Предоставьте заполненное заявление и необходимые документы в деканат. Убедитесь, что все данные в заявлении верны.",
      }
    ]
  },
  {
    id: 9,
    title: "Как оформить академическую справку",
    description: "На этом гайде ты узнаешь как оформить академическую справку в университете + получишь информацию о процедуре и необходимых документах",
    time_to_read: 3,
    date: "20.04.2024",
    views: 60,
    content: [
      {
        title: "Шаг 1",
        summary: "Определите цель справки",
        text: "Определите, для чего вам нужна академическая справка. Уточните требования и формат справки.",
      },
      {
        title: "Шаг 2",
        summary: "Соберите необходимые документы",
        text: "Соберите все необходимые документы, которые могут потребоваться для получения академической справки. Это могут быть студенческий билет, паспорт и другие идентификационные документы.",
      },
      {
        title: "Шаг 3",
        summary: "Запишитесь на получение справки",
        text: "Свяжитесь с деканатом и запишитесь на получение академической справки. Уточните время и место получения.",
      },
      {
        title: "Шаг 4",
        summary: "Получите справку",
        text: "Приходите в деканат в назначенное время и получите академическую справку. Убедитесь, что все данные в справке верны.",
      }
    ]
  },
  {
    id: 10,
    title: "Как оформить академическую сессию",
    description: "На этом гайде ты узнаешь как оформить академическую сессию в университете + получишь информацию о процедуре и необходимых документах",
    time_to_read: 4,
    date: "25.04.2024",
    views: 55,
    content: [
      {
        title: "Шаг 1",
        summary: "Ознакомьтесь с правилами академической сессии",
        text: "Ознакомьтесь с правилами проведения академической сессии в вашем университете. Узнайте о требованиях к количеству предметов, оценкам и другим важным аспектам.",
      },
      {
        title: "Шаг 2",
        summary: "Подготовьте необходимые документы",
        text: "Подготовьте все необходимые документы, которые могут потребоваться для оформления академической сессии. Это могут быть студенческий билет, расписание экзаменов и другие идентификационные документы.",
      },
      {
        title: "Шаг 3",
        summary: "Зарегистрируйтесь на экзамены",
        text: "Зарегистрируйтесь на экзамены, указав предметы, которые вы планируете сдавать в рамках академической сессии.",
      },
      {
        title: "Шаг 4",
        summary: "Пройдите экзамены",
        text: "Пройдите экзамены в соответствии с расписанием. Подготовьтесь к каждому экзамену, изучив материалы и повторив необходимые темы.",
      }
    ]
  },
  {
    id: 11,
    title: "Как получить академическую стипендию",
    description: "На этом гайде ты узнаешь как получить академическую стипендию в университете + получишь информацию о требованиях и процедуре",
    time_to_read: 5,
    date: "30.04.2024",
    views: 50,
    content: [
      {
        title: "Шаг 1",
        summary: "Ознакомьтесь с требованиями стипендии",
        text: "Ознакомьтесь с требованиями для получения академической стипендии в вашем университете. Узнайте о необходимых оценках, активности в учебной жизни и других критериях.",
      },
      {
        title: "Шаг 2",
        summary: "Подготовьте необходимые документы",
        text: "Подготовьте все необходимые документы, которые могут потребоваться для получения академической стипендии. Это могут быть академическая справка, рекомендательные письма и другие идентификационные документы.",
      },
      {
        title: "Шаг 3",
        summary: "Заполните заявление",
        text: "Заполните заявление на получение академической стипендии. Укажите свои достижения, активности и другую необходимую информацию.",
      },
      {
        title: "Шаг 4",
        summary: "Предоставьте заявление и документы",
        text: "Предоставьте заполненное заявление и необходимые документы в соответствующий отдел университета. Убедитесь, что все данные в заявлении верны.",
      }
    ]
  },
  {
    id: 12,
    title: "Как оформить перевод на другую специальность",
    description: "На этом гайде ты узнаешь как оформить перевод на другую специальность в университете + получишь информацию о процедуре и необходимых документах",
    time_to_read: 6,
    date: "05.05.2024",
    views: 45,
    content: [
      {
        title: "Шаг 1",
        summary: "Ознакомьтесь с правилами перевода",
        text: "Ознакомьтесь с правилами перевода на другую специальность в вашем университете. Узнайте о требованиях к оценкам, свободным местам и другим важным аспектам.",
      },
      {
        title: "Шаг 2",
        summary: "Подготовьте необходимые документы",
        text: "Подготовьте все необходимые документы, которые могут потребоваться для оформления перевода. Это могут быть академическая справка, рекомендательные письма и другие идентификационные документы.",
      },
      {
        title: "Шаг 3",
        summary: "Заполните заявление",
        text: "Заполните заявление на перевод на другую специальность. Укажите причины перевода, желаемую специальность и другую необходимую информацию.",
      },
      {
        title: "Шаг 4",
        summary: "Предоставьте заявление и документы",
        text: "Предоставьте заполненное заявление и необходимые документы в соответствующий отдел университета. Убедитесь, что все данные в заявлении верны.",
      }
    ]
  },
  {
    id: 13,
    title: "Как получить академическое отстранение",
    description: "На этом гайде ты узнаешь как получить академическое отстранение в университете + получишь информацию о процедуре и необходимых документах",
    time_to_read: 5,
    date: "10.05.2024",
    views: 40,
    content: [
      {
        title: "Шаг 1",
        summary: "Ознакомьтесь с правилами академического отстранения",
        text: "Ознакомьтесь с правилами академического отстранения в вашем университете. Узнайте о требованиях к оценкам, причинам отстранения и другим важным аспектам.",
      },
      {
        title: "Шаг 2",
        summary: "Подготовьте необходимые документы",
        text: "Подготовьте все необходимые документы, которые могут потребоваться для оформления академического отстранения. Это могут быть медицинская справка, заявление и другие идентификационные документы.",
      },
      {
        title: "Шаг 3",
        summary: "Заполните заявление",
        text: "Заполните заявление на академическое отстранение. Укажите причины отстранения, период отстранения и другую необходимую информацию.",
      },
      {
        title: "Шаг 4",
        summary: "Предоставьте заявление и документы",
        text: "Предоставьте заполненное заявление и необходимые документы в соответствующий отдел университета. Убедитесь, что все данные в заявлении верны.",
      }
    ]
  }
]