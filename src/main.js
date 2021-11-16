import Vue from 'vue'  //引入vue本身
import App from './App.vue' //引入根组件
import router from './router'
import store from './store'

import axios from "axios";
axios.defaults.withCredentials = true; //配置为true

Vue.config.productionTip = false

//注册nutui
import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/nutui.css';
NutUI.install(Vue);

//全局设置语言环境
import moment from "moment";
moment.locale('zh-cn');

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app') //这里挂载的是 public/index.html 的id为app的 div
