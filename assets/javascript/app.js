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
      q1:
      q2: 
      q3: 
      q4: 
      q5:
      q6: 
      q7: 
    },
    options: {
      q1: [],
      q2: [],
      q3: [],
      q4: [],
      q5: [],
      q6: [],
      q7: []
    },
    answers: {
      q1: 
      q2: 
      q3: 
      q4: 
      q5: 
      q6: 
      q7: 
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
        

    
