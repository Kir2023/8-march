document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const quizContainer = document.getElementById("quiz-container");

  const questions = [
    {
      text: "Где мы познакомились?",
      answers: ["дискорд", "в дискорде"],
      hint: "где мы сидим каждый вечер",
    },
    {
      text: "За какую руну я купил у тебя камни?",
      answers: ["ом", "охм"],
      hint: "между векс и ло",
    },
    {
      text: "Как я называю нашу годовщину?",
      answers: ["день первого нюдса"],
      hint: "в честь присланного тобой фото 📸",
    },
    {
      text: "Как я ласково называю тебя?",
      answers: ["китя"],
      hint: "это относится к семейству кошачьих 🐱",
    },
    {
      text: "В каком городе мы впервые созвонились с видео?",
      answers: ["астана"],
      hint: "он находится в Казахстане",
    },
    {
      text: "Как будет пироженка на украинском?",
      answers: ["тистечко", "тістечко"],
      hint: "я так тебя называл, когда играла SweetyPie",
    },
    {
      text: "Какими персонажами мы играли наш первый сезон в D2R?",
      answers: ["варвар и паладин", "паладин и варвар"],
      hint: "лысый качок и афрорыцарь",
    },
    {
      text: "Вашей маме зять не нужен?",
      answers: ["нужен", "да"],
      hint: "😉",
    },
  ];

  let currentQuestion = 0;

  startBtn.addEventListener("click", () => {
    startBtn.style.display = "none";
    showQuestion();
  });

  function showQuestion() {
    if (currentQuestion >= questions.length) {
      quizContainer.innerHTML = `
                <p id='final-message'>🎉 Поздравляю! Ты прошла квест! 🎶</p>
                <audio controls autoplay>
                    <source src="media/Avalon.mp3" type="audio/mp3">
                    Ваш браузер не поддерживает воспроизведение аудио.
                </audio>
                <div style="text-align: center; margin-top: 20px;">
                    <img src="images/8-marta.jpg" alt="8 марта" style="max-width: 100%; height: auto; border-radius: 10px;">
                </div>
            `;
      return;
    }

    const question = questions[currentQuestion];
    quizContainer.innerHTML = `
            <p>${question.text}</p>
            <input type="text" id="answer">
            <button id="submit-btn">Ответить</button>
            <div id="hint" class="hint"></div>
        `;

    const answerInput = document.getElementById("answer");
    const submitBtn = document.getElementById("submit-btn");

    submitBtn.addEventListener("click", checkAnswer);

    answerInput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        checkAnswer();
      }
    });
  }

  function checkAnswer() {
    const answer = document.getElementById("answer").value.trim().toLowerCase();
    const hint = document.getElementById("hint");

    if (questions[currentQuestion].answers.includes(answer)) {
      hint.innerHTML = "✅ Верно! Переходим к следующему вопросу...";
      setTimeout(() => {
        currentQuestion++;
        showQuestion();
      }, 1500);
    } else {
      hint.innerHTML = `❌ Неправильно! Подсказка: ${questions[currentQuestion].hint}`;
    }
  }
});
