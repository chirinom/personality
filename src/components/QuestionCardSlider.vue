<template>
  <div v-if="!displayResult"  class="wrapper">
    <transition-group class="transition">
      <div
        v-for="(question, index) in questions"
        :key="index"
        class="slider"
      >
        <QuestionCard
          v-if="index + 1 == active"
          :question="question.question"
          :answers="question.answers"
        />
      </div>
    </transition-group>
    <div class="btns">
      <button  v-if="firstQuestion" class="btn prev" @click="goBackHome">
        Go back Home
      </button>
      <button v-else class="btn prev" @click="move(-1)">
        Previous
      </button>
      <button class="btn next" @click="move(1)" >
        <span v-if="lastQuestion">Next question</span>
        <span v-else>Finish</span>
      </button>
    </div>
  </div>
  <ResultsPage v-else/>
</template>

<script>
import QuestionCard from '@/components/QuestionCard.vue'
import ResultsPage from '@/components/ResultsPage.vue'

import { mapGetters } from 'vuex'
export default {
  name: 'PersonalityTest',
  components: {
    QuestionCard,
    ResultsPage
  },
  data () {
    return {
      active: 1,
      slides: 4,
      displayResult: false
    }
  },
  computed: {
    ...mapGetters(['questions', 'values']),
    firstQuestion () {
      return this.active === 1
    },
    lastQuestion () {
      return this.active < this.slides
    }
  },
  methods: {
    move (amount) {
      let newActive
      const newIndex = this.active + amount
      if (newIndex > this.slides) newActive = 1
      if (this.active >= this.slides) this.displayResult = true
      this.active = newActive || newIndex
    },
    goBackHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  max-width: 700px;
  padding: 22px;
  margin: 0 auto;

  & .slider {
    display: flex;
    justify-content: center;
  }

  & .btns {
    display: flex;
    justify-content: center;

    & .btn {
      cursor: pointer;
      margin: 33px 11px;
      padding: 6px;
      width: 100%;
    }
  }

}
</style>
