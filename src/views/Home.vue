<template>
  <div class="home">
    <div class="users">
      <h1>Users</h1>
      <router-link to="/user">Go tot user</router-link>
      <div class="blue"
      v-for="people in this.info.results"
      :key="people.id"> 
        {{ people.name }}
        <router-link :to="{ name: 'user', params: {id:people.name, uri: people.url} }">Detail pagina</router-link>
      </div>  

      <!-- <p class="pp">{{ info }} </p> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  },
  data (){
    return{
      info: null
    }
  },
  created () {
    this.$store.dispatch('fetchPokemonData')
  },
}
</script>

<style>
.users{
  margin: 5vw 5vw 5vw 10vw;
}
.blue{
  background-color: aqua;
}
.pp{
  background-color: blueviolet;
}
</style>