export const state = () => ({
  accessToken: null,
  refreshToken: null,
  user: null,
  walletBalance: null,
  currentContract:""
})

export const getters = {
  isAuthenticated(state) {
    return !!state.user
  },
  getUser(state) {
    return state.user
  },
}

export const mutations = {
  setTokens(state, { accessToken, refreshToken = null }) {
    state.accessToken = accessToken

    if (refreshToken) {
      state.refreshToken = refreshToken
    }
  },
  setUser(state, user) {
    state.user = user.data.user
  },
  setSignature(state, data) {
    state.user.signature = data
  },
  logout(state) {
    state.accessToken = null
    state.refreshToken = null
    state.user = null
  },
  changeProfile(state, data) {
    if (data.phone_number) {
      state.user.phone_number = data.phone_number
    }
    if (data.profile_picture) {
      state.user.profile_picture = data.profile_picture
    }
  },
}

export const actions = {
  async login({ commit, dispatch }, { strategy, email, password }) {
    const res = await this.$smargApi.$post('authentication/login', {
      strategy,
      email,
      password,
    })
    const tok = {
      accessToken: res.data['access-token'],
      refreshToken: res.data['refresh-token'],
    }
    commit('setTokens', tok)
    await dispatch('getUser')
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async register({ dispatch }, { data }) {
    const res = await this.$smargApi.$post('/user/signup', data)
    if (res.status === 'success') {
      this.$router.replace({ path: '/signupConfirmation' })
    }
  },
  async getUser({ commit }) {
    const res = await this.$smargApi.$get('user/profile')
    console.log(res)
    commit('setUser', res)
  },
  async refresh({ state, commit }) {
    const res = await this.$smargApi.$post('/auth/refresh', {
      refreshToken: state.refreshToken,
    })

    commit('setTokens', res)
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async changePassword({ commit }, { data }) {
    await this.$smargApi.$patch('/user/password', data)
  },

  async changeProfile({ commit }, { data }) {
    await this.$smargApi.$patch('/user/profile', data)
    await commit('changeProfile', data)
  },

  async editSignature({ commit }, data) {
    const payload = { signature: data }
    const res = await this.$smargApi.$patch('/user/signature', payload)
    console.log(res)
    await commit('setSignature', data)
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  logout({ commit }) {
    commit('logout')
  },
}
