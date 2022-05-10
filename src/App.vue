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

body {
    display: flex;
    flex-direction: column;
    height: 100%; 
}

a {
    text-decoration: none;
}

button {
    border: none;
    cursor: pointer;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  font-weight: 400;
  font-size: 14px;
}

.app_wrapper {
  max-width: 1200px;
  padding: 0 8px;
  background: #E5E5E5;
}

.title-category {
    font-weight: bold;
    font-size: 18px;
    color: #111827;
}

.link-see-all {
    color: #6BA91A;
    font-size: 16px;
    font-weight: bold;
}

.link-see-all:focus,
.link-see-all:hover {
    color: #5b9016;
}


</style>
