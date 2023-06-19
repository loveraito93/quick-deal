<template>
  <input
    type="text"
    class="task-input"
    :value="value"
    @input="update"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  },

  methods: {
    update(event) {
      this.$emit("updateValue", event.target.value);
    }
  }
};
</script>

<style lang="scss" scoped>
.task-input {
  outline: none;
  background: none;
  height: 50px;
  width: 500px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  color: white;
  padding-left: 20px;
  border-radius: 10px;
  transition: border-color 1s ease;
  &::placeholder {
    font-style: italic;
    color: rgba(255, 255, 255, 0.5);
  }
  &:focus {
    border-color: rgba(4, 200, 239, 0.6);
    transition: border-color 1s ease;
  }
}
</style>