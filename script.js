// Questions and answers
const questions = [
    {
      question: "Do you want me to be your boyfriend?",
      answers: ["Yes", "No"],
    },
    {
      question: "Do you like spending time with me?",
      answers: ["Yes", "No"],
    },
    {
      question: "Would you go on a date with me?",
      answers: ["Yes", "No"],
    },
    {
      question: "Do you think about me often?",
      answers: ["Yes", "No"],
    },
    {
      question: "Do you want to be with me forever?",
      answers: ["Yes", "No"],
    }
  ];
  
  let currentQuestionIndex = 0;
  
  // Elements
  const deviceQuestion = document.getElementById("device-question");
  const mobileBtn = document.getElementById("mobile-btn");
  const desktopBtn = document.getElementById("desktop-btn");
  const startScreen = document.getElementById("start-screen");
  const startBtn = document.getElementById("start-btn");
  const questionScreen = document.getElementById("question-screen");
  const questionText = document.getElementById("question-text");
  const answersDiv = document.getElementById("answers");
  const submitBtn = document.getElementById("submit-btn");
  const continueQuestion = document.getElementById("continue-question");
  const continueYes = document.getElementById("continue-yes");
  const continueNo = document.getElementById("continue-no");
  const finalScreen = document.getElementById("final-screen");
  const feedbackText = document.getElementById("feedback-text");
  const submitFeedbackBtn = document.getElementById("submit-feedback");
  
  // Show or hide the screens based on the user's selection
  mobileBtn.addEventListener("click", () => {
    document.body.style.transform = "scale(0.8)";
    startScreen.classList.remove("hidden");
    deviceQuestion.classList.add("hidden");
  });
  
  desktopBtn.addEventListener("click", () => {
    document.body.style.transform = "scale(1)";
    startScreen.classList.remove("hidden");
    deviceQuestion.classList.add("hidden");
  });
  
  // Start button event
  startBtn.addEventListener("click", () => {
    startScreen.classList.add("hidden");
    questionScreen.classList.remove("hidden");
    loadQuestion();
  });
  
  // Load next question
  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    answersDiv.innerHTML = "";
    currentQuestion.answers.forEach((answer, index) => {
      const button = document.createElement("button");
      button.textContent = answer;
      button.addEventListener("click", () => handleAnswer(answer));
      answersDiv.appendChild(button);
    });
    submitBtn.classList.add("hidden");
  }
  
  // Handle answer selection
  function handleAnswer(answer) {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      showContinueQuestion();
    }
  }
  
  // Show continue question
  function showContinueQuestion() {
    questionScreen.classList.add("hidden");
    continueQuestion.classList.remove("hidden");
  }
  
  // Handle continue selection
  continueYes.addEventListener("click", () => {
    continueQuestion.classList.add("hidden");
    finalScreen.classList.remove("hidden");
  });
  
  continueNo.addEventListener("click", () => {
    continueQuestion.classList.add("hidden");
    alert("Oh, you gave up already :(");
  });
  
  // Submit feedback
  submitFeedbackBtn.addEventListener("click", () => {
    if (feedbackText.value) {
      alert("Thank you for your message!");
      feedbackText.value = "";
    }
  });
  