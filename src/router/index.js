import { createRouter, createMemoryHistory } from 'vue-router'

const Home = ()=>import('@/views/Home.vue')
const About = ()=> import('@/views/About')
const Cube = () => import(/* webpackChunkName: "about" */ '../views/Cube.vue')
const Animation = () => import(/* webpackChunkName: "about" */ '../views/Animation.vue')
const AnimationRoll = () => import(/* webpackChunkName: "about" */ '../views/AnimationRoll.vue')
const Clock = () => import(/* webpackChunkName: "about" */ '../views/Clock.vue')
const WebFont = () => import(/* webpackChunkName: "about" */ '../views/WebFont.vue')
const Flex = () => import(/* webpackChunkName: "about" */ '../views/Flex.vue')

const JustifyContent = ()=>import('../views/Flex/JustifyContent')
const FlexFlow = ()=>import('../views/Flex/FlexFlow')
const FlexGrow = ()=>import('../views/Flex/FlexGrow')
const FlexShrink = ()=>import('../views/Flex/FlexShrink')
const FlexDemo = ()=>import('../views/Flex/FlexDemo')
const FlexDemo2 = ()=>import('../views/Flex/FlexDemo2')
const AlignItems = ()=>import('../views/Flex/AlignItems')
const FlexDemo3 = ()=>import('../views/Flex/FlexDemo3')

const Demo = ()=>import('../views/Demo')
const Ctrip = ()=>import('@/views/Demo/Ctrip')
const Carousel = ()=> import('@/views/Demo/Carousel')
const Hexagon = ()=>import('@/views/Demo/Hexagon')
const P401 = ()=> import('@/views/Demo/401')
const Loading = ()=> import('@/views/Demo/Loading')

const Sass = ()=> import('@/views/Sass')
const Variable = ()=> import('@/views/Sass/Variable')



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: '/cube',
    name: 'Cube',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Cube
  },
  {
    path: '/animation',
    name: 'Animation',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Animation
  },
  {
    path: '/animationRoll',
    name: 'AnimationRoll',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AnimationRoll
  },
  {
    path: '/clock',
    name: 'Clock',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Clock
  },
  {
    path: '/webfont',
    name: 'WebFont',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: WebFont
  },
  {
    path: '/flex',
    name: 'Flex',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Flex,
    children:[
      {
        path:'justifyContent',
        name:'JustifyContent',
        component:JustifyContent
      },
      {
        path:'flow',
        name:'FlexFlow',
        component:FlexFlow
      },
      {
        path:'grow',
        name:'FlexGrow',
        component:FlexGrow
      },
      {
        path:'shrink',
        name:'FlexShrink',
        component:FlexShrink
      },
      {
        path:'demo',
        name:'FlexDemo',
        component:FlexDemo
      },
      {
        path:'demo2',
        name:'FlexDemo2',
        component:FlexDemo2
      },
      {
        path:'alignItems',
        name:'AlignItems',
        component:AlignItems
      },
      {
        path:'demo3',
        name:'FlexDemo3',
        component:FlexDemo3
      }
    ]
  },
  {
    path:'/Demo',
    name:'Demo',
    component:Demo,
    children: [
      {
        path: 'ctrip',
        name: 'Ctrip',
        component:Ctrip
      },
      {
        path: 'carousel',
        name: 'Carousel',
        component:Carousel
      },
      {
        path: 'hexagon',
        name: 'Hexagon',
        component:Hexagon
      },
      {
        path: '401',
        name: '401',
        component:P401
      },
      {
        path: 'loading',
        name: 'Loading',
        component:Loading
      }
    ]
  },
  {
    path: '/sass',
    name:'Sass',
    component:Sass,
    children: [
      {
        path:'variable',
        name:'Variable',
        component:Variable
      },
    ]
  }
]

const router = createRouter({
  history: createMemoryHistory(process.env.BASE_URL),
  routes
})

export default router
