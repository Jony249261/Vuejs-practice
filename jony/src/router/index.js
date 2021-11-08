import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/pages/Home.vue'
import about from '../views/pages/About.vue'
import service from '../views/pages/Services.vue'
import portfolio from '../views/pages/Portfolio.vue'
import portfoliodetails from '../views/pages/Portfoliodetails.vue'
import contact from '../views/pages/Contact.vue'
import blog from '../views/pages/Blog.vue'
import singleblog from '../views/pages/Singleblog.vue'
import elements from '../views/pages/Elements.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: about
  },
  {
    path: '/services',
    name: 'service',
    component: service
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: portfolio
  },
  {
    path: '/portfoliodetails',
    name: 'portfoliodetails',
    component: portfoliodetails
  },
  {
    path: '/contact',
    name: 'contact',
    component: contact
  },
  {
    path: '/blog',
    name: 'blog',
    component: blog
  },
  {
    path: '/singleblog',
    name: 'singleblog',
    component: singleblog
  },
  {
    path: '/elements',
    name: 'elements',
    component: elements
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
