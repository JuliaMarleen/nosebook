import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemons: []
  },
  mutations: {
    SET_POKEMON_DATA (state, data) {
      state.pokemons = data
    }
  },
  actions: {
    fetchPokemonData({commit}) {
      axios
      .get('https://pokeapi.co/api/v2/pokemon/')
      .then( response => (commit('SET_POKEMON_DATA', response.data)) )
    }
  }
})
