<template>
  <ValidationObserver v-slot="{passed}">
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
            @input="selectedValue"
          />
        </div>
      </transition-group>
      <div class="btns">
        <button v-if="firstQuestion" class="btn back" @click="goBackHome">
          Go back Home
        </button>
        <button v-else class="btn prev" @click="prev">
          Previous
        </button>
        <button  v-if="lastQuestion" class="btn next" @click="next" :disabled="!passed">
          Next question
        </button>
        <button v-else class="btn finish" @click="goToResults" >
          Finish
        </button>
      </div>
    </div>
  </ValidationObserver>
</template>

<script>
import QuestionCard from '@/components/molecules/QuestionCard.vue'
import { ValidationObserver } from 'vee-validate'

import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  name: 'PersonalityTest',
  components: {
    QuestionCard,
    ValidationObserver
  },
  data () {
    return {
      active: 1,
      slides: 4,
      answerValue: null
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
    ...mapMutations(['setValues']),
    prev () {
      let newActive
      const newIndex = this.active - 1
      this.active = newActive || newIndex
      this.values.splice(-1)
    },
    next () {
      let newActive
      const newIndex = this.active + 1
      if (newIndex > this.slides) newActive = 1
      if (this.answerValue != null) this.setValues(this.answerValue)
      this.active = newActive || newIndex
      this.answerValue = null
    },
    goBackHome () {
      this.clearValues()
      this.$router.push('/')
    },
    goToResults () {
      this.$router.push('/results')
    },
    selectedValue (val) {
      this.answerValue = val
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
