var $ = require('jquery')
var request = require('superagent')


function oneOfThreeSelect(){
  alert("boomch")
  oneOfThree = Math.floor(Math.random() * 3) + 1;
  if(oneOfThree == 1){ //airline is the question
    questionId = random.id
    var question = ""+
                "<div class='question'>"+
                  "<div class='question_block' guess='"+random.id+"'>"+ random.airL+"</div>"+
                "</div>"
    $('#airline').append(question)
    optionsCallSigns()
    optionsDesignator()
  }else if(oneOfThree == 2){ //call sign is the question
    questionId = random.id
    var question = ""+
                "<div class='question'>"+
                  "<div class='question_block' guess='"+random.id+"'>"+ random.callS+"</div>"+
                "</div>"
    $('#call_sign').append(question)
    optionsAirlines()
    optionsDesignator()
  }else if (oneOfThree == 3){ // designator is the question
    questionId = random.id
    var question = ""+
                "<div class='question'>"+
                  "<div class='question_block' guess='"+random.id+"'>"+ random.des+"</div>"+
                "</div>"
      $('#designator').append(question)
      optionsCallSigns()
      optionsAirlines()
    }
}

module.exports = {
      oot:oneOfThreeSelect
  }
