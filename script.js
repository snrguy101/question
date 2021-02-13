var correctAnswers = ["B","B","B","B"];
var form = document.querySelector(".quiz-form");
var scors = document.querySelector(".result")
var percent = document.querySelector('.lead span')





form.addEventListener('submit', function(event) {
    event.preventDefault();
   var Answersinput = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
      var score = 0;
    for(var i = 0; i < correctAnswers.length; i++) {
      if (correctAnswers[i] == Answersinput[i]) {
        score += 25;
      }
    
    }
   scors.classList.remove('d-none');
   scrollTo(0, 0)

   
   var x = 0
   var y = setInterval( function() {
    
    
    percent.innerHTML = `${x}%`;
    if (x === score) {
        clearInterval(y)
    } else {
        x++
    }
  }, 10);
  
})