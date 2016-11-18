
const test = [
    {
        question: "1. В каком месте HTML документа может располагаться JavaScript код?",
        answers: {
            answer_1: "a. В секции head",
            answer_2: "b. В секции body",
            answer_3: "c. В секции head и в секции body"
        },
        rightAnswer: "c. В секции head и в секции body"
    },
    {
        question: "2. Выберите синтаксически корректную JavaScript команду для вызова функции callFunction()",
        answers: {
            answer_1: "a. function callFunction()",
            answer_2: "b. callFunction()",
            answer_3: "c. new callFunction()"
        },
        rightAnswer: "b. callFunction()"
    },
    {
        question: "3. Какое событие позволяет выполнять код после щелчка мыши",
        answers: {
            answer_1: "a. mouseclick",
            answer_2: "b. onmouseclick",
            answer_3: "c. onclick"
        },
        rightAnswer: "c. onclick"
    },
    {
        question: "4. Выберите перечень содержащий только действительно существующие в JavaScript циклы.",
        answers: {
            answer_1: "a. for, while, do..while ",
            answer_2: "b. while, for..in, cycle",
            answer_3: "c. loop, for, while "
        },
        rightAnswer: "a. for, while, do..while "
    },
    {
        question: "5. Выберите метод JavaScript позволяющий выполнять произвольный код через заданные промежутки времени.",
        answers: {
            answer_1: "a. callCode()",
            answer_2: "b. setInterval()",
            answer_3: "c. setTimeOut()"
        },
        rightAnswer: "b. setInterval()"
    }
];

const rightAnswers = ["answer_3", "answer_2", "answer_3", "answer_1", "answer_2"];

localStorage.setItem('test', JSON.stringify(test));
localStorage.setItem('rightAnswers', JSON.stringify(rightAnswers));

