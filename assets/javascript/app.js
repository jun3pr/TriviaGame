
      // ----------------------------TRIVIA GAME----------------------------
  
      let correctAnswers = 0;
      let incorrectAnswers = 0;
      let unansweredQuestions = 0;
      let timeRemaining = 15;
      let intervalID;
      let indexQandA = 0; //index to load a different question each round without the game reset or screen refresh
      let answered = false; //letiable to stop the timer if user has clicked an answer
      let correct;
      let triviaGame = [{
          question: "Which team is as well-known for their comic antics as for their on-court skills?",
          answer: ["New Zealand Rugby Team, Miami Dolphins, Harlem Globetrotters, Flint Tropics"],
          correct: "2",
          image: ("assets/images/globetrotters.jpg")
      }, {
          question: " Which is the only Major League Baseball team to never make it to a World Series?",
          answer:  ["Seattle Mariners, Miami Marlins, Kansas City Royals, Toronto Blue Jays"],
          correct: "0",
          image: ("assets//images/mariner.jpg")
      }, {
          question: " Indy 500 winners celebrate winning by drinking what?",
          answer:   ["Beer, Tomato Juice, Water, Milk"],
          correct: "3",
          image: ("assets//images/milk.jpg")
      }, {
          question: "In the game of darts what is the highest possible score using three darts?",
          answer: ["220, 180, 140, 100"],
          correct: "1",
          image: ("assets//images/dart.png")
      }, {
          question: "What team does Lionel Messi play for? ",
          answer:   ["Barcelona, Spain, Juventus, Real Madrid"],
          correct: "0",
          image: ("assets/images/Messi.jpg")
      }, {
          question: "Which country won the first World Cup?",
          answer:   ["Germany, Brazil, Uruguay, United States”] 
          correct: "2",
          image: ("assets//images/uruguay-flag.jpg")
      }, {
          question: "Who is the only athlete to appear in a Football game and a Baseball game on the same day?",
          answer:   ["Germany, Brazil, Uruguay, United States”] 
          correct: "2",
          image: ("assets//images/Deion.jpg")
      }, {
          question: "Who has won the most Major Championships in golf history?",
          answer:  ["Tiger Woods, Walter Hagen, Arnold Palmer, Jack Nicklaus];
          correct: "3",
          image: ("assets//images/jack-nicklaus.jpeg")
      }];
  
      // ------------- FUNCTION DECLARATIONS ----------------------------
  
  
      function startGame() {
          console.log("game has begun");
          $('.start-button').remove();
          correctAnswers = 0;
          incorrectAnswers = 0;
          unansweredQuestions = 0;
          loadQandA();
      }
  
      function loadQandA() {
          // console.log(correctAnswers);
          // console.log(incorrectAnswers);
          // console.log(unansweredQuestions);
          // console.log(indexQandA);
          answered = false; // will allow timeRemaining to be pushed back to <h5> after round reset....else statement in function timer()
          timeRemaining = 15;
          intervalID = setInterval(timer, 1000);
          if (answered === false) {
              timer();
          }
          correct = triviaGame[indexQandA].correct;
          let question = triviaGame[indexQandA].question;
          $('.question').html(question);
          for (let i = 0; i < 4; i++) {
              let answer = triviaGame[indexQandA].answer[i];
              $('.answers').append('<h4 class= answersAll id=' + i + '>' + answer + '</h4>');
          }
  
          $("h4").click(function () {
              let id = $(this).attr('id');
              // alert(id);
              if (id === correct) {
                  answered = true; // stops the timer
                  // alert("correct answer");
                  $('.question').text("THE ANSWER IS: " + triviaGame[indexQandA].answer[correct]);
                  correctAnswer();
              } else {
                  answered = true; //stops the timer
                  // alert("incorrect answer");
                  $('.question').text("YOU CHOSE: " + triviaGame[indexQandA].answer[id] + ".....HOWEVER THE ANSWER IS: " + triviaGame[indexQandA].answer[correct]);
                  incorrectAnswer();
              }
          });
      }
  
      function timer() {
          if (timeRemaining === 0) {
              answered = true;
              clearInterval(intervalID);
              $('.question').text("THE CORRECT ANSWER IS: " + triviaGame[indexQandA].answer[correct]);
              unAnswered();
          } else if (answered === true) {
              clearInterval(intervalID);
          } else {
              timeRemaining--;
              $('.timeRemaining').text('YOU HAVE ' + timeRemaining + ' SECONDS TO CHOOSE');
          }
      }
  
      function correctAnswer() {
          correctAnswers++;
          $('.timeRemaining').text("YOU HAVE ANSWERED CORRECTLY!").css({
              
          });
          resetRound();
      }
  
      function incorrectAnswer() {
          incorrectAnswers++;
          $('.timeRemaining').text("YOU HAVE ANSWERED INCORRECTLY!").css({
              
          });
          resetRound();
  
      }
  
      function unAnswered() {
          unansweredQuestions++;
          $('.timeRemaining').text("YOU FAILED TO CHOOSE AN ANSWER").css({
              
          });
          resetRound();
      }
  
      function resetRound() {
          $('.answersAll').remove();
          $('.answers').append('<img class=answerImage width="150" height="150" src="' + triviaGame[indexQandA].image + ' ">'); // adds answer image
          indexQandA++; // increments index which will load next question when loadQandA() is called again
          if (indexQandA < triviaGame.length) {
              setTimeout(function () {
                  loadQandA();
                  $('.answerImage').remove();
              }, 5000); // removes answer image from previous round
          } else {
              setTimeout(function () {
                  $('.question').remove();
                  $('.timeRemaining').remove();
                  $('.answerImage').remove();
                  $('.answers').append('<h4 class= answersAll end>CORRECT ANSWERS: ' + correctAnswers + '</h4>');
                  $('.answers').append('<h4 class= answersAll end>INCORRECT ANSWERS: ' + incorrectAnswers + '</h4>');
                  $('.answers').append('<h4 class= answersAll end>UNANSWERED QUESTIONS: ' + unansweredQuestions + '</h4>');
                  setTimeout(function () {
                      location.reload();
                  }, 7000);
              }, 5000);
          }
      };
  
      $('.startButton').on("click", function () {
          $('.startButton');
          startGame();
  
      });
  
  
  
    
