import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    todos : [
      {
        id: 1,
        text: 'Vue.js로 Todo List 만들기(1)',
        done: true
      },
      {
        id: 2,
        text: 'Vue.js로 Todo List 만들기(2)',
        done: true
      },
      {
        id: 3,
        text: 'Vue.js로 Todo List 만들기(3)',
        done: false
      },
      {
        id: 4,
        text: 'Vue.js로 Todo List 만들기(4)',
        done: false
      }
    ],
    nextID : 5
  },
  getters: {
    getUndoneTodo: state => {
      return state.todos.filter(todo => !todo.done).length;
    }
  },
  mutations: {
    CREATE_TODO(state, todoItem) {
      state.todos.push(todoItem);
    },

    TOGGLE_TODO(state, todoItem) {
      state.todos = state.todos.map(todo =>
          todo.id === todoItem.id ? { ...todo, done: !todo.done } : todo
        );
    },

    REMOVE_TODO(state, todoItem) {
	    state.todos = state.todos.filter(todo => todo.id !== todoItem.id);
    }
  },
  actions: {
    onSubmit({commit}, todoItem) {
      commit('CREATE_TODO', todoItem)
    },
    onToggle({commit}, todoItem) {
      commit('TOGGLE_TODO', todoItem)
    },
    onRemove({commit}, todoItem) {
      commit('REMOVE_TODO', todoItem)
    }
  }
});