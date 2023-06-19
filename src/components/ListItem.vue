<template>
  <div class="list-item" :class="{ 'edit-open': editStatus }">
    <div class="item__info">
      <div class="info__text">
        <p>{{ `${index + 1}.` }}</p>
        <p>{{ item.text }}</p>
      </div>
      <div class="info__action" v-show="!editStatus">
        <p @click="editStatus = !editStatus">Ред.</p>
        <p @click="$store.commit('removeTask', item)">Удалить</p>
      </div>
    </div>

    <div class="item__edit" v-if="editStatus">
      <task-input
        :placeholder="'Измените...'"
        :value="currentValue"
        @updateValue="updateValue"
      />
      <div class="edit__action">
        <p @click="editValue">Изменить</p>
        <p @click="editStatus = false">Отмена</p>
      </div>
    </div>
  </div>
</template>

<script>
import TaskInput from "./UI/TaskInput.vue";
export default {
  components: { TaskInput },
  props: {
    item: {
      type: Object,
      required: true
    },
    index: Number
  },

  data() {
    return {
      editStatus: false,
      currentValue: ""
    };
  },

  methods: {
    editValue() {
      this.$store.commit("editTask", [this.currentValue, this.item.id]);
      this.editStatus = false;
    },

    updateValue(event) {
      this.currentValue = event;
    }
  },

  mounted() {
    this.currentValue = this.item.text;
  }
};
</script>

<style lang="scss" scoped>
.list-item {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 1000px;
  align-self: center;
  height: 60px;
  padding: 20px;
  border: 2px solid rgba(255, 255, 255, 0.6);
  transition: all 1s ease;
  overflow-y: hidden;
  p {
    font-weight: 500;
  }
}

.edit-open {
  border-color: rgba(4, 200, 239, 0.6);
  height: 160px;
  transition: all 1s ease;
}

.item__info {
  display: flex;
  justify-content: space-between;
}

.info__text {
  display: flex;
  gap: 10px;
  p:nth-child(2) {
    color: rgba(4, 200, 239, 0.6);
  }
}

.info__action {
  display: flex;
  gap: 40px;
  transition: color 0.5s ease;
}

.item__edit {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.edit__action {
  display: flex;
  gap: 20px;
  transition: color 0.5s ease;
}

.info__action,
.edit__action {
  p:hover {
    cursor: pointer;
    color: rgba(4, 200, 239, 0.6);
    transition: color 0.5s ease;
  }
}
</style>