import Vue from 'vue'
import Vuex from 'vuex'

import perosnalityQuestions from './modules/personality_questions'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    perosnalityQuestions
  }
})
