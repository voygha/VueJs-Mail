<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <form @submit.prevent="login(user)">
        <input type="text" placeholder="Ingrese Email" v-model="user.email">
        <input type="password" placeholder="Ingrese contraseña" v-model="user.password">
        <button type="submit">Acceder</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Home',
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(['login'])
  }
}
</script>
