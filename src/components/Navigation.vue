<template>
  <div class="navigation">
    <router-link to="/">
      <p class="navigation__title">Quick Deal</p>
    </router-link>

    <router-link to="/task-list">
      <p class="links__item">Список задач</p>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navigation {
  width: 100%;
  height: 50px;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
}

.navigation__title {
  font-size: 28px;
  font-weight: 700;
  font-style: italic;
  color: rgba(4, 200, 239, 0.6);
}

.links__item {
  font-size: 20px;
  font-weight: 500;
  transition: color 0.5s ease;
  &:hover {
    color: rgba(4, 200, 239, 0.6);
    transition: color 0.5s ease;
  }
}
</style>