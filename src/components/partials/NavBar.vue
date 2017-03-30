<template>
  <div class="columns" style="min-height: 100vh; background-color: #f0f0f0;">
    <div class="column is-3">
      <div class="menu is-dark" style="min-height: 100%;">
        <menus label="Menu">
          <menu-item icon="user">
            <span>Perfil</span>
            <menus slot="sub">
              <menu-item icon="slack">
                <span>Ops</span>
                <menus slot="sub">
                  <menu-item icon="home">Picture</menu-item>
                  <menu-item icon="home">Content</menu-item>
                </menus>
              </menu-item>
            </menus>
          </menu-item>
          <menu-item icon="car">
            <span>Carros</span>
            <menus slot="sub" type="float">
              <menu-item icon="home" style="text-align: left;">Vans</menu-item>
              <menu-item icon="home" style="text-align: left;">Onibus</menu-item>
            </menus>
          </menu-item>
          <menu-item icon="users">Passageiros</menu-item>
          <menu-item icon="ticket">Tags</menu-item>
          <menu-item icon="lock">Privado</menu-item>
          <div class="divider"></div>
          <menu-item icon="sign-out">Sair</menu-item>
        </menus>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      template: 'VueShay Boilerplate',
      msg: ''
    }
  }
}

</script>

<style scoped>
.black-nav {
  background-color: black;
}
</style>
