const Home = () =>
  import ('../views/editor/Index.vue')


export default [{
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'Dcode-Editor',
    component: Home
  }
]