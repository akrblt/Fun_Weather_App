<script setup>

</script>

<template>
  <div class="app-container">
    <router-view />
  </div>


</template>

<style>
:root {
  font-family: Inter , system-ui, Avenir,Helvetica,Arial, sans-serif;
  background-color: #ffffff;
  color: #000000;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

#app {
  width: 100%;
  margin: 0 auto;
  text-align: center;
}
.app-container {
  width: 100%;
}
</style>