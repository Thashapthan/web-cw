const quiz_start_button = document.getElementById("start-bt"); // get the start button element
const quiz_questions_page = document.getElementById("quiz-questions-div"); // get the question div element
const next_button = document.getElementById("next-question-bt");  // get the next button element
const cancel_button = document.getElementById("cancel-question-bt"); // get the cancel button element
const start_again_button = document.getElementById("start-again"); // get the start again button element
const finished_page = document.getElementById("finished-quiz-div"); // get the finished page element
const question = document.getElementById("question"); // get the question element
const answer_1 = document.getElementById("answer-1"); // get the answer 1 element
const answer_2 = document.getElementById("answer-2"); // get the answer 2 element
const answer_3 = document.getElementById("answer-3"); // get the answer 3 element
const answer_4 = document.getElementById("answer-4"); // get the answer 4 element


let score = 0; // set the score to 0
let current_question = 0; // set the current question to 0

// set questions to display in a list
let questions = [
    "What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe?",
    "Which Avenger does Thor team up with in Thor: Ragnarok?",
    "In which fictional country is Black Panther set?",
    "In which film did Black Widow first appear?",
    "In which film did Hawkeye first appear?",
    "In which film did Spider-Man make his first appearance in the MCU?",
    "What is the Falcon’s real name?",
    "What is the name of Tony Stark’s A.I. assistant, who becomes the basis of The Vision?",
    "Who is Bucky Barnes better known as?",
    "What fictional alien metal gives the Wakandans their power?"
];

// set answer options to a list in order to the questions
let answer_options = [
    ["2005", "2008", "2010", "2012"], // options for question 1
    ["Hulk", "Hawkeye", "Iron Man", "Captain America"], // options for question 2
    ["Wakanda", "Sokovia", "Latveria", "Genosha"], // options for question 3
    ["Avengers Assemble", "The Incredible Hulk", "Iron Man 2", "Avengers" ], // options for question 4 
    ["Captain America: The First Avenger", "Thor", "Iron Man 3", "Avengers"], // options for question 5
    ["Guardians of the Galaxy", "Avengers:Age of Ultron", "Captain America: Civil War", "Iron Man 3"], // options for question 6
    ["Sam Wilson", "James Rhodes", "Scott Lang", "Clint Barton"], // options for question 7
    ["H.O.M.E.R", "J.A.R.V.I.S", "A.L.F.R.E.D", "M.A.R.V.I.N"], // options for question 8
    ["The Red Skull", "The Winter Soldier", "Baron Zemo", "The Red Guardian"], // options for question 9
    ["Adamantium", "Vibranium", "Promethium", "Carbonadium"] // options for question 10
]

// set correct answers in a list
let correct_answers = ["2008", "Hulk", "Wakanda", "Iron Man 2", "Thor", "Captain America: Civil War", "Sam Wilson", "J.A.R.V.I.S", "The Winter Soldier", "Vibranium"]

// a list to add the user's answers. This will be used to check the performance of the user. later we'll compare this list with the correct answers list
let user_answers = []

// when the start button is clicked, the quiz will start
quiz_start_button.onclick = function() {
    alert("Quiz started!"); // show an alert to the user that the quiz has started
    resetColorChange(); // reset the color of the answers
    enableAll(); // enable all the answers
    user_answers = []; // reset the user answers list
    score = 0; // reset the score 
    current_question = 0; // reset the current question
    checkperformance(); // check the performance of the user
    updateQuestionNo(); // update the question number
    quiz_start_button.style.display = "none"; // hide the start button
    quiz_questions_page.style.display = "block"; // show the question page
    question.innerHTML = questions[current_question]; // display the first question
    answer_1.innerHTML = answer_options[current_question][0]; // display the first answer option
    answer_2.innerHTML = answer_options[current_question][1]; // display the second answer option 
    answer_3.innerHTML = answer_options[current_question][2]; // display the third answer option
    answer_4.innerHTML = answer_options[current_question][3]; // display the fourth answer option
    disableNext(); // disable the next button
    updateScore(); // update the score
}

// function when the user clicks on an answer
answer_1.onclick = function() {
    user_answers.push(answer_options[current_question][0]); // add the user's answer to the user answers list
    // check if the user's answer is correct
    if (answer_options[current_question][0] == correct_answers[current_question]) {
        // if the answer is correct, increase the score by 1
        score++;
        answer_1.style.backgroundColor = "green"; // change the background color of the answer to green
    } else {
        answer_1.style.backgroundColor = "red"; // change the background color of the answer to red if the answer is wrong
    }
    disableAll(); // disable all the answers
    current_question++; // increase the current question by 1
    enableNext();   // enable the next button
   
}

