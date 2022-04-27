<template>
  <div class="landing">
    <div class="header">
      <span>Are you an introvert <br> or an extrovert? </span>
      <button class="header__start-btn" @click="startTest">Start test</button>
    </div>
    <img class="banner" :src="require('@/assets/images/banner.jpg')" alt="">
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
      font-size: 66px;
      font-weight: 900;
      text-align: initial;
      padding: 30px 65px;
      line-height: 75px;

    &__start-btn {
      width: 444px;
      padding: 8px 22px;
      margin: 44px 0;
      background-color: lightblue;
      font-weight: bold;
      cursor: pointer;
      border-radius: 6px;
      border: none;
      font-size: 24px;

      &:hover {
        background-color: rgb(62, 182, 221);
      }
    }
  }

  & .banner {
    width: 630px;
    border-radius: 4px;
    height: fit-content;
  }
}

</style>
