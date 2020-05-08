<template>
  <div id="app" v-if="status === 'ready'">
    <Header :title="title" />
    <router-view />
  </div>
  <div v-else-if="status === 'loading'">Loading</div>
  <div v-else>Error</div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  data() {
    return {
      title: 'Vue Movie DB',
      status: 'ready'
    }
  },
  components: {
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}
</style>
