let number = 60;

let intervalId;

let correctAnswers = 0;
let incorrectAnswers = 0;
let unanswered = 0;

// Questions array
    //Question1
var questions = [{
    question: "Which team is as well-known for their comic antics as for their athletic skills?",
    answerList: ["New Zealand Rugby","Harlem Globetrotters", "FlintTropics","New York Mets"], 
    answer: 1
},{
    //Question2
    question: "Which is the only Major League Baseball team to never make it to a World Series?",
    answerList: ["Seattle Mariners", "Miami Marlins", "Kansas City Royals", "Toronto Blue Jays"],
    answer: 0
},{
    //Question3
    question: "Indy 500 winners celebrate winning by drinking what?",
    answerList: ["Beer", "Tomato Juice", "Water", "Milk"],
    answer: 3
},{
    //Question4
    question: "In the game of darts what is the highest possible score using three darts?",
    answerList: ["220", "180", "140", "100"],
    answer: 1
},{
    //Question5
    question: "Which country won the first World Cup?",
    answerList: ["Germany", "Brazil", "Uruguay", "USA"],
    answer: 2
},{
    //Question6
    question: "Who is the only athlete to appear in a Football game and a Baseball game on the same day?",
    answerList: ["Bo Jackson", "Brian Jordan", "Deion Sanders", "Dave WInfield"],
    answer: 0
},{
    //Question7
    question: "Which NBA team has produced the most MVP players all time?",
    answerList: ["Boston Celtics", "LA Lakers", "Chicago Bulls", "Houston Rockets"],
    answer: 0
},{
    //Question
    question: "Who has won the most Major Championships in golf history?",
    answerList: ["Tiger Woods", "Walter Hagen", "Arnold Palmer", "Jack Nicklaus"],
    answer: 3
}];


$("#start").on("click", function() {

    // Hide Start 
    $(this).hide();

    // Display initial time countdown
    $("#time").html("<h2>Time Remaining: 60 Seconds</h2>" + "<br>");

    // Start timer 
    run();
   
    // Display questions --- I still want to turn this into a reusable piece so that i don't have to repeat this section for each question
    // Question 1
    $("#question1").html("<h3>" + questions[0].question + "</h3>");
    $("#answer1").html("<input type='radio' name='answer1' value='0'>" + "<label>" + questions[0].answerList[0] + "</label>"
        + "<input type='radio' name='answer1' value='1'>" + "<label>" + questions[0].answerList[1] + "</label>"
        + "<input type='radio' name='answer1' value='2'>" + "<label>" + questions[0].answerList[2] + "</label>"
        + "<input type='radio' name='answer1' value='3'>" + "<label>" + questions[0].answerList[3] + "</label><br><br>"
    );

    // Question 2
    $("#question2").html("<h3>" + questions[1].question + "</h3>");
    $("#answer2").html("<input type='radio' name='answer2' value='0'>" + "<label>" + questions[1].answerList[0] + "</label>"
        + "<input type='radio' name='answer2' value='1'>" + "<label>" + questions[1].answerList[1] + "</label>"
        + "<input type='radio' name='answer2' value='2'>" + "<label>" + questions[1].answerList[2] + "</label>"
        + "<input type='radio' name='answer2' value='3'>" + "<label>" + questions[1].answerList[3] + "</label><br><br>"
    );

    // Question 3
    $("#question3").html("<h3>" + questions[2].question + "</h3>");
    $("#answer3").html("<input type='radio' name='answer3' value='0'>" + "<label>" + questions[2].answerList[0] + "</label>"
        + "<input type='radio' name='answer3' value='1'>" + "<label>" + questions[2].answerList[1] + "</label>"
        + "<input type='radio' name='answer3' value='2'>" + "<label>" + questions[2].answerList[2] + "</label>"
        + "<input type='radio' name='answer3' value='3'>" + "<label>" + questions[2].answerList[3] + "</label><br><br>"
    );

    // Question 4
    $("#question4").html("<h3>" + questions[3].question + "</h3>");
    $("#answer4").html("<input type='radio' name='answer4' value='0'>" + "<label>" + questions[3].answerList[0] + "</label>"
        + "<input type='radio' name='answer4' value='1'>" + "<label>" + questions[3].answerList[1] + "</label>"
        + "<input type='radio' name='answer4' value='2'>" + "<label>" + questions[3].answerList[2] + "</label>"
        + "<input type='radio' name='answer4' value='3'>" + "<label>" + questions[3].answerList[3] + "</label><br><br>"
    );

    // Question 5
    $("#question5").html("<h3>" + questions[4].question + "</h3>");
    $("#answer5").html("<input type='radio' name='answer5' value='0'>" + "<label>" + questions[4].answerList[0] + "</label>"
        + "<input type='radio' name='answer5' value='1'>" + "<label>" + questions[4].answerList[1] + "</label>"
        + "<input type='radio' name='answer5' value='2'>" + "<label>" + questions[4].answerList[2] + "</label>"
        + "<input type='radio' name='answer5' value='3'>" + "<label>" + questions[4].answerList[3] + "</label><br><br>"
    );
    // Question 6
    $("#question6").html("<h3>" + questions[5].question + "</h3>");
    $("#answer6").html("<input type='radio' name='answer6' value='0'>" + "<label>" + questions[5].answerList[0] + "</label>"
        + "<input type='radio' name='answer6' value='1'>" + "<label>" + questions[5].answerList[1] + "</label>"
        + "<input type='radio' name='answer6' value='2'>" + "<label>" + questions[5].answerList[2] + "</label>"
        + "<input type='radio' name='answer6' value='3'>" + "<label>" + questions[5].answerList[3] + "</label><br><br>"
    );
    // Question 7
    $("#question7").html("<h3>" + questions[6].question + "</h3>");
    $("#answer7").html("<input type='radio' name='answer7' value='0'>" + "<label>" + questions[6].answerList[0] + "</label>"
        + "<input type='radio' name='answer7' value='1'>" + "<label>" + questions[6].answerList[1] + "</label>"
        + "<input type='radio' name='answer7' value='2'>" + "<label>" + questions[6].answerList[2] + "</label>"
        + "<input type='radio' name='answer7' value='3'>" + "<label>" + questions[6].answerList[3] + "</label><br><br>"
    );
    // Question 8
    $("#question8").html("<h3>" + questions[7].question + "</h3>");
    $("#answer8").html("<input type='radio' name='answer7' value='0'>" + "<label>" + questions[7].answerList[0] + "</label>"
        + "<input type='radio' name='answer7' value='1'>" + "<label>" + questions[7].answerList[1] + "</label>"
        + "<input type='radio' name='answer7' value='2'>" + "<label>" + questions[7].answerList[2] + "</label>"
        + "<input type='radio' name='answer7' value='3'>" + "<label>" + questions[7].answerList[3] + "</label><br><br>"
    );


    // Submit button
    $("#submit").html("<button id='done' class='btn'>Done</button>");
    // Click event 
    $("#done").on("click", function() {
    // Keeping track of score 
        keepingScore();
    // Display 
        displayResults();
        
    });
});

