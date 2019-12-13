var $ = require('jquery')
var request = require('superagent')

function clear(){
  uniqArray = newArray
  newArray = []
  random = ''
  oneOfThree =''
  question =''
  callOptions = ''
  callReturned = ''
  errorMsg =''
  designator_answer =''
  call_sign_answer =''
  airline_answer =''

  $('.question').remove()
  $('.option_wrapper').remove()
  $('.correct').removeClass()
  $('.error').removeClass()
  $('.spacer').remove()
}

function clearAirline(){
  $('#airline_error').remove()
  $('#airline_correct').remove()
  $('.options').removeClass('airline_selected')
  $('#airline').removeClass('error')
  $('#airline').removeClass('correct')
}

function clearCallSign(){
  $('#callsign_error').remove()
  $('#callsign_correct').remove()
  $('.options').removeClass('call_selected')
  $('#call_sign').removeClass('error')
  $('#call_sign').removeClass('correct')
}

function clearDesignator(){
  $('#designator_error').remove()
  $('#designator_correct').remove()
  $('.options').removeClass('des_selected')
  $("#designator").removeClass('correct')
  $("#designator").removeClass('error')

}

function clearLivery(){
  $('#livery-des').val("")
  $('#livery_question').remove()

}


module.exports = {
      clear:clear,
      clearAirline:clearAirline,
      clearCallSign:clearCallSign,
      clearAirline:clearDesignator,
      clearLivery:clearLivery
  }
