
var app = require('express')();
var fs = require('fs')
app.listen(1234);
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.get('/',(req,res)=>{
  var index = fs.readFileSync('_index.html')
  res.end(index)
})

app.get('/api',(req,res)=>{
  fun((e)=>{
    res.write(e)
  })
  setTimeout(() => {
    res.end()
    console.log(1)
  }, 1000*10);
})

function fun(fn){
  for(let i = 0;i < 10; i++) {
    setTimeout(() => {
      fn('e_'+i)
    }, 1000);
  }
}