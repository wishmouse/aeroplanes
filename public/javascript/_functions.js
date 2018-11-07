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

  $('.question').remove()
  $('.options').remove()
  $('.correct').remove()
}



module.exports = {
      clear:clear
  }
