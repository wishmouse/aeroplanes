var $ = require('jquery')
var request = require('superagent')


function oneOfThree(){
  oneOfThree = Math.floor(Math.random() * 3) + 1;
  if(oneOfThree == 1){
    var question = ""+
                "<tr class='question'>"+
                  "<td class='question_block' value='"+random.id+"'>"+ random.airL+"</td>"+
                "</tr>"
    $('#airline').append(question)
    optionsCallSigns()
    console.log(random.airL)
  }else if(oneOfThree == 2){
    var question = ""+
                "<tr class='question'>"+
                  "<td class='question_block' value='"+random.id+"'>"+ random.callS+"</td>"+
                "</tr>"
    $('#callsign').append(question)
    console.log(random.callS)
  }else if (oneOfThree == 3)
  var question = ""+
              "<tr class='question'>"+
                "<td class='question_block' value='"+random.id+"'>"+ random.des+"</td>"+
              "</tr>"
    $('#designator').append(question)
    optionsCallSigns()
    console.log(random.des)
}

function optionsCallSigns(){
  for(i = 0; i < sortedArray.length; i++){
    var callOptions = ""+
              "<tr class='question'>"+
                  "<td class='option_block' value='"+sortedArray.id+"'>"+ sortedArray.callS+"</td>"+
                "</tr>"
      $('#call_sign').append(callOptions)
  }
}
module.exports = {
      oneOfThree:oneOfThree,

  }
