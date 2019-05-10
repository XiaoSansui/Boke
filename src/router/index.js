import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Pages = {
  Index: () => import('../pages/Module/HomePage/Index.vue'),
  Video: () => import('../pages/Module/Video/index.vue'),
  Markdown: () => import('../components/markdown/index.vue'),
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
    },
    {
      path: '/markdown',
      name: 'markdown',
      component: Pages.Markdown
    },
  ]
})
