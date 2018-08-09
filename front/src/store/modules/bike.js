export default {
  state: {
    bikes: [
      {
        id: 132456,
        name: "Yamaha YBR 125",
        position: {
          lat: 43.6095736,
          lng: 1.4565721999999823
        }
      },
      {
        id: 1321546,
        name: "Honda Transalp 600",
        position: {
          lat: 43.5552292,
          lng: 1.466348499999981
        }
      },
    ],
    selected: null
  },
  mutations: {
    deselectAll(state) {
      state.selected = null;
    },
    selectBike(state, index) {
      state.selected = index;
    }
  }, 
  actions: {
    deselectAll({ commit }) {
      console.log('Deselect triggered')
      commit('deselectAll')
    },
    selectBike({commit, state}, bike) {
      console.log('Select bike n. ' + state.bikes.indexOf(bike))
      commit('selectBike', state.bikes.indexOf(bike))
    }
  },
  getters: {
    selectedBike(state) {
      return state.bikes[state.selected] || null
    }
  }
}