<template>
  <div class="container">
    <b-card class="login__card">
      <b-form-input v-model="userName" placeholder="Enter your name"></b-form-input>
      {{userName}}
    </b-card>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.component("LoginComponent", {
  props: ["post"],
  data: () => ({
    userName: null
  }),
  mounted: () => console.log(this)
});
</script>

<style lang="scss" scoped>
.login {
  &__card {
    width: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.container {
  height: 100vh;
  position: relative;
}
</style>
