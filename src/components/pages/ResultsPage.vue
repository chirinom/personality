<template>
  <div>
    <div v-if="trait === 'intro'"  class="results">
      <h1>Congratulations! <br>You are an introvert :)</h1>
      <img :src="require('@/assets/images/intro.jpg')" alt="">
    </div>
    <div v-else class="results">
      <h1>Congratulations! <br>You are an extrovert :)</h1>
      <img :src="require('@/assets/images/extro.jpg')" alt="">
    </div>
    <button class="back-btn" @click="goBackHome">Go back home</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
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
    ...mapActions(['clearValues']),
    calculatePersonality () {
      const totalValue = this.values.reduce((a, b) => a + b)
      this.trait = totalValue <= 7 ? 'intro' : 'extro'
    },
    goBackHome () {
      this.clearValues()
      this.$router.push('/')
    }
  },
  mounted () {
    this.calculatePersonality()
  }
}
</script>

<style lang="scss" scoped>
.results {
  padding: 120px 0;
}
.back-btn {
  padding: 4px 8px;
  cursor: pointer;
}
</style>
