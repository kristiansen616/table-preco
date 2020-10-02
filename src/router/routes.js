
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'clientes', component: () => import('pages/dashboard/clientes.vue') },
      { path: 'avisos', component: () => import('pages/dashboard/avisos.vue') },
      { path: 'edit_texto', component: () => import('pages/dashboard/edit_texto.vue') },
      { path: 'faq', component: () => import('pages/dashboard/faq.vue') },
      { path: 'feriados', component: () => import('pages/dashboard/feriados.vue') },
      { path: 'municipios', component: () => import('pages/dashboard/municipios.vue') },
      { path: 'tracking', component: () => import('pages/dashboard/tracking.vue') },
      { path: 'veiculos', component: () => import('pages/dashboard/veiculos.vue') },
      { path: 'funci_user', component: () => import('pages/dashboard/funci_user.vue') },
      { path: 'produtos', component: () => import('pages/dashboard/produtos.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
