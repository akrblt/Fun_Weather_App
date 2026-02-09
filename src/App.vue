<script setup>
import HelloWeather from './components/HelloWeather.vue';
import SearchBar from './components/SearchBar.vue';

</script>

<template>
  <div>
    
      <img src="../src/assets/img/sun.webp" class="logo" alt="Vite logo" />
    
    
      
  </div>
  <HelloWeather msg="Bienvenue Fun Weather" />
  <SearchBar/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
