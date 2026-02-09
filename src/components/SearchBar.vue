


<template>
    <div class="barre-recherche-container">
        <div class="champ-saisie-groupe">
            <span class="icone-loupe">🔍</span>
            <input 
            type="text"
            v-model="villeSaisie"
            placeholder="Entrez le nom de la ville... "
            @keyup.enter="emttreRecerche"
            />
            <button @click="emttreRecerche" class="bouton-chercher" >
                CHERCHER
            </button>
        </div>
    </div>


</template>

<script setup>

//local storage
const villeSaisie=ref('');

// emit enfant vers parent
const emit =defineEmits(['chercher']);

const emttreRecerche = ()=>{
    if (villeSaisie.value.trim() !== ''){
        emit('chercher',villeSaisie.value)
    }
};

</script>

<style scoped>

.barre-recherche-container {
    margin : 20 px 0;

}




</style>