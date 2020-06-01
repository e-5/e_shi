// 2020.06.01
const app = require('express')()
const http = require('http').createServer(app)
app.get('/',(req,res)=>{
  res.sendFile(__dirname.slice(0,-4) + '/static/src/index.html')
})
http.listen(54088, ()=>{
  console.log('listen success')
})