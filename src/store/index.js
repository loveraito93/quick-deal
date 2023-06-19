import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    taskList: []
  },
  getters: {},
  mutations: {
    addTask(state, data) {
      state.taskList.push(data);
    },
    removeTask(state, data) {
      state.taskList = state.taskList.filter((item) => item.id !== data.id);
    },

    editTask(state, [data, id]) {
      state.taskList = state.taskList.map((x) => {
        if (x.id === id) {
          return {
            id: id,
            text: data
          };
        }
        return x;
      });
    },

    changeTaskFromStorage(state, data) {
      state.taskList = data;
    }
  },
  actions: {},
  modules: {}
});
