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
  $('#livery_wrapper').hide()

data=[
{id:'1', airL: 'Air Arabia', callS: 'AIR ARABIA', des: 'ABY'},
{id:'2', airL: 'Air India Ltd, callS: 'AIR INDIA', des: 'AIC'},
{id:'3', airL: 'British Airways', callS: 'SPEEDBIRD', des: 'BAW'},
{id:'4', airL: 'Lufthansa', callS: 'LUFTHANSA', des: 'DLH'},
{id:'5', airL: 'Etihad Airways', callS: 'ETIHAD', des: 'ETD'},
{id:'6', airL: 'Fly Dubai', callS: 'SKYDUBAI', des: 'FDB'},
{id:'7', airL: 'Gulf Air', callS: 'GULF AIR, des: 'GFA'},
{id:'8', airL: 'Indian Airlines', callS: 'INDAIR', des: 'IAC'},
{id:'9', airL: 'Iraq Airways', callS: 'IRAQI', des: 'IAW'},
{id:'10', airL: 'Iran Air', callS: 'IRANAIR', des: 'IRA'},
{id:'11', airL: 'Iran Aseman', callS: 'ASEMAN', des: 'IRC'},
{id:'12', airL: 'KISH AIR', callS: 'KISHAIR', des: 'IRK'},
{id:'13', airL: 'Mahan Air', callS: 'MAHAN AIR', des: 'IRM'},
{id:'14', airL: 'Qeshm Air', callS: 'QESHAM AIR', des: 'IRQ'},
{id:'15', airL: 'Royal Dutch Airlines', callS: 'KLM', des: 'KLM'},
{id:'16', airL: 'UAE Airforce', callS: 'NAJIM', des: 'NJM'},
{id:'17', airL: 'Oman Air', callS: 'OMANAIR', des: 'OMA'},
{id:'18', airL: 'Pakistan International Airlines', callS: 'PAKISTAN', des: 'PIA'},
{id:'19', airL: 'Reach', callS: 'REACH', des: 'RCH'},
{id:'20', airL: 'Royal Air Force', callS: 'ASCOT', des: 'RRR'},
{id:'21', airL: 'UAE Airforce, callS: 'SUHAIL', des: 'SHL'},
{id:'22', airL: 'Saudia Airlines', callS: 'SAUDI', des: 'SVA'},
{id:'23', airL: 'Skyways Express', callS: SKYEXPRESS', des: 'SKX'},
{id:'24', airL: 'Emirates Airlines', callS: 'EMIRATES', des: 'UAE'},
{id:'25', airL: 'Virgin Atlantic', callS: 'VIRGIN', des: 'VIR'}
]
  data2=[
    {id:'1', airL:'Aeroflot ', callS:'Aeroflot', des:'AFL', img:''},
    {id:'2', airL:'Aerologic', callS:'German Cargo', des:'BOX', img:''},
    {id:'3', airL:'Air Hong Kong', callS:'Air Hong Kong', des:'AHK', img:''},
    {id:'4', airL:'Air Asia', callS:'Redcap', des:'AXM', img:''},
    {id:'5', airL:'Air Astana', callS:'Astanaline', des:'KZR', img:''},
    {id:'6', airL:'Air Busan', callS:'Air Busan', des:'ABL', img:''},
    {id:'7', airL:'Air Canada', callS:'Air Canada', des:'ACA', img:''},
    {id:'8', airL:'Air China', callS:'Air China', des:'CCA', img:''},
    {id:'9', airL:'Air France', callS:'Air Frans', des:'AFR', img:''},
    {id:'10', airL:'Air India', callS:'Air India', des:'AIC', img:''},
    {id:'11', airL:'Air Japan', callS:'Air Japan', des:'AJX', img:''},
    {id:'12', airL:'Air Mauritius', callS:'Air Mauritius', des:'MAU', img:''},
    {id:'13', airL:'Air New Zealand', callS:'New Zealand', des:'ANZ', img:''},
    {id:'14', airL:'Air Niugini', callS:'Niugini', des:'ANG', img:''},
    {id:'15', airL:'Fiji Airways', callS:'Fiji', des:'FJI', img:''},
    {id:'16', airL:'Airbridge Cargo', callS:'Airbridge Cargo', des:'ABW', img:''},
    {id:'17', airL:'All Nippon ', callS:'All Nippon', des:'ANA', img:''},
    {id:'18', airL:'American Airlines', callS:'American', des:'AAL', img:''},
    {id:'19', airL:'Asiana Airlines', callS:'Asiana', des:'AAR', img:''},
    {id:'20', airL:'Atlas Air', callS:'Giant', des:'GTI', img:''},
    {id:'21', airL:'Aurora Airlines', callS:'Aurora', des:'SHU', img:''},
    {id:'22', airL:'Austrian Airlines', callS:'Austrian', des:'AUA', img:''},
    {id:'23', airL:'Bangkok Airways', callS:'Bankock Air', des:'BKP', img:''},
    {id:'24', airL:'Bishmillah Airlines', callS:'Bishmillah', des:'BML', img:''},
    {id:'25', airL:'British Airlines', callS:'Speedbird', des:'BAW', img:''},
    {id:'26', airL:'Cargolux Airlines', callS:'Cargolux ', des:'CLX', img:''},
    {id:'27', airL:'Cargolux Italia', callS:'Cargolux Italia', des:'ICV', img:''},
    {id:'28', airL:'Cathay Pacific', callS:'Cathay', des:'CPA', img:''},
    {id:'29', airL:'Cebu Pacific', callS:'Cebu Air', des:'CEB', img:''},
    {id:'30', airL:'China Airlines', callS:'Dynasty', des:'CAL', img:''},
    {id:'31', airL:'China Cargo', callS:'Cargo King', des:'CKK', img:''},
    {id:'32', airL:'China Eastern', callS:'China Eastern', des:'CES', img:''},
    {id:'33', airL:'China Southern General', callS:'Aero Eagle', des:'SAG', img:''},
    {id:'34', airL:'China Southern', callS:'China Southern', des:'CSN', img:''},
    {id:'35', airL:'Citilink Indonesia', callS:'Super Green', des:'CTV', img:''},
    {id:'36', airL:'Delta Airlines', callS:'Delta', des:'DAL', img:''},
    {id:'37', airL:'Eastar Jet', callS:'Eastarjet', des:'ESR', img:''},
    {id:'38', airL:'El Al Israel Airlines', callS:'Elal', des:'ELY', img:''},
    {id:'39', airL:'Emirates Airlines', callS:'Emirates', des:'UAE', img:''},
    {id:'40', airL:'Ethiopian Airlines', callS:'Ethopian', des:'ETH', img:''},
    {id:'41', airL:'Etihad Airways', callS:'Ethad', des:'ETD', img:''},
    {id:'42', airL:'Eva Airways', callS:'Eva', des:'EVA', img:''},
    {id:'43', airL:'Federal Express Corp', callS:'Fedex', des:'FDX', img:''},
    {id:'44', airL:'Finnair', callS:'Finnair', des:'FIN', img:''},
    {id:'45', airL:'Garuda Indonesia Airways', callS:'Indonesia', des:'GIA', img:''},
    {id:'46', airL:'Globus', callS:'Globus', des:'GLP', img:''},
    {id:'47', airL:'Hong Kong Air Cargo', callS:'Mascot', des:'HKC', img:''},
    {id:'48', airL:'Hong Kong Airlines', callS:'Bauhinia', des:'CRK', img:''},
    {id:'49', airL:'DragonAir', callS:'Dragon', des:'HDA', img:''},
    {id:'50', airL:'Hong Kong Express', callS:'Hongkong Shuttle', des:'HKE', img:''},
    {id:'51', airL:'Japan Airlines', callS:'Japan Air', des:'JAL', img:''},
    {id:'52', airL:'Jeju Air', callS:'Jeju Air', des:'JJA', img:''},
    {id:'53', airL:'Jet Airways', callS:'Jet Airways', des:'JAI', img:''},
    {id:'54', airL:'Jetstar Asia Airways', callS:'Jetstar Asia', des:'JSA', img:''},
    {id:'55', airL:'Jetstar Japan', callS:'Orange Liner', des:'JJP', img:''},
    {id:'56', airL:'Jin Air', callS:'Jin Air', des:'JNA', img:''},
    {id:'57', airL:'Jetstar Pacific Airlines', callS:'Pacific Airlines', des:'PIC', img:''},
    {id:'58', airL:'Juneyao Airlines', callS:'Air Juneyao', des:'DKH', img:''},
    {id:'59', airL:'Kalitta Air', callS:'Connie', des:'CKS', img:''},
    {id:'60', airL:'Kenya Airways', callS:'Kenya', des:'KQA', img:''},
    {id:'61', airL:'Klm Royal Dutch', callS:'KLM', des:'KLM', img:''},
    {id:'62', airL:'K-Mile Air', callS:'Kay-Mile Air', des:'KMI', img:''},
    {id:'63', airL:'Korean Airlines', callS:'Korean Air', des:'KAL', img:''},
    {id:'64', airL:'Lufthansa Cargo', callS:'Lufthansa Cargo', des:'GEC', img:''},
    {id:'65', airL:'Lufthansa ', callS:'Lufthansa ', des:'DLH', img:''},
    {id:'66', airL:'Malaysian Airlines ', callS:'Malaysian', des:'MAS', img:''},
    {id:'67', airL:'Malindo Airways', callS:'Malindo', des:'MXD', img:''},
    {id:'68', airL:'Mandarin Airways', callS:'Mandarin', des:'MDA', img:''},
    {id:'69', airL:'Mega Maldives', callS:'Sandbar', des:'MEG', img:''},
    {id:'70', airL:'Mongolian Air (MIAT)', callS:'Mongol Air', des:'MGL', img:''},
    {id:'71', airL:'Myanmar National Airlines', callS:'Union Air', des:'UBA', img:''},
    {id:'72', airL:'Royal Napal Airlines', callS:'Royal Nepal', des:'RNA', img:''},
    {id:'73', airL:'Nippon Cargo Airlines', callS:'Nippon Cargo', des:'NCA', img:''},
    {id:'74', airL:'Peach Aviation', callS:'Air Peach', des:'APJ', img:''},
    {id:'75', airL:'Philippines Airlines', callS:'Philippines', des:'PAL', img:''},
    {id:'76', airL:'Philippines Air Asia', callS:'Zest Airways', des:'EZD', img:''},
    {id:'77', airL:'Polar Air Cargo', callS:'Polar', des:'PAC', img:'../styles/PAC.jpg'},
    {id:'78', airL:'Lion Mantari', callS:'Lion Inter', des:'LNI', img:'../styles/LNI.jpg'},
    {id:'79', airL:'Qantas ', callS:'Qantas', des:'QFA', img:'../styles/QFA.jpg'},
    {id:'80', airL:'Qatar', callS:'Qatari', des:'QTR', img:'../styles/QTR.jpg'},
    {id:'81', airL:'Raya Airways', callS:'Raya Express', des:'RMY', img:'../styles/RMY.jpg'},
    {id:'82', airL:'Royal Brunei', callS:'Brunei', des:'RBA', img:'../styles/RBA.jpg'},
    {id:'83', airL:'Royal Jordanian', callS:'Jordanian', des:'RJA', img:'../styles/RJA.jpg'},
    {id:'84', airL:'Saudi Arabian', callS:'Saudia', des:'SVA', img:'../styles/SVA.jpg'},
    {id:'85', airL:'Scandinavian', callS:'Scandinavian', des:'SAS', img:'../styles/SAS.jpg'},
    {id:'86', airL:'Scoot', callS:'Scooter', des:'SCO', img:'../styles/SCO.jpg'},
    {id:'87', airL:'SF Airlines', callS:'Shun Feng', des:'CSS', img:'../styles/CSS.jpg'},
    {id:'88', airL:'Shanghai Airlines', callS:'Shanghai Air', des:'CSH', img:'../styles/CSH.jpg'},
    {id:'89', airL:'Shenzhen Airlines', callS:'Shenzhen Air', des:'CSZ', img:'../styles/CSZ.jpg'},
    {id:'90', airL:'Siberia', callS:'Siberian Airlines', des:'SBI', img:'../styles/SBI.jpg'},
    {id:'91', airL:'Sichuan Airlines', callS:'Sichuan', des:'CSC', img:'../styles/CSC.jpg'},
    {id:'92', airL:'Silkway West', callS:'Silkwest', des:'AZG', img:'../styles/AZG.jpg'},
    {id:'93', airL:'Singapore Cargo', callS:'Singcargo', des:'SQC', img:'../styles/SQC.jpg'},
    {id:'94', airL:'Singapore', callS:'Singapore', des:'SIA', img:''},
    {id:'95', airL:'Sky Lease', callS:'Sky Cube', des:'KYE', img:''},
    {id:'96', airL:'South African', callS:'Springbok', des:'SAA', img:''},
    {id:'97', airL:'Southern Air', callS:'Souther Air', des:'SOO', img:''},
    {id:'98', airL:'Spring Airlines', callS:'Air Spring', des:'CQH', img:''},
    {id:'99', airL:'Sri Lankan', callS:'Sri Lankan', des:'ALK', img:''},
    {id:'100', airL:'Swiss Airlines', callS:'Swiss', des:'SWR', img:''},
    {id:'101', airL:'T-Way Air', callS:'Teeway', des:'TWB', img:''},
    {id:'102', airL:'Thai Air Asia', callS:'Thai Asia', des:'AIQ', img:''},
    {id:'103', airL:'Thai Airways', callS:'Thai', des:'THA', img:''},
    {id:'104', airL:'Tiger Airways', callS:'Go Cat', des:'TGW', img:''},
    {id:'105', airL:'TNT', callS:'Quality ', des:'TAY', img:''},
    {id:'106', airL:'Turkish Airlines', callS:'Turkish', des:'THY', img:''},
    {id:'107', airL:'United Airlines', callS:'United', des:'UAL', img:''},
    {id:'108', airL:'United Parcel (UPS)', callS:'UPS', des:'UPS', img:''},
    {id:'109', airL:'Vanilla Air', callS:'Vanilla', des:'VNL', img:''},
    {id:'110', airL:'Vietjet Airlines', callS:'Vietjetair', des:'VJC', img:''},
    {id:'111', airL:'Vietnam Airlines', callS:'Vietnam Airlines', des:'HVN', img:''},
    {id:'112', airL:'Virgin Atlantic', callS:'Virign', des:'VIR', img:''},
    {id:'113', airL:'Xiamen Airlines', callS:'Xiamen Air', des:'CXA', img:''},
    {id:'114', airL:'Yangtze River Express', callS:'Yangtze River', des:'YZR', img:''},
    {id:'115', airL:'Air Macau', callS:'Air Macau', des:'AMU', img:''},
    {id:'116', airL:'Air China Cargo', callS:'Airchina Freight', des:'CAO', img:''},
    {id:'117', airL:'Martinair Holland', callS:'Martinair ', des:'MPH', img:''},
    {id:'118', airL:'Far Eastern Air', callS:'Far Easter', des:'FEA', img:''},
    {id:'119', airL:'China Ocean Helicopter', callS:'China Helicopter/CHC', des:'CHC', img:''},
    {id:'120', airL:'East Asia Airlines', callS:'East Asia', des:'EMU', img:''},
    {id:'121', airL:'Gulf Air', callS:'Gulf Air', des:'GFA', img:''},
    {id:'122', airL:'Government Flying Service', callS:'HongKong Government', des:'HKG', img:''},
    {id:'123', airL:'Metrojet', callS:'Metrojet', des:'MTJ', img:''},
    {id:'124', airL:'Air Mobility Command (USA)', callS:'Reach', des:'RCH', img:''},
    {id:'125', airL:'TAG Avaiation', callS:'TAG Jet', des:'TBJ', img:''},

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
                    showAllHeadings()
                    setDesignator()
                }else if (whichButton == 'airline'){
                    showAllHeadings()
                    setAirline()
                }else if (whichButton == 'callsign'){
                   showAllHeadings()
                    setCallSign()
                }else if (whichButton == 'livery'){
                   hideOtherHeadings()
                   setLivery()
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

function setLivery(){
_functions.clearLivery()
hasImage()
liveryQuestion = "<img id='livery_question' class='center_image' height='300px' width= '300px'src='"+randomImage.img+"'>"
  $("#livery_image").append(liveryQuestion)
  console.log('random.livery', randomImage.img)
}

function hasImage(){
  filteredImage = data.filter(data => data.img.length >1)
  randomImage = filteredImage[Math.floor(Math.random()*filteredImage.length)]
  console.log('randomImage', randomImage)

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

  $("#submit" ).click(function() {
   liveryAnswer = $("#livery-des").val().toUpperCase()
   console.log('liveryAnswer', liveryAnswer)
    console.log('randomImage.des', randomImage.des)
   if(liveryAnswer == randomImage.des){
     $("#livery_wrapper").attr('class', 'correct')
   }else if(liveryAnswer !=randomImage.des){
     $("#livery_wrapper").attr('class', 'error')
   }
});

  $("#hint" ).click(function() {
    $("#hint_wrapper").show()
    isAValue = $("#hint_answer").html()
    if(isAValue == ""){
      firstLetter = randomImage.des.charAt(0)
      $("#hint_answer").html(firstLetter)
    } else if(isAValue != ''){
      $("#hint_answer").val('')
      $("#hint_answer").html(randomImage.des)
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

function hideOtherHeadings(){
  $('.airline-heading').hide()
  $('.spacer-heading').hide()
  $('#airline').hide()
  $("#call_sign").hide()
  $('#designator').hide()
  $('#livery_wrapper').show()
  $("#the-score").hide()
}

function showAllHeadings(){
    $('#livery_wrapper').hide()
  $('.airline-heading').show()
  $('.spacer-heading').show()
  $('#airline').show()
  $("#call_sign").show()
  $('#designator').show()
}


}); // end doc ready
