<template>
  <div class="task-list">
    <add-task />
    <list />
  </div>
</template>

<script>
import TaskInput from "@/components/UI/TaskInput.vue";
import AddTask from "@/components/AddTask.vue";
import List from "@/components/List.vue";
export default {
  components: { TaskInput, AddTask, List }
};
</script>

<style lang="scss" scoped>
.task-list {
  display: flex;
  flex-direction: column;
  padding: 50px;
  gap: 50px;
}
</style>