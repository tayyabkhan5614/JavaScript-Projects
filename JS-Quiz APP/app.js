const quizDB = [
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello To MY Land",
        b: "Hey Text Markup Language",
        c: "HyperText Markup Language",
        d: "Hypertext Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2: What is the full form of CSS?",
        a: "Cascading Style Sheets",
        b: "Cascading Style Sheep",
        c: "Cartoon Style Sheets",
        d: "Cascading Super Sheet",
        ans: "ans1"
    },
    {
        question: "Q3: What is the full form of HTTP?",
        a: "Hyper Text Transfer Protocol",
        b: "HyperText Protocol",
        c: "Hyper Test Protocol",
        d: "Hey Transfer Protocol",
        ans: "ans1"
    },
    {
        question: "Q4: What is the full form of JS?",
        a: "JavaScript",
        b: "Java Script",
        c: "James Script",
        d: "Java Scoure",
        ans: "ans1"
    }
]
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score=0;

const loadQuestion = () =>{
    const questionList = quizDB[questionCount]

    question.innerHTML = questionList.question;

    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;

}
loadQuestion();

const getCheckAnswer=() =>{
    let answer;

    answers.forEach((currentAnsElement) =>{
        if(currentAnsElement.checked){
            answer = currentAnsElement.id;
        }
    });
    return answer;
}

const deselectAll = () =>{
    answers.forEach((currentAnsElement) => currentAnsElement.checked = false );
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };
    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML = `
        <h3> You Scored ${score}/${quizDB.length}</h3>
        <button class="btn" onClick="location.reload()">Play Again</button>
        `;

        showScore.classList.remove('scoreArea');
    }
});