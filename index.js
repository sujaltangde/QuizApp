const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('ques-cont')
const questionElement = document.getElementById('ques') ;
const answerButtonsElement = document.getElementById('ans-btn')

let shuffledQuestions ,currentQuestionIndex ; 

startButton.addEventListener('click',startGame)
nextButton.addEventListener('click',()=>{
    currentQuestionIndex++ ;
    setNextQuestion()
})

function startGame(){
    console.log('started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(()=> Math.random() - .5 )
    currentQuestionIndex = 0 ;
    questionContainerElement.classList.remove('hide')
    setNextQuestion() ;
}

function setNextQuestion(){
    resetState() ;
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question

        question.answers.forEach(ans => {
            const button = document.createElement('button')
            button.innerText = ans.text ;
            button.classList.add('btn')
            if(ans.correct){
                button.dataset.correct = ans.correct
            }
            button.addEventListener('click',selectAnswer) ;
            answerButtonsElement.appendChild(button)
        });

    
}


function resetState(){
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide')
    } else {
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
    }
  }

function setStatusClass(element,correct){
    clearStatusClass(element) ;
    if(correct){
        element.classList.add('correct')
    }
    else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct') ;
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'What is the most widely used programming language?',
        answers: [
            {text: 'Python', correct: false},
            {text: 'JavaScript', correct: true},
            {text: 'Java', correct: false},
            {text: 'C++', correct: false}
        ]
    },
    {
        question: 'What is the file extension for JavaScript files?',
        answers: [
            {text: '.html', correct: false},
            {text: '.css', correct: false},
            {text: '.js', correct: true},
            {text: '.txt', correct: false}
        ]
    },
    {
        question: 'What is the process of finding and fixing errors in a program called?',
        answers: [
            {text: 'Compiling', correct: false},
            {text: 'Testing', correct: false},
            {text: 'Optimizing', correct: false},
            {text: 'Debugging', correct: true},
        ]
    },
    {
        question: 'Which keyword is used to declare a global variable in JavaScript?',
        answers: [
            {text: 'var', correct: true},
            {text: 'let', correct: false},
            {text: 'const', correct: false},
            {text: 'int', correct: false}
        ]
    },
    {
        question: 'What does HTML stand for?',
        answers: [
            {text: 'Hyperlink and Text Markup Language', correct: false},
            {text: 'Hypertext Markup Language', correct: true},
            {text: 'Home Tool Markup Language', correct: false},
            {text: 'Hypertext Modern Language', correct: false}
        ]
    },
    {
        question: 'Which operator is used to concatenate strings in JavaScript?',
        answers: [
            {text: '-', correct: false},
            {text: '*', correct: false},
            {text: '+', correct: true},
            {text: '/', correct: false}
        ]
    },
    {
        question: 'What is the result of 10 % 3?',
        answers: [
            {text: '3', correct: false},
            {text: '0', correct: false},
            {text: '10', correct: false},
            {text: '1', correct: true},
        ]
    },
    {
        question: 'What is the keyword used to define a function in Python?',
        answers: [
            {text: 'def', correct: true},
            {text: 'function', correct: false},
            {text: 'fun', correct: false},
            {text: 'define', correct: false}
        ]
    },
    {
        question: 'What is the result of 5 > 3?',
        answers: [
            {text: 'false', correct: false},
            {text: 'true', correct: true},
            {text: 'undefined', correct: false},
            {text: 'null', correct: false}
        ]
    },
    {
        question: 'Which data structure operates on a "last-in, first-out" basis?',
        answers: [
            {text: 'Queue', correct: false},
            {text: 'LinkedList', correct: false},
            {text: 'Stack', correct: true},
            {text: 'Array', correct: false}
        ]
    }
];