var $ = require('jquery')
var request = require('superagent')
//var _functions = require('./_functions')

newArray = []
newObject ={}
uniqArray =[]
emptyArray =[]

$( document ).ready(function() {
  data=[
      {id:'1', airL:'Air Astana', callS:'KZR', des:'ASTANALINE'},
      {id:'2', airL:'Air Busan', callS:'ABL', des:'AIR BUSAN'},
      {id:'3', airL:'Air Canada', callS:'ACA', des:'AIR CANADA'},
      {id:'4', airL:'Air China', callS:'CCA', des:'AIR CHINA'},
      {id:'5', airL:'Air France', callS:'AFR', des:'AIRFRANS'},
      {id:'6', airL:'Air Mauritius', callS:'MAU', des:'AIRMAURITIUS'},
      {id:'7', airL:'Air New Zealand', callS:'ANZ', des:'NEW ZEALAND'},
      {id:'8', airL:'Air Niugini', callS:'ANG', des:'NIUGINI'},
      {id:'9', airL:'AirAsia', callS:'AXM', des:'RED CAP'},

    ]

  $('#new').click(function(){
  //uniqArray = newArray
  //newArray = []
  //console.log(newArray)
  //random = ''
  random = data[Math.floor(Math.random()*data.length)]
  newArray.push(random)
  buildNewArray()
    function buildNewArray(){
        if(newArray.length <6 || uniqArray.length <6){
          opt1 = data[Math.floor(Math.random()*data.length)]
            newArray.push(opt1)
            uniqArray = newArray.reduce(function(a,b){
              if (a.indexOf(b) < 0 ) a.push(b);
              return a;
            },[]);
            buildNewArray()
        }else{
                function compare(a,b) {
                    if (a.id < b.id)
                      return -1;
                    if (a.id > b.id)
                      return 1;
                    return 0;
                  }
                uniqArray.sort(compare);
                oneOfThree()
        }
      }
  });

  function oneOfThree(){
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
      console.log('random.id', random.id)
    }else if(oneOfThree == 2){ //call sign is the question
      questionId = random.id
      var question = ""+
                  "<div class='question'>"+
                    "<div class='question_block' guess='"+random.id+"'>"+ random.callS+"</div>"+
                  "</div>"
      $('#call_sign').append(question)
      optionsAirlines()
      optionsDesignator()
      console.log('random.id', random.id)
    }else if (oneOfThree == 3){ // designator is the question
      questionId = random.id
      var question = ""+
                  "<div class='questions'>"+
                    "<div class='question_block' guess='"+random.id+"'>"+ random.des+"</div>"+
                  "</div>"
        $('#designator').append(question)
        optionsCallSigns()
        optionsAirlines()
        console.log('random.id', random.id)
      }
  }

  function optionsCallSigns(){
    console.log('uniqArray:', uniqArray)
    for(i = 0; i < uniqArray.length; i++){

      var callReturned= uniqArray[i]
      $(callReturned).each(function(){
        var callOptions = ""+"<div class='options' guess='"+callReturned.id+"'>"+ callReturned.callS+"</div>"
                    $('#call_sign').append(callOptions)
         })
    }
  }

  function optionsAirlines(){
    console.log('uniqueArray:', uniqArray)
    for(i = 0; i < uniqArray.length; i++){
      var callReturned= uniqArray[i]
      $(callReturned).each(function(){
        var callOptions = ""+"<div class='options' guess='"+callReturned.id+"'>"+ callReturned.airL+"</div>"
                    $('#airline').append(callOptions)
         })
    }
  }

  function optionsDesignator(){
    console.log('uniqArray', uniqArray)
      uniqArray.sort(function() {
      return .5 - Math.random();
    });

    for(i = 0; i < uniqArray.length; i++){
      var callReturned= uniqArray[i]
      $(callReturned).each(function(){
             var callOptions = ""+"<div class='options' guess='"+callReturned.id+"'>"+ callReturned.des+"</div>"
                     $('#designator').append(callOptions)
          })
    }
  }


$('#airline').delegate('.options', 'click', function(e){
      $('#airline_error').remove()
      $('.options').removeClass('airline_selected')
      $(this).addClass("airline_selected")
      airlineChoiceId =$(this).attr('guess')
      if(questionId != airlineChoiceId){
         errorMsg = ""+"<div id='airline_error' class='error'>Oops.. try again</div>"
          $('#airline').append(errorMsg)
      }else if(questionId == airlineChoiceId){
         correctMsg = ""+"<div id='airline_correct' class='correct'>Crowd Goes Wild</div>"
                $('#airline').append(correctMsg)

      }
      console.log('airlineChoiceId', airlineChoiceId)
  })

$('#call_sign').delegate('.options', 'click', function(e){
        $('#callsign_error').remove()
        $('.options').removeClass('call_selected')
        $(this).addClass("call_selected")
        callsignChoiceId =$(this).attr('guess')
        if(questionId != callsignChoiceId){
           errorMsg = ""+"<div id='callsign_error' class='error'>Oops.. try again</div>"
            $('#call_sign').append(errorMsg)
        }else if(questionId == callsignChoiceId){
           correctMsg = ""+"<div id='callsign_correct' class='correct'>Crowd Goes Wild</div>"
                  $('#call_sign').append(correctMsg)

        }

        console.log('callsignChoiceId', callsignChoiceId)
    })

$('#designator').delegate('.options', 'click', function(e){
    $('#designator_error').remove()
          $('.options').removeClass('des_selected')
    $(this).addClass("des_selected")
    designatorChoiceId =$(this).attr('guess')
    if(questionId != designatorChoiceId){
       errorMsg = ""+"<div id='designator_error' class='error'>Oops.. try again</div>"
              $('#designator').append(errorMsg)
    }else if(questionId == designatorChoiceId){
       correctMsg = ""+"<div id='designator_correct' class='correct'>Crowd Goes Wild</div>"
              $('#designator').append(correctMsg)

    }

})



}); // end doc ready
