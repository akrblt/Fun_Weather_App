<script setup>
import vue3lottie, { Vue3Lottie } from 'vue3-lottie';
import windy_flag from '../../assets/animations/windy_flag.json'
import windy_person from '../../assets/animations/windy_person.json'
import windy_souffle from '../../assets/animations/windy_souffle.json'
</script>

<template>

<div class="lottie-canvas windy">
    <div class="layer wind">
        <Vue3Lottie :animation-data="windy_souffle" :height="150" width="80" />
        <Vue3Lottie :animation-data="windy_souffle" :height="150" width="80" />
        <Vue3Lottie :animation-data="windy_souffle" :height="150" width="80" />
    </div>
    <div class="layer person">
        <Vue3Lottie :animation-data="windy_person" :height="150" width="80" />
        
    </div>
    <div class="layer person1">
        <Vue3Lottie :animation-data="windy_person" :height="150" width="80" />
       
    </div>
    <div class="layer flag">
        <Vue3Lottie :animation-data="windy_flag" :width="150" height="80"/>
        <Vue3Lottie :animation-data="windy_flag" :width="150" height="80"/>
        <Vue3Lottie :animation-data="windy_flag" :width="150" height="80"/>
    </div>
</div>

</template>

<style scoped>
.lottie-canvas {
    position: absolute; inset: 0; pointer-events: none;
}

.layer {
    position: absolute;
}
.wind{
top: 50px; left: 10px;
}
.person {
    top: 60%; left: 25%;

}
.person1 {
    top: 25%; left: 57%;

}
.flag {
    top: 40px; left: 90%; transform: translateX(-60%);

}

</style>