import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  /*{
    path: '/Home',
    name: 'Home',
    component: Home
  },*/
  {
    path: '/',
    name: 'Conversations',
    component: () => import(/* webpackChunkName: "about" */ '../views/Conversations.vue')
  },
  {
    path: '/creation-compte',
    name: 'CreationCompte',
    component: () => import(/* webpackChunkName: "about" */ '../views/CreationCompte.vue')
  },
  {
    path: '/connexion',
    name: 'Connexion',
    component: () => import(/* webpackChunkName: "about" */ '../views/Connexion.vue')
  },
  {
    path: '/creer-conversation',
    name: 'CreerConversation',
    component: () => import(/* webpackChunkName: "about" */ '../views/CreerConversation.vue')
  },
  {
    path: '/deconnexion',
    name: 'Deconnexion',
    component: () => import(/* webpackChunkName: "about" */ '../views/Deconnexion.vue')
  },
  {
    path: '/conversation/:idConversation',
    name: 'Conversation',
    component: () => import(/* webpackChunkName: "about" */ '../views/Conversation.vue')
  },
  {
    path: '/membres',
    name: 'Membres',
    component: () => import(/* webpackChunkName: "about" */ '../views/Membres.vue')
  },
  {
    path: '/membre/:idMembre',
    name: 'Membre',
    component: () => import(/* webpackChunkName: "about" */ '../views/Membre.vue')
  }

  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
