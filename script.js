const quizData = [
  {
    question: "What does “www” stand for in a website browser?",
    a: "world wide worry",
    b: "woes world wide",
    c: "world wide web",
    d: "web world wide",
    correct: "c",
  },
  {
    question: "What is the most used programming language in 2021?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "How many languages are written from right to left?",
    a: "10",
    b: "12",
    c: "14",
    d: "6",
    correct: "b",
  },
  {
    question: "Which country consumes the most chocolate per capita?",
    a: "Switzerland",
    b: "Austria",
    c: "Belgium",
    d: "France",
    correct: "a",
  },
  {
    question: "What country is responsible for creating the Olympic Games?",
    a: "Italy",
    b: "Japan",
    c: "England",
    d: "Greece",
    correct: "d",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerHTML = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  // check to see the answer
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
      <h2>You answered ${score}/${quizData.length} correctly.</h2> 
      
      <button onClick="location.reload()">Reload</button>`;
    }
  }
});
