export const state = () => ({
  cardDetails: {
    transaction_type: 'credit',
    currency: 'USD',
    email: '',
    fullname: '',
    platform: 'FLW',
    merchant_fee: '1.6',
    wallet_id: '',
  },
  transactions: [],
  card: {},
  amount: '',
})

export const mutations = {
  setCard(state, payload) {
    state.cardDetails = { ...state.cardDetails, ...payload }
    console.log(state.cardDetails)
  },
  setWallet(state, payload) {
    state.cardDetails.wallet_id = payload
  },
  setTransactions(state, payload) {
    state.transactions = { ...state.transactions, ...payload }
    console.log(state.transactions)
  },
  setUser(state, payload) {
    state.cardDetails.email = payload.email
    state.cardDetails.fullname = payload.last_name + ' ' + payload.first_name
    console.log(payload)
  },
  setCards(state, payload) {
    state.card = payload
  },
  setWalletBalance(state, payload) {
    state.amount = payload
    console.log(state.amount)
  },
}

export const actions = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async cardPayment({ commit }, data) {
    console.log('paid')
    console.log(data)
    const res = await this.$smargApi.$post('/payment/card-pay', data)
    console.log(res)
    location.assign(res.data)
  },

  async getWallet({ commit, dispatch }) {
    const res = await this.$smargApi.$get('wallet')
    commit('setWallet', res.data.id)
    commit('setTransactions', res.data.transaction)

    dispatch('getWalletBalance', res.data.id)

    dispatch('getUser')
  },
  async getWalletBalance({ commit }, id) {
    const res = await this.$smargApi.$get(`/wallet/balance/${id}`)
    commit('setWalletBalance', res.data[0].amount)
  },
  getUser({ commit, rootState }) {
    const res = rootState.auth.user
    commit('setUser', res)
  },
  async getCards({ commit }) {
    const res = await this.$smargApi.$get('wallet/cards')
    const length = res.data.length - 1
    const currentCard = res.data[length]
    commit('setCards', currentCard)
  },
}

export const getters = {}
