var startBtn = document.querySelector("#start-btn");
var nextBtn = document.querySelector("#next-btn");
var timer = document.querySelector("#timer");
var questionContainerElement = document.querySelector("#question-container");
var questionElement = document.querySelector("#question");
var answersButtonElement = document.querySelector("#answerbuttons");
var shuffledQuestions, currentQuestionIndex




startBtn.addEventListener("click", startGame);
nextBtn.addEventListener("click", () =>{
    currentQuestionIndex++
    nextQuestion ()
} )


function startGame () {
startBtn.classList.add("hide")
shuffledQuestions = questions.sort(()=> Math.random() - .5)
currentQuestionIndex = 0;
questionContainerElement.classList.remove("hide")
setTime()
nextQuestion()

}


function nextQuestion () {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

var secondsLeft = 60;

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
      timer.textContent = secondsLeft + " seconds left";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        nextBtn.classList.add('hide')
                startBtn.innerHTML ="Restart"
                startBtn.classList.remove('hide')
        
      }
  
    }, 900);
  }

function showQuestion (question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answersButtonElement.appendChild(button)
    });
}


function resetState () {
    nextBtn.classList.add('hide')
    while (answersButtonElement.firstChild) {
        answersButtonElement.removeChild
        (answersButtonElement.firstChild)
    }
}

function selectAnswer (event) {
    var selectedButton = event.target
    var correct = selectedButton.dataset.correct
    setStatusClass (document.body, correct)
    Array.from(answersButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextBtn.classList.remove('hide')

    } else {
        startBtn.innerHTML ="Restart"
        startBtn.classList.remove('hide')
    }
}

function setStatusClass (element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass (element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}





// Questions for the Quiz
var questions = [
    {
        question: 'What does HTML stand for?',
        answers: [
            {text: 'Header Text Main List', correct: false},
            {text: 'Header Type Markup Language', correct: false},
            {text: 'Hyper Text Markup Language', correct: true},
            {text: 'Hyper Text Main List', correct: false}, 
        ]

    },
    {
        question: 'What does CSS stand for?',
        answers: [
            {text: 'Cascading Style Sheets', correct: true},
            {text: 'Cute Styling Symbols', correct: false},
            {text: 'Change Sheet Selector', correct: false},
            {text: 'Cascading Style Selectors', correct: false}, 
        ]

    },
    {
        question: 'In JavaScript, How do you delcare a variable?',
        answers: [
            {text: 'prompt("variable");', correct: false},
            {text: 'alert("variable");', correct: false},
            {text: 'declare.variable', correct: false},
            {text: 'var = car;', correct: true}, 
        ]

    },
    {
        question: 'In HTML, what does the <a> tag stand for?',
        answers: [
            {text: 'attribute tag', correct: false},
            {text: 'article tag', correct: false},
            {text: 'anchor tag', correct: true},
            {text: 'ahoy tag', correct: false}, 
        ]

    },
    {
        question: 'What symbol is used to select a class in CSS?',
        answers: [
            {text: ' "" (Quotation Marks)', correct: false},
            {text: '. (Period)', correct: true},
            {text: '; (Semicolon)', correct: false},
            {text: '$ (Dollar Sign', correct: false}, 
        ]

    },
    {
        question: 'What is an img tag?',
        answers: [
            {text: 'An image tag', correct: true},
            {text: 'An imaginary placeholder for comments', correct: false},
            {text: 'A tag referring to video game code, "In My Game"', correct: false},
            {text: 'None of the above', correct: false}, 
        ]

    },

]