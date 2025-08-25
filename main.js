let questions = [
  {
    frage: "Wie lautet die Hauptstadt der Schweiz?",
    answer: ["Bern", "Zürich", "St.Gallen", "Locarno"],
    correct: 0, // Index im Array -> Bern

    frage: "Wie lang ist ein Koi?",
    answer: ["0.6m", "1.5m", "2m", "0.8m"],
    correct: 1, // Index im Array -> 1.5m

    frage: "Welches ist keine Programmiersprache?",
    answer: ["Python", "C++", "Java", "HTML"],
    correct: 3, // Index im Array -> HTML
  },
];

// Beispiel: aktuelle Frage holen
let currentQuestionIndex = 0;
let currentQuestion = questions[currentQuestionIndex];

console.log(currentQuestion.Frage);
// → "Was ist die Hauptstadt der Schweiz?"

console.log(currentQuestion.answer[currentQuestion.correct]);
// → "Bern"

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    let currentQuestion = questions[currentQuestionIndex];
    console.log(currentQuestion.question);
  } else {
    console.log("Quiz vorbei!");
  }
}
