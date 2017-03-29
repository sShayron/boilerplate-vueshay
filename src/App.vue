<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view></router-view>
    <div class="container"></div>
  </div>
</template>

<script>
import NavBar from '@/components/partials/NavBar'

export default {
  name: 'app',
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 16px;
}
</style>
