<template>
  <div class="question-card">
    <h4 class="question-card__label">{{ question }}</h4>
    <FormMultipleRadio :value="values" :options="answers" @input="setValues" class="radio"/>
  </div>
</template>

<script>
import FormMultipleRadio from '@/components/atoms/FormMultipleRadio.vue'
import { mapGetters, mapMutations } from 'vuex'
export default {
  components: {
    FormMultipleRadio
  },
  props: {
    question: {
      type: String,
      required: true
    },
    answers: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapGetters(['values'])
  },
  methods: {
    ...mapMutations(['setValues'])
  }
}
</script>

<style lang="scss" scoped>
.question-card {
  &__label {
    text-align: left;
  }
}
</style>
