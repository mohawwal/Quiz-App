const Questions = [
    {
        q: "What is my idea of a perfect date?",
        a: [
            { text: "A candlelit dinner by the beach", isCorrect: false },
            { text: "A cozy movie night at home", isCorrect: false },
            { text: "An adventurous hiking trip", isCorrect: false },
            { text: "Flying out and doing things on my bucket-list", isCorrect: true }
        ]
    },

    {
        q: "What is the perfect way of spending a rainy day with me?",
        a: [
            { text: "Dancing in the rain", isCorrect: false },
            { text: "Playing games", isCorrect: true },
            { text: "Watching horror movies", isCorrect: false },
            { text: "Doing Nothing", isCorrect: false }
        ]
    },

    {
        q: "Which is my least favorite food?",
        a: [
            { text: "Rice", isCorrect: false },
            { text: "Pounded Yam", isCorrect: false },
            { text: "Beans", isCorrect: false },
            { text: "Bread", isCorrect: true }
        ]
    },
    {
        q: "What do i do the most when i am alone?",
        a: [
            { text: "Study", isCorrect: true },
            { text: "Chat", isCorrect: false },
            { text: "Sleep", isCorrect: false },
            { text: "Listen to music", isCorrect: false }
        ]
    },

    {
        q: "Who/what inspire me the most?",
        a: [
            { text: "My Parent", isCorrect: false },
            { text: "Fear", isCorrect: true },
            { text: "Random", isCorrect: false },
            { text: "Nothing", isCorrect: false }
        ]
    },
];

const opt = document.querySelector(".options");
const question = document.querySelector(".questions");
const btn = document.querySelector(".btn");
const totalScores = document.querySelector(".score");



let currentQuestion = 0;
let score = 0;


function loadQues() {
    question.textContent = Questions[currentQuestion].q;
    opt.innerHTML = "";

    for (let i = 0; i < Questions[currentQuestion].a.length; i++) {
        const choicediv = document.createElement("div");

        choicediv.innerHTML = `
            <input type="radio" name="answer" value="${i}" id="choice${i}">
            <label for="choice${i}">${Questions[currentQuestion].a[i].text}</label>
        `;

        opt.appendChild(choicediv);
    }
}


function loadScores() {
    totalScores.textContent = `You scored ${score} out of ${Questions.length}`;
}



function nextQuestion() {
    if (currentQuestion < Questions.length-1) {
        currentQuestion++;
        loadQues();
    } else {
        opt.innerHTML = "";
        question.textContent = "Quiz Completed!";
        btn.remove();
        loadScores();
    }
}

btn.addEventListener("click", checkAns);

function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
    if (Questions[currentQuestion].a[selectedAns].isCorrect) {
        score++;
        console.log("correct");
    }
    nextQuestion();
}

//Initial loading of questions
loadQues();
