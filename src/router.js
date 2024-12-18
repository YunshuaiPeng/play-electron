import { createRouter, createWebHashHistory } from 'vue-router'
import BomList from './views/BomList.vue'
import BomDetail from './views/BomDetail.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BomList
    },
    {
      path: '/bom/:filename',
      name: 'bomDetail',
      component: BomDetail,
      props: true
    }
  ]
})

export default router 