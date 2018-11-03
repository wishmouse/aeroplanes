var $ = require('jquery')
var request = require('superagent')
//var _functions = require('./_functions')

newArray = []
newObject ={}
uniqArray =[]
uniqArray =[]

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
      var question = ""+
                  "<tr class='question'>"+
                    "<td class='question_block' value='"+random.id+"'>"+ random.airL+"</td>"+
                  "</div>"
      $('#airline').append(question)
      optionsCallSigns()
      optionsDesignator()
      console.log(random.airL)
    }else if(oneOfThree == 2){ //call sign is the question
      var question = ""+
                  "<tr class='question'>"+
                    "<td class='question_block' value='"+random.id+"'>"+ random.callS+"</td>"+
                  "</div>"
      $('#call_sign').append(question)
      optionsAirlines()
      optionsDesignator()
      console.log(random.callS)
    }else if (oneOfThree == 3){ // designator is the question
      var question = ""+
                  "<tr class='question'>"+
                    "<td class='question_block' value='"+random.id+"'>"+ random.des+"</td>"+
                  "</div>"
        $('#designator').append(question)
        optionsCallSigns()
        optionsAirlines()
        console.log(random.des)
      }
  }

  function optionsCallSigns(){
    console.log('uniqArray:', uniqArray)
    for(i = 0; i < uniqArray.length; i++){

      var callReturned= uniqArray[i]
      $(callReturned).each(function(){
        var callOptions = ""+
                    "<tr class='question'>"+
                      "<td class='option_block' value='"+callReturned.id+"'>"+ callReturned.callS+"</td>"+
                    "</div>"
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
                    "<div class='question'>"+
                      "<div class='option_block' value='"+callReturned.id+"'>"+ callReturned.airL+"</td>"+
                    "</div>"
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
                    "<div class='question'>"+
                      "<div class='option_block' value='"+callReturned.id+"'>"+ callReturned.des+"</td>"+
                    "</div>"
                    $('#designator').append(callOptions)
         })
    }
  }


}); // end doc ready
