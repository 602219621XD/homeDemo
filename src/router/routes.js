
const routes = [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [
      { path:'', component: () => import('pages/Home.vue') },
      { path:'/home', component: () => import('pages/Home.vue') },
      { path:'/news', component: () => import('pages/News.vue') },
      { path:'/aboult', component: () => import('pages/AboultUs.vue') },
      { path:'/build', component: () => import('pages/business/BuildWeb.vue') },
      { path:'/mini', component: () => import('pages/business/MiniProgram.vue') },
      { path:'/wechat', component: () => import('pages/business/WechatApply.vue') },
      { path:'/allseo', component: () => import('pages/business/AllSeo.vue') },
      { path:'/spread', component: () => import('pages/business/Spread.vue') },
      { path:'/aiot', component: () => import('pages/business/Aiot.vue') },
      { name:"details",path:'/details/:id', component: () => import('pages/DetailsPage.vue') }
    ]
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')

  }
]
export default routes
