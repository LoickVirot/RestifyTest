export default {
  state: {
    bikes: [
      {
        id: 132456,
        name: "Yamaha YBR 125",
        position: {
          lat: 43.6051112,
          lng: 1.4426178999999593
        },
        battery: 32,
        alerts: [
          {
            date: new Date('2018-06-22T03:24:00'),
            content: 'Test',
            level: 2
          },
          {
            date: new Date('2018-06-22T03:24:00'),
            content: 'Test alerte 2',
            level: 0
          },
          {
            date: new Date('2018-06-22T03:24:00'),
            content: 'Heeeeyyy',
            level: 1
          },
        ]
      },
      {
        id: 1321546,
        name: "Honda Transalp 600",
        position: {
          lat: 43.64709329999999,
          lng: 1.4254163000000517
        },
        battery: 76,
        alerts: [
          {
            date: new Date('2018-06-22T03:24:00'),
            content: 'Niveau de batterie en dessous de 50%',
            level: 1
          },
          {
            date: new Date('2018-06-22T03:24:00'),
            content: 'Secousses sur la moto',
            level: 1
          },
          {
            date: new Date('2018-06-22T03:24:00'),
            content: 'Déplacement de la moto hors de la zone de sécurité',
            level: 2
          },
          {
            date: new Date('2018-06-22T03:24:00'),
            content: 'Déplacement de la moto hors de la zone de sécurité',
            level: 2
          },
          {
            date: new Date('2018-06-22T03:24:00'),
            content: 'Déplacement de la moto hors de la zone de sécurité',
            level: 2
          },
          {
            date: new Date('2018-06-22T03:24:00'),
            content: 'Déplacement de la moto hors de la zone de sécurité',
            level: 2
          },
          {
            date: new Date('2018-06-22T03:24:00'),
            content: 'Déplacement de la moto hors de la zone de sécurité',
            level: 2
          },
          {
            date: new Date('2018-06-22T03:24:00'),
            content: 'Déplacement de la moto hors de la zone de sécurité',
            level: 2
          },
          {
            date: new Date('2018-06-22T03:24:00'),
            content: 'Déplacement de la moto hors de la zone de sécurité',
            level: 2
          },
          {
            date: new Date('2018-06-22T03:24:00'),
            content: 'Déplacement de la moto hors de la zone de sécurité',
            level: 2
          },
          {
            date: new Date('2018-06-22T03:24:00'),
            content: 'Déplacement de la moto hors de la zone de sécurité',
            level: 2
          },
          {
            date: new Date('2018-06-22T03:24:00'),
            content: 'Déplacement de la moto hors de la zone de sécurité',
            level: 2
          },
          {
            date: new Date('2018-06-22T03:24:00'),
            content: 'Déplacement de la moto hors de la zone de sécurité',
            level: 2
          },
          {
            date: new Date('2018-06-22T03:24:00'),
            content: 'Déplacement de la moto hors de la zone de sécurité',
            level: 2
          },
          {
            date: new Date('2018-06-22T03:24:00'),
            content: 'Déplacement de la moto hors de la zone de sécurité',
            level: 2
          },
          {
            date: new Date('2018-06-22T03:24:00'),
            content: 'Déplacement de la moto hors de la zone de sécurité',
            level: 2
          },
          {
            date: new Date('2018-06-22T03:24:00'),
            content: 'Déplacement de la moto hors de la zone de sécurité',
            level: 2
          },
          {
            date: new Date('2018-06-22T03:24:00'),
            content: 'Déplacement de la moto hors de la zone de sécurité',
            level: 2
          },
          {
            date: new Date('2018-06-22T03:24:00'),
            content: 'Déplacement de la moto hors de la zone de sécurité',
            level: 2
          },
          {
            date: new Date('2018-06-22T03:24:00'),
            content: 'Déplacement de la moto hors de la zone de sécurité',
            level: 2
          },
          {
            date: new Date('2018-06-22T03:24:00'),
            content: 'Déplacement de la moto hors de la zone de sécurité',
            level: 2
          },
          {
            date: new Date('2018-06-22T03:24:00'),
            content: 'Déplacement de la moto hors de la zone de sécurité',
            level: 2
          },
          {
            date: new Date('2018-06-22T03:24:00'),
            content: 'Déplacement de la moto hors de la zone de sécurité',
            level: 2
          },
          {
            date: new Date('2018-06-22T03:24:00'),
            content: 'Déplacement de la moto hors de la zone de sécurité',
            level: 2
          },
          {
            date: new Date('2018-06-22T03:24:00'),
            content: 'Déplacement de la moto hors de la zone de sécurité',
            level: 2
          }
        ]
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
    },
    selectBikeById({commit, state}, bikeId) {
      console.log('Select bike with ID ' + bikeId)
      let bike = state.bikes.filter(bike => {
        return bike.id == bikeId
      })[0];
      commit('selectBike', state.bikes.indexOf(bike));
    }
  },
  getters: {
    selectedBike(state) {
      return state.bikes[state.selected] || null
    }
  }
}