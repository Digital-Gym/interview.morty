<script setup>
import {ref, onMounted} from 'vue'
import { getCharacters } from '@/api';

import MortyCard from './MortyCard.vue';

const characters = ref(null)

onMounted(async ()=>{
    let data = await getCharacters()
    if(data){
        characters.value = data.results
    }
})
</script>

<template>
    <h2>sdads</h2>
    <div class="cards">
        <MortyCard 
            v-for="card in characters" 
            :key="card.id"
            :name="card.name"
            :status="card.status"
            :img="card.image"
            :species="card.species"
            :location="card.location.name"
            :origin="card.origin.name"
        />
    </div>
</template>

<style scoped>
.cards{
    width:70%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap:1em;
}
</style>