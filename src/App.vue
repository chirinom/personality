<template>
  <div id="app">
    <PersonalityTest/>
  </div>
</template>

<script>
import PersonalityTest from './components/PersonalityTest.vue'

export default {
  name: 'App',
  components: {
    PersonalityTest
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
