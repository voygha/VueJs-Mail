import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    user: {
      name: ''
    }
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload
    },
    setUser(state, payload) {
      state.user.name = payload.name,
      state.user.email = payload.email
    },
    logout() {
      localStorage.removeItem('token')
      location.reload()
    }
  },
  actions: {
    async login({ commit }, user) {
      try {
        const res = await fetch(process.env.VUE_APP_BACKBASE + '/user/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user)
        })
        const userDB = await res.json()
        commit('setToken', userDB.data.token)
        localStorage.setItem('token', userDB.data.token)
      } catch (error) {
        console.log('Error: ', error)
      }
    },
    async register( user ) {
      try {
        const res = await fetch(process.env.VUE_APP_BACKBASE + '/user/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },  
          body: JSON.stringify(user)
        })
        const userDB = await res.json()
        consol.log(userDB)
      } catch (error) {
        console.log('Error: ', error)
      }
    },
    async dashboard({commit}, auth_token){
      try {
        const res = await fetch(process.env.VUE_APP_BACKBASE + '/dashboard',  {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': auth_token
          },
        })
        const userDB = await res.json()
        commit('setUser', {name: userDB.data.user.name})
      } catch (error) {
        console.log('Error: ', error)
      }
    },
    getToken({commit}) {
      if(localStorage.getItem('token')) {
        commit('setToken', localStorage.getItem('token'))
      } else {
        commit('setToken', null)
      }
    },
    logout ({ commit }) {
      commit('logout')
    }
  },
  modules: {
  }
})
