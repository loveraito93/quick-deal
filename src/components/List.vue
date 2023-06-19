<template>
  <div class="list">
    <h1 style="align-self: center">Список задач:</h1>

    <transition-group name="list" class="group">
      <list-item
        v-for="(item, index) in $store.state.taskList"
        :index="index"
        :item="item"
        :key="item.id"
      />
    </transition-group>
  </div>
</template>

<script>
import ListItem from "./ListItem.vue";
export default {
  components: { ListItem }
};
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;
}

.group {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transition: all 0.5s ease;
}
</style>