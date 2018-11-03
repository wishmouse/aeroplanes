var $ = require('jquery')
var request = require('superagent')
var _database = require('./_database')

newArray = []
newObject ={}
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


  var random = data[Math.floor(Math.random()*data.length)]
  console.log('random:: '+random)
  newArray.push(random)
  buildNewArray()
  /*var arry1 =data.splice( data.indexOf('random'), 1 )
  console.log('arry1:: '+ arry1)*/
    function buildNewArray(){
        if(newArray.length <6 || uniqArray.length <6){
          opt1 = data[Math.floor(Math.random()*data.length)]
            newArray.push(opt1)
            uniqArray = newArray.reduce(function(a,b){
              if (a.indexOf(b) < 0 ) a.push(b);
              return a;
            },[]);
            console.log("newArray with duplicates::", uniqArray)
            buildNewArray()
        }else{
          console.log(uniqArray)
        }
    }


  });
}); // end doc ready
