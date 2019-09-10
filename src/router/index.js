import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import List from '@/components/List'
import Category from '@/components/Category'
import Detail from '@/components/Detail'
import Addevent from '@/components/Addevent'
import Chart from '@/components/Chart'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, {
      path: '/List',
      name: 'List',
      component: List
    }, {
      path: '/Home',
      name: 'Home',
      component: Home
    }, {
      path: '/Category',
      name: 'Category',
      component: Category
    }, {
      path: '/Detail',
      name: 'Detail',
      component: Detail
    }, {
      path: '/Addevent',
      name: 'Addevent',
      component: Addevent
    }, {
      path: '/Chart',
      name: 'Chart',
      component: Chart
    }
    
  ]
})