answer_2.onclick = function() {
    user_answers.push(answer_options[current_question][1]);
    // check if the user's answer is correct
    if (answer_options[current_question][1] == correct_answers[current_question]) {
        // if the answer is correct, increase the score by 1
        score++;
        answer_2.style.backgroundColor = "green"; // change the background color of the answer to green
    } else {
        answer_2.style.backgroundColor = "red"; // change the background color of the answer to red if the answer is wrong
    }
    disableAll(); // disable all the answers
    current_question++; // increase the current question by 1
    enableNext();  // enable the next button
}

answer_3.onclick = function() {
    user_answers.push(answer_options[current_question][2]); // add the user's answer to the user answers list
    // check if the user's answer is correct
    if (answer_options[current_question][2] == correct_answers[current_question]) {
        // if the answer is correct, increase the score by 1
        score++; // increase the score by 1
        answer_3.style.backgroundColor = "green"; // change the background color of the answer to green
    } else {
        answer_3.style.backgroundColor = "red"; // change the background color of the answer to red if the answer is wrong
    }
    disableAll(); // disable all the answers
    current_question++; // increase the current question by 1
    enableNext(); // enable the next button
}

answer_4.onclick = function() {
    user_answers.push(answer_options[current_question][3]); // add the user's answer to the user answers list
    // check if the user's answer is correct
    if (answer_options[current_question][3] == correct_answers[current_question]) {
        // if the answer is correct, increase the score by 1
        score++;
        answer_4.style.backgroundColor = "green"; // change the background color of the answer to green
    } else { 
        answer_4.style.backgroundColor = "red"; // change the background color of the answer to red if the answer is wrong
    }
    disableAll(); // disable all the answers
    current_question++; // increase the current question by 1
    enableNext(); // enable the next button
}

// function when the user clicks on the cancel button
cancel_button.onclick = function() {
    quiz_start_button.style.display = "block"; // show the start button
    quiz_questions_page.style.display = "none"; // hide the question page
    finished_page.style.display = "none"; // hide the finished page
}

// function when the user clicks on the next button
next_button.onclick = function() {
    resetColorChange(); // reset the color of the answers
    enableAll(); // enable all the answers
    updateQuestionNo(); // update the question number
    if (current_question < 10) { // check if the current question is less than 10
        question.innerHTML = questions[current_question]; // display the question
        answer_1.innerHTML = answer_options[current_question][0]; // display the first answer option
        answer_2.innerHTML = answer_options[current_question][1]; // display the second answer option
        answer_3.innerHTML = answer_options[current_question][2]; // display the third answer option
        answer_4.innerHTML = answer_options[current_question][3]; // display the fourth answer option 
    }
    
    // check if the current question is 10
    if (current_question == 10) {
        quiz_questions_page.style.display = "none"; // hide the question page
        finished_page.style.display = "block"; // show the finished page
        checkperformance(); // check the performance of the user
    }

    disableNext(); // disable the next button
    updateScore(); // update the score
}

// function when the user clicks on the start again button
start_again_button.onclick = function() {
    quiz_start_button.style.display = "block"; // show the start button
    finished_page.style.display = "none"; // hide the finished page
}

// function to check the performance of the user
function checkperformance() {
    if (score > 5) {
        // if the score is greater than 5, show the good performance message
        document.getElementById("performance-bad").style.display = "none";        
        document.getElementById("performance-good").style.display = "block";        
    } else {
        // if the score is less than 5, show the bad performance message
        document.getElementById("performance-bad").style.display = "block";        
        document.getElementById("performance-good").style.display = "none";        
    }
    document.getElementById("score-quiz").innerHTML = 'Score: '+score+'/10'; // display the score
}

// function to disable all the answers, once the user clicks on an answer
function disableAll() {
    answer_1.disabled = true;
    answer_2.disabled = true;
    answer_3.disabled = true;
    answer_4.disabled = true;
}

// function to enable all the answers, once the user clicks on the next button
function enableAll() {
    answer_1.disabled = false;
    answer_2.disabled = false;
    answer_3.disabled = false;
    answer_4.disabled = false;
}

// function to reset the color of the answers after user clicks on the next button
function resetColorChange() {
    answer_1.style.backgroundColor = "white";
    answer_2.style.backgroundColor = "white";
    answer_3.style.backgroundColor = "white";
    answer_4.style.backgroundColor = "white";
}

// function to update the question number
function updateQuestionNo() {
    let now_question = current_question + 1;
    document.getElementById("no-of-question").innerHTML = 'Question '+ now_question +' of 10';
}

// function to disable the next button 
function disableNext() {
    next_button.disabled = true;
}

// function to enable the next button after the user clicks on an answer
function enableNext() {
    next_button.disabled = false;
}

// function to update the score after each question
function updateScore() {
    document.getElementById("score-of-quiz").innerHTML = 'Score: '+score+'/10';
}