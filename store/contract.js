export const state = () => ({
  contractDetails: {
    contract_name: '',
    user_id: '',
    contract_amount: (value) => {
      return value * 1
    },
    currency: '',
    deadline: '',
    description: '',
    agreement: {
      file: 'https://res.cloudinary.com/ninja-dev/image/upload/v1618255207/boy_lsevbr.png',
    },
    collaborator: [
      // {
      //   collaborator_type: '',
      //   email: '',
      //   name: '',
      // },
    ],
    funded: false,
  },
  contracts: [],
  contractStop: false,
  contractCount: '',
  currentId: '',
})

export const mutations = {
  setContract(state, payload) {
    state.contractDetails = { ...state.contractDetails, ...payload }
  },
  setContracts(state, payload) {
    state.contracts = [...state.contracts, ...payload]
    if (state.contracts.length.toString() === state.contractCount) {
      state.contractStop = true
    } else {
      state.contractStop = false
    }
  },
  setStop(state, payload) {
    state.contractStop = payload
  },
  setCount(state, payload) {
    state.contractCount = payload
  },
  setCurrentId(state, payload) {
    console.log(payload)
    state.currentId = payload
  },
}

export const actions = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async createContract({ dispatch }, data) {
    const res = await this.$smargApi.$post('contract/create', data)
    console.log(res)
  },
  async getContracts({ commit }, number) {
    const res = await this.$smargApi.$get(`contract?page=${number}&take=5`)
    const contracts = res.data
    const count = res.count.total

    commit('setContracts', contracts)
    commit('setCount', count)
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async updateContract({ dispatch }, data) {
    const res = await this.$smargApi.$patch(
      `/contract/update/${data.id}`,
      data.contract_status
    )
    console.log(res)
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async addCollaborator({ commit }, data) {
    const res = await this.$smargApi.$post('collaborator/add', data)
    console.log(res)
  },
}

export const getters = {}
