import Vue from 'vue';
import Vuex from 'vuex';
import EventService from '@/plugins/EventService.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      id: 'abc123',
      name: 'Irene',
    },
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community',
    ],
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false },
      { id: 3, text: '...', done: true },
      { id: 4, text: '...', done: false },
    ],
    events: [
    //  { id: 1, text: '...', organizer: '...' },
    //  { id: 2, text: '...', organizer: '...' },
    //  { id: 3, text: '...', organizer: '...' },
    //  { id: 4, text: '...', organizer: '...' },
    ],
    count: 0,
    newEvents: [],
    eventsTotal: 0,
    event: {},
  },
  mutations: {
    INCREMENT_COUNT(state) {
      state.count += 1;
      console.log(state.count);
    },
    ADD_EVENT(state, event) {
      state.events.push(event)
    },
    SET_EVENTS(state, events) {
      state.events = events
    },
    SET_EVENTS_TOTAL(state, eventsTotal) {
      state.eventsTotal = eventsTotal
    },
    SET_EVENT(state, event) {
      state.event = event
    }
  },
  actions: {
    fetchEvents({ commit }, { perPage, page }) {
      EventService.getEvents(perPage, page)
        .then((response) => {
          console.log('Total events are ' + response.headers['x-total-count']);
          commit(
            'SET_EVENTS_TOTAL',
            parseInt(response.headers['x-total-count'])
          );
          commit('SET_EVENTS', response.data);
        })
        .catch((error) => {
          console.log('There was an error:', error.response);
        });
    },
    fetchEvent({ commit, getters }, id) {
        console.log(id);


      var event = getters.getEventById(id)

      if (event) {
        // If we do, set the event
       commit('SET_EVENT', event)
      } else {
        EventService.getEvent(id) // <--- Send the prop id to our EventService
          .then((response) => {
            commit('SET_EVENT', response.data);
          })
          .catch((error) => {
            console.log('There was an error:', error.response);
          });
      }
    },
    createEvent({ commit }, payload) {
      return EventService.postEvent(payload).then(() => {
        commit('ADD_EVENT', payload.data);
      });
    },
    updateCount({ state, commit }, payload) {
      if (state.user) {
        commit('INCREMENT_COUNT', payload);
      }
    },
  },
  getters: {
    catLength: (state) => {
      return state.categories.length;
    },
    doneTodos: (state) => {
      return state.todos.filter((todo) => todo.done);
    },
    activeTodosCount: (state) => {
      return state.todos.filter((todo) => !todo.done).length;
    },
    getEventById: state => id => {
        console.log(state.events.find(event => event.id === id));

      return state.events.find(event => event.id === id)
    }
  },
  modules: {},
});
