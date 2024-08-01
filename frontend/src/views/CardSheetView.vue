<script setup lang="ts">
import CardSheet from "@/components/CardSheet.vue";

defineProps<{ category: string }>();
</script>

<template>
  <main>
    <Suspense>
      <CardSheet :category="category"></CardSheet>
      <template #fallback></template>
    </Suspense>
  </main>
</template>
