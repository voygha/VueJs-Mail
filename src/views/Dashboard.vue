<template>
  <div class="dashboard">
    <h1>Ruta protegida</h1>
    <p>{{user}}</p>
  </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
export default {
  created(){
    this.dashboard(this.token)
  },
  computed: {
    ...mapState(['token', 'user'])
  },
  methods: {
    ...mapActions(['dashboard'])
  }
}
</script>