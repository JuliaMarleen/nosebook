<template>
  <div class="user">
    <user-page/>
  </div>
</template>

<script>
import UserPage from '../components/UserPage.vue'
import axios from 'axios'

export default {
  name:'user',
  props: ['uri', 'id'],
  components:{
    UserPage
  },
  mounted() {
    axios
      .get(this.uri)
      .then(response => (console.log(response)))
  }
}
</script>
