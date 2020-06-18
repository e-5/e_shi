const ws = require("nodejs-websocket");
const moment = require('moment');


let users = [];
const conns = {}

function broadcast(obj){
  if(obj.bridge && obj.bridge.length) {
    obj.bridge.forEach(item => {
      // item uid
      conns[item] && conns[item].sendText(JSON.stringify(obj))
    })
    return
  }
  server.connections.forEach(item => {
    item.sendText(JSON.stringify(obj));
  })
}
function getDate() {
  return moment().format('YYYY-MM-DD HH:mm:ss')
}
const server = ws.createServer(function (conn) {
  conn.on("text", function (par) {
    try {
      par = JSON.parse(par)
    } catch (error) {
      par = par
    }
    conns[`${par.uid}`] = conn
    if(par.type == 1) {
      let isUser = users.forEach(item => item.uid == par.uid)
      if(!isUser)
      users.push({
        nickName: par.nickName,
        uid: par.uid
      })
      broadcast({
        type: 1,
        date: getDate(),
        msg: par.nickName + '加入聊天室',
        users,
        uid: par.uid,
        nickName: par.nickName,
        // bridge [] 存着目标id  例如uid  获取qid
        bridge: par.bridge || [],
      })
    } else if(par.type == 2) {
      broadcast({
        type: 2,
        date: getDate(),
        msg: par.msg,
        uid: par.uid,
        nickName: par.nickName,
        bridge: par.bridge || [],
      })
    }
  });
  conn.on("close", function (code, reason) {
    console.log("关闭连接")
    console.log(code)
    console.log(reason)
    if(reason.uid) {
      let _i
      for(let i in users) {
        if(users[i].uid == reason.uid) {
          _i = i
        }
      }
      if(_i) {
        users.splice(_i,1)
      }
      conns[reason.uid] && delete conns[reason.uid] 
    }
  });
  conn.on("error", function (code, reason) {
    console.log("异常关闭")
    console.log(code)
    console.log(reason)
  })
}).listen(8001);
console.log("链接建立完毕");