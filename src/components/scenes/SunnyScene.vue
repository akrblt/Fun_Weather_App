<script setup>
import { Vue3Lottie } from 'vue3-lottie'
import sunJson from '../../assets/animations/sun_sun.json'
import sunKids from '../../assets/animations/sun_kids_play.json'
import sunButterfly from '../../assets/animations/sun_butterfly.json'
</script>

<template>
  <div class="lottie-canvas">
    <div class="layer sun">
      <Vue3Lottie :animationData="sunJson" :height="150" :width="150" />
    </div>
    <div class="layer butterfly">
      <Vue3Lottie :animationData="sunButterfly" :height="100" :width="80" />
      <Vue3Lottie :animationData="sunButterfly" :height="100" :width="80" />
      <Vue3Lottie :animationData="sunButterfly" :height="100" :width="80" />
      
    </div>
    <div class="layer kids">
      <Vue3Lottie :animationData="sunKids" :height="300" :width="300" />
    </div>
  </div>
</template>

<style scoped>
.lottie-canvas { position: absolute; inset: 0; pointer-events: none; }
.layer { position: absolute; }
.sun { top: 0%; right: 20px; }
.butterfly { top: 100px; left: 15%; }
.kids { bottom: -60px; left: 80%; transform: translateX(-50%); }
</style>