<template>
  <div id="app">
    <LoginComponent />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    LoginComponent: () => import('./components/LoginComponent')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
