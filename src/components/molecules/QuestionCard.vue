<template>
  <div class="question-card">
    <h4 class="label">{{ question }}</h4>
    <FormMultipleRadio
      :value="values"
      :options="answers"
      @input="selectedValue"
      class="radio"
      rules="required"
    />
  </div>
</template>

<script>
import FormMultipleRadio from '@/components/atoms/FormMultipleRadio.vue'
import { mapGetters } from 'vuex'

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
    selectedValue (val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="scss" scoped>
.question-card {
  & .label {
    text-align: left;
  }
}
</style>
