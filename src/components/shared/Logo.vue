<template>
  <div>
    <div class="logo-wrapper">
      <div class="logo">
        <i class="fas fa-umbrella-beach"></i>
      </div>
      <div class="logo__title">
        <div class="title__first">Holiday</div>
        <div class="title__second">Planner</div>
      </div>
    </div>
    <div class="wave-divider">
      <img src="../../assets/wave.svg">
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.logo-wrapper {
  display: flex;
}

.wave-divider {
  margin-top: 40px;
  margin-bottom: 40px;

  @media screen and (max-width: 1024px) {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  & > img {
    width: 100%;
  }
}

.logo {
  width: 75px;
  height: 75px;
  background: linear-gradient(180deg, #f6d365 0%, #fda082 100%);
  border-radius: 50%;
  line-height: 75px;

  & > i {
    font-size: 20px;
    color: #fff;
  }
}

.logo__title {
  margin-left: 25px;
}

.title__first {
  font-size: 27px;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  color: #55b0f3;
  margin-bottom: -10px;
  margin-top: 5px;
}

.title__second {
  text-align: left;
  font-size: 20px;
  font-family: "Poppins", sans-serif;
  color: #bdbdbd;
}
</style>
