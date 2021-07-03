var attemptQuestion = 0;
var marks = 0;
var totalQuestion = quizQuestion.length;

var container = document.getElementById("container");
var question = document.getElementById("question");
var option1 = document.getElementById("opt1");
var option2 = document.getElementById("opt2");
var option3 = document.getElementById("opt3");
var option4 = document.getElementById("opt4");
var btn = document.getElementById("btn-n");
var res = document.getElementById("quiz-result");

function showCurrentQuestion(qIndex){
    var questions = quizQuestion[qIndex];
    question.textContent = qIndex + 1 + '. ' + questions.question;
    opt1.textContent = questions.option1;
    opt2.textContent = questions.option2;
    opt3.textContent = questions.option3;
    opt14.textContent = questions.option4;
}

function nextQuestion(){
    var selected = document.querySelector('input[type=radio]:checked');
    if(!selected){
        alert("Please Attempt This Question");
    }

    var answer = selected.value;
    if(quizQuestion[attemptQuestion].answer == answer){
        marks = marks + 10;
    }
    selected.checked = false;
    attemptQuestion++;

    if(attemptQuestion == totalQuestion - 1){
        btn.textContent = "Finish";
    }

    if(attemptQuestion == totalQuestion){
        container.style.display = "none";
        res.style.display = '';
        res.textContent = "Your Score: " + marks;
        return;
    }

    if(marks < 20){
        res.style.color = "red";
    }
    else{
        res.style.color = "green";
    }

    showCurrentQuestion(attemptQuestion);
}
showCurrentQuestion(attemptQuestion);