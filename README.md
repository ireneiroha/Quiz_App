🎯 Quiz App

A simple JavaScript-based Quiz Application where users can answer multiple-choice questions across different topics. The app dynamically updates questions, tracks progress, and provides instant feedback.

🚀 Features

✅ Multiple-choice questions across different topics (Science, Tech, Math, Random).

✅ Dynamic rendering of questions and answers.

✅ Progress tracker that highlights how far you’ve gone.

✅ Immediate feedback (correct or wrong) in the console.

✅ Automatically cycles back to the first question after the last one.

🛠️ Technologies Used

HTML – structure of the quiz.

CSS – for styling quiz progress and buttons.

JavaScript (Vanilla JS) – handles quiz logic, events, and DOM updates.

📂 Project Structure
quiz-app/
│── index.html        # Main HTML file
│── style.css         # Styles for layout and progress
│── app.js            # Quiz logic (questions, answers, event handling)
│── README.md         # Project documentation

📜 Code Overview
Questions Array

Questions are stored in an array of objects, each with:

topic – category of the question.

question – the actual question text.

possibleAnswers – multiple choice options.

correctAnswer – the right answer for validation.

const questions = [
  {
    topic: "science",
    question: "What color is the sky?",
    possibleAnswers: ["blue", "green", "yellow"],
    correctAnswer: "blue",
  },
  ...
];

Core Functions

handleQuestion(index)

Updates quiz progress (<span> markers).

Displays the current question and answer buttons.

Attaches click events to answers, checking correctness.

Moves to the next question (or loops back to the start).

function handleQuestion(index) {
  // Updates progress
  // Renders question + answers
  // Validates responses
  // Loads next question
}

▶️ How to Run

Clone this repository:

git clone https://github.com/ireneiroha/Quiz_App.git


Open the project folder.

Run index.html


🧑‍💻 Author
Irene Ezinne Iroha
Built with ❤️ using JavaScript.
