<script setup>
import {ref} from 'vue';
import { useRouter } from 'vue-router';
import SearchBar from '../components/SearchBar.vue';
const router=useRouter();
const listeSuggestions=ref([
    'Paris','London','Oslo','chicago','Tokyo','Istanbul','New York','Berlin'
]);

const allerAlaVille =(nomVille)=> {
    router.push({
        name:'resultat',
        params:{ville:nomVille}
    });
};

</script>



<template>
    <div class="vue-accueil">
        <header class="entete-app">
            <div class="boite-logo">
                <span class="icone-soleil">☀️</span>
            </div>
            <h1 class="titre-principal">WEATHER APP</h1>
        </header>
        <p class="sous-titre">Recherchez la météo de votre ville</p>
        <SearchBar @chercher="allerAlaVille" />

        <section class="section-suggestions">
            <p class="label-suggestions">VILLES SUGGéRéES : </p>
            <div class="grille-suggestion">
                <button
                v-for="ville in listeSuggestions"
                :key="ville"
                @click="allerAlaVille(ville)"
                class="bouton-suggestion"
                >
            <span class="pin">📍</span> {{ ville }}
            </button>
            </div>
        </section>

        <footer class="pied-de-page">
            <p>Weather App</p>

        </footer>

    </div>
</template>



<style scoped>
.vue-accueil {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
  font-family: Arial, sans-serif;
}

.boite-logo {
  border: 3px solid black;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  margin-bottom: 10px;
}

.titre-principal {
  font-size: 2.5rem;
  font-weight: bold;
  letter-spacing: 2px;
  border-bottom: 4px solid black;
  display: inline-block;
  padding-bottom: 5px;
  margin-bottom: 20px;
}

.sous-titre {
  color: #555;
  margin-bottom: 30px;
}

.section-suggestions {
  border: 2px solid black;
  padding: 20px;
  margin-top: 30px;
  text-align: left;
}

.label-suggestions {
  font-weight: bold;
  font-size: 0.9rem;
  margin-bottom: 15px;
  text-transform: uppercase;
}

.grille-suggestions {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 sütunlu yapı */
  gap: 15px;
}

.bouton-suggestion {
  background: white;
  border: 2px solid black;
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  transition: transform 0.1s;
}

.bouton-suggestion:hover {
  background-color: #f0f0f0;
  transform: translateY(-2px);
}

.pied-de-page {
  margin-top: 50px;
  font-size: 0.8rem;
  color: #888;
}
</style>