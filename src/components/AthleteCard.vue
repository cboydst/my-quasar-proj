<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<template>
  <div>
    <q-card class="player-card">
      <q-card-section>
        <div class="text-h6">{{ athlete.Name }}</div>
      </q-card-section>
      <q-card-section>
        <div class="text-h6">{{ athlete.Jump_Disc }}</div>
      </q-card-section>
      <q-card-section v-for="(value, key) in athlete.Personality" :key="key">
        <div class="text-h6">{{ value }}</div>
      </q-card-section>
      <q-card-section>
        <div class="text-h6">{{ athlete.Handling }}</div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
//access props from parent component
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  athlete: Object,
  trait: String,
});

onMounted(() => {
  console.log('Hello');
});
</script>
