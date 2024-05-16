<script setup>
import {ref, onMounted, computed} from 'vue'
import { getCharacters } from '@/api';

import MortyCard from './MortyCard.vue';

const characters = ref(null)
const info = ref(null)
const page = ref(1)
const nameQuery = ref()
const statusQuery = ref()

const handleNext = async () => {
    page.value += 1
    await fetchAndWrite()
}

const handlePrev = async () => {
    page.value -= 1
    await fetchAndWrite()
}

const fetchAndWrite = async () =>{
    let data = await getCharacters(page.value, nameQuery.value || '', statusQuery.value || '')
    if(data){
        characters.value = data.results
        info.value = data.info
    }
} 

const canPrev = computed(()=>{
    if (info.value){
        return info.value.prev == null
    }
    return true
})

const canNext = computed(()=>{
    if (info.value){
        return info.value.next == null
    }
    return true
})

const handlePageClick = async (e) =>{
    page.value = e.srcElement._value
    await fetchAndWrite()
}

const handleFilter = async () =>{
    page.value = 1
    await fetchAndWrite()
}


onMounted(async ()=>{
    await fetchAndWrite()
})
</script>

<template>
    <div class="filter-bar">
        <input type="text" placeholder="Name" class="name" v-model="nameQuery">
        <div>
            <label for="status">Choose a status:</label>
            <select name="status" id="status" v-model="statusQuery">
                <option value="alive">Alive</option>
                <option value="dead">Dead</option>
                <option value="unknown">Unknow</option>
            </select>
        </div>
        <input type="button" value="Применить" @click="handleFilter" class="btn">
    </div>
    <div class="paginator" v-if="info">
        <input 
            type="button" 
            value="<<" 
            @click="handlePrev" 
            :disabled="canPrev"
        >
        <div class="nums">    
            <input 
                v-for="n in 5"
                type="button" 
                :value="page+(n-1)"
                :disabled="page+(n-1) > info.pages"
                @click="handlePageClick"
            >
        </div>
        <input type="button" value=">>" @click="handleNext" :disabled="canNext">
    </div>
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

@media only screen and (max-width: 600px) {
    .cards{
        width: 80%;
    }
}

.paginator{
    display: flex;
    margin-bottom: 20px;
}
.nums{
    display: flex;
    margin-left: 3px;
    margin-right: 3px;
}

.filter-bar{
    width: 60%;
    flex-wrap: wrap;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
    margin-bottom: 20px;
    margin-top: 20px;
    gap: 1em;
}

.filter-bar .name, .filter-bar select, .filter-bar .btn{
    background-color: var(--card-back);
    color: var(--text-color)
}

.filter-bar .name{
    width: 200px;
}

.filter-bar *{
    height: 2rem;
}

.filter-bar label{
    margin-right: 5px;
}
</style>