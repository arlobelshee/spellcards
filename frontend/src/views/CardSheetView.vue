<script setup lang="ts">
import { useRoute } from "vue-router";
import { defineProps } from "vue";
import all_spells from "@/assets/all_spells.json"

const props = defineProps<{ category: string }>();
const file_path = `@/assets/${props.category}/${useRoute().params.slug}.json`;
const sheet_data = 'await import(file_path)';
</script>

<template>
  <main>
    <h1>Put lots of cards here!</h1>
    <p>Loaded from {{ file_path }}:</p>
    <div>{{ JSON.stringify(sheet_data) }}</div>
    <p>All spells:</p>
    <div>{{ JSON.stringify(all_spells) }}</div>
  </main>
</template>
