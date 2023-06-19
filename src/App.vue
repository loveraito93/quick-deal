<template>
  <div id="app">
    <navigation />
    <router-view class="router" />
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
export default {
  components: { Navigation },

  created() {
    if (localStorage.getItem("list") !== null) {
      this.$store.commit(
        "changeTaskFromStorage",
        JSON.parse(localStorage.getItem("list"))
      );
    }
  },

  mounted() {
    this.$store.watch(
      (state) => state.taskList,
      (value) => {
        localStorage.setItem("list", JSON.stringify(value));
      }
    );
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: white;
}

h1 {
  font-size: 32px;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.507);
}

a {
  text-decoration: none;
}

.router {
  flex-grow: 1;
  height: inherit;
}
</style>
