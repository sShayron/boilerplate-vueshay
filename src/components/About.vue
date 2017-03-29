<template>
  <b-jumbotron v-bind:header="template"
    lead="" >
    <p>{{msg}}</p>
    <b-btn variant="primary" v-bind:href="github">github</b-btn>
  </b-jumbotron>
</template>
<script>
export default {
  name: 'about',
  data () {
    return {
      template: 'VueShay Boilerplate',
      msg: "I'm Shayron Aguiar, visit my github",
      github: 'https://github.com/sShayron'
    }
  }
}
</script>

<style scoped>

</style>
