<script setup lang="ts">
import { useRoute } from "vue-router";
const file_path = useRoute().params.slug;
</script>

<template>
  <main>
    <h1>Put lots of cards here!</h1>
    <p>Loaded from {{ file_path }}:</p>
    <div>{data}</div>
  </main>
</template>
