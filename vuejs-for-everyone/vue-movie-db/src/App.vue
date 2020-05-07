<template>
  <div id="app" v v-if="status==='ready'">
    <Header :title="title" />
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>{{hello}}</h1>
    <ul>
      <li v-for="(item, index) in list" :key="item">{{index}} {{item}}</li>
    </ul>
    <ul>
      <li v-for="person in people" :key="person.name">{{person.name}}</li>
    </ul>
    <ul>
      <li v-for="(value, key) in profile" :key="key">{{key}}: {{value}}</li>
    </ul>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
  <div v-else-if="status==='loading'">Loading</div>
  <div v-else>Error</div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
  data() {
    return {
      isTrue: true,
      status: "ready",
      hello: "Hello world",
      title: "Vue Movie DB",
      list: ["Panda", "Pengin", "Tiger", "Monkey"],
      people: [{ name: "Scott" }, { name: "Courtney" }],
      profile: {
        name: "Scott",
        age: 32,
        job: "Developer"
      }
    };
  },
  components: {
    HelloWorld,
    Header
  }
};
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
