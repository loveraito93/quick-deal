<template>
  <div class="add-task">
    <div class="add-task__form">
      <task-input
        :placeholder="'Введите задачу...'"
        :value="createTaskValue"
        @updateValue="updateValue"
      />
      <p class="form__action" @click="clearInput">Очистить</p>
      <p class="form__action" @click="addTask">Добавить</p>
    </div>
  </div>
</template>

<script>
import TaskInput from "./UI/TaskInput.vue";
export default {
  components: { TaskInput },

  data() {
    return {
      createTaskValue: ""
    };
  },

  methods: {
    updateValue(event) {
      this.createTaskValue = event;
    },

    addTask() {
      const randomId = Math.floor(Math.random() * 1000_000_000);
      const newTask = {
        text: this.createTaskValue,
        id: randomId
      };
      this.createTaskValue = "";
      this.$store.commit("addTask", newTask);
      localStorage.setItem("list", JSON.stringify(this.$store.state.taskList));
    },

    clearInput() {
      this.createTaskValue = "";
    }
  },

  mounted() {
    document.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        this.addTask();
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.add-task {
  display: flex;
  justify-content: center;
}

.add-task__form {
  display: flex;
  gap: 30px;
  align-items: center;
}

.form__action {
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.5s ease;
  &:hover {
    color: rgba(4, 200, 239, 0.647);
    transition: color 0.5s ease;
  }
}
</style>