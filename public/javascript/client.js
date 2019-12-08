var $ = require('jquery')
var request = require('superagent')
var _functions = require('./_functions')

newArray = []
newObject ={}
uniqArray =[]
emptyArray =[]
options = 5
score = 0
designator_answer = 'x'
call_sign_answer = 'x'
airline_answer = 'x'

$( document ).ready(function() {
  data=[
    {id:'1', airL:'Aeroflot ', callS:'Aeroflot', des:'AFL'},
{id:'2', airL:'Aerologic', callS:'German Cargo', des:'BOX'},
{id:'3', airL:'Air Hong Kong', callS:'Air Hong Kong', des:'AHK'},
{id:'4', airL:'Air Asia', callS:'Redcap', des:'AXM'},
{id:'5', airL:'Air Astana', callS:'Astanaline', des:'KZR'},
{id:'6', airL:'Air Busan', callS:'Air Busan', des:'ABL'},
{id:'7', airL:'Air Canada', callS:'Air Canada', des:'ACA'},
{id:'8', airL:'Air China', callS:'Air China', des:'CCA'},
{id:'9', airL:'Air France', callS:'Air Frans', des:'AFR'},
{id:'10', airL:'Air India', callS:'Air India', des:'AIC'},
{id:'11', airL:'Air Japan', callS:'Air Japan', des:'AJX'},
{id:'12', airL:'Air Mauritius', callS:'Air Mauritius', des:'MAU'},
{id:'13', airL:'Air New Zealand', callS:'New Zealand', des:'ANZ'},
{id:'14', airL:'Air Niugini', callS:'Niugini', des:'ANG'},
{id:'15', airL:'Fiji Airways', callS:'Fiji', des:'FJI'},
{id:'16', airL:'Airbridge Cargo', callS:'Airbridge Cargo', des:'ABW'},
{id:'17', airL:'All Nippon ', callS:'All Nippon', des:'ANA'},
{id:'18', airL:'American Airlines', callS:'American', des:'AAL'},
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
{id:'36', airL:'Delta Airlines', callS:'Delta', des:'DAL'},
{id:'37', airL:'Eastar Jet', callS:'Eastarjet', des:'ESR'},
{id:'38', airL:'El Al Israel Airlines', callS:'Elal', des:'ELY'},
{id:'39', airL:'Emirates Airlines', callS:'Emirates', des:'UAE'},
{id:'40', airL:'Ethiopian Airlines', callS:'Ethopian', des:'ETH'},
{id:'41', airL:'Etihad Airways', callS:'Ethad', des:'ETD'},
{id:'42', airL:'Eva Airways', callS:'Eva', des:'EVA'},
{id:'43', airL:'Federal Express Corp', callS:'Fedex', des:'FDX'},
{id:'44', airL:'Finnair', callS:'Finnair', des:'FIN'},
{id:'45', airL:'Garuda Indonesia Airways', callS:'Indonesia', des:'GIA'},
{id:'46', airL:'Globus', callS:'Globus', des:'GLP'},
{id:'47', airL:'Hong Kong Air Cargo', callS:'Mascot', des:'HKC'},
{id:'48', airL:'Hong Kong Airlines', callS:'Bauhinia', des:'CRK'},
{id:'49', airL:'DragonAir', callS:'Dragon', des:'HDA'},
{id:'50', airL:'Hong Kong Express', callS:'Hongkong Shuttle', des:'HKE'},
{id:'51', airL:'Japan Airlines', callS:'Japan Air', des:'JAL'},
{id:'52', airL:'Jeju Air', callS:'Jeju Air', des:'JJA'},
{id:'53', airL:'Jet Airways', callS:'Jet Airways', des:'JAI'},
{id:'54', airL:'Jetstar Asia Airways', callS:'Jetstar Asia', des:'JSA'},
{id:'55', airL:'Jetstar Japan', callS:'Orange Liner', des:'JJP'},
{id:'56', airL:'Jin Air', callS:'Jin Air', des:'JNA'},
{id:'57', airL:'Jetstar Pacific Airlines', callS:'Pacific Airlines', des:'PIC'},
{id:'58', airL:'Juneyao Airlines', callS:'Air Juneyao', des:'DKH'},
{id:'59', airL:'Kalitta Air', callS:'Connie', des:'CKS'},
{id:'60', airL:'Kenya Airways', callS:'Kenya', des:'KQA'},
{id:'61', airL:'Klm Royal Dutch', callS:'KLM', des:'KLM'},
{id:'62', airL:'K-Mile Air', callS:'Kay-Mile Air', des:'KMI'},
{id:'63', airL:'Korean Airlines', callS:'Korean Air', des:'KAL'},
{id:'64', airL:'Lufthansa Cargo', callS:'Lufthansa Cargo', des:'GEC'},
{id:'65', airL:'Lufthansa ', callS:'Lufthansa ', des:'DLH'},
{id:'66', airL:'Malaysian Airlines ', callS:'Malaysian', des:'MAS'},
{id:'67', airL:'Malindo Airways', callS:'Malindo', des:'MXD'},
{id:'68', airL:'Mandarin Airways', callS:'Mandarin', des:'MDA'},
{id:'69', airL:'Mega Maldives', callS:'Sandbar', des:'MEG'},
{id:'70', airL:'Mongolian Air (MIAT)', callS:'Mongol Air', des:'MGL'},
{id:'71', airL:'Myanmar National Airlines', callS:'Union Air', des:'UBA'},
{id:'72', airL:'Royal Napal Airlines', callS:'Royal Nepal', des:'RNA'},
{id:'73', airL:'Nippon Cargo Airlines', callS:'Nippon Cargo', des:'NCA'},
{id:'74', airL:'Peach Aviation', callS:'Air Peach', des:'APJ'},
{id:'75', airL:'Philippines Airlines', callS:'Philippines', des:'PAL'},
{id:'76', airL:'Philippines Air Asia', callS:'Zest Airways', des:'EZD'},
{id:'77', airL:'Polar Air Cargo', callS:'Polar', des:'PAC'},
{id:'78', airL:'Lion Mantari', callS:'Lion Inter', des:'LNI'},
{id:'79', airL:'Qantas ', callS:'Qantas', des:'QFA'},
{id:'80', airL:'Qatar', callS:'Qatari', des:'QTR'},
{id:'81', airL:'Raya Airways', callS:'Raya Express', des:'RMY'},
{id:'82', airL:'Royal Brunei', callS:'Brunei', des:'RBA'},
{id:'83', airL:'Royal Jordanian', callS:'Jordanian', des:'RJA'},
{id:'84', airL:'Saudi Arabian', callS:'Saudia', des:'SVA'},
{id:'85', airL:'Scandinavian', callS:'Scandinavian', des:'SAS'},
{id:'86', airL:'Scoot', callS:'Scooter', des:'SCO'},
{id:'87', airL:'Sf Airlines', callS:'Shun Feng', des:'CSS'},
{id:'88', airL:'Shanghai Airlines', callS:'Shanghai Air', des:'CSH'},
{id:'89', airL:'Shenzhen Airlines', callS:'Shenzhen Air', des:'CSZ'},
{id:'90', airL:'Siberia', callS:'Siberian Airlines', des:'SBI'},
{id:'91', airL:'Sichuan Airlines', callS:'Sichuan', des:'CSC'},
{id:'92', airL:'Silkway West', callS:'Silkwest', des:'AZG'},
{id:'93', airL:'Singapore Cargo', callS:'Singcargo', des:'SQC'},
{id:'94', airL:'Singapore', callS:'Singapore', des:'SIA'},
{id:'95', airL:'Sky Lease', callS:'Sky Cube', des:'KYE'},
{id:'96', airL:'South African', callS:'Springbok', des:'SAA'},
{id:'97', airL:'Southern Air', callS:'Souther Air', des:'SOO'},
{id:'98', airL:'Spring Airlines', callS:'Air Spring', des:'CQH'},
{id:'99', airL:'Sri Lankan', callS:'Sri Lankan', des:'ALK'},
{id:'100', airL:'Swiss Airlines', callS:'Swiss', des:'SWR'},
{id:'101', airL:'T-Way Air', callS:'Teeway', des:'TWB'},
{id:'102', airL:'Thai Air Asia', callS:'Thai Asia', des:'AIQ'},
{id:'103', airL:'Thai Airways', callS:'Thai', des:'THA'},
{id:'104', airL:'Tiger Airways', callS:'Go Cat', des:'TGW'},
{id:'105', airL:'TNT', callS:'Quality ', des:'TAY'},
{id:'106', airL:'Turkish Airlines', callS:'Turkish', des:'THY'},
{id:'107', airL:'United Airlines', callS:'United', des:'UAL'},
{id:'108', airL:'United Parcel (UPS)', callS:'UPS', des:'UPS'},
{id:'109', airL:'Vanilla Air', callS:'Vanilla', des:'VNL'},
{id:'110', airL:'Vietjet Airlines', callS:'Vietjetair', des:'VJC'},
{id:'111', airL:'Vietnam Airlines', callS:'Vietnam Airlines', des:'HVN'},
{id:'112', airL:'Virgin Atlantic', callS:'Virign', des:'VIR'},
{id:'113', airL:'Xiamen Airlines', callS:'Xiamen Air', des:'CXA'},
{id:'114', airL:'Yangtze River Express', callS:'Yangtze River', des:'YZR'},
{id:'115', airL:'Air Macau', callS:'Air Macau', des:'AMU'},
{id:'116', airL:'Air China Cargo', callS:'Airchina Freight', des:'CAO'},
{id:'117', airL:'Martinair Holland', callS:'Martinair ', des:'MPH'},
{id:'118', airL:'Far Eastern Air', callS:'Far Easter', des:'FEA'},
{id:'119', airL:'China Ocean Helicopter', callS:'China Helicopter/CHC', des:'CHC'},
{id:'120', airL:'East Asia Airlines', callS:'East Asia', des:'EMU'},
{id:'121', airL:'Gulf Air', callS:'Gulf Air', des:'GFA'},
{id:'122', airL:'Government Flying Service', callS:'HongKong Government', des:'HKG'},
{id:'123', airL:'Metrojet', callS:'Metrojet', des:'MTJ'},
{id:'124', airL:'Air Mobility Command (USA)', callS:'Reach', des:'RCH'},
{id:'125', airL:'TAG Avaiation', callS:'TAG Jet', des:'TBJ'}
 ]
 // random
  $('.floated').click(function(){
    whichButton = $(this).attr("value")
    console.log("whichButton::", whichButton)
    scoring()
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
                }else if (whichButton == 'airline'){
                    setAirline()
                }else if (whichButton == 'callsign'){
                    setCallSign()
                }
        }
      }
  });




  function oneOfThreeSelect(){
    oneOfThree = Math.floor(Math.random() * 3) + 1;
    if(oneOfThree == 1){ //airline is the question
      setAirline()
    }else if(oneOfThree == 2){ //call sign is the question
      setCallSign()
    }else if (oneOfThree == 3){ // designator is the question
      setDesignator()

      }
  }

