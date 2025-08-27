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
  {
    frage: "Welches ist die giftigste Schlange der Welt?",
    answer: ["Python", "Inland Taipan", "schwarze Mamba", "Natter"],
    correct: 1, // Index im Array -> Inland Taipan
  },
  {
    frage: "Welches ist das größte Tier der Welt?",
    answer: ["Hammerhai", "Delphin", "Blauwal", "Orca"],
    correct: 2, // Index im Array -> Blauwal
  },
];

// neue Frage holen und anzeigen
function displayQuestion() {
  // zufällige Frage wählen
  currentQuestionIndex = Math.floor(Math.random() * questions.length);
  currentQuestion = questions[currentQuestionIndex];

  // Frage ins HTML einsetzen
  document.querySelector(".question-title").textContent = currentQuestion.frage;

  // Antworten in Buttons schreiben und resetten
  const buttons = document.querySelectorAll(".answer");
  buttons.forEach((btn, i) => {
    btn.textContent = currentQuestion.answer[i];
    btn.classList.remove("correct", "incorrect");
    btn.disabled = false;
    btn.onclick = () => checkAnswer(i);
  });

  function checkAnswer(selectedIndex) {
    if (selectedIndex === currentQuestion.correct) {
      buttons[selectedIndex].classList.add("correct");
    } else {
      buttons[selectedIndex].classList.add("incorrect");
    }
  }
}

function solution() {
  alert(
    "Die richtige Antwort ist: " +
      currentQuestion.answer[currentQuestion.correct]
  );
}

function nextQuestion() {
  displayQuestion();
}
window.onload = displayQuestion();
