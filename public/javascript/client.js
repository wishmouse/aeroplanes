var $ = require('jquery')
var request = require('superagent')
var _functions = require('./_functions')

newArray = []
newObject ={}
uniqArray =[]
emptyArray =[]
options = 5

$( document ).ready(function() {
  data=[
    {id:'1', airL:'Aeroflot Russian', callS:'Aeroflot', des:'AFL'},
    {id:'2', airL:'Aerologic', callS:'German Cargo', des:'BOX'},
    {id:'3', airL:'Air Hong Kong', callS:'Air Hong Kong', des:'AHK'},
    {id:'4', airL:'Air Asia Berhad', callS:'Redcap', des:'AXM'},
    {id:'5', airL:'Air Astana', callS:'Astanaline', des:'KZR'},
    {id:'6', airL:'Air Busan', callS:'Air Busan', des:'ABL'},
    {id:'7', airL:'Air Canada', callS:'Air Canada', des:'ACA'},
    {id:'8', airL:'Air china', callS:'Air china', des:'CCA'},
    {id:'9', airL:'Air France', callS:'Air Frans', des:'AFR'},
    {id:'10', airL:'Air India', callS:'Air India', des:'AIC'},
    {id:'11', airL:'Air Japan', callS:'Air Japan', des:'AJX'},
    {id:'12', airL:'Air Mauritius', callS:'Air Mauritius', des:'MAU'},
    {id:'13', airL:'Air New Zealand', callS:'Air New Zealand', des:'ANZ'},
    {id:'14', airL:'Air Niugini', callS:'Niugini', des:'ANG'},
    {id:'15', airL:'Fiji Airways', callS:'Fiji', des:'FJI'},
    {id:'16', airL:'Airbridge Cargo', callS:'Airbridge Cargo', des:'ABW'},
    {id:'17', airL:'All Nippon ', callS:'All Nippon', des:'ANA'},
    {id:'18', airL:'American Airlines', callS:'America', des:'AAL'},
    {id:'19', airL:'Asiana Airlines', callS:'Asiana', des:'AAR'},
    {id:'20', airL:'Atlas Air', callS:'Giant', des:'GTI'},
    {id:'21', airL:'Aurora Airlines', callS:'Aurora', des:'SHU'},
    {id:'22', airL:'Austrian Airlines', callS:'Austrian', des:'AUA'},
    {id:'23', airL:'Bangkok Airways', callS:'Bankock Air', des:'BKP'},
    {id:'24', airL:'Bishmillah Airlines', callS:'Bishmillah', des:'BML'},
    {id:'25', airL:'British Airlines', callS:'Speedbird', des:'BAW'},
    {id:'26', airL:'Cargolux Airlines', callS:'Cargolux ', des:'CLX'},
    {id:'27', airL:'Cargolux Italia', callS:'Cargolux Italia', des:'ICV'},
    {id:'28', airL:'Cathay Pacific', callS:'Cathay', des:'CPA'},
    {id:'29', airL:'Cebu Pacific', callS:'Cebu Air', des:'CEB'},
    {id:'30', airL:'China Airlines', callS:'Dynasty', des:'CAL'},
    {id:'31', airL:'China Cargo', callS:'Cargo King', des:'CKK'},
    {id:'32', airL:'China Eastern', callS:'China Eastern', des:'CES'},
    {id:'33', airL:'China Southern General', callS:'Aero Eagle', des:'SAG'},
    {id:'34', airL:'China Southern', callS:'China Southern', des:'CSN'},
    {id:'35', airL:'Citilink Indonesia', callS:'Super Green', des:'CTV'},
    {id:'36', airL:'Deta Airlines', callS:'Delta', des:'DAL'},
    {id:'37', airL:'Eastar Jet', callS:'Eastarjet', des:'ESR'}

 ]
 // random
  $('.floated').click(function(){
    whichButton = $(this).attr("id")
    _functions.clear()

  random = data[Math.floor(Math.random()*data.length)]
  newArray.push(random)
  buildNewArray()
    function buildNewArray(){
        if(newArray.length <options || uniqArray.length <options){
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
                if (whichButton == 'random'){
                      oneOfThreeSelect()
                }else if (whichButton == 'designator'){
                    setDesignator()
                }

        }
      }
  });




  function oneOfThreeSelect(){
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
      console.log('random.id Airline', random.id)
    }else if(oneOfThree == 2){ //call sign is the question
      questionId = random.id
      var question = ""+
                  "<div class='question'>"+
                    "<div class='question_block' guess='"+random.id+"'>"+ random.callS+"</div>"+
                  "</div>"
      $('#call_sign').append(question)
      optionsAirlines()
      optionsDesignator()
      console.log('random.id Call Sign', random.id)
    }else if (oneOfThree == 3){ // designator is the question
      setDesignator()

      }
  }

function setDesignator(){
  questionId = random.id
  var question = ""+
              "<div class='question'>"+
                "<div class='question_block' guess='"+random.id+"'>"+ random.des+"</div>"+
              "</div>"
    $('#designator').append(question)
    optionsCallSigns()
    optionsAirlines()
    console.log('random.id Designator', random.id)
}

  function optionsCallSigns(){
    console.log('uniqArray optionsCallSigns:', uniqArray)
    uniqArray.sort(function() {
    return .5 - Math.random();
  });
    for(i = 0; i < uniqArray.length; i++){

      var callReturned= uniqArray[i]
       $(callReturned).each(function(){
          var callOptions = ""+
             "<tr class='option_wrapper'>"+
                "<td class='pad_left'>"+"</td>"+
                    "<td class='options' guess='"+callReturned.id+"'>"+ callReturned.callS+"</td>"+
                "<td class='pad_right' callicon='"+callReturned.id+"'>"+"</td>"+
              "</tr>"+
              "<tr class='spacer'>"+"</tr>"
            $('#call_sign').append(callOptions)
           })
    }
  }

  function optionsAirlines(){
    console.log('uniqueArray options Airlines:', uniqArray)
    uniqArray.sort(function() {
    return .5 - Math.random();
  });
    for(i = 0; i < uniqArray.length; i++){
      var callReturned= uniqArray[i]
      $(callReturned).each(function(){
         var callOptions = ""+
            "<tr class='option_wrapper'>"+
               "<td class='pad_left'>"+"</td>"+
                   "<td class='options' guess='"+callReturned.id+"'>"+ callReturned.airL+"</td>"+
               "<td class='pad_right' airicon='"+callReturned.id+"'>"+"</td>"+
             "</tr>"+
             "<tr class='spacer'>"+"</tr>"
          $('#airline').append(callOptions)
          })

    }
  }

  function optionsDesignator(){
    console.log('uniqArray optionsDesignator', uniqArray)
      uniqArray.sort(function() {
      return .5 - Math.random();
    });

    for(i = 0; i < uniqArray.length; i++){
      var callReturned= uniqArray[i]
      $(callReturned).each(function(){
         var callOptions = ""+
            "<tr class='option_wrapper'>"+
               "<td class='pad_left'>"+"</td>"+
                   "<td class='options' guess='"+callReturned.id+"'>"+ callReturned.des+"</td>"+
               "<td class='pad_right' desicon='"+callReturned.id+"'>"+"</td>"+
             "</tr>"+
             "<tr class='spacer'>"+"</tr>"
          $('#designator').append(callOptions)
          })
    }
  }


$('#airline').delegate('.options', 'click', function(e){
      $('#airline_error').remove()
      $('#airline_correct').remove()
      $('.options').removeClass('airline_selected')
      $('#airline').removeClass('error')
      $('#airline').removeClass('correct')
      $(this).addClass("airline_selected")
      airlineChoiceId =$(this).attr('guess')
      if(questionId != airlineChoiceId){
          $("#airline").addClass('error')
      }else if(questionId == airlineChoiceId){
          $("#airline").addClass('correct')
      }

  })

$('#call_sign').delegate('.options', 'click', function(e){
        $('#callsign_error').remove()
        $('#callsign_correct').remove()
        $('.options').removeClass('call_selected')
        $('#call_sign').removeClass('error')
        $('#call_sign').removeClass('correct')
        _functions.clearCallSign()
        $(this).addClass("call_selected")
        callsignChoiceId =$(this).attr('guess')
        if(questionId != callsignChoiceId){
          $("#call_sign").addClass('error')
        }else if(questionId == callsignChoiceId){
          $("#call_sign").addClass('correct')
        }
    })

$('#designator').delegate('.options', 'click', function(e){
      $('#designator_error').remove()
      $('#designator_correct').remove()
      $('.options').removeClass('des_selected')
      $("#designator").removeClass('correct')
      $("#designator").removeClass('error')
    $(this).addClass("des_selected")
    designatorChoiceId =$(this).attr('guess')
    if(questionId != designatorChoiceId){
      $("#designator").addClass('error')
    }else if(questionId == designatorChoiceId){
      $("#designator").addClass('correct')
    }
})



}); // end doc ready
