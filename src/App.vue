<template>

  <div class="pagina">

    <HeaderComponent />

    <RouterView />

    <FooterComponent />

  </div>

</template>

<script setup lang="ts">

import HeaderComponent from "./components/HeaderComponent.vue"
import FooterComponent from "./components/FooterComponent.vue"

</script>

<style>

.pagina {
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  padding-top: 140px;
}

@media (max-width: 900px) {

  .pagina {
    padding-top: 170px;
  }

}

@media (max-width: 500px) {

  .pagina {
    padding-top: 220px;
  }

}
</style>