const routes = [{
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{
        path: '',
        component: () => import('pages/IndexPage.vue')
      },
      {
        path: '/fiche-horaire-telechargeable',
        component: () => import('src/pages/FicheHoraireTelechargeable.vue')
      },
      {
        path: '/map-form-home',
        component: () => import('src/pages/MapFormHome.vue')
      },
      {
        path: '/contact',
        component: () => import('src/pages/Contact.vue')
      },
      {
        path: '/mentions-legales',
        component: () => import('src/pages/Mentions.vue')
      },
      {
        path: '/abonnements',
        component: () => import('src/pages/Abonnements.vue')
      }
    ]

  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/404.vue')
  },
]

export default routes
