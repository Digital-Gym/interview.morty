<script setup>
import TheCardField from "@/components/TheCardField.vue"
</script>

<template>
  <main>
    <img src="/logo.webp" alt="logo" class="logo">
    <TheCardField />
  </main>

  <footer>
    <small>Made with love by Bobomurod🖤</small>
  </footer>
</template>

<style scoped>
main, footer{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

main{
  flex-direction: column;
}

footer{
  margin-top: 15px;
  color: var(--text-color);
}

.logo{
  width: 450px;
}
</style>
