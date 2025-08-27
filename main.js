const questions = [
  {
    frage: "Wie lautet die Hauptstadt der Schweiz?",
    answer: ["Bern", "Zürich", "St.Gallen", "Locarno"],
    correct: 0, // Index im Array -> Bern
  },
  {
    frage: "Wie lang ist ein Koi?",
    answer: ["0.6m", "1.5m", "2m", "0.8m"],
    correct: 1, // Index im Array -> 1.5m
  },
  {
    frage: "Welches ist keine Programmiersprache?",
    answer: ["Python", "C++", "Java", "HTML"],
    correct: 3, // Index im Array -> HTML
  },
];

// neue Frage holen und anzeigen
function displayQuestion() {
  // zufällige Frage wählen
  currentQuestionIndex = Math.floor(Math.random() * questions.length);
  currentQuestion = questions[currentQuestionIndex];

  // Frage ins HTML einsetzen
  document.querySelector(".question-title").textContent = currentQuestion.frage;

  // Antworten in Buttons schreiben
  const buttons = document.querySelectorAll(".answer");
  buttons.forEach((btn, i) => {
    btn.textContent = currentQuestion.answer[i];
    btn.onclick = () => checkAnswer(i);
  });
}

function checkAnswer(selectedIndex) {
  if (selectedIndex === currentQuestion.correct) {
    alert("✅ Richtig!");
  } else {
    alert("❌ Falsch!");
  }
}

function solution() {
  alert(
    "Die richtige Antwort ist: " +
      currentQuestion.answer[currentQuestion.correct]
  );
}

// let currentQuestionIndex = 0;
// let currentQuestion = questions[currentQuestionIndex];

// console.log(currentQuestion.frage);
// console.log(currentQuestion.answer[currentQuestion.correct]);

function nextQuestion() {
  displayQuestion();

  window.onload = displayQuestion();
}
