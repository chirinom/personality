import axios from 'axios'

const state = {
  questions: [],
  values: []
}
const getters = {
  questions: (state) => state.questions,
  values: (state) => state.values
}
const actions = {
  async getQuestions ({ commit }) {
    const baseURL = 'http://localhost:8000/questionsList'
    try {
      const response = await axios.get(baseURL)
      commit('setQuestions', response.data)
    } catch (e) {
      console.error(e)
    }
  },
  clearValues ({ commit }) {
    commit('setClearValues')
  }
}
const mutations = {
  setQuestions: (state, data) => (state.questions = data),
  setValues: (state, data) => {
    state.values.push(data)
  },
  setClearValues: (state) => (state.values = [])
}

export default {
  state,
  getters,
  actions,
  mutations
}
