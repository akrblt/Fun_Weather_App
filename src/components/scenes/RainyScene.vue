<script setup>
// Note: If Vue3Lottie is registered globally in main.js, 
// you can remove the import line below.
import { Vue3Lottie } from 'vue3-lottie'
import rainyRainJSON from '../../assets/animations/rainy_rain.json'
import rainyRunJSON from '../../assets/animations/rainy_running.json'
import rainyVomanJSON from '../../assets/animations/rainy_voman.json'
</script>

<template>
  <div class="lottie-canvas rainy-atmosphere">
    <div class="layer-full rain-layer">
      <Vue3Lottie :animationData="rainyRainJSON" :speed="1.2" />
    </div>

    <div class="layer clothes-layer">
      <Vue3Lottie :animationData="rainyVomanJSON" :height="200" />
    </div>

    <div class="layer runner-layer">
      <Vue3Lottie :animationData="rainyRunJSON" :height="220" />
    </div>
  </div>
</template>

<style scoped>
.lottie-canvas {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.layer { position: absolute; }
.layer-full { width: 100%; height: 100%; }

.rain-layer {
  opacity: 0.7;
  z-index: 1;
}

.clothes-layer {
  bottom: 80px;
  left: 10%;
  transform: translateX(-50%);
  width: 350px;
  z-index: 2;
}
.clothes-layer :deep(div) {
  background-color: transparent !important; 
}

.runner-layer {
  bottom: -20px;
  right: 15%;
  width: 200px;
  z-index: 3;
}

.rainy-atmosphere {
  background: rgba(0, 0, 0, 0.1);
  filter: saturate(0.8);
}
</style>