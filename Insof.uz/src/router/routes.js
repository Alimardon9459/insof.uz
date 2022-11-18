
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
<<<<<<< HEAD
      { path: 'detail', component: () => import('pages/ProductDetail.vue') },
      { path: '/praktikum', component: () => import('pages/ProductPraktikum.vue') },

=======
      { path: '/detail/:id/', component: () => import('pages/ProductDetail.vue') },
      { path: '/basket', component: () => import('pages/BasketPage.vue') },
      { path: '/registration', component: () => import('pages/RegistrationPage.vue') },
      { path:'/orderinfo' , component:()=> import('pages/OrderInfo.vue') },
      { path:'/pinia' , component:()=> import('pages/ForPinia.vue') },
      { path:'/search' , component:()=> import('pages/SearchPage.vue') },
      
>>>>>>> e32e940a50e98a8fd53238d7c80d7ab586b37ca9
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
