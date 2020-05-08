<template>
  <header>
    <h1>
      <router-link to="/">{{ title }}</router-link>
    </h1>
    <transition name="fade">
      <h1 v-if="show">Animated</h1>
    </transition>
    <button @click="show = !show">Show/Hide</button>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String
  },
  data() {
    return {
      show: false
    }
  }
}
</script>

<style scoped>
header {
  background-color: #111;
  padding: 20px;
  color: white;
}
h1 {
  margin: 0;
}
</style>