function setAirline(){
  questionId = random.id
  var question = ""+
              "<div class='question'>"+
                "<div class='question_block' guess='"+random.id+"'>"+ random.airL+"</div>"+
              "</div>"
  $('#airline').append(question)
  optionsCallSigns()
  optionsDesignator()
  console.log('random.id Airline', random.id)
}

function setCallSign(){
  questionId = random.id
  var question = ""+
              "<div class='question'>"+
                "<div class='question_block' guess='"+random.id+"'>"+ random.callS+"</div>"+
              "</div>"
  $('#call_sign').append(question)
  optionsAirlines()
  optionsDesignator()
  console.log('random.id Call Sign', random.id)
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
        score = 0
      }else if(questionId == airlineChoiceId){
          $("#airline").addClass('correct')
          airline_answer = 'correct'
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
         score = 0
        }else if(questionId == callsignChoiceId){
          $("#call_sign").addClass('correct')
         call_sign_answer = 'correct'
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
      score =0
    }else if(questionId == designatorChoiceId){
      $("#designator").addClass('correct')
      designator_answer = 'correct'
    }
})

function scoring(){
if(designator_answer == 'x' && call_sign_answer =='x' && airline_answer == 'x'){
      score = 0
      $('#the-score').text(score)
}else if(designator_answer == '' && call_sign_answer =='' && airline_answer == ''){
          score = 0
          $('#the-score').text(score)
}else if(designator_answer != 'x' && call_sign_answer !='x' && airline_answer != 'x'){
    score++
    $('#the-score').text(score)
  }

}

function htmlForDesignator(){

  var designatorChosen = ""+
  "<div id='designator_chosen'>"+
  	"<div>"+
  		  "<div id='the-score' class='score-heading'>"+"</div>"+
  		  "<div class = 'spacer-heading'>"+"</div>"+
  		  "<div class='airline-heading'>"+"Airline"+"</div>"+
  	"</div>"+
  	"<div id='airline'>"+"</div>"+

  	"<div id='call_sign'>"+
  		  "<div class='heading'>"+"Call Sign"+"</div>"+
  	"</div>"+

  	"<div id='designator'>"+
  		"<div class='heading'>"+"Designator"+"</div>"+
  	"</div>"+
  	"</div>"+
  "</div>"

$("#test_selected").html(designatorChosen)
}


}); // end doc ready
