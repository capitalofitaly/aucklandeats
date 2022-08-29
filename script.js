const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const answer = document.getElementById("answer");

let question = [
    {
        question: "What price range are you looking for?",
        choiceA: "$",
        choiceB: "$$",
        choiceC: "$$$",
    }
    {
        question: "Sweet or Savoury?",
        choiceA: "Sweet",
        choiceB: "Savoury",
        choiceC: "Not too sure",  
    }
    {
        question: "Would you like something filling? Or something small?",
        choiceA: "I just want a snack",
        choiceB: "I'm quite hungry",
        choiceC: "I'm very hungry",
    }
    {
        question: "What kind of cuisine are you looking for?",
        choiceA: "Asian",
        choiceB: "Western",
        choiceC: "Fusion",
    }
];

const lastQuestion = questions.length - 1;
let runningQuestion = 0;

function renderQuestion(){
    let q = questions[runningQuestion];

    question.innerHTML = "<p>+ q.question +</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}
