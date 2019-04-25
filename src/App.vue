<template>
  <div id="app">
    <nav-bar/>
    <div class="inner">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import UserPage from './components/UserPage.vue'
import NavBar from './components/NavBar.vue'

export default {
  name: 'app',
  components: {
    UserPage,
    NavBar
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  overflow-x: hidden;
  .inner{
    display: flex;
    width: 80vw;
    height: 100%;
    margin-left: 10vw;
    background-color: whitesmoke;
    padding-bottom: 5vw;
    margin-bottom: 5VW;
  }
}
</style>