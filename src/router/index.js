import Vue from 'vue'
import Router from 'vue-router'
import Index from "@/pages/Index/index"
import Live from "../pages/Live/Live"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
    path:"/live",
      name:"Live",
      component:Live
    }
  ]
})
