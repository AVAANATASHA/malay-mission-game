const screens = document.querySelectorAll(".screen");
const sceneGrid = document.getElementById("scene-grid");
const hudScene = document.getElementById("hud-scene");
const hudProgress = document.getElementById("hud-progress");
const hudScore = document.getElementById("hud-score");
const hudHearts = document.getElementById("hud-hearts");
const promptText = document.getElementById("prompt-text");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const quitBtn = document.getElementById("quit-btn");
const listenBtn = document.getElementById("listen-btn");
const retryBtn = document.getElementById("retry-btn");
const resultScore = document.getElementById("result-score");
const resultMessage = document.getElementById("result-message");
const resultTitle = document.getElementById("result-title");
const resultIcon = document.getElementById("result-icon");
const avatarEl = document.getElementById("avatar");
const speakerNameEl = document.getElementById("speaker-name");

const sceneData = {
  scene1: {
    title: "Babak 1",
    questions: [
      {
        speaker: "Cikgu",
        avatar: "👩‍🏫",
        text: "Ali, tolong tutup pintu.",
        choices: [
          "Baik, cikgu. Saya akan tutup pintu.",
          "Saya tidak mahu.",
          "Tutup pintu sendiri.",
          "Pintu itu sudah tertutup."
        ],
        correct: 0,
        explanation: "Ini adalah respons yang sopan dan bersedia membantu."
      },
      {
        speaker: "Ibu",
        avatar: "👩",
        text: "Sila ambilkan buku itu untuk saya.",
        choices: [
          "Baik, ibu. Saya ambilkan buku itu.",
          "Buku itu berat.",
          "Saya sedang tidur.",
          "Tak mahu."
        ],
        correct: 0,
        explanation: "Respons yang sesuai menunjukkan kerelaan membantu."
      },
      {
        speaker: "Cikgu",
        avatar: "👩‍🏫",
        text: "Boleh kamu tolong angkat beg ini?",
        choices: [
          "Baik, cikgu. Saya akan angkat beg itu.",
          "Saya tidak ada masa.",
          "Beg itu tidak cantik.",
          "Saya akan tinggal di sini."
        ],
        correct: 0,
        explanation: "Ayat ini menunjukkan kesediaan membantu dengan lembut."
      },
      {
        speaker: "Abang",
        avatar: "🧑",
        text: "Tolong bawakan air ini ke dapur.",
        choices: [
          "Baik, abang. Saya bawakan air itu ke dapur.",
          "Air itu bukan milik saya.",
          "Saya tidak suka air.",
          "Dapur jauh."
        ],
        correct: 0,
        explanation: "Respons yang baik ialah menerima permintaan dengan sopan."
      },
      {
        speaker: "Cikgu",
        avatar: "👩‍🏫",
        text: "Harap kamu dapat menolong kawanmu.",
        choices: [
          "Baik, cikgu. Saya akan menolong kawan saya.",
          "Saya tidak mahu kawan saya.",
          "Kawan saya sudah pandai.",
          "Saya tidak peduli."
        ],
        correct: 0,
        explanation: "Respons ini menunjukkan sikap membantu dan baik hati."
      }
    ]
  },
  scene2: {
    title: "Babak 2",
    questions: [
      {
        speaker: "Nenek",
        avatar: "👵",
        text: "Minta tolong, tolong letakkan baju ini di dalam bakul.",
        choices: [
          "Baik, nenek. Saya akan letakkan baju itu di dalam bakul.",
          "Saya malas.",
          "Saya tidak tahu.",
          "Baju itu kotor."
        ],
        correct: 0,
        explanation: "Ini jawapan yang sesuai dan berbudi bahasa."
      },
      {
        speaker: "Cikgu",
        avatar: "👩‍🏫",
        text: "Sila duduk dengan tertib.",
        choices: [
          "Baik, cikgu. Saya akan duduk dengan tertib.",
          "Saya mahu pergi.",
          "Saya tidak suka duduk.",
          "Duduklah sendiri."
        ],
        correct: 0,
        explanation: "Jawapan yang baik menunjukkan kita faham arahan."
      },
      {
        speaker: "Ayah",
        avatar: "🧔",
        text: "Bolehkah kamu tolong ambilkan telefon saya?",
        choices: [
          "Baik, ayah. Saya akan ambilkan telefon itu.",
          "Telefon itu tidak berguna.",
          "Saya tidak ada telefon.",
          "Saya tak mahu."
        ],
        correct: 0,
        explanation: "Respons yang bijak ialah menerima permintaan dengan sopan."
      },
      {
        speaker: "Guru",
        avatar: "👨‍🏫",
        text: "Tolong bantu kawanmu membawa buku ini.",
        choices: [
          "Baik, guru. Saya akan membantu kawan saya.",
          "Kawan saya boleh buat sendiri.",
          "Saya tidak mahu.",
          "Buku itu berat."
        ],
        correct: 0,
        explanation: "Ayat ini menunjukkan semangat membantu dan kerjasama."
      },
      {
        speaker: "Kakak",
        avatar: "👧",
        text: "Boleh tak kamu ambilkan pensel ini untuk saya?",
        choices: [
          "Boleh, kakak. Saya ambilkan pensel itu untuk kamu.",
          "Saya tak mahu ambil.",
          "Pensel itu milik saya.",
          "Saya suka pensel itu."
        ],
        correct: 0,
        explanation: "Jawapan yang sesuai bersifat sopan dan aktif membantu."
      }
    ]
  },
  scene3: {
    title: "Babak 3",
    questions: [
      {
        speaker: "Cikgu",
        avatar: "👩‍🏫",
        text: "Tolong hantar surat ini ke pejabat.",
        choices: [
          "Baik, cikgu. Saya akan hantar surat itu ke pejabat.",
          "Saya tidak boleh ke pejabat.",
          "Surat itu tidak penting.",
          "Pejabat itu jauh."
        ],
        correct: 0,
        explanation: "Penyelesaian yang baik menunjukkan kesediaan membantu."
      },
      {
        speaker: "Ibu",
        avatar: "👩",
        text: "Sila tolong susunkan buku di rak.",
        choices: [
          "Baik, ibu. Saya akan susunkan buku di rak.",
          "Buku itu terlalu banyak.",
          "Saya mahu makan.",
          "Rak itu tidak cantik."
        ],
        correct: 0,
        explanation: "Jawapan ini jelas, sopan, dan menunjukkan persetujuan."
      },
      {
        speaker: "Abang",
        avatar: "🧑",
        text: "Tolong kutip sampah ini di taman.",
        choices: [
          "Baik, abang. Saya akan kutip sampah itu di taman.",
          "Saya tidak peduli sampah.",
          "Taman itu kotor.",
          "Saya tidak mahu keluar."
        ],
        correct: 0,
        explanation: "Jawapan yang patut memberi perhatian dan membantu."
      },
      {
        speaker: "Guru",
        avatar: "👨‍🏫",
        text: "Bolehkah awak ambilkan air untuk saya?",
        choices: [
          "Baik, guru. Saya ambilkan air untuk awak.",
          "Saya tak suka air.",
          "Saya sedang marah.",
          "Air itu tak sedap."
        ],
        correct: 0,
        explanation: "Jawapan yang sopan dan siap membantu adalah betul."
      },
      {
        speaker: "Nenek",
        avatar: "👵",
        text: "Harap kamu dapat menolong saya membawa barang ini.",
        choices: [
          "Baik, nenek. Saya akan membantu membawa barang itu.",
          "Barang itu bukan milik saya.",
          "Saya tidak mahu membantu.",
          "Saya ambil barang ini saja."
        ],
        correct: 0,
        explanation: "Ini adalah respons yang lembut dan penuh kerjasama."
      }
    ]
  }
};

