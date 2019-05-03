import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//导入 router
import router from './lib/router'
//导入饿了么ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//导入axios 
import http from './lib/http'
Vue.use(http)

Vue.use(ElementUI);

//在顶级vue中实例中
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
