import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import Chat from '@/components/chat/index'
import user from '@/components/user/index'
import mailList from '@/components/mailList/index'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'chat',
      component: Chat
    },
    {
      path: '/chat',
      name: 'e',
      component: Chat
    },
    {
      path: '/user',
      name: '我的',
      component: user
    },
    {
      path: '/mailList',
      name: '通讯录',
      component: mailList
    },
    {
      path: '/q/index',
      name: 'index',
      component: Index
    },
    

  ]
})