const gameState = {
  sceneKey: null,
  questions: [],
  currentIndex: 0,
  score: 0,
  hearts: 3,
  answered: false
};

function showScreen(id) {
  screens.forEach((screen) => {
    screen.classList.toggle("active", screen.id === id);
  });
}

function buildSceneButtons() {
  sceneGrid.innerHTML = "";

  Object.entries(sceneData).forEach(([key, scene]) => {
    const btn = document.createElement("button");
    btn.className = "scene-card";
    btn.type = "button";
    btn.textContent = scene.title;
    btn.addEventListener("click", () => startScene(key));
    sceneGrid.appendChild(btn);
  });
}

function startScene(sceneKey) {
  const scene = sceneData[sceneKey];
  gameState.sceneKey = sceneKey;
  gameState.questions = scene.questions;
  gameState.currentIndex = 0;
  gameState.score = 0;
  gameState.hearts = 3;
  gameState.answered = false;

  hudScene.textContent = scene.title;
  updateHUD();
  renderQuestion();
  showScreen("screen-game");
}

function updateHUD() {
  const current = gameState.currentIndex + 1;
  const total = gameState.questions.length || 1;

  hudProgress.textContent = `${current}/${total}`;
  hudScore.textContent = gameState.score;
  hudHearts.textContent = "❤️".repeat(Math.max(0, gameState.hearts)) + "🩶".repeat(Math.max(0, 3 - gameState.hearts));
}

