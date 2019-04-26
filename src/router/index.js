import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Pages = {
  Index: () => import('../pages/Module/HomePage/Index'),
  Video: () => import('../pages/Module/Video/Index'),
}

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'page-homepage',
      component: Pages.Index
    },
    {
      path: '/video',
      name: 'page-video',
      component: Pages.Video
    }
  ]
})
