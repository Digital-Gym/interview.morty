<script setup>
import {ref, onMounted, computed} from 'vue'
import { getCharacters } from '@/api';

import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';

import MortyCard from './MortyCard.vue';

const characters = ref(null)
const info = ref(null)
const route = useRoute()
const router = useRouter()
const page = ref(1)

const handleNext = async () => {
    page.value += 1
    await fetchAndWrite()
}

const handlePrev = async () => {
    page.value -= 1
    await fetchAndWrite()
}

const fetchAndWrite = async () =>{
    let data = await getCharacters(page.value)
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


onMounted(async ()=>{
    await fetchAndWrite()
})
</script>

<template>
    <div class="paginator">
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

.paginator{
    display: flex;
    margin-bottom: 20px;
}
.nums{
    display: flex;
    margin-left: 3px;
    margin-right: 3px;
}
</style>