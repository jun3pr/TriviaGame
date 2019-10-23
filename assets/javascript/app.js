$(document).ready(function(){
  
    // event listeners
    $("#remaining-time").hide();
    $("#start").on('click', trivia.startGame);
    $(document).on('click' , '.option', trivia.guessChecker);
    
  })
  
  var trivia = {
    // trivia properties
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    currentSet: 0,
    timer: 20,
    timerOn: false,
    timerId : '',
    // questions options and answers data
    questions: {
      q1: "Which team is as well-known for their comic antics as for their on-court skills?"
      q2: 
      q3: 
      q4: 
      q5:
      q6: 
      q7:
      q8: 
    },
    options: {
      q1: [New Zealand Rugby Team, Miami Dolphins, Harlem Globetrotters, Flint Tropics],
      q2: [],
      q3: [],
      q4: [],
      q5: [],
      q6: [],
      q7: []
      q8: []
    },
    answers: {
      q1: 
      q2: 
      q3: 
      q4: 
      q5: 
      q6: 
      q7: 
      q8:
    },
   
   // trivia methods
  
  startGame: function(){
    // restarting game results
    trivia.currentSet = 0;
    trivia.correct = 0;
    trivia.incorrect = 0;
    trivia.unanswered = 0;
    clearInterval(trivia.timerId);
    
    // show game section
    $('#game').show();
    
    //  empty last results
    $('#results').html('');
    
    // show timer
    $('#timer').text(trivia.timer);
    
    // remove start button
    $('#start').hide();

    $('#remaining-time').show();
    
    
    trivia.nextQuestion();
  }
  nextQuestion : function(){
    
    
    trivia.timer = 10;
     $('#timer').removeClass('last-seconds');
    $('#timer').text(trivia.timer);
    
    
    if(!trivia.timerOn){
      trivia.timerId = setInterval(trivia.timerRunning, 1000);
    }
    
    
    var questionContent = Object.values(trivia.questions)[trivia.currentSet];
    $('#question').text(questionContent);
    
    // an array of all the user options for the current question
    var questionOptions = Object.values(trivia.options)[trivia.currentSet];
    
    // creates all the trivia guess options in the html
    $.each(questionOptions, function(index, key){
      $('#options').append($('<button class="option btn btn-info btn-lg">'+key+'</button>'));
    })
    timerRunning : function(){

        if(trivia.timer > -1 && trivia.currentSet < Object.keys(trivia.questions).length){
            $('#timer').text(trivia.timer);
            trivia.timer--;
              if(trivia.timer === 4){
                $('#timer').addClass('last-seconds');
              }
          }
        
          else if(trivia.timer === -1){
            trivia.unanswered++;
            trivia.result = false;
            clearInterval(trivia.timerId);
            resultId = setTimeout(trivia.guessResult, 1000);
            $('#results').html('<h3>Out of time! The answer was '+ Object.values(trivia.answers)[trivia.currentSet] +'</h3>');
          }
          // if all the questions have been shown end the game, show results
          else if(trivia.currentSet === Object.keys(trivia.questions).length){
            
            // adds results of game (correct, incorrect, unanswered) to the page
            $('#results')
              .html('<h3>Thank you for playing!</h3>'+
              '<p>Correct: '+ trivia.correct +'</p>'+
              '<p>Incorrect: '+ trivia.incorrect +'</p>'+
              '<p>Unaswered: '+ trivia.unanswered +'</p>'+
              '<p>Please play again!</p>');
            
            // hide game sction
            $('#game').hide();
            
            // show start button to begin a new game
            $('#start').show();
          }
          
        },
        // method to evaluate the option clicked
        guessChecker : function() {
          
          // timer ID for gameResult setTimeout
          var resultId;
          
          // the answer to the current question being asked
          var currentAnswer = Object.values(trivia.answers)[trivia.currentSet];
          
          // if the text of the option picked matches the answer of the current question, increment correct
          if($(this).text() === currentAnswer){
            // turn button green for correct
            $(this).addClass('btn-success').removeClass('btn-info');
            
            trivia.correct++;
            clearInterval(trivia.timerId);
            resultId = setTimeout(trivia.guessResult, 1000);
            $('#results').html('<h3>Correct Answer!</h3>');
          }
          // else the user picked the wrong option, increment incorrect
          else{
            // turn button clicked red for incorrect
            $(this).addClass('btn-danger').removeClass('btn-info');
            
            trivia.incorrect++;
            clearInterval(trivia.timerId);
            resultId = setTimeout(trivia.guessResult, 1000);
            $('#results').html('<h3>Better luck next time! '+ currentAnswer +'</h3>');
          }
          
        },
        // method to remove previous question results and options
        guessResult : function(){
          
          // increment to next question set
          trivia.currentSet++;
          
          // remove the options and results
          $('.option').remove();
          $('#results h3').remove();
          
          // begin next question
          trivia.nextQuestion();
           
        }
      
      }

    