function renderQuestion() {
  const q = gameState.questions[gameState.currentIndex];
  if (!q) return;

  gameState.answered = false;
  feedbackEl.textContent = "";
  feedbackEl.className = "feedback";
  nextBtn.disabled = true;

  promptText.textContent = q.text;
  avatarEl.textContent = q.avatar;
  speakerNameEl.textContent = q.speaker;

  answersEl.innerHTML = "";
  q.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-option";
    button.textContent = choice;
    button.addEventListener("click", () => handleAnswer(index, button));
    answersEl.appendChild(button);
  });

  updateHUD();
}

function handleAnswer(index, chosenButton) {
  if (gameState.answered) return;

  gameState.answered = true;
  const q = gameState.questions[gameState.currentIndex];
  const buttons = [...answersEl.querySelectorAll(".answer-option")];

  buttons.forEach((button, i) => {
    const isCorrect = i === q.correct;
    button.disabled = true;
    if (isCorrect) {
      button.classList.add("correct");
    }
    if (i === index && !isCorrect) {
      button.classList.add("wrong");
    }
  });

  if (index === q.correct) {
    gameState.score += 10;
    feedbackEl.textContent = `Betul! ${q.explanation}`;
    feedbackEl.classList.add("correct");
  } else {
    gameState.hearts -= 1;
    feedbackEl.textContent = `Salah! Jawapan yang betul ialah: "${q.choices[q.correct]}". ${q.explanation}`;
    feedbackEl.classList.add("wrong");
  }

  updateHUD();
  nextBtn.disabled = false;
}

function nextQuestion() {
  if (!gameState.questions.length) return;

  const isLastQuestion = gameState.currentIndex >= gameState.questions.length - 1;
  if (isLastQuestion || gameState.hearts <= 0) {
    showResult();
    return;
  }

  gameState.currentIndex += 1;
  renderQuestion();
}

function showResult() {
  const totalPossible = gameState.questions.length * 10;
  const finalScore = gameState.score;

  resultScore.textContent = finalScore;
  resultTitle.textContent = finalScore >= 40 ? "Tahniah!" : "Cuba Lagi!";
  resultIcon.textContent = finalScore >= 40 ? "🎉" : "🌟";

  if (finalScore >= 40) {
    resultMessage.textContent = `Hebat! Anda telah menamatkan misi dengan markah ${finalScore} dari ${totalPossible}.`;
  } else if (finalScore >= 20) {
    resultMessage.textContent = `Bagus! Anda hampir berjaya. Teruskan latihan untuk lebih yakin.`;
  } else {
    resultMessage.textContent = `Jangan putus asa. Semak nota dan cuba lagi untuk meningkatkan markah anda.`;
  }

  showScreen("screen-result");
}

function retryGame() {
  startScene(gameState.sceneKey || "scene1");
}

document.querySelectorAll("[data-go]").forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.go;
    showScreen(target);
  });
});

nextBtn.addEventListener("click", nextQuestion);
quitBtn.addEventListener("click", () => showScreen("screen-scenes"));
retryBtn.addEventListener("click", retryGame);

listenBtn.addEventListener("click", () => {
  const q = gameState.questions[gameState.currentIndex];
  if (!q) return;

  const utterance = new SpeechSynthesisUtterance(q.text);
  utterance.lang = "ms-MY";
  utterance.rate = 0.9;
  utterance.pitch = 1;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
});

buildSceneButtons();
showScreen("screen-home");
