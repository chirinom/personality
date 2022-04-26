<template>
  <div>
    <div v-if="trait == 'intro'"  class="intro">
      <h1>Congratulations! You are an introvert :)</h1>
      <img :src="require('@/assets/images/intro.jpg')" alt="">
    </div>
    <div v-else>
       <h1>Congratulations! You are an extrovert :)</h1>
     <img :src="require('@/assets/images/extro.jpg')" alt="">
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      trait: ''
    }
  },
  computed: {
    ...mapGetters(['values']),
    totalValue () {
      return this.values.reduce((a, b) => a + b)
    }
  },
  methods: {
    calculatePersonality () {
      const totalValue = this.values.reduce((a, b) => a + b)
      this.trait = totalValue <= 7 ? 'intro' : 'extro'
    }
  },
  mounted () {
    this.calculatePersonality()
  }
}
</script>

<style>

</style>
