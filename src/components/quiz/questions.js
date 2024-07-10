import translations from '../../locales/translations.json'

const questions = [
    {
        number: "1/8",
      question: "Какая из следующих привычек наиболее важна для предотвращения синдрома внезапной детской смерти (СВДС)?",
      answers: [
        { text: "A: Укладывать ребенка спать на спине", isCorrect: true },
        { text: "B: Укладывать ребенка спать на боку", isCorrect: false },
        { text: "C: Использовать одеяла и подушки для дополнительного комфорта", isCorrect: false },
        { text: "D: Укладывать ребенка спать вместе с родителями", isCorrect: false },
      ],
    },
    {
        number: "2/8",
      question: "Какое количество сна требуется детям в возрасте от 1 до 2 лет для нормального развития?",
      answers: [
        { text: "A: 8-10 часов в сутки", isCorrect: false },
        { text: "B: 10-12 часов в сутки", isCorrect: false },
        { text: "C: 12-14 часов в сутки", isCorrect: true },
        { text: "D: 14-16 часов в сутки", isCorrect: false },
      ],
    },
    {
        number: "3/8",
      question: "Какой из следующих продуктов следует избегать при введении прикорма детям до года?",
      answers: [
        { text: "A: Йогурт", isCorrect: false },
        { text: "B: Мед", isCorrect: true },
        { text: "C: Бананы", isCorrect: false },
        { text: "D: Овсяная каша", isCorrect: false },
      ],
    },
    {
        number: "4/8",
      question: "Какое из следующих утверждений о развитии речи у детей в возрасте до 4 лет является наиболее точным?",
      answers: [
        { text: "A: Дети должны начать говорить полными предложениями к 2 годам", isCorrect: false },
        { text: "B: Развитие речи может значительно варьироваться, но к 2 годам дети должны уметь произносить простые слова", isCorrect: true },
        { text: "C: Все дети начинают говорить в одинаковом возрасте", isCorrect: false },
        { text: "D: Если ребенок не говорит к 2 годам, это обязательно указывает на нарушение развития", isCorrect: false },
      ],
    },
    {
        number: "5/8",
      question: "Что из следующего наиболее способствует развитию моторных навыков у детей?",
      answers: [
        { text: "A: Просмотр образовательных видео", isCorrect: false },
        { text: "B: Игра с блоками и конструкторами", isCorrect: true },
        { text: "C: Слушание музыки", isCorrect: false },
        { text: "D: Сидение в стульчике для кормления", isCorrect: false },
      ],
    },
    {
        number: "6/8",
        question: "Какой из следующих симптомов может указывать на серьезную проблему со здоровьем у младенца?",
      answers: [
        { text: "A: Легкий насморк", isCorrect: false },
        { text: "B: Периодическое кашляние", isCorrect: false },
        { text: "C: Синюшный оттенок кожи или губ", isCorrect: true },
        { text: "D: Раздражительность после еды", isCorrect: false },
      ],
    },
    {
        number: "7/8",
      question: "Как часто следует чистить зубы ребенку, начиная с появления первого зуба?",
      answers: [
        { text: "A: Раз в день перед сном", isCorrect: false },
        { text: "B: Два раза в день с использованием детской зубной пасты с фтором", isCorrect: true },
        { text: "C: После каждого приема пищи", isCorrect: false },
        { text: "D: Только после вечернего кормления", isCorrect: false },
      ],
    },
    {
        number: "8/8",
      question: "Какие из следующих мероприятий наиболее эффективны для предотвращения пищевой аллергии у детей?",
      answers: [
        { text: "A: Избегание всех потенциально аллергенных продуктов до 3 лет", isCorrect: false },
        { text: "B: Введение потенциально аллергенных продуктов постепенно, начиная с 6 месяцев", isCorrect: true },
        { text: "C: Кормление исключительно грудным молоком до 1 года", isCorrect: false },
        { text: "D: Прекращение грудного вскармливания после 6 месяцев", isCorrect: false },
      ],
    },
  ];

  function translateText(text) {
    return translations[text] || text;
}

function translateData(questions) {
    return questions.map(question => ({
        number: translateText(question.number),
        question: translateText(question.question),
        answers: question.answers.map(answer => ({
            text: translateText(answer.text),
            isCorrect: answer.isCorrect
        }))
    }));
}

const translatedData = translateData(questions);

export default translatedData;