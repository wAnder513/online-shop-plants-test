<template>
  <div class="app_wrapper">
    <router-view />
  </div>
</template>

<script>

export default {
  components: {
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}

.app_wrapper {
  max-width: 1200px;
  padding: 0 8px;
  background: #E5E5E5;
}
</style>
