<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainNav from './components/MainNav.vue'
</script>

<template>
  <MainNav class="header" />
  <RouterView class="main" />
</template>
<style>
#app {
  display: grid;
  margin: 0;
  padding: 0;
  grid: "header header" 70px "main sidebar" auto / auto 20rem;
  min-height: 100vh;
}

.header {
  grid-area: header;
}

.main {
  grid-area: main;
}

.sidebar {
  grid-area: sidebar;
}

@media print {
  #app {
    grid: "main" auto / auto;
  }

  #__vue-devtools-container__ * {
    display: none !important;
  }

  .header {
    display: none;
  }

  .sidebar {
    display: none;
  }
}
</style>
