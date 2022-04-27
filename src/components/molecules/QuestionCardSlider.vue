<template>
  <div class="wrapper">
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
      <button  v-if="firstQuestion" class="btn back" @click="goBackHome">
        Go back Home
      </button>
      <button v-else class="btn prev" @click="move(-1)">
        Previous
      </button>
      <button  v-if="lastQuestion" class="btn next" @click="move(1)" >
        Next question
      </button>
      <button v-else class="btn finish" @click="goToResults" >
        Finish
      </button>
    </div>
  </div>
</template>

<script>
import QuestionCard from '@/components/molecules/QuestionCard.vue'

import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'PersonalityTest',
  components: {
    QuestionCard
  },
  data () {
    return {
      active: 1,
      slides: 4
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
    ...mapActions(['clearValues']),
    move (amount) {
      let newActive
      const newIndex = this.active + amount
      if (newIndex > this.slides) newActive = 1
      this.active = newActive || newIndex
    },
    goBackHome () {
      this.clearValues()
      this.$router.push('/')
    },
    goToResults () {
      this.$router.push('/results')
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
