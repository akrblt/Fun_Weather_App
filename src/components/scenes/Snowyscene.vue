<script setup>
import vue3lottie, { Vue3Lottie } from 'vue3-lottie';
import snowy_homme from '@/assets/animations/snowy_homme'
import snowy_man from '@/assets/animations/snowy_man.json'
import snowy_snow from '@/assets/animations/snowy_snow.json'
</script>

<template>
    <div class="lottie-canvas snowy">
        <div class="layer homme">
            <Vue3Lottie :animation-data="snowy_man" :height="150" width="80" />

        </div>
        <div class="layer man">
            <Vue3Lottie :animation-data="snowy_man" :height="150" width="80" />

        </div>
        <div class="layer snow">
            <Vue3Lottie :animation-data="snowy_snow" :height="150" width="80" />

        </div>
        <div class="layer snow2">
            <Vue3Lottie :animation-data="snowy_snow" :height="150" width="80" />

        </div>
    </div>

</template>

<style scoped>

.lottie-canvas {
    position:absolute; inset: 0; pointer-events: none;
}
.layer {
    position: absolute;
}
.snow{
    top:5%; left: 5%;
}
.snow2{
    top: 5%; left: 60%;
}
.homme {
    top: 60%; left: 10%;
}
.man {
    top: 60%; left: 60%;
}

</style>