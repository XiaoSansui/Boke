import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const HomePage = {
  Index: () => import('../pages/Module/HomePage/Index')
}

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'homepage',
    //   component: HomePage.Music
    // },
    {
      path: '/',
      name: 'homepage',
      component: HomePage.Index
    }
  ]
})
