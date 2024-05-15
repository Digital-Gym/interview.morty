<script setup>
defineProps(['name', 'status', 'img', 'species', 'location', 'origin'])

const statuses = {
    Alive: "green",
    Dead: "red",
    Unknown: ''
}

</script>

<template>
    <div class="card">
        <div class="img-container">
            <img :src="img" alt="img">
        </div>
        <div class="right">
            <div class="name">
                <h2>{{ name }}</h2>
                <div class="subtitle">
                    <div class="circle" :class="statuses[status]"></div>
                    <h4>{{ status }} - {{ species }}</h4>
                </div>
            </div>

            <div>
                <p class="key">Last know location:</p>
                <p class="value">{{ location }}</p>
            </div>

            <div>
                <p class="key">First seen in:</p>
                <p class="value">{{ origin }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card{
    width: 35rem;
    height: 14rem;
    border: transparent;
    border-radius: 15px;
    overflow: hidden;
    display: flex;
    background-color: var(--card-back);
}

.card:hover{
    transform: scale(1.05);
    transition: all 1s ease;
}

.img-container{
    width: 40%;
    overflow: hidden;
}

.img-container img{
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.right{
    padding: 1em;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.right * {
    margin: 0;
    color: var(--text-color)
}

.name h2{
    margin-bottom: 3px;
}

.circle{
    width: 10px;
    height: 10px;
    background-color: #9E9E9E;
    border: transparent;
    border-radius: 50%;
    margin-right: 5px;
}

.red{
    background-color: #D63D2E;
}

.green{
    background-color: #55CC44;
}

.subtitle{
    display: flex;
    align-items: center;
}

.key{
    color: #9E9E9E;
    font-size: 1rem;
    margin-bottom: 3px;
}

.value{
    font-size: 1.1rem;
}

.value:hover, .name h2:hover{
    color: darkorange;
}
</style>