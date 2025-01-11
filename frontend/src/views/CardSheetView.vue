<script setup lang="ts">
import CardSheet from "@/components/CardSheet.vue";
import CardFilterControls from "@/components/CardFilterControls.vue";

defineProps<{ category: string }>();
</script>

<template>
  <main>
    <Suspense>
      <CardSheet :category="category"></CardSheet>
      <template #fallback></template>
    </Suspense>
  </main>
  <aside>
    <CardFilterControls></CardFilterControls>
  </aside>
</template>
<style scoped lang="postcss">
main {
  grid-area: main;
}

aside {
  grid-area: sidebar;
}

@media print {
  aside {
    display: none;
  }
}
</style>