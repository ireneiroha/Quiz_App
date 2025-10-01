const questions = [
  {
    topic: "science",
    question: "What color is the sky?",
    possibleAnswers: ["blue", "green", "yellow"],
    correctAnswer: "blue",
  },
  {
    topic: "Random",
    question: "What is the duration of WTF?",
    possibleAnswers: ["6 Months", "1 year", "4 months"],
    correctAnswer: "1 year",
  },
  {
    topic: "tech",
    question: "What is the best language to learn?",
    possibleAnswers: ["javascript", "python", "ruby"],
    correctAnswer: "javascript",
  },
  {
    topic: "math",
    question: "What is 4 + 4?",
    possibleAnswers: ["7", "8", "9", "10"],
    correctAnswer: "8",
  },
  {
    topic: "random",
    question: "What is your favorite energy drink?",
    possibleAnswers: ["ghost", "monster", "redbull"],
    correctAnswer: "ghost",
  },
];

const quizProgress = document.getElementById("quizProgress");
const questionContainer = document.getElementById("questionContainer");
const answerContainer = document.getElementById("answerContainer");

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

function renderProgress(index) {
  quizProgress.innerHTML = "";
  questions.forEach((_, i) => {
    const span = document.createElement("span");
    if (i <= index) span.classList.add("seen");
    quizProgress.appendChild(span);
  });
}

function loadQuestion(index) {
  renderProgress(index);
  selectedAnswer = null;

  const q = questions[index];
  questionContainer.innerHTML = `
    <p class="topic">${q.topic}</p>
    <h2>${q.question}</h2>
  `;

  answerContainer.innerHTML = "";
  q.possibleAnswers.forEach((answer) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.onclick = () => {
      selectedAnswer = answer;
      nextBtn.style.display = "inline-block";
    };
    answerContainer.appendChild(btn);
  });
}

function checkAnswer() {
  if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
    score++;
  }

  currentQuestionIndex++;
  nextBtn.style.display = "none";

  if (currentQuestionIndex < questions.length) {
    loadQuestion(currentQuestionIndex);
  } else {
    showScore();
  }
}

function showScore() {
  questionContainer.innerHTML = `<h2>You scored ${score} out of ${questions.length}</h2>`;
  answerContainer.innerHTML = "";

  const restartBtn = document.createElement("button");
  restartBtn.textContent = "Restart Quiz";
  restartBtn.onclick = restartQuiz;
  answerContainer.appendChild(restartBtn);
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  loadQuestion(currentQuestionIndex);
}

// Create Next button dynamically
const nextBtn = document.createElement("button");
nextBtn.textContent = "Next";
nextBtn.style.display = "none";
nextBtn.onclick = checkAnswer;
answerContainer.after(nextBtn);

// Start
loadQuestion(currentQuestionIndex);
