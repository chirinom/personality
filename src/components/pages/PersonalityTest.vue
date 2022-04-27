<template>
  <QuestionCardSlider/>
</template>

<script>
import QuestionCardSlider from '@/components/molecules/QuestionCardSlider.vue'
import { mapActions } from 'vuex'

export default {
  name: 'PersonalityTest',
  components: {
    QuestionCardSlider
  },
  methods: {
    ...mapActions(['getQuestions'])
  },
  mounted () {
    this.getQuestions()
  }
}
</script>
