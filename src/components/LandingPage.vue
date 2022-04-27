<template>
  <div>
    <div class="landing">
      <span class="header">Are you an introvert <br> or an extrovert? </span>
      <img class="banner" :src="require('@/assets/images/banner.jpg')" alt="">
    </div>
    <button class="start-btn" @click="startTest">Start test</button>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  methods: {
    startTest () {
      this.$router.push('/test')
    }
  }
}
</script>

<style scoped lang="scss">
.landing {
  display: flex;
  justify-content: center;
  padding: 100px 270px 70px;

  & .header {
    font-size: 87px;
    font-weight: 900;
    text-align: center;
    padding: 65px;
    line-height: 82px;

  }

  & .banner {
    width: 630px;
  }
}
.start-btn {
  width: 444px;
  padding: 22px;
  background-color: lightblue;
  font-weight: bold;
  cursor: pointer;
  border-radius: 6px;
  border: none;
  font-size: 28px;

  &:hover {
      background-color: rgb(62, 182, 221);
  }
}
</style>
