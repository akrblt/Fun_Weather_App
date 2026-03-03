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

        <div class="layer sun">
            <Vue3Lottie :animation-data="cloudly_sun" :height="150" width="80"/>

        </div>
        <div class="layer dog">
            <Vue3Lottie :animation-data="cloudly_dog" :height="150" width="80" />

        </div>
        <div class="layer man">
            <Vue3Lottie :animation-data="cloudly_man" :height="150" width="80" />

        </div>
    </div>


</template>

<style scoped>

</style>