var express = require('express')
var app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'pug')
var strftime = require('strftime')
app.set('port', (process.env.PORT || 8080))


app.get('/', function (req, res) {
//   res.send('Hello World!, its me again, and again from nodemon')
    res.render('index', {time: 'january 20th, 2017'})
})

app.get('/*', (req, res) => {
  var q = req.url.substr(1)
  q = q.replace(/%20/g, ' ')
  var result = strftime('%B %d, %Y', new Date(q))
  var result2 = new Date(q).getTime()
  res.send({unix: result2, natural: result})
})

// app.listen(8080, function () {
//   console.log('Example app listening on port 8080!')
// })
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
