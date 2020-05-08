<template>
  <ul>
    <li v-for="movie in movies" :key="movie.title">
      <Movie :movie="movie" />
    </li>
  </ul>
</template>

<script>
import Movie from './Movie.vue'
export default {
  name: 'MoviesList',
  data() {
    return {
      movies: []
    }
  },
  beforeCreate() {
    console.log('before Create')
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData: async function() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=887cffaee5e3334740dd2d4520389025`
        )
        const json = await res.json()
        this.movies = json.results
      } catch (error) {
        console.log(error)
      }
    }
  },
  components: {
    Movie
  }
}
</script>

<style scoped>
ul {
  display: grid;
  list-style: none;
  padding: 1rem;
  margin: 0;
  grid-row-gap: 1rem;
  grid-template-columns: repeat(6, 1fr);
}
</style>
