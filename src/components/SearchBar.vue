


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
import {ref} from 'vue';

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

.champ-saisie-groupe {
    display: flex;
    align-items: center;
    border: 3px solid black;
    background-color: white;
    padding: 0;
    height: 60px;
}

.icone-loupe {
    padding: 0 15px;
    font-size: 1.2rem;
}

input {
    flex-grow: 1;
    border: none;
    outline: none;
    font-size:  1.1rem;
    font-family: Arial, sans-serif;
}

.bouton-chercher {
    background-color: black;
    color: white;
    border: none;
    height: 100%;
    padding: 0 30px;
    cursor: pointer;
    font-weight: bold;
    font-size: 1rem;
    transition: black 0.2s;

}

.bouton-chercher:hover {
    background-color: #333;
}







</style>