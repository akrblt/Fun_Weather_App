<script setup>
import vue3lottie, { Vue3Lottie } from 'vue3-lottie';
import cloudly_cloud from '@/assets/animations/cloudly_cloud.json'
import cloudly_sun from '@/assets/animations/cloudly_sun.json'
import cloudly_dog from '@/assets/animations/cloudly_dog.json'
import cloudly_man from '@/assets/animations/cloudly_man.json'
</script>

<template>

    <div class="lottie-canvas cloudly">

        <div class="layer cloud">
            <Vue3Lottie :animation-data="cloudly_cloud" :height="150" width="80"  />

        </div>

        <div class="layer cloud2">
            <Vue3Lottie :animation-data="cloudly_cloud" :height="150" width="80"/>

        </div>
        <div class="layer man2">
            <Vue3Lottie :animation-data="cloudly_man" :height="150" width="80" />

        </div>
        <div class="layer man">
            <Vue3Lottie :animation-data="cloudly_man" :height="150" width="80" />

        </div>
    </div>


</template>


<style scoped>
.lottie-canvas {
    position:absolute; inset: 0; pointer-events: none; z-index: 1;
}
.layer {
    position: absolute;
}
.cloud2 {
    top: 5%; right: 15%; z-index: 10;
}

.cloud{
    top: 5%; left: 15%; z-index: 10;
}

.man2 {
    top: 60%; left: 5%; z-index: 40;
}
.man {
    top: 60%; right: 5%; z-index: 30;
}

</style>