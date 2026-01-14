document.addEventListener("DOMContentLoaded", () => {

  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const nextButton = document.getElementById("next-btn");
  const resultContainer = document.getElementById("result-container");
  const scoreDisplay = document.getElementById("score");
  const restartButton = document.getElementById("restart-btn");
  const startButton = document.getElementById("start-btn");

const questions = [
  {
    question: "Which planet is known as Evening Star as well as Morning Star?",
    choices: ["Mars", "Venus", "Sun","Earth"],
    answer: "Venus"
  },

  {
    question: "Capital of France?",
    choices: ["Berlin", "Paris", "London","Madrid"],
    answer: "Paris"
  },

  {
    question: "Who was the head of Drafting Commitee of Indian Constitution?",
    choices: ["Rajendra Prasad", "Jawahar lal Nehru", "BR Ambedkar","MK Gandhi"],
    answer: "BR Ambedkar"
  },

  {
    question: "When was Suez Canal established?",
    choices: ["1979", "1782", "1729","1869"],
    answer: "1869"
  },

  {
    question: "Border Roads Organisation established?",
    choices: ["1960", "1947", "1890","1929"],
    answer: "1960"
  },
]

let currentQuestionIndex = 0;
let score = 0;

startButton.addEventListener('click', startQuiz);

nextButton.addEventListener('click', () =>{
  currentQuestionIndex++
  if(currentQuestionIndex < questions.length){

    showQuestion()
  }else{
    showResult();
  }
})

restartButton.addEventListener('click', ()=> {
  currentQuestionIndex = 0;
  score = 0;
  resultContainer.classList.add('hidden')
  startQuiz();
})

function startQuiz(){
  startButton.classList.add('hidden');
  resultContainer.classList.add('hidden');
  questionContainer.classList.remove('hidden');
  showQuestion();
}

function showQuestion(){
  nextButton.classList.add('hidden');
  questionText.textContent = questions[currentQuestionIndex].question;
  choicesList.innerHTML ="" // clear prev choices
  questions[currentQuestionIndex].choices.forEach(choice =>{
    const li = document.createElement('li')
    li.textContent = choice;
    li.addEventListener('click', () => {
      selectAnswer(choice);
    })
    choicesList.appendChild(li)
  })
}

function selectAnswer(choice){
  const correctAnswer = questions[currentQuestionIndex].answer
  if(choice === correctAnswer){
    score++
  }
  nextButton.classList.remove('hidden')

}

function showResult(){
  questionContainer.classList.add('hidden')
  resultContainer.classList.remove('hidden')
  scoreDisplay.textContent = `${score} out of ${questions.length}`
}




























})