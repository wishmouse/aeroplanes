var PORT = process.env.PORT || 3000
var express = require('express')
var app = express()
var path = require('path')
var bodyParser = require('body-parser')
var cons = require('consolidate')
var request = require('superagent')
// view engine setup
app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'html')

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function(req, res){
  res.render("index")
})


app.listen(PORT, function(){
  console.log("pushing tin .... 3000")
})

module.exports = app
