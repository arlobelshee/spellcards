<script setup lang="ts">
import { useRoute } from "vue-router";
import { defineProps } from "vue";
import all_spells from "@/assets/all_spells.json"

const props = defineProps<{ category: string }>();
const sheet_data = await import(`../assets/${props.category}/${useRoute().params.slug}.json`);
</script>

<template>
  <h1>Put lots of cards here!</h1>
  <p>Stuff to show:</p>
  <div>{{ JSON.stringify(sheet_data) }}</div>
  <p>All spells:</p>
  <div>{{ JSON.stringify(all_spells) }}</div>
</template>
