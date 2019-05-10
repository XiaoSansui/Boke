// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router/index'
import './plugins/element.js'
import '../static/font/iconfont.css'
import '../static/iconFont/icon.css'
// import 'tui-editor/dist/tui-editor.css';
// import 'tui-editor/dist/tui-editor-contents.css';
// import 'codemirror/lib/codemirror.css';
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
