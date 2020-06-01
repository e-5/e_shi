// 2020.06.01
const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
app.get('/',(req,res)=>{
  res.sendFile(__dirname.slice(0,-4) + '/static/src/index.html')
})
this.uids = [11,22,33]

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  })
  socket.on('test',(e)=>{
    console.log(this)
    io.emit('serverMsg',{value: e,uid:'tt'})
  })
})


http.listen(54088, ()=>{
  console.log('listen success')
})