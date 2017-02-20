var PORT=process.env.PORT || 3000
var express=require('express');
var morgan=require('morgan');
var API='/api/whoami'
var app=express();

app.use(morgan('dev'));
app.get(API,function (req, res){
  var language=req.headers['accept-language'];
var userAgent=req.headers['user-agent'];
var IPAddress=req.headers['x-forwarded-for'];
  console.log(req);

  res.json({language: language, userAgent: userAgent, IPAddress: IPAddress});
})
app.listen(PORT, function(){
  console.log('listening to port '+ PORT);

});
