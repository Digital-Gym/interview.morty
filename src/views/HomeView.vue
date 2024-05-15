<script setup>
import TheCardField from "@/components/TheCardField.vue"
</script>

<template>
  <main>
    <img src="/logo.webp" alt="logo" class="logo">
    <TheCardField />
  </main>
</template>

<style scoped>
main{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.logo{
  width: 450px;
}
</style>
