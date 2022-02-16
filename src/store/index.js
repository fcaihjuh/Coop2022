import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)
const vuexLocal = new VuexPersistence({
  storage:window.localStorage
})

export default new Vuex.Store({
  plugins: [vuexLocal.plugin],
  state: {
    ready: false,
    token: '',
    member: false, //doit se connecter pour pouvoir y avoir accès
    members: []
  },
  mutations: {
    setReady(state, ready){
      state.ready = ready
    },
    setToken(state, token) {
      state.token = token
    },
    setMembers(state, members) {
      state.members = members
    },
    setMember(state, member) {
      state.member = member
    }
  },
  getters: {
    /** Récupérer un membre donné */
    getMembre: (state) => (idMembre) => {
      return state.members.find(member => member.id === 
        idMembre)
    }
  },
  actions: {
  },
  modules: {
  }
})
