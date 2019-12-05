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
{id:'1', airL:'Aeroflot Russian', callS:'AFL', des:'Aeroflot'},
{id:'2', airL:'Aerologic', callS:'BOX', des:'German Cargo'},
{id:'3', airL:'Air Hong Kong', callS:'AHK', des:'Air Hong Kong'},
{id:'4', airL:'Air Asia Berhad', callS:'AXM', des:'Redcap'},
{id:'5', airL:'Air Astana', callS:'KZR', des:'Astanaline'},
{id:'6', airL:'Air Busan', callS:'ABL', des:'Air Busan'},
{id:'7', airL:'Air Canada', callS:'ACA', des:'Air Canada'},
{id:'8', airL:'Air china', callS:'CCA', des:'Air china'},
{id:'9', airL:'Air France', callS:'AFR', des:'Air Frans'},
{id:'10', airL:'Air India', callS:'AIC', des:'Air India'},
{id:'11', airL:'Air Japan', callS:'AJX', des:'Air Japan'},
{id:'12', airL:'Air Mauritius', callS:'MAU', des:'Air Mauritius'},
{id:'13', airL:'Air New Zealand', callS:'ANZ', des:'Air New Zealand'},
{id:'14', airL:'Air Niugini', callS:'ANG', des:'Niugini'},
{id:'15', airL:'Air Pacific', callS:'FJI', des:'Fiji'},
{id:'16', airL:'Airbridge Cargo', callS:'ABW', des:'Airbridge Cargo'},
{id:'17', airL:'All Nippon ', callS:'ANA', des:'All Nippon'},
{id:'18', airL:'American Airlines', callS:'AAL', des:'America'},
{id:'19', airL:'Asiana Airlines', callS:'AAR', des:'Asiana'},
{id:'20', airL:'Atlas Air', callS:'GTI', des:'Giant'},
{id:'21', airL:'Aurora Airlines', callS:'SHU', des:'Aurora'},
{id:'22', airL:'Austrian Airlines', callS:'AUA', des:'Austrian'},
{id:'23', airL:'Bangkok Airways', callS:'BKP', des:'Bankock Air'},
{id:'24', airL:'Bishmillah Airlines', callS:'BML', des:'Bishmillah'},
{id:'25', airL:'British Airlines', callS:'BAW', des:'Speedbird'},
{id:'26', airL:'Cargolux Airlines', callS:'CLX', des:'Cargolux '},
{id:'27', airL:'Cargolux Italia', callS:'ICV', des:'Cargolux Italia'},
{id:'28', airL:'Cathay Pacific', callS:'CPA', des:'Cathay'},
{id:'29', airL:'Cebu Pacific', callS:'CEB', des:'Cebu Air'},
{id:'30', airL:'China Airlines', callS:'CAL', des:'Dynasty'},
{id:'31', airL:'China Cargo', callS:'CKK', des:'Cargo King'},
{id:'32', airL:'China Eastern', callS:'CES', des:'China Eastern'},
{id:'33', airL:'China Southern General', callS:'SAG', des:'Aero Eagle'},
{id:'34', airL:'China Southern', callS:'CSN', des:'China Southern'},
{id:'35', airL:'Citilink Indonesia', callS:'CTV', des:'Super Green'},
{id:'36', airL:'Deta Airlines', callS:'DAL', des:'Delta'},
{id:'37', airL:'Eastar Jet', callS:'ESR', des:'Eastarjet'}
 ]

  $('#new').click(function(){
    _functions.clear()

  random = data[Math.floor(Math.random()*data.length)]
  newArray.push(random)
  buildNewArray()
    function buildNewArray(){
        if(newArray.length <options || uniqArray.length <options){
          opt1 = data[Math.floor(Math.random()*data.length)]
            newArray.push(opt1)
            console.log("newArray:",newArray);
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
                oneOfThreeSelect()
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
                  "<div class='question'>"+
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
    console.log('uniqueArray:', uniqArray)
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
    console.log('uniqArray', uniqArray)
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