// Timer countdown function
function run() {clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
function decrement() {
    //  Decrease number by one.
    number--;
    //  Show the number in the #time tag
    $("#time").html("<h2>Time Remaining: " + number + " Seconds</h2>" + "<br>");
    
    if (number === 0) {
    // Run stop function to stop timer countdown
     stop();
     keepingScore();
     displayResults();
    }}
 
    //  Clears intervalId
function stop() {
    //  Clears intervalId
    clearInterval(intervalId);
}
//function for questions and answers
function displayResults() {

    $("#time").hide();
    $("#question1").hide();
    $("#answer1").hide();
    $("#question2").hide();
    $("#answer2").hide();
    $("#question3").hide();
    $("#answer3").hide();
    $("#question4").hide();
    $("#answer4").hide();
    $("#question5").hide();
    $("#answer5").hide();
    $("#question6").hide();
    $("#answer6").hide();
    $("#question7").hide();
    $("#answer7").hide();
    $("#submit").hide();

    $("#resultsMessage").html("<h3>All Done!</h3>");
    $("#correct").html("Correct Answers: " + correctAnswers);
    $("#incorrect").html("Incorrect Answers: " + incorrectAnswers);
    $("#unanswered").html("Unanswered: " + unanswered);
}


// Function keeps score in terms of correct, incorrect, and unanswered 
function keepingScore() {

    let userAnswer1 = $("input[name='answer1']:checked").val();
    let userAnswer2 = $("input[name='answer2']:checked").val();
    let userAnswer3 = $("input[name='answer3']:checked").val();
    let userAnswer4 = $("input[name='answer4']:checked").val();
    let userAnswer5 = $("input[name='answer5']:checked").val();
    let userAnswer6 = $("input[name='answer6']:checked").val();
    let userAnswer7 = $("input[name='answer7']:checked").val();
    let userAnswer8 = $("input[name='answer8']:checked").val();
    // Question 1
    if (userAnswer1 === undefined) {unanswered++;}
        else if (userAnswer1 == questions[0].answer) {
    correctAnswers++;}
    else {incorrectAnswers++;}

    // Question 2
    if (userAnswer2 === undefined) {unanswered++;}
        else if (userAnswer2 == questions[1].answer) {
    correctAnswers++;}
    else {incorrectAnswers++;
    }

    // Question 3
    if (userAnswer3 === undefined) {unanswered++;}
        else if (userAnswer3 == questions[2].answer) {
    correctAnswers++;}
    else {incorrectAnswers++;}

   // Question 4
    if (userAnswer4 === undefined) {unanswered++;}
        else if (userAnswer4 == questions[3].answer) {
    correctAnswers++;}
    else {incorrectAnswers++;}
    
    
    // Question 5
    if (userAnswer5 === undefined) {unanswered++;}
        else if (userAnswer3 == questions[4].answer) {
    correctAnswers++;}
    else {incorrectAnswers++;}
    
    
    // Question 6
    if (userAnswer6 === undefined) {unanswered++;}
        else if (userAnswer6 == questions[5].answer) {
    correctAnswers++;}
    else {incorrectAnswers++;}
    
    // Question 7
    if (userAnswer7 === undefined) { unanswered++;}
    else if (userAnswer7 == questions[6].answer) {
    correctAnswers++;}
    else {incorrectAnswers++;
    }  
    // Question 8
    if (userAnswer8 === undefined) { unanswered++;}
    else if (userAnswer8 == questions[7].answer) {
    correctAnswers++;}
    else {incorrectAnswers++;
    }  
}