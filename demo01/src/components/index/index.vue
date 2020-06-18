<template>
  <div class="test3">
    <div class="msg" ref="box">
        <div v-for="(item,index) in list" :key="index" :class="[item.isR ? 'mine' : 'msg-item', item.type == 1 && 'title']">
          <p>{{item.msg}}</p>
        </div>
    </div>
    <div class="input-group">
      <input type="text" v-model="contentText" @keydown="(e)=>{if(e.keyCode == 13) sendText()}"/>
      <button @click="sendText()">发送</button>
    </div>
    <div class="fff" v-if="showName">
      <input type="text" placeholder="请输入昵称" v-model="nickName">
      <div class="loginBtn" @click="login">加入</div>
    </div>
  </div>
</template>
 
<script>
import moment from 'moment'
export default {
  name: "index3",
  data() {
    return {
      list: [], //聊天记录的数组
      contentText: "", //input输入的值
      ws: null, // websocket 实例
      uid: '',
      nickName: '',
      showName: true,
    };
  },
  methods: {
    //发送聊天信息
    sendText(obj = null) {
      if(!obj) {
        obj = {}
        obj['uid'] = this.uid
        obj['nickName'] = this.nickName
        obj['type'] = 2
        obj['msg'] = this.contentText
      }
      console.log(obj)

      this.ws.send(JSON.stringify(obj))
      !obj && (this.list = [...this.list, obj])
      this.contentText = ''
    },
    initSocket(){
      if (window.WebSocket) {
        this.ws = new WebSocket(this.$socketURL);
        const ws = this.ws
        const obj = {type: 1}
        // if(this.$local['uid']) {
        //   obj.uid = this.$local['uid']
        //   obj.nickName = this.$local['nickName']
        // } else {
          this.$local['uid'] = obj.uid = 'e_shi_' + (new Date().getTime())
          this.$local['nickName'] = obj.nickName = this.nickName
        // }
        ws.onopen = (e) => {
          this.sendText(obj)
        };
        ws.onclose = function(e) {
          console.log("服务器关闭");
        };
        ws.onerror = function() {
          console.log("服务器出错");
        };
        ws.onmessage = (e) => {
          this.getMessage(e)
        };
      }
    },
    getMessage(msg){
      try {
        msg = JSON.parse(msg.data)
      } catch (error) {
        msg = msg
      }
      console.log(msg)
      msg.isR = msg.nickName == this.nickName
      this.list = [...this.list, msg]
    },
    login(){
      this.initSocket()
      this.showName = false
    },
  },
  watch: {
    //监听list,当有修改的时候进行div的屏幕滚动，确保能看到最新的聊天
    list: function() {
      let that = this;
      setTimeout(() => {
        that.$refs.box.scrollTop = that.$refs.box.scrollHeight;
      }, 0);
      //加setTimeout的原因：由于vue采用虚拟dom，我每次生成新的消息时获取到的div的scrollHeight的值是生成新消息之前的值，所以造成每次都是最新的那条消息被隐藏掉了
    }
  },
  mounted() {
    if(this.$local['uid']) {
      return
      this.showName = false
      this.uid = this.$local['uid']
      this.nickName = this.$local['nickName']
      this.initSocket()
    }
  },
  //close
  beforeDestroy(){
    this.ws.close(1000, {uid: this,uid})
  }
};
</script>
 
<style scoped>
.test3 {
  width: 100%;
  height: 500px;
  text-align: center;
}

.msg {
  width: 100%;
  height: 500px;
  overflow: auto;
  padding-top: 5px;
  border: 1px solid red;
  margin-bottom: 6px;
  display: flex;
  flex-direction: column;
}
.msg .msg-item {
  position: relative;
  overflow: hidden;
}
.msg .mine p {
  float: right;
  background: aquamarine;
  color: white;
}
.msg-item p {
  display: inline-block;
  border-radius: 40px;
  background: #3c3d5a;
  color: white;
  float: left;
  padding: 2px 12px;
  margin: 0 0 2px 0;
  max-width: 70%;
  text-align: left;
  box-sizing: border-box;
}
.msg>.title{
  display: flex;
  justify-content: center;
}
.msg>.title>p {
  display: block;
  border-radius: 40px;
  color: #000;
  background-color: transparent;
  text-align: center;
  padding: 2px 12px;
  max-width: 70%;
  box-sizing: border-box;
  position: relative;
}
.fff{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.fff>div{
  background-color: seashell;
  padding: 5px 10px;
  border-radius: 4px;
  margin-top: 10px;
}
</style>