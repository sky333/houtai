import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


//导入组件
import login from '../components/login.vue'
import index from '../components/index.vue'

//规则
let routes = [
    {
        path:'/login',
        component:login
    },
    {
        path:'/',
        component:index
    }
]

//路由对象
let router = new VueRouter({
    routes
})

//注册导航守卫,前置守卫
router.beforeEach((to,from,next)=>{
    if(to.path =='/login'){
        //去登录页就直接过去
        next()
    }else{
        //如果不是登录,判断是否携带token
        if(window.sessionStorage.getItem('token')){
            next()
        }else{
            Vue.prototype.$message.warning('请先登录!')
            next('/login')
        }
    }
   
})

//暴露
export default router;