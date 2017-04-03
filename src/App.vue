<template>
  <div id="app">
    <div>
      <section class="header">
        <nav class="nav" style="background-color: black;">
          <div class="nav-center">
            <a class="nav-item">
              <h1>{{template}}</h1>
            </a>
          </div>
          <span class="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </nav>
      </section>
      <div class="columns" style="min-height: 100vh; background-color: #f0f0f0;">
        <div class="column is-3">
          <SideMenu></SideMenu>
        </div>
        <div class="column is-9">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideMenu from '@/components/partials/SideMenu'

export default {
  name: 'app',
  components: {
    SideMenu
  },
  data () {
    return {
      template: 'VueShay Boilerplate'
    }
  }
}
</script>

<style lang="sass">
@import '~@/assets/sass/main';
</style>
