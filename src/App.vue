<script setup>
import { RouterLink, RouterView } from "vue-router";
import Footer from "./components/Footer.vue";
import NavBar from "./components/NavBar.vue"

</script>

<template>
  <body>
    <header>
      <NavBar />
    </header>

    <main>
      <RouterView />
    </main>

    <footer>
      <Footer />
    </footer>
  </body>
</template>

<style scoped>

body {
  background-color: white;
  padding: 0%;
  margin: 0%;
}

</style>
